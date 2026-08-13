"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-white/85 backdrop-blur transition-colors",
        scrolled ? "border-surface-line" : "border-transparent",
      )}
    >
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" aria-label="PRIMARY SYSTEM 홈으로" className="flex items-center">
          <Logo size={22} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] transition-colors",
                  active
                    ? "font-medium text-ink"
                    : "text-ink-500 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="btn btn-primary rounded-none px-4 py-2 text-[13px]"
          >
            프로젝트 문의
          </Link>
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center md:hidden"
        >
          <span
            aria-hidden
            className={cn(
              "block h-px w-5 bg-ink transition-transform",
              open ? "translate-y-[3px] rotate-45" : "",
            )}
          />
          <span
            aria-hidden
            className={cn(
              "-mt-[6px] block h-px w-5 bg-ink transition-transform",
              open ? "translate-y-[-3px] -rotate-45" : "",
            )}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-line bg-white md:hidden">
          <nav className="container-max flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-surface-line py-3 text-sm text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary mt-4 rounded-none"
            >
              프로젝트 문의
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
