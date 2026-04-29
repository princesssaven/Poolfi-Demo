/**
 * Formats a number or string with commas.
 * For numbers, it uses toLocaleString("en-NG").
 * For strings (like inputs), it strips non-numeric characters and then formats.
 */
export function formatNumberWithCommas(value: string | number): string {
  if (value === undefined || value === null || value === "") return "";
  
  if (typeof value === "number") {
    return value.toLocaleString("en-NG");
  }

  // For input strings, strip non-numeric characters first
  const clean = value.replace(/[^0-9]/g, "");
  if (clean === "") return "";
  
  const parsed = parseInt(clean, 10);
  if (isNaN(parsed)) return "";
  
  return parsed.toLocaleString("en-NG");
}

/**
 * Formats a numeric amount as Naira (₦) with commas and optional decimals.
 */
export function formatCurrency(amount: number, decimals: number = 0): string {
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  return `₦${safeAmount.toLocaleString("en-NG", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

/**
 * Strips commas from a string.
 */
export function stripCommas(value: string): string {
  return value.replace(/,/g, "");
}
