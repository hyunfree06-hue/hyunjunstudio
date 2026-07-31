"use client";

import { usePathname } from "next/navigation";
import { SITE } from "@/lib/constants";

export function MobileStickyCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={SITE.kakaoOpenChat}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-[#FEE500] py-3 text-sm font-bold text-[#191919]"
        >
          💬 카톡 문의
        </a>
        <a
          href={`sms:${SITE.phone}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-primary py-3 text-sm font-bold text-white"
        >
          📱 문자 문의
        </a>
      </div>
    </div>
  );
}
