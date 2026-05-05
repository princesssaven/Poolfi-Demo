"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";

interface PendingSignupState {
  email: string;
  firstName: string;
  pseudonym: string;
  verified: boolean;
}

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingSignup, setPendingSignup] = useState<PendingSignupState | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadPendingSignup = async () => {
      const response = await fetch("/api/auth/state", {
        cache: "no-store",
      });

      const payload = (await response.json().catch(() => null)) as
        | { pendingSignup?: PendingSignupState | null }
        | null;

      if (!isMounted || !payload?.pendingSignup) {
        return;
      }

      setPendingSignup(payload.pendingSignup);
    };

    void loadPendingSignup();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((current) => current - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleInput = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) {
        return;
      }

      const digit = value.slice(-1);
      const newCode = [...code];
      newCode[index] = digit;
      setCode(newCode);

      if (digit && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [code]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [code]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, 6);
      const newCode = [...code];

      for (let i = 0; i < pasted.length; i += 1) {
        newCode[i] = pasted[i];
      }

      setCode(newCode);
      const nextEmpty = newCode.findIndex((digit) => !digit);
      inputRefs.current[nextEmpty >= 0 ? nextEmpty : 5]?.focus();
    },
    [code]
  );

  const handleResend = async () => {
    setErrorMessage("");
    setInfoMessage("");
    setIsResending(true);

    const response = await fetch("/api/auth/resend-code", {
      method: "POST",
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(
        payload?.message ?? "We couldn't resend the code right now. Try again."
      );
      setIsResending(false);
      return;
    }

    setCountdown(30);
    setInfoMessage("A fresh verification email is on its way.");
    setIsResending(false);
  };

  const handleVerify = async () => {
    const fullCode = code.join("");

    if (fullCode.length !== 6) {
      setErrorMessage("Enter all 6 digits before continuing.");
      return;
    }

    setErrorMessage("");
    setInfoMessage("");
    setIsSubmitting(true);

    const response = await fetch("/api/auth/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: fullCode,
      }),
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(
        payload?.message ?? "We couldn't verify that code. Try again."
      );
      setIsSubmitting(false);
      return;
    }

    router.push("/set-pin");
  };

  const isComplete = code.every((digit) => digit !== "");

  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        <div className="w-full max-w-[709px]">
          <div className="mb-2.5 flex items-center gap-1.5">
            <span className="h-1 w-6 rounded-full bg-primary/20" />
            <span className="h-1 w-6 rounded-full bg-primary" />
            <span className="h-1 w-6 rounded-full bg-primary/20" />
          </div>

          <p className="font-card text-xs font-semibold uppercase tracking-[1px] text-primary">
            Verification
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <h1 className="font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
              Enter the 6-digit code
            </h1>
            <p className="font-card text-sm text-text-muted">
              Sent to {pendingSignup?.email ?? "your email address"}. Check your
              messages.
            </p>
          </div>

          {errorMessage || infoMessage ? (
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
                aria-live="polite"
              >
                {errorMessage || infoMessage}
              </p>
            </div>
          ) : null}

          <div className="mt-6 flex flex-col gap-[13px]">
            <div
              className="flex w-full overflow-hidden rounded-[10px] sm:w-fit"
              onPaste={handlePaste}
              role="group"
              aria-label="Verification code"
            >
              {code.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInput(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  aria-label={`Digit ${i + 1}`}
                  className={`-ml-px h-12 min-w-0 flex-1 rounded-none border text-center font-card text-xl font-bold outline-none transition-all duration-200 first:ml-0 first:rounded-l-[10px] last:rounded-r-[10px] focus:z-10 sm:h-[58px] sm:w-[96px] sm:flex-none sm:text-[22px] ${
                    digit
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border bg-white text-text-dark"
                  } focus:border-primary focus:ring-2 focus:ring-primary/10`}
                />
              ))}
            </div>
            <p className="font-card text-sm text-text-muted">
              Required before every contribution or withdrawal. Don&apos;t share
              it with anyone.
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            {countdown > 0 ? (
              <span className="font-card text-[13px] font-semibold text-text-muted">
                Resend in {countdown}s
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                disabled={isResending}
                className="font-card text-[13px] font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary disabled:opacity-50"
              >
                Resend Code
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={handleVerify}
            disabled={!isComplete || isSubmitting}
            className="mt-4 w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Verifying..." : "Verify code →"}
          </button>

          <div className="mt-4 text-center">
            <Link
              href="/sign-up"
              className="font-card text-[13px] font-semibold text-black transition-colors hover:text-text-dark"
            >
              Go back
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
