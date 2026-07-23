/** Formatted number only (no currency prefix) for calculator result rows. */
export function formatAedNumber(value: number): string {
  return Math.round(value).toLocaleString("en-AE");
}
