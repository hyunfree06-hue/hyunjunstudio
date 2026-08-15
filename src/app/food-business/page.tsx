import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { getPortfolioBySlug } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "식품 · 외식 사업자를 위한 브랜드 · 웹 · SEO 파트너",
  description:
    "식당, 카페, 식품기업, 식자재 유통 업체의 브랜드부터 홈페이지, 검색 유입 구조까지 프라이머리시스템이 함께 구축합니다.",
  alternates: { canonical: "/food-business" },
  openGraph: {
    title: "식품 · 외식 사업자를 위한 브랜드 · 웹 · SEO 파트너 | PRIMARY SYSTEM",
    description:
      "식당, 카페, 식품기업, 식자재 유통 업체의 디지털 기반을 구축합니다.",
    url: "/food-business",
    type: "website",
  },
};

const WHAT_WE_PROVIDE = [
  {
    no: "01",
    title: "브랜드 아이덴티티",
    body: "메뉴판, 포장, 매장까지 일관되게 적용되는 브랜드를 설계합니다.",
  },
  {
    no: "02",
    title: "홈페이지 · 주문 · 문의 랜딩페이지",
    body: "예쁜 화면이 아니라 실제 주문이나 문의로 이어지는 구조로 설계합니다.",
  },
  {
    no: "03",
    title: "검색 유입 구조 (SEO)",
    body: "지역과 메뉴 · 업종 검색에 대응하는 페이지 구조를 만듭니다. 상세는 SEO Growth Package를 참고하세요.",
  },
  {
    no: "04",
    title: "유통 · B2B 사이트",
    body: "식자재 대량발주, 거래처 문의처럼 B2B 거래에 특화된 사이트를 구축합니다.",
  },
];

export default function FoodBusinessPage() {
  const caseStudy = getPortfolioBySlug("yutong-b2b-order");

  return (
    <div>
      <div className="border-b border-surface-line bg-surface-alt">
        <div className="container-max py-20">
          <p className="eyebrow mb-4">Partner Program · Food &amp; F&amp;B</p>
          <h1 className="text-display text-ink text-balance">
            식당, 카페, 식품기업의
            <br className="hidden md:block" />
            브랜드부터 검색 유입까지
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink-500 text-pretty">
            메뉴판 같은 홈페이지가 아니라, 실제 주문 · 문의로 이어지는
            디지털 기반을 만듭니다. 식당 · 카페 같은 소비자 대상 사업부터
            식자재 유통 같은 B2B 거래까지 함께합니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary rounded-none">
              프로젝트 문의 →
            </Link>
            <a
              href={SITE.kakaoOpenChat}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline rounded-none"
            >
              카카오 오픈채팅으로 문의
            </a>
          </div>
        </div>
      </div>

      <div className="container-max py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Why this matters</p>
            <h2 className="text-h1 text-ink">보기 좋은 것과 팔리는 것은 다릅니다</h2>
          </div>
          <div className="max-w-xl space-y-5 text-[15px] leading-7 text-ink-600">
            <p>
              식품 · 외식 사업은 맛과 품질만큼 실제 운영에 필요한 디지털
              기반이 중요합니다. 메뉴 소개만 있는 홈페이지는 문의나 주문으로
              잘 이어지지 않습니다.
            </p>
            <p>
              프라이머리시스템은 단순히 예쁜 홈페이지를 만드는 것이 아니라,
              실제 사업 운영(주문, 문의, 대량발주)에 필요한 디지털 기반을
              구축합니다.
            </p>
          </div>
        </div>
      </div>

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

      <div className="border-t border-surface-line bg-ink text-white">
        <div className="container-max py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
            <div>
              <p className="eyebrow mb-3 text-ink-300">Search</p>
              <h2 className="text-h1 text-white">지역 + 메뉴 검색에서 발견되는 구조</h2>
            </div>
            <div className="max-w-xl space-y-5 text-[15px] leading-7 text-ink-200">
              <p>
                식당 · 카페는 지역명과 메뉴, 식자재 유통업체는 품목과
                거래조건으로 검색됩니다. SEO Growth Package는 이런 실제
                검색 의도에 맞는 페이지 구조를 설계하는 상품입니다.
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

      {caseStudy && (
        <div className="container-max py-16 md:py-20">
          <div className="mb-10">
            <p className="eyebrow mb-3">Related work</p>
            <h2 className="text-h1 text-ink">실제 작업 사례</h2>
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
                {caseStudy.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-ink group-hover:underline">
                케이스 스터디 보기 →
              </span>
            </div>
          </Link>
        </div>
      )}

      <div className="border-t border-surface-line bg-surface-alt">
        <div className="container-max py-16 text-center md:py-20">
          <p className="eyebrow mb-3">Start a project</p>
          <h2 className="text-h1 text-ink text-balance">
            식당, 카페, 식품기업, 유통업체 — 어디든 편하게 문의해 주세요.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-primary rounded-none">
              프로젝트 문의 →
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
