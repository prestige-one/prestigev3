export type AboutMegaMenuItem = {
  title: string;
  description: string;
  href: string;
  iconClass: string;
};

export const ABOUT_MEGA_MENU_INTRO = {
  title: "Built on Vision.",
  titleAccent: "Driven by Legacy.",
  description:
    "For over two decades, Prestige One has been redefining real estate with excellence, integrity and a commitment to creating extraordinary experiences.",
};

export const ABOUT_MEGA_MENU_ITEMS: AboutMegaMenuItem[] = [
  {
    title: "Our Story",
    description: "Our journey, values and the foundation of Prestige One.",
    href: "/about-us/our-story",
    iconClass: "fa-solid fa-mountain-city",
  },
  {
    title: "Leadership",
    description: "Meet the visionaries leading Prestige One into the future.",
    href: "/about-us/leadership",
    iconClass: "fa-solid fa-users",
  },
  {
    title: "Vision & Values",
    description: "The principles that shape our decisions and define our brand.",
    href: "/about-us/vision-and-values",
    iconClass: "fa-solid fa-gem",
  },
  {
    title: "Milestones",
    description: "Key achievements that mark our journey of growth.",
    href: "/about-us/milestones",
    iconClass: "fa-solid fa-chart-line",
  },
  {
    title: "Why Prestige One",
    description: "See what sets us apart in design, quality, and customer experience.",
    href: "/about-us/why-prestige-one",
    iconClass: "fa-solid fa-leaf",
  },
  {
    title: "Contact Us",
    description: "Get in touch with us for partnerships and general inquiries.",
    href: "/contact",
    iconClass: "fa-solid fa-phone",
  },
];

export const ABOUT_MEGA_MENU_FEATURED = {
  title: "The Heart Of Every Locations",
  titleLine2: "",
  cta: "View Our Projects",
  href: "/about-us#milestones",
  image: "/assets/images/v2/locations/downtown.webp",
};

export type AboutMegaMenuFooterLink = {
  label: string;
  href: string;
  iconClass: string;
};

export const ABOUT_MEGA_MENU_FOOTER_LINKS: AboutMegaMenuFooterLink[] = [
  { label: "Our Projects", href: "/projects", iconClass: "fa-solid fa-building" },
  { label: "Our Destinations", href: "/our-destinations", iconClass: "fa-solid fa-location-dot" },
  { label: "Construction Updates", href: "/construction-updates", iconClass: "fa-solid fa-helmet-safety" },
  { label: "Broker Registration", href: "/broker-registration", iconClass: "fa-solid fa-file-signature" },
];
