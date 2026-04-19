"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";
import AuthTabToggle from "@/src/components/auth/AuthTabToggle";
import GoogleIcon from "@/src/assets/icons/google.svg";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const nextPath = searchParams.get("next");
  const googleRedirect =
    nextPath && nextPath.startsWith("/") && !nextPath.startsWith("//")
      ? nextPath
      : "/";
  const signUpHref = nextPath ? `/sign-up?next=${encodeURIComponent(nextPath)}` : "/sign-up";
  const forgotPasswordHref = nextPath
    ? `/forgot-password?next=${encodeURIComponent(nextPath)}`
    : "/forgot-password";
  const authError = searchParams.get("error");
  const resetStatus = searchParams.get("reset");
  const authErrorMessage =
    resetStatus === "success"
      ? "Your password has been reset. Sign in with your new password."
      :
    authError === "AccessDenied"
      ? "Only verified Google accounts can sign in with Google."
      : authError === "DatabaseConfiguration"
        ? "Database setup is incomplete. Add DATABASE_URL to .env.local and run the Drizzle migration first."
      : authError === "Configuration"
        ? "Google OAuth isn't fully configured yet. Add AUTH_SECRET, AUTH_GOOGLE_ID, and AUTH_GOOGLE_SECRET."
        : authError
          ? "Google sign-in failed. Please try again."
          : "";
  const visibleErrorMessage = errorMessage || authErrorMessage;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const response = await fetch("/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailOrPhone,
        password,
      }),
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(
        payload?.message ?? "We couldn't sign you in right now. Try again."
      );
      setIsSubmitting(false);
      return;
    }

    const nextPath = searchParams.get("next");

    router.push(
      nextPath && nextPath.startsWith("/") && !nextPath.startsWith("//")
        ? nextPath
        : "/"
    );
  };

  const handleGoogleContinue = async () => {
    setErrorMessage("");
    setIsGoogleSubmitting(true);

    try {
      await signIn("google", {
        redirectTo: googleRedirect,
      });
    } catch {
      setErrorMessage(
        "We couldn't continue with Google right now. Check your OAuth settings and try again."
      );
      setIsGoogleSubmitting(false);
    }
  };

  const isFormValid = emailOrPhone.trim().length > 0 && password.trim().length > 0;

  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <div className="w-full max-w-[709px]">
          <h1 className="font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
            Already a Diver?
          </h1>
          <p className="mt-2 font-card text-sm text-text-muted">
            Join thousands of communities already pooling with PoolFi.
          </p>

          <div className="mt-5">
            <AuthTabToggle activeTab="sign-in" />
          </div>

          {visibleErrorMessage ? (
            <div className="mt-6 rounded-[10px] border border-danger/20 bg-danger/5 px-4 py-3">
              <p className="font-card text-sm font-medium text-danger" aria-live="polite">
                {visibleErrorMessage}
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-[22px]">
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="emailOrPhone"
                className="font-card text-[13px] font-medium text-text-dark"
              >
                Email Address or PoolFi Username
              </label>
              <input
                id="emailOrPhone"
                type="text"
                placeholder="princess@email.com or savediver"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                autoComplete="username"
                required
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="password"
                className="font-card text-[13px] font-medium text-text-dark"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <div className="flex justify-end">
                <Link
                  href={forgotPasswordHref}
                  className="font-card text-sm font-bold text-primary transition-colors hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting || isGoogleSubmitting}
              className="w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="font-card text-xs text-text-muted">
              or continue with
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={handleGoogleContinue}
            disabled={isSubmitting || isGoogleSubmitting}
            className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-[10px] border border-border bg-white py-3 font-card text-sm font-medium text-text-dark transition-colors duration-200 hover:bg-gray-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <GoogleIcon className="h-[18px] w-[18px]" />
            {isGoogleSubmitting ? "Connecting Google..." : "Continue with Google"}
          </button>

          <p className="mt-6 text-center font-card text-[13px] text-text-muted">
            New to Poolfi?{" "}
            <Link
              href={signUpHref}
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
