import { getHeader, getRequestIP, type H3Event } from "h3";

// Shared server-side form validation and Zapier delivery. The server-only
// webhook keeps every active form on one consistent delivery path.
const ZAPIER_WEBHOOK_URL = process.env.NUXT_ZAPIER_WEBHOOK_URL
  || "https://hooks.zapier.com/hooks/catch/20096788/ujfaj85/";

export interface FieldError {
  field: string;
  message: string;
}

export interface SubmissionContext {
  currentUrl?: string;
  currentProject?: string;
}

export interface DeliveryResult {
  zapierFallback?: {
    url: string;
    payload: Record<string, unknown>;
  };
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
  return checks.filter((check) => !check.ok).map(({ field, message }) => ({ field, message }));
}

function projectFromUrl(url: string): string {
  const projectMatch = url.match(/\/projects\/([^/?#]+)/i);
  if (!projectMatch?.[1]) return "";

  try {
    return decodeURIComponent(projectMatch[1]);
  } catch {
    return projectMatch[1];
  }
}

export async function deliver(
  event: H3Event,
  kind: string,
  payload: Record<string, unknown>,
  context: SubmissionContext = {},
): Promise<DeliveryResult> {
  const currentUrl = context.currentUrl?.trim() || getHeader(event, "referer") || "";
  const currentProject = context.currentProject?.trim() || projectFromUrl(currentUrl);
  const ipAddress = getHeader(event, "cf-connecting-ip")
    || getRequestIP(event, { xForwardedFor: true })
    || "";

  const zapierPayload = {
    submissionType: kind,
    submissionDate: new Date().toISOString(),
    ipAddress,
    currentProject,
    currentUrl,
    userAgent: getHeader(event, "user-agent") || "",
    ...payload,
  };

  let response: Response;
  try {
    response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      signal: AbortSignal.timeout(15_000),
      body: JSON.stringify(zapierPayload),
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      return {
        zapierFallback: {
          url: ZAPIER_WEBHOOK_URL,
          payload: zapierPayload,
        },
      };
    }
    throw error;
  }

  if (!response.ok) {
    throw new Error(`Zapier webhook returned ${response.status}`);
  }

  return {};
}
