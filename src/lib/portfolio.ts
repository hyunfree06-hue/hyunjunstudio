import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Portfolio, Inquiry } from "@/lib/types";

function hasSupabaseConfig() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export async function getPublishedPortfolios(
  category?: string
): Promise<Portfolio[]> {
  if (!hasSupabaseConfig()) return [];

  try {
    const supabase = createClient();
    let query = supabase
      .from("portfolios")
      .select("*")
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (category && category !== "전체") {
      const map: Record<string, string[]> = {
        웹: ["웹 개발", "워드프레스"],
        앱: ["앱/웹 기획", "소프트웨어 개발"],
        로고: ["로고 디자인"],
        기타: ["노션 자동화", "기타"],
      };
      const cats = map[category];
      if (cats) {
        query = query.in("category", cats);
      }
    }

    const { data, error } = await query;
    if (error) {
      console.error("getPublishedPortfolios:", error.message);
      return [];
    }
    return (data as Portfolio[]) || [];
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getPortfolioById(
  id: string
): Promise<Portfolio | null> {
  if (!hasSupabaseConfig()) return null;

  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("portfolios")
      .select("*")
      .eq("id", id)
      .eq("is_published", true)
      .single();

    if (error) return null;
    return data as Portfolio;
  } catch {
    return null;
  }
}

export async function getAllPortfoliosAdmin(): Promise<Portfolio[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("portfolios")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data as Portfolio[]) || [];
}

export async function getAllInquiriesAdmin(): Promise<Inquiry[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data as Inquiry[]) || [];
}
