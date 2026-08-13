import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

export function WorkTeaser() {
  const featured = PORTFOLIO_ITEMS.slice(0, 6);
  return (
    <section className="border-b border-surface-line bg-white">
      <div className="container-max py-24">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="text-h1 text-ink">
              최근 진행한 프로젝트
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden text-[13px] text-ink-600 hover:text-ink md:inline-block"
          >
            전체 포트폴리오 →
          </Link>
        </div>

        <div className="grid gap-px border border-surface-line bg-surface-line md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group flex flex-col bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col p-6">
                <p className="font-mono text-[11px] tracking-widest text-ink-400">
                  {item.category} · {item.year}
                </p>
                <h3 className="mt-3 text-[15px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-ink-500">
                  {item.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/portfolio"
            className="text-[13px] text-ink-600 hover:text-ink"
          >
            전체 포트폴리오 →
          </Link>
        </div>
      </div>
    </section>
  );
}
