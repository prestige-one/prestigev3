"use client";

import Link from "next/link";
import { DESTINATIONS } from "@/data/destinations";
import {
  DESTINATIONS_MEGA_FEATURED,
  DESTINATIONS_MEGA_FOOTER_LINKS,
  DESTINATIONS_MEGA_INTRO,
} from "@/data/destinations-mega-menu";
import { COMPANY_CONTACT } from "@/data/company-contact";
import "@/components/layout/about-mega-menu.css";
import "@/components/layout/destinations-mega-menu.css";

type DestinationsMegaMenuProps = {
  onNavigate?: () => void;
};

export default function DestinationsMegaMenu({ onNavigate }: DestinationsMegaMenuProps) {
  return (
    <div className="po-destinations-mega-menu" role="region" aria-label="Destinations navigation">
      <div className="po-destinations-mega-menu__panel">
        <div className="po-destinations-mega-menu__body">
          <div className="po-destinations-mega-menu__col po-destinations-mega-menu__intro">
            <img
              src="/assets/images/v2/pages/slogan.png"
              alt="Prestige One Developments slogan"
              className="po-destinations-mega-menu__headline-slogan"
            />
            <span className="po-about-mega-menu__rule" aria-hidden="true" />
            <p className="po-about-mega-menu__lede">{DESTINATIONS_MEGA_INTRO.description}</p>
          </div>

          <div className="po-destinations-mega-menu__col po-destinations-mega-menu__list">
            <p className="po-destinations-mega-menu__heading">Our Destinations</p>
            <nav className="po-destinations-mega-menu__grid" aria-label="Destination listings">
              {DESTINATIONS.map((destination) => (
                <Link
                  key={destination.id}
                  href={destination.href}
                  className="po-destinations-mega-menu__card"
                  onClick={onNavigate}
                >
                  <span className="po-destinations-mega-menu__card-media">
                    <img src={destination.image} alt="" loading="lazy" />
                  </span>
                  <span className="po-destinations-mega-menu__card-copy">
                    <span className="po-destinations-mega-menu__card-title">{destination.menuTitle}</span>
                    <span className="po-destinations-mega-menu__card-desc">{destination.menuDescription}</span>
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href="/our-destinations"
              className="po-destinations-mega-menu__view-all"
              onClick={onNavigate}
            >
              View All Destinations <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>

          <div className="po-destinations-mega-menu__col po-destinations-mega-menu__promo-col">
            <Link
              href={DESTINATIONS_MEGA_FEATURED.href}
              className="po-destinations-mega-menu__promo-image"
              onClick={onNavigate}
            >
              <img
                src={DESTINATIONS_MEGA_FEATURED.image}
                alt=""
                className="po-destinations-mega-menu__promo-media"
              />
              <span className="po-destinations-mega-menu__promo-overlay" aria-hidden="true" />
              <span className="po-destinations-mega-menu__promo-image-copy">
                <img
                  src="/assets/images/v2/pages/slogan.png"
                  alt="Prestige One Developments slogan"
                  className="po-destinations-mega-menu__promo-image-slogan"
                />
                <span className="po-destinations-mega-menu__promo-image-cta">
                  {DESTINATIONS_MEGA_FEATURED.cta}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </div>
        </div>

        <footer className="po-about-mega-menu__footer">
          <nav className="po-about-mega-menu__footer-nav" aria-label="Quick links">
            {DESTINATIONS_MEGA_FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="po-about-mega-menu__footer-link"
                onClick={onNavigate}
              >
                <span className="po-about-mega-menu__footer-link-icon" aria-hidden="true">
                  <i className={link.iconClass} />
                </span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="po-about-mega-menu__footer-contact">
            <a href={COMPANY_CONTACT.emailMailto} className="po-about-mega-menu__footer-contact-item">
              <span className="po-about-mega-menu__footer-contact-icon" aria-hidden="true">
                <i className="fa-solid fa-envelope" />
              </span>
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <a href={COMPANY_CONTACT.phoneTel} className="po-about-mega-menu__footer-contact-item">
              <span className="po-about-mega-menu__footer-contact-icon" aria-hidden="true">
                <i className="fa-solid fa-phone" />
              </span>
              <span>{COMPANY_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
