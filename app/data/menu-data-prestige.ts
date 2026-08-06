// Navigation data for the Prestige One "Split Reveal" off-canvas nav.
//
// Each primary item carries a `media` entry (image or video) that the
// off-canvas panel cross-fades to when the item is hovered/focused, plus an
// optional `submenus` list. Secondary items render as smaller links below the
// primary list. The legacy fields (id/title/link/pluseIncon/submenus) are kept
// so the older nav-menus components still type-check if referenced.

export interface NavMedia {
  type: "image" | "video";
  src: string;
  caption?: string;
}

export interface NavSubmenu {
  title: string;
  link: string;
}

export interface NavItem {
  id: number;
  title: string;
  link: string;
  pluseIncon?: boolean;
  media?: NavMedia;
  submenus?: NavSubmenu[];
}

// Primary navigation - drives the big serif list + the reveal panel.
export const primaryNav: NavItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    media: {
      type: "video",
      src: "/assets/videos/Hero-Video-opt.mp4",
      caption: "Prestige One",
    },
  },
  {
    id: 2,
    title: "Projects",
    link: "/projects",
    pluseIncon: true,
    media: {
      type: "video",
      src: "/assets/images/v2/project-features-videos/v3/Hilton.mp4",
      caption: "Our Developments",
    },
    submenus: [
      { title: "All Projects", link: "/projects" },
      { title: "Residential", link: "/projects?category=residential" },
      { title: "Commercial", link: "/projects?category=commercial" },
      { title: "Upcoming", link: "/projects?category=upcoming" },
      { title: "Construction Updates", link: "/construction-updates" },
    ],
  },
  {
    id: 3,
    title: "Destinations",
    link: "/destinations",
    pluseIncon: true,
    media: {
      type: "image",
      src: "/assets/images/v2/our-destinations/dubai-Islands.webp",
      caption: "Prime Locations",
    },
    submenus: [
      { title: "Dubai Islands", link: "/destinations/dubai-islands" },
      { title: "Palm Jumeirah", link: "/destinations/palm-jumeirah" },
      { title: "Jumeirah Village Circle", link: "/destinations/jumeirah-village-circle" },
      { title: "Mohammed Bin Rashid City", link: "/destinations/mohammed-bin-rashid-city" },
      { title: "All Destinations", link: "/destinations" },
    ],
  },
  {
    id: 4,
    title: "About",
    link: "/about-us",
    media: {
      type: "image",
      src: "/assets/images/v3/Built-on-Strong-Principles.webp",
      caption: "Who We Are",
    },
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact-us",
    media: {
      type: "image",
      src: "/assets/images/v3/map-locations.webp",
      caption: "Get In Touch",
    },
  },
];

// Secondary navigation - smaller links under the primary list.
export const secondaryNav: NavItem[] = [
  { id: 21, title: "Virtual Tour", link: "/virtual-tour" },
  { id: 22, title: "Invest in Prestige One", link: "/invest" },
  { id: 23, title: "Broker Registration", link: "/broker-registration" },
];

// Default featured media shown before any item is hovered.
export const defaultNavMedia: NavMedia = {
  type: "image",
  src: "/assets/project-featured-images/sliders/hilton-1.webp",
  caption: "Hilton Residences · Dubai Maritime City",
};

// Legacy default export (shape unchanged) for any older consumers.
const menu_data_prestige = primaryNav;
export default menu_data_prestige;
