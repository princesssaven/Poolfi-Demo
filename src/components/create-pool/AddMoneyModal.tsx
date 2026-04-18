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
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="640px">
      <ModalHeader title="Add Money" onClose={onClose} />

      <div className="mt-5 flex flex-col gap-5 px-5 pb-6 sm:px-8 sm:pb-8">
        {/* Tabs */}
        <div className="flex flex-col gap-2 rounded-xl px-2 py-1.5 shadow-[0_1px_4.6px_rgba(0,0,0,0.25)] sm:flex-row sm:items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-[13px] font-semibold font-card transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white text-text-dark shadow-sm"
                  : "bg-transparent text-text-muted hover:text-text-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bank Transfer Content */}
        {activeTab === "Bank Transfer" && (
          <div className="bg-bg-page rounded-xl p-4 flex flex-col gap-2.5">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.8px] uppercase text-text-muted font-card">
                Transfer to
              </p>
              <p className="font-heading text-[15px] font-bold text-text-dark mt-2">
                PoolFi / Chukwuemeka Obi
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.8px] uppercase text-text-muted font-card">
                GTBank
              </p>
              <p className="font-heading text-[15px] font-bold text-text-dark mt-2">
                0123 4567 89
              </p>
            </div>
          </div>
        )}

        {activeTab === "Card" && (
          <div className="bg-bg-page rounded-xl p-8 text-center text-text-muted text-sm font-card">
            Card payment coming soon
          </div>
        )}

        {activeTab === "USDC" && (
          <div className="bg-bg-page rounded-xl p-8 text-center text-text-muted text-sm font-card">
            USDC payment coming soon
          </div>
        )}

        <p className="text-[10px] font-semibold tracking-[0.8px] uppercase text-text-muted font-card leading-[13px]">
          Transfer any amount from your bank. Funds arrive in 2–5 minutes via
          Yellow Card. Your wallet will be credited automatically.
        </p>
      </div>
    </Modal>
  );
}
