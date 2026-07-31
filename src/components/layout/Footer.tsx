"use client";

import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-ink/5 bg-cream-dark/60 pb-24 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-lg font-bold text-ink">{SITE.name}</p>
          <p className="mt-1 text-sm text-ink-muted">{SITE.brand}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-ink-muted sm:items-end">
          <a href={`mailto:${SITE.email}`} className="hover:text-primary">
            {SITE.email}
          </a>
          <a
            href={SITE.kakaoOpenChat}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            카카오 오픈채팅
          </a>
          <p className="mt-2 text-ink-light">
            © {SITE.copyrightYear} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
