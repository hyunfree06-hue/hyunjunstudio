import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "관리자 로그인",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm border border-paper-line bg-paper p-8">
        <p className="mb-2 text-center text-xs font-medium tracking-[0.18em] text-ink-light">
          ADMIN
        </p>
        <h1 className="mb-8 text-center text-2xl font-extrabold tracking-tight text-ink">
          관리자
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
