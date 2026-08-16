import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PORTFOLIO_ITEMS, getPortfolioBySlug } from "@/data/portfolio";
import { SITE } from "@/lib/constants";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getPortfolioBySlug(params.slug);
  if (!item) return { title: "포트폴리오" };

  // summary는 카드용 한 줄이라 meta description으로는 너무 짧다.
  // 상세 설명 앞부분을 붙여 검색결과 스니펫이 잘리지 않을 길이로 만든다.
  const desc = `${item.summary}. ${item.description}`
    .replace(/\s+/g, " ")
    .slice(0, 155)
    .trim();

  return {
    title: `${item.title}`,
    description: desc,
    alternates: { canonical: `/portfolio/${item.slug}` },
    openGraph: {
      title: item.title,
      description: desc,
      url: `/portfolio/${item.slug}`,
      type: "article",
      images: [{ url: item.thumbnail }],
    },
  };
}

export default function PortfolioDetail({ params }: Props) {
  const item = getPortfolioBySlug(params.slug);
  if (!item) notFound();

  const index = PORTFOLIO_ITEMS.findIndex((i) => i.slug === item.slug);
  const prev = PORTFOLIO_ITEMS[(index - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length];
  const next = PORTFOLIO_ITEMS[(index + 1) % PORTFOLIO_ITEMS.length];

  return (
    <article>
      {/* header */}
      <div className="border-b border-surface-line bg-surface-alt">
        <div className="container-max py-14">
          <div className="mb-6 flex items-center gap-3 text-[12px] text-ink-500">
            <Link href="/portfolio" className="hover:text-ink">
              ← 포트폴리오
            </Link>
            <span aria-hidden>/</span>
            <span className="font-mono tracking-widest text-ink-400">
              {item.category} · {item.year}
            </span>
          </div>
          <h1 className="text-h1 text-ink text-balance">{item.title}</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-500">
            {item.summary}
          </p>
        </div>
      </div>

      {/* meta strip */}
      <div className="border-b border-surface-line bg-white">
        <div className="container-max grid gap-8 py-10 md:grid-cols-4">
          <MetaCell label="Client" value={item.client} />
          <MetaCell label="Role" value={item.role.join(" · ")} />
          <MetaCell label="Deliverables" value={item.deliverables.join(" · ")} />
          <MetaCell label="Stack" value={item.stack?.join(" · ") ?? "—"} />
        </div>
        {/* 라이브 사이트가 공개된 프로젝트만 URL 노출 */}
        {item.externalUrl && (
          <div className="border-t border-surface-line">
            <div className="container-max flex flex-wrap items-center justify-between gap-4 py-5">
              <div>
                <p className="eyebrow mb-1">Live site</p>
                <p className="text-[13px] text-ink-500">이 프로젝트는 실제로 공개된 사이트에서 확인하실 수 있습니다.</p>
              </div>
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline rounded-none text-[13px]"
              >
                {item.externalUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
              </a>
            </div>
          </div>
        )}
      </div>

      {/* description */}
      <div className="container-max py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Overview</p>
            <h2 className="text-h2 text-ink">프로젝트 배경</h2>
          </div>
          <p className="text-[15px] leading-8 text-ink-600 text-pretty">
            {item.description}
          </p>
        </div>
      </div>

      {/* case study (대표 프로젝트만) */}
      {item.caseStudy && (
        <div className="border-t border-surface-line bg-surface-alt">
          <div className="container-max py-16 md:py-20">
            <p className="eyebrow mb-10">Case Study</p>
            <div className="grid gap-px border border-surface-line bg-surface-line md:grid-cols-2">
              <CaseStudyCell no="01" label="문제" body={item.caseStudy.problem} />
              <CaseStudyCell no="02" label="요청" body={item.caseStudy.request} />
              <div className="bg-white p-8 md:p-10">
                <p className="font-mono text-[11px] tracking-widest text-ink-400">
                  03
                </p>
                <h3 className="mt-4 text-[13px] font-medium text-ink-500">
                  우리가 한 일
                </h3>
                <ul className="mt-4 grid gap-2">
                  {item.caseStudy.whatWeDid.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 text-[14px] leading-7 text-ink"
                    >
                      <span aria-hidden className="mt-3 h-px w-4 flex-none bg-ink" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <CaseStudyCell no="04" label="결과" body={item.caseStudy.result} />
            </div>
          </div>
        </div>
      )}

      {/* images */}
      <div className="border-t border-surface-line bg-surface-alt">
        <div className="container-max py-16 md:py-20">
          <p className="eyebrow mb-8">Deliverables</p>
          <div className="flex flex-col gap-6">
            {item.images.map((src, i) => (
              <div
                key={src}
                className="relative w-full overflow-hidden border border-surface-line bg-white"
              >
                <Image
                  src={src}
                  alt={`${item.title} 결과물 ${i + 1}`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* next / cta */}
      <div className="border-t border-surface-line bg-white">
        <div className="container-max grid gap-8 py-12 md:grid-cols-3">
          <Link
            href={`/portfolio/${prev.slug}`}
            className="group flex flex-col border border-surface-line p-6 hover:border-ink"
          >
            <span className="font-mono text-[11px] tracking-widest text-ink-400">
              ← 이전 프로젝트
            </span>
            <span className="mt-3 text-sm font-medium text-ink group-hover:underline">
              {prev.title}
            </span>
          </Link>
          <div className="flex flex-col items-center justify-center border border-ink bg-ink p-6 text-center text-white">
            <p className="text-[13px] text-ink-200">비슷한 프로젝트가 필요하세요?</p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              프로젝트 문의하기 →
            </Link>
            <p className="mt-2 text-[11px] text-ink-300">
              평균 응답 30분 이내 · {SITE.phoneDisplay}
            </p>
          </div>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col items-end border border-surface-line p-6 text-right hover:border-ink"
          >
            <span className="font-mono text-[11px] tracking-widest text-ink-400">
              다음 프로젝트 →
            </span>
            <span className="mt-3 text-sm font-medium text-ink group-hover:underline">
              {next.title}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-[14px] text-ink">{value}</p>
    </div>
  );
}

function CaseStudyCell({
  no,
  label,
  body,
}: {
  no: string;
  label: string;
  body: string;
}) {
  return (
    <div className="bg-white p-8 md:p-10">
      <p className="font-mono text-[11px] tracking-widest text-ink-400">{no}</p>
      <h3 className="mt-4 text-[13px] font-medium text-ink-500">{label}</h3>
      <p className="mt-4 text-[15px] leading-7 text-ink">{body}</p>
    </div>
  );
}
