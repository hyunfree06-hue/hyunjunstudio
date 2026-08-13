import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/company`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = PORTFOLIO_ITEMS.map((item) => ({
    url: `${base}/portfolio/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
