export const SITE = {
  name: "PRIMARY SYSTEM",
  brand: "PRIMARY SYSTEM",
  brandKo: "프라이머리시스템",
  legal: "프라이머리시스템",
  email: "contact@primarysystem.kr",
  phone: "01084992397",
  phoneDisplay: "010-8499-2397",
  domain: "primarysystem.kr",
  url: "https://primarysystem.kr",
  kakaoOpenChat: "https://open.kakao.com/o/swF0XIGi",
  address: "대한민국",
  representative: "고현준",
  tagline: "Design · Web · System",
  heroEyebrow: "DESIGN · WEB · SYSTEM",
  heroTitle: "브랜드부터 시스템까지,\n한 팀에서 만듭니다.",
  heroSubtitle:
    "로고·브랜드 아이덴티티, 프로덕트 웹사이트, 검색 최적화, 자체 소프트웨어까지 — 창업가와 기업이 필요한 디지털 자산을 한 팀에서 설계하고 구축합니다.",
  metrics: [
    { label: "누적 프로젝트", value: "30+" },
    { label: "평균 응답", value: "30분 이내" },
    { label: "클라이언트 만족도", value: "5.0 / 5.0" },
    { label: "운영 도메인", value: "primarysystem.kr" },
  ],
  copyrightYear: 2026,
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/services", label: "서비스" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/company", label: "회사소개" },
  { href: "/contact", label: "문의" },
] as const;

export const PORTFOLIO_CATEGORIES = [
  "전체",
  "웹사이트",
  "SaaS · 프로덕트",
  "브랜드 · 로고",
  "리서치 · 문서",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];
