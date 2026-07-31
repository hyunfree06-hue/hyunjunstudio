import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { getPortfolioById, getPublishedPortfolios } from "@/lib/portfolio";
import { maskName } from "@/lib/mask";
import { LinkButton } from "@/components/ui/LinkButton";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const portfolio = await getPortfolioById(params.id);
  if (!portfolio) return { title: "포트폴리오" };
  return {
    title: portfolio.title,
    description: portfolio.preview_description,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const portfolio = await getPortfolioById(params.id);
  if (!portfolio) notFound();

  const others = (await getPublishedPortfolios())
    .filter((p) => p.id !== portfolio.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <Link
        href="/portfolio"
        className="mb-6 inline-flex text-sm font-medium text-ink-muted hover:text-primary"
      >
        ← 목록으로
      </Link>

      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-3xl bg-cream-dark shadow-soft">
        {portfolio.thumbnail_url && (
          <Image
            src={portfolio.thumbnail_url}
            alt={portfolio.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        )}
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        {portfolio.category && (
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary-dark">
            {portfolio.category}
          </span>
        )}
        {portfolio.work_period && (
          <span className="text-sm text-ink-muted">
            📅 {portfolio.work_period}
          </span>
        )}
        {portfolio.client_name && (
          <span className="text-sm text-ink-muted">
            👤 {maskName(portfolio.client_name)}
          </span>
        )}
      </div>

      <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
        {portfolio.title}
      </h1>

      {portfolio.tech_stack?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {portfolio.tech_stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="prose prose-neutral mt-8 max-w-none text-ink-muted prose-headings:text-ink prose-a:text-primary">
        <ReactMarkdown>{portfolio.detail_description}</ReactMarkdown>
      </div>

      {portfolio.images?.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-ink">더 보기</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {portfolio.images.map((url, i) => (
              <div
                key={url + i}
                className="relative h-48 w-72 shrink-0 overflow-hidden rounded-2xl bg-cream-dark"
              >
                <Image
                  src={url}
                  alt={`${portfolio.title} 이미지 ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {portfolio.external_link && (
        <div className="mt-8">
          <LinkButton
            href={portfolio.external_link}
            variant="outline"
            size="lg"
          >
            🔗 라이브 사이트 보기
          </LinkButton>
        </div>
      )}

      <div className="mt-14 rounded-3xl bg-cream-dark/80 px-6 py-10 text-center">
        <h2 className="text-xl font-bold text-ink">
          비슷한 프로젝트 문의하기
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          이런 작업이 필요하시다면 편하게 말씀해 주세요
        </p>
        <LinkButton href="/contact" variant="primary" size="lg" className="mt-5">
          문의하기
        </LinkButton>
      </div>

      {others.length > 0 && (
        <div className="mt-14">
          <h2 className="mb-4 text-lg font-bold text-ink">다른 작업 둘러보기</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.id}`}
                className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-medium text-ink hover:border-primary/40"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
