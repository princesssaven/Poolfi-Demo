"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import AuthHeroPanel from "@/src/components/auth/AuthHeroPanel";

export default function SetPinPage() {
  const router = useRouter();
  const [pin, setPin] = useState<string[]>(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInput = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return;
      const digit = value.slice(-1);
      const newPin = [...pin];
      newPin[index] = digit;
      setPin(newPin);

      if (digit && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [pin]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !pin[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [pin]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, 4);
      const newPin = [...pin];
      for (let i = 0; i < pasted.length; i++) {
        newPin[i] = pasted[i];
      }
      setPin(newPin);
      const nextEmpty = newPin.findIndex((d) => !d);
      inputRefs.current[nextEmpty >= 0 ? nextEmpty : 3]?.focus();
    },
    [pin]
  );

  const handleContinue = () => {
    const fullPin = pin.join("");
    if (fullPin.length === 4) {
      setIsSubmitting(true);
      setTimeout(() => {
        router.push("/");
      }, 600);
    }
  };

  const isComplete = pin.every((d) => d !== "");

  return (
    <>
      <AuthHeroPanel />

      <main className="flex flex-1 items-start justify-center overflow-y-auto bg-white px-6 py-16 lg:px-12">
        <div className="w-full max-w-[709px]">
          {/* Progress indicator — Step 3 of 3 */}
          <div className="mb-2.5 flex items-center gap-1.5">
            <span className="h-1 w-6 rounded-full bg-primary/20" />
            <span className="h-1 w-6 rounded-full bg-primary/20" />
            <span className="h-1 w-6 rounded-full bg-primary" />
          </div>

          {/* Section label */}
          <p className="font-card text-xs font-semibold uppercase tracking-[1px] text-primary">
            Setting Pin
          </p>

          {/* Header */}
          <div className="mt-4 flex flex-col gap-2">
            <h1 className="font-card text-[28px] font-extrabold tracking-[-0.5px] text-text-dark">
              Set your transaction pin
            </h1>
            <p className="font-card text-sm text-text-muted">
              Set a 4-digit transaction PIN
            </p>
          </div>

          {/* PIN Inputs */}
          <div className="mt-6 flex flex-col gap-[13px]">
            <div
              className="flex gap-[17px]"
              onPaste={handlePaste}
              role="group"
              aria-label="Transaction PIN"
            >
              {pin.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  type="password"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInput(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  aria-label={`PIN digit ${i + 1}`}
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

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!isComplete || isSubmitting}
            className="mt-6 w-full rounded-[10px] bg-primary py-3 font-card text-[15px] font-semibold tracking-[-0.2px] text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Setting PIN..." : "Continue →"}
          </button>
        </div>
      </main>
    </>
  );
}
