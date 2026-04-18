"use client";

import { useState } from "react";
import PartyIcon from "@/src/assets/icons/party.svg";

interface PoolLiveSuccessProps {
  poolLink: string;
  onBackToDashboard: () => void;
}

export default function PoolLiveSuccess({
  poolLink,
  onBackToDashboard,
}: PoolLiveSuccessProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${poolLink}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="mx-auto flex max-w-[640px] flex-col items-center gap-7 py-10 sm:py-12">
      {/* Icon + text */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-[64px] h-[64px] rounded-full bg-primary-light flex items-center justify-center">
          <PartyIcon className="w-[52px] h-[51px] text-primary" />
        </div>
        <h2 className="font-heading text-[15px] font-bold text-text-dark">
          Your pool is live
        </h2>
        <p className="text-[12px] text-text-muted leading-[19px] max-w-[407px]">
          Share the link below with your members. They can pay directly.
        </p>
      </div>

      {/* Link + Copy */}
      <div className="flex w-full flex-col gap-3 rounded-xl border border-border bg-bg-page px-5 py-4 sm:flex-row sm:items-center">
        <span className="flex-1 text-[13px] font-semibold font-card text-text-dark truncate">
          {poolLink}
        </span>
        <button
          onClick={handleCopy}
          className="bg-primary text-white text-[11px] font-bold px-5 py-2 rounded-full hover:bg-primary-dark transition-colors shrink-0"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex w-full flex-col gap-3 border-t border-border pt-7 sm:flex-row">
        <button className="flex-1 border border-border text-text-muted text-sm font-semibold font-card py-3.5 rounded-full hover:bg-gray-50 transition-colors">
          Share on Whatsapp
        </button>
        <button
          onClick={onBackToDashboard}
          className="flex-1 bg-primary text-white text-sm font-semibold font-card py-3.5 rounded-full hover:bg-primary-dark transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
