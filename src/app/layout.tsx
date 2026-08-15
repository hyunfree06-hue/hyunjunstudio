import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} | 디자인 · 웹 · 시스템`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "브랜드부터 웹사이트, 검색 최적화, 자체 소프트웨어까지 — 프라이머리시스템이 창업가와 기업의 디지털 자산을 한 팀에서 설계하고 구축합니다.",
  keywords: [
    "웹 에이전시",
    "웹 제작 외주",
    "홈페이지 제작",
    "브랜딩",
    "로고 제작",
    "SEO",
    "검색 최적화",
    "SaaS 개발",
    "자영업자 마케팅",
    "프라이머리시스템",
    "Primary System",
  ],
  openGraph: {
    title: SITE.brand,
    description:
      "디자인 · 웹 · 시스템을 한 팀에서. 프라이머리시스템.",
    url: SITE.url,
    siteName: SITE.brand,
    locale: "ko_KR",
    type: "website",
  },
  robots: { index: true, follow: true },
  // 고정 URL로 명시 선언. app/icon.* 자동생성은 배포마다 ?hash가 바뀌어
  // 구글이 파비콘 URL을 안정적으로 인식하지 못하므로 사용하지 않는다.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  alternates: {
    // canonical은 여기서 전역 지정하지 않는다.
    // 루트 layout에 canonical을 두면 모든 하위 페이지가 이를 상속해
    // "전부 홈의 중복"으로 신고되어 색인에서 빠진다. 각 페이지에서 개별 선언할 것.
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: `${SITE.brand} — 포트폴리오 RSS` },
      ],
    },
  },
  verification: {
    // filled in after Search Console gives tokens
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION
      ? { "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION }
      : undefined,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.brand,
  alternateName: SITE.brandKo,
  url: SITE.url,
  logo: `${SITE.url}/icon-512.png`,
  email: SITE.email,
  telephone: `+82-${SITE.phone.replace(/^0/, "").replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3")}`,
  address: { "@type": "PostalAddress", addressCountry: "KR" },
  sameAs: [] as string[],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE.url,
  name: SITE.brand,
  inLanguage: "ko-KR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <MobileStickyCta />
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
