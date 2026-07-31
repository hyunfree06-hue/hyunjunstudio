"use client";

import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { LinkButton } from "@/components/ui/LinkButton";
import { FadeIn } from "@/components/ui/Section";

export function CtaBand() {
  return (
    <section className="border-t border-paper-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            프로젝트 아이디어가
            <br />
            있으신가요?
          </h2>
          <p className="mt-5 text-ink-muted">
            편하게 말씀 주세요. 부담 없이 이야기부터 나눠요.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href={SITE.kakaoOpenChat} variant="kakao" size="lg">
              카카오 오픈채팅으로 문의
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              사이트에서 문의하기
              <ArrowRight strokeWidth={1.5} size={16} />
            </LinkButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
