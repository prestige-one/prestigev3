import { collect, deliver, isEmail } from "../utils/forms";

interface NewsletterBody {
  email?: string;
  submissionSource?: string;
  currentUrl?: string;
  currentProject?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<NewsletterBody>(event);

  const errors = collect([
    { ok: isEmail(body?.email), field: "email", message: "Please enter a valid email address." },
  ]);

  if (errors.length) {
    throw createError({ statusCode: 422, statusMessage: "Validation failed", data: { errors } });
  }

  const delivery = await deliver(event, "newsletter", {
    submissionSource: body.submissionSource ?? "footer_newsletter",
    email: body.email,
  }, {
    currentUrl: body.currentUrl,
    currentProject: body.currentProject,
  });

  return {
    ok: !delivery.zapierFallback,
    message: "You're subscribed — thank you.",
    ...delivery,
  };
});
