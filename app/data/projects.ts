// Unified project catalogue for the Prestige One site.
//
// Normalizes the residential / commercial / upcoming slide data into a single
// `Project` shape with a slug, category, status and detail fields, and exposes
// lookup helpers used by /projects and /projects/[slug].
//
// Detail content (galleries, specs, overview) is enriched per-project where we
// have real assets; anything missing falls back to sensible defaults derived
// from the card data and is marked TODO(content) for a later copy pass.

import residentialDevelopments, { type DevelopmentSlide } from "./residential-developments-data";
import commercialDevelopments from "./commercial-developments-data";
import upcomingDevelopments from "./upcoming-developments-data";

export type ProjectCategory = "residential" | "commercial" | "upcoming";

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface PaymentMilestone {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  status: string;
  tagline: string;
  description: string;
  image: string; // card / slider image
  hero: string; // large hero image
  gallery: string[];
  overview: string[];
  highlights: string[];
  specs: ProjectSpec[];
  amenities: string[];
  paymentPlan: PaymentMilestone[];
  connectivity: string[];
  video?: string;
}

interface ProjectEnrichment {
  status?: string;
  hero?: string;
  gallery?: string[];
  overview?: string[];
  highlights?: string[];
  specs?: ProjectSpec[];
  amenities?: string[];
  paymentPlan?: PaymentMilestone[];
  connectivity?: string[];
  video?: string;
}

// Sensible, brand-plausible defaults so every project detail page reads as a
// full page even before bespoke content is written. Clearly generic /
// indicative — refine per project in a later content pass.
const DEFAULT_AMENITIES = [
  "Infinity swimming pool",
  "State-of-the-art fitness centre",
  "Landscaped podium gardens",
  "24/7 concierge & security",
  "Covered resident parking",
  "Children's play area",
  "Residents' lounge & co-working",
  "Retail & dining on the doorstep",
];

const DEFAULT_PAYMENT_PLAN: PaymentMilestone[] = [
  { label: "On booking", value: "20%" },
  { label: "During construction", value: "40%" },
  { label: "On handover", value: "40%" },
];

const DEFAULT_CONNECTIVITY = [
  "Minutes from Sheikh Zayed Road",
  "Close to Dubai International Airport",
  "Near beaches, schools and retail",
  "Quick access across the city",
];

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents (FAUCHON Résidences)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const V2 = "/assets/images/v2/project-featured-images";

// Per-project real content. Keyed by slug. Only flagships are fully enriched;
// everything else falls back to derived defaults below.
const enrichment: Record<string, ProjectEnrichment> = {
  "hilton-residences-dubai-maritime-city": {
    status: "Now Selling",
    video: "/assets/images/v2/project-features-videos/v3/Hilton.mp4",
    hero: `${V2}/hilton/HILTON-NIGHT-VIEW-1.webp`,
    gallery: [
      `${V2}/hilton/HILTON-NIGHT-VIEW-1.webp`,
      `${V2}/hilton/2BED_Living-Dining-Kitchen.webp`,
      `${V2}/hilton/Duplex_Master-Bedroom.webp`,
      `${V2}/hilton/25770800-Prestige_V24_ALFRESCO-LOUNGE_20251113.webp`,
      `${V2}/hilton/25770800-Prestige_V26_Outdoor-Gym_20251113-1.webp`,
      `${V2}/hilton/25770800_Prestige_SPL-3BED_M-Bathroom__.webp`,
    ],
    overview: [
      "Hilton Residences by Prestige One brings the world's most celebrated hospitality name to Dubai Maritime City — a waterfront community where elegance meets ease.",
      "Residences range from considered one- and two-bedroom apartments to expansive duplexes, each finished to hotel-brand standards with sweeping views of the harbour and the Dubai skyline.",
    ],
    highlights: [
      "Branded residences operated to Hilton hospitality standards",
      "Waterfront living in Dubai Maritime City",
      "Alfresco lounges, outdoor gym and resort-style amenities",
      "One- and two-bedroom apartments plus signature duplexes",
    ],
    specs: [
      { label: "Type", value: "Branded Residences" },
      { label: "Location", value: "Dubai Maritime City" },
      { label: "Configurations", value: "1 & 2 Bed · Duplexes" },
      { label: "Status", value: "Now Selling" },
    ],
  },
  "fauchon-residences-by-prestige-one": {
    status: "Now Selling",
    video: "/assets/images/v2/project-features-videos/v3/Fauchon-v3.mp4",
    hero: `${V2}/fauchon/fauchon-banner.webp`,
    gallery: [
      `${V2}/fauchon/fauchon-banner.webp`,
      `${V2}/fauchon/fauchon-day-view.webp`,
      `${V2}/fauchon/fauchon-banner-x.webp`,
    ],
    overview: [
      "FAUCHON Résidences brings the art de vivre of the storied Parisian maison to Dubai — branded residences where French elegance shapes every detail.",
      "From curated interiors to signature gastronomy, life at FAUCHON is designed around comfort, character and everyday luxury.",
    ],
    highlights: [
      "The first FAUCHON branded residences in the region",
      "Parisian art-de-vivre interiors and services",
      "Signature FAUCHON gastronomy on your doorstep",
    ],
    specs: [
      { label: "Type", value: "Branded Residences" },
      { label: "Location", value: "Dubai" },
      { label: "Brand", value: "FAUCHON Paris" },
      { label: "Status", value: "Now Selling" },
    ],
  },
  "sanctuary-residences-by-prestige-one": {
    status: "Now Selling",
    video: "/assets/images/v2/project-features-videos/v3/Sanctuary.mp4",
    hero: `${V2}/sanctuary/sanctuary-residential-exterior-view.webp`,
    gallery: [
      `${V2}/sanctuary/sanctuary-residential-exterior-view.webp`,
      `${V2}/sanctuary/sanctuary-aprtment.webp`,
      `${V2}/sanctuary/3-Bedroom-Unit-Living-Room-1.webp`,
      `${V2}/sanctuary/Rooftop-Pool-scaled.jpg`,
      `${V2}/sanctuary/8.-Residential-Amenities-Gym-Level-9-Option-1-scaled.jpg`,
    ],
    overview: [
      "Sanctuary by Prestige One is a more balanced kind of Dubai living in Meydan — residences and considered commercial spaces arranged around calm, greenery and connection.",
    ],
    highlights: [
      "Residential and commercial in one balanced community",
      "Set in the heart of Meydan",
      "Designed around wellbeing and everyday convenience",
    ],
  },
};

