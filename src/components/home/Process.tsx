const STEPS = [
  {
    no: "STEP 01",
    title: "브리프 · 견적",
    body:
      "카톡 · 이메일 · 전화로 프로젝트 브리프를 받고, 24시간 이내에 명확한 범위와 견적을 회신합니다.",
  },
  {
    no: "STEP 02",
    title: "구조 · 시안",
    body:
      "사이트맵과 정보 구조, 브랜드 · 시안 방향을 정리해 확정 후 실제 개발/디자인에 착수합니다.",
  },
  {
    no: "STEP 03",
    title: "구현 · 검수",
    body:
      "실제 도메인에 스테이징을 올려두고 매 마일스톤마다 확인 가능한 링크로 진행합니다.",
  },
  {
    no: "STEP 04",
    title: "런칭 · 유지",
    body:
      "도메인/DNS · 검색등록 · 애널리틱스 세팅까지 완료 후 원하시면 월 단위 유지관리로 이어갑니다.",
  },
];

export function Process() {
  return (
    <section className="border-b border-surface-line bg-surface-alt">
      <div className="container-max py-24">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Process</p>
            <h2 className="text-h1 text-ink">
              가벼운 첫 대화에서 <br className="hidden md:block" />
              런칭 이후까지.
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-7 text-ink-500 md:pt-12">
            프로젝트마다 규모는 다르지만, 진행 방식은 예측 가능하게
            유지합니다. 각 단계의 산출물과 승인 지점을 미리 공유합니다.
          </p>
        </div>

        <ol className="grid gap-px border border-surface-line bg-surface-line md:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.no} className="bg-white p-8">
              <p className="font-mono text-[11px] tracking-widest text-ink-400">
                {s.no}
              </p>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-ink-500">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
