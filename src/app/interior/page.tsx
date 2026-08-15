import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { getPortfolioBySlug } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "인테리어 업체를 위한 브랜드 · 웹 · SEO 파트너",
  description:
    "프라이머리시스템은 인테리어 회사가 아니라, 인테리어 업체가 고객에게 브랜드 · 홈페이지 · 검색 유입까지 함께 제공할 수 있도록 뒤에서 지원하는 외부 디지털 파트너입니다.",
  alternates: { canonical: "/interior" },
  openGraph: {
    title: "인테리어 업체를 위한 브랜드 · 웹 · SEO 파트너 | PRIMARY SYSTEM",
    description:
      "인테리어 업체가 공간 이상의 것을 제공할 수 있도록, 브랜드 · 웹 · 검색 유입을 함께 만드는 디지털 파트너.",
    url: "/interior",
    type: "website",
  },
};

const WHAT_WE_PROVIDE = [
  {
    no: "01",
    title: "브랜드 아이덴티티",
    body: "시공한 공간의 브랜드를 함께 정비합니다. 로고, 매장 사인, 인쇄물까지 실제 공간에 적용 가능한 형태로 설계합니다.",
  },
  {
    no: "02",
    title: "홈페이지 · 랜딩페이지",
    body: "포트폴리오 나열이 아니라 상담 문의로 이어지는 구조의 홈페이지와 랜딩페이지를 만듭니다.",
  },
  {
    no: "03",
    title: "검색 유입 구조 (SEO)",
    body: "지역 · 업종별 검색에서 발견될 수 있도록 페이지 구조를 설계합니다. 상세는 SEO Growth Package를 참고하세요.",
  },
  {
    no: "04",
    title: "디지털 자산 관리",
    body: "제작 이후에도 홈페이지 유지 · 콘텐츠 확장까지 이어서 관리합니다.",
  },
];

