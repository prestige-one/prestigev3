interface PrestigeZapierFallback {
  url: string;
  payload: Record<string, unknown>;
}

export interface PrestigeFormResponse {
  ok: boolean;
  message: string;
  zapierFallback?: PrestigeZapierFallback;
}

function toZapierFormBody(payload: Record<string, unknown>): URLSearchParams {
  const body = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    body.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
  });

  return body;
}

export async function submitPrestigeForm(
  endpoint: string,
  body: Record<string, unknown>,
): Promise<PrestigeFormResponse> {
  const response = await $fetch<PrestigeFormResponse>(endpoint, {
    method: "POST",
    body,
  });

  if (!response.zapierFallback) {
    if (!response.ok) throw new Error("Form delivery was not confirmed.");
    return response;
  }

  const zapierResponse = await fetch(response.zapierFallback.url, {
    method: "POST",
    body: toZapierFormBody(response.zapierFallback.payload),
  });

  if (!zapierResponse.ok) {
    throw new Error(`Zapier webhook returned ${zapierResponse.status}`);
  }

  return { ...response, ok: true, zapierFallback: undefined };
}
