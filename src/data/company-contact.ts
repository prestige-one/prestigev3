/** Single source for Prestige One corporate contact (header off-canvas, contact page, etc.). */

export type CompanyOffice = {
  mapUrl: string;
  label: string;
};

export const COMPANY_OFFICES: readonly CompanyOffice[] = [
  {
    mapUrl: "https://maps.app.goo.gl/Nq4NvSZxovG1Uzvp8",
    label: "Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE.",
  }
] as const;

export const COMPANY_CONTACT = {
  intro:
    "Ready to explore premium residences and destinations in Dubai? Reach out — our team is here to help with enquiries, partnerships, and project information.",
  phoneDisplay: "800 PRESTIGE / 800 77378443",
  phoneTel: "tel:80077378443",
  email: "enquiries@prestigeone.ae",
  emailMailto: "mailto:enquiries@prestigeone.ae",
  whatsappHref: "https://wa.me/+971523412936",
  whatsappDisplay: "+971 52 341 2936",
} as const;

export const HOMEPAGE_EMAIL_ENQUIRY = {
  subject: "Prestige One Website Enquiry",
  body: `Dear Prestige One team,

I am interested in learning more about your latest developments and available opportunities. Kindly contact me using the details below, I would be happy to connect with your team.

Name:
Phone:

I look forward to hearing from you.

Thank you.`,
} as const;

export function buildMailtoHref(email: string, subject: string, body: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const COMPANY_HOMEPAGE_EMAIL_MAILTO = buildMailtoHref(
  COMPANY_CONTACT.email,
  HOMEPAGE_EMAIL_ENQUIRY.subject,
  HOMEPAGE_EMAIL_ENQUIRY.body,
);

export type CompanySocialLink = {
  name: string;
  href: string;
};

export const COMPANY_SOCIAL_LINKS: readonly CompanySocialLink[] = [
  { name: "Facebook", href: "https://www.facebook.com/ByPrestigeOne/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/byprestigeone" },
  { name: "Instagram", href: "https://www.instagram.com/byprestigeone/" },
  { name: "YouTube", href: "https://www.youtube.com/@byprestigeone" },
  { name: "X", href: "https://x.com/ByPrestigeOne" },
];
