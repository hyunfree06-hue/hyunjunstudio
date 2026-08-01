"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminAuthenticated } from "@/lib/auth";
import type { InquiryStatus } from "@/lib/types";

async function assertAdmin() {
  const ok = await isAdminAuthenticated();
  if (!ok) throw new Error("Unauthorized");
}

export async function createPortfolio(formData: FormData) {
  await assertAdmin();
  const supabase = createAdminClient();

  const techRaw = String(formData.get("tech_stack") || "");
  const tech_stack = techRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const imagesRaw = String(formData.get("images") || "");
  const images = imagesRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const { error } = await supabase.from("portfolios").insert({
    title: String(formData.get("title") || "").trim(),
    category: String(formData.get("category") || "") || null,
    thumbnail_url: String(formData.get("thumbnail_url") || "").trim(),
    images,
    preview_description: String(formData.get("preview_description") || "").trim(),
    detail_description: String(formData.get("detail_description") || "").trim(),
    client_name: String(formData.get("client_name") || "") || null,
    work_period: String(formData.get("work_period") || "") || null,
    tech_stack,
    external_link: String(formData.get("external_link") || "") || null,
    is_published: formData.get("is_published") === "true",
  });

  if (error) return { error: error.message };
  revalidatePath("/portfolio");
  revalidatePath("/admin/dashboard");
  return { success: true };
}

export async function updatePortfolio(id: string, formData: FormData) {
  await assertAdmin();
  const supabase = createAdminClient();

  const techRaw = String(formData.get("tech_stack") || "");
  const tech_stack = techRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const imagesRaw = String(formData.get("images") || "");
  const images = imagesRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const { error } = await supabase
    .from("portfolios")
    .update({
      title: String(formData.get("title") || "").trim(),
      category: String(formData.get("category") || "") || null,
      thumbnail_url: String(formData.get("thumbnail_url") || "").trim(),
      images,
      preview_description: String(
        formData.get("preview_description") || ""
      ).trim(),
      detail_description: String(
        formData.get("detail_description") || ""
      ).trim(),
      client_name: String(formData.get("client_name") || "") || null,
      work_period: String(formData.get("work_period") || "") || null,
      tech_stack,
      external_link: String(formData.get("external_link") || "") || null,
      is_published: formData.get("is_published") === "true",
    })
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/portfolio");
  revalidatePath(`/portfolio/${id}`);
  revalidatePath("/admin/dashboard");
  return { success: true };
}

export async function deletePortfolio(id: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await supabase.from("portfolios").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/portfolio");
  revalidatePath("/admin/dashboard");
  return { success: true };
}

/**
 * 파일 본문은 받지 않음. 서명된 업로드 URL만 발급 → 클라이언트가 Storage로 직접 업로드.
 * (Server Action bodySizeLimit / 413 회피)
 */
export async function createPortfolioUploadUrl(
  filename: string
): Promise<{ path?: string; token?: string; error?: string }> {
  try {
    await assertAdmin();
    const supabase = createAdminClient();

    const rawExt = filename.split(".").pop() || "jpg";
    const ext = rawExt.replace(/[^a-zA-Z0-9]/g, "") || "jpg";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { data, error } = await supabase.storage
      .from("portfolio-images")
      .createSignedUploadUrl(path);

    if (error) return { error: error.message };
    if (!data?.path || !data?.token) {
      return { error: "서명 업로드 URL을 생성하지 못했습니다" };
    }

    return { path: data.path, token: data.token };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "업로드 URL 생성에 실패했습니다";
    return { error: message };
  }
}

/** @deprecated 파일 본문을 Server Action으로 보내면 413이 납니다. 클라이언트 직접 업로드를 사용하세요. */
export async function uploadPortfolioImage(): Promise<{
  url?: string;
  error?: string;
}> {
  return {
    error:
      "이 업로드 방식은 더 이상 지원되지 않습니다. 페이지를 새로고침한 뒤 다시 시도해 주세요.",
  };
}

export async function updateInquiryStatus(id: string, status: InquiryStatus) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("inquiries")
    .update({ status })
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/admin/dashboard");
  return { success: true };
}
