"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DASHBOARD_BADGES_CHANGED_EVENT } from "@/src/components/layout/useDashboardBadges";

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
  const [isMarkingRead, setIsMarkingRead] = useState(false);
  const unreadCount = notifications.filter((item) => !item.read).length;

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

  const handleMarkAllRead = async () => {
    setIsMarkingRead(true);
    setErrorMessage("");

    const response = await fetch("/api/notifications", {
      method: "PATCH",
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      setErrorMessage(
        payload?.message ?? "We couldn't mark your notifications as read."
      );
      setIsMarkingRead(false);
      return;
    }

    setNotifications((current) =>
      current.map((item) => ({ ...item, read: true }))
    );
    window.dispatchEvent(new Event(DASHBOARD_BADGES_CHANGED_EVENT));
    setIsMarkingRead(false);
  };

  const handleMarkRead = async (id: string) => {
    // Only update if it's currently unread
    const item = notifications.find((n) => n.id === id);
    if (!item || item.read) return;

    // Optimistic update
    setNotifications((current) =>
      current.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    window.dispatchEvent(new Event(DASHBOARD_BADGES_CHANGED_EVENT));

    try {
      await fetch("/api/notifications", {
        method: "PATCH",
        body: JSON.stringify({ notificationId: id }),
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      // Revert on error? Or just leave it. Usually better to stay optimistic.
    }
  };

  return (
    <div className="space-y-6">
      <section className="rounded-[24px] border border-border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-primary">
              Notifications
            </p>
            <h1 className="mt-2 font-heading text-2xl font-bold text-text-dark">
              Your updates
            </h1>
          </div>

          {notifications.length > 0 ? (
            <button
              type="button"
              onClick={handleMarkAllRead}
              disabled={isMarkingRead || unreadCount === 0}
              className="self-start rounded-full border border-border bg-white px-4 py-2 text-[13px] font-semibold text-text-dark transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isMarkingRead ? "Updating..." : "Mark all as read"}
            </button>
          ) : null}
        </div>
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
            {notifications.map((item) => {
              const cardClassName = `block rounded-[16px] border px-4 py-4 transition-colors ${
                item.read
                  ? "border-border bg-[#fbfcff] hover:bg-gray-50"
                  : "border-primary/30 bg-primary-light hover:bg-primary-light/80"
              }`;
              const content = (
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {!item.read ? (
                        <span
                          className="h-2 w-2 shrink-0 rounded-full bg-primary"
                          aria-label="Unread"
                        />
                      ) : null}
                      <p className="text-sm font-semibold text-text-dark">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-text-muted">{item.body}</p>
                  </div>
                  <span className="text-[11px] font-medium text-text-muted">
                    {item.time}
                  </span>
                </div>
              );

              return item.href ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cardClassName}
                  onClick={() => handleMarkRead(item.id)}
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={item.id}
                  className={cardClassName}
                  onClick={() => handleMarkRead(item.id)}
                  role="button"
                  tabIndex={0}
                >
                  {content}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
