"use client";

import Link from "next/link";
import Image from "next/image";
import type { Portfolio } from "@/lib/types";

export function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <Link href={`/portfolio/${portfolio.id}`} className="group block">
      <article>
        <div className="relative aspect-[4/3] overflow-hidden border border-paper-line bg-paper-warm">
          {portfolio.thumbnail_url ? (
            <Image
              src={portfolio.thumbnail_url}
              alt={portfolio.title}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs tracking-widest text-ink-faint uppercase">
              No Image
            </div>
          )}
        </div>
        <div className="pt-4">
          {portfolio.category && (
            <span className="text-[11px] font-medium tracking-wide text-ink-light uppercase">
              {portfolio.category}
            </span>
          )}
          <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-coral">
            {portfolio.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
            {portfolio.preview_description}
          </p>
        </div>
      </article>
    </Link>
  );
}
