"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { LinkButton } from "@/components/ui/LinkButton";

export function CtaBand() {
  return (
    <section className="px-4 pb-16 sm:px-6 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gradient-cta mx-auto max-w-6xl rounded-[2rem] px-6 py-12 text-center shadow-lift sm:px-10 md:py-14"
      >
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          프로젝트 아이디어가 있으신가요?
        </h2>
        <p className="mt-3 text-white/90">
          편하게 말씀 주세요. 부담 없이 이야기부터 나눠요.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton href={SITE.kakaoOpenChat} variant="kakao" size="lg">
            카카오 오픈채팅으로 문의
          </LinkButton>
          <LinkButton
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white/40 bg-white/90"
          >
            사이트에서 문의하기
          </LinkButton>
        </div>
      </motion.div>
    </section>
  );
}
