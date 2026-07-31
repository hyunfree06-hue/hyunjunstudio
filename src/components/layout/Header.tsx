"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-200",
        scrolled
          ? "border-b border-paper-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[11px] font-semibold tracking-wide text-paper">
            H
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            {SITE.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3.5 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "font-medium text-ink"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
          <LinkButton
            href={SITE.kakaoOpenChat}
            variant="outline"
            size="sm"
            className="ml-3"
          >
            카톡 문의
          </LinkButton>
        </nav>

        <button
          type="button"
          className="p-2 text-ink md:hidden"
          aria-label="메뉴"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X strokeWidth={1.5} size={22} /> : <Menu strokeWidth={1.5} size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-paper-line bg-paper px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm",
                  pathname === item.href
                    ? "font-medium text-ink"
                    : "text-ink-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton
              href={SITE.kakaoOpenChat}
              variant="outline"
              size="sm"
              className="mt-3"
            >
              카톡으로 문의하기
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
