"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const current = searchParams.get("category") || "전체";

  return (
    <div className="flex flex-wrap gap-x-1 gap-y-2 border-b border-paper-line">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat}
          href={cat === "전체" ? "/portfolio" : `/portfolio?category=${cat}`}
          className={cn(
            "-mb-px border-b-2 px-3 py-2.5 text-sm transition-colors",
            current === cat
              ? "border-ink font-medium text-ink"
              : "border-transparent text-ink-muted hover:text-ink"
          )}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
