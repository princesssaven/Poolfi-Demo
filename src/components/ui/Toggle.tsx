"use client";

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
}

export default function Toggle({ enabled, onChange, label }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-[30px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        enabled ? "bg-primary" : "bg-gray-200"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
          enabled ? "translate-x-[22px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}
