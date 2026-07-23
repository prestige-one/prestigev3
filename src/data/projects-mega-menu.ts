export type ProjectsMegaLink = {
  label: string;
  href: string;
  iconClass: string;
};

export type ProjectsMegaLocation = {
  label: string;
  /** Matches the `location` value in src/data/projects.ts */
  value: string;
};

const projectsHref = (key: "status" | "type" | "location", value: string) =>
  `/projects?${key}=${encodeURIComponent(value)}`;

export const PROJECTS_MEGA_LOCATIONS: ProjectsMegaLocation[] = [
  { label: "Palm Jumeirah", value: "Palm Jumeirah" },
  { label: "Jumeirah Village Circle", value: "JVC" },
  { label: "Barsha Heights", value: "Barsha Heights" },
  { label: "Dubai Sports City", value: "Dubai Sports City" },
  { label: "Dubai Islands", value: "Dubai Islands" },
  { label: "Dubai Maritime City", value: "Dubai Maritime City" },
  { label: "Jumeirah Gardens City", value: "Jumeirah Gardens City" },
  { label: "Meydan Horizon", value: "Meydan Horizon" },
  { label: "Dubai Land Residence Complex", value: "DLRC" },
];

export const PROJECTS_MEGA_LOCATION_HREF = (value: string) => projectsHref("location", value);

export const PROJECTS_MEGA_TYPES: ProjectsMegaLink[] = [
  { label: "Residential", href: projectsHref("type", "Residential"), iconClass: "fa-solid fa-building" },
  { label: "Branded Residences", href: projectsHref("type", "Branded Residences"), iconClass: "fa-solid fa-award" },
  { label: "Waterfront", href: projectsHref("type", "Waterfront"), iconClass: "fa-solid fa-water" },
  { label: "Commercial", href: projectsHref("type", "Commercial"), iconClass: "fa-solid fa-briefcase" },
  { label: "Mixed-Use", href: projectsHref("type", "Mixed-Use"), iconClass: "fa-solid fa-layer-group" },
  { label: "Urban Living", href: projectsHref("type", "Urban Living"), iconClass: "fa-solid fa-city" },
  { label: "Lifestyle Communities", href: projectsHref("type", "Lifestyle Communities"), iconClass: "fa-solid fa-people-group" },
  { label: "Villas", href: projectsHref("type", "Villa"), iconClass: "fa-solid fa-house" },
];

export const PROJECTS_MEGA_FEATURED_IMAGE = {
  cta: "Explore All Projects",
  href: "/projects",
  image: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
};

export type ProjectsMegaFooterLink = {
  label: string;
  href: string;
  iconClass: string;
};

export const PROJECTS_MEGA_FOOTER_LINKS: ProjectsMegaFooterLink[] = [
  { label: "Projects Gallery", href: "/projects/gallery", iconClass: "fa-solid fa-panorama" },
  { label: "Our Destinations", href: "/our-destinations", iconClass: "fa-solid fa-location-dot" },
  { label: "Construction Updates", href: "/construction-updates", iconClass: "fa-solid fa-helmet-safety" },
  { label: "Broker Registration", href: "/broker-registration", iconClass: "fa-solid fa-file-signature" },
];
