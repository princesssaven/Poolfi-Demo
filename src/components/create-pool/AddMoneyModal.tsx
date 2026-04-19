"use client";

import { useState } from "react";
import Modal, { ModalHeader } from "@/src/components/ui/Modal";

interface AddMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tabs = ["Bank Transfer", "Card", "USDC"] as const;
type Tab = (typeof tabs)[number];

export default function AddMoneyModal({ isOpen, onClose }: AddMoneyModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Bank Transfer");

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="650px">
      <ModalHeader title="Add Money" onClose={onClose} />

      <div className="mt-5 flex flex-col gap-5 px-5 pb-6 sm:px-8 sm:pb-8">
        {/* Tabs */}
        <div className="flex flex-col gap-2 rounded-[14px] bg-[#f4f6fa] p-1.5 sm:flex-row sm:items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-[10px] px-3 py-2 text-[13px] font-semibold font-card transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white text-text-dark shadow-[0_2px_8px_rgba(15,23,42,0.12)]"
                  : "bg-transparent text-text-muted hover:text-text-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bank Transfer Content */}
        {activeTab === "Bank Transfer" && (
          <div className="flex flex-col gap-8 rounded-[18px] border border-[#e5ebf6] bg-[#f7f9fc] px-4 py-5 sm:px-5 sm:py-6">
            <div>
              <p className="font-card text-[11px] font-semibold uppercase tracking-[1px] text-text-muted">
                Transfer to
              </p>
              <p className="mt-3 font-heading text-[16px] font-bold text-text-dark sm:text-[17px]">
                PoolFi / Chukwuemeka Obi
              </p>
            </div>
            <div>
              <p className="font-card text-[11px] font-semibold uppercase tracking-[1px] text-text-muted">
                GTBank
              </p>
              <p className="mt-3 font-heading text-[16px] font-bold text-text-dark sm:text-[17px]">
                0123 4567 89
              </p>
            </div>
          </div>
        )}

        {activeTab === "Card" && (
          <div className="rounded-[16px] bg-[#f7f9fc] p-8 text-center text-sm font-card text-text-muted">
            Card payment coming soon
          </div>
        )}

        {activeTab === "USDC" && (
          <div className="rounded-[16px] bg-[#f7f9fc] p-8 text-center text-sm font-card text-text-muted">
            USDC payment coming soon
          </div>
        )}

        <p className="font-card text-[11px] font-semibold uppercase leading-[15px] tracking-[1px] text-text-muted">
          Transfer any amount from your bank. Funds arrive in 2–5 minutes via
          Yellow Card. Your wallet will be credited automatically.
        </p>
      </div>
    </Modal>
  );
}
