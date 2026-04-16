"use client";

import { useState } from "react";
import Link from "next/link";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";
import AuthTabToggle from "@/src/components/auth/AuthTabToggle";

export default function SignInPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 600);
  };

  const isFormValid = emailOrPhone.trim() && password.trim();

  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-6 py-16 lg:px-12">
        <div className="w-full max-w-[709px]">
          {/* Header */}
          <h1 className="font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
            Already a Diver?
          </h1>
          <p className="mt-2 font-card text-sm text-text-muted">
            Join thousands of communities already pooling with PoolFi.
          </p>

          {/* Tab toggle */}
          <div className="mt-5">
            <AuthTabToggle activeTab="sign-in" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-[22px]">
            {/* Email or Phone */}
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="emailOrPhone"
                className="font-card text-[13px] font-medium text-text-dark"
              >
                Email Address or Phone Number
              </label>
              <input
                id="emailOrPhone"
                type="text"
                placeholder="saven@email.com"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
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
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="font-card text-sm font-bold text-primary hover:underline transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign In →"}
            </button>
          </form>

          {/* Sign up link */}
          <p className="mt-6 text-center font-card text-[13px] text-text-muted">
            New to Poolfi?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
