import { Suspense } from "react";
import type { Metadata } from "next";
import { getPublishedPortfolios } from "@/lib/portfolio";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { CategoryFilter } from "@/components/portfolio/CategoryFilter";
import { PortfolioReviews } from "@/components/portfolio/PortfolioReviews";
import { SectionLabel } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "웹, 앱, 로고 등 실제 작업 사례와 고객 후기를 확인해 보세요.",
};

type Props = {
  searchParams: { category?: string };
};

export default async function PortfolioPage({ searchParams }: Props) {
  const category = searchParams.category;
  const portfolios = await getPublishedPortfolios(category);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mb-12">
        <SectionLabel>— WORK</SectionLabel>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          포트폴리오
        </h1>
        <p className="mt-4 text-ink-muted">
          지금까지 함께 만든 프로젝트들을 모아봤어요
        </p>
      </div>

      <Suspense fallback={null}>
        <CategoryFilter />
      </Suspense>

      {portfolios.length === 0 ? (
        <div className="mt-16 border border-dashed border-paper-line px-6 py-20 text-center">
          <p className="text-sm tracking-wide text-ink-faint uppercase">
            Empty
          </p>
          <p className="mt-3 font-medium text-ink">
            아직 등록된 작업이 없어요
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            곧 작업 사례를 업데이트할 예정이에요. 문의는 언제든 환영해요.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((p) => (
            <PortfolioCard key={p.id} portfolio={p} />
          ))}
        </div>
      )}

      <PortfolioReviews />
    </div>
  );
}
