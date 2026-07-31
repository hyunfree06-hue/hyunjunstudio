import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LinkButton } from "@/components/ui/LinkButton";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "문의하기",
  description: "프로젝트 아이디어를 편하게 말씀해 주세요.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          문의하기
        </h1>
        <p className="mt-3 text-ink-muted">
          부담 갖지 마세요. 이야기부터 나눠요 🙂
        </p>
      </div>

      <div className="mb-10 flex flex-col items-center gap-3 rounded-3xl border border-[#FEE500]/60 bg-[#FEE500]/20 px-5 py-6 sm:flex-row sm:justify-center">
        <LinkButton
          href={SITE.kakaoOpenChat}
          variant="kakao"
          size="lg"
          className="w-full sm:w-auto"
        >
          카톡으로 편하게 문의하기 →
        </LinkButton>
        <p className="text-sm text-ink-muted">가장 빠르게 답변드릴 수 있어요</p>
      </div>

      <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft sm:p-8">
        <h2 className="mb-6 text-lg font-bold text-ink">사이트에서 문의하기</h2>
        <ContactForm />
      </div>

      <div className="mt-10 space-y-3 rounded-3xl bg-cream-dark/70 px-6 py-8 text-center text-sm text-ink-muted">
        <p>
          ⏱️ 평균 응답 시간:{" "}
          <strong className="text-ink">{SITE.trust.responseTime} 이내</strong>
        </p>
        <p>🕒 운영 시간: 평일·주말 10:00 – 22:00 (유연하게 응대해요)</p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <LinkButton href={SITE.kakaoOpenChat} variant="kakao" size="sm">
            카톡 오픈채팅
          </LinkButton>
          <LinkButton href={`sms:${SITE.phone}`} variant="outline" size="sm">
            문자 {SITE.phoneDisplay}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
