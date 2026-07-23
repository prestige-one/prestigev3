"use client";

import { type FormEvent, useRef, useState } from "react";

const projectOptions = [
  "FAUCHON Résidences",
  "Sanctuary Hive by Prestige One",
  "Sanctuary by Prestige One",
  "Hilton Residences Dubai Maritime City",
  "Berkeley Square North by Prestige One",
  "Berkeley Square South by Prestige One",
  "Luxury Canal Residences by Prestige One",
  "Coastal Haven by Prestige One",
  "The Boulevard by Prestige One",
  "Parkway by Prestige One",
  "Golf Residences by Prestige One",
  "The One by Prestige One",
  "Seaside by Prestige One",
  "The Waterway by Prestige One",
  "Vista by Prestige One",
  "The Residence by Prestige One",
  "Luxe Villa by Prestige One",
  "Seascape Villa by Prestige One",
];

type FinalContactFormProps = {
  defaultProject?: string;
  hideProjectField?: boolean;
  formSource?: string;
  formName?: string;
  calculatorName?: string;
  calculatorContext?: string;
  onSuccess?: () => void;
};

function resolveFormSource(override?: string) {
  if (override) return override;
  if (typeof window === "undefined") return "unknown";
  return window.location.pathname.startsWith("/projects") ? "project_page" : "site_footer";
}

function resolveFormName(override?: string) {
  if (override) return override;
  if (typeof window === "undefined") return "Footer Contact Form";
  if (window.location.pathname.startsWith("/projects")) return "Project Page Contact Form";
  if (window.location.pathname.startsWith("/contact")) return "Contact us page Form";
  if (window.location.pathname.includes("calculator") || window.location.pathname.includes("rent-vs-buy")) {
    return "Calculator Enquiry Form";
  }
  return "Footer Contact Form";
}

function buildSubmissionMessage(message: string, calculatorName?: string, calculatorContext?: string) {
  if (!calculatorName && !calculatorContext) return message;

  const lines = [message, "", "---"];
  if (calculatorName) lines.push(`Calculator: ${calculatorName}`);
  if (calculatorContext) lines.push(calculatorContext);
  return lines.join("\n");
}

async function fetchPublicIpv4(): Promise<string> {
  try {
    const response = await fetch("https://api.ipify.org?format=json", {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) return "";
    const data = (await response.json()) as { ip?: string };
    return typeof data.ip === "string" ? data.ip.trim() : "";
  } catch {
    return "";
  }
}

const FinalContactForm = ({
  defaultProject,
  hideProjectField = false,
  formSource,
  formName,
  calculatorName,
  calculatorContext,
  onSuccess,
}: FinalContactFormProps) => {
  const selectDefault =
    defaultProject && projectOptions.includes(defaultProject) ? defaultProject : "";
  const staticProjectValue = calculatorName ? `From "${calculatorName}" calculator` : "";
  const hiddenProjectValue =
    hideProjectField && defaultProject ? defaultProject : staticProjectValue;

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setErrorMessage(null);
    setStatus("submitting");

    const fd = new FormData(form);
    const fullName = String(fd.get("fullName") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const project = String(fd.get("project") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const client_public_ip = await fetchPublicIpv4();

    const payload = {
      fullName,
      email,
      phone,
      project,
      message: buildSubmissionMessage(message, calculatorName, calculatorContext),
      form_source: resolveFormSource(formSource),
      form_name: resolveFormName(formName),
      calculator_used: calculatorName ?? "",
      page_url: typeof window !== "undefined" ? window.location.href : "",
      referrer_url: typeof document !== "undefined" ? document.referrer || "" : "",
      client_public_ip,
    };

    try {
      const res = await fetch("/api/contact-submit", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again or contact us directly.");
        return;
      }

      setStatus("success");
      form.reset();
      if (hiddenProjectValue) {
        const hidden = form.querySelector<HTMLInputElement>('input[name="project"]');
        if (hidden) hidden.value = hiddenProjectValue;
      } else if (selectDefault) {
        const select = form.querySelector<HTMLSelectElement>('select[name="project"]');
        if (select) select.value = selectDefault;
      }
      onSuccess?.();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form ref={formRef} className="po-contact-form" onSubmit={handleSubmit}>
      <div className="po-contact-grid">
        <input type="text" name="fullName" placeholder="Full Name*" required autoComplete="name" />
        <input type="email" name="email" placeholder="Email Address*" required autoComplete="email" />
        <input type="tel" name="phone" placeholder="Phone Number*" required autoComplete="tel" />
        {hiddenProjectValue ? (
          <input type="hidden" name="project" defaultValue={hiddenProjectValue} />
        ) : (
          <select name="project" defaultValue={selectDefault} required key={selectDefault || "empty"}>
            <option value="" disabled>
              Project*
            </option>
            {projectOptions.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>
        )}
      </div>
      <textarea name="message" placeholder="Message*" rows={5} required />
      {status === "success" ? (
        <p className="po-contact-form-feedback po-contact-form-feedback--success" role="status">
          Thank you — your request was sent. Our team will get back to you shortly.
        </p>
      ) : null}
      {status === "error" && errorMessage ? (
        <p className="po-contact-form-feedback po-contact-form-feedback--error" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button type="submit" className="btn po-contact-submit-btn" disabled={status === "submitting"}>
        <span>{status === "submitting" ? "Sending…" : "Submit Request"}</span>
        <span>{status === "submitting" ? "Sending…" : "Submit Request"}</span>
      </button>
    </form>
  );
};

export default FinalContactForm;
