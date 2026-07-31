"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";
import { maskName } from "@/lib/mask";
import { Card } from "@/components/ui/Card";

function previewText(content: string) {
  const first = content.split("\n")[0].trim();
  return first.length > 40 ? first.slice(0, 40) + "…" : first + "…";
}

export function ReviewsZigzag() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
          실제로 함께한 분들의 이야기
        </h2>
        <p className="mt-3 text-xs text-ink-light">
          * 아래 리뷰는 모두 숨고 플랫폼에서의 실제 리뷰입니다
        </p>
      </motion.div>

      <div className="flex flex-col gap-8 md:gap-12">
        {reviews.map((review, index) => {
          const isLeft = index % 2 === 0;
          const displayName = review.clientName
            ? maskName(review.clientName)
            : review.rawName;

          return (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`w-full md:w-[60%] ${
                isLeft ? "md:self-start" : "md:self-end"
              }`}
            >
              <Link href="/portfolio" className="group block">
                <Card
                  hover
                  className="relative overflow-hidden transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-bold text-ink">{displayName}</span>
                    <span className="text-ink-light">·</span>
                    <span className="text-ink-muted">{review.category}</span>
                    <span className="ml-auto flex items-center gap-1 font-semibold text-primary">
                      ⭐ {review.rating.toFixed(1)}
                    </span>
                  </div>
                  {review.badge && (
                    <span className="mt-2 inline-block rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-medium text-success">
                      {review.badge}
                    </span>
                  )}
                  <p className="mt-3 line-clamp-1 text-sm leading-relaxed text-ink-muted">
                    {previewText(review.content)}
                  </p>
                  <div className="mt-3 h-5">
                    <span className="inline-block text-sm font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      리뷰 보러가기 →
                    </span>
                  </div>
                  <p className="absolute bottom-4 right-5 text-xs text-ink-light">
                    {review.date}
                  </p>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
