"use client";

import { SITE } from "@/lib/constants";

const stats = [
  { label: "숨고 인증 고수" },
  { label: `평점 ${SITE.trust.rating}`, value: true },
  { label: `누적 프로젝트 ${SITE.trust.projectCount}`, value: true },
  { label: `평균 응답 ${SITE.trust.responseTime}` },
];

export function TrustBadges() {
  return (
    <section className="border-y border-paper-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 py-5 sm:px-8 sm:gap-x-0">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center">
            {i > 0 && (
              <span className="mx-4 hidden text-paper-line sm:inline" aria-hidden>
                ·
              </span>
            )}
            <span
              className={`text-sm text-ink-muted ${
                s.value ? "tabular-nums font-medium text-ink" : ""
              }`}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
