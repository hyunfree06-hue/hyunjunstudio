"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_COOKIE,
  clearFailState,
  createSessionToken,
  getFailState,
  isLockedOut,
  recordFailedAttempt,
  LOCKOUT_SECONDS,
} from "@/lib/auth";

export type LoginState = {
  error?: string;
  lockedSeconds?: number;
};

export async function adminLogin(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  if (isLockedOut()) {
    const { lockedUntil } = getFailState();
    const remaining = lockedUntil
      ? Math.ceil((lockedUntil - Date.now()) / 1000)
      : LOCKOUT_SECONDS;
    return {
      error: `잠시 후 다시 시도해 주세요 (${remaining}초)`,
      lockedSeconds: remaining,
    };
  }

  const password = String(formData.get("password") || "");
  const expected = process.env.ADMIN_PASSWORD || "123456";

  if (password !== expected) {
    const fail = recordFailedAttempt();
    if (fail.lockedUntil) {
      return {
        error: `비밀번호 오류가 너무 많아요. ${LOCKOUT_SECONDS}초 후 다시 시도해 주세요.`,
        lockedSeconds: LOCKOUT_SECONDS,
      };
    }
    return {
      error: `비밀번호가 올바르지 않아요. (${fail.count}/3)`,
    };
  }

  clearFailState();
  const token = await createSessionToken();
  const cookieStore = cookies();
  cookieStore.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/admin/dashboard");
}

export async function adminLogout() {
  const cookieStore = cookies();
  cookieStore.delete(ADMIN_COOKIE);
  redirect("/admin");
}
