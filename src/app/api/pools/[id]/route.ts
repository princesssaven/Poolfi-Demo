import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import { getPoolDashboardViewData } from "@/src/lib/pools/store";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load pools." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const pool = await getPoolDashboardViewData(id, user.id);

  if (!pool) {
    return NextResponse.json({ message: "Pool not found." }, { status: 404 });
  }

  return NextResponse.json({ pool });
}
