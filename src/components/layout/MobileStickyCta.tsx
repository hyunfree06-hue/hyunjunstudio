"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";

export function MobileStickyCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 md:hidden">
      <div className="pointer-events-auto flex border-t border-surface-line bg-white/95 backdrop-blur">
        <a
          href={`tel:${SITE.phone}`}
          className="flex-1 border-r border-surface-line py-3 text-center text-[13px] text-ink"
        >
          전화 상담
        </a>
        <Link
          href="/contact"
          className="flex-1 bg-ink py-3 text-center text-[13px] font-medium text-white"
        >
          프로젝트 문의
        </Link>
      </div>
    </div>
  );
}
