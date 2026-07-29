import { collect, deliver, isEmail } from "../utils/forms";

interface NewsletterBody {
  email?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<NewsletterBody>(event);

  const errors = collect([
    { ok: isEmail(body?.email), field: "email", message: "Please enter a valid email address." },
  ]);

  if (errors.length) {
    throw createError({ statusCode: 422, statusMessage: "Validation failed", data: { errors } });
  }

  await deliver("newsletter", { email: body.email });

  return { ok: true, message: "You're subscribed — thank you." };
});
