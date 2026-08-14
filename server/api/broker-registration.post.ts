import { deliver, isNonEmpty } from "../utils/forms";

interface BrokerRegistrationBody {
  registrationType?: string;
  submissionSource?: string;
  fields?: Record<string, unknown>;
  currentUrl?: string;
  currentProject?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<BrokerRegistrationBody>(event);

  if (!isNonEmpty(body.registrationType) || !body.fields || !Object.keys(body.fields).length) {
    throw createError({ statusCode: 422, statusMessage: "Registration data is required." });
  }

  const delivery = await deliver(event, "broker_registration", {
    submissionSource: body.submissionSource ?? "broker_registration",
    registrationType: body.registrationType,
    ...body.fields,
  }, {
    currentUrl: body.currentUrl,
    currentProject: body.currentProject,
  });

  return {
    ok: !delivery.zapierFallback,
    message: "Thank you — your registration has been submitted successfully.",
    ...delivery,
  };
});
