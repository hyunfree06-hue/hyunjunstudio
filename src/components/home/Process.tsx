"use client";

import { processSteps } from "@/data/content";
import { FadeIn, SectionLabel } from "@/components/ui/Section";

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <FadeIn>
        <SectionLabel>— 04 / PROCESS</SectionLabel>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          작업 프로세스
        </h2>
        <p className="mt-4 text-ink-muted">
          문의부터 마무리까지, 부담 없이 진행해요
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <FadeIn key={step.step} delay={i * 0.06}>
            <div
              className={`border-paper-line py-2 pr-8 ${
                i < processSteps.length - 1 ? "lg:border-r" : ""
              } ${i > 0 ? "sm:pl-8" : ""} border-t pt-8 lg:border-t-0 lg:pt-2`}
            >
              <span className="text-xs font-medium tracking-[0.15em] text-coral tabular-nums">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
