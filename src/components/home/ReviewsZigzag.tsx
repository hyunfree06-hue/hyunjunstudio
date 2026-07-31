"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";
import { maskName } from "@/lib/mask";
import { FadeIn, SectionLabel } from "@/components/ui/Section";

function previewText(content: string) {
  const first = content.split("\n")[0].trim();
  return first.length > 40 ? first.slice(0, 40) + "…" : first + "…";
}

export function ReviewsZigzag() {
  return (
    <section className="bg-paper-warm py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn className="mb-16 text-center md:mb-20">
          <SectionLabel>— 03 / REVIEWS</SectionLabel>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            실제로 함께한 분들의 이야기
          </h2>
          <p className="mt-4 text-xs text-ink-faint">
            * 아래 리뷰는 모두 숨고 플랫폼에서의 실제 리뷰입니다
          </p>
        </FadeIn>

        <div className="flex flex-col gap-10 md:gap-14">
          {reviews.map((review, index) => {
            const isLeft = index % 2 === 0;
            const displayName = review.clientName
              ? maskName(review.clientName)
              : review.rawName;

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`w-full md:w-[58%] ${
                  isLeft ? "md:self-start" : "md:self-end"
                }`}
              >
                <Link href="/portfolio" className="group block">
                  <article className="relative overflow-hidden border border-paper-line bg-paper px-7 py-8 transition-colors duration-200 hover:border-coral/50 sm:px-9 sm:py-9">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-2 left-4 select-none font-serif text-[7rem] leading-none text-ink/[0.04]"
                    >
                      &ldquo;
                    </span>

                    <p className="relative line-clamp-1 text-[15px] leading-relaxed text-ink">
                      {previewText(review.content)}
                    </p>

                    <div className="relative mt-6 flex flex-wrap items-end justify-between gap-3">
                      <div className="text-xs text-ink-muted">
                        <span className="font-medium text-ink">
                          {displayName}
                        </span>
                        <span className="mx-1.5 text-ink-faint">·</span>
                        <span>{review.category}</span>
                        <span className="mx-1.5 text-ink-faint">·</span>
                        <span className="tabular-nums">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-coral opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        리뷰 전체 보기 →
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
