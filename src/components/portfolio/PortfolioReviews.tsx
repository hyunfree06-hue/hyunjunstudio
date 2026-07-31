"use client";

import Link from "next/link";
import { Star, BadgeCheck } from "lucide-react";
import { reviews } from "@/data/reviews";
import { maskName } from "@/lib/mask";
import { FadeIn, SectionLabel } from "@/components/ui/Section";

export function PortfolioReviews() {
  return (
    <section className="mt-24 border-t border-paper-line pt-20 md:mt-32 md:pt-28">
      <FadeIn>
        <SectionLabel>— CLIENT REVIEWS</SectionLabel>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          고객 후기
        </h2>
        <p className="mt-4 text-ink-muted">
          숨고에서 함께한 분들의 실제 리뷰입니다
        </p>
      </FadeIn>

      <div className="mt-12 divide-y divide-paper-line border-y border-paper-line">
        {reviews.map((review, i) => {
          const displayName = review.clientName
            ? maskName(review.clientName)
            : review.rawName;

          return (
            <FadeIn key={review.id} delay={Math.min(i * 0.04, 0.2)}>
              <article className="py-10">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
                  <span className="font-medium text-ink">{displayName}</span>
                  {review.badge && (
                    <span className="inline-flex items-center gap-1 rounded border border-paper-line px-2 py-0.5 text-[11px] font-medium tracking-wide text-ink-muted">
                      <BadgeCheck strokeWidth={1.5} size={12} />
                      {review.badge}
                    </span>
                  )}
                  <span className="text-ink-faint">·</span>
                  <span className="text-ink-muted">{review.category}</span>
                  <span className="ml-auto flex items-center gap-3 text-ink-muted">
                    <span className="inline-flex items-center gap-1 tabular-nums">
                      <Star
                        strokeWidth={1.5}
                        size={13}
                        className="fill-coral text-coral"
                      />
                      {review.rating.toFixed(1)}
                    </span>
                    <span className="text-ink-faint">·</span>
                    <span className="text-xs">{review.date}</span>
                  </span>
                </div>

                <div className="my-5 h-px bg-paper-line" />

                <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-ink-muted">
                  {review.content}
                </p>

                <p className="mt-6 text-xs text-neutral-400">
                  이 리뷰는 숨고 플랫폼에서의 실제 리뷰입니다
                </p>
              </article>
            </FadeIn>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-ink-muted">
        비슷한 프로젝트가 필요하신가요?{" "}
        <Link
          href="/contact"
          className="font-medium text-coral underline-offset-4 hover:underline"
        >
          문의하기
        </Link>
      </p>
    </section>
  );
}
