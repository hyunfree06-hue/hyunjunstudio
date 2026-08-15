import Link from "next/link";

const PROGRAMS = [
  {
    href: "/interior",
    no: "01",
    title: "인테리어",
    body: "인테리어 회사가 아니라, 인테리어 업체의 외부 브랜드 · 웹 · SEO 파트너입니다.",
  },
  {
    href: "/franchise",
    no: "02",
    title: "프랜차이즈",
    body: "본사와 가맹점이 반복적으로 필요한 브랜드 · 웹 · 검색 유입 구조를 만듭니다.",
  },
  {
    href: "/food-business",
    no: "03",
    title: "식품 · 외식",
    body: "식당, 카페, 식품기업, 식자재 유통까지 실제 운영에 필요한 디지털 기반을 구축합니다.",
  },
];

export function IndustryPrograms() {
  return (
    <section className="border-b border-surface-line bg-surface-alt">
      <div className="container-max py-24">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Partner Program</p>
            <h2 className="text-h1 text-ink text-balance">
              업종별로 협업하는 <br className="hidden md:block" />
              디지털 파트너
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-7 text-ink-500 md:pt-12">
            최종 소비자만 상대하는 제작사가 아니라, 다른 기업이 자신의
            고객에게 더 많은 것을 제공할 수 있도록 뒤에서 지원하는 B2B
            파트너로도 협업합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-surface-line bg-surface-line md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col bg-white p-8 transition-colors hover:bg-surface-alt md:p-10"
            >
              <span className="font-mono text-[11px] tracking-widest text-ink-400">
                {p.no}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-ink-500">
                {p.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-ink group-hover:underline">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
