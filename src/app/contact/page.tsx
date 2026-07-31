import type { Metadata } from "next";
import { MessageCircle, Clock, Smartphone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { LinkButton } from "@/components/ui/LinkButton";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionLabel } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "문의하기",
  description: "프로젝트 아이디어를 편하게 말씀해 주세요.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 md:py-24">
      <div className="mb-12">
        <SectionLabel>— CONTACT</SectionLabel>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          문의하기
        </h1>
        <p className="mt-4 text-ink-muted">
          부담 갖지 마세요. 이야기부터 나눠요.
        </p>
      </div>

      <div className="mb-12 flex flex-col items-start gap-3 border border-paper-line bg-paper-warm/60 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">가장 빠른 답변</p>
          <p className="mt-1 text-xs text-ink-muted">
            카카오 오픈채팅으로 편하게 말씀해 주세요
          </p>
        </div>
        <LinkButton
          href={SITE.kakaoOpenChat}
          variant="kakao"
          size="lg"
          className="w-full sm:w-auto"
        >
          <MessageCircle strokeWidth={1.5} size={16} />
          카톡으로 문의하기 →
        </LinkButton>
      </div>

      <div className="border-t border-paper-line pt-10">
        <h2 className="mb-8 text-lg font-semibold tracking-tight text-ink">
          사이트에서 문의하기
        </h2>
        <ContactForm />
      </div>

      <div className="mt-16 space-y-4 border-t border-paper-line pt-10 text-sm text-ink-muted">
        <p className="flex items-center gap-2">
          <Clock strokeWidth={1.5} size={15} className="text-ink-light" />
          평균 응답{" "}
          <strong className="font-medium text-ink tabular-nums">
            {SITE.trust.responseTime} 이내
          </strong>
          · 평일·주말 10:00 – 22:00
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <LinkButton href={SITE.kakaoOpenChat} variant="kakao" size="sm">
            <MessageCircle strokeWidth={1.5} size={14} />
            카톡 오픈채팅
          </LinkButton>
          <LinkButton href={`sms:${SITE.phone}`} variant="outline" size="sm">
            <Smartphone strokeWidth={1.5} size={14} />
            {SITE.phoneDisplay}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
