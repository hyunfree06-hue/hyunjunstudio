"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const current = searchParams.get("category") || "전체";

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat}
          href={cat === "전체" ? "/portfolio" : `/portfolio?category=${cat}`}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            current === cat
              ? "bg-primary text-white shadow-soft"
              : "bg-white text-ink-muted border border-ink/10 hover:border-primary/30 hover:text-ink"
          )}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
