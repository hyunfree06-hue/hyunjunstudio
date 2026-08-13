import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-surface-line bg-surface-alt">
      <div aria-hidden className="absolute inset-0 hairline opacity-40" />
      <div className="container-max relative grid gap-16 py-24 md:grid-cols-[1.4fr_1fr] md:py-32">
        <div>
          <p className="eyebrow mb-6">{SITE.heroEyebrow}</p>
          <h1 className="text-display text-ink text-balance">
            {SITE.heroTitle.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-7 text-ink-500 text-pretty">
            {SITE.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-primary rounded-none">
              프로젝트 문의
              <span aria-hidden>→</span>
            </Link>
            <Link href="/portfolio" className="btn btn-outline rounded-none">
              포트폴리오 보기
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="border border-ink-100 bg-white p-6">
            <p className="eyebrow mb-6 text-ink-400">Operating Facts</p>
            <dl className="space-y-5">
              {SITE.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-baseline justify-between border-b border-surface-line pb-4 last:border-none last:pb-0"
                >
                  <dt className="text-[13px] text-ink-500">{m.label}</dt>
                  <dd className="font-mono text-sm text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
