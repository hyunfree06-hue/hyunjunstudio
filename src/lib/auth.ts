import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  ADMIN_FAIL_COOKIE,
  LOCKOUT_SECONDS,
  MAX_FAIL_ATTEMPTS,
} from "./constants";

function getSecret() {
  const password = process.env.ADMIN_PASSWORD || "fallback-secret";
  return new TextEncoder().encode(password + "-admin-session-key");
}

export async function createSessionToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function verifySessionToken(
  token: string
): Promise<boolean> {
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}

export function getFailState(): {
  count: number;
  lockedUntil: number | null;
} {
  const cookieStore = cookies();
  const raw = cookieStore.get(ADMIN_FAIL_COOKIE)?.value;
  if (!raw) return { count: 0, lockedUntil: null };

  try {
    const parsed = JSON.parse(raw) as {
      count: number;
      lockedUntil: number | null;
    };
    return parsed;
  } catch {
    return { count: 0, lockedUntil: null };
  }
}

export function isLockedOut(): boolean {
  const { lockedUntil } = getFailState();
  if (!lockedUntil) return false;
  return Date.now() < lockedUntil;
}

export function recordFailedAttempt(): {
  count: number;
  lockedUntil: number | null;
  remainingLockSeconds: number;
} {
  const cookieStore = cookies();
  const current = getFailState();

  if (current.lockedUntil && Date.now() < current.lockedUntil) {
    return {
      ...current,
      remainingLockSeconds: Math.ceil(
        (current.lockedUntil - Date.now()) / 1000
      ),
    };
  }

  const count = (current.lockedUntil ? 0 : current.count) + 1;
  const lockedUntil =
    count >= MAX_FAIL_ATTEMPTS
      ? Date.now() + LOCKOUT_SECONDS * 1000
      : null;

  const state = { count: lockedUntil ? 0 : count, lockedUntil };
  cookieStore.set(ADMIN_FAIL_COOKIE, JSON.stringify(state), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10,
  });

  return {
    ...state,
    remainingLockSeconds: lockedUntil
      ? LOCKOUT_SECONDS
      : 0,
  };
}

export function clearFailState() {
  const cookieStore = cookies();
  cookieStore.delete(ADMIN_FAIL_COOKIE);
}

export {
  ADMIN_COOKIE,
  ADMIN_FAIL_COOKIE,
  LOCKOUT_SECONDS,
  MAX_FAIL_ATTEMPTS,
};
