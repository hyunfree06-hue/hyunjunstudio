"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

const BUDGETS = ["100만원 미만", "100~500만원", "500~1,000만원", "1,000만원 이상", "미정"];
const TOPICS = ["브랜드 · 로고", "웹사이트", "SaaS · 프로덕트", "SEO · 검색 최적화", "기타"];

export function ContactForm() {
  const [state, setState] = useState<{
    name: string;
    contact: string;
    topic: string;
    budget: string;
    message: string;
  }>({
    name: "",
    contact: "",
    topic: TOPICS[0],
    budget: BUDGETS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[프로젝트 문의] ${state.topic} · ${state.name}`,
    );
    const body = encodeURIComponent(
      [
        `이름: ${state.name}`,
        `연락처: ${state.contact}`,
        `주제: ${state.topic}`,
        `예산: ${state.budget}`,
        "",
        state.message,
      ].join("\n"),
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-surface-line bg-surface-alt p-8">
        <p className="eyebrow mb-3">문의 전송 준비 완료</p>
        <p className="text-[15px] leading-7 text-ink">
          이메일 앱이 열렸어요. 내용을 확인하고 전송해 주시면 30분 이내
          회신 드립니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="btn btn-outline rounded-none"
          >
            이메일 다시 열기
          </a>
          <a
            href={SITE.kakaoOpenChat}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary rounded-none"
          >
            카카오 오픈채팅으로 문의
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 border border-surface-line bg-white p-6 md:p-8"
    >
      <Field label="이름 / 소속">
        <input
          required
          type="text"
          value={state.name}
          onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
          className={inputClass}
          placeholder="홍길동 / (주)회사명"
        />
      </Field>
      <Field label="연락처 (이메일 또는 전화)">
        <input
          required
          type="text"
          value={state.contact}
          onChange={(e) => setState((s) => ({ ...s, contact: e.target.value }))}
          className={inputClass}
          placeholder="example@company.com"
        />
      </Field>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="문의 주제">
          <select
            value={state.topic}
            onChange={(e) => setState((s) => ({ ...s, topic: e.target.value }))}
            className={selectClass}
          >
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="예상 예산">
          <select
            value={state.budget}
            onChange={(e) => setState((s) => ({ ...s, budget: e.target.value }))}
            className={selectClass}
          >
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="프로젝트 개요">
        <textarea
          required
          rows={6}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          className={`${inputClass} resize-y`}
          placeholder="어떤 것을 만들고 싶으신지, 참고 사이트 · 일정 · 기타 특이사항을 편하게 적어주세요."
        />
      </Field>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary rounded-none">
          이메일로 문의 보내기 →
        </button>
        <a
          href={SITE.kakaoOpenChat}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline rounded-none"
        >
          카카오 오픈채팅으로 바로 대화
        </a>
      </div>
      <p className="text-[11px] leading-5 text-ink-400">
        전송 시 기본 이메일 앱이 열립니다. 이메일이 아닌 다른 방식으로
        접수를 원하시면 카톡 · 전화(
        <a href={`tel:${SITE.phone}`} className="underline">
          {SITE.phoneDisplay}
        </a>
        )로 편하게 연락 주세요.
      </p>
    </form>
  );
}

const inputClass =
  "w-full border border-surface-line bg-white px-3 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-400 focus:border-ink";
const selectClass =
  "w-full border border-surface-line bg-white px-3 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-ink";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="eyebrow">{label}</span>
      {children}
    </label>
  );
}
