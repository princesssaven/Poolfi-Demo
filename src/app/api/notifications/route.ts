import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import {
  getNotificationsForUser,
  markNotificationsReadForUser,
  markNotificationReadById,
} from "@/src/lib/pools/store";

function formatTime(value: Date) {
  return value.toLocaleString("en-GB", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
  });
}

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load notifications." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const items = await getNotificationsForUser(user.id);

  return NextResponse.json({
    notifications: items.map((item) => ({
      body: item.body,
      href: item.linkHref,
      id: item.id,
      read: Boolean(item.readAt),
      time: formatTime(item.createdAt),
      title: item.title,
    })),
  });
}

export async function PATCH(request: Request) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to update notifications." },
      { status: 503 }
    );
  }
 
  const user = await getCurrentDatabaseUser();
 
  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }
 
  const payload = (await request.json().catch(() => ({}))) as {
    notificationId?: string;
  };
 
  if (payload.notificationId) {
    await markNotificationReadById(payload.notificationId, user.id);
  } else {
    await markNotificationsReadForUser(user.id);
  }
 
  return NextResponse.json({ ok: true });
}
