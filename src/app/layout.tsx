import type { Metadata } from "next";
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
    "브랜딩",
    "홈페이지 제작",
    "SEO",
    "SaaS 개발",
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
  alternates: { canonical: "/" },
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
      </body>
    </html>
  );
}
