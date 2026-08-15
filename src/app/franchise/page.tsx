import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "프랜차이즈 본사를 위한 브랜드 · 웹 · SEO 파트너",
  description:
    "신규 브랜드 론칭부터 가맹점 확장까지, 프랜차이즈 본사가 반복적으로 필요한 브랜드 · 홈페이지 · 검색 유입 구조를 프라이머리시스템이 함께 만듭니다.",
  alternates: { canonical: "/franchise" },
  openGraph: {
    title: "프랜차이즈 본사를 위한 브랜드 · 웹 · SEO 파트너 | PRIMARY SYSTEM",
    description:
      "신규 브랜드 론칭부터 가맹점 확장까지, 본사가 반복적으로 필요한 디지털 자산을 함께 만듭니다.",
    url: "/franchise",
    type: "website",
  },
};

const WHAT_WE_PROVIDE = [
  {
    no: "01",
    title: "브랜드 아이덴티티",
    body: "신규 브랜드 론칭 시 로고, 컬러, 가이드라인을 설계해 가맹점 확장에도 흔들리지 않는 기준을 만듭니다.",
  },
  {
    no: "02",
    title: "본사 홈페이지 · 가맹 문의 랜딩페이지",
    body: "브랜드 소개와 가맹 문의를 분리해, 각각의 목적에 맞는 전환 구조로 설계합니다.",
  },
  {
    no: "03",
    title: "지점별 디지털 자산",
    body: "지점 소개, 위치, 연락처가 정리된 페이지 구조를 만들어 지점이 늘어나도 관리 가능한 형태로 확장합니다.",
  },
  {
    no: "04",
    title: "검색 유입 구조 (SEO)",
    body: "브랜드명 · 업종 · 지역 검색에 대응하는 구조를 만듭니다. 상세는 SEO Growth Package를 참고하세요.",
  },
];

export default function FranchisePage() {
  return (
    <div>
      <div className="border-b border-surface-line bg-surface-alt">
        <div className="container-max py-20">
          <p className="eyebrow mb-4">Partner Program · Franchise</p>
          <h1 className="text-display text-ink text-balance">
            프랜차이즈 본사와 가맹점의
            <br className="hidden md:block" />
            브랜드 · 웹 · 검색 유입 파트너
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink-500 text-pretty">
            신규 브랜드 론칭부터 가맹 확장까지, 본사가 반복적으로 필요한
            디지털 자산을 함께 만듭니다.
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
            <h2 className="text-h1 text-ink">확장할수록 반복되는 일</h2>
          </div>
          <div className="max-w-xl space-y-5 text-[15px] leading-7 text-ink-600">
            <p>
              프랜차이즈 본사는 신규 브랜드 홈페이지, 가맹 문의 랜딩페이지,
              지점별 페이지, 검색 노출까지 지점이 늘어날 때마다 반복적으로
              필요합니다.
            </p>
            <p>
              프라이머리시스템은 이 반복 작업을 한 팀에서 일관된 톤으로
              만듭니다. 브랜드가 바뀌거나 지점이 늘어도 매번 새 업체를
              찾을 필요가 없도록 구조를 설계합니다.
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
              <h2 className="text-h1 text-white">가맹 문의는 검색에서 시작됩니다</h2>
            </div>
            <div className="max-w-xl space-y-5 text-[15px] leading-7 text-ink-200">
              <p>
                예비 가맹점주는 브랜드명, 업종, 지역을 조합해 검색합니다.
                본사 사이트가 이 검색에서 계속 발견되지 않으면 가맹 문의
                자체가 줄어듭니다.
              </p>
              <p>
                SEO Growth Package는 본사 사이트가 가맹 관련 검색에서
                지속적으로 발견되도록 페이지 구조와 콘텐츠를 설계하는
                상품입니다.
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

      <div className="container-max py-16 md:py-20">
        <div className="mb-8">
          <p className="eyebrow mb-3">Related work</p>
          <h2 className="text-h1 text-ink">브랜드 시스템 작업</h2>
        </div>
        <p className="max-w-xl text-[15px] leading-7 text-ink-600">
          여러 접점(로고 · 인쇄물 · 매장 사인)에 일관되게 적용되는 브랜드
          시스템을 만든 작업들을 포트폴리오에서 확인하실 수 있습니다.
        </p>
        <Link
          href={`/portfolio?category=${encodeURIComponent("브랜드 · 로고")}`}
          className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:underline"
        >
          브랜드 · 로고 포트폴리오 보기 →
        </Link>
      </div>

      <div className="border-t border-surface-line bg-surface-alt">
        <div className="container-max py-16 text-center md:py-20">
          <p className="eyebrow mb-3">Start a partnership</p>
          <h2 className="text-h1 text-ink text-balance">
            신규 브랜드든 기존 브랜드 확장이든, 편하게 문의해 주세요.
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
