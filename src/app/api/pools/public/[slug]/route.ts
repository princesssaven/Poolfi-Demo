import { NextResponse } from "next/server";
import { isDatabaseConfigured } from "@/src/lib/db";
import { getPublicPoolBySlug } from "@/src/lib/pools/store";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to load pools." },
      { status: 503 }
    );
  }

  const { slug } = await params;
  const pool = await getPublicPoolBySlug(slug);

  if (!pool) {
    return NextResponse.json({ message: "Pool not found." }, { status: 404 });
  }

  return NextResponse.json({ pool });
}
