"use client";

import { useCallback, useEffect, useState } from "react";

export interface DashboardBadgeCounts {
  activePools: number;
  unreadNotifications: number;
}

const emptyBadgeCounts: DashboardBadgeCounts = {
  activePools: 0,
  unreadNotifications: 0,
};

export const DASHBOARD_BADGES_CHANGED_EVENT = "poolfi:badges-changed";

export function useDashboardBadges() {
  const [badgeCounts, setBadgeCounts] =
    useState<DashboardBadgeCounts>(emptyBadgeCounts);

  const refreshBadges = useCallback(async () => {
    try {
      const response = await fetch("/api/badges", { cache: "no-store" });
      const data = (await response.json().catch(() => null)) as
        | Partial<DashboardBadgeCounts>
        | null;

      if (!response.ok || !data) {
        return;
      }

      setBadgeCounts({
        activePools: data.activePools ?? 0,
        unreadNotifications: data.unreadNotifications ?? 0,
      });
    } catch {
      // Badge counts are helpful chrome, not a blocking page state.
    }
  }, []);

  useEffect(() => {
    const initialRefreshId = window.setTimeout(refreshBadges, 0);

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") {
        void refreshBadges();
      }
    };

    const refreshOnFocus = () => {
      void refreshBadges();
    };

    window.addEventListener(DASHBOARD_BADGES_CHANGED_EVENT, refreshOnFocus);
    window.addEventListener("focus", refreshOnFocus);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    const intervalId = window.setInterval(refreshBadges, 60000);

    return () => {
      window.clearTimeout(initialRefreshId);
      window.clearInterval(intervalId);
      window.removeEventListener(DASHBOARD_BADGES_CHANGED_EVENT, refreshOnFocus);
      window.removeEventListener("focus", refreshOnFocus);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [refreshBadges]);

  return { badgeCounts, refreshBadges };
}
