import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "프라이머리시스템은 브랜드부터 시스템까지 창업가와 기업의 디지털 자산을 한 팀에서 만드는 서울 기반 IT 스튜디오입니다.",
  alternates: { canonical: "/company" },
};

const FACTS = [
  { label: "상호", value: SITE.legal },
  { label: "브랜드", value: `${SITE.brand} (${SITE.brandKo})` },
  { label: "대표", value: SITE.representative },
  { label: "소재", value: "대한민국 서울" },
  { label: "설립 연도", value: "2024" },
  { label: "공식 도메인", value: SITE.domain },
  { label: "공식 이메일", value: SITE.email },
  { label: "대표 연락처", value: SITE.phoneDisplay },
];

const PRINCIPLES = [
  {
    title: "결과물의 톤을 통일합니다.",
    body:
      "브랜드부터 웹 · 프로덕트까지 같은 팀에서 만들기 때문에, 로고 하나 · 페이지 하나가 서로 어긋나지 않습니다.",
  },
  {
    title: "제작 이후를 함께 봅니다.",
    body:
      "런칭이 끝이 아니라 시작입니다. 색인 · 검색 유입 · 유지 · 콘텐츠 확장까지 이어서 관리합니다.",
  },
  {
    title: "자체 프로덕트를 운영합니다.",
    body:
      "ProposalPilot · DetailForge · Hourse 등 자체 SaaS를 직접 만들고 운영합니다. 프로덕트 · 세일즈 · 성장 실전 데이터를 클라이언트 프로젝트에 그대로 적용합니다.",
  },
  {
    title: "정직하게 씁니다.",
    body:
      "허구의 실적이나 가짜 후기 없이, 실제 데이터와 진행한 프로젝트만 문서와 제안서에 사용합니다.",
  },
];

export default function CompanyPage() {
  return (
    <div>
      <div className="border-b border-surface-line bg-surface-alt">
        <div className="container-max py-20">
          <p className="eyebrow mb-3">Company</p>
          <h1 className="text-h1 text-ink text-balance">
            프라이머리시스템은 <br className="hidden md:block" />
            창업가 · 기업의 디지털 자산을 만드는 IT 스튜디오입니다.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink-500">
            브랜드 아이덴티티, 웹사이트, 검색 최적화, 자체 소프트웨어까지 —
            분리해서 여러 업체에 맡기는 대신 한 팀에서 일관되게 만듭니다.
            프로젝트가 끝난 이후에도 유지 · 확장까지 이어서 봐 드립니다.
          </p>
        </div>
      </div>

      <div className="container-max py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow mb-3">Principles</p>
            <h2 className="text-h2 text-ink">우리가 지키는 것</h2>
          </div>
          <div className="grid gap-px border border-surface-line bg-surface-line md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <article key={p.title} className="bg-white p-8">
                <h3 className="text-[15px] font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-ink-500">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-surface-line bg-surface-alt">
        <div className="container-max py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow mb-3">Company facts</p>
              <h2 className="text-h2 text-ink">회사 정보</h2>
            </div>
            <div>
              <dl className="grid grid-cols-1 gap-px border border-surface-line bg-surface-line sm:grid-cols-2">
                {FACTS.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-4 bg-white px-5 py-4"
                  >
                    <dt className="text-[12px] uppercase tracking-widest text-ink-400">
                      {f.label}
                    </dt>
                    <dd className="text-[13px] text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary rounded-none">
                  프로젝트 문의 →
                </Link>
                <Link href="/portfolio" className="btn btn-outline rounded-none">
                  포트폴리오 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
