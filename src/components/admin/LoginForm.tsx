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
          className="w-full rounded-lg border border-paper-line bg-paper px-4 py-3 text-center text-lg tracking-widest outline-none focus:border-ink"
        />
      </div>
      {state.error && (
        <p className="border border-coral/30 bg-coral/5 px-4 py-3 text-center text-sm text-coral">
          {state.error}
        </p>
      )}
      <SubmitButton />
    </form>
  );
}
