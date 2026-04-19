import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  AUTH_COOKIE_NAMES,
  isPendingSignupVerified,
  readPendingSignupCookie,
  readSessionCookie,
} from "@/src/lib/auth/session";

const PROTECTED_PATHS = new Set([
  "/",
  "/contributors",
  "/create-impact-pool",
  "/create-pool",
  "/create-pool-new",
  "/impact",
  "/impact-contribution",
  "/my-pools",
  "/my-wallet",
  "/notifications",
  "/pool-submitted",
  "/settings",
  "/updates",
]);

function isProtectedPath(pathname: string) {
  return (
    PROTECTED_PATHS.has(pathname) ||
    pathname.startsWith("/pool/") ||
    pathname.startsWith("/withdrawals/")
  );
}

export const proxy = auth((request) => {
  const pathname = request.nextUrl.pathname;
  const session = readSessionCookie(
    request.cookies.get(AUTH_COOKIE_NAMES.session)?.value
  );
  const pendingSignup = readPendingSignupCookie(
    request.cookies.get(AUTH_COOKIE_NAMES.pendingSignup)?.value
  );
  const hasSession = Boolean(request.auth?.user || session);

  if (
    hasSession &&
    ["/sign-in", "/sign-up", "/verify", "/set-pin", "/forgot-password", "/reset-password"].includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!hasSession && isProtectedPath(pathname)) {
    const signInUrl = new URL("/sign-in", request.url);
    const nextPath = `${pathname}${request.nextUrl.search}`;

    if (nextPath !== "/") {
      signInUrl.searchParams.set("next", nextPath);
    }

    return NextResponse.redirect(signInUrl);
  }

  if (pathname === "/verify" && !pendingSignup) {
    return NextResponse.redirect(new URL("/sign-up", request.url));
  }

  if (pathname === "/verify" && isPendingSignupVerified(pendingSignup)) {
    return NextResponse.redirect(new URL("/set-pin", request.url));
  }

  if (pathname === "/set-pin" && !pendingSignup) {
    return NextResponse.redirect(new URL("/sign-up", request.url));
  }

  if (pathname === "/set-pin" && !isPendingSignupVerified(pendingSignup)) {
    return NextResponse.redirect(new URL("/verify", request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/",
    "/contributors",
    "/create-impact-pool",
    "/create-pool",
    "/create-pool-new",
    "/impact",
    "/impact-contribution",
    "/my-pools",
    "/my-wallet",
    "/notifications",
    "/pool/:path*",
    "/pool-submitted",
    "/forgot-password",
    "/reset-password",
    "/settings",
    "/set-pin",
    "/sign-in",
    "/sign-up",
    "/updates",
    "/verify",
    "/withdrawals/:path*",
  ],
};
