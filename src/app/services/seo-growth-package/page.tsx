import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO Growth Package",
  description:
    "홈페이지 제작으로 끝나지 않고, 검색에서 계속 발견되는 구조를 만드는 프라이머리시스템의 SEO 상품. 기술 SEO, 페이지 구조 설계, 검색 노출 세팅까지 포함합니다.",
  alternates: { canonical: "/services/seo-growth-package" },
  openGraph: {
    title: "SEO Growth Package | PRIMARY SYSTEM",
    description:
      "홈페이지 제작으로 끝나지 않고, 검색에서 계속 발견되는 구조를 만드는 SEO 상품.",
    url: "/services/seo-growth-package",
    type: "website",
  },
};

const INCLUDES = [
  {
    no: "01",
    title: "검색 친화적인 웹사이트 구조 설계",
    body: "페이지 위계, URL 구조, 내부 콘텐츠 배치를 검색엔진과 사용자 모두가 이해하기 쉽게 설계합니다.",
  },
  {
    no: "02",
    title: "기술 SEO 기본 세팅",
    body: "robots.txt, sitemap, canonical, 파비콘 등 검색엔진이 사이트를 정확히 읽고 색인하기 위한 기본기를 세팅합니다.",
  },
  {
    no: "03",
    title: "페이지별 메타데이터 · 검색 구조",
    body: "페이지마다 고유한 title · description · Open Graph를 설정해 검색결과와 공유 미리보기가 정확하게 노출되도록 합니다.",
  },
  {
    no: "04",
    title: "산업 · 서비스별 SEO 랜딩페이지",
    body: "고객이 실제로 검색하는 서비스·업종 단위로 페이지를 구성해, 홈 하나가 아니라 여러 진입점을 만듭니다.",
  },
  {
    no: "05",
    title: "검색 키워드 기반 콘텐츠 구조 설계",
    body: "실제 검색 수요가 있는 주제를 기준으로 콘텐츠 우선순위와 구조를 잡습니다.",
  },
  {
    no: "06",
    title: "내부 링크 구조",
    body: "페이지 간 연결을 정리해 방문자와 검색엔진 모두 사이트 내에서 자연스럽게 이동할 수 있도록 합니다.",
  },
  {
    no: "07",
    title: "Google Search Console 등 검색 노출 기반 세팅",
    body: "Google · 네이버 검색엔진에 사이트를 등록하고, 색인 상태와 실적을 확인할 수 있는 기반을 마련합니다.",
  },
  {
    no: "08",
    title: "문의 전환을 고려한 랜딩페이지 구조",
    body: "검색으로 들어온 방문자가 문의까지 자연스럽게 이어지도록 CTA와 정보 순서를 설계합니다.",
  },
  {
    no: "09",
    title: "기존 홈페이지 SEO 개선",
    body: "새로 만들지 않고 기존 사이트의 구조적 문제(색인 누락, 메타데이터 부재 등)를 진단하고 개선합니다.",
  },
];

export default function SeoGrowthPackagePage() {
  return (
    <div>
      <div className="border-b border-surface-line bg-surface-alt">
        <div className="container-max py-20">
          <p className="eyebrow mb-4">Product · SEO Growth Package</p>
          <h1 className="text-display text-ink text-balance">
            홈페이지 하나로 끝나지 않는,
            <br className="hidden md:block" />
            검색에서 계속 발견되는 구조
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink-500 text-pretty">
            SEO Growth Package는 프라이머리시스템의 디자인 · 웹사이트 구축 ·
            검색 최적화를 하나로 연결한 상품입니다. 사이트를 납품하고
            끝나는 것이 아니라, 검색에서 고객이 계속 들어올 수 있는 디지털
            자산을 만드는 것이 목표입니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary rounded-none">
              프로젝트 문의 →
            </Link>
            <Link href="/services" className="btn btn-outline rounded-none">
              전체 서비스 보기
            </Link>
          </div>
        </div>
      </div>

      <div className="container-max py-16 md:py-20">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Includes</p>
            <h2 className="text-h1 text-ink">포함 영역</h2>
          </div>
          <p className="max-w-xl text-[15px] leading-7 text-ink-500 md:pt-2">
            프로젝트 범위에 따라 필요한 영역만 조합해서 진행할 수 있습니다.
          </p>
        </div>

        <div className="grid gap-px border border-surface-line bg-surface-line md:grid-cols-3">
          {INCLUDES.map((item) => (
            <article key={item.no} className="flex flex-col bg-white p-7">
              <span className="font-mono text-[11px] tracking-widest text-ink-400">
                {item.no}
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-ink-500">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-surface-line bg-surface-alt">
        <div className="container-max py-16 text-center md:py-20">
          <p className="eyebrow mb-3">Start</p>
          <h2 className="text-h1 text-ink text-balance">
            어디까지 필요한지 아직 몰라도 괜찮습니다.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-7 text-ink-500">
            현재 사이트 상태를 보고 필요한 범위와 견적을 정리해 회신
            드립니다. 아직 가격이 정해지지 않은 항목은 프로젝트 문의 시
            안내드립니다.
          </p>
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
