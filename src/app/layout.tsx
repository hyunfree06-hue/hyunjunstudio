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
  alternates: {
    canonical: "/",
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
  logo: `${SITE.url}/icon.png`,
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