const CATEGORY_DEFAULT_STATUS: Record<ProjectCategory, string> = {
  residential: "Now Selling",
  commercial: "Commercial",
  upcoming: "Coming Soon",
};

function toProject(slide: DevelopmentSlide, category: ProjectCategory): Project {
  const slug = slugify(slide.title);
  const e = enrichment[slug] ?? {};
  const hero = e.hero ?? slide.image;
  return {
    slug,
    title: slide.title,
    location: slide.location,
    category,
    status: e.status ?? CATEGORY_DEFAULT_STATUS[category],
    tagline: slide.description,
    description: slide.description,
    image: slide.image,
    hero,
    gallery: e.gallery ?? [hero],
    overview:
      e.overview ?? [
        slide.description,
        `Set in ${slide.location}, ${slide.title} reflects the Prestige One approach — well-connected locations, architecture designed around real living, and quality you can rely on. Every residence is planned to make the everyday feel effortless.`,
        "Backed by in-house expertise and careful execution, it is an address built to hold its value and its appeal for years to come.",
      ],
    highlights:
      e.highlights ?? [
        `A signature address in ${slide.location}`,
        "Designed and delivered by Prestige One Developments",
        "Considered architecture built for lasting value",
        "Premium finishes and thoughtful, liveable layouts",
      ],
    specs:
      e.specs ?? [
        { label: "Type", value: category === "commercial" ? "Commercial" : category === "upcoming" ? "Upcoming" : "Residential" },
        { label: "Location", value: slide.location },
        { label: "Developer", value: "Prestige One" },
        { label: "Status", value: e.status ?? CATEGORY_DEFAULT_STATUS[category] },
      ],
    amenities: e.amenities ?? DEFAULT_AMENITIES,
    paymentPlan: e.paymentPlan ?? DEFAULT_PAYMENT_PLAN,
    connectivity: e.connectivity ?? DEFAULT_CONNECTIVITY,
    video: e.video,
  };
}

// Build the catalogue. Residential first (the marquee list), then commercial &
// upcoming. De-dupe by slug (The One / Sanctuary Hive appear in both the
// residential list and the commercial list — keep the residential card but the
// commercial category wins if only commercial defines it).
const bySlug = new Map<string, Project>();

for (const s of residentialDevelopments) {
  const p = toProject(s, "residential");
  if (!bySlug.has(p.slug)) bySlug.set(p.slug, p);
}
for (const s of commercialDevelopments) {
  const p = toProject(s, "commercial");
  bySlug.set(p.slug, { ...bySlug.get(p.slug), ...p, category: "commercial" });
}
for (const s of upcomingDevelopments) {
  const p = toProject(s, "upcoming");
  if (!bySlug.has(p.slug)) bySlug.set(p.slug, p);
}

export const projects: Project[] = Array.from(bySlug.values());

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByArea(area: string): Project[] {
  const a = area.toLowerCase();
  return projects.filter((p) => p.location.toLowerCase().includes(a));
}

export const projectCategories: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "upcoming", label: "Upcoming" },
];
