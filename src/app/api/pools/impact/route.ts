import { NextResponse } from "next/server";
import { getDb } from "@/src/lib/db";
import { pools, poolMembers } from "@/src/lib/db/schema";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const impactPools = await getDb()
      .select({
        id: pools.id,
        name: pools.name,
        description: pools.description,
        problem: pools.problem,
        targetAmount: pools.targetAmount,
        perPersonAmount: pools.perPersonAmount,
        category: pools.category,
        deadline: pools.deadline,
        status: pools.status,
        evidenceUrls: pools.evidenceUrls,
        location: pools.location,
        beneficiaries: pools.beneficiaries,
        // Calculate raised amount and contributor count
        raised: sql<number>`COALESCE((
          SELECT SUM(p.per_person_amount) 
          FROM ${pools} p
          JOIN ${poolMembers} pm ON p.id = pm.pool_id
          WHERE p.id = ${pools.id} AND pm.status = 'paid'
        ), 0)`,
        contributorCount: sql<number>`COALESCE((
          SELECT COUNT(*) 
          FROM ${poolMembers} pm 
          WHERE pm.pool_id = ${pools.id} AND pm.status = 'paid'
        ), 0)`
      })
      .from(pools)
      .where(eq(pools.type, "impact"))
      .orderBy(pools.createdAt);

    return NextResponse.json(impactPools);
  } catch (error) {
    console.error("Error fetching impact pools:", error);
    return NextResponse.json({ message: "Failed to fetch pools" }, { status: 500 });
  }
}
