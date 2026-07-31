"use server";

import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { createAdminClient } from "@/lib/supabase/admin";

const inquirySchema = z.object({
  name: z.string().min(1, "이름을 입력해 주세요"),
  contact: z.string().min(1, "연락처 또는 이메일을 입력해 주세요"),
  message: z.string().min(1, "문의 내용을 입력해 주세요"),
  privacy: z.boolean().refine((v) => v === true, {
    message: "개인정보 수집에 동의해 주세요",
  }),
  attachmentUrls: z.array(z.string()).optional(),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

export async function submitInquiry(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: String(formData.get("name") || "").trim(),
    contact: String(formData.get("contact") || "").trim(),
    message: String(formData.get("message") || "").trim(),
    privacy:
      formData.get("privacy") === "on" || formData.get("privacy") === "true",
    attachmentUrls: String(formData.get("attachmentUrls") || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  };

  const parsed = inquirySchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach((issue) => {
      const key = String(issue.path[0] || "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    });
    return { error: "입력 내용을 확인해 주세요", fieldErrors };
  }

  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !anon) {
      return {
        error:
          "아직 문의 시스템이 연결되지 않았어요. 카톡이나 문자로 문의해 주세요!",
      };
    }

    const supabase = createClient(url, anon);

    const { error } = await supabase.from("inquiries").insert({
      name: parsed.data.name,
      contact: parsed.data.contact,
      message: parsed.data.message,
      attachment_urls: parsed.data.attachmentUrls || [],
      status: "new",
    });

    if (error) {
      console.error(error);
      return { error: "문의 저장에 실패했어요. 잠시 후 다시 시도해 주세요." };
    }

    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "알 수 없는 오류가 발생했어요." };
  }
}

export async function uploadInquiryAttachment(
  formData: FormData
): Promise<{ url?: string; error?: string }> {
  const file = formData.get("file") as File | null;
  if (!file) return { error: "파일이 없어요" };

  try {
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return { error: "업로드 설정이 아직 없어요. 카톡으로 보내주셔도 돼요!" };
    }

    const supabase = createAdminClient();
    const ext = file.name.split(".").pop() || "bin";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    const { error } = await supabase.storage
      .from("inquiry-attachments")
      .upload(path, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (error) return { error: error.message };

    const {
      data: { publicUrl },
    } = supabase.storage.from("inquiry-attachments").getPublicUrl(path);

    return { url: publicUrl };
  } catch (e) {
    console.error(e);
    return { error: "업로드에 실패했어요" };
  }
}
