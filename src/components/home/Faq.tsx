"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";
import { FadeIn, SectionLabel } from "@/components/ui/Section";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8 md:py-32">
      <FadeIn>
        <SectionLabel>— 05 / FAQ</SectionLabel>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          자주 묻는 질문
        </h2>
      </FadeIn>

      <div className="mt-12 divide-y divide-paper-line border-y border-paper-line">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-medium text-ink">{faq.q}</span>
                <Plus
                  strokeWidth={1.5}
                  size={18}
                  className={cn(
                    "shrink-0 text-ink-light transition-transform duration-200",
                    isOpen && "rotate-45 text-coral"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-muted">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
