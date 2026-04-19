import { NextRequest, NextResponse } from "next/server";
import { getCurrentDatabaseUser } from "@/src/lib/auth/current-user";
import { isDatabaseConfigured } from "@/src/lib/db";
import { createPool } from "@/src/lib/pools/store";

function parseCurrencyInput(value: string) {
  const normalized = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(normalized) ? Math.round(normalized) : 0;
}

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { message: "Add DATABASE_URL to .env.local to create pools." },
      { status: 503 }
    );
  }

  const user = await getCurrentDatabaseUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json()) as Partial<{
    basics: {
      category: string;
      deadline: string;
      description: string;
      name: string;
      perPerson: string;
      startDate: string;
      targetAmount: string;
    };
    members: {
      customFields: string[];
      identityFields: string[];
      members: Array<{ custom: string; name: string; phone: string }>;
    };
    rules: {
      allowAnonymous: boolean;
      autoClose: boolean;
      autoReminders: boolean;
      milestoneWithdrawals: boolean;
      milestones: Array<{ label: string; percentage: string }>;
      takeAllAtClose: boolean;
    };
    type?: "goal" | "impact";
  }>;

  const basics = body.basics;
  const rules = body.rules;
  const members = body.members;

  if (!basics || !rules || !members) {
    return NextResponse.json(
      { message: "Complete every step before launching your pool." },
      { status: 400 }
    );
  }

  const targetAmount = parseCurrencyInput(basics.targetAmount ?? "");
  const perPersonAmount = parseCurrencyInput(basics.perPerson ?? "");

  if (!basics.name?.trim() || !basics.startDate || !basics.deadline) {
    return NextResponse.json(
      { message: "Pool name, start date, and deadline are required." },
      { status: 400 }
    );
  }

  if (targetAmount <= 0 || perPersonAmount <= 0) {
    return NextResponse.json(
      { message: "Target amount and contribution per person must be valid numbers." },
      { status: 400 }
    );
  }

  const createdPool = await createPool({
    allowAnonymous: rules.allowAnonymous,
    autoClose: rules.autoClose,
    autoReminders: rules.autoReminders,
    category: basics.category || "education",
    customFields: members.customFields,
    deadline: new Date(basics.deadline),
    description: basics.description ?? "",
    identityFields: members.identityFields,
    members: members.members,
    milestoneWithdrawals: rules.milestoneWithdrawals,
    milestones: rules.milestones,
    name: basics.name,
    ownerId: user.id,
    perPersonAmount,
    startDate: new Date(basics.startDate),
    takeAllAtClose: rules.takeAllAtClose,
    targetAmount,
    type: body.type ?? "goal",
  });

  return NextResponse.json({
    ok: true,
    poolId: createdPool.id,
    poolLink: createdPool.poolLink,
  });
}
