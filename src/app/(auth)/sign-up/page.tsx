"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";
import AuthTabToggle from "@/src/components/auth/AuthTabToggle";
import GoogleIcon from "@/src/assets/icons/google.svg";

function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pseudonym, setPseudonym] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const nextPath = searchParams.get("next");
  const googleRedirect =
    nextPath && nextPath.startsWith("/") && !nextPath.startsWith("//")
      ? nextPath
      : "/";
  const signInHref = nextPath ? `/sign-in?next=${encodeURIComponent(nextPath)}` : "/sign-in";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password,
        pseudonym,
      }),
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(
        payload?.message ?? "We couldn't create your account right now. Try again."
      );
      setIsSubmitting(false);
      return;
    }

    router.push("/verify");
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

  const isFormValid =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    pseudonym.trim().length >= 3 &&
    email.trim().length > 0 &&
    password.length >= 8;

  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-12">
        <div className="w-full max-w-[709px]">
          <div className="mb-5 flex items-center gap-1.5">
            <span className="h-1 w-6 rounded-full bg-primary" />
            <span className="h-1 w-6 rounded-full bg-primary/20" />
            <span className="h-1 w-6 rounded-full bg-primary/20" />
          </div>

          <p className="font-card text-xs font-semibold uppercase tracking-[1px] text-primary">
            Welcome to Poolfi
          </p>
          <h1 className="mt-2 font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
            Create your account
          </h1>
          <p className="mt-2 font-card text-sm text-text-muted">
            Join thousands of communities already pooling with PoolFi.
          </p>

          <div className="mt-5">
            <AuthTabToggle activeTab="sign-up" />
          </div>

          {errorMessage ? (
            <div className="mt-6 rounded-[10px] border border-danger/20 bg-danger/5 px-4 py-3">
              <p className="font-card text-sm font-medium text-danger" aria-live="polite">
                {errorMessage}
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-[22px]">
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
                  autoComplete="given-name"
                  required
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
                  autoComplete="family-name"
                  required
                  className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

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
                autoComplete="nickname"
                minLength={3}
                required
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <p className="font-card text-[13px] font-medium text-placeholder">
                3–20 characters · letters, numbers and underscores only · no
                spaces
              </p>
            </div>

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
                autoComplete="email"
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
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-[10px] border border-border bg-white px-4 py-3 font-card text-sm text-text-dark placeholder:text-placeholder outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {pseudonym.length >= 3 ? (
              <div className="animate-in fade-in flex items-start gap-2.5 rounded-[10px] border border-primary/15 bg-primary-light px-4 py-3.5 duration-300">
                <span className="text-base leading-none" aria-hidden="true">
                  🎭
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="font-card text-[12.5px] font-semibold leading-5 text-info-blue">
                    Your PoolFi username — used when you contribute anonymously
                    to impact pools. Only you can see this.
                  </p>
                  <span className="inline-flex w-fit rounded-sm bg-primary/80 px-2 py-0.5 font-card text-[11px] font-semibold tracking-[0.3px] text-white">
                    {pseudonym}
                  </span>
                </div>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting || isGoogleSubmitting}
              className="w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creating..." : "Create Account →"}
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

          <p className="mt-5 text-center font-card text-[13px] text-text-muted">
            Already have an account?{" "}
            <Link
              href={signInHref}
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
            >
              Sign in
            </Link>
          </p>

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

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUpForm />
    </Suspense>
  );
}
