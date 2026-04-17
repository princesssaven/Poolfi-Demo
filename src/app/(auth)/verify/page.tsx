"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";

export default function VerifyPage() {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleInput = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return;
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
      for (let i = 0; i < pasted.length; i++) {
        newCode[i] = pasted[i];
      }
      setCode(newCode);
      const nextEmpty = newCode.findIndex((d) => !d);
      inputRefs.current[nextEmpty >= 0 ? nextEmpty : 5]?.focus();
    },
    [code]
  );

  const handleResend = () => {
    setIsResending(true);
    setCountdown(30);
    setTimeout(() => setIsResending(false), 1000);
  };

  const handleVerify = () => {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      setIsSubmitting(true);
      setTimeout(() => {
        window.location.href = "/set-pin";
      }, 600);
    }
  };

  const isComplete = code.every((d) => d !== "");

  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-6 py-16 lg:px-12">
        <div className="w-full max-w-[709px]">
          {/* Progress indicator - Step 2 of 3 */}
          <div className="mb-2.5 flex items-center gap-1.5">
            <span className="h-1 w-6 rounded-full bg-primary/20" />
            <span className="h-1 w-6 rounded-full bg-primary" />
            <span className="h-1 w-6 rounded-full bg-primary/20" />
          </div>

          {/* Section label */}
          <p className="font-card text-xs font-semibold uppercase tracking-[1px] text-primary">
            Verification
          </p>

          {/* Header */}
          <div className="mt-4 flex flex-col gap-2">
            <h1 className="font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
              Enter the 6-digit code
            </h1>
            <p className="font-card text-sm text-text-muted">
              Sent to princess@mail.com. Check your messages.
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="mt-6 flex flex-col gap-[13px]">
            <div
              className="flex gap-[17px]"
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
                  className={`h-[66px] w-[112px] shrink rounded-[10px] border text-center font-card text-2xl font-bold transition-all duration-200 outline-none ${
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

          {/* Resend Code */}
          <div className="mt-4 flex justify-center">
            {countdown > 0 ? (
              <span className="font-card text-[13px] font-semibold text-text-muted">
                Resend in {countdown}s
              </span>
            ) : (
              <button
                onClick={handleResend}
                disabled={isResending}
                className="font-card text-[13px] font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary disabled:opacity-50"
              >
                Resend Code
              </button>
            )}
          </div>

          {/* Verify button */}
          <button
            onClick={handleVerify}
            disabled={!isComplete || isSubmitting}
            className="mt-4 w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Verifying..." : "Verify code →"}
          </button>

          {/* Go back */}
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
