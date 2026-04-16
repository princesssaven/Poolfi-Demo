"use client";

import PoolBasicsIcon from "@/src/assets/icons/pool-basics.svg";
import CalendarIcon from "@/src/assets/icons/calendar.svg";

interface PoolBasicsData {
  name: string;
  description: string;
  targetAmount: string;
  perPerson: string;
  startDate: string;
  deadline: string;
  category: string;
}

interface PoolBasicsStepProps {
  data: PoolBasicsData;
  onChange: (data: PoolBasicsData) => void;
  onNext: () => void;
  onCancel: () => void;
}

export default function PoolBasicsStep({
  data,
  onChange,
  onNext,
  onCancel,
}: PoolBasicsStepProps) {
  const update = (field: keyof PoolBasicsData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="rounded-[20px] border border-border bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-start gap-3.5 p-7 pb-5">
        <PoolBasicsIcon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-heading text-[17px] font-bold tracking-[-0.3px] text-text-dark">
            Pool Basics
          </h2>
          <p className="text-[13px] text-text-muted font-card mt-1">
            Tell us what this pool is for. Contributors will see these details
            when they open your link.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-7 pb-5 flex flex-col gap-5">
        {/* Pool Name */}
        <div className="flex flex-col gap-[7px]">
          <label className="text-[13px] font-semibold text-text-dark font-card">
            Pool Name
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="e.g. 300L Class Dues — 2nd Semester"
            className="w-full border border-border rounded-[10px] px-4 py-3 text-sm font-card text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-[7px]">
          <label className="text-[13px] font-semibold text-text-dark font-card">
            Description{" "}
            <span className="text-[11px] text-text-muted font-normal">
              optional
            </span>
          </label>
          <textarea
            value={data.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Briefly describe what this pool is for and how the money will be used..."
            rows={3}
            className="w-full border border-border rounded-[10px] px-4 py-3 text-sm font-card text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        {/* Target + Per Person */}
        <div className="flex gap-3.5">
          <div className="flex-1 flex flex-col gap-[7px]">
            <label className="text-[13px] font-semibold text-text-dark font-card">
              Target Amount (₦)
            </label>
            <div className="flex border border-border rounded-[10px] overflow-hidden">
              <div className="bg-bg-page px-3 flex items-center border-r border-border">
                <span className="text-sm font-semibold font-card text-text-muted">
                  ₦
                </span>
              </div>
              <input
                type="text"
                value={data.targetAmount}
                onChange={(e) => update("targetAmount", e.target.value)}
                placeholder="400,000"
                className="flex-1 px-3 py-3 text-sm font-card text-text-dark placeholder:text-gray-300 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[7px]">
            <label className="text-[13px] font-semibold text-text-dark font-card">
              Contribution Per Person (₦)
            </label>
            <div className="flex border border-border rounded-[10px] overflow-hidden">
              <div className="bg-bg-page px-3 flex items-center border-r border-border">
                <span className="text-sm font-semibold font-card text-text-muted">
                  ₦
                </span>
              </div>
              <input
                type="text"
                value={data.perPerson}
                onChange={(e) => update("perPerson", e.target.value)}
                placeholder="1,000"
                className="flex-1 px-3 py-3 text-sm font-card text-text-dark placeholder:text-gray-300 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Start Date + Deadline */}
        <div className="flex gap-3.5">
          <div className="flex-1 flex flex-col gap-[7px]">
            <label className="text-[13px] font-semibold text-text-dark font-card">
              Start Date
            </label>
            <div className="flex items-center border border-border rounded-[10px] px-4 py-3">
              <input
                type="date"
                value={data.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                className="flex-1 text-sm font-card text-text-dark focus:outline-none bg-transparent"
              />
              <CalendarIcon className="w-3 h-3 text-text-dark shrink-0" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[7px]">
            <label className="text-[13px] font-semibold text-text-dark font-card">
              Deadline
            </label>
            <div className="flex items-center border border-border rounded-[10px] px-4 py-3">
              <input
                type="date"
                value={data.deadline}
                onChange={(e) => update("deadline", e.target.value)}
                className="flex-1 text-sm font-card text-text-dark focus:outline-none bg-transparent"
              />
              <CalendarIcon className="w-3 h-3 text-text-dark shrink-0" />
            </div>
          </div>
        </div>

        {/* Pool Category */}
        <div className="flex flex-col gap-[7px]">
          <label className="text-[13px] font-semibold text-text-dark font-card">
            Pool Category
          </label>
          <select
            value={data.category}
            onChange={(e) => update("category", e.target.value)}
            className="w-full border border-border rounded-[10px] px-4 py-3 text-sm font-card text-text-dark focus:outline-none focus:border-primary transition-colors bg-white appearance-none"
          >
            <option value="education">🎓 Education / School</option>
            <option value="welfare">🎗️ Welfare</option>
            <option value="wedding">💍 Wedding</option>
            <option value="community">💧 Community</option>
          </select>
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-3 border-t border-border px-7 py-5">
        <button
          onClick={onCancel}
          className="flex-1 border border-border text-text-muted text-sm font-semibold font-card py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onNext}
          className="flex-1 bg-primary text-white text-sm font-semibold font-card py-3 rounded-full hover:bg-primary-dark transition-colors"
        >
          Continue to Rules →
        </button>
      </div>
    </div>
  );
}
