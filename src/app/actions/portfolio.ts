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

export async function uploadPortfolioImage(
  formData: FormData
): Promise<{ url?: string; error?: string }> {
  await assertAdmin();
  const file = formData.get("file") as File | null;
  if (!file) return { error: "파일이 없어요" };

  const supabase = createAdminClient();
  const ext = file.name.split(".").pop() || "bin";
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from("portfolio-images")
    .upload(path, buffer, { contentType: file.type, upsert: false });

  if (error) return { error: error.message };

  const {
    data: { publicUrl },
  } = supabase.storage.from("portfolio-images").getPublicUrl(path);

  return { url: publicUrl };
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
