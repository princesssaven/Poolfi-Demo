"use client";

import { useState } from "react";
import Link from "next/link";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";
import AuthTabToggle from "@/src/components/auth/AuthTabToggle";
import GoogleIcon from "@/src/assets/icons/google.svg";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pseudonym, setPseudonym] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Navigate to verify after "submission"
    setTimeout(() => {
      window.location.href = "/verify";
    }, 600);
  };

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    pseudonym.trim() &&
    email.trim() &&
    password.length >= 8;

  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-12">
        <div className="w-full max-w-[709px]">
          {/* Progress indicator */}
          <div className="mb-5 flex items-center gap-1.5">
            <span className="h-1 w-6 rounded-full bg-primary" />
            <span className="h-1 w-6 rounded-full bg-primary/20" />
            <span className="h-1 w-6 rounded-full bg-primary/20" />
          </div>

          {/* Header */}
          <p className="font-card text-xs font-semibold uppercase tracking-[1px] text-primary">
            Welcome to Poolfi
          </p>
          <h1 className="mt-2 font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
            Create your account
          </h1>
          <p className="mt-2 font-card text-sm text-text-muted">
            Join thousands of communities already pooling with PoolFi.
          </p>

          {/* Tab toggle */}
          <div className="mt-5">
            <AuthTabToggle activeTab="sign-up" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-[22px]">
            {/* First Name + Last Name */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 flex-col gap-[7px]">
                <label
                  htmlFor="firstName"
                  className="font-card text-[13px] font-medium text-text-dark"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Princess"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[7px]">
                <label
                  htmlFor="lastName"
                  className="font-card text-[13px] font-medium text-text-dark"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Saven"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            {/* Pseudonym */}
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="pseudonym"
                className="font-card text-[13px] font-medium text-text-dark"
              >
                Choose your pseudonym —{" "}
                <span className="font-normal text-placeholder">
                  your public username on PoolFi
                </span>
              </label>
              <input
                id="pseudonym"
                type="text"
                placeholder="e.g Saven"
                value={pseudonym}
                onChange={(e) =>
                  setPseudonym(
                    e.target.value.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 20)
                  )
                }
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <p className="font-card text-[13px] font-medium text-placeholder">
                3–20 characters · letters, numbers and underscores only · no
                spaces
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="email"
                className="font-card text-[13px] font-medium text-text-dark"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="saven@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Password */}
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
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Username info box */}
            {pseudonym.length >= 3 && (
              <div className="flex items-start gap-2.5 rounded-[10px] border border-primary/15 bg-primary-light px-4 py-3.5 animate-in fade-in duration-300">
                <span className="text-base leading-none" aria-hidden="true">
                  🎭
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="font-card text-[12.5px] font-semibold leading-5 text-info-blue">
                    Your PoolFi username — used when you contribute anonymously
                    to impact pools. Only you can see this.
                  </p>
                  <span className="inline-flex w-fit rounded-sm bg-white px-2 py-0.5 font-card text-[11px] font-semibold tracking-[0.3px] text-white bg-primary/80">
                    {pseudonym}
                  </span>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creating..." : "Create Account →"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="font-card text-xs text-text-muted">
              or continue with
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-[10px] border border-border bg-white py-3 font-card text-sm font-medium text-text-dark transition-colors duration-200 hover:bg-gray-50 active:scale-[0.98]"
          >
            <GoogleIcon className="h-[18px] w-[18px]" />
            Continue with Google
          </button>

          {/* Sign in link */}
          <p className="mt-5 text-center font-card text-[13px] text-text-muted">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
            >
              Sign in
            </Link>
          </p>

          {/* Terms */}
          <p className="mt-3 text-center font-card text-[11.5px] text-text-muted">
            By signing up you agree to PoolFi&apos;s{" "}
            <Link
              href="/terms"
              className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
