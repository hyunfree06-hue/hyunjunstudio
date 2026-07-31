import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
      <Link
        href="/portfolio"
        className="mb-10 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeft strokeWidth={1.5} size={14} />
        목록으로
      </Link>

      <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-paper-line bg-paper-warm">
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

      <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-muted">
        {portfolio.category && (
          <span className="text-[11px] font-medium tracking-wide text-coral uppercase">
            {portfolio.category}
          </span>
        )}
        {portfolio.work_period && (
          <>
            <span className="text-ink-faint">·</span>
            <span className="tabular-nums">{portfolio.work_period}</span>
          </>
        )}
        {portfolio.client_name && (
          <>
            <span className="text-ink-faint">·</span>
            <span>{maskName(portfolio.client_name)}</span>
          </>
        )}
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {portfolio.title}
      </h1>

      {portfolio.tech_stack?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {portfolio.tech_stack.map((tech) => (
            <span
              key={tech}
              className="border border-paper-line px-2.5 py-1 text-xs text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="prose prose-neutral mt-10 max-w-none text-ink-muted prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-coral prose-a:no-underline hover:prose-a:underline">
        <ReactMarkdown>{portfolio.detail_description}</ReactMarkdown>
      </div>

      {portfolio.images?.length > 0 && (
        <div className="mt-14">
          <h2 className="mb-5 text-sm font-medium tracking-[0.15em] text-ink-light uppercase">
            Gallery
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {portfolio.images.map((url, i) => (
              <div
                key={url + i}
                className="relative h-48 w-72 shrink-0 overflow-hidden border border-paper-line bg-paper-warm"
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
        <div className="mt-10">
          <LinkButton href={portfolio.external_link} variant="outline" size="lg">
            라이브 사이트 보기
            <ExternalLink strokeWidth={1.5} size={14} />
          </LinkButton>
        </div>
      )}

      <div className="mt-16 border border-paper-line px-6 py-12 text-center sm:px-10">
        <h2 className="text-xl font-semibold tracking-tight text-ink">
          비슷한 프로젝트 문의하기
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          이런 작업이 필요하시다면 편하게 말씀해 주세요
        </p>
        <LinkButton href="/contact" variant="primary" size="lg" className="mt-6">
          문의하기
        </LinkButton>
      </div>

      {others.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-5 text-sm font-medium tracking-[0.15em] text-ink-light uppercase">
            More Work
          </h2>
          <div className="flex flex-wrap gap-3">
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.id}`}
                className="border border-paper-line px-4 py-3 text-sm text-ink transition-colors hover:border-coral"
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
