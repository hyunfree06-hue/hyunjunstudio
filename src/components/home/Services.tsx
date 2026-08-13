const SERVICES = [
  {
    no: "01",
    title: "브랜드 · 로고 시스템",
    body:
      "네이밍 검토부터 로고 · 컬러 · 타이포 · 명함 · 사인까지 사용 환경 전반을 고려한 브랜드 시스템을 설계합니다.",
    items: ["로고 & 시안", "브랜드 가이드", "명함 · 인쇄물"],
  },
  {
    no: "02",
    title: "웹사이트 · 프로덕트 개발",
    body:
      "랜딩부터 커머스, SaaS 프로덕트까지 Next.js 기반으로 실서비스 수준의 웹을 직접 설계 · 구축합니다.",
    items: ["기업 홈페이지", "리드 랜딩", "커머스 · SaaS"],
  },
  {
    no: "03",
    title: "검색 최적화 · 콘텐츠 확장",
    body:
      "제작 이후에도 검색 노출 구조를 관리합니다. 색인 페이지 확장, 스키마 · 사이트맵, 콘텐츠 등록 자동화까지 포함합니다.",
    items: ["SEO 등록 · 구조 설계", "콘텐츠 확장", "GA · GSC 모니터링"],
  },
  {
    no: "04",
    title: "자체 소프트웨어",
    body:
      "반복 업무를 줄이는 SaaS · 사내 툴을 자체 개발합니다. 기존 워크플로에 맞춰 붙이거나 새로 만드는 것을 함께 선택할 수 있습니다.",
    items: ["세일즈 자동화", "관리자 툴", "내부 데이터 파이프라인"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-surface-line bg-white">
      <div className="container-max py-24">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Services</p>
            <h2 className="text-h1 text-ink text-balance">
              디자인·웹·시스템을 <br className="hidden md:block" />한 팀에서
              제공합니다.
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-7 text-ink-500 md:pt-12">
            프라이머리시스템은 브랜드, 웹, 검색, 소프트웨어까지 실제 서비스에
            필요한 디지털 자산을 한 팀에서 처음부터 끝까지 만듭니다.
            에이전시 여러 곳을 조율할 필요 없이, 결과물의 톤과 품질이 일관되게
            유지됩니다.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-surface-line bg-surface-line md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.no}
              className="flex flex-col bg-white p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-widest text-ink-400">
                  {s.no}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-ink-500">
                {s.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-ink-500">
                {s.items.map((i) => (
                  <li key={i} className="border-b border-surface-line pb-1">
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
