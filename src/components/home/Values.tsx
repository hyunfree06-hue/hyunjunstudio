"use client";

import { motion } from "framer-motion";
import { values } from "@/data/content";
import { Card } from "@/components/ui/Card";

export function Values() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-2xl font-extrabold text-ink sm:text-3xl"
      >
        이렇게 일해요
      </motion.h2>
      <div className="grid gap-5 md:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card hover className="h-full text-center">
              <div className="mb-3 text-3xl">{v.emoji}</div>
              <h3 className="text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {v.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
