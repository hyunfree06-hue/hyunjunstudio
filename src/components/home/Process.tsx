"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section className="bg-white/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
            작업 프로세스
          </h2>
          <p className="mt-3 text-ink-muted">
            문의부터 마무리까지, 부담 없이 진행해요
          </p>
        </motion.div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-success/30 lg:block" />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white shadow-soft">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
