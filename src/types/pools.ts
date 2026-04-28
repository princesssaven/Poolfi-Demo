export type PoolRole = "admin" | "contributor" | "impact";
export type PoolStatus = "active" | "completed";

export interface PoolCardData {
  id: string;
  role: PoolRole;
  title: string;
  category: string;
  status: PoolStatus;
  raised: number;
  target: number;
  stats: { label: string; value: string; highlight?: boolean }[];
  footer: { left: string; right: string; rightIsLink?: boolean };
  contribution?: string;
  stripeColor: "blue" | "green" | "teal" | "emerald";
}

export interface CompletedPoolData {
  emoji: string;
  title: string;
  details: string;
  amount: string;
}
