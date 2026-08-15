import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PORTFOLIO_ITEMS,
  CATEGORY_ORDER,
  getPortfoliosByCategory,
  type PortfolioCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "웹사이트, SaaS 프로덕트, 브랜드/로고, 리서치 문서까지 프라이머리시스템이 진행한 프로젝트 목록입니다.",
  alternates: { canonical: "/portfolio" },
};

const FILTERS = ["전체", ...CATEGORY_ORDER] as const;

type SearchParams = { category?: string };

export default function PortfolioPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const active = (searchParams.category ?? "전체") as
    | "전체"
    | PortfolioCategory;
  const items = getPortfoliosByCategory(active);

  return (
    <div className="container-max py-20">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-3">Work</p>
          <h1 className="text-h1 text-ink">포트폴리오</h1>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-500">
            런칭한 웹사이트와 프로덕트, 자체 브랜드 워크까지 실제 진행한
            프로젝트를 모아뒀습니다. 각 항목을 클릭하면 상세 페이지에서
            프로젝트 배경과 결과물을 확인할 수 있습니다.
          </p>
        </div>
        <div className="text-[13px] text-ink-500">
          총 {PORTFOLIO_ITEMS.length}개 프로젝트
        </div>
      </div>

      <div className="mb-10 flex flex-wrap gap-2 border-b border-surface-line pb-4">
        {FILTERS.map((f) => {
          const href = f === "전체" ? "/portfolio" : `/portfolio?category=${encodeURIComponent(f)}`;
          const on = active === f;
          return (
            <Link
              key={f}
              href={href}
              className={cn(
                "border px-3 py-1.5 text-[12px] transition-colors",
                on
                  ? "border-ink bg-ink text-white"
                  : "border-surface-line text-ink-600 hover:border-ink hover:text-ink",
              )}
            >
              {f}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-px border border-surface-line bg-surface-line md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/portfolio/${item.slug}`}
            className="group flex flex-col bg-white"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col p-6">
              <p className="font-mono text-[11px] tracking-widest text-ink-400">
                {item.category} · {item.year}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-ink-500">
                {item.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
