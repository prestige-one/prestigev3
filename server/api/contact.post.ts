import { collect, contactDeliveryFields, deliver, isEmail, isNonEmpty, isPhone } from "../utils/forms";

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  message?: string;
  submissionSource?: string;
  currentUrl?: string;
  currentProject?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event);

  const errors = collect([
    { ok: isNonEmpty(body?.name), field: "name", message: "Please enter your full name." },
    { ok: isEmail(body?.email), field: "email", message: "Please enter a valid email address." },
    { ok: isPhone(body?.phone), field: "phone", message: "Please enter a valid phone number." },
    { ok: isNonEmpty(body?.message), field: "message", message: "Please tell us how we can help." },
  ]);

  if (errors.length) {
    throw createError({ statusCode: 422, statusMessage: "Validation failed", data: { errors } });
  }

  const delivery = await deliver(event, "contact", contactDeliveryFields({
    submissionSource: body.submissionSource ?? "contact_form",
    name: body.name,
    email: body.email,
    phone: `${body.countryCode ?? ""} ${body.phone}`.trim(),
    message: body.message,
  }), {
    currentUrl: body.currentUrl,
    currentProject: body.currentProject,
  });

  return {
    ok: !delivery.zapierFallback,
    message: "Thank you — we'll be in touch shortly.",
    ...delivery,
  };
});
