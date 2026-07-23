"use client";

import Link from "next/link";
import {
  PROJECTS_MEGA_FEATURED_IMAGE,
  PROJECTS_MEGA_FOOTER_LINKS,
  PROJECTS_MEGA_LOCATIONS,
  PROJECTS_MEGA_LOCATION_HREF,
  PROJECTS_MEGA_TYPES,
} from "@/data/projects-mega-menu";
import { getFeaturedProjects } from "@/data/projects";
import { COMPANY_CONTACT } from "@/data/company-contact";
import "@/components/layout/about-mega-menu.css";
import "@/components/layout/projects-mega-menu.css";

type ProjectsMegaMenuProps = {
  onNavigate?: () => void;
};

const FEATURED = getFeaturedProjects(6);

export default function ProjectsMegaMenu({ onNavigate }: ProjectsMegaMenuProps) {
  return (
    <div className="po-projects-mega-menu" role="region" aria-label="Projects navigation">
      <div className="po-projects-mega-menu__panel">
        <div className="po-projects-mega-menu__body">
          {/* Column 1 — By Location (scrollable) */}
          <div className="po-projects-mega-menu__col po-projects-mega-menu__locations">
            <p className="po-projects-mega-menu__heading">By Location</p>
            <nav className="po-projects-mega-menu__scroll" aria-label="Projects by location">
              {PROJECTS_MEGA_LOCATIONS.map((loc) => (
                <Link
                  key={loc.value}
                  href={PROJECTS_MEGA_LOCATION_HREF(loc.value)}
                  className="po-projects-mega-menu__row"
                  onClick={onNavigate}
                >
                  <span className="po-projects-mega-menu__row-icon" aria-hidden="true">
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <span className="po-projects-mega-menu__row-label">{loc.label}</span>
                  <i className="fa-solid fa-chevron-right po-projects-mega-menu__row-chevron" aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2 — By Type */}
          <div className="po-projects-mega-menu__col po-projects-mega-menu__types">
            <p className="po-projects-mega-menu__heading">By Type</p>
            <nav className="po-projects-mega-menu__links" aria-label="Projects by type">
              {PROJECTS_MEGA_TYPES.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="po-projects-mega-menu__link"
                  onClick={onNavigate}
                >
                  <span className="po-projects-mega-menu__link-icon" aria-hidden="true">
                    <i className={item.iconClass} />
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Featured projects */}
          <div className="po-projects-mega-menu__col po-projects-mega-menu__featured-list">
            <p className="po-projects-mega-menu__heading">Featured Projects</p>
            <div className="po-projects-mega-menu__cards">
              {FEATURED.map((project) => (
                <Link
                  key={project.title}
                  href={project.link}
                  className="po-projects-mega-menu__card"
                  onClick={onNavigate}
                >
                  <span className="po-projects-mega-menu__card-media">
                    <img src={project.thumbnail} alt="" loading="lazy" />
                  </span>
                  <span className="po-projects-mega-menu__card-copy">
                    <span className="po-projects-mega-menu__card-title">{project.title}</span>
                    <span className="po-projects-mega-menu__card-location">{project.location}</span>
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/projects?status=Featured"
              className="po-projects-mega-menu__view-all"
              onClick={onNavigate}
            >
              View All Featured <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>

          {/* Column 4 — Featured image */}
          <div className="po-projects-mega-menu__col po-projects-mega-menu__promo-col">
            <Link
              href={PROJECTS_MEGA_FEATURED_IMAGE.href}
              className="po-projects-mega-menu__promo-image"
              onClick={onNavigate}
            >
              <img
                src={PROJECTS_MEGA_FEATURED_IMAGE.image}
                alt=""
                className="po-projects-mega-menu__promo-media"
              />
              <span className="po-projects-mega-menu__promo-overlay" aria-hidden="true" />
              <span className="po-projects-mega-menu__promo-image-copy">
                <img
                  src="/assets/images/v2/pages/slogan.png"
                  alt="Prestige One Developments slogan"
                  className="po-projects-mega-menu__promo-image-slogan"
                />
                <span className="po-projects-mega-menu__promo-image-cta">
                  {PROJECTS_MEGA_FEATURED_IMAGE.cta}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </div>
        </div>

        <footer className="po-about-mega-menu__footer">
          <nav className="po-about-mega-menu__footer-nav" aria-label="Quick links">
            {PROJECTS_MEGA_FOOTER_LINKS.map((link) => (
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
