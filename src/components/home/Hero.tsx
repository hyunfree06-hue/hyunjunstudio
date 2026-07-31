"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 hero-fade" />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-ink-light uppercase">
            Freelance Web · App · Brand
          </p>

          <h1 className="text-display font-extrabold text-ink">
            작은 아이디어를,
            <br />
            진짜 서비스로.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            {SITE.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href="/portfolio" variant="primary" size="lg">
              포트폴리오 보기
              <ArrowRight strokeWidth={1.5} size={16} />
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              문의하기
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-24 flex flex-col items-start gap-2 text-ink-faint sm:mt-32"
        >
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ArrowDown strokeWidth={1.5} size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
