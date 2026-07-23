/**
 * Zapier Catch Hook for Prestige One contact form submissions.
 * Override with ZAPIER_CONTACT_WEBHOOK_URL in env if the hook URL changes.
 */
export const ZAPIER_CONTACT_WEBHOOK_URL =
  typeof process !== "undefined" && process.env.ZAPIER_CONTACT_WEBHOOK_URL
    ? process.env.ZAPIER_CONTACT_WEBHOOK_URL
    : "https://hooks.zapier.com/hooks/catch/20096788/ujfaj85/";
