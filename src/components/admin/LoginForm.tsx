"use client";

import { useFormState, useFormStatus } from "react-dom";
import { adminLogin, type LoginState } from "@/app/actions/admin";
import { Button } from "@/components/ui/Button";

const initial: LoginState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={pending}>
      {pending ? "확인 중…" : "입장하기"}
    </Button>
  );
}

export function LoginForm() {
  const [state, action] = useFormState(adminLogin, initial);

  return (
    <form action={action} className="w-full max-w-sm space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-ink">
          관리자 비밀번호
        </label>
        <input
          type="password"
          name="password"
          inputMode="numeric"
          autoComplete="current-password"
          placeholder="숫자 비밀번호"
          className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-center text-lg tracking-widest outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      {state.error && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-center text-sm text-red-600">
          {state.error}
        </p>
      )}
      <SubmitButton />
    </form>
  );
}
