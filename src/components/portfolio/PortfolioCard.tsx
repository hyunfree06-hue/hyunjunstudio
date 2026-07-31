"use client";

import Link from "next/link";
import Image from "next/image";
import type { Portfolio } from "@/lib/types";
import { cn } from "@/lib/utils";

export function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <Link href={`/portfolio/${portfolio.id}`} className="group block">
      <article className="overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lift">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
          {portfolio.thumbnail_url ? (
            <Image
              src={portfolio.thumbnail_url}
              alt={portfolio.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-4xl">
              📁
            </div>
          )}
        </div>
        <div className="p-5">
          {portfolio.category && (
            <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary-dark">
              {portfolio.category}
            </span>
          )}
          <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-primary-dark">
            {portfolio.title}
          </h3>
          <p
            className={cn(
              "mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted"
            )}
          >
            {portfolio.preview_description}
          </p>
        </div>
      </article>
    </Link>
  );
}
