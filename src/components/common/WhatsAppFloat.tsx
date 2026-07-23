import { COMPANY_CONTACT } from "@/data/company-contact";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={COMPANY_CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
