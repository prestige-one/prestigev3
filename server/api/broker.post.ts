import { collect, deliver, isEmail, isNonEmpty, isPhone } from "../utils/forms";

interface BrokerBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  phoneCountry?: string;
  countryCode?: string;
  country?: string;
  rera?: string;
  message?: string;
  submissionSource?: string;
  currentUrl?: string;
  currentProject?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<BrokerBody>(event);

  const errors = collect([
    { ok: isNonEmpty(body?.name), field: "name", message: "Please enter your full name." },
    { ok: isNonEmpty(body?.company), field: "company", message: "Please enter your company or agency." },
    { ok: isEmail(body?.email), field: "email", message: "Please enter a valid email address." },
    { ok: isPhone(body?.phone), field: "phone", message: "Please enter a valid phone number." },
  ]);

  if (errors.length) {
    throw createError({ statusCode: 422, statusMessage: "Validation failed", data: { errors } });
  }

  const delivery = await deliver(event, "broker", {
    submissionSource: body.submissionSource ?? "broker_enquiry",
    name: body.name,
    company: body.company,
    email: body.email,
    phone: `${body.countryCode ?? ""} ${body.phone}`.trim(),
    phoneCountry: body.phoneCountry ?? "",
    country: body.country ?? "",
    rera: body.rera ?? "",
    message: body.message ?? "",
  }, {
    currentUrl: body.currentUrl,
    currentProject: body.currentProject,
  });

  return {
    ok: !delivery.zapierFallback,
    message: "Thank you — our team will review your registration and be in touch.",
    ...delivery,
  };
});
