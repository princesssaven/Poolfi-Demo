"use client";

import { useState } from "react";
import Link from "next/link";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(
        payload?.message ?? "We couldn't send a reset link right now. Try again."
      );
      setIsSubmitting(false);
      return;
    }

    setSuccessMessage(
      "If that email exists in PoolFi, a reset link is on its way."
    );
    setIsSubmitting(false);
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
            Reset your password
          </h1>
          <p className="mt-2 font-card text-sm text-text-muted">
            Enter the email address tied to your PoolFi account and we&apos;ll send you a reset link.
          </p>

          {errorMessage || successMessage ? (
            <div
              className={`mt-6 rounded-[10px] px-4 py-3 ${
                errorMessage
                  ? "border border-danger/20 bg-danger/5"
                  : "border border-primary/20 bg-primary-light"
              }`}
            >
              <p
                className={`font-card text-sm font-medium ${
                  errorMessage ? "text-danger" : "text-info-blue"
                }`}
              >
                {errorMessage || successMessage}
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="email"
                className="font-card text-[13px] font-medium text-text-dark"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="princess@email.com"
                autoComplete="email"
                required
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <button
              type="submit"
              disabled={!email.trim() || isSubmitting}
              className="w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send reset link →"}
            </button>
          </form>

          <p className="mt-5 text-center font-card text-[13px] text-text-muted">
            Remembered it?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
            >
              Back to sign in
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
