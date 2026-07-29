import { collect, deliver, isEmail, isNonEmpty, isPhone } from "../utils/forms";

interface BrokerBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  rera?: string;
  message?: string;
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

  await deliver("broker", {
    name: body.name,
    company: body.company,
    email: body.email,
    phone: `${body.countryCode ?? ""} ${body.phone}`.trim(),
    rera: body.rera ?? "",
    message: body.message ?? "",
  });

  return { ok: true, message: "Thank you — our team will review your registration and be in touch." };
});
