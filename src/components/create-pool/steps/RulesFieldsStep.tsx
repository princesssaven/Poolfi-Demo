"use client";
import RulesGearIcon from "@/src/assets/icons/rules-gear.svg";
import CloseIcon from "@/src/assets/icons/close.svg";
import PlusBlueIcon from "@/src/assets/icons/plus-blue.svg";
import Toggle from "@/src/components/ui/Toggle";

interface Milestone {
  percentage: string;
  label: string;
}

interface RulesData {
  takeAllAtClose: boolean;
  milestoneWithdrawals: boolean;
  milestones: Milestone[];
  autoClose: boolean;
  allowAnonymous: boolean;
  autoReminders: boolean;
}

interface RulesFieldsStepProps {
  data: RulesData;
  onChange: (data: RulesData) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function RulesFieldsStep({
  data,
  onChange,
  onNext,
  onBack,
}: RulesFieldsStepProps) {
  const update = <K extends keyof RulesData>(field: K, value: RulesData[K]) => {
    onChange({ ...data, [field]: value });
  };

  const removeMilestone = (index: number) => {
    update(
      "milestones",
      data.milestones.filter((_, i) => i !== index)
    );
  };

  const addMilestone = () => {
    update("milestones", [
      ...data.milestones,
      { percentage: "", label: "" },
    ]);
  };

  return (
    <div className="rounded-[20px] border border-border bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-start gap-3.5 p-5 pb-5 sm:p-7 sm:pb-5">
        <RulesGearIcon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-heading text-[17px] font-bold tracking-[-0.3px] text-text-dark">
            Rules & Identity Fields
          </h2>
          <p className="text-[13px] text-text-muted font-card mt-1">
            Define how contributors pay and what information you need from them.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-2.5 px-5 pb-5 sm:px-7">
        {/* Toggle: Take All at Close */}
        <div className="flex flex-col gap-4 rounded-[10px] border border-border p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-text-dark font-card">
              Take All at Close
            </p>
            <p className="text-sm text-gray-300 font-card mt-1">
              Funds released to admin when pool closes or target is hit
            </p>
          </div>
          <Toggle
            enabled={data.takeAllAtClose}
            onChange={(v) => update("takeAllAtClose", v)}
            label="Take All at Close"
          />
        </div>

        {/* Toggle: Milestone Withdrawals */}
        <div className="flex flex-col gap-4 rounded-[10px] border border-border p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-text-dark font-card">
              Milestone Withdrawals
            </p>
            <p className="text-sm text-gray-300 font-card mt-1">
              Withdraw in stages as the pool hits set percentages
            </p>
          </div>
          <Toggle
            enabled={data.milestoneWithdrawals}
            onChange={(v) => update("milestoneWithdrawals", v)}
            label="Milestone Withdrawals"
          />
        </div>

        {/* Milestone Points */}
        {data.milestoneWithdrawals && (
          <div className="flex flex-col gap-[7px]">
            <label className="text-[13px] font-semibold text-text-dark font-card">
              Milestone Points
            </label>
            {data.milestones.map((m, i) => (
              <div
                key={i}
                className="flex flex-col gap-2.5 rounded-xl bg-bg-page px-4 py-3 sm:flex-row sm:items-center"
              >
                <span className="text-sm font-card text-primary font-bold min-w-[40px]">
                  {m.percentage}
                </span>
                <span className="flex-1 text-sm font-card text-text-dark">
                  {m.label}
                </span>
                <button
                  onClick={() => removeMilestone(i)}
                  className="hover:bg-gray-200 rounded-full p-1 transition-colors"
                  aria-label="Remove milestone"
                >
                  <CloseIcon className="w-3.5 h-3.5 text-text-dark" />
                </button>
              </div>
            ))}
            <button
              onClick={addMilestone}
              className="flex items-center gap-2.5 border border-dashed border-gray-300 rounded-xl px-4 py-3.5 hover:border-primary transition-colors"
            >
              <PlusBlueIcon className="w-[18px] h-[18px] text-primary" />
              <span className="font-heading text-[11px] font-bold text-primary">
                Add Milestone
              </span>
            </button>
          </div>
        )}

        {/* Pool Options heading */}
        <h3 className="text-base font-bold text-text-dark font-card mt-3 border-t border-border pt-4">
          Pool Options
        </h3>

        {/* Toggle: Auto-close */}
        <div className="flex flex-col gap-4 rounded-[10px] border border-border p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-text-dark font-card">
              Auto-close on Target
            </p>
            <p className="text-sm text-gray-300 font-card mt-1">
              Pool closes automatically when contribution target is reached
            </p>
          </div>
          <Toggle
            enabled={data.autoClose}
            onChange={(v) => update("autoClose", v)}
            label="Auto-close on Target"
          />
        </div>

        {/* Toggle: Anonymous */}
        <div className="flex flex-col gap-4 rounded-[10px] border border-border p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-text-dark font-card">
              Allow Anonymous Contributions
            </p>
            <p className="text-sm text-gray-300 font-card mt-1">
              Contributors can hide their identity on the paid list
            </p>
          </div>
          <Toggle
            enabled={data.allowAnonymous}
            onChange={(v) => update("allowAnonymous", v)}
            label="Allow Anonymous Contributions"
          />
        </div>

        {/* Toggle: Reminders */}
        <div className="flex flex-col gap-4 rounded-[10px] border border-border p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-text-dark font-card">
              Automatic Reminders
            </p>
            <p className="text-sm text-gray-300 font-card mt-1">
              PoolFi nudges unpaid contributors 3 days before deadline
            </p>
          </div>
          <Toggle
            enabled={data.autoReminders}
            onChange={(v) => update("autoReminders", v)}
            label="Automatic Reminders"
          />
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
          onClick={onNext}
          className="flex-1 bg-primary text-white text-sm font-semibold font-card py-3 rounded-full hover:bg-primary-dark transition-colors"
        >
          Continue to Add members
        </button>
      </div>
    </div>
  );
}
