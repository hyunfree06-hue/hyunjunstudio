"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const badges = [
  { emoji: "✅", label: "숨고 인증 고수" },
  { emoji: "⭐", label: `${SITE.trust.rating} 평점` },
  { emoji: "📁", label: `누적 프로젝트 ${SITE.trust.projectCount}` },
  { emoji: "⚡", label: `평균 응답 ${SITE.trust.responseTime}` },
];

export function TrustBadges() {
  return (
    <section className="border-y border-ink/5 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-5 sm:gap-6 sm:px-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink-muted"
          >
            <span>{b.emoji}</span>
            <span>{b.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
