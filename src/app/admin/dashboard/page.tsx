import type { Metadata } from "next";
import {
  getAllPortfoliosAdmin,
  getAllInquiriesAdmin,
} from "@/lib/portfolio";
import { DashboardTabs } from "@/components/admin/DashboardTabs";

export const metadata: Metadata = {
  title: "관리자 대시보드",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let portfolios: Awaited<ReturnType<typeof getAllPortfoliosAdmin>> = [];
  let inquiries: Awaited<ReturnType<typeof getAllInquiriesAdmin>> = [];
  let error: string | null = null;

  try {
    [portfolios, inquiries] = await Promise.all([
      getAllPortfoliosAdmin(),
      getAllInquiriesAdmin(),
    ]);
  } catch (e) {
    error =
      e instanceof Error
        ? e.message
        : "Supabase 연결을 확인해 주세요. .env.local 설정을 점검해 보세요.";
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {error && (
        <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          ⚠️ {error}
          <p className="mt-1 text-xs">
            Supabase URL / Service Role Key를 설정하고 마이그레이션 SQL을
            실행하면 정상 동작합니다.
          </p>
        </div>
      )}
      <DashboardTabs portfolios={portfolios} inquiries={inquiries} />
    </div>
  );
}
