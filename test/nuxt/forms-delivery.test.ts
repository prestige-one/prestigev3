import { afterEach, describe, expect, it, vi } from "vitest";
import type { H3Event } from "h3";
import { contactDeliveryFields, deliver } from "../../server/utils/forms";
import { submitPrestigeForm } from "../../app/utils/prestige-form-submission";

function submissionEvent(): H3Event {
  return {
    context: {},
    node: {
      req: {
        headers: {
          "x-forwarded-for": "203.0.113.8",
          "user-agent": "Prestige form test",
          referer: "https://prestigeone.ae/projects/vista-by-prestige-one",
        },
        socket: {},
      },
    },
  } as unknown as H3Event;
}

describe("Zapier form delivery", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("keeps newsletter data aligned with the contact field schema", () => {
    expect(contactDeliveryFields({
      submissionSource: "footer_newsletter",
      name: "NA",
      email: "subscriber@example.com",
      phone: "NA",
      message: "Newsletter Subscription",
    })).toEqual({
      submissionSource: "footer_newsletter",
      name: "NA",
      email: "subscriber@example.com",
      phone: "NA",
      message: "Newsletter Subscription",
    });
  });

  it("sends form fields with request and project context", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("ok", { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await deliver(submissionEvent(), "contact", {
      name: "Test User",
      email: "test@example.com",
    });

    expect(fetchMock).toHaveBeenCalledOnce();
    const [, request] = fetchMock.mock.calls[0] as [string, RequestInit];
    const payload = JSON.parse(String(request.body));

    expect(payload).toMatchObject({
      submissionType: "contact",
      ipAddress: "203.0.113.8",
      currentProject: "vista-by-prestige-one",
      currentUrl: "https://prestigeone.ae/projects/vista-by-prestige-one",
      userAgent: "Prestige form test",
      name: "Test User",
      email: "test@example.com",
    });
  });

  it("rejects delivery when Zapier does not confirm success", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("error", { status: 500 })));

    await expect(deliver(submissionEvent(), "contact", {}))
      .rejects.toThrow("Zapier webhook returned 500");
  });

  it("returns a browser fallback when local Node networking is unavailable", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fetch failed")));

    const result = await deliver(submissionEvent(), "contact", { name: "Test User" });

    expect(result.zapierFallback?.payload).toMatchObject({
      submissionType: "contact",
      ipAddress: "203.0.113.8",
      currentProject: "vista-by-prestige-one",
      name: "Test User",
    });
  });

  it("confirms success only after the browser fallback reaches Zapier", async () => {
    vi.stubGlobal("$fetch", vi.fn().mockResolvedValue({
      ok: false,
      message: "Submitted",
      zapierFallback: {
        url: "https://hooks.zapier.com/test",
        payload: { ipAddress: "203.0.113.8", name: "Test User" },
      },
    }));
    const browserFetch = vi.fn().mockResolvedValue(new Response("ok", { status: 200 }));
    vi.stubGlobal("fetch", browserFetch);

    const result = await submitPrestigeForm("/api/contact", { name: "Test User" });

    const [, request] = browserFetch.mock.calls[0] as [string, RequestInit];
    const fallbackBody = request.body as URLSearchParams;
    expect(fallbackBody.get("ipAddress")).toBe("203.0.113.8");
    expect(result.ok).toBe(true);
  });
});
