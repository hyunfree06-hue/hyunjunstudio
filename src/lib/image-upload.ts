"use client";

import imageCompression from "browser-image-compression";
import { createClient } from "@/lib/supabase/client";
import { createPortfolioUploadUrl } from "@/app/actions/portfolio";

const MAX_SIZE_MB = 2;
const MAX_WIDTH_OR_HEIGHT = 1920;
const INITIAL_QUALITY = 0.8;
const UPLOAD_TIMEOUT_MS = 60_000;
const SKIP_UNDER_BYTES = 500 * 1024; // 이미 충분히 작으면 압축 스킵

function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  message: string
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
}

/** 원본이 이미 작으면 압축을 건너뜁니다. */
export async function compressImageIfNeeded(file: File): Promise<File> {
  try {
    if (!file.type.startsWith("image/")) return file;

    // 용량·해상도 모두 작으면 스킵
    if (file.size <= SKIP_UNDER_BYTES) {
      try {
        const bitmap = await createImageBitmap(file);
        const maxDim = Math.max(bitmap.width, bitmap.height);
        bitmap.close();
        if (maxDim <= MAX_WIDTH_OR_HEIGHT) return file;
      } catch {
        return file;
      }
    }

    // 2MB 이하 + 1920 이하면 스킵
    if (file.size <= MAX_SIZE_MB * 1024 * 1024) {
      try {
        const bitmap = await createImageBitmap(file);
        const maxDim = Math.max(bitmap.width, bitmap.height);
        bitmap.close();
        if (maxDim <= MAX_WIDTH_OR_HEIGHT) return file;
      } catch {
        // 해상도 확인 실패 시 압축 시도
      }
    }

    const compressed = await imageCompression(file, {
      maxSizeMB: MAX_SIZE_MB,
      maxWidthOrHeight: MAX_WIDTH_OR_HEIGHT,
      useWebWorker: true,
      initialQuality: INITIAL_QUALITY,
      fileType: file.type === "image/png" ? "image/jpeg" : undefined,
    });

    return new File([compressed], file.name.replace(/\.png$/i, ".jpg"), {
      type: compressed.type || "image/jpeg",
      lastModified: Date.now(),
    });
  } catch (err) {
    console.warn("Image compression failed, using original:", err);
    return file;
  }
}

export type UploadResult = { url?: string; error?: string };

/**
 * 관리자 포트폴리오 이미지: Server Action으로 서명 URL만 받고,
 * 파일 본문은 브라우저 → Supabase Storage로 직접 업로드 (413 회피).
 */
export async function uploadPortfolioImageDirect(
  file: File
): Promise<UploadResult> {
  try {
    if (!file.type.startsWith("image/")) {
      return { error: "이미지 파일만 업로드할 수 있습니다" };
    }

    const compressed = await compressImageIfNeeded(file);
    const slot = await createPortfolioUploadUrl(compressed.name);

    if (slot.error || !slot.path || !slot.token) {
      return {
        error: slot.error || "업로드 URL을 만들지 못했습니다",
      };
    }

    const supabase = createClient();
    const uploadPromise = supabase.storage
      .from("portfolio-images")
      .uploadToSignedUrl(slot.path, slot.token, compressed, {
        contentType: compressed.type || "image/jpeg",
        upsert: false,
      });

    const { error } = await withTimeout(
      uploadPromise,
      UPLOAD_TIMEOUT_MS,
      "업로드 시간이 초과되었습니다. 네트워크를 확인하고 다시 시도해 주세요."
    );

    if (error) {
      return { error: error.message };
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("portfolio-images").getPublicUrl(slot.path);

    return { url: publicUrl };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다";
    return { error: message };
  }
}

/**
 * 문의 첨부: anon insert 정책이 있는 버킷으로 브라우저 직접 업로드.
 */
export async function uploadInquiryAttachmentDirect(
  file: File
): Promise<UploadResult> {
  try {
    const toUpload = file.type.startsWith("image/")
      ? await compressImageIfNeeded(file)
      : file;

    const ext =
      toUpload.name.split(".").pop()?.replace(/[^a-zA-Z0-9]/g, "") || "bin";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const supabase = createClient();
    const uploadPromise = supabase.storage
      .from("inquiry-attachments")
      .upload(path, toUpload, {
        contentType: toUpload.type || "application/octet-stream",
        upsert: false,
      });

    const { error } = await withTimeout(
      uploadPromise,
      UPLOAD_TIMEOUT_MS,
      "업로드 시간이 초과되었습니다. 네트워크를 확인하고 다시 시도해 주세요."
    );

    if (error) return { error: error.message };

    const {
      data: { publicUrl },
    } = supabase.storage.from("inquiry-attachments").getPublicUrl(path);

    return { url: publicUrl };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다";
    return { error: message };
  }
}
