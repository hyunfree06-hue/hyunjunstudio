import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "관리자 로그인",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-3xl border border-ink/5 bg-white p-8 shadow-soft">
        <h1 className="mb-2 text-center text-2xl font-extrabold text-ink">
          관리자
        </h1>
        <p className="mb-8 text-center text-sm text-ink-muted">
          비밀번호를 입력해 주세요
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
