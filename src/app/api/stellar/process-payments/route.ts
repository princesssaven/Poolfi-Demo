import { NextRequest, NextResponse } from "next/server";
import { processIncomingPayments } from "@/src/lib/stellar/listener";

/**
 * POST /api/stellar/process-payments
 *
 * Triggers the Stellar payment listener to check for new incoming payments
 * and credit user wallets. Designed to be called by:
 *   1. A Vercel Cron Job (every 1-5 minutes)
 *   2. Manually via the admin dashboard
 *
 * Protected by a simple secret token to prevent abuse.
 */
export async function POST(request: NextRequest) {
  // Verify the request is authorized
  const authHeader = request.headers.get("authorization");
  const querySecret = request.nextUrl.searchParams.get("secret");
  const cronSecret = process.env.CRON_SECRET;

  // Allow if CRON_SECRET is not set (dev mode) or if it matches auth header or query param
  if (cronSecret && authHeader !== `Bearer ${cronSecret}` && querySecret !== cronSecret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await processIncomingPayments();

    return NextResponse.json({
      ok: true,
      ...result,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Also support GET for easy testing in the browser during development
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ message: "Use POST in production" }, { status: 405 });
  }

  try {
    const result = await processIncomingPayments();
    return NextResponse.json({ ok: true, ...result, timestamp: new Date().toISOString() });
  } catch (error) {
    console.error("Payment processing error:", error);
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
