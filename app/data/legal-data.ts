// Legal document content for the Prestige One Developments website.
//
// Holds the boilerplate-style copy for the site's three legal pages
// (Privacy Policy, Terms & Conditions, Marketing Terms & Conditions).
// Each document exposes an HTML `body` string rendered via v-html inside
// the shared `.prestige-prose` styling. This is generic, authored content —
// not legal advice.

export interface LegalDoc {
  slug: string;
  title: string;
  intro: string;
  updated: string;
  body: string; // HTML string: <h2> section headings with <p>/<ul><li> content
}

const LAST_UPDATED = "2026-01-15";

const privacyPolicy: LegalDoc = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  intro:
    "Prestige One Developments respects your privacy and is committed to protecting the personal information you share with us. This policy explains what we collect, how we use it, and the choices available to you.",
  updated: LAST_UPDATED,
  body: `
    <h2>Introduction</h2>
    <p>This Privacy Policy describes how Prestige One Developments ("Prestige One", "we", "us" or "our") collects, uses, discloses and safeguards personal information when you visit our website, register an interest in one of our developments, or otherwise engage with us. By using our website or submitting your details, you acknowledge the practices set out below.</p>

    <h2>Information We Collect</h2>
    <p>We collect information that you provide directly to us as well as information gathered automatically when you interact with our website. This may include:</p>
    <ul>
      <li>Contact details such as your name, email address, telephone number and country of residence.</li>
      <li>Enquiry information relating to the developments, unit types or price ranges you are interested in.</li>
      <li>Communications you send to us, including messages submitted through enquiry forms, email or telephone.</li>
      <li>Technical data such as your IP address, browser type, device information and pages visited, collected through cookies and similar technologies.</li>
    </ul>

    <h2>How We Use Your Information</h2>
    <p>We use the information we collect for legitimate business purposes, including to:</p>
    <ul>
      <li>Respond to your enquiries and provide details of our developments, availability and pricing.</li>
      <li>Arrange viewings, appointments and follow-up communications with you or an appointed broker.</li>
      <li>Send you marketing communications about projects and offers where you have consented to receive them.</li>
      <li>Improve our website, understand how visitors use it, and enhance the services we offer.</li>
      <li>Comply with our legal, regulatory and contractual obligations in the United Arab Emirates.</li>
    </ul>

    <h2>Cookies</h2>
    <p>Our website uses cookies and similar technologies to distinguish you from other visitors, remember your preferences and analyse how the site is used. Some cookies are essential for the website to function, while others help us measure performance and deliver relevant content. You can manage or disable cookies through your browser settings, although doing so may affect certain features of the site.</p>

    <h2>Data Sharing</h2>
    <p>We do not sell your personal information. We may share it with trusted parties who support our business, including appointed real-estate brokers and agents, marketing and technology service providers, and professional advisers, in each case subject to appropriate confidentiality obligations. We may also disclose information where required to do so by law or by a competent regulatory authority in the United Arab Emirates.</p>

    <h2>Data Security</h2>
    <p>We maintain appropriate technical and organisational measures designed to protect your personal information against unauthorised access, loss, misuse or alteration. While we take reasonable steps to safeguard your data, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>

    <h2>Your Rights</h2>
    <p>Subject to applicable law, you may have the right to request access to the personal information we hold about you, to ask that it be corrected or updated, to request its deletion, and to withdraw your consent to marketing communications at any time. To exercise any of these rights, please contact us using the details below and we will respond in accordance with applicable law.</p>

    <h2>Contact Us</h2>
    <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:</p>
    <p>
      Prestige One Developments<br>
      Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE<br>
      <a href="mailto:enquiries@prestigeone.ae">enquiries@prestigeone.ae</a>
    </p>
  `,
};

