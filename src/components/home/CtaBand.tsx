import Link from "next/link";
import { SITE } from "@/lib/constants";

export function CtaBand() {
  return (
    <section className="bg-ink text-white">
      <div className="container-max grid gap-10 py-20 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <p className="eyebrow mb-4 text-ink-300">Start a project</p>
          <h2 className="text-h1 text-white text-balance">
            브랜드나 프로덕트, 지금 필요한 것부터 이야기해 봅시다.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-200">
            평균 응답 30분 이내. 견적 · 일정 · 진행 방식까지 카톡이나
            이메일로 편하게 회신 드립니다.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="btn rounded-none bg-white text-ink hover:bg-ink-100"
          >
            프로젝트 문의하기 →
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className="btn rounded-none border border-ink-700 text-white hover:border-white"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
