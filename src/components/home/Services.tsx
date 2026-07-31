"use client";

import { services } from "@/data/content";
import { Card } from "@/components/ui/Card";
import { FadeIn, SectionLabel } from "@/components/ui/Section";

export function Services() {
  return (
    <section className="border-y border-paper-line bg-paper-warm/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionLabel>— 02 / SERVICES</SectionLabel>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            이런 걸 도와드려요
          </h2>
          <p className="mt-4 max-w-md text-ink-muted">
            웹·앱·디자인까지, 필요한 것만 골라 말씀해 주세요
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.title} delay={i * 0.05}>
                <Card hover className="h-full">
                  <Icon
                    strokeWidth={1.5}
                    size={20}
                    className="text-ink-light transition-colors duration-200 group-hover:text-coral"
                  />
                  <h3 className="mt-5 font-semibold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {s.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
