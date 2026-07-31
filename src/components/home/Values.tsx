"use client";

import { values } from "@/data/content";
import { Card } from "@/components/ui/Card";
import { FadeIn, SectionLabel } from "@/components/ui/Section";

export function Values() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <FadeIn>
        <SectionLabel>— 01 / APPROACH</SectionLabel>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          이렇게 일해요
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <FadeIn key={v.title} delay={i * 0.06}>
              <Card hover className="h-full">
                <Icon
                  strokeWidth={1.5}
                  size={22}
                  className="text-ink-light transition-colors duration-200 group-hover:text-coral"
                />
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {v.description}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
