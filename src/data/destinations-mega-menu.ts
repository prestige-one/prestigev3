export const DESTINATIONS_MEGA_INTRO = {
  title: "Discover Dubai.",
  titleAccent: "Live Exceptionally.",
  description:
    "From waterfront districts to vibrant communities — explore the destinations where Prestige One is shaping the next chapter of luxury living.",
};

export const DESTINATIONS_MEGA_FEATURED = {
  cta: "Explore All Destinations",
  href: "/our-destinations",
  image: "/assets/images/v2/our-destinations/dubai-Islands.webp",
};

export type DestinationsMegaFooterLink = {
  label: string;
  href: string;
  iconClass: string;
};

export const DESTINATIONS_MEGA_FOOTER_LINKS: DestinationsMegaFooterLink[] = [
  { label: "Our Projects", href: "/projects", iconClass: "fa-solid fa-building" },
  { label: "Construction Updates", href: "/construction-updates", iconClass: "fa-solid fa-helmet-safety" },
  { label: "Broker Registration", href: "/broker-registration", iconClass: "fa-solid fa-file-signature" },
];
