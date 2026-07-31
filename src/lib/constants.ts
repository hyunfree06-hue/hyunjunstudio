export const SITE = {
  name: "고현준",
  brand: "Hynjun Work",
  email: "hynjun@example.com",
  phone: "01084992397",
  phoneDisplay: "010-8499-2397",
  kakaoOpenChat: "https://open.kakao.com/o/swF0XIGi",
  heroTitle: "작은 아이디어를, 진짜 서비스로.",
  heroSubtitle:
    "웹사이트, 앱, 로고까지 — 편하게 이야기 나누며 함께 만들어요.",
  trust: {
    rating: "5.0",
    projectCount: "30+",
    responseTime: "30분",
  },
  copyrightYear: 2025,
} as const;

export const CATEGORIES = [
  "전체",
  "웹",
  "앱",
  "로고",
  "기타",
] as const;

export const PORTFOLIO_CATEGORIES = [
  "웹 개발",
  "워드프레스",
  "앱/웹 기획",
  "로고 디자인",
  "소프트웨어 개발",
  "노션 자동화",
  "기타",
] as const;

export const ADMIN_COOKIE = "admin_session";
export const ADMIN_FAIL_COOKIE = "admin_fail";
export const LOCKOUT_SECONDS = 30;
export const MAX_FAIL_ATTEMPTS = 3;
