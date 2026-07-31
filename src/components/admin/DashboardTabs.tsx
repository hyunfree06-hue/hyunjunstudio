"use client";

import { useState } from "react";
import type { Portfolio, Inquiry } from "@/lib/types";
import { PortfolioManager } from "@/components/admin/PortfolioManager";
import { InquiryManager } from "@/components/admin/InquiryManager";
import { adminLogout } from "@/app/actions/admin";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Tab = "portfolio" | "inquiry";

export function DashboardTabs({
  portfolios,
  inquiries,
}: {
  portfolios: Portfolio[];
  inquiries: Inquiry[];
}) {
  const [tab, setTab] = useState<Tab>("portfolio");
  const newCount = inquiries.filter((i) => i.status === "new").length;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">
          관리자 대시보드
        </h1>
        <form action={adminLogout}>
          <Button type="submit" variant="ghost" size="sm">
            로그아웃
          </Button>
        </form>
      </div>

      <div className="mb-6 flex gap-1 border-b border-paper-line">
        <button
          type="button"
          onClick={() => setTab("portfolio")}
          className={cn(
            "-mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
            tab === "portfolio"
              ? "border-ink text-ink"
              : "border-transparent text-ink-muted hover:text-ink"
          )}
        >
          포트폴리오 관리
        </button>
        <button
          type="button"
          onClick={() => setTab("inquiry")}
          className={cn(
            "-mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
            tab === "inquiry"
              ? "border-ink text-ink"
              : "border-transparent text-ink-muted hover:text-ink"
          )}
        >
          문의 내역
          {newCount > 0 && (
            <span className="ml-1.5 rounded-full bg-coral px-1.5 py-0.5 text-xs text-white tabular-nums">
              {newCount}
            </span>
          )}
        </button>
      </div>

      <div className="border border-paper-line bg-paper p-5 sm:p-6">
        {tab === "portfolio" ? (
          <PortfolioManager portfolios={portfolios} />
        ) : (
          <InquiryManager inquiries={inquiries} />
        )}
      </div>
    </div>
  );
}
