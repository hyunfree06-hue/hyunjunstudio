import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.brand} | 웹·디자인 프리랜서`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "웹사이트, 앱, 로고까지 — 편하게 이야기 나누며 함께 만들어요. 숨고 인증 고수 고현준의 개인 에이전시.",
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
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className={`${inter.variable} min-h-screen antialiased`}>
        <Header />
        <main className="animate-fade-in">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
