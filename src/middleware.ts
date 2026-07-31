import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { ADMIN_COOKIE } from "@/lib/constants";

function getSecret() {
  const password = process.env.ADMIN_PASSWORD || "fallback-secret";
  return new TextEncoder().encode(password + "-admin-session-key");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin") {
    const token = request.cookies.get(ADMIN_COOKIE)?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    try {
      await jwtVerify(token, getSecret());
      return NextResponse.next();
    } catch {
      const res = NextResponse.redirect(new URL("/admin", request.url));
      res.cookies.delete(ADMIN_COOKIE);
      return res;
    }
  }

  // If already logged in and visiting /admin, go to dashboard
  if (pathname === "/admin") {
    const token = request.cookies.get(ADMIN_COOKIE)?.value;
    if (token) {
      try {
        await jwtVerify(token, getSecret());
        return NextResponse.redirect(
          new URL("/admin/dashboard", request.url)
        );
      } catch {
        // fall through to login
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
