"use client";

import { useState } from "react";
import Modal, { ModalHeader } from "@/src/components/ui/Modal";
import GoalPoolIcon from "@/src/assets/icons/goal-pool.svg";
import ImpactPoolIcon from "@/src/assets/icons/impact-pool.svg";

interface CreatePoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (type: "goal" | "impact") => void;
}

export default function CreatePoolModal({
  isOpen,
  onClose,
  onContinue,
}: CreatePoolModalProps) {
  const [selected, setSelected] = useState<"goal" | "impact">("goal");

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="620px">
      <ModalHeader title="Create a Pool" onClose={onClose} />
      <p className="mt-3 px-5 text-[12px] leading-[19px] text-text-muted sm:px-8">
        Choose the type of pool you want to create. You can always change the
        details after
      </p>

      {/* Pool type cards */}
      <div className="mt-7 flex flex-col gap-4 px-5 sm:flex-row sm:px-8">
        <button
          onClick={() => setSelected("goal")}
          className={`flex-1 flex flex-col items-center gap-4 p-6 rounded-xl border-2 transition-all duration-200 ${
            selected === "goal"
              ? "border-primary bg-primary-light/50"
              : "border-border bg-white hover:border-gray-300"
          }`}
        >
          <div
            className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center ${
              selected === "goal" ? "bg-white shadow-sm" : "bg-gray-100"
            }`}
          >
            <GoalPoolIcon className="w-[30px] h-[30px] text-text-dark" />
          </div>
          <div className="text-center">
            <p className="font-heading text-[11px] font-bold text-text-dark mb-1.5">
              Goal Pool
            </p>
            <p className="text-[9px] text-text-muted leading-[14px]">
              Private. Invite-only. For class dues, events, group contributions.
            </p>
          </div>
        </button>

        <button
          onClick={() => setSelected("impact")}
          className={`flex-1 flex flex-col items-center gap-5 p-6 rounded-xl border-2 transition-all duration-200 ${
            selected === "impact"
              ? "border-primary bg-primary-light/50"
              : "border-border bg-white hover:border-gray-300"
          }`}
        >
          <div
            className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center ${
              selected === "impact" ? "bg-white shadow-sm" : "bg-gray-100"
            }`}
          >
            <ImpactPoolIcon className="w-6 h-6 text-text-dark" />
          </div>
          <div className="text-center">
            <p className="font-heading text-[11px] font-bold text-text-dark mb-1.5">
              Impact Pool
            </p>
            <p className="text-[9px] text-text-muted leading-[14px]">
              Public. Community-verified. For causes, projects, and shared
              goals.
            </p>
          </div>
        </button>
      </div>

      {/* Continue button */}
      <div className="mt-6 px-5 pb-6 sm:px-8 sm:pb-8">
        <button
          onClick={() => onContinue(selected)}
          className="w-full bg-primary text-white py-3 rounded-full text-[11px] font-bold hover:bg-primary-dark transition-colors"
        >
          Continue to Setup→
        </button>
      </div>
    </Modal>
  );
}
