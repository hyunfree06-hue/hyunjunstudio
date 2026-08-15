import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "프라이머리시스템의 제공 서비스 — 로고·브랜드 아이덴티티, 기업 웹사이트와 프로덕트 개발, 검색 최적화(SEO), 자체 소프트웨어까지 한 팀에서 진행합니다.",
  alternates: { canonical: "/services" },
};

const GROUPS = [
  {
    id: "brand",
    no: "01",
    title: "브랜드 · 로고 시스템",
    intro:
      "브랜드는 로고 한 장이 아니라 사용 환경 전체에서 일관되게 작동해야 합니다. 실제 매장 · 인쇄물 · 웹 · 모바일에 적용 가능한 브랜드 시스템으로 설계합니다.",
    bullets: [
      "네이밍 검토, 로고 시안 3안",
      "컬러 · 타이포 · 그리드 · 아이콘",
      "명함, 배너, 매장 사인 등 인쇄물",
      "브랜드 가이드 문서화",
    ],
  },
  {
    id: "web",
    no: "02",
    title: "웹사이트 · 프로덕트 개발",
    intro:
      "정적인 소개 사이트뿐 아니라 실제로 매출을 만들어내는 사이트와 SaaS 프로덕트까지 Next.js 기반으로 직접 설계 · 구축합니다.",
    bullets: [
      "기업 홈페이지, 리드 랜딩",
      "커머스 · 상세페이지 시스템",
      "SaaS · 자체 프로덕트 프론트 · 백엔드",
      "Vercel · Cloudflare 인프라 세팅",
    ],
  },
  {
    id: "seo",
    no: "03",
    title: "검색 최적화 · 콘텐츠 확장",
    intro:
      "제작 이후에도 검색 유입이 계속 늘어나도록 색인 구조 · 스키마 · 사이트맵 · 콘텐츠 등록까지 유지 · 관리합니다. 이 영역은 SEO Growth Package로 상품화되어 있습니다.",
    bullets: [
      "SEO 등록 (Google, Naver)",
      "구조화 데이터 · 사이트맵",
      "산업 · 서비스별 SEO 랜딩페이지",
      "GA4 · GSC 리포트",
    ],
    href: "/services/seo-growth-package",
    hrefLabel: "SEO Growth Package 자세히 보기",
  },
  {
    id: "software",
    no: "04",
    title: "자체 소프트웨어",
    intro:
      "반복 업무를 줄여주는 SaaS · 사내 툴을 직접 개발합니다. 세일즈 자동화, 관리자 툴, 데이터 파이프라인까지 자체 프로덕트 경험을 기반으로 만듭니다.",
    bullets: [
      "세일즈 자동화 (ProposalPilot 등 자체 프로덕트 보유)",
      "관리자 · 어드민 툴",
      "API 연동 · 데이터 파이프라인",
      "AI 기능 통합 (OpenAI, Gemini 등)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container-max py-20">
      <div className="mb-14">
        <p className="eyebrow mb-3">Services</p>
        <h1 className="text-h1 text-ink">
          디자인 · 웹 · 시스템을 한 팀에서
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-500">
          아래는 프라이머리시스템이 제공하는 서비스입니다. 프로젝트 규모에
          따라 개별로도, 통합으로도 진행합니다.
        </p>
      </div>

      <div className="grid gap-px border border-surface-line bg-surface-line">
        {GROUPS.map((g) => (
          <section
            key={g.id}
            id={g.id}
            className="grid gap-8 bg-white p-8 md:grid-cols-[1fr_2fr] md:p-12"
          >
            <div>
              <p className="font-mono text-[11px] tracking-widest text-ink-400">
                {g.no}
              </p>
              <h2 className="mt-4 text-h2 text-ink">{g.title}</h2>
            </div>
            <div>
              <p className="text-[15px] leading-7 text-ink-600">{g.intro}</p>
              <ul className="mt-6 grid gap-2">
                {g.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 border-t border-surface-line pt-3 text-[14px] text-ink"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-px w-4 bg-ink"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {"href" in g && g.href && (
                <Link
                  href={g.href}
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-accent hover:underline"
                >
                  {g.hrefLabel} →
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 border-t border-surface-line pt-14 text-center">
        <p className="eyebrow">Start a project</p>
        <h3 className="text-h2 text-ink">
          진행 중이신 프로젝트가 있으신가요?
        </h3>
        <p className="max-w-lg text-[14px] leading-7 text-ink-500">
          어느 서비스가 필요할지 헷갈리셔도 괜찮습니다. 문의 주시면 필요한
          범위와 견적을 정리해 회신 드립니다.
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="/contact" className="btn btn-primary rounded-none">
            프로젝트 문의 →
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="btn btn-outline rounded-none"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
