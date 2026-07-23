export type ProjectStatus = "Featured" | "New Launch" | "Off Plan" | "Ready to Move";

export type ProjectType =
  | "Residential"
  | "Branded Residences"
  | "Waterfront"
  | "Commercial"
  | "Mixed-Use"
  | "Urban Living"
  | "Lifestyle Communities"
  | "Villa";

export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  /** Short tag shown on cards. */
  location: string;
  types: ProjectType[];
  statuses: ProjectStatus[];
};

export const PROJECTS: Project[] = [
  {
    title: "FAUCHON Résidences by Prestige One",
    description:
      "Prestige One Developments and FAUCHON Hospitality unite in Jumeirah Gardens City—design integrity, French art de vivre, and skyline residences shaped for refined everyday living.",
    thumbnail: "/assets/images/v2/project-featured-images/fauchon/fauchon-banner.webp",
    link: "/projects/fauchon-residences",
    location: "Jumeirah Gardens City",
    types: ["Branded Residences", "Residential", "Urban Living"],
    statuses: ["Featured", "New Launch"],
  },
  {
    title: "Sanctuary by Prestige One",
    description:
      "Step into a more balanced Dubai lifestyle at Sanctuary by Prestige One, where modern living and commercial spaces come together in Meydan.",
    thumbnail: "/assets/images/v2/project-featured-images/sanctuary/sanctuary-aprtment.webp",
    link: "/projects/sanctuary",
    location: "Meydan Horizon",
    types: ["Branded Residences", "Mixed-Use", "Residential", "Commercial", "Waterfront", "Lifestyle Communities"],
    statuses: ["Featured", "New Launch"],
  },
  {
    title: "Hilton Residences Dubai Maritime City",
    description: "Life at Hilton Residences by Prestige One is a balance of elegance and ease.",
    thumbnail: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
    link: "/projects/hilton-residences-dubai-maritime-city",
    location: "Dubai Maritime City",
    types: ["Branded Residences", "Waterfront", "Residential", "Urban Living"],
    statuses: ["Featured", "New Launch"],
  },
  {
    title: "Berkeley Square North",
    description:
      "Berkeley Square North, located in Jumeirah Village Circle, stands apart from the rest. Designed with inspiration from London's classic architecture, it favors clean lines.",
    thumbnail: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-North.webp",
    link: "/projects/berkeley-square-north",
    location: "JVC",
    types: ["Residential", "Urban Living"],
    statuses: ["Off Plan"],
  },
  {
    title: "Berkeley Square South",
    description:
      "Positioned within Jumeirah Village Circle, Berkeley Square South brings together elegance and beautiful design.",
    thumbnail: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-South.webp",
    link: "/projects/berkeley-square-south",
    location: "JVC",
    types: ["Residential", "Urban Living"],
    statuses: ["Off Plan"],
  },
  {
    title: "Luxury Canal Residences",
    description:
      "Luxury Canal Residences by Prestige One captures the rhythm of the waves in Dubai Islands, offering G+2P+12 canal-front living.",
    thumbnail: "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp",
    link: "/projects/luxury-canal-residences",
    location: "Dubai Islands",
    types: ["Residential", "Waterfront", "Lifestyle Communities"],
    statuses: ["Off Plan"],
  },
  {
    title: "Coastal Haven",
    description:
      "Coastal Haven by Prestige Harbour defines the new era of coastal living in Dubai Islands, with G+2P+12 waterfront elegance.",
    thumbnail: "/assets/images/v2/project-featured-images/coastal-haven/Coastal-Haven.webp",
    link: "/projects/coastal-haven/",
    location: "Dubai Islands",
    types: ["Residential", "Waterfront", "Lifestyle Communities"],
    statuses: ["Off Plan"],
  },
  {
    title: "The Boulevard",
    description: "The Boulevard by Prestige One brings bold and ambitious boulevard living to DLRC, rising 18 floors.",
    thumbnail: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp",
    link: "/projects/the-boulevard-by-prestige-one/",
    location: "DLRC",
    types: ["Residential", "Urban Living"],
    statuses: ["Off Plan"],
  },
  {
    title: "Parkway by Prestige One",
    description: "Parkway by Prestige One is a nature-inspired sanctuary in Meydan Horizon, rising 33 floors amidst lush surroundings.",
    thumbnail: "/assets/images/v2/project-featured-images/parkway/parkway.webp",
    link: "/projects/parkway-by-prestige-one/",
    location: "Meydan Horizon",
    types: ["Residential", "Lifestyle Communities"],
    statuses: ["Off Plan"],
  },
  {
    title: "Golf Residences",
    description:
      "Golf Residences by Prestige One is designed for active family living in Sports City, featuring 23 floors with contemporary residences.",
    thumbnail: "/assets/images/v2/project-featured-images/golf/The-Place-Banner.webp",
    link: "/projects/golf-residences-by-prestige-one/",
    location: "Dubai Sports City",
    types: ["Residential", "Lifestyle Communities"],
    statuses: ["Off Plan"],
  },
  {
    title: "The One by Prestige One",
    description: "The One by Prestige One is a commercial hub in Barsha Heights, designed for visionaries within a G+14 development.",
    thumbnail: "/assets/images/v2/project-featured-images/one/the-one.webp",
    link: "/projects/the-one-by-prestige-one/",
    location: "Barsha Heights",
    types: ["Commercial"],
    statuses: ["Off Plan"],
  },
  {
    title: "Seaside by Prestige One",
    description: "Seaside by Prestige One offers a retreat along the sea in Dubai Islands, with G+12 waterfront living.",
    thumbnail: "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp",
    link: "/projects/seaside-by-prestige-one/",
    location: "Dubai Islands",
    types: ["Waterfront", "Residential", "Lifestyle Communities"],
    statuses: ["Featured", "Off Plan"],
  },
  {
    title: "The Waterway by Prestige One",
    description:
      "The Waterway by Prestige One, featuring 20 floors and beautiful waterfront homes brings the flow of water to life in Meydan Horizon.",
    thumbnail: "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp",
    link: "/projects/the-waterway-by-prestige-one/",
    location: "Meydan Horizon",
    types: ["Waterfront", "Residential", "Lifestyle Communities"],
    statuses: ["Off Plan"],
  },
  {
    title: "Vista by Prestige One",
    description: "Vista by Prestige One combines sleek architecture with panoramic golf views in Sports City, standing at G+15.",
    thumbnail: "/assets/images/v2/project-featured-images/vista/vista.webp",
    link: "/projects/vista-by-prestige-one/",
    location: "Dubai Sports City",
    types: ["Residential", "Urban Living"],
    statuses: ["Featured", "Ready to Move"],
  },
  {
    title: "The Residence by Prestige One",
    description: "The Residence by Prestige One offers modern luxury in a boutique G+5 low-rise setting in JVC.",
    thumbnail: "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp",
    link: "/projects/the-residence-by-prestige-one/",
    location: "JVC",
    types: ["Residential", "Urban Living"],
    statuses: ["Featured", "Ready to Move"],
  },
  {
    title: "Luxe Villa",
    description:
      "Prestige is an inherent trait, not merely an ambition. It flows as naturally as the tide-defining every aspect of existence.",
    thumbnail: "/assets/images/v2/project-featured-images/luxe-villa/luxe-villas.webp",
    link: "/projects/luxe-villa-by-prestige-one/",
    location: "Palm Jumeirah",
    types: ["Residential", "Villa", "Lifestyle Communities"],
    statuses: ["Off Plan"],
  },
  {
    title: "Seascape Villa",
    description:
      "Explore your private escape into luxury at Seascape Villa by Prestige One, where the serene embrace of the sea welcomes you.",
    thumbnail: "/assets/images/v2/project-featured-images/seascape/seascape.webp",
    link: "/projects/seascape-villa-by-prestige-one/",
    location: "Palm Jumeirah",
    types: ["Waterfront", "Residential", "Villa", "Lifestyle Communities"],
    statuses: ["Off Plan"],
  },
  {
    // Placeholder entry: full description and project page content are
    // still pending.
    title: "Palm Villa",
    description:
      "Palm Villa by Prestige One — full project details coming soon.",
    thumbnail: "/assets/images/v2/project-featured-images/palm-villa/Palm-Jumierah-Villa.webp",
    link: "/projects/palm-villa-by-prestige-one/",
    location: "Palm Jumeirah",
    types: ["Residential", "Villa", "Lifestyle Communities"],
    statuses: ["Off Plan"],
  },
];

/** Valid filter keys accepted from the URL query string. */
export const PROJECT_FILTER_KEYS = ["location", "type", "status"] as const;
export type ProjectFilterKey = (typeof PROJECT_FILTER_KEYS)[number];

/** Ordered locations that actually have projects (used by filter pills). */
export const PROJECT_LOCATIONS: string[] = Array.from(
  new Set(PROJECTS.map((project) => project.location)),
);

export function filterProjects(filters: {
  location?: string | null;
  type?: string | null;
  status?: string | null;
}): Project[] {
  return PROJECTS.filter((project) => {
    if (filters.location && filters.location !== "All" && project.location !== filters.location) {
      return false;
    }
    if (filters.type && !project.types.includes(filters.type as ProjectType)) return false;
    if (filters.status && !project.statuses.includes(filters.status as ProjectStatus)) return false;
    return true;
  });
}

export function getFeaturedProjects(limit = 4): Project[] {
  return PROJECTS.filter((project) => project.statuses.includes("Featured")).slice(0, limit);
}
