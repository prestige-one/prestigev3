import Link from "next/link";
import { destinationFooterItems } from "@/data/destinations";
import { COMPANY_CONTACT, COMPANY_OFFICES } from "@/data/company-contact";

type FooterNavItem = {
  label: string;
  href: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

function FooterNavLink({ label, href }: FooterNavItem) {
  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return <Link href={href}>{label}</Link>;
}

const corporate: FooterNavItem[] = [
  { label: "About Prestige One", href: "/about-us" },
  { label: "Invest in Prestige One", href: "/investments" },
  { label: "Broker Registration", href: "/broker-registration" },
  { label: "Project Documents", href: "/project-documents" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Marketing Terms & Conditions", href: "/marketing-terms-conditions" },
  { label: "Corporate Social Responsibility", href: "/corporate-social-responsibility" },
];

const areas = destinationFooterItems;

const mediaCenter: FooterNavItem[] = [
  { label: "Construction Updates", href: "/construction-updates" },
  { label: "Press Release", href: "/press-release" },
  { label: "Blog Posts", href: "/blogs" },
  { label: "Industry News", href: "/news" },
  { label: "FAQs", href: "/faqs" },
];

const socialLinks: { href: string; label: string; iconClass: string }[] = [
  { href: "https://www.facebook.com/ByPrestigeOne/", label: "Facebook", iconClass: "fa-brands fa-facebook-f" },
  { href: "https://www.instagram.com/byprestigeone/", label: "Instagram", iconClass: "fa-brands fa-instagram" },
  { href: "https://www.linkedin.com/company/byprestigeone", label: "LinkedIn", iconClass: "fa-brands fa-linkedin-in" },
  { href: "https://www.youtube.com/@byprestigeone", label: "YouTube", iconClass: "fa-brands fa-youtube" },
];

const FooterOne = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4">
            <div className="col-12 footer-col-brand">
              <div className="footer-card footer-card-logo">
                <Link href="/">
                  <img
                    className="footer-card-logo-main"
                    src="/assets/images/v2/pages/AFA-logo-400.webp"
                    alt="Prestige One Developments"
                  />
                </Link>
                <img
                  className="footer-card-logo-slogan"
                  src="/assets/images/v2/pages/slogan.png"
                  alt="Prestige One Developments slogan"
                />
                <div className="footer-card-contact">
                  <a href={COMPANY_CONTACT.phoneTel} className="footer-card-contact-item">
                    <i className="fa-solid fa-phone" aria-hidden="true" />
                    <span>{COMPANY_CONTACT.phoneDisplay}</span>
                  </a>
                  <a href={COMPANY_CONTACT.emailMailto} className="footer-card-contact-item">
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                    <span>{COMPANY_CONTACT.email}</span>
                  </a>
                  <a
                    href={COMPANY_OFFICES[0].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-card-contact-item"
                  >
                    <i className="fa-solid fa-location-dot" aria-hidden="true" />
                    <span>{COMPANY_OFFICES[0].label}</span>
                  </a>
                </div>
                { /*<img
                  className="footer-card-logo-secondary"
                  src="/assets/images/v2/pages/AFA-logo-400.webp"
                  alt="Prestige One Developments"
                /> */ }
              </div>
            </div>

            <div className="col-12 col-md-6 footer-col-nav">
              <div className="footer-card">
                <h5 className="mb-0">CORPORATE</h5>
                <ul className="footer-nav">
                  {corporate.map((item) => (
                    <li key={item.label}>
                      <FooterNavLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 footer-col-nav">
              <div className="footer-card">
                <h5 className="mb-0">POPULAR AREAS</h5>
                <ul className="footer-nav">
                  {areas.map((item) => (
                    <li key={item.label}>
                      <FooterNavLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 footer-col-nav">
              <div className="footer-card">
                <h5 className="mb-0">MEDIA CENTER</h5>
                <ul className="footer-nav">
                  {mediaCenter.map((item) => (
                    <li key={item.label}>
                      <FooterNavLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-line"></div>
        </div>

        <div className="container footer-copyright-wrapper">
          <div className="row align-items-center">
            <div className="col-6">
              <p className="mb-0 copyright text-start">
                Copyright © {new Date().getFullYear()} Prestige One Developments. All rights reserved.
              </p>
            </div>
            <div className="col-6">
              <div className="social-nav text-end">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <i className={s.iconClass} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>
      </footer>
    </>
  );
};

export default FooterOne;

