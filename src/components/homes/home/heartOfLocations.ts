export type HeartLocationMarker = {
  name: string;
  area: string;
  href: string;
  image: string;
  /** Position on the map as percentages (0-100). The pin tip sits at this point. */
  x: number;
  y: number;
  /** 2D building render (transparent PNG) from /assets/images/v2/project-icons. */
  icon?: string;
};

const ICON_BASE = "/assets/images/v2/project-icons";
/** Placeholder used until a project's own render is added to the folder. */
const PLACEHOLDER_ICON = `${ICON_BASE}/boulevard.png`;


/**
 * Positions are approximate placements on `dubai-map-v4.webp` (percentages).
 * `x` = left %, `y` = top % — the pin tip points to this point.
 * Positions are aligned to each project's real Dubai location, read directly
 * off the labelled districts/landmarks drawn on that map image (Palm
 * Jumeirah, Dubai Islands, Barsha Heights, Jumeirah Village Circle, Jumeirah
 * Gardens City, Meydan City, Dubai Sports City, Dubai Land Residence
 * Complex) rather than off real-world lat/lng.
 */
export const HEART_LOCATION_MARKERS: HeartLocationMarker[] = [
  {
    name: "Luxe Villa",
    area: "Palm Jumeirah",
    href: "/projects/luxe-villa-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/luxe-villa/luxe-villas.webp",
    x: 25,
    y: 23,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "Seascape Villa",
    area: "Palm Jumeirah",
    href: "/projects/seascape-villa-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/seascape/seascape.webp",
    x: 26,
    y: 29,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "Hilton Residences",
    area: "Dubai Maritime City",
    href: "/projects/hilton-residences-dubai-maritime-city",
    image: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
    x: 84.4,
    y: 11,
    icon: `${ICON_BASE}/hilton.png`,
  },
  {
    name: "Coastal Haven",
    area: "Dubai Islands",
    href: "/projects/coastal-haven/",
    image: "/assets/images/v2/project-featured-images/coastal-haven/Coastal-Haven.webp",
    x: 85,
    y: 16,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "Luxury Canal Residences",
    area: "Dubai Islands",
    href: "/projects/luxury-canal-residences",
    image: "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp",
    x: 84,
    y: 16.5,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "Seaside",
    area: "Dubai Islands",
    href: "/projects/seaside-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp",
    x: 57,
    y: 16,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "FAUCHON Résidences",
    area: "Jumeirah Gardens City",
    href: "/projects/fauchon-residences",
    image: "/assets/images/v2/project-featured-images/fauchon/fauchon-banner.webp",
    x: 51,
    y: 56,
    icon: `${ICON_BASE}/Fauchon.png`,
  },
  {
    name: "The One",
    area: "Barsha Heights",
    href: "/projects/the-one-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/one/the-one.webp",
    x: 42,
    y: 41,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "Sanctuary",
    area: "Meydan Horizon",
    href: "/projects/sanctuary",
    image: "/assets/images/v2/project-featured-images/sanctuary/sanctuary-residential-exterior-view.webp",
    x: 65,
    y: 58,
    icon: `${ICON_BASE}/Sanctuary.png`,
  },
  {
    name: "Parkway",
    area: "Meydan Horizon",
    href: "/projects/parkway-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/parkway/parkway.webp",
    x: 64,
    y: 62,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "The Waterway",
    area: "Meydan Horizon",
    href: "/projects/the-waterway-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp",
    x: 60,
    y: 64,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "Berkeley Square North",
    area: "Jumeirah Village Circle",
    href: "/projects/berkeley-square-north",
    image: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-North.webp",
    x: 41,
    y: 61,
    icon: `${ICON_BASE}/Berkeley-Square.png`,
  },
  {
    name: "Berkeley Square South",
    area: "Jumeirah Village Circle",
    href: "/projects/berkeley-square-south",
    image: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-South.webp",
    x: 43,
    y: 65,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "The Residence",
    area: "Jumeirah Village Circle",
    href: "/projects/the-residence-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp",
    x: 26,
    y: 58,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "Vista",
    area: "Dubai Sports City",
    href: "/projects/vista-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/vista/vista.webp",
    x: 59,
    y: 73,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "Golf Residences",
    area: "Dubai Sports City",
    href: "/projects/golf-residences-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/golf/The-Place-Banner.webp",
    x: 56,
    y: 69,
    icon: PLACEHOLDER_ICON,
  },
  {
    name: "The Boulevard",
    area: "Dubai Land Residence Complex",
    href: "/projects/the-boulevard-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp",
    x: 66,
    y: 76,
    icon: `${ICON_BASE}/boulevard.png`,
  },
];