const termsConditions: LegalDoc = {
  slug: "terms-conditions",
  title: "Terms & Conditions",
  intro:
    "These terms govern your use of the Prestige One Developments website. Please read them carefully before browsing the site or submitting an enquiry.",
  updated: LAST_UPDATED,
  body: `
    <h2>Acceptance of Terms</h2>
    <p>By accessing or using the Prestige One Developments website (the "Website"), you agree to be bound by these Terms & Conditions and by our Privacy Policy. If you do not agree with any part of these terms, please do not use the Website. We may update these terms from time to time, and your continued use of the Website constitutes acceptance of the revised terms.</p>

    <h2>Use of the Website</h2>
    <p>You may use the Website for lawful, personal and non-commercial purposes only. You agree not to misuse the Website, interfere with its normal operation, attempt to gain unauthorised access to any part of it, or use it in any way that could damage, disable or impair the Website or the experience of other users.</p>

    <h2>Intellectual Property</h2>
    <p>All content on the Website, including text, graphics, logos, images, renders, video and design, is owned by or licensed to Prestige One Developments and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify or otherwise use any content without our prior written permission, except as necessary to view the Website in the ordinary course.</p>

    <h2>Property Information Disclaimer</h2>
    <p>The information presented on the Website, including renders, floor plans, specifications, prices and availability, is provided for general guidance only and is indicative and subject to change without notice. Visualisations and renders are artistic impressions and may differ from the final built product. Nothing on the Website constitutes a contractual offer, warranty or representation, and no reliance should be placed on it. Any purchase will be governed exclusively by the terms of the relevant sale and purchase agreement.</p>

    <h2>Third-Party Links</h2>
    <p>The Website may contain links to third-party websites or resources provided for your convenience. We do not control and are not responsible for the content, accuracy or practices of any third-party site, and the inclusion of a link does not imply our endorsement. Accessing third-party websites is at your own risk and subject to their own terms.</p>

    <h2>Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, Prestige One Developments shall not be liable for any direct, indirect, incidental or consequential loss or damage arising from your use of, or inability to use, the Website or any information contained on it. The Website is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.</p>

    <h2>Governing Law</h2>
    <p>These Terms & Conditions and any dispute or claim arising out of or in connection with them or your use of the Website shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates, and shall be subject to the exclusive jurisdiction of the competent courts of Dubai.</p>

    <h2>Contact Us</h2>
    <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
    <p>
      Prestige One Developments<br>
      Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE<br>
      <a href="mailto:enquiries@prestigeone.ae">enquiries@prestigeone.ae</a>
    </p>
  `,
};

const marketingTerms: LegalDoc = {
  slug: "marketing-terms",
  title: "Marketing Terms & Conditions",
  intro:
    "These marketing terms explain how Prestige One Developments communicates with you, how our brand and marketing materials may be used, and how you can opt out at any time.",
  updated: LAST_UPDATED,
  body: `
    <h2>Scope</h2>
    <p>These Marketing Terms & Conditions apply to all marketing and promotional communications issued by, or on behalf of, Prestige One Developments, as well as to the marketing of our developments by appointed brokers and agents. They supplement, and should be read together with, our Terms & Conditions and Privacy Policy.</p>

    <h2>Consent to Communications</h2>
    <p>Where you have provided your details and consented to receive marketing, we may contact you by email, telephone, SMS or other channels with information about our developments, events, offers and related updates. You may set your communication preferences at the point of enquiry and update them at any time.</p>

    <h2>Broker & Agent Marketing</h2>
    <p>Prestige One Developments works with appointed real-estate brokers and agents to promote its developments. Brokers and agents must market our projects accurately and in compliance with all applicable laws and regulations, including those of the Dubai Land Department and the Real Estate Regulatory Agency (RERA). We are not responsible for representations made by any third party that are not expressly authorised by us in writing.</p>

    <h2>Use of Brand Assets</h2>
    <p>Our name, logo, project names, renders and other brand assets are the property of Prestige One Developments. They may only be used in marketing materials with our prior written approval and in accordance with any brand guidelines we provide. Unauthorised or misleading use of our brand assets is strictly prohibited.</p>

    <h2>Accuracy of Marketing Materials</h2>
    <p>All marketing materials, including renders, imagery, prices and specifications, are indicative only and subject to change without notice. Marketing materials do not form part of any contract or constitute an offer. In the event of any inconsistency between marketing materials and the relevant sale and purchase agreement, the sale and purchase agreement shall prevail.</p>

    <h2>Opt-Out</h2>
    <p>You may unsubscribe from our marketing communications at any time by using the unsubscribe link included in our emails, adjusting your preferences, or contacting us directly using the details below. We will action opt-out requests promptly in accordance with applicable law, although you may continue to receive service-related communications relating to an active enquiry or transaction.</p>

    <h2>Contact Us</h2>
    <p>For any questions about these Marketing Terms & Conditions or to update your communication preferences, please contact us at:</p>
    <p>
      Prestige One Developments<br>
      Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE<br>
      <a href="mailto:enquiries@prestigeone.ae">enquiries@prestigeone.ae</a>
    </p>
  `,
};

const legalDocs: Record<string, LegalDoc> = {
  [privacyPolicy.slug]: privacyPolicy,
  [termsConditions.slug]: termsConditions,
  [marketingTerms.slug]: marketingTerms,
};

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs[slug];
}

export function getAllLegalDocs(): LegalDoc[] {
  return Object.values(legalDocs);
}

export default legalDocs;
