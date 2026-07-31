"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/LinkButton";

const nav = [
  { href: "/", label: "홈" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/contact", label: "문의하기" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
            H
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            {SITE.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary-dark"
                  : "text-ink-muted hover:bg-ink/5 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
          <LinkButton
            href={SITE.kakaoOpenChat}
            variant="kakao"
            size="sm"
            className="ml-2"
          >
            카톡 문의
          </LinkButton>
        </nav>

        <button
          type="button"
          className="rounded-xl p-2 text-ink md:hidden"
          aria-label="메뉴"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-cream px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-sm font-medium",
                  pathname === item.href
                    ? "bg-primary/10 text-primary-dark"
                    : "text-ink-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton
              href={SITE.kakaoOpenChat}
              variant="kakao"
              size="sm"
              className="mt-2"
            >
              카톡으로 문의하기
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
