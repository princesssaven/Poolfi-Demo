"use client";

import { useState } from "react";

interface SettingsTabProps {
  poolName: string;
  perPerson: string;
  closesDate: string;
  category: string;
  autoClose: boolean;
  autoReminders: boolean;
  allowAnonymous: boolean;
}

export default function SettingsTab({
  poolName,
  perPerson,
  closesDate,
  category,
  autoClose: initialAutoClose,
  autoReminders: initialAutoReminders,
  allowAnonymous: initialAllowAnonymous,
}: SettingsTabProps) {
  const [autoClose, setAutoClose] = useState(initialAutoClose);
  const [autoReminders, setAutoReminders] = useState(initialAutoReminders);
  const [allowAnonymous, setAllowAnonymous] = useState(initialAllowAnonymous);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-5">
      {/* Quick Info */}
      <div className="mb-6">
        <h3 className="font-heading text-[15px] font-bold text-text-dark mb-4">
          Pool Information
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-border rounded-xl p-4">
            <p className="text-[10.5px] font-semibold text-text-muted uppercase tracking-[0.5px] mb-1">
              Pool Name
            </p>
            <p className="text-[14px] font-bold text-text-dark">{poolName}</p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="text-[10.5px] font-semibold text-text-muted uppercase tracking-[0.5px] mb-1">
              Amount Per Person
            </p>
            <p className="text-[14px] font-bold text-text-dark">{perPerson}</p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="text-[10.5px] font-semibold text-text-muted uppercase tracking-[0.5px] mb-1">
              Deadline
            </p>
            <p className="text-[14px] font-bold text-text-dark">{closesDate}</p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="text-[10.5px] font-semibold text-text-muted uppercase tracking-[0.5px] mb-1">
              Category
            </p>
            <p className="text-[14px] font-bold text-text-dark">{category}</p>
          </div>
        </div>
      </div>

      {/* Rules & Toggles */}
      <div className="mb-6">
        <h3 className="font-heading text-[15px] font-bold text-text-dark mb-4">
          Pool Rules
        </h3>
        <div className="flex flex-col gap-3">
          {/* Auto-close */}
          <div className="flex items-center justify-between border border-border rounded-xl p-4">
            <div>
              <p className="text-[13px] font-bold text-text-dark">
                Auto-close when target is reached
              </p>
              <p className="text-[11px] text-text-muted mt-0.5">
                Pool closes automatically once the goal amount is collected
              </p>
            </div>
            <button
              onClick={() => setAutoClose(!autoClose)}
              className={`relative w-[44px] h-[24px] rounded-full transition-colors duration-200 ${
                autoClose ? "bg-primary" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  autoClose ? "left-[22px]" : "left-[2px]"
                }`}
              />
            </button>
          </div>

          {/* Auto Reminders */}
          <div className="flex items-center justify-between border border-border rounded-xl p-4">
            <div>
              <p className="text-[13px] font-bold text-text-dark">
                Send automatic reminders
              </p>
              <p className="text-[11px] text-text-muted mt-0.5">
                Remind unpaid members every 3 days
              </p>
            </div>
            <button
              onClick={() => setAutoReminders(!autoReminders)}
              className={`relative w-[44px] h-[24px] rounded-full transition-colors duration-200 ${
                autoReminders ? "bg-primary" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  autoReminders ? "left-[22px]" : "left-[2px]"
                }`}
              />
            </button>
          </div>

          {/* Allow Anonymous */}
          <div className="flex items-center justify-between border border-border rounded-xl p-4">
            <div>
              <p className="text-[13px] font-bold text-text-dark">
                Allow anonymous contributions
              </p>
              <p className="text-[11px] text-text-muted mt-0.5">
                Contributors can use pseudonyms instead of real names
              </p>
            </div>
            <button
              onClick={() => setAllowAnonymous(!allowAnonymous)}
              className={`relative w-[44px] h-[24px] rounded-full transition-colors duration-200 ${
                allowAnonymous ? "bg-primary" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  allowAnonymous ? "left-[22px]" : "left-[2px]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h3 className="font-heading text-[15px] font-bold text-text-dark mb-4">
          Quick Actions
        </h3>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-[12px] font-bold text-text-dark hover:bg-gray-50 transition-colors">
            🔗 Copy Pool Link
          </button>
          <button className="flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-[12px] font-bold text-text-dark hover:bg-gray-50 transition-colors">
            📧 Invite Members
          </button>
          <button className="flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-[12px] font-bold text-text-dark hover:bg-gray-50 transition-colors">
            📊 Download Report
          </button>
          <button className="flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-[12px] font-bold text-text-dark hover:bg-gray-50 transition-colors">
            🔔 Send Reminder
          </button>
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end pt-4 border-t border-border">
        <button
          onClick={handleSave}
          className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 active:scale-[0.97] ${
            saved
              ? "bg-success text-white"
              : "bg-primary text-white hover:bg-primary-dark"
          }`}
        >
          {saved ? "✓ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
