"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import CalendarIcon from "@/src/assets/icons/calendar.svg";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export default function DatePicker({ value, onChange, label, placeholder }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date());
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Position the dropdown relative to the trigger button
  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setDropdownPos({
      top: rect.bottom + 10 + window.scrollY,
      left: rect.left + window.scrollX,
    });
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        triggerRef.current && !triggerRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update position on open and scroll/resize
  useEffect(() => {
    if (!isOpen) return;
    updatePosition();

    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const formatted = selected.toISOString().split("T")[0];
    onChange(formatted);
    setIsOpen(false);
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = [];
  const totalDays = daysInMonth(viewDate.getFullYear(), viewDate.getMonth());
  const firstDay = firstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth());

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
  }

  for (let d = 1; d <= totalDays; d++) {
    const dateStr = new Date(viewDate.getFullYear(), viewDate.getMonth(), d).toISOString().split("T")[0];
    const isSelected = value === dateStr;
    const isToday = new Date().toDateString() === new Date(viewDate.getFullYear(), viewDate.getMonth(), d).toDateString();

    days.push(
      <button
        key={d}
        type="button"
        onClick={() => handleDateSelect(d)}
        className={`h-10 w-10 rounded-full text-[14px] font-bold transition-all ${
          isSelected
            ? "bg-primary text-white shadow-lg shadow-primary/30"
            : isToday
            ? "text-primary border-2 border-primary/30 bg-primary-light"
            : "text-text-dark hover:bg-primary-light hover:text-primary"
        }`}
      >
        {d}
      </button>
    );
  }

  const dropdown = isOpen ? createPortal(
    <div
      ref={dropdownRef}
      className="fixed z-[9999] w-[340px] overflow-hidden rounded-[24px] border border-border bg-white p-6 shadow-[0_32px_64px_rgba(15,23,42,0.24)]"
      style={{ top: dropdownPos.top, left: dropdownPos.left, position: "absolute" }}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h4 className="font-heading text-[18px] font-extrabold text-text-dark tracking-tight">
          {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
        </h4>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted hover:bg-bg-page hover:text-text-dark transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted hover:bg-bg-page hover:text-text-dark transition-colors"
          >
            →
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="mb-4 grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-[12px] font-bold uppercase tracking-[1.5px] text-text-dark/40 font-card">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {days}
      </div>

      {/* Footer actions */}
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <button
          type="button"
          onClick={() => { onChange(""); setIsOpen(false); }}
          className="text-[12px] font-bold text-danger hover:underline"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={() => {
            const today = new Date().toISOString().split("T")[0];
            onChange(today);
            setIsOpen(false);
          }}
          className="text-[12px] font-bold text-primary hover:underline"
        >
          Today
        </button>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-[10px] border border-border bg-white px-4 py-3 text-left text-sm font-card text-text-dark transition-all hover:border-primary/30 focus:border-primary focus:outline-none"
      >
        <span className={!value ? "text-placeholder" : ""}>
          {value ? new Date(value).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : placeholder || "Select date"}
        </span>
        <CalendarIcon className="h-4 w-4 text-text-muted" />
      </button>

      {dropdown}
    </div>
  );
}
