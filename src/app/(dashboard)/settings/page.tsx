"use client";

import { useEffect, useState } from "react";

interface SettingsFormState {
  bio: string;
  email: string;
  emailNotifications: boolean;
  firstName: string;
  lastName: string;
  marketingEmails: boolean;
  phone: string;
  poolReminders: boolean;
  pseudonym: string;
  withdrawalAlerts: boolean;
}

const emptyState: SettingsFormState = {
  bio: "",
  email: "",
  emailNotifications: true,
  firstName: "",
  lastName: "",
  marketingEmails: false,
  phone: "",
  poolReminders: true,
  pseudonym: "",
  withdrawalAlerts: true,
};

export default function SettingsPage() {
  const [formState, setFormState] = useState<SettingsFormState>(emptyState);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadSettings = async () => {
      const response = await fetch("/api/account/settings", {
        cache: "no-store",
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string; settings?: SettingsFormState | null }
        | null;

      if (!isMounted) {
        return;
      }

      if (!response.ok || !payload?.settings) {
        setErrorMessage(
          payload?.message ?? "We couldn't load your account settings yet."
        );
        setIsLoading(false);
        return;
      }

      setFormState(payload.settings);
      setIsLoading(false);
    };

    void loadSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  const updateField = <K extends keyof SettingsFormState>(
    field: K,
    value: SettingsFormState[K]
  ) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSaving(true);

    const response = await fetch("/api/account/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string; settings?: SettingsFormState | null }
      | null;

    if (!response.ok || !payload?.settings) {
      setErrorMessage(
        payload?.message ?? "We couldn't save your settings right now."
      );
      setIsSaving(false);
      return;
    }

    setFormState(payload.settings);
    setSuccessMessage("Your account settings have been saved.");
    setIsSaving(false);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
          Settings
        </p>
        <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
          Account settings
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
          Keep your public profile, contact details, and notification preferences up to date.
        </p>

        {errorMessage || successMessage ? (
          <div
            className={`mt-6 rounded-[16px] px-4 py-3 ${
              errorMessage
                ? "border border-danger/20 bg-danger/5"
                : "border border-primary/20 bg-primary-light"
            }`}
          >
            <p
              className={`text-sm font-medium ${
                errorMessage ? "text-danger" : "text-info-blue"
              }`}
            >
              {errorMessage || successMessage}
            </p>
          </div>
        ) : null}

        {isLoading ? (
          <div className="mt-6 rounded-[16px] border border-border bg-[#fbfcff] px-4 py-6 text-sm text-text-muted">
            Loading your saved settings…
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-dark">
                  First name
                </label>
                <input
                  type="text"
                  value={formState.firstName}
                  onChange={(event) => updateField("firstName", event.target.value)}
                  className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-dark">
                  Last name
                </label>
                <input
                  type="text"
                  value={formState.lastName}
                  onChange={(event) => updateField("lastName", event.target.value)}
                  className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-dark">
                  PoolFi username
                </label>
                <input
                  type="text"
                  value={formState.pseudonym}
                  onChange={(event) =>
                    updateField(
                      "pseudonym",
                      event.target.value.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 20)
                    )
                  }
                  className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-dark">
                  Email address
                </label>
                <input
                  type="email"
                  value={formState.email}
                  disabled
                  className="rounded-[12px] border border-border bg-[#f8fafc] px-4 py-3 text-sm text-text-muted outline-none"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-dark">
                  Phone number
                </label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+234 801 234 5678"
                  className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-text-dark">
                  Short bio
                </label>
                <input
                  type="text"
                  value={formState.bio}
                  onChange={(event) => updateField("bio", event.target.value)}
                  placeholder="Builder, contributor, community organizer…"
                  className="rounded-[12px] border border-border bg-white px-4 py-3 text-sm text-text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <div className="rounded-[20px] border border-border bg-[#fbfcff] p-5">
              <h2 className="font-heading text-lg font-bold text-text-dark">
                Email preferences
              </h2>
              <div className="mt-4 space-y-3">
                {[
                  {
                    key: "emailNotifications",
                    label: "General email notifications",
                  },
                  {
                    key: "poolReminders",
                    label: "Pool reminders and nudges",
                  },
                  {
                    key: "withdrawalAlerts",
                    label: "Withdrawal reviews and approval alerts",
                  },
                  {
                    key: "marketingEmails",
                    label: "Occasional product updates",
                  },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center justify-between gap-4 rounded-[14px] border border-border bg-white px-4 py-3"
                  >
                    <span className="text-sm font-medium text-text-dark">
                      {item.label}
                    </span>
                    <input
                      type="checkbox"
                      checked={formState[item.key as keyof SettingsFormState] as boolean}
                      onChange={(event) =>
                        updateField(
                          item.key as keyof SettingsFormState,
                          event.target.checked as never
                        )
                      }
                      className="h-4 w-4 accent-primary"
                    />
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(51,94,255,0.24)] transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "Saving..." : "Save settings"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
