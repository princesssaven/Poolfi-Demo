"use client";

import { useState } from "react";
import Modal, { ModalHeader } from "@/src/components/ui/Modal";

interface AddMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  depositMemo?: string;
  onProcessed?: () => void;
}

export default function AddMoneyModal({
  isOpen,
  onClose,
  depositMemo,
  onProcessed,
}: AddMoneyModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<"bank" | "card" | "usdc">("bank");
  const [isCheckingPayments, setIsCheckingPayments] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const stellarAddress = process.env.NEXT_PUBLIC_STELLAR_RECEIVER_ADDRESS || "Not configured";
  const memoDisplay = depositMemo || "Loading...";

  const copyValue = async (value: string, label: string) => {
    if (!value || value === "Not configured" || value === "Loading...") return;

    try {
      await navigator.clipboard.writeText(value);
      setStatusMessage(`${label} copied.`);
    } catch {
      setStatusMessage(`We couldn't copy the ${label.toLowerCase()} from this browser.`);
    }
  };

  const checkIncomingPayments = async () => {
    setIsCheckingPayments(true);
    setStatusMessage("");

    const response = await fetch("/api/stellar/process-payments", {
      method: "POST",
    });
    const payload = (await response.json().catch(() => null)) as
      | { errors?: string[]; message?: string; processed?: number; skipped?: number }
      | null;

    if (!response.ok) {
      setStatusMessage(payload?.message ?? "We couldn't check incoming payments yet.");
      setIsCheckingPayments(false);
      return;
    }

    const processed = payload?.processed ?? 0;
    const errors = payload?.errors ?? [];

    setStatusMessage(
      processed > 0
        ? `${processed} payment${processed === 1 ? "" : "s"} credited to wallets.`
        : errors[0] ?? "No new matching deposits found yet."
    );
    onProcessed?.();
    setIsCheckingPayments(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="650px">
      <ModalHeader title="Add Money" onClose={onClose} />

      <div className="mt-5 flex flex-col gap-5 px-5 pb-6 sm:px-8 sm:pb-8">
        <div className="flex overflow-hidden rounded-full border border-[#e5ebf6] bg-[#f5f7fb] p-1 text-[13px] font-semibold">
          <button
            type="button"
            onClick={() => setSelectedMethod("bank")}
            className={`flex-1 rounded-full px-4 py-3 transition-colors ${
              selectedMethod === "bank"
                ? "bg-white text-text-dark shadow-[0_2px_10px_rgba(15,23,42,0.08)]"
                : "text-text-muted hover:text-text-dark"
            }`}
          >
            Bank Transfer
          </button>
          <button
            type="button"
            onClick={() => setSelectedMethod("card")}
            className={`flex-1 rounded-full px-4 py-3 transition-colors ${
              selectedMethod === "card"
                ? "bg-white text-text-dark shadow-[0_2px_10px_rgba(15,23,42,0.08)]"
                : "text-text-muted hover:text-text-dark"
            }`}
          >
            Card
          </button>
          <button
            type="button"
            onClick={() => setSelectedMethod("usdc")}
            className={`flex-1 rounded-full px-4 py-3 transition-colors ${
              selectedMethod === "usdc"
                ? "bg-white text-text-dark shadow-[0_2px_10px_rgba(15,23,42,0.08)]"
                : "text-text-muted hover:text-text-dark"
            }`}
          >
            USDC
          </button>
        </div>

        <div className="rounded-[22px] border border-[#e5ebf6] bg-white px-5 py-6 shadow-sm">
          {selectedMethod === "bank" ? (
            <div className="space-y-6">
              <p className="text-[15px] font-bold text-text-dark">
                Bank transfers are coming soon.
              </p>
              <p className="text-[13px] leading-6 text-text-muted">
                We’re working on adding bank account funding support. Check back
                shortly.
              </p>
            </div>
          ) : selectedMethod === "card" ? (
            <div className="space-y-6">
              <p className="text-[15px] font-bold text-text-dark">
                Card payments are coming soon.
              </p>
              <p className="text-[13px] leading-6 text-text-muted">
                We’re working on adding debit and credit card support. Check back
                shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-4 rounded-[20px] border border-[#e5ebf6] bg-[#f7f9fc] p-5">
                <div>
                  <p className="font-card text-[11px] font-semibold uppercase tracking-[1px] text-text-muted">
                    Stellar Network Address
                  </p>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="break-all font-heading text-[14px] font-bold text-text-dark sm:text-[15px]">
                      {stellarAddress}
                    </p>
                    <button
                      type="button"
                      onClick={() => void copyValue(stellarAddress, "Address")}
                      disabled={stellarAddress === "Not configured"}
                      className="w-fit rounded-full border border-border bg-white px-4 py-2 text-[12px] font-bold text-text-dark transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <p className="font-card text-[11px] font-semibold uppercase tracking-[1px] text-text-muted">
                    Memo Required
                  </p>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-heading text-[16px] font-bold text-text-dark sm:text-[17px]">
                      {memoDisplay}
                    </p>
                    <button
                      type="button"
                      onClick={() => void copyValue(memoDisplay, "Memo")}
                      disabled={!depositMemo}
                      className="w-fit rounded-full border border-border bg-white px-4 py-2 text-[12px] font-bold text-text-dark transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>

              {statusMessage ? (
                <div className="rounded-[14px] border border-primary/20 bg-primary-light px-4 py-3 text-sm font-medium text-info-blue">
                  {statusMessage}
                </div>
              ) : null}

              <button
                type="button"
                onClick={() => void checkIncomingPayments()}
                disabled={isCheckingPayments}
                className="w-full rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isCheckingPayments ? "Checking deposits..." : "Check for Deposit"}
              </button>

              <p className="font-card text-[11px] font-semibold uppercase leading-[15px] tracking-[1px] text-text-muted">
                Send only USDC on the Stellar network to this address. Include your
                memo exactly so PoolFi can match and credit the deposit.
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
