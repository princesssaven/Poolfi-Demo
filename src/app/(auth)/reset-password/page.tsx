"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecking, setIsChecking] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const validateToken = async () => {
      if (!token) {
        if (isMounted) {
          setErrorMessage("That reset link is invalid or missing.");
          setIsChecking(false);
        }
        return;
      }

      const response = await fetch(
        `/api/auth/reset-password?token=${encodeURIComponent(token)}`,
        { cache: "no-store" }
      );

      const payload = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!isMounted) {
        return;
      }

      if (!response.ok) {
        setErrorMessage(
          payload?.message ?? "That reset link is invalid or has expired."
        );
      }

      setIsChecking(false);
    };

    void validateToken();

    return () => {
      isMounted = false;
    };
  }, [token]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password.length < 8) {
      setErrorMessage("Use a password with at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Your passwords don't match yet.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    const response = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        token,
      }),
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(
        payload?.message ?? "We couldn't reset your password right now."
      );
      setIsSubmitting(false);
      return;
    }

    router.push("/sign-in?reset=success");
  };

  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <div className="w-full max-w-[709px]">
          <p className="font-card text-xs font-semibold uppercase tracking-[1px] text-primary">
            Password Reset
          </p>
          <h1 className="mt-2 font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
            Choose a new password
          </h1>
          <p className="mt-2 font-card text-sm text-text-muted">
            Set a new password for your PoolFi account.
          </p>

          {errorMessage ? (
            <div className="mt-6 rounded-[10px] border border-danger/20 bg-danger/5 px-4 py-3">
              <p className="font-card text-sm font-medium text-danger">
                {errorMessage}
              </p>
            </div>
          ) : null}

          {isChecking ? (
            <div className="mt-6 rounded-[10px] border border-border bg-white px-4 py-6">
              <p className="font-card text-sm text-text-muted">Checking your reset link…</p>
            </div>
          ) : errorMessage ? (
            <p className="mt-6 text-center font-card text-[13px] text-text-muted">
              Need another link?{" "}
              <Link
                href="/forgot-password"
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
              >
                Request a new reset email
              </Link>
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
              <div className="flex flex-col gap-[7px]">
                <label
                  htmlFor="password"
                  className="font-card text-[13px] font-medium text-text-dark"
                >
                  New password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Min. 8 characters"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div className="flex flex-col gap-[7px]">
                <label
                  htmlFor="confirmPassword"
                  className="font-card text-[13px] font-medium text-text-dark"
                >
                  Confirm new password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Repeat your new password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <button
                type="submit"
                disabled={!password || !confirmPassword || isSubmitting}
                className="w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Resetting..." : "Reset password →"}
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
