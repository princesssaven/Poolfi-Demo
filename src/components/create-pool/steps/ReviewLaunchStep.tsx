"use client";

import RocketIcon from "@/src/assets/icons/rocket.svg";
import LockCircleIcon from "@/src/assets/icons/lock-circle.svg";

interface ReviewData {
  poolName: string;
  target: string;
  perPerson: string;
  deadline: string;
  slots: number;
}

interface ReviewLaunchStepProps {
  data: ReviewData;
  isLaunching?: boolean;
  onLaunch: () => void;
  onBack: () => void;
}

export default function ReviewLaunchStep({
  data,
  isLaunching = false,
  onLaunch,
  onBack,
}: ReviewLaunchStepProps) {
  return (
    <div className="rounded-[20px] border border-border bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-start gap-3.5 p-5 pb-5 sm:p-7 sm:pb-5">
        <RocketIcon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-heading text-[17px] font-bold tracking-[-0.3px] text-text-dark">
            Review & Launch
          </h2>
          <p className="text-[13px] text-text-muted font-card mt-1">
            Everything looks good? Launch your pool and share the link with your
            group.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="flex flex-col gap-4 px-5 pb-5 sm:px-7">
        {/* Pool Summary */}
        <div className="bg-bg-page rounded-xl p-5">
          <p className="text-[13px] font-semibold tracking-[0.8px] uppercase text-text-dark font-card mb-4">
            Pool Summary
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <p className="text-[13px] font-semibold text-text-muted font-card">
                Pool Name
              </p>
              <p className="text-base font-bold text-text-dark font-card mt-0.5">
                {data.poolName || "—"}
              </p>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-text-muted font-card">
                Target
              </p>
              <p className="text-base font-bold text-text-dark font-card mt-0.5">
                {data.target || "—"}
              </p>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-text-muted font-card">
                per person
              </p>
              <p className="text-base font-bold text-text-dark font-card mt-0.5">
                {data.perPerson || "—"}
              </p>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-text-muted font-card">
                Deadline
              </p>
              <p className="text-base font-bold text-text-dark font-card mt-0.5">
                {data.deadline || "—"}
              </p>
            </div>
          </div>
        </div>

        {/* Slots summary */}
        <div className="bg-bg-page rounded-xl p-5">
          <p className="text-[13px] font-semibold tracking-[0.8px] uppercase text-text-dark font-card mb-3">
            Pool Summary
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base font-bold text-text-dark font-card">
              {data.slots} Slots
            </p>
            <span className="text-[13px] font-semibold text-text-muted font-card">
              pre-loaded
            </span>
          </div>
        </div>

        {/* Pricing info */}
        <div className="flex flex-col gap-2.5 rounded-xl border border-primary/12 bg-primary-light p-5 sm:flex-row">
          <LockCircleIcon className="w-6 h-6 shrink-0 text-primary" />
          <div>
            <p className="font-heading text-[15px] font-bold text-primary-dark mb-1">
              Pricing
            </p>
            <p className="text-[12.5px] leading-5 text-primary-dark font-card">
              PoolFi charges 1% of the final payout — only when funds are
              released. No charge if the pool doesn&apos;t reach its goal
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 border-t border-border px-5 py-5 sm:flex-row sm:px-7">
        <button
          onClick={onBack}
          className="flex-1 border border-border text-text-muted text-sm font-semibold font-card py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onLaunch}
          disabled={isLaunching}
          className="flex-1 bg-primary text-white text-sm font-semibold font-card py-3 rounded-full hover:bg-primary-dark transition-colors"
        >
          {isLaunching ? "Launching..." : "Launch Pool →"}
        </button>
      </div>
    </div>
  );
}
