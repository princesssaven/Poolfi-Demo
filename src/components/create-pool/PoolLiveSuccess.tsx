"use client";

import { useState } from "react";
import PartyIcon from "@/src/assets/icons/party.svg";
import Modal from "@/src/components/ui/Modal";

interface PoolLiveSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  poolLink: string;
  onBackToDashboard: () => void;
}

export default function PoolLiveSuccess({
  isOpen,
  onClose,
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

  const handleWhatsappShare = () => {
    const message = `Join my pool on PoolFi: https://${poolLink}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="980px"
      closeOnOverlay={false}
      centerOnMobile
    >
      <div className="px-5 py-10 sm:px-9 sm:py-14 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-primary-light shadow-[0_14px_30px_rgba(51,94,255,0.2)]">
            <PartyIcon className="h-[62px] w-[62px] text-primary" />
          </div>
          <h2 className="mt-7 font-heading text-[28px] font-bold tracking-[-0.8px] text-text-dark sm:text-[34px]">
            Your pool is live
          </h2>
          <p className="mt-5 max-w-[690px] text-[18px] leading-[30px] text-text-muted sm:text-[19px]">
            Share the link below with your members. They can pay directly.
          </p>
        </div>

        <div className="mt-10 rounded-[24px] border border-[#e5ebf6] bg-bg-page p-3 sm:p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="min-w-0 flex-1 px-4 py-4 text-center sm:px-8 sm:py-6">
              <span className="block truncate font-heading text-[20px] font-bold tracking-[-0.4px] text-text-dark sm:text-[26px]">
                {poolLink}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="flex h-[62px] shrink-0 items-center justify-center rounded-[18px] bg-primary px-8 text-[18px] font-bold text-white shadow-[0_10px_24px_rgba(51,94,255,0.24)] transition-colors hover:bg-primary-dark lg:min-w-[204px]"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <div className="grid gap-4 lg:grid-cols-2">
            <button
              type="button"
              onClick={handleWhatsappShare}
              className="flex h-[88px] items-center justify-center rounded-[22px] border border-border bg-white px-6 text-[18px] font-semibold text-text-muted transition-colors hover:bg-gray-50"
            >
              Share on Whatsapp
            </button>
            <button
              type="button"
              onClick={onBackToDashboard}
              className="flex h-[88px] items-center justify-center rounded-[22px] bg-primary px-6 text-[18px] font-bold text-white shadow-[0_12px_28px_rgba(51,94,255,0.25)] transition-colors hover:bg-primary-dark"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
