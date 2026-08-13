const CAPABILITIES = [
  ["Next.js", "React"],
  ["TypeScript", "Tailwind CSS"],
  ["Node.js", "PostgreSQL"],
  ["Vercel", "Cloudflare"],
  ["OpenAI", "Google Cloud"],
  ["Figma", "Framer"],
];

export function Capabilities() {
  return (
    <section className="border-b border-surface-line bg-white">
      <div className="container-max py-20">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Stack</p>
            <h2 className="text-h2 text-ink">기술 스택</h2>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-px border border-surface-line bg-surface-line md:grid-cols-3">
              {CAPABILITIES.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white px-5 py-4"
                >
                  <span className="text-[13px] text-ink">{row[0]}</span>
                  <span className="text-[13px] text-ink-500">{row[1]}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13px] leading-6 text-ink-500">
              프로젝트 특성에 따라 워드프레스 · Framer · Webflow 등도 사용
              가능합니다. 스택은 문제에 맞춰 선택하며, 유지관리 편의성과
              배포 안정성을 우선합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
