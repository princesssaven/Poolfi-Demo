"use client";

import EyeIcon from "@/src/assets/icons/eye.svg";
import PreviewGearIcon from "@/src/assets/icons/preview-gear.svg";
import BulbIcon from "@/src/assets/icons/bulb.svg";

interface LivePreviewProps {
  poolName?: string;
  description?: string;
  target?: string;
  perPerson?: string;
  requiredFields?: string[];
}

export default function LivePreview({
  poolName,
  description,
  target,
  perPerson,
  requiredFields = ["👤 Full Name", "🎓 Matric No."],
}: LivePreviewProps) {
  return (
    <div className="w-[340px] shrink-0 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-1.5">
        <EyeIcon className="w-4 h-4 text-text-dark" />
        <span className="text-[13px] font-bold font-card text-text-dark">
          Live Preview
        </span>
        <span className="text-[11px] text-text-muted font-card ml-1">
          What contributors see
        </span>
      </div>

      {/* Preview Card */}
      <div className="rounded-[20px] border border-border overflow-hidden">
        {/* Blue header */}
        <div className="bg-primary p-5 pb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[140px] h-[109px] rounded-full bg-white/[0.06]" />
          <div className="flex items-center gap-1.5 mb-2">
            <PreviewGearIcon className="w-[13px] h-[13px] text-white/70" />
            <span className="text-[10px] font-bold tracking-[1px] uppercase text-white/70 font-card">
              Goal Pool · Private
            </span>
          </div>
          <h3 className="font-heading text-lg font-bold text-white leading-snug">
            {poolName || "Your pool name..."}
          </h3>
          <p className="text-xs text-white/65 font-card mt-1">
            {description || "Add a description above"}
          </p>
        </div>

        {/* Stats */}
        <div className="p-5">
          <div className="flex gap-2.5 mb-3">
            <div className="flex-1 bg-bg-page rounded-[10px] p-3">
              <p className="text-[10px] font-semibold tracking-[0.8px] uppercase text-text-muted font-card">
                Target
              </p>
              <p className="font-heading text-[15px] font-bold text-text-dark mt-1">
                {target ? `₦${target}` : "₦—"}
              </p>
            </div>
            <div className="flex-1 bg-bg-page rounded-[10px] p-3">
              <p className="text-[10px] font-semibold tracking-[0.8px] uppercase text-text-muted font-card">
                Per Person
              </p>
              <p className="font-heading text-[15px] font-bold text-text-dark mt-1">
                {perPerson ? `₦${perPerson}` : "₦—"}
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="h-1.5 bg-bg-page rounded-full mb-2" />
          <div className="flex justify-between text-[11px] font-card mb-4">
            <span className="text-text-muted">₦0 raised</span>
            <span className="text-text-muted">0%</span>
          </div>

          {/* Required Info */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.8px] uppercase text-text-muted font-card mb-2">
              Required Info
            </p>
            <div className="flex flex-col gap-1.5">
              {requiredFields.map((field) => (
                <div
                  key={field}
                  className="bg-white border border-border rounded-lg px-3 py-2"
                >
                  <span className="text-xs font-medium text-text-dark font-card">
                    {field}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info note */}
      <div className="flex gap-2.5 bg-primary-light rounded-xl border border-primary/12 p-4">
        <BulbIcon className="w-6 h-6 shrink-0 text-primary" />
        <p className="text-[12.5px] leading-5 text-primary-dark font-card">
          The live preview updates as you fill in details. This is exactly what
          contributors see when they open your pool link.
        </p>
      </div>
    </div>
  );
}
