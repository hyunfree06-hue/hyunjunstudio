"use client";

import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-paper-line pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div>
          <p className="text-lg font-semibold tracking-tight text-ink">
            {SITE.brand}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{SITE.name}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink-muted sm:items-end">
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors hover:text-ink"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.kakaoOpenChat}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            카카오 오픈채팅
          </a>
          <p className="mt-6 text-xs text-ink-faint">
            © {SITE.copyrightYear} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
