// Shared server-side form helpers: light validation + a pluggable delivery
// adapter. Delivery is stubbed (logs to the server console) so forms work
// end-to-end today; wiring a real email/CRM provider is a drop-in later
// (see `deliver`). No secrets are committed.

export interface FieldError {
  field: string;
  message: string;
}

export function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function isPhone(value: unknown): value is string {
  return typeof value === "string" && value.replace(/[^\d]/g, "").length >= 6;
}

export function collect(
  checks: Array<{ ok: boolean; field: string; message: string }>,
): FieldError[] {
  return checks.filter((c) => !c.ok).map(({ field, message }) => ({ field, message }));
}

/**
 * Deliver a submission. Stubbed: logs a structured record and resolves.
 * Replace the body with an email (e.g. nodemailer/Resend) or CRM call and read
 * credentials from runtimeConfig / env — do not hardcode secrets.
 */
export async function deliver(kind: string, payload: Record<string, unknown>): Promise<void> {
  console.info(`[forms] ${kind} submission`, {
    ...payload,
    receivedAt: new Date().toISOString(),
  });
  // TODO(delivery): send via email/CRM provider using runtimeConfig secrets.
  await Promise.resolve();
}
