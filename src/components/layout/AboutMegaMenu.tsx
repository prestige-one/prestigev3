"use client";

import Link from "next/link";
import {
  ABOUT_MEGA_MENU_FEATURED,
  ABOUT_MEGA_MENU_FOOTER_LINKS,
  ABOUT_MEGA_MENU_INTRO,
  ABOUT_MEGA_MENU_ITEMS,
} from "@/data/about-mega-menu";
import { COMPANY_CONTACT } from "@/data/company-contact";
import "@/components/layout/about-mega-menu.css";

type AboutMegaMenuProps = {
  onNavigate?: () => void;
};

export default function AboutMegaMenu({ onNavigate }: AboutMegaMenuProps) {
  return (
    <div className="po-about-mega-menu" role="region" aria-label="About us navigation">
      <div className="po-about-mega-menu__panel">
        <div className="po-about-mega-menu__body">
          <div className="po-about-mega-menu__intro po-about-mega-menu__col">
            <h2 className="po-about-mega-menu__headline">
              {ABOUT_MEGA_MENU_INTRO.title}
              <span>{ABOUT_MEGA_MENU_INTRO.titleAccent}</span>
            </h2>
            <span className="po-about-mega-menu__rule" aria-hidden="true" />
            <p className="po-about-mega-menu__lede">{ABOUT_MEGA_MENU_INTRO.description}</p>
          </div>

          <div className="po-about-mega-menu__grid po-about-mega-menu__col" role="list">
            {ABOUT_MEGA_MENU_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="po-about-mega-menu__item"
                role="listitem"
                onClick={onNavigate}
              >
                <span className="po-about-mega-menu__icon" aria-hidden="true">
                  <i className={item.iconClass} />
                </span>
                <span className="po-about-mega-menu__copy">
                  <span className="po-about-mega-menu__title">{item.title}</span>
                  <span className="po-about-mega-menu__desc">{item.description}</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="po-about-mega-menu__featured-col po-about-mega-menu__col">
            <Link
              href={ABOUT_MEGA_MENU_FEATURED.href}
              className="po-about-mega-menu__featured"
              onClick={onNavigate}
            >
              <img
                src={ABOUT_MEGA_MENU_FEATURED.image}
                alt=""
                className="po-about-mega-menu__featured-media"
              />
              <span className="po-about-mega-menu__featured-overlay" aria-hidden="true" />
              <span className="po-about-mega-menu__featured-copy">
                <span className="po-about-mega-menu__featured-title">
                  {ABOUT_MEGA_MENU_FEATURED.title}
                  {ABOUT_MEGA_MENU_FEATURED.titleLine2 ? (
                    <>
                      <br />
                      {ABOUT_MEGA_MENU_FEATURED.titleLine2}
                    </>
                  ) : null}
                </span>
                <span className="po-about-mega-menu__featured-rule" aria-hidden="true" />
                <span className="po-about-mega-menu__featured-cta">
                  {ABOUT_MEGA_MENU_FEATURED.cta}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </div>
        </div>

        <footer className="po-about-mega-menu__footer">
          <nav className="po-about-mega-menu__footer-nav" aria-label="Quick links">
            {ABOUT_MEGA_MENU_FOOTER_LINKS.map((link) => (
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
