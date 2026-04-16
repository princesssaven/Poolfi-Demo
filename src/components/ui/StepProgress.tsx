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
    <div className="flex items-start justify-between w-full">
      {steps.map((step, i) => {
        const isCompleted = step.number < currentStep;
        const isCurrent = step.number === currentStep;
        const isUpcoming = step.number > currentStep;

        return (
          <div key={step.number} className="flex items-center flex-1 last:flex-initial">
            {/* Step node */}
            <button
              onClick={() => isCompleted && onStepClick?.(step.number)}
              disabled={!isCompleted}
              className="flex flex-col items-center gap-1.5"
            >
              {isCompleted ? (
                <div className="w-8 h-8 flex items-center justify-center">
                  <CheckCircleIcon className="w-8 h-8 text-success" />
                </div>
              ) : (
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold font-card border-2 transition-colors ${
                    isCurrent
                      ? "bg-primary border-primary text-white"
                      : "bg-white border-border text-text-muted"
                  }`}
                >
                  {step.number}
                </div>
              )}
              <span
                className={`text-[11px] font-semibold font-card whitespace-nowrap ${
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

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="flex-1 mx-3 mt-[-12px]">
                <div
                  className={`h-[2px] rounded-full w-full ${
                    step.number < currentStep ? "bg-success" : "bg-border"
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
