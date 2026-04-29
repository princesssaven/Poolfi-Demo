import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured, isDatabaseConnectionError } from "@/src/lib/db";
import { getMyPoolsViewData } from "@/src/lib/pools/store";

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load your pools." },
      { status: 503 }
    );
  }

  try {
    const user = await getCurrentDatabaseUser();

    if (!user) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    const data = await getMyPoolsViewData(user.id);

    return NextResponse.json({ data });
  } catch (error) {
    if (isDatabaseConnectionError(error)) {
      return NextResponse.json(
        {
          message:
            "Database is temporarily unreachable. Check your internet/DNS connection and Supabase pooler host.",
        },
        { status: 503 }
      );
    }

    throw error;
  }
}
