"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Smartphone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function MobileStickyCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-paper-line bg-paper/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={SITE.kakaoOpenChat}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-kakao py-3 text-sm font-medium text-[#191919]"
        >
          <MessageCircle strokeWidth={1.5} size={16} />
          카톡 문의
        </a>
        <a
          href={`sms:${SITE.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-coral py-3 text-sm font-medium text-white"
        >
          <Smartphone strokeWidth={1.5} size={16} />
          문자 문의
        </a>
      </div>
    </div>
  );
}
