import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "프로젝트 문의",
  description:
    "프라이머리시스템에 프로젝트 문의를 남겨주세요. 평균 응답 30분 이내로 회신 드립니다.",
};

export default function ContactPage() {
  return (
    <div className="container-max py-20">
      <div className="mb-14">
        <p className="eyebrow mb-3">Contact</p>
        <h1 className="text-h1 text-ink">프로젝트 문의</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-500">
          브랜드, 웹사이트, 프로덕트, 검색 최적화 등 어떤 주제든 편하게
          문의해 주세요. 접수 후 평균 30분 이내에 이메일 · 카톡으로 회신
          드립니다.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
        <ContactForm />
        <aside className="flex flex-col gap-6">
          <ContactCard
            label="Email"
            value={SITE.email}
            href={`mailto:${SITE.email}`}
          />
          <ContactCard
            label="Phone"
            value={SITE.phoneDisplay}
            href={`tel:${SITE.phone}`}
          />
          <ContactCard
            label="KakaoTalk 오픈채팅"
            value="바로 대화 시작하기"
            href={SITE.kakaoOpenChat}
            external
          />
          <div className="border border-surface-line p-5">
            <p className="eyebrow mb-3">Response time</p>
            <p className="text-[14px] leading-7 text-ink-600">
              평일 09:00 ~ 22:00 사이 평균 30분 이내 회신.
              주말 · 공휴일은 다음 영업일에 처리됩니다.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block border border-surface-line bg-white p-5 transition-colors hover:border-ink"
    >
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-[15px] font-medium text-ink">{value}</p>
    </a>
  );
}
