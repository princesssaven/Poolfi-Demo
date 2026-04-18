"use client";

import { useState } from "react";
import RulesGearIcon from "@/src/assets/icons/rules-gear.svg";
import PlusBlueIcon from "@/src/assets/icons/plus-blue.svg";
import PlusOutlineBlueIcon from "@/src/assets/icons/plus-outline-blue.svg";
import FileAttachmentIcon from "@/src/assets/icons/file-attachment.svg";

interface MembersData {
  identityFields: string[];
  customFields: string[];
  members: { name: string; phone: string; custom: string }[];
}

interface AddMembersStepProps {
  data: MembersData;
  onChange: (data: MembersData) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function AddMembersStep({
  data,
  onChange,
  onNext,
  onBack,
}: AddMembersStepProps) {
  const [showCustomField, setShowCustomField] = useState(false);
  const [customLabel, setCustomLabel] = useState("");
  const [newMember, setNewMember] = useState({
    name: "",
    phone: "",
    custom: "",
  });

  const addCustomField = () => {
    if (customLabel.trim()) {
      onChange({
        ...data,
        customFields: [...data.customFields, customLabel.trim()],
      });
      setCustomLabel("");
      setShowCustomField(false);
    }
  };

  const addMember = () => {
    if (newMember.name.trim()) {
      onChange({ ...data, members: [...data.members, newMember] });
      setNewMember({ name: "", phone: "", custom: "" });
    }
  };

  const allFields = [...data.identityFields, ...data.customFields];

  return (
    <div className="rounded-[20px] border border-border bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-start gap-3.5 p-5 pb-5 sm:p-7 sm:pb-5">
        <RulesGearIcon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
        <div>
          <h2 className="font-heading text-[17px] font-bold tracking-[-0.3px] text-text-dark">
            Add your members
          </h2>
          <p className="text-[13px] text-text-muted font-card mt-1">
            Pre-loading members means no one can dodge every slot is named and
            tracked..
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5 px-5 pb-5 sm:px-7">
        {/* Required Identity Fields */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-base font-bold text-text-dark font-card">
            Required Identity Fields
          </h3>
          <div className="flex gap-2.5 flex-wrap">
            {data.identityFields.map((field) => (
              <span
                key={field}
                className="border border-border rounded-[10px] px-4 py-2 text-[13px] font-semibold font-card text-text-dark bg-white"
              >
                {field}
              </span>
            ))}
            {data.customFields.map((field) => (
              <span
                key={field}
                className="border border-border rounded-[10px] px-4 py-2 text-[13px] font-semibold font-card text-text-dark bg-white"
              >
                {field}
              </span>
            ))}
          </div>

          {/* Add Custom Field button */}
          <button
            onClick={() => setShowCustomField(true)}
            className="flex items-center gap-2.5 border border-dashed border-gray-300 rounded-xl px-4 py-3.5 hover:border-primary transition-colors"
          >
            <PlusBlueIcon className="w-[18px] h-[18px] text-primary" />
            <span className="font-heading text-[11px] font-bold text-primary">
              Add Custom Field
            </span>
          </button>

          {/* Custom field label input */}
          {showCustomField && (
            <div className="flex flex-col gap-[7px]">
              <label className="text-[13px] font-semibold text-text-dark font-card">
                Custom field label
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="text"
                  value={customLabel}
                  onChange={(e) => setCustomLabel(e.target.value)}
                  placeholder="Table ID"
                  className="flex-1 border border-border rounded-[10px] px-4 py-3 text-sm font-card text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary"
                  onKeyDown={(e) => e.key === "Enter" && addCustomField()}
                />
                <button
                  onClick={addCustomField}
                  className="bg-primary text-white px-4 py-2 rounded-[10px] text-sm font-bold"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          <p className="text-sm text-gray-300 font-card">
            Choose what contributors must provide. These appear on your CSV
            report. Select from presets or add custom fields.
          </p>
        </div>

        {/* Pre-load members */}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-base font-bold text-text-dark font-card">
            Pre-load members
          </h3>

          {/* CSV Upload area */}
          <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-gray-300 p-6 sm:p-8">
            <FileAttachmentIcon className="w-10 h-10 text-primary" />
            <p className="text-base font-bold text-text-dark font-card">
              Required Identity Fields
            </p>
            <p className="text-[13px] font-semibold font-card text-text-dark">
              {allFields.join(", ")}
            </p>
          </div>

          {/* Or add manually */}
          <p className="text-[13px] font-semibold text-text-dark font-card mt-2">
            Or add Manually
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <input
              type="text"
              value={newMember.name}
              onChange={(e) =>
                setNewMember({ ...newMember, name: e.target.value })
              }
              placeholder="Name"
              className="flex-1 border border-border rounded-[10px] px-4 py-3 text-sm font-card text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              value={newMember.phone}
              onChange={(e) =>
                setNewMember({ ...newMember, phone: e.target.value })
              }
              placeholder="Phone Number"
              className="flex-1 border border-border rounded-[10px] px-4 py-3 text-sm font-card text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            {data.customFields.map((field) => (
              <input
                key={field}
                type="text"
                value={newMember.custom}
                onChange={(e) =>
                  setNewMember({ ...newMember, custom: e.target.value })
                }
                placeholder={field}
                className="flex-1 border border-border rounded-[10px] px-4 py-3 text-sm font-card text-text-dark placeholder:text-gray-300 focus:outline-none focus:border-primary"
              />
            ))}
            <button
              onClick={addMember}
              className="flex items-center justify-center gap-2 rounded-[10px] border border-border px-6 py-3 text-sm font-card text-text-dark transition-colors hover:bg-gray-50"
            >
              <PlusOutlineBlueIcon className="w-3.5 h-3.5 text-primary" />
              Add
            </button>
          </div>

          {/* Added members list */}
          {data.members.length > 0 && (
            <div className="mt-2 flex flex-col gap-1">
              {data.members.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-2 bg-bg-page rounded-lg text-sm font-card"
                >
                  <span className="text-text-dark font-bold">{m.name}</span>
                  <span className="text-text-muted">{m.phone}</span>
                  {m.custom && (
                    <span className="text-text-muted">{m.custom}</span>
                  )}
                </div>
              ))}
            </div>
          )}
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
          Review Pool →
        </button>
      </div>
    </div>
  );
}
