"use client";

import CheckCircleIcon from "@/src/assets/icons/check-circle.svg";

interface Step {
  label: string;
  number: number;
}

interface StepProgressProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export default function StepProgress({
  steps,
  currentStep,
  onStepClick,
}: StepProgressProps) {
  return (
    <div className="w-full">
      <div className="flex w-full items-start gap-1 sm:gap-2">
        {steps.map((step, i) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div key={step.number} className="contents">
              <button
                type="button"
                onClick={() => isCompleted && onStepClick?.(step.number)}
                disabled={!isCompleted}
                className="flex min-w-0 flex-1 flex-col items-center gap-1.5"
              >
                {isCompleted ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success sm:h-8 sm:w-8">
                    <CheckCircleIcon className="h-2.5 w-2.5 text-white sm:h-4 sm:w-4" />
                  </div>
                ) : (
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border text-[8px] font-bold font-card transition-colors sm:h-8 sm:w-8 sm:border-2 sm:text-[13px] ${
                      isCurrent
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-text-light"
                    }`}
                  >
                    {step.number}
                  </div>
                )}
                <span
                  className={`w-full text-center text-[8px] leading-tight font-semibold font-card sm:text-[10px] md:text-[11px] ${
                    isCompleted
                      ? "text-success"
                      : isCurrent
                        ? "text-primary"
                        : "text-text-muted"
                  }`}
                >
                  {step.label}
                </span>
              </button>

              {i < steps.length - 1 && (
                <div className="flex flex-[0.6] items-start pt-2.5 sm:flex-1 sm:pt-4">
                  <div
                    className={`h-[1.5px] w-full rounded-full ${
                      step.number < currentStep ? "bg-success" : "bg-border"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
