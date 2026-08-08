// Single source of truth for every Prestige One project.
//
// Add, remove, reorder, or edit projects in PROJECT_CATALOGUE below. Homepage
// sliders, the projects listing, navigation, and project detail pages all read
// from this file through the selectors exported at the bottom.
//
// Detail content (galleries, specs, overview) is enriched per-project where we
// have real assets; anything missing falls back to sensible defaults derived
// from the card data and is marked TODO(content) for a later copy pass.

export type ProjectCategory = "residential" | "commercial" | "upcoming";

export interface DevelopmentSlide {
  id: string;
  image: string;
  title: string;
  location: string;
  description: string;
  href: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface PaymentMilestone {
  label: string;
  value: string;
}

export interface ProjectPOI {
  name: string;
  time: string;
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
  introImage?: string;
  gallery: string[];
  overview: string[];
  highlights: string[];
  specs: ProjectSpec[];
  amenities: string[];
  paymentPlan: PaymentMilestone[];
  connectivity: string[];
  nearby: ProjectPOI[];
  schools: string[];
  hospitals: string[];
  documents: string[];
  video: string;
}

interface ProjectEnrichment {
  status?: string;
  hero?: string;
  introImage?: string;
  gallery?: string[];
  overview?: string[];
  highlights?: string[];
  specs?: ProjectSpec[];
  amenities?: string[];
  paymentPlan?: PaymentMilestone[];
  connectivity?: string[];
  nearby?: ProjectPOI[];
  schools?: string[];
  hospitals?: string[];
  documents?: string[];
}

interface ProjectSource extends Omit<DevelopmentSlide, "href"> {
  category: ProjectCategory;
}

// Sensible, brand-plausible defaults so every project detail page reads as a
// full page even before bespoke content is written. Clearly generic /
// indicative - refine per project in a later content pass.
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

// Non-flagship projects leave nearby/schools/hospitals empty; the project page
// fills them from the project's matching destination (which carries real,
// researched drive times, schools and hospitals) so nothing is generic-guessed.
const DEFAULT_DOCUMENTS = ["Brochure", "Floor plans", "Payment plan", "Fact sheet"];

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents (FAUCHON Résidences)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Catalogue order is also the Projects listing order. Upcoming projects stay
// at the bottom, while active residential and commercial projects populate the
// homepage "Our Developments" slider in this same order.
const PROJECT_CATALOGUE: ProjectSource[] = [
  {
    id: "fauchon-residences",
    image: "/assets/project-featured-images/sliders/fauchon.webp",
    title: "FAUCHON Résidences by Prestige One",
    location: "Jumeirah Garden City",
    description: "Parisian-inspired living with the iconic FAUCHON lifestyle.",
    category: "residential",
  },
  {
    id: "sanctuary-residences",
    image: "/assets/project-featured-images/sliders/sanctuary.webp",
    title: "Sanctuary Residences by Prestige One",
    location: "Meydan Horizon",
    description: "Panoramic lagoon views overlooking Ras Al Khor Wildlife Sanctuary.",
    category: "residential",
  },
  {
    id: "sanctuary-hive",
    image: "/assets/images/v2/project-featured-images/sanctuary/sanctuary-hive-2.webp",
    title: "Sanctuary Hive by Prestige One",
    location: "Meydan Horizon",
    description: "Commercial spaces ideal for businesses seeking visibility and connectivity.",
    category: "commercial",
  },
  {
    id: "hilton-residences",
    image: "/assets/project-featured-images/sliders/hilton-1.webp",
    title: "Hilton Residences Dubai Maritime City",
    location: "Dubai Maritime City",
    description: "Waterfront living inspired by the Hilton way of life.",
    category: "residential",
  },
  {
    id: "berkeley-square-north",
    image: "/assets/project-featured-images/sliders/berkeley-north.webp",
    title: "Berkeley Square North",
    location: "Jumeirah Village Circle",
    description: "Timeless architecture inspired by London living.",
    category: "residential",
  },
  {
    id: "berkeley-square-south",
    image: "/assets/project-featured-images/sliders/berkeley-south.webp",
    title: "Berkeley Square South",
    location: "Jumeirah Village Circle",
    description: "Where open spaces shape everyday living.",
    category: "residential",
  },
  {
    id: "luxury-canal-residences",
    image: "/assets/project-featured-images/sliders/luxury-canal.webp",
    title: "Luxury Canal Residences by Prestige One",
    location: "Dubai Islands",
    description: "Waterfront living inspired by the rhythm of Dubai Islands.",
    category: "residential",
  },
  {
    id: "coastal-haven",
    image: "/assets/project-featured-images/sliders/coastal-heaven.webp",
    title: "Coastal Haven by Prestige One",
    location: "Dubai Islands",
    description: "Coastal living with breathtaking Gulf views.",
    category: "residential",
  },
  {
    id: "the-boulevard",
    image: "/assets/project-featured-images/sliders/boulevard.webp",
    title: "The Boulevard by Prestige One",
    location: "DLRC",
    description: "Bold urban living for modern lifestyles.",
    category: "residential",
  },
  {
    id: "parkway",
    image: "/assets/project-featured-images/sliders/parkway.webp",
    title: "Parkway by Prestige One",
    location: "Meydan Horizon",
    description: "Nature-inspired living designed for balance.",
    category: "residential",
  },
  {
    id: "golf-residences",
    image: "/assets/project-featured-images/sliders/golf-1.webp",
    title: "Golf Residences by Prestige One",
    location: "Dubai Sports City",
    description: "Uninterrupted golf course views, every day.",
    category: "residential",
  },
  {
    id: "the-one",
    image: "/assets/project-featured-images/sliders/the-one-1.webp",
    title: "The One by Prestige One",
    location: "Barsha Heights",
    description: "A commercial hub within a striking G+14 development.",
    category: "commercial",
  },
  {
    id: "seaside",
    image: "/assets/project-featured-images/sliders/seaside.webp",
    title: "Seaside by Prestige One",
    location: "Dubai Islands",
    description: "A peaceful waterfront retreat.",
    category: "residential",
  },
  {
    id: "waterway",
    image: "/assets/project-featured-images/sliders/waterway.webp",
    title: "Waterway by Prestige One",
    location: "Meydan Horizon",
    description: "Serene living inspired by the water.",
    category: "residential",
  },
  {
    id: "vista",
    image: "/assets/project-featured-images/sliders/vista.webp",
    title: "Vista by Prestige One",
    location: "Dubai Sports City",
    description: "Contemporary residences designed around panoramic views.",
    category: "residential",
  },
  {
    id: "the-residence",
    image: "/assets/project-featured-images/sliders/residence.webp",
    title: "The Residence by Prestige One",
    location: "Jumeirah Village Circle",
    description: "Boutique living with thoughtful design.",
    category: "residential",
  },
  {
    id: "luxe-villa",
    image: "/assets/project-featured-images/sliders/luxe-villa.webp",
    title: "Luxe Villa by Prestige One",
    location: "Palm Jumeirah",
    description: "Private villa living with timeless elegance.",
    category: "residential",
  },
  {
    id: "seascape-villa",
    image: "/assets/project-featured-images/sliders/seascape-1.webp",
    title: "Seascape Villa",
    location: "Palm Jumeirah",
    description: "A private escape by the sea.",
    category: "residential",
  },
  {
    id: "palm-villa",
    image: "/assets/project-featured-images/palm-villa/Palm-Jumierah-Villa.webp",
    title: "Palm Villa by Prestige One",
    location: "Palm Jumeirah",
    description: "Exclusive living, designed for privacy.",
    category: "residential",
  },
  {
    id: "vista-hub",
    image: "/assets/project-featured-images/vista-hub/vista-hub--blur.webp",
    title: "Vista Hub by Prestige One",
    location: "Majan City",
    description: "A new landmark taking shape in Majan City.",
    category: "upcoming",
  },
  {
    id: "prestige-seaside",
    image: "/assets/project-featured-images/prestige-seaside/glyfada-blur.webp",
    title: "Prestige Seaside",
    location: "Greece",
    description: "Prestige One's first address on the Greek coast.",
    category: "upcoming",
  },
  {
    id: "prestige-square",
    image: "/assets/project-featured-images/prestige-square/prestige-square--blur.webp",
    title: "Prestige Square",
    location: "Dubai",
    description: "A new Prestige One landmark taking shape - coming soon.",
    category: "upcoming",
  },
];

const PROJECT_VIDEO_ROOT = "/assets/images/v2/project-features-videos";
const PROJECT_HERO_VIDEO_BY_ID: Record<string, string> = {
  "fauchon-residences": `${PROJECT_VIDEO_ROOT}/v3/Fauchon.mp4`,
  "sanctuary-residences": `${PROJECT_VIDEO_ROOT}/v3/Sanctuary.mp4`,
  "sanctuary-hive": `${PROJECT_VIDEO_ROOT}/teaser-hive.mp4`,
  "hilton-residences": `${PROJECT_VIDEO_ROOT}/v3/Hilton.mp4`,
  "berkeley-square-north": `${PROJECT_VIDEO_ROOT}/v3/Berkeley.mp4`,
  "berkeley-square-south": `${PROJECT_VIDEO_ROOT}/v3/Berkeley.mp4`,
  "luxury-canal-residences": `${PROJECT_VIDEO_ROOT}/v2-Teaser-Luxury-Canal.mp4`,
  "coastal-haven": `${PROJECT_VIDEO_ROOT}/v3/Coastal.mp4`,
  "the-boulevard": `${PROJECT_VIDEO_ROOT}/v2-Teaser-Video_The-Boulevard.mp4`,
  "parkway": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The-Parkway.mp4`,
  "golf-residences": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The-Golf.mp4`,
  "the-one": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The-One.mp4`,
  "seaside": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The_SEASIDE.mp4`,
  "waterway": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The-Waterway.mp4`,
  "vista": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The-VISTA.mp4`,
  "the-residence": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The-RESIDENCE.mp4`,
  "luxe-villa": `${PROJECT_VIDEO_ROOT}/prestigeone_corporate_video.mp4`,
  "seascape-villa": `${PROJECT_VIDEO_ROOT}/v2-Teaser-Video_Seascape.mp4`,
  "palm-villa": `${PROJECT_VIDEO_ROOT}/prestigeone_corporate_video.mp4`,
  "vista-hub": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The-VISTA.mp4`,
  "prestige-seaside": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The_SEASIDE.mp4`,
  "prestige-square": `${PROJECT_VIDEO_ROOT}/prestigeone_corporate_video.mp4`,
};

const V2 = "/assets/images/v2/project-featured-images";

// Per-project real content. Keyed by slug. Only flagships are fully enriched;
// everything else falls back to derived defaults below.
const enrichment: Record<string, ProjectEnrichment> = {
  "hilton-residences-dubai-maritime-city": {
    status: "Now Selling",
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
      "Life at Hilton Residences by Prestige One is a balance of elegance and ease - one of the most defining landmarks taking shape in Dubai Maritime City.",
      "Impeccable design, enriched by thoughtful amenities and elevated by the trusted Hilton name, brings branded waterfront living to a peninsula wrapped by the sea, with sweeping views of the harbour and the Dubai skyline.",
      "Residences range from considered one- and two-bedroom apartments to expansive duplexes, each finished to hotel-brand standards.",
    ],
    highlights: [
      "Branded residences operated to Hilton hospitality standards",
      "Waterfront living on the Dubai Maritime City peninsula",
      "Infinity skyline pool, outdoor cinema and resort amenities",
      "One- and two-bedroom apartments plus signature duplexes",
    ],
    specs: [
      { label: "Type", value: "Branded Residences" },
      { label: "Location", value: "Dubai Maritime City" },
      { label: "Configurations", value: "1 & 2 Bed · Duplexes" },
      { label: "Status", value: "Now Selling" },
    ],
    amenities: [
      "Infinity skyline pool",
      "Outdoor cinema",
      "Fitness centre",
      "Running track",
      "Multi-sports court",
      "BBQ deck",
      "Outdoor kids' play area",
      "Indoor play area",
      "Juice bar",
    ],
    nearby: [
      { name: "Downtown Dubai", time: "5–10 min" },
      { name: "Dubai International Airport", time: "10–15 min" },
      { name: "Jumeirah Beach Residence (JBR)", time: "10–15 min" },
      { name: "Mall of the Emirates", time: "15 min" },
    ],
  },
  "fauchon-residences-by-prestige-one": {
    status: "Now Selling",
    hero: `${V2}/fauchon/fauchon-banner.webp`,
    introImage: "/assets/project-featured-images/fauchon/fauchon-banner.webp",
    gallery: [
      `${V2}/fauchon/fauchon-banner.webp`,
      `${V2}/fauchon/fauchon-day-view.webp`,
      `${V2}/fauchon/fauchon-banner-x.webp`,
    ],
    overview: [
      "FAUCHON Résidences brings the art de vivre of the storied Parisian maison to Dubai - branded residences where French elegance shapes every detail.",
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
    hero: `${V2}/sanctuary/sanctuary-residential-exterior-view.webp`,
    gallery: [
      `${V2}/sanctuary/sanctuary-residential-exterior-view.webp`,
      `${V2}/sanctuary/sanctuary-aprtment.webp`,
      `${V2}/sanctuary/3-Bedroom-Unit-Living-Room-1.webp`,
      `${V2}/sanctuary/Rooftop-Pool-scaled.jpg`,
      `${V2}/sanctuary/8.-Residential-Amenities-Gym-Level-9-Option-1-scaled.jpg`,
    ],
    overview: [
      "Sanctuary by Prestige One is a more balanced kind of Dubai living in Meydan - residences and considered commercial spaces arranged around calm, greenery and connection.",
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

// and the "closer look" grid always lead with the building.
const GAL = "/assets/project-galleries";
const FAUCHON_V3_GALLERY = "/assets/images/v3/project-amenities/fauchon/v3/gallery";
function galleryAt(root: string, files: string[]): string[] {
  return files.map((file) => `${root}/${file}`);
}
function gal(slug: string, files: string[]): string[] {
  return galleryAt(`${GAL}/${slug}`, files);
}
const galleryData: Record<string, string[]> = {
  "berkeley-square-north": gal("berkeley-square-north", [
    "berkeley-square-north.webp",
    "berkeley-square-2br-living-room-02-scaled.webp",
    "berkeley-square-kitchen.webp",
    "berkeley-square-3br-bathroom-scaled.webp",
    "berkeley-square-podcast-room-scaled.webp",
    "gym-4-scaled.webp",
    "kids-play-area-1-scaled.webp",
  ]),
  "berkeley-square-south": gal("berkeley-square-south", [
    "berkeley-square-south.webp",
    "berkeley-square-2br-living-room-02-scaled.webp",
    "berkeley-square-kitchen.webp",
    "berkeley-square-3br-bathroom-scaled.webp",
    "berkeley-square-podcast-room-scaled.webp",
    "gym-4-scaled.webp",
    "kids-play-area-1-scaled.webp",
  ]),
  "coastal-haven-by-prestige-one": gal("coastal-haven-by-prestige-one", [
    "coastal-haven.webp",
    "04-3-bedroom-living-dining-scaled.webp",
    "06-3-bedroom-kitchen-scaled.webp",
    "bathroom-scaled.webp",
    "01-game-room-view-scaled.webp",
    "03-gym-scaled.webp",
    "04-kids-play-area-scaled.webp",
  ]),
  "fauchon-residences-by-prestige-one": galleryAt(FAUCHON_V3_GALLERY, [
    "01-exterior-building.webp",
    "02-exterior-pool.webp",
    "04-exterior-rooftop-dining.webp",
    "05-exterior-skyline-terrace.webp",
    "06-exterior-private-pool.webp",
    "07-exterior-gym.webp",
    "08-amenity-reception.webp",
    "09-amenity-lift-lobby.webp",
    "12-amenity-multipurpose-hall.webp",
    "13-amenity-lounge.webp",
    "14-amenity-residents-lounge.webp",
    "15-room-living-one.webp",
    "16-room-living-two.webp",
    "18-room-dining.webp",
    "19-room-bedroom.webp",
    "20-room-bathroom.webp",
  ]),
  "golf-residences-by-prestige-one": gal("golf-residences-by-prestige-one", [
    "the-place-banner.webp",
    "living-1-scaled.webp",
    "living-3-scaled.webp",
    "bedroom-1-02-scaled-1.webp",
    "club-lounge-02-scaled-1.webp",
    "mens-gym-01-scaled.webp",
    "kids-1-scaled.webp",
  ]),
  "hilton-residences-dubai-maritime-city": gal("hilton-residences-dubai-maritime-city", [
    "hilton-night-view-1.webp",
    "2bed_living-dining-kitchen.webp",
    "duplex_master-bedroom.webp",
    "25770800_prestige_spl-3bed_m-bathroom__.webp",
    "pool.webp",
    "25770800-prestige_v24_alfresco-lounge_20251113.webp",
    "25770800-prestige_v26_outdoor-gym_20251113-1.webp",
  ]),
  "luxe-villa-by-prestige-one": gal("luxe-villa-by-prestige-one", [
    "luxe-villas.webp",
    "the-luxe-villas-1.jpg",
    "the-luxe-villas-entrance.jpg",
    "the-luxe-villas-entrance-2.jpg",
    "the-luxe-villas-interior-firstfloor.jpg",
    "the-luxe-villas-interior-firstfloor-2.jpg",
    "the-luxe-villas-majlis.jpg",
  ]),
  "luxury-canal-residences-by-prestige-one": gal("luxury-canal-residences-by-prestige-one", [
    "luxury-canal.webp",
    "04-3-bedroom-living-dining-scaled.webp",
    "06-3-bedroom-kitchen-scaled.webp",
    "bathroom-scaled.webp",
    "01-game-room-view-scaled.webp",
    "03-gym-scaled.webp",
    "04-kids-play-area-scaled.webp",
  ]),
  "parkway-by-prestige-one": gal("parkway-by-prestige-one", [
    "parkway.webp",
    "living-area-scaled.webp",
    "bedroom-1.webp",
    "bathroom-scaled.webp",
    "lobby-2-1200x900.webp",
    "indoor-cinema-scaled.webp",
    "yoga-area.webp",
  ]),
  "sanctuary-residences-by-prestige-one": gal("sanctuary-residences-by-prestige-one", [
    "sanctuary-aprtment.webp",
    "3-bedroom-unit-living-room-1.webp",
    "17.-3-bedroom-unit-master-bedroom.jpg",
    "3-bedroom-unit-toilet-1.webp",
    "rooftop-pool-scaled.jpg",
    "8.-residential-amenities-gym-level-9-option-1-scaled.jpg",
    "10.-residential-amenities-cinema-level-9-scaled.jpg",
  ]),
  "seascape-villa": gal("seascape-villa", [
    "seascape2.jpg",
    "seascape-ext2.jpg",
    "seascape-ext4.jpg",
    "seascape-ext5.jpg",
  ]),
  "seaside-by-prestige-one": gal("seaside-by-prestige-one", [
    "seaside-featured-image.webp",
    "seaside-2bhk-living.webp",
    "seaside-3bhk-livingkitchen.webp",
    "seaside-2bhk-kitchen.webp",
    "seaside-3bhk-kitchen.webp",
    "seaside-2bhk-kitchen-1.webp",
    "seaside-3bhk-masterbedbathroom.webp",
  ]),
  "the-boulevard-by-prestige-one": gal("the-boulevard-by-prestige-one", [
    "boulevard.webp",
    "living-scaled.webp",
    "kitchen-scaled.webp",
    "k2-scaled.webp",
    "bahtrrom-scaled.webp",
    "art-room-scaled.webp",
    "gameroom-scaled.webp",
  ]),
  "the-one-by-prestige-one": gal("the-one-by-prestige-one", [
    "the-one.webp",
    "4.webp",
    "5.webp",
    "owners-lounge_final_4.webp",
    "9th-floor-spa-2.webp",
    "pre_one_cigar_lounge_f2-scaled.webp",
    "pre_one_gym_f1.webp",
  ]),
  "the-residence-by-prestige-one": gal("the-residence-by-prestige-one", [
    "the-residence.webp",
    "the-residence-carousel-2.webp",
    "the-residence-carousel-3.jpg",
    "the-residence-carousel-6.webp",
    "the-residence-carousel-10.webp",
    "berkeley-square-2br-living-room-02-scaled.webp",
    "berkeley-square-kitchen.webp",
  ]),
  "vista-by-prestige-one": gal("vista-by-prestige-one", [
    "vista.webp",
    "vista-living-room.webp",
    "vista-master-bedroom.webp",
    "vista-carousel-bathroom-1.jpg",
    "vista-observation-deck.webp",
    "mens-gym-01-scaled.webp",
    "kids-1-scaled.webp",
  ]),
  "waterway-by-prestige-one": gal("waterway-by-prestige-one", [
    "waterway-pic-2.webp",
    "the-waterway-living.webp",
    "the-waterway-living-1.webp",
    "the-waterway-bedroom.webp",
    "the-waterway-bathroom.webp",
  ]),
};

function toProject(slide: ProjectSource): Project {
  const { category } = slide;
  const slug = slugify(slide.title);
  const e = enrichment[slug] ?? {};
  // real gallery (from copied renders) drives both the gallery and the cover
  const realGallery = galleryData[slug];
  const hero = realGallery ? realGallery[0]! : (e.hero ?? slide.image);
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
    introImage: e.introImage,
    gallery: realGallery ?? e.gallery ?? [hero],
    overview:
      e.overview ?? [
        slide.description,
        `Set in ${slide.location}, ${slide.title} reflects the Prestige One approach - well-connected locations, architecture designed around real living, and quality you can rely on. Every residence is planned to make the everyday feel effortless.`,
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
    connectivity: e.connectivity ?? [],
    nearby: e.nearby ?? [],
    schools: e.schools ?? [],
    hospitals: e.hospitals ?? [],
    documents: e.documents ?? DEFAULT_DOCUMENTS,
    video: PROJECT_HERO_VIDEO_BY_ID[slide.id] ?? `${PROJECT_VIDEO_ROOT}/prestigeone_corporate_video.mp4`,
  };
}

export const projects: Project[] = PROJECT_CATALOGUE.map(toProject);

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

function toDevelopmentSlide(project: Project): DevelopmentSlide {
  return {
    id: project.slug,
    image: project.image,
    title: project.title,
    location: project.location,
    description: project.description,
    href: `/projects/${project.slug}`,
  };
}

export function getProjectSlidesByCategory(category: ProjectCategory): DevelopmentSlide[] {
  return getProjectsByCategory(category).map(toDevelopmentSlide);
}

export function getActiveProjectSlides(): DevelopmentSlide[] {
  return projects
    .filter((project) => project.category !== "upcoming")
    .map(toDevelopmentSlide);
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