export default function InteriorPage() {
  const caseStudy = getPortfolioBySlug("hyungje-jikhwa");

  return (
    <div>
      {/* hero */}
      <div className="border-b border-surface-line bg-surface-alt">
        <div className="container-max py-20">
          <p className="eyebrow mb-4">Partner Program · Interior</p>
          <h1 className="text-display text-ink text-balance">
            인테리어 회사의
            <br className="hidden md:block" />
            외부 디자인 · 웹 · SEO 파트너
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink-500 text-pretty">
            프라이머리시스템은 인테리어 회사가 아닙니다. 인테리어 업체가
            고객에게 공간 이상의 것을 제공할 수 있도록, 브랜드 · 웹 · 검색
            유입까지 뒤에서 함께 만드는 디지털 파트너입니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary rounded-none">
              협업 문의하기 →
            </Link>
            <a
              href={SITE.kakaoOpenChat}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline rounded-none"
            >
              외부 파트너 상담
            </a>
          </div>
        </div>
      </div>

      {/* problem */}
      <div className="container-max py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Why this matters</p>
            <h2 className="text-h1 text-ink">공간 다음이 비어있습니다</h2>
          </div>
          <div className="max-w-xl space-y-5 text-[15px] leading-7 text-ink-600">
            <p>
              인테리어 회사는 카페, 음식점, 학원, 병원, 사무실까지 다양한
              공간을 지속적으로 만듭니다. 그런데 시공이 끝난 뒤 그 공간을
              알리는 브랜드나 홈페이지, 검색 노출까지 함께 챙기기는 쉽지
              않습니다.
            </p>
            <p>
              프라이머리시스템은 이 뒷단을 함께 만듭니다. 인테리어 업체가
              직접 하지 않아도 되는 브랜드 · 웹 · SEO 영역을 외부 파트너로
              지원합니다.
            </p>
          </div>
        </div>
      </div>

      {/* what we provide */}
      <div className="border-t border-surface-line bg-surface-alt">
        <div className="container-max py-16 md:py-20">
          <div className="mb-12">
            <p className="eyebrow mb-3">What we provide</p>
            <h2 className="text-h1 text-ink">제공하는 것</h2>
          </div>
          <div className="grid gap-px border border-surface-line bg-surface-line md:grid-cols-2">
            {WHAT_WE_PROVIDE.map((item) => (
              <article key={item.no} className="flex flex-col bg-white p-8 md:p-10">
                <span className="font-mono text-[11px] tracking-widest text-ink-400">
                  {item.no}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-ink-500">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* how we work — explicitly not "we do interior" */}
      <div className="container-max py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">How we work with you</p>
            <h2 className="text-h1 text-ink">두 가지 협업 방식</h2>
          </div>
          <div className="max-w-xl space-y-6 text-[15px] leading-7 text-ink-600">
            <div>
              <p className="font-medium text-ink">
                ① 인테리어 회사가 고객에게 제안하는 옵션으로
              </p>
              <p className="mt-2 text-ink-500">
                시공 계약에 브랜드 · 홈페이지 제작을 옵션으로 붙여, 고객에게
                더 넓은 범위를 제안할 수 있도록 지원합니다.
              </p>
            </div>
            <div>
              <p className="font-medium text-ink">
                ② 인테리어 회사 자체의 브랜드 · 웹 파트너로
              </p>
              <p className="mt-2 text-ink-500">
                인테리어 회사 자신의 브랜드, 포트폴리오 사이트, 검색 노출을
                만드는 파트너로 협업합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO angle */}
      <div className="border-t border-surface-line bg-ink text-white">
        <div className="container-max py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
            <div>
              <p className="eyebrow mb-3 text-ink-300">Search</p>
              <h2 className="text-h1 text-white">검색에서 발견되는 구조</h2>
            </div>
            <div className="max-w-xl space-y-5 text-[15px] leading-7 text-ink-200">
              <p>
                인테리어 업체 홈페이지는 대개 완성된 시공 사진을 모아둔
                갤러리 하나로 끝납니다. 하지만 실제 고객은 상업공간
                인테리어, 병원 인테리어, 카페 인테리어처럼 구체적으로
                검색합니다.
              </p>
              <p>
                SEO Growth Package는 이런 서비스별 페이지를 장기적인 검색
                자산으로 만드는 상품입니다. 무작정 페이지 수를 늘리는 것이
                아니라, 실제 검색 의도에 맞는 구조를 설계합니다.
              </p>
              <Link
                href="/services/seo-growth-package"
                className="inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4"
              >
                SEO Growth Package 자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* case study evidence — real, from existing portfolio data */}
      {caseStudy && (
        <div className="container-max py-16 md:py-20">
          <div className="mb-10">
            <p className="eyebrow mb-3">Related work</p>
            <h2 className="text-h1 text-ink">실제 협업 사례</h2>
          </div>
          <Link
            href={`/portfolio/${caseStudy.slug}`}
            className="group grid gap-8 border border-surface-line bg-white p-6 transition-colors hover:border-ink md:grid-cols-[1fr_1.4fr] md:p-8"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
              <Image
                src={caseStudy.thumbnail}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-mono text-[11px] tracking-widest text-ink-400">
                {caseStudy.category} · {caseStudy.year}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-ink">
                {caseStudy.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-ink-500">
                로고와 워드마크뿐 아니라 실제 매장 인테리어 사인까지 이어지는
                브랜드 시스템을 만든 사례입니다. 인테리어 시공과 맞물리는
                브랜드 작업이 실제로 가능하다는 근거입니다.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-ink group-hover:underline">
                케이스 스터디 보기 →
              </span>
            </div>
          </Link>
        </div>
      )}

      {/* CTA */}
      <div className="border-t border-surface-line bg-surface-alt">
        <div className="container-max py-16 text-center md:py-20">
          <p className="eyebrow mb-3">Start a partnership</p>
          <h2 className="text-h1 text-ink text-balance">
            협업 구조가 궁금하시면 편하게 문의해 주세요.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-7 text-ink-500">
            지금 진행 중인 프로젝트가 있거나, 협업 방식만 먼저 알아보고
            싶으셔도 괜찮습니다.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-primary rounded-none">
              협업 문의하기 →
            </Link>
            <a href={`tel:${SITE.phone}`} className="btn btn-outline rounded-none">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
