import { NextResponse } from "next/server";
import { getImpactPoolsViewData } from "@/src/lib/pools/store";
import { isDatabaseConfigured } from "@/src/lib/db";

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load impact pool data." },
      { status: 503 }
    );
  }

  try {
    return NextResponse.json(await getImpactPoolsViewData());
  } catch (error) {
    console.error("Error fetching impact pools:", error);
    return NextResponse.json(
      { message: "Failed to fetch pools" },
      { status: 500 }
    );
  }
}
