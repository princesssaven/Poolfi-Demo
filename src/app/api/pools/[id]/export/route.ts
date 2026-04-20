import { NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import { getMembersForPool, getPoolByIdForOwner } from "@/src/lib/pools/store";

function escapeCsvValue(value: string | number) {
  const stringValue = String(value);
  const escapedValue = stringValue.replace(/"/g, '""');
  return `"${escapedValue}"`;
}

function formatCsvDate(value: Date | null) {
  return value ? value.toISOString() : "";
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to export pool data." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const pool = await getPoolByIdForOwner(id, user.id);

  if (!pool) {
    return NextResponse.json({ message: "Pool not found." }, { status: 404 });
  }

  const members = await getMembersForPool(pool.id);
  const rows = [
    [
      "Pool Name",
      "Member Name",
      "Phone",
      "Custom Field",
      "Status",
      "Amount Due",
      "Amount Paid",
      "Invited At",
      "Paid At",
    ],
    ...members.map((member) => [
      pool.name,
      member.name,
      member.phone,
      member.customFieldValue,
      member.status,
      pool.perPersonAmount,
      member.status === "paid" ? pool.perPersonAmount : 0,
      formatCsvDate(member.invitedAt),
      formatCsvDate(member.paidAt),
    ]),
  ];

  const csv = `\uFEFF${rows
    .map((row) => row.map((value) => escapeCsvValue(value)).join(","))
    .join("\n")}`;

  return new NextResponse(csv, {
    headers: {
      "Content-Disposition": `attachment; filename="${pool.slug}-payment-report.csv"`,
      "Content-Type": "text/csv; charset=utf-8",
    },
  });
}
