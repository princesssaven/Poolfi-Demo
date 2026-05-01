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
    // Impact direct fields
    problem?: string;
    moneyUsage?: string;
    location?: string;
    beneficiaries?: string;
    evidenceUrls?: string[];
    approversCount?: string;
    referenceLink?: string;
    // For impact pools, we might have these directly or in basics
    fundingTarget?: string;
    deadline?: string;
    title?: string;
    suggestedContribution?: string;
  }>;

  const basics = body.basics;
  const rules = body.rules;
  const members = body.members;
  const isImpact = body.type === "impact";

  if (!isImpact && (!basics || !rules || !members)) {
    return NextResponse.json(
      { message: "Complete every step before launching your pool." },
      { status: 400 }
    );
  }

  const targetAmount = parseCurrencyInput(isImpact ? (body.fundingTarget ?? "") : (basics?.targetAmount ?? ""));
  const perPersonAmount = parseCurrencyInput(isImpact ? (body.suggestedContribution ?? "") : (basics?.perPerson ?? ""));
  const name = isImpact ? body.title : basics?.name;
  const deadline = isImpact ? body.deadline : basics?.deadline;
  const startDate = isImpact ? new Date().toISOString() : basics?.startDate;

  if (!name?.trim() || !startDate || !deadline) {
    return NextResponse.json(
      { message: "Pool name, start date, and deadline are required." },
      { status: 400 }
    );
  }

  if (targetAmount <= 0) {
    return NextResponse.json(
      { message: "Target amount must be a valid number." },
      { status: 400 }
    );
  }

  const createdPool = await createPool({
    allowAnonymous: rules?.allowAnonymous ?? true,
    autoClose: rules?.autoClose ?? false,
    autoReminders: rules?.autoReminders ?? false,
    category: basics?.category || (isImpact ? "community" : "education"),
    customFields: members?.customFields ?? [],
    deadline: new Date(deadline),
    description: isImpact ? (body.problem ?? "") : (basics?.description ?? ""),
    identityFields: members?.identityFields ?? [],
    members: members?.members ?? [],
    milestoneWithdrawals: rules?.milestoneWithdrawals ?? true,
    milestones: rules?.milestones ?? [],
    name: name,
    ownerId: user.id,
    ownerName: `${user.firstName} ${user.lastName}`.trim(),
    ownerPhone: user.phone,
    ownerPseudonym: user.pseudonym,
    perPersonAmount,
    startDate: new Date(startDate),
    takeAllAtClose: rules?.takeAllAtClose ?? false,
    targetAmount,
    type: body.type ?? "goal",
    // Impact fields
    problem: body.problem,
    moneyUsage: body.moneyUsage,
    location: body.location,
    beneficiaries: body.beneficiaries,
    evidenceUrls: body.evidenceUrls,
    approversCount: body.approversCount,
    referenceLink: body.referenceLink,
  });

  return NextResponse.json({
    ok: true,
    poolId: createdPool.id,
    poolLink: createdPool.poolLink,
  });
}
