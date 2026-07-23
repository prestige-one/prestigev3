import { NextRequest, NextResponse } from "next/server";
import { ZAPIER_CONTACT_WEBHOOK_URL } from "@/lib/zapier-contact-webhook";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  project?: string;
  message?: string;
  form_source?: string;
  form_name?: string;
  calculator_used?: string;
  page_url?: string;
  referrer_url?: string;
  client_public_ip?: string;
};

function parseBrowser(userAgent: string) {
  if (/edg\//i.test(userAgent)) return "Edge";
  if (/opr\//i.test(userAgent) || /opera/i.test(userAgent)) return "Opera";
  if (/chrome\//i.test(userAgent) && !/edg\//i.test(userAgent)) return "Chrome";
  if (/safari\//i.test(userAgent) && !/chrome\//i.test(userAgent)) return "Safari";
  if (/firefox\//i.test(userAgent)) return "Firefox";
  return "Unknown Browser";
}

function parseOS(userAgent: string) {
  if (/windows nt/i.test(userAgent)) return "Windows";
  if (/android/i.test(userAgent)) return "Android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
  if (/mac os x/i.test(userAgent)) return "macOS";
  if (/linux/i.test(userAgent)) return "Linux";
  return "Unknown OS";
}

function normalizeIp(ip: string) {
  const value = ip.trim();
  if (!value) return "";
  if (value.startsWith("::ffff:")) return value.replace("::ffff:", "");
  return value;
}

function isPublicIpv4(ip: string) {
  const parts = ip.split(".").map((n) => Number(n));
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return false;
  const [a, b] = parts;
  if (a === 10) return false;
  if (a === 127) return false;
  if (a === 0) return false;
  if (a === 169 && b === 254) return false;
  if (a === 172 && b >= 16 && b <= 31) return false;
  if (a === 192 && b === 168) return false;
  return true;
}

function getClientIp(request: NextRequest, payloadIp?: string) {
  const candidateIps = [
    payloadIp ?? "",
    request.headers.get("cf-connecting-ip") ?? "",
    request.headers.get("true-client-ip") ?? "",
    request.headers.get("x-forwarded-for")?.split(",")[0] ?? "",
    request.headers.get("x-real-ip") ?? "",
  ]
    .map(normalizeIp)
    .filter(Boolean);

  const firstPublicIpv4 = candidateIps.find(isPublicIpv4);
  if (firstPublicIpv4) return firstPublicIpv4;
  return candidateIps[0] ?? "unknown";
}

function createShortEntryId() {
  const now = new Date();
  const y = String(now.getUTCFullYear()).slice(-2);
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const hh = String(now.getUTCHours()).padStart(2, "0");
  const mm = String(now.getUTCMinutes()).padStart(2, "0");
  const ss = String(now.getUTCSeconds()).padStart(2, "0");
  const rand = Math.floor(Math.random() * 900 + 100); // 3-digit suffix
  return `E${y}${m}${d}${hh}${mm}${ss}${rand}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    const fullName = (body.fullName ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const project = (body.project ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!fullName || !email || !phone || !project || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const createdAt = new Date().toISOString();
    const entryId = createShortEntryId();
    const userAgent = request.headers.get("user-agent") || "";
    const browser = parseBrowser(userAgent);
    const os = parseOS(userAgent);
    const osBrowser = `${os} + ${browser}`;
    const ipAddress = getClientIp(request, (body.client_public_ip ?? "").trim());

    const zapData = new URLSearchParams();
    zapData.set("entry_id", entryId);
    zapData.set("entry_created_date", createdAt);
    zapData.set("ip_address", ipAddress);
    zapData.set("os_browser", osBrowser);
    zapData.set("user_agent", userAgent || "unknown");
    zapData.set("referrer_url", (body.referrer_url ?? "").trim());
    zapData.set("form_name", (body.form_name ?? "").trim() || "Footer Contact Form");
    zapData.set("form_source", (body.form_source ?? "").trim() || "site_footer");
    zapData.set("calculator_used", (body.calculator_used ?? "").trim());
    zapData.set("page_url", (body.page_url ?? "").trim());
    zapData.set("fullName", fullName);
    zapData.set("email", email);
    zapData.set("phone", phone);
    zapData.set("project", project);
    zapData.set("message", message);

    const zapRes = await fetch(ZAPIER_CONTACT_WEBHOOK_URL, {
      method: "POST",
      body: zapData,
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!zapRes.ok) {
      return NextResponse.json({ error: "Failed to submit form" }, { status: 502 });
    }

    // TODO: Enable SMTP email delivery once credentials are provided.
    // await sendContactSubmissionEmail({
    //   to: "smithmail2@gmail.com",
    //   entryId,
    //   entryCreatedDate: createdAt,
    //   ipAddress,
    //   osBrowser,
    //   referrerUrl: (body.referrer_url ?? "").trim(),
    //   formName: (body.form_name ?? "").trim() || "Footer Contact Form",
    //   pageUrl: (body.page_url ?? "").trim(),
    //   fullName,
    //   email,
    //   phone,
    //   project,
    //   message,
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
