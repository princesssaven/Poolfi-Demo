"use client";

import { useEffect, useState } from "react";

interface NotificationItem {
  body: string;
  href?: string | null;
  id: string;
  read: boolean;
  time: string;
  title: string;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadNotifications = async () => {
      const response = await fetch("/api/notifications", {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => null)) as
        | { message?: string; notifications?: NotificationItem[] }
        | null;

      if (!isMounted) {
        return;
      }

      if (!response.ok || !payload?.notifications) {
        setErrorMessage(
          payload?.message ?? "We couldn't load your notifications yet."
        );
        return;
      }

      setNotifications(payload.notifications);
    };

    void loadNotifications();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
          Notifications
        </p>
        <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
          Your updates
        </h1>
        {errorMessage ? (
          <div className="mt-5 rounded-[16px] border border-danger/20 bg-danger/5 px-4 py-4 text-sm font-medium text-danger">
            {errorMessage}
          </div>
        ) : notifications.length === 0 ? (
          <div className="mt-5 rounded-[16px] border border-border bg-[#fbfcff] px-4 py-4 text-sm text-text-muted">
            Your notifications will appear here as you create and manage pools.
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="rounded-[16px] border border-border bg-[#fbfcff] px-4 py-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text-dark">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-text-muted">{item.body}</p>
                  </div>
                  <span className="text-[11px] font-medium text-text-muted">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
