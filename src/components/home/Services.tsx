"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";
import { Card } from "@/components/ui/Card";

export function Services() {
  return (
    <section className="bg-cream-dark/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
            이런 걸 도와드려요
          </h2>
          <p className="mt-3 text-ink-muted">
            웹·앱·디자인까지, 필요한 것만 골라 말씀해 주세요
          </p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card hover className="h-full">
                <div className="mb-3 text-2xl">{s.emoji}</div>
                <h3 className="font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{s.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
