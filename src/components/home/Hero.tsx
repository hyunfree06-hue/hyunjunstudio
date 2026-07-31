"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-sm font-medium text-primary-dark shadow-sm">
            <span>👋</span> 안녕하세요, {SITE.name}입니다
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {SITE.heroTitle}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
            {SITE.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/portfolio" variant="primary" size="lg">
              포트폴리오 보기
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              문의하기
            </LinkButton>
          </div>
        </motion.div>

        <div className="relative mx-auto flex h-64 w-full max-w-md items-center justify-center md:h-80">
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-6 top-4 h-28 w-28 rounded-[2rem] bg-primary/80 shadow-lift sm:h-36 sm:w-36"
          />
          <motion.div
            animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute bottom-6 right-8 h-24 w-24 rounded-full bg-accent shadow-soft sm:h-32 sm:w-32"
          />
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute right-4 top-16 h-16 w-16 rounded-2xl bg-mint shadow-soft sm:h-20 sm:w-20"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[2.5rem] bg-white/90 text-5xl shadow-lift sm:h-48 sm:w-48 sm:text-6xl"
          >
            ✨
          </motion.div>
        </div>
      </div>
    </section>
  );
}
