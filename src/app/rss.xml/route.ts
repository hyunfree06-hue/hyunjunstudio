import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

// Naver Search Advisor RSS 2.0 spec: https://searchadvisor.naver.com/guide/collection-rss
// - date in RFC 822 format
// - link is absolute URL
// - description ≤ 500 chars recommended

export const dynamic = "force-static";
export const revalidate = 86400; // 1 day

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// Best-effort pubDate per portfolio item using its "year" field (falls back to now).
function pubDateFor(year: string) {
  const y = Number(year) || new Date().getFullYear();
  // spread items across the year so RSS ordering has some variance
  return new Date(Date.UTC(y, 5, 1)).toUTCString();
}

export function GET() {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date().toUTCString();

  const items = PORTFOLIO_ITEMS.map((item) => {
    const link = `${base}/portfolio/${item.slug}`;
    const desc = item.description.length > 500
      ? item.description.slice(0, 497) + "..."
      : item.description;
    return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDateFor(item.year)}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <author>contact@primarysystem.kr (${escapeXml(SITE.brandKo)})</author>
      <description><![CDATA[${desc}]]></description>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.brand)} — 포트폴리오</title>
    <link>${base}/portfolio</link>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml("프라이머리시스템이 진행한 웹사이트, SaaS, 브랜드 프로젝트")}</description>
    <language>ko-KR</language>
    <copyright>© ${SITE.copyrightYear} ${escapeXml(SITE.brand)}</copyright>
    <lastBuildDate>${now}</lastBuildDate>
    <generator>Next.js</generator>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
