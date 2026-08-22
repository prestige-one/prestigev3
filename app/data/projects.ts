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
export type ProjectType = "Residences" | "Commercial" | "Residences and Commercial" | "Villa";

export interface DevelopmentSlide {
  id: string;
  image: string;
  title: string;
  location: string;
  description: string;
  href: string;
  category: ProjectCategory;
  hasDetailPage: boolean;
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

export interface ProjectFaq {
  q: string;
  a: string;
}

export interface ProjectMapLocation {
  mapsUrl: string;
  latitude: number;
  longitude: number;
}

export interface ProjectOverviewFeature {
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  type: ProjectType;
  category: ProjectCategory;
  hasDetailPage: boolean;
  status: string;
  tagline: string;
  description: string;
  image: string; // card / slider image
  hero: string; // large hero image
  registrationUrl?: string;
  introImage?: string;
  gallery: string[];
  overview: string[];
  overviewTitle?: string;
  overviewFeatures?: ProjectOverviewFeature[];
  highlights: string[];
  specs: ProjectSpec[];
  amenities: string[];
  showAmenitiesSection: boolean;
  faqAmenities?: string[];
  faqItems?: ProjectFaq[];
  amenityImages: string[];
  originalAmenityImages?: boolean;
  paymentPlan: PaymentMilestone[];
  connectivity: string[];
  nearby: ProjectPOI[];
  schools: string[];
  hospitals: string[];
  documents: string[];
  closingTitle?: string;
  closingImage?: string;
  mapLocation?: ProjectMapLocation;
  video?: string;
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
  showAmenitiesSection?: boolean;
  faqAmenities?: string[];
  faqItems?: ProjectFaq[];
  amenityImages?: string[];
  originalAmenityImages?: boolean;
  paymentPlan?: PaymentMilestone[];
  connectivity?: string[];
  nearby?: ProjectPOI[];
  schools?: string[];
  hospitals?: string[];
  documents?: string[];
  closingTitle?: string;
  closingImage?: string;
}

interface ProjectSource extends Omit<DevelopmentSlide, "href" | "hasDetailPage"> {
  slug?: string;
  registrationUrl?: string;
  category: ProjectCategory;
  hasDetailPage?: boolean;
  brand?: string;
  type?: ProjectType;
  configuration?: string;
  unitTypes?: string;
}

// Sensible, brand-plausible defaults so every project detail page reads as a
// full page even before bespoke content is written. Clearly generic /
// indicative - refine per project in a later content pass.
const DEFAULT_AMENITIES = [
  "Infinity swimming pool",
  "Prestige One Fitness",
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
    location: "Jumeirah Garden City, Dubai",
    description: "Parisian-inspired living with the iconic FAUCHON lifestyle.",
    registrationUrl: "https://fauchonresidencesbyprestigeone.ae",
    category: "residential",
    brand: "FAUCHON Paris",
    configuration: "G+2P+8+R",
    unitTypes: "Studio, 1-Bedroom,\n2-Bedroom, 3-Bedroom",
  },
  {
    id: "sanctuary-residences",
    image: "/assets/project-featured-images/sliders/sanctuary.webp",
    title: "Sanctuary Residences by Prestige One",
    location: "Meydan Horizon",
    description: "Panoramic lagoon views overlooking Ras Al Khor Wildlife Sanctuary.",
    category: "residential",
    configuration: "B+G+2P+20+R",
    unitTypes: "1-Bedroom, 2-Bedroom, 3-Bedroom",
  },
  {
    id: "sanctuary-hive",
    image: "/assets/images/v2/project-featured-images/sanctuary/sanctuary-hive-2.webp",
    title: "Sanctuary Hive by Prestige One",
    location: "Meydan Horizon",
    description: "Where work breathes easier beside Ras Al Khor Wildlife Sanctuary.",
    category: "commercial",
    type: "Commercial",
    configuration: "G+2P+Coworking Forum+Office Floors",
    unitTypes: "Commercial Offices",
  },
  {
    id: "hilton-residences",
    image: "/assets/project-featured-images/sliders/hilton-1.webp",
    title: "Hilton Residences Dubai Maritime City",
    location: "Dubai Maritime City",
    description: "Waterfront living inspired by the Hilton way of life.",
    registrationUrl: "https://hiltonresidencesdubaimaritimecity.ae",
    category: "residential",
    brand: "Hilton",
    configuration: "G+2P+33+R",
    unitTypes: "1-Bedroom, 2-Bedroom, 3-Bedroom, Penthouses",
  },
  {
    id: "berkeley-square-north",
    image: "/assets/project-featured-images/sliders/berkeley-north.webp",
    title: "Berkeley Square North",
    location: "Jumeirah Village Circle",
    description: "Classic English elegance, reimagined for modern Dubai living.",
    registrationUrl: "https://berkeleysquare.ae",
    category: "residential",
    configuration: "2B+G+5+ROOF",
    unitTypes: "Studio, 1-Bedroom, 2-Bedroom, 3-Bedroom",
  },
  {
    id: "berkeley-square-south",
    slug: "berkeley-square-south",
    image: "/assets/project-featured-images/sliders/berkeley-south.webp",
    title: "Berkeley Square South",
    location: "Jumeirah Village Circle",
    description: "Classic English ideals, reimagined for Dubai's most discerning residents.",
    registrationUrl: "https://berkeleysquare.ae",
    category: "residential",
    configuration: "2B+G+5+ROOF",
    unitTypes: "Studio, 1-Bedroom, 2-Bedroom, 3-Bedroom",
  },
  {
    id: "luxury-canal-residences",
    image: "/assets/project-featured-images/sliders/luxury-canal.webp",
    title: "Luxury Canal Residences by Prestige One",
    location: "Dubai Islands",
    description: "Waterfront living inspired by the rhythm of Dubai Islands.",
    category: "residential",
    configuration: "G+2P+12",
    unitTypes: "1-Bedroom, 2-Bedroom, 3-Bedroom, Penthouse",
  },
  {
    id: "coastal-haven",
    slug: "coastal-haven-by-prestige-one",
    image: "/assets/project-featured-images/sliders/coastal-heaven.webp",
    title: "Coastal Haven by Prestige Harbour",
    location: "Dubai Islands",
    description: "Coastal living with breathtaking Gulf views.",
    category: "residential",
    configuration: "G+2P+12",
    unitTypes: "1-Bedroom, 2-Bedroom, 3-Bedroom, Penthouse",
  },
  {
    id: "the-boulevard",
    image: "/assets/project-featured-images/sliders/boulevard.webp",
    title: "The Boulevard by Prestige One",
    location: "DLRC",
    description: "Bold urban living for modern lifestyles.",
    category: "residential",
    configuration: "G+17",
    unitTypes: "Studio, 1-Bedroom, 2-Bedroom",
  },
  {
    id: "parkway",
    image: "/assets/project-featured-images/sliders/parkway.webp",
    title: "Parkway by Prestige One",
    location: "Meydan Horizon",
    description: "Nature-inspired living designed for balance.",
    registrationUrl: "https://parkway.prestigeone.ae",
    category: "residential",
    configuration: "G+4P+30",
    unitTypes: "1-Bedroom, 2-Bedroom, 3-Bedroom",
  },
  {
    id: "golf-residences",
    image: "/assets/project-featured-images/sliders/golf-1.webp",
    title: "Golf Residences by Prestige One",
    location: "Dubai Sports City",
    description: "Uninterrupted golf course views, every day.",
    registrationUrl: "https://golfresidences.prestigeone.ae",
    category: "residential",
    configuration: "G+3P+19+R",
    unitTypes: "2-Bedroom, 3-Bedroom",
  },
  {
    id: "the-one",
    image: "/assets/project-featured-images/sliders/the-one-1.webp",
    title: "The One by Prestige One",
    location: "Barsha Heights",
    description: "A commercial hub within a striking G+14 development.",
    category: "commercial",
    type: "Commercial",
    configuration: "3B+G+14+R",
    unitTypes: "Commercial Offices, Half Floors, Full Floors",
  },
  {
    id: "seaside",
    image: "/assets/project-featured-images/sliders/seaside.webp",
    title: "Seaside by Prestige One",
    location: "Dubai Islands",
    description: "A peaceful waterfront retreat.",
    registrationUrl: "https://seaside.prestigeone.ae",
    category: "residential",
    configuration: "G+12",
    unitTypes: "1-Bedroom, 2-Bedroom, 3-Bedroom",
  },
  {
    id: "waterway",
    slug: "waterway-by-prestige-one",
    image: "/assets/project-featured-images/sliders/waterway.webp",
    title: "The Waterway by Prestige One",
    location: "Meydan Horizon",
    description: "Serene waterfront living beside the crystal lagoons.",
    registrationUrl: "https://thewaterway.prestigeone.ae",
    category: "residential",
    configuration: "G+20",
    unitTypes: "1-Bedroom, 2-Bedroom",
  },
  {
    id: "vista",
    image: "/assets/project-featured-images/sliders/vista.webp",
    title: "Vista by Prestige One",
    location: "Dubai Sports City",
    description: "Contemporary residences designed around panoramic views.",
    registrationUrl: "https://vista.prestigeone.ae",
    category: "residential",
    configuration: "G+2P+14+R",
    unitTypes: "Studio, 1-Bedroom, 2-Bedroom, 3-Bedroom",
  },
  {
    id: "the-residence",
    image: "/assets/project-featured-images/sliders/residence.webp",
    title: "The Residence by Prestige One",
    location: "Jumeirah Village Circle",
    description: "Boutique living with thoughtful design.",
    registrationUrl: "https://residence.prestigeone.ae",
    category: "residential",
    configuration: "G+5",
    unitTypes: "Studio, 1-Bedroom, 2-Bedroom",
  },
  {
    id: "luxe-villa",
    image: "/assets/project-featured-images/sliders/luxe-villa.webp",
    title: "Luxe Villa by Prestige One",
    location: "Palm Jumeirah",
    description: "Private villa living with timeless elegance.",
    category: "residential",
    type: "Villa",
    configuration: "G+2",
    unitTypes: "Villa",
  },
  {
    id: "seascape-villa",
    image: "/assets/project-featured-images/sliders/seascape-1.webp",
    title: "Seascape Villa",
    location: "Palm Jumeirah",
    description: "A private escape by the sea.",
    category: "residential",
    type: "Villa",
    unitTypes: "Villa",
    hasDetailPage: false,
  },
  {
    id: "palm-villa",
    image: "/assets/project-featured-images/palm-villa/Palm-Jumierah-Villa.webp",
    title: "Palm Villa by Prestige One",
    location: "Palm Jumeirah",
    description: "Exclusive living, designed for privacy.",
    category: "residential",
    type: "Villa",
    configuration: "G+2",
    unitTypes: "Villa",
    hasDetailPage: false,
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
const IMAGE_ONLY_HERO_PROJECT_IDS = new Set(["luxe-villa", "seascape-villa", "palm-villa"]);
const PROJECT_HERO_VIDEO_BY_ID: Record<string, string> = {
  "fauchon-residences": `${PROJECT_VIDEO_ROOT}/v3/Fauchon-v3.mp4`,
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
  "vista-hub": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The-VISTA.mp4`,
  "prestige-seaside": `${PROJECT_VIDEO_ROOT}/compressed-Project-Teaser-Video_The_SEASIDE.mp4`,
  "prestige-square": `${PROJECT_VIDEO_ROOT}/prestigeone_corporate_video.mp4`,
};

const PROJECT_MAP_LOCATION_BY_ID: Partial<Record<string, ProjectMapLocation>> = {
  "vista": {
    mapsUrl: "https://maps.app.goo.gl/9dvns7VZHggGaC676",
    latitude: 25.040118,
    longitude: 55.21662,
  },
  "golf-residences": {
    mapsUrl: "https://maps.app.goo.gl/KfBsXnRTkqYV1aXD9",
    latitude: 25.0371028,
    longitude: 55.2213451,
  },
  "the-boulevard": {
    mapsUrl: "https://maps.app.goo.gl/1ypg7XEn9LVx8HgAA",
    latitude: 25.0926875,
    longitude: 55.3820625,
  },
  "the-residence": {
    mapsUrl: "https://maps.app.goo.gl/sX7cEzwqtuwmumCo9",
    latitude: 25.0523125,
    longitude: 55.2168125,
  },
  "berkeley-square-north": {
    mapsUrl: "https://maps.app.goo.gl/dXvE8i6dBTfh6w7h9",
    latitude: 25.0493582,
    longitude: 55.2093418,
  },
  "berkeley-square-south": {
    mapsUrl: "https://maps.app.goo.gl/dXvE8i6dBTfh6w7h9",
    latitude: 25.0493582,
    longitude: 55.2093418,
  },
  "coastal-haven": {
    mapsUrl: "https://maps.app.goo.gl/gyXRBsUvFLyqzTPQ8",
    latitude: 25.2904375,
    longitude: 55.3080625,
  },
  "the-one": {
    mapsUrl: "https://maps.app.goo.gl/aga8BFn2cBnzQGDG9",
    latitude: 25.0988033,
    longitude: 55.176097,
  },
  "seaside": {
    mapsUrl: "https://maps.app.goo.gl/CeGCBCtP5FHBXPj59",
    latitude: 25.2922382,
    longitude: 55.302234,
  },
  "waterway": {
    mapsUrl: "https://maps.app.goo.gl/s3Dq8RGneYmXgmta9",
    latitude: 25.1816875,
    longitude: 55.3278125,
  },
  "parkway": {
    mapsUrl: "https://maps.app.goo.gl/89TPKPWWdtZzPkC6A",
    latitude: 25.179734,
    longitude: 55.326234,
  },
  "hilton-residences": {
    mapsUrl: "https://maps.app.goo.gl/2AcqxGtgAWqxsN556",
    latitude: 25.2736667,
    longitude: 55.2674167,
  },
  "luxury-canal-residences": {
    mapsUrl: "https://maps.app.goo.gl/Bx4FapGCZF46y3D3A",
    latitude: 25.2906875,
    longitude: 55.3085625,
  },
  "sanctuary-residences": {
    mapsUrl: "https://maps.app.goo.gl/DxWpq81bFAVTB11t7",
    latitude: 25.184032,
    longitude: 55.333024,
  },
  "sanctuary-hive": {
    mapsUrl: "https://maps.app.goo.gl/DxWpq81bFAVTB11t7",
    latitude: 25.184032,
    longitude: 55.333024,
  },
  "fauchon-residences": {
    mapsUrl: "https://maps.app.goo.gl/8p6wuWhXNTLJ7Dgj6",
    latitude: 25.219147,
    longitude: 55.274575,
  },
};

const V2 = "/assets/images/v2/project-featured-images";
const FAUCHON_AMENITY_ROOT = "/assets/images/v3/project-amenities/fauchon/v3";
const LUXE_VILLA_AMENITY_ROOT = "/assets/images/v3/project-amenities/luxe-villa";
const LUXE_VILLA_GALLERY_ROOT = `${LUXE_VILLA_AMENITY_ROOT}/gallery`;
const LUXE_VILLA_FEATURED_IMAGE = `${LUXE_VILLA_AMENITY_ROOT}/luxe-villas.webp`;
const LUXE_VILLA_OVERVIEW_IMAGE = `${LUXE_VILLA_GALLERY_ROOT}/The-Luxe-Villas-amenity-video-New-Recovered.jpg`;
const LUXE_VILLA_GALLERY_FILES = [
  "The-Luxe-Villas-1.jpg",
  "The-Luxe-Villas-Entrance.jpg",
  "The-Luxe-Villas-Entrance-2.jpg",
  "The-Luxe-Villas-Interior-Firstfloor.jpg",
  "The-Luxe-Villas-Interior-Firstfloor-2.jpg",
  "The-Luxe-Villas-Majlis.jpg",
];
const LUXE_VILLA_AMENITY_IMAGES = galleryAt(LUXE_VILLA_GALLERY_ROOT, LUXE_VILLA_GALLERY_FILES);
const BOULEVARD_AMENITY_ROOT = "/assets/images/v3/project-amenities/boulevard";
const BOULEVARD_GALLERY_ROOT = `${BOULEVARD_AMENITY_ROOT}/gallery`;
const BOULEVARD_OVERVIEW_IMAGE = `${BOULEVARD_GALLERY_ROOT}/the-boulevard-by-prestige-one.webp`;
const BOULEVARD_GALLERY_FILES = [
  "the-boulevard-by-prestige-one.webp",
  "NIGHT 4c.webp",
  "NIGHT 12b.webp",
  "1_Front View.jpg",
  "12.webp",
  "5.jpg",
  "rooftop.jpg",
  "podium-amenities.webp",
  "Skyline Infinity Pool.webp",
  "Infinity Sunken Beds.webp",
  "Poolside Lounge.webp",
  "Relaxation Pond.webp",
  "Tranquility Corner-1.webp",
  "Cozy Lounger Retreat.webp",
  "Outdoor Theatre.webp",
  "Library Lounge.webp",
  "1_Gym.jpg",
  "Gym-1.webp",
  "Little Explorers Zone.webp",
  "Gaming Zone.webp",
  "Creativity Studio.webp",
  "Digital Library.webp",
  "Living-room.webp",
  "bedroom.webp",
];
const GOLF_AMENITY_GALLERY_ROOT = "/assets/images/v3/project-amenities/golf-residences/gallery";
const GOLF_GALLERY_FILES = [
  "golf-featured-image.webp",
  "Golf Place- Exterior Facade 2 Day.webp",
  "Golf Place- Exterior.webp",
  "Golf Place- Amenities- Dropoff.webp",
  "Amenities- Podium.webp",
  "Skyline-Infinity-Pool.webp",
  "Private Pool.webp",
  "Outdoor Cinema.webp",
  "Club-Lounge.webp",
  "Fitness.webp",
  "Kids-Play-Area.webp",
  "Golf Place- 3BHK- living 1.webp",
  "Golf Place- 3BHK- living 4.webp",
  "Golf Place- 1BHK- master bedroom 02.webp",
  "Golf Place- 2BHK- Bathroom Typical.webp",
  "Golf Place- Amenities- running track.webp",
];
const HILTON_AMENITY_GALLERY_ROOT = "/assets/images/v3/project-amenities/hilton/gallery";
const HILTON_AMENITY_VIDEO_ROOT = "/assets/images/v3/project-amenities/hilton/videos";
const HILTON_AMENITY_VIDEO_FILES = [
  "Entertainment and Flexible Spaces.mp4",
  "Fitness and Wellness.mp4",
  "Lifestyle and Business Amenities.mp4",
  "Outdoor Active and Recreation Zones.mp4",
  "Outdoor Relaxation and Garden Amenities.mp4",
  "Water Based Amenities.mp4",
];
const HILTON_AMENITY_VIDEO_TITLES = HILTON_AMENITY_VIDEO_FILES.map((file) => {
  const title = file.replace(/\.mp4$/i, "");
  return title === "Fitness and Wellness" ? "Gym, Yoga and Relaxation" : title;
});
const BERKELEY_NORTH_FEATURED_IMAGE = "/assets/project-featured-images/berkeley/Berkeley-Square-North.webp";
const BERKELEY_NORTH_AMENITY_ROOT = "/assets/images/v3/project-amenities/berkeley-square-north";
const BERKELEY_NORTH_GALLERY_ROOT = `${BERKELEY_NORTH_AMENITY_ROOT}/gallery`;
const BERKELEY_SOUTH_HERO_IMAGE = "/assets/project-featured-images/sliders/berkeley-south.webp";
const BERKELEY_SOUTH_OVERVIEW_IMAGE = "/assets/project-featured-images/berkeley/Berkeley-Square-South.webp";
const BERKELEY_NORTH_GALLERY_FILES = [
  "Berkeley Square Bird's Eye Night View.webp",
  "Berkeley Square Courtyard Pool Night.webp",
  "Berkeley Square Outdoor Cinema Night View.webp",
  "Berkeley Square Pool Retreat Night.webp",
  "Berkeley Square Poolside Seating Night.webp",
  "Berkeley Square Rooftop.webp",
  "Berkeley Square Padel Court Night View.webp",
  "Berkeley Square- Clubhouse 1.webp",
  "Berkeley Square- Lobby 1.webp",
  "Berkeley Square- Lobby 3.webp",
  "Berkeley Square- Podcast Room- Sitting Setup-1.webp",
  "Berkeley Square- Podcast Room.webp",
  "Gym 4.webp",
  "Kids play area 1.webp",
  "BS_DR_07.webp",
  "BS_DR_10.webp",
  "Berkeley Square- STUDIO 03.webp",
  "Berkeley Square- 1BHK- BEDROOM.webp",
  "Berkeley Square- 2BR- Kitchen.webp",
  "Berkeley Square- 3BR- Bathroom.webp",
];
const BERKELEY_NORTH_AMENITIES = [
  "Podcast Room",
  "Outdoor Cinema",
  "Prestige One Clubhouse",
  "Grand Atrium",
  "Courtyard Pool",
  "Mini Golf",
  "Floating Cabanas",
  "Prestige Fitness Centre",
  "Pool Retreat",
  "Zen Garden",
  "Covered Football Court",
  "Multi-purpose Court",
];
const BERKELEY_SQUARE_AMENITY_IMAGES = [
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square- Podcast Room.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square Outdoor Cinema Night View.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square- Clubhouse 1.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square- Lobby 1.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square Courtyard Pool Night.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square Padel Court Night View.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square Poolside Seating Night.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Gym 4.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square Pool Retreat Night.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/BS_DR_10.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Covered Football Court.webp`,
  `${BERKELEY_NORTH_GALLERY_ROOT}/Berkeley Square Padel Court Night View.webp`,
];
const LUXURY_CANAL_AMENITY_ROOT = "/assets/images/v3/project-amenities/luxury-canal-residences";
const LUXURY_CANAL_GALLERY_ROOT = `${LUXURY_CANAL_AMENITY_ROOT}/gallery`;
const LUXURY_CANAL_OVERVIEW_IMAGE = `${LUXURY_CANAL_GALLERY_ROOT}/luxury-canal-residences-main.webp`;
const LUXURY_CANAL_FACADE_IMAGE = `${LUXURY_CANAL_GALLERY_ROOT}/luxury-canal-residences-Facade.webp`;
const LUXURY_CANAL_GALLERY_FILES = [
  "luxury-canal-residences-Facade.webp",
  "luxury-canal-residences-main.webp",
  "07 Facade.webp",
  "11 Facade.webp",
  "01 Main Entrance.webp",
  "infinity-pool.webp",
  "Sun Deck.webp",
  "Jacuzzi.webp",
  "prestige-fitness.webp",
  "Prestige Wellness Area.webp",
  "Badminton Court.webp",
  "06 Lounge.webp",
  "01 Game Room View.webp",
  "02 Game Room View.webp",
  "04 Kids Play Area.webp",
  "02 2-Bedroom.webp",
  "04 3-Bedroom - living dining.webp",
  "05 3-Bedroom penthouse - living dining.webp",
  "Pent Kitchen.webp",
  "Bathroom.webp",
];
const LUXURY_CANAL_AMENITIES = [
  "Infinity Pool",
  "Prestige Fitness Center",
  "Children's Adventure Zone",
  "Game Room",
  "Lounge",
  "Badminton Court",
  "Sun Deck",
  "Prestige Wellness Area",
];
const LUXURY_CANAL_AMENITY_IMAGES = [
  `${LUXURY_CANAL_GALLERY_ROOT}/infinity-pool.webp`,
  `${LUXURY_CANAL_GALLERY_ROOT}/prestige-fitness.webp`,
  `${LUXURY_CANAL_GALLERY_ROOT}/04 Kids Play Area.webp`,
  `${LUXURY_CANAL_GALLERY_ROOT}/01 Game Room View.webp`,
  `${LUXURY_CANAL_GALLERY_ROOT}/06 Lounge.webp`,
  `${LUXURY_CANAL_GALLERY_ROOT}/Badminton Court.webp`,
  `${LUXURY_CANAL_GALLERY_ROOT}/Sun Deck.webp`,
  `${LUXURY_CANAL_GALLERY_ROOT}/Prestige Wellness Area.webp`,
];
const COASTAL_HAVEN_GALLERY_ROOT = "/assets/images/v3/project-amenities/coastal-haven/gallery";
const COASTAL_HAVEN_HERO_IMAGE = "/assets/project-featured-images/coastal-haven/Coastal-Haven.webp";
const COASTAL_HAVEN_OVERVIEW_IMAGE = `${COASTAL_HAVEN_GALLERY_ROOT}/02 Facade(1).webp`;
const COASTAL_HAVEN_GALLERY_FILES = [
  "02 Facade(1).webp",
  "03 Main Entrance.webp",
  "01 Game Room View.webp",
  "02 Game Room View.webp",
  "04 Kids Play Area.webp",
  "prestige-fitness.webp",
  "Prestige Wellness Area.webp",
  "Badminton Court.webp",
  "Sun Deck.webp",
  "02 2-Bedroom(1).webp",
  "Pent Kitchen.webp",
  "Bathroom.webp",
];
const COASTAL_HAVEN_AMENITIES = [
  "Game Room",
  "Little Explorer Zone",
  "Prestige Fitness Center",
  "Prestige Wellness Area",
  "Badminton Court",
  "Sun Deck",
];
const COASTAL_HAVEN_AMENITY_IMAGES = [
  `${COASTAL_HAVEN_GALLERY_ROOT}/02 Game Room View.webp`,
  `${COASTAL_HAVEN_GALLERY_ROOT}/04 Kids Play Area.webp`,
  `${COASTAL_HAVEN_GALLERY_ROOT}/prestige-fitness.webp`,
  `${COASTAL_HAVEN_GALLERY_ROOT}/Prestige Wellness Area.webp`,
  `${COASTAL_HAVEN_GALLERY_ROOT}/Badminton Court.webp`,
  `${COASTAL_HAVEN_GALLERY_ROOT}/Sun Deck.webp`,
];
const COASTAL_HAVEN_ALL_AMENITIES = [
  "Prestige Owner's Lounge",
  "Prestige Clubhouse",
  "Badminton Court",
  "Tennis Court",
  "Basketball Court",
  "Prestige Spa",
  "Prestige Fitness Center",
  "Prestige Wellness Area",
  "Game Room",
  "Library Lounge",
  "Little Explorer Zone",
  "Infinity Pool",
  "Sun Deck",
  "Jacuzzi",
  "Outdoor Gym",
  "BBQ Terrace",
  "Outdoor Cinema",
  "Splash Zone",
  "Adventure Zone",
  "Children Adventure Park",
  "Miniature Golf Course",
  "Grand Entrance Lobby",
  "Water Garden",
  "Lobby Lounge",
  "Promenade",
];
const PARKWAY_GALLERY_ROOT = "/assets/images/v3/project-amenities/parkway/gallery";
const PARKWAY_HERO_IMAGE = "/assets/project-featured-images/parkway/parkway.webp";
const PARKWAY_OVERVIEW_IMAGE = `${PARKWAY_GALLERY_ROOT}/parkway-farcade-full.webp`;
const PARKWAY_GALLERY_FILES = [
  "parkway-farcade-full.webp",
  "Front Exterior - 3(1).webp",
  "Front Exterior - 4.webp",
  "V10_Prestige_Exteriors_Landscape.webp",
  "Lobby - 3.webp",
  "Adult Pool.webp",
  "Family Pool.webp",
  "Gym-1.webp",
  "Indoor Cinema.webp",
  "outdoor-Cinema.webp",
  "Kids' Play Area.webp",
  "Yoga Area.webp",
  "Living Area.webp",
  "Kitchen.webp",
];
const PARKWAY_AMENITIES = [
  "Family Lagoon",
  "Skyline Infinity Pool",
  "Prestige Fitness Center",
  "Indoor Theater",
  "Outdoor Cinema",
  "Little Explorers' Zone",
  "Prestige Yoga",
  "Social Lounge",
  "Grand Entrance Lobby",
];
const PARKWAY_AMENITY_IMAGES = [
  `${PARKWAY_GALLERY_ROOT}/Adult Pool.webp`,
  `${PARKWAY_GALLERY_ROOT}/Family Pool.webp`,
  `${PARKWAY_GALLERY_ROOT}/Gym-1.webp`,
  `${PARKWAY_GALLERY_ROOT}/Indoor Cinema.webp`,
  `${PARKWAY_GALLERY_ROOT}/outdoor-Cinema.webp`,
  `${PARKWAY_GALLERY_ROOT}/Kids' Play Area.webp`,
  `${PARKWAY_GALLERY_ROOT}/Yoga Area.webp`,
  `${PARKWAY_GALLERY_ROOT}/V10_Prestige_Exteriors_Landscape.webp`,
  `${PARKWAY_GALLERY_ROOT}/Lobby - 3.webp`,
];
const PARKWAY_ALL_AMENITIES = [
  "Drop-Off Service",
  "Pick-Up Service",
  "Prestige Owners' Lounge",
  "Concierge Assistance",
  "24/7 Security",
  "Grand Entrance Lobby",
  "Splash Adventure Zone",
  "Aqua Play Park",
  "Children's Adventure Park",
  "Tennis Court",
  "Volleyball Court",
  "Badminton Court",
  "Basketball Court",
  "Miniature Golf Course",
  "Family Lagoon",
  "Pool Bar",
  "Outdoor Theater",
  "Barbecue Garden",
  "The Clubhouse",
  "Cigar Lounge",
  "Library Lounge",
  "Digital Library",
  "Indoor Theater",
  "Arcade",
  "Pinball",
  "VR",
  "Little Explorers' Zone",
  "Amazonica",
  "Urban Farm",
  "Hanging Garden",
  "Plant Nursery",
  "Culinary Kitchen",
  "Observation Deck",
  "Telescope Viewing Deck",
  "Social Lounge",
  "Zen Garden",
  "Skyline Infinity Pool",
  "Prestige Fitness Center",
  "Virtual Trainer",
  "Sunken Loungers",
  "Prestige Wellness Center",
  "Prestige Yoga",
  "Prestige Spa & Sauna",
];
const WATERWAY_GALLERY_ROOT = "/assets/images/v3/project-amenities/waterway/gallery";
const WATERWAY_FEATURED_IMAGE = `${WATERWAY_GALLERY_ROOT}/Waterway-pic.webp`;
const WATERWAY_GALLERY_FILES = [
  "Waterway-pic.webp",
  "16 Flr_The Waterway_03.webp",
  "Reception 1.webp",
  "Lobby-2.webp",
  "Lift Lobby.webp",
  "Private Pool.webp",
  "Sunset-area.webp",
  "Gym 1.webp",
  "Rock Climbing Wall.webp",
  "Changing Room.webp",
  "Living & Dining View 2.webp",
  "Living Room.webp",
  "Living Room 2.webp",
  "Dining Room.webp",
  "Master Bedroom.webp",
];
const WATERWAY_AMENITIES = [
  "Swimming Pool",
  "Prestige One Fitness",
  "Rock Climbing Wall",
  "Men's and Women's Changing Rooms",
  "Rooftop BBQ and Lounge Area",
  "Rooftop Sunset Area",
  "Outdoor Lounges with Water Features",
  "Grand Entrance Lobby with Water Features",
];
const WATERWAY_AMENITY_IMAGES = [
  `${WATERWAY_GALLERY_ROOT}/Private Pool Area.webp`,
  `${WATERWAY_GALLERY_ROOT}/Gym 1.webp`,
  `${WATERWAY_GALLERY_ROOT}/Rock Climbing Wall.webp`,
  `${WATERWAY_GALLERY_ROOT}/Changing Room.webp`,
  `${WATERWAY_GALLERY_ROOT}/Rooftop BBQ and Lounge Area.webp`,
  `${WATERWAY_GALLERY_ROOT}/Sunset-area.webp`,
  `${WATERWAY_GALLERY_ROOT}/Private Pool.webp`,
  `${WATERWAY_GALLERY_ROOT}/Lobby-2.webp`,
];
const THE_ONE_GALLERY_ROOT = "/assets/images/v3/project-amenities/the-one/gallery";
const THE_ONE_OVERVIEW_IMAGE = `${THE_ONE_GALLERY_ROOT}/the-one-outside.webp`;
const THE_ONE_GALLERY_FILES = [
  "the-one-farcade-full.webp",
  "One-outside.webp",
  "the-one-outside.webp",
  "Prestige Offices Tower_Reception Lobby2.webp",
  "Prestige Offices Tower_Reception Cafe.webp",
  "Prestige Offices Tower_9th flr Cafe Area.webp",
  "Prestige Offices Tower_9th flr Left Wing.webp",
  "Prestige Offices Tower_9th flr Reception opt 1.webp",
  "Prestige Offices Tower_9th Flr SPA view1.webp",
  "Prestige Offices Tower_GYM View 3.webp",
  "Prestige Offices Tower_Corridor View 1.webp",
];
const THE_ONE_AMENITIES = [
  "Prestige Cafe",
  "Grand Reception Lounge",
  "Sky Lounge",
  "Virtual Golf Studio",
  "Botanical Garden",
  "Prestige Wellness Centre",
  "Prestige Fitness Centre",
  "Prestige Business Lounge",
];
const THE_ONE_ALL_AMENITIES = [
  ...THE_ONE_AMENITIES,
  "24 Hour Security",
  "Valet Hospitality",
  "Concierge Assistance",
  "Skyline Terrace",
  "Meeting Rooms",
  "Conference Room",
  "Library Lounge",
  "Digital Library",
  "Cigar Lounge",
  "Observation Deck",
  "Virtual Trainer",
  "State-of-the-Art Workout Equipment",
  "Men's Changing Suites",
  "Women's Changing Suites",
  "Lockers",
  "Rainforest Shower",
  "Pool Pod",
  "Ice Bath",
  "Spa Pool",
  "Jacuzzi",
  "Telescope View Deck",
];
const THE_ONE_AMENITY_IMAGES = [
  `${THE_ONE_GALLERY_ROOT}/Prestige Offices Tower_Reception Cafe.webp`,
  `${THE_ONE_GALLERY_ROOT}/Prestige Offices Tower_Reception Lobby2.webp`,
  `${THE_ONE_GALLERY_ROOT}/Prestige Offices Tower_9th flr Left Wing.webp`,
  `${THE_ONE_GALLERY_ROOT}/Prestige Offices Tower_9th flr Cafe Area.webp`,
  `${THE_ONE_GALLERY_ROOT}/the-one-outside.webp`,
  `${THE_ONE_GALLERY_ROOT}/Prestige Offices Tower_9th Flr SPA view1.webp`,
  `${THE_ONE_GALLERY_ROOT}/Prestige Offices Tower_GYM View 3.webp`,
  `${THE_ONE_GALLERY_ROOT}/Prestige Offices Tower_9th flr Reception opt 1.webp`,
];
const VISTA_GALLERY_ROOT = "/assets/images/v3/project-amenities/vista/gallery";
const VISTA_OVERVIEW_IMAGE = `${VISTA_GALLERY_ROOT}/vista-main.webp`;
const VISTA_GALLERY_FILES = [
  "Exterior.webp",
  "Entrance_view.webp",
  "entrance.webp",
  "lobby.webp",
  "reception.webp",
  "Observation Deck 1.webp",
  "infinity-pool.webp",
  "gym.webp",
  "open-cinema.webp",
  "tennis-couart.webp",
  "Changing Room.webp",
  "Sauna.webp",
  "kids-play-area.webp",
  "outside-play-area.webp",
  "living-room.webp",
  "livingroom-2.webp",
  "Bedroom.webp",
  "bedroom1.webp",
  "Bathroom.webp",
];
const VISTA_AMENITIES = [
  "Grand Hotel-like Entrance & Lobby",
  "Observation Deck / Lounge",
  "Rooftop Infinity Pool & Kids Pool",
  "Rooftop Gym",
  "Outdoor Cinema with Terrace Seating",
  "Multi-Sport & Basketball Court",
  "Men and Women's Spa",
  "Indoor & Outdoor Kids Play Area",
];
const VISTA_ALL_AMENITIES = [
  ...VISTA_AMENITIES,
  "Padel Court",
  "Mini Putting Green",
  "BBQ, Sunken Seating & Pergolas",
  "Open Lawn",
  "Landscaped Jogging with Benches & Callisthenics Equipment",
  "Extensive Hardscape & Landscaping",
  "Electric Vehicle Charging / Parking",
  "Wired for Smart Home",
];
const VISTA_AMENITY_IMAGES = [
  `${VISTA_GALLERY_ROOT}/lobby.webp`,
  `${VISTA_GALLERY_ROOT}/Observation Deck 1.webp`,
  `${VISTA_GALLERY_ROOT}/infinity-pool.webp`,
  `${VISTA_GALLERY_ROOT}/gym.webp`,
  `${VISTA_GALLERY_ROOT}/open-cinema.webp`,
  `${VISTA_GALLERY_ROOT}/tennis-couart.webp`,
  `${VISTA_GALLERY_ROOT}/Sauna.webp`,
  `${VISTA_GALLERY_ROOT}/kids-play-area.webp`,
];
const RESIDENCE_GALLERY_ROOT = "/assets/images/v3/project-amenities/residence/gallery";
const RESIDENCE_PLACEHOLDER_IMAGE = `${RESIDENCE_GALLERY_ROOT}/THE-RESIDENCE.webp`;
const RESIDENCE_GALLERY_FILES = [
  "THE-RESIDENCE.webp",
  "residence-featured-live-image.webp",
  "THE RESIDENCE - Ext Day View.webp",
  "THE RESIDENCE - Ext Rear 1.webp",
  "THE RESIDENCE - Ext Rear 3.webp",
  "THE RESIDENCE - Ext Rood Night.webp",
  "Pool-area.webp",
  "THE RESIDENCE - Gym.webp",
  "THE RESIDENCE - Lobby.webp",
  "THE RESIDENCE - Lobby 2.webp",
  "THE RESIDENCE - Lift.webp",
  "THE RESIDENCE - Kitchen and Living.webp",
  "THE RESIDENCE - Kitchen.webp",
  "THE RESIDENCE - Studio.webp",
  "Bedroom.webp",
  "THE RESIDENCE - Powder Room.webp",
];
const RESIDENCE_AMENITIES = [
  "Fitness Centre",
  "Swimming Pool and Hot Tub",
  "Roof Deck and Outdoor Cinema",
  "Putting Green",
  "BBQ, Sunken Seating & Deck Areas",
  "Outdoor Kids Play Area",
  "Cabanas & Sunbeds",
  "Open Terrain Rolling Lawn",
];
const RESIDENCE_ALL_AMENITIES = [
  ...RESIDENCE_AMENITIES,
  "Floor Fountains",
  "Electric Vehicle Charging / Parking",
  "Bicycle Parking",
  "Male / Female Locker Rooms",
];
const RESIDENCE_AMENITY_IMAGES = [
  `${RESIDENCE_GALLERY_ROOT}/THE RESIDENCE - Gym.webp`,
  `${RESIDENCE_GALLERY_ROOT}/Pool-area.webp`,
  `${RESIDENCE_GALLERY_ROOT}/THE RESIDENCE - Ext Rood Night.webp`,
  `${RESIDENCE_GALLERY_ROOT}/THE RESIDENCE - Ext Rear 3.webp`,
  `${RESIDENCE_GALLERY_ROOT}/THE RESIDENCE - Ext Rear 1.webp`,
  `${RESIDENCE_GALLERY_ROOT}/Outdoor Kids Play Area.webp`,
  `${RESIDENCE_GALLERY_ROOT}/Cabanas & Sunbeds.webp`,
  `${RESIDENCE_GALLERY_ROOT}/Open Terrain Rolling Lawn.webp`,
];
const SEASIDE_GALLERY_ROOT = "/assets/images/v3/project-amenities/seaside/gallery";
const SEASIDE_OVERVIEW_IMAGE = `${SEASIDE_GALLERY_ROOT}/Night - Front Side.webp`;
const SEASIDE_GALLERY_FILES = [
  "Night - Front Side.webp",
  "Night - Rear Side.webp",
  "Seaside_Building Night.webp",
  "Exterior 1.webp",
  "Exterior 2.webp",
  "Swimming Pool 2.webp",
  "swimming pool.webp",
  "Swimming Pool-2.webp",
  "Gym-1.webp",
  "Kids Play Area.webp",
  "Mini Putt Golf.webp",
  "Spapool.webp",
  "Changing Room 2.webp",
  "Lobby_.webp",
  "Retail Shop.webp",
  "Living Room.webp",
  "Living Area and Kitchen-2.webp",
  "Bedroom 1.webp",
  "Bathroom 1.webp",
  "Master Bathroom.webp",
];
const SANCTUARY_AMENITY_ROOT = "/assets/images/v3/project-amenities/Sanctuary";
const SANCTUARY_GALLERY_ROOT = `${SANCTUARY_AMENITY_ROOT}/gallery`;
const SANCTUARY_GALLERY_FILES = [
  "Sanctuary Facade Angle 4.webp",
  "1.-Residential-Lobby.webp",
  "8.-Residential-Amenities---Gym---Level-9---Option-2.webp",
  "Residential-Amenities---Spa---Roof-Level.webp",
  "9th-floor-water-feature.webp",
  "10.-Residential-Amenities---Cinema---Level-9.webp",
  "11.-Residential-Amenities---Multipurpose-Room---Roof-Level.webp",
  "15.-1-&-2-Bedroom-Unit---Master-Bedroom.webp",
  "18.--3-Bedroom-Unit---Toilet-1.webp",
  "Kids-Play-Area.webp",
  "Rooftop-FLoor-Barbeque.webp",
  "RoofTop-Floor-Sitting-Area.webp",
  "Rooftop-Pool.webp",
  "17.-3-Bedroom-Unit---Master-Bedroom.webp",
  "14.-2-Bedroom-Unit---Living-Room---Option-1.webp",
  "14.-2-Bedroom-Unit---Living-Room-.jpg.webp",
];
const SANCTUARY_HIVE_AMENITY_ROOT = "/assets/images/v3/project-amenities/Sanctuary-Hive";
const SANCTUARY_HIVE_GALLERY_ROOT = `${SANCTUARY_HIVE_AMENITY_ROOT}/gallery`;
const SANCTUARY_HIVE_GALLERY = [
  `${SANCTUARY_HIVE_GALLERY_ROOT}/sanctuary-hive-exterior-evening.webp`,
  `${SANCTUARY_GALLERY_ROOT}/1.-Residential-Lobby.webp`,
  `${SANCTUARY_GALLERY_ROOT}/8.-Residential-Amenities---Gym---Level-9---Option-2.webp`,
  `${SANCTUARY_GALLERY_ROOT}/Residential-Amenities---Spa---Roof-Level.webp`,
  `${SANCTUARY_GALLERY_ROOT}/10.-Residential-Amenities---Cinema---Level-9.webp`,
  `${SANCTUARY_GALLERY_ROOT}/Kids-Play-Area.webp`,
  `${SANCTUARY_GALLERY_ROOT}/Rooftop-FLoor-Barbeque.webp`,
  `${SANCTUARY_GALLERY_ROOT}/RoofTop-Floor-Sitting-Area.webp`,
  `${SANCTUARY_GALLERY_ROOT}/Rooftop-Pool.webp`,
  `${SANCTUARY_GALLERY_ROOT}/17.-3-Bedroom-Unit---Master-Bedroom.webp`,
  `${SANCTUARY_GALLERY_ROOT}/14.-2-Bedroom-Unit---Living-Room---Option-1.webp`,
  `${SANCTUARY_GALLERY_ROOT}/14.-2-Bedroom-Unit---Living-Room-.jpg.webp`,
];

// Per-project real content. Keyed by slug. Only flagships are fully enriched;
// everything else falls back to derived defaults below.
const enrichment: Record<string, ProjectEnrichment> = {
  "seascape-villa": {
    showAmenitiesSection: false,
  },
  "berkeley-square-north": {
    status: "Now Selling",
    introImage: BERKELEY_NORTH_FEATURED_IMAGE,
    closingTitle: "Discover the signature of grace",
    closingImage: BERKELEY_NORTH_FEATURED_IMAGE,
    overview: [
      "Berkeley Square North brings classic English composure to Jumeirah Village Circle through a carved facade, measured proportions and a timeless architectural presence.",
      "Its refined character is reimagined for contemporary Dubai living, balancing dignified design with thoughtfully planned homes and an extensive lifestyle programme.",
      "The collection comprises 241 residences, from studios to three-bedroom homes, supported by amenities across the ground, first, second and rooftop levels.",
    ],
    highlights: [
      "Live amid classic English elegance reimagined for modern Dubai",
      "Unwind across courtyard, pool and rooftop retreats",
      "Connect in thoughtfully designed clubhouse and social spaces",
      "Balance every day with fitness, recreation and landscaped gardens",
    ],
    specs: [
      { label: "Location", value: "Jumeirah Village Circle" },
      { label: "Brand", value: "Prestige One" },
      { label: "Configuration", value: "2B+G+5+ROOF" },
      { label: "Unit Types", value: "Studio, 1-Bedroom, 2-Bedroom, 3-Bedroom" },
    ],
    amenities: BERKELEY_NORTH_AMENITIES,
    faqAmenities: BERKELEY_NORTH_AMENITIES,
    amenityImages: BERKELEY_SQUARE_AMENITY_IMAGES,
    paymentPlan: [
      { label: "Pre-handover", value: "55%" },
      { label: "Upon handover", value: "10%" },
      { label: "Post-handover", value: "35%" },
    ],
    nearby: [
      { name: "Mall of the Emirates", time: "15 min" },
      { name: "Palm Jumeirah", time: "16 min" },
      { name: "Dubai Marina", time: "18 min" },
      { name: "Downtown Dubai", time: "18 min" },
      { name: "Burj Khalifa and Dubai Mall", time: "25 min" },
      { name: "Dubai International Airport", time: "30 min" },
    ],
    hospitals: [
      "Karama Medical Centre",
      "Emirates Hospital Day Surgery, Motor City",
      "Mediclinic Parkview Hospital",
      "King's College Hospital London - Dubai Hills",
    ],
    faqItems: [
      {
        q: "What is Berkeley Square North?",
        a: "Berkeley Square North is a classic English-inspired residential development by Prestige One in Jumeirah Village Circle, with 241 homes and amenities distributed across four levels.",
      },
      {
        q: "What residence types are available?",
        a: "The development comprises 103 studios, 125 one-bedroom residences, seven two-bedroom residences and six three-bedroom residences. The building configuration is 2B+G+5+ROOF, with anticipated completion in Q1 2028.",
      },
      {
        q: "What amenities are included?",
        a: "Selected amenities include a podcast room, outdoor cinema, Prestige One Clubhouse, grand atrium, courtyard pool, mini golf, floating cabanas, Prestige Fitness Centre, pool retreat, garden BBQ pavilion, covered football court and multi-purpose court.",
      },
      {
        q: "How well connected is Berkeley Square North?",
        a: "Mall of the Emirates is approximately 15 minutes away, Palm Jumeirah 16 minutes, Dubai Marina and Downtown Dubai 18 minutes, Burj Khalifa and Dubai Mall 25 minutes, and Dubai International Airport 30 minutes away.",
      },
      {
        q: "Which hospitals are near Berkeley Square North?",
        a: "Nearby healthcare options include Karama Medical Centre, Emirates Hospital Day Surgery in Motor City, Mediclinic Parkview Hospital and King's College Hospital London in Dubai Hills.",
      },
      {
        q: "What is the payment plan?",
        a: "The post-handover payment plan comprises 55% before handover, 10% upon handover and 35% after handover.",
      },
    ],
  },
  "berkeley-square-south": {
    status: "Now Selling",
    hero: BERKELEY_SOUTH_HERO_IMAGE,
    introImage: BERKELEY_SOUTH_OVERVIEW_IMAGE,
    closingTitle: "Discover the signature of grace",
    closingImage: BERKELEY_SOUTH_OVERVIEW_IMAGE,
    overview: [
      "Berkeley Square South is quintessentially English - composed, crafted and undeniably refined.",
      "A quiet strength flows through its carved facade and measured proportions, creating a presence that feels both dignified and timeless.",
      "Classic English ideals are reimagined for contemporary Dubai living across 241 thoughtfully planned residences, from studios to three-bedroom homes.",
    ],
    highlights: [
      "Experience timeless English character in a contemporary setting",
      "Relax beside the courtyard pool and floating cabanas",
      "Gather at the clubhouse, outdoor cinema and garden BBQ pavilion",
      "Embrace wellbeing through fitness, sport and green terraces",
    ],
    specs: [
      { label: "Location", value: "Jumeirah Village Circle" },
      { label: "Brand", value: "Prestige One" },
      { label: "Configuration", value: "2B+G+5+ROOF" },
      { label: "Unit Types", value: "Studio, 1-Bedroom, 2-Bedroom, 3-Bedroom" },
    ],
    amenities: BERKELEY_NORTH_AMENITIES,
    faqAmenities: BERKELEY_NORTH_AMENITIES,
    amenityImages: BERKELEY_SQUARE_AMENITY_IMAGES,
    paymentPlan: [
      { label: "Pre-handover", value: "55%" },
      { label: "Upon handover", value: "10%" },
      { label: "Post-handover", value: "35%" },
    ],
    nearby: [
      { name: "Mall of the Emirates", time: "15 min" },
      { name: "Palm Jumeirah", time: "16 min" },
      { name: "Dubai Marina", time: "18 min" },
      { name: "Downtown Dubai", time: "18 min" },
      { name: "Burj Khalifa and Dubai Mall", time: "25 min" },
      { name: "Dubai International Airport", time: "30 min" },
    ],
    hospitals: [
      "Karama Medical Centre",
      "Emirates Hospital Day Surgery, Motor City",
      "Mediclinic Parkview Hospital",
      "King's College Hospital London - Dubai Hills",
    ],
    faqItems: [
      {
        q: "What is Berkeley Square South?",
        a: "Berkeley Square South is a classic English-inspired residential development by Prestige One in Jumeirah Village Circle, with 241 homes and amenities distributed across four levels.",
      },
      {
        q: "What residence types are available?",
        a: "The development comprises 103 studios, 125 one-bedroom residences, seven two-bedroom residences and six three-bedroom residences. The building configuration is 2B+G+5+ROOF, with anticipated completion in Q1 2028.",
      },
      {
        q: "What amenities are included?",
        a: "Selected amenities include a podcast room, outdoor cinema, Prestige One Clubhouse, grand atrium, courtyard pool, mini golf, floating cabanas, Prestige Fitness Centre, pool retreat, garden BBQ pavilion, covered football court and multi-purpose court.",
      },
      {
        q: "How well connected is Berkeley Square South?",
        a: "Mall of the Emirates is approximately 15 minutes away, Palm Jumeirah 16 minutes, Dubai Marina and Downtown Dubai 18 minutes, Burj Khalifa and Dubai Mall 25 minutes, and Dubai International Airport 30 minutes away.",
      },
      {
        q: "What is the payment plan?",
        a: "The post-handover payment plan comprises 55% before handover, 10% upon handover and 35% after handover.",
      },
    ],
  },
  "luxury-canal-residences-by-prestige-one": {
    status: "Now Selling",
    hero: LUXURY_CANAL_FACADE_IMAGE,
    introImage: LUXURY_CANAL_OVERVIEW_IMAGE,
    closingTitle: "Let life flow by the water",
    closingImage: LUXURY_CANAL_FACADE_IMAGE,
    overview: [
      "An oasis along the harbour of Dubai Islands, Luxury Canal Residences by Prestige One embodies peaceful waterfront living.",
      "The elegant residences are designed for those who value calmness and sophistication, with architecture and interiors connected to the soothing essence of water.",
      "A freehold collection of 73 one-, two- and three-bedroom residences and penthouses is complemented by wellness, leisure, family and social amenities across the ground and podium levels.",
    ],
    highlights: [
      "Begin each day in a peaceful harbour-side setting on Dubai Islands",
      "Embrace a waterfront lifestyle shaped by calm, light and open horizons",
      "Unwind through resort-style wellness, leisure and family amenities",
      "Stay connected to Downtown Dubai and Dubai International Airport",
      "Move effortlessly between island serenity and the energy of the city",
    ],
    specs: [
      { label: "Location", value: "Dubai Islands" },
      { label: "Brand", value: "Prestige One" },
      { label: "Configuration", value: "G+2P+12 Floors" },
      { label: "Unit Types", value: "1-Bedroom, 2-Bedroom, 3-Bedroom, Penthouse" },
    ],
    amenities: LUXURY_CANAL_AMENITIES,
    faqAmenities: LUXURY_CANAL_AMENITIES,
    amenityImages: LUXURY_CANAL_AMENITY_IMAGES,
    paymentPlan: [
      { label: "Pre-handover", value: "65%" },
      { label: "Upon handover", value: "35%" },
    ],
    nearby: [
      { name: "Dubai International Airport", time: "16 min" },
      { name: "Museum of the Future", time: "20 min" },
      { name: "Downtown Dubai", time: "25 min" },
      { name: "Burj Khalifa", time: "25 min" },
      { name: "Jumeirah Beach", time: "30 min" },
      { name: "Palm Jumeirah", time: "35 min" },
      { name: "Dubai Marina", time: "35 min" },
    ],
    schools: [
      "Elite English School",
      "The Westminster School",
      "Pristine Private School",
    ],
    hospitals: [
      "Dubai Hospital",
      "Canadian Specialist Hospital",
      "Al Kuwait Hospital Dubai",
    ],
    faqItems: [
      {
        q: "Where is Luxury Canal Residences located?",
        a: "Luxury Canal Residences is a freehold waterfront development on Dubai Islands, with a building configuration of G+2P+12 floors.",
      },
      {
        q: "What residence types are available?",
        a: "The development comprises 30 one-bedroom residences, 32 two-bedroom residences, nine three-bedroom residences and two penthouses, for a total of 73 homes.",
      },
      {
        q: "What amenities are included?",
        a: "Amenities include an infinity pool, Prestige Fitness Center, children's adventure zone, game room, lounge, badminton court, sun deck and Prestige Wellness Area.",
      },
      {
        q: "When is Luxury Canal Residences expected to be completed?",
        a: "Completion is anticipated in Q1 2028.",
      },
      {
        q: "What is the payment plan?",
        a: "The payment plan comprises 65% before handover and 35% upon handover, beginning with 20% at booking and staged construction instalments.",
      },
    ],
  },
  "coastal-haven-by-prestige-one": {
    status: "Now Selling",
    hero: COASTAL_HAVEN_HERO_IMAGE,
    introImage: COASTAL_HAVEN_OVERVIEW_IMAGE,
    closingTitle: "Find your haven by the coast",
    closingImage: COASTAL_HAVEN_OVERVIEW_IMAGE,
    overview: [
      "Coastal Haven by Prestige Harbour brings effortless waterfront elegance to Dubai Islands, with every detail designed around comfort, convenience and refined coastal living.",
      "Fine materials and considered technologies shape a calm residential environment, complemented by an extensive collection of wellness, leisure, family and social amenities.",
      "The collection spans one-, two- and three-bedroom residences and expansive penthouses, with homes ranging from approximately 810 to 4,420 sq ft.",
    ],
    highlights: [
      "Wake up to serene waterfront living on Dubai Islands",
      "Enjoy refined interiors shaped by light, comfort and calm",
      "Unwind across wellness, leisure and poolside spaces",
      "Share meaningful moments in family and social amenities",
      "Stay connected to Dubai while embracing coastal life",
    ],
    specs: [
      { label: "Location", value: "Dubai Islands" },
      { label: "Brand", value: "Prestige Harbour" },
      { label: "Configuration", value: "G+2P+12 Floors" },
      { label: "Unit Types", value: "1-Bedroom, 2-Bedroom, 3-Bedroom, Penthouse" },
    ],
    amenities: COASTAL_HAVEN_AMENITIES,
    faqAmenities: COASTAL_HAVEN_ALL_AMENITIES,
    amenityImages: COASTAL_HAVEN_AMENITY_IMAGES,
    paymentPlan: [
      { label: "Pre-handover", value: "65%" },
      { label: "Upon handover", value: "35%" },
    ],
    nearby: [
      { name: "Dubai International Airport", time: "16 min" },
      { name: "Museum of the Future", time: "20 min" },
      { name: "Downtown Dubai", time: "25 min" },
      { name: "Burj Khalifa", time: "25 min" },
      { name: "Jumeirah Beach", time: "30 min" },
      { name: "Palm Jumeirah", time: "35 min" },
      { name: "Dubai Marina", time: "35 min" },
    ],
    schools: [
      "Elite English School",
      "The Westminster School",
      "Pristine Private School",
    ],
    hospitals: [
      "Dubai Hospital",
      "Canadian Specialist Hospital",
      "Al Kuwait Hospital Dubai",
    ],
    faqItems: [
      {
        q: "Where is Coastal Haven located?",
        a: "Coastal Haven by Prestige Harbour is a waterfront residential development on Dubai Islands, with a building configuration of G+2P+12 floors.",
      },
      {
        q: "What residence types are available?",
        a: "The development offers one-bedroom residences from 810 to 830 sq ft, two-bedroom residences from 1,200 to 1,245 sq ft, three-bedroom residences from 1,665 to 2,045 sq ft, and penthouses from 4,415 to 4,420 sq ft.",
      },
      {
        q: "What amenities are included?",
        a: "Amenities include the Prestige Clubhouse, Prestige Spa, Prestige Fitness Center, Prestige Wellness Area, infinity pool, sports courts, outdoor cinema, children's adventure areas, game room, library lounge and more.",
      },
      {
        q: "When is Coastal Haven expected to be completed?",
        a: "Completion is anticipated in Q1 2028.",
      },
      {
        q: "What is the payment plan?",
        a: "The payment plan comprises 65% before handover and 35% upon handover, beginning with 20% at booking and staged construction instalments.",
      },
    ],
  },
  "parkway-by-prestige-one": {
    status: "Now Selling",
    hero: PARKWAY_HERO_IMAGE,
    introImage: PARKWAY_OVERVIEW_IMAGE,
    closingTitle: "Come home to nature in Meydan",
    closingImage: "/assets/images/v3/project-amenities/Sanctuary/ras-al-khor-wildlife.webp",
    originalAmenityImages: true,
    overview: [
      "Parkway by Prestige One is a nature-inspired residential address in Meydan Horizon, bringing refined urban living together with expansive greenery, crystal lagoon views and direct access to the energy of Dubai.",
      "Designed by KIEFERLE & Partner, its flowing curves and organic lines connect contemporary architecture with the landscape, while interiors balance comfort, sophistication and everyday functionality.",
      "Amenities extend from the welcoming ground-floor arrival through indoor and outdoor podium experiences to elevated gardens, leisure spaces and a dedicated 21st-floor wellness destination.",
    ],
    highlights: [
      "Wake up to crystal lagoon, park and skyline views",
      "Live in harmony with nature-inspired architecture",
      "Move between gardens, leisure and social spaces",
      "Restore your balance at the 21st-floor wellness destination",
    ],
    specs: [
      { label: "Location", value: "Meydan Horizon" },
      { label: "Brand", value: "Prestige One" },
      { label: "Configuration", value: "G+4P+30" },
      { label: "Unit Types", value: "1-Bedroom, 2-Bedroom, 3-Bedroom" },
    ],
    amenities: PARKWAY_AMENITIES,
    faqAmenities: PARKWAY_ALL_AMENITIES,
    amenityImages: PARKWAY_AMENITY_IMAGES,
    paymentPlan: [
      { label: "Down payment", value: "30%" },
      { label: "During construction", value: "70%" },
    ],
    nearby: [
      { name: "Dubai Marina", time: "20 min" },
      { name: "Palm Jumeirah", time: "24 min" },
      { name: "Burj Al Arab", time: "25 min" },
    ],
    schools: [
      "North London Collegiate School Dubai",
      "Hartland International School",
      "GEMS Wellington Academy - Al Khail",
    ],
    hospitals: [
      "Meydan One Health Clinic",
      "King's College Hospital London - Dubai",
      "Mediclinic City Hospital",
    ],
    faqItems: [
      {
        q: "Where is Parkway by Prestige One located?",
        a: "Parkway is located in Meydan Horizon, with views towards the crystal lagoon, Meydan's largest park and the wider Dubai skyline.",
      },
      {
        q: "What residence types are available?",
        a: "Parkway offers one-, two- and three-bedroom residences in a G+4P+30 residential tower.",
      },
      {
        q: "What amenities are included?",
        a: "Amenities span the ground, podium, 12th and 21st floors. Highlights include a family lagoon, skyline infinity pool, Prestige Fitness Center, Prestige Wellness Center, indoor and outdoor theaters, sports courts, Little Explorers' Zone, elevated gardens and observation decks.",
      },
      {
        q: "How well connected is Parkway?",
        a: "Dubai Marina is approximately 20 minutes away, Palm Jumeirah 24 minutes and Burj Al Arab 25 minutes away.",
      },
      {
        q: "Which schools and hospitals are near Parkway?",
        a: "Nearby education options include North London Collegiate School Dubai, Hartland International School and GEMS Wellington Academy - Al Khail. Healthcare options include Meydan One Health Clinic, King's College Hospital London - Dubai and Mediclinic City Hospital.",
      },
      {
        q: "What is the payment plan?",
        a: "The payment plan comprises a 30% down payment followed by 70% during construction.",
      },
    ],
  },
  "waterway-by-prestige-one": {
    status: "Now Selling",
    introImage: WATERWAY_FEATURED_IMAGE,
    closingTitle: "Flow into life by the water",
    closingImage: "/assets/images/v3/project-amenities/Sanctuary/ras-al-khor-wildlife.webp",
    originalAmenityImages: true,
    overview: [
      "The Waterway by Prestige One is a serene waterfront residence in Meydan Horizon, Meydan City, set beside the crystal lagoons and connected to Dubai's key destinations.",
      "The G+20 development pairs spacious one- and two-bedroom homes with a calm minimalist aesthetic inspired by the simplicity and balance of Japanese design.",
      "From the swimming pool and double-height Prestige One Fitness to the rooftop sunset area, water-feature lounges and social spaces, every amenity is designed around effortless relaxation.",
    ],
    highlights: [
      "Wake up beside the crystal lagoons in Meydan Horizon",
      "Find calm in Japanese-inspired minimalist interiors",
      "Unwind by the rooftop pool and water-feature lounges",
      "Stay close to Downtown while living at the water's pace",
    ],
    specs: [
      { label: "Location", value: "Meydan Horizon" },
      { label: "Brand", value: "Prestige One" },
      { label: "Configuration", value: "G+20" },
      { label: "Unit Types", value: "1-Bedroom, 2-Bedroom" },
    ],
    amenities: WATERWAY_AMENITIES,
    faqAmenities: WATERWAY_AMENITIES,
    amenityImages: WATERWAY_AMENITY_IMAGES,
    paymentPlan: [
      { label: "On booking", value: "20%" },
      { label: "During construction", value: "45%" },
      { label: "On completion", value: "35%" },
    ],
    nearby: [
      { name: "Business Bay", time: "10 min" },
      { name: "Downtown Dubai", time: "12 min" },
      { name: "DIFC", time: "15 min" },
      { name: "Dubai Design District", time: "15 min" },
      { name: "Dubai International Airport", time: "18 min" },
      { name: "Dubai Marina", time: "25 min" },
    ],
    schools: [
      "North London Collegiate School Dubai",
      "Hartland International School",
      "GEMS Wellington Academy - Al Khail",
    ],
    hospitals: ["Mediclinic City Hospital", "American Hospital Dubai", "Fakeeh University Hospital"],
    faqItems: [
      {
        q: "Where is The Waterway by Prestige One located?",
        a: "The Waterway is located in Meydan Horizon within Meydan City, beside the crystal lagoons and close to Ras Al Khor Wildlife Sanctuary.",
      },
      {
        q: "What residence types are available?",
        a: "The Waterway offers spacious one- and two-bedroom residences in a G+20 waterfront development.",
      },
      {
        q: "What amenities are included?",
        a: "Amenities include a swimming pool, double-height Prestige One Fitness, rock climbing wall, changing rooms, rooftop BBQ and lounge area, rooftop sunset area, outdoor lounges and a grand entrance lobby with water features.",
      },
      {
        q: "How well connected is The Waterway?",
        a: "Business Bay is approximately 10 minutes away, Downtown Dubai 12 minutes, Dubai Design District and DIFC 15 minutes, Dubai International Airport 18 minutes and Dubai Marina 25 minutes away.",
      },
      {
        q: "Which schools and hospitals are nearby?",
        a: "Nearby education options include North London Collegiate School Dubai, Hartland International School and GEMS Wellington Academy - Al Khail. Healthcare options include Mediclinic City Hospital, American Hospital Dubai and Fakeeh University Hospital.",
      },
      {
        q: "What is the payment plan?",
        a: "The 65/35 payment plan begins with 20% on booking, followed by 45% during construction and 35% on completion.",
      },
    ],
  },
  "the-one-by-prestige-one": {
    status: "Now Selling",
    introImage: THE_ONE_OVERVIEW_IMAGE,
    closingTitle: "One vision. One landmark. One legacy.",
    closingImage: `${THE_ONE_GALLERY_ROOT}/One-outside.webp`,
    originalAmenityImages: true,
    overview: [
      "The One by Prestige One is a commercial landmark created for visionaries in Barsha Heights, one of Dubai's most connected and dynamic business districts.",
      "Its sculpted architecture, premium interiors and flexible office environments bring together modern design and functionality, creating an inspiring setting for forward-thinking companies.",
      "A complete hospitality, productivity and wellness programme - from meeting spaces and business lounges to virtual golf, Prestige Fitness and the spa pool - redefines the modern workplace experience.",
    ],
    highlights: [
      "Work from a connected address in dynamic Barsha Heights",
      "Shape flexible workspaces around your business ambitions",
      "Meet and collaborate in hospitality-led business spaces",
      "Balance productivity with fitness and wellness experiences",
    ],
    specs: [
      { label: "Location", value: "Barsha Heights" },
      { label: "Brand", value: "Prestige One" },
      { label: "Configuration", value: "3B+G+14+R" },
      { label: "Unit Types", value: "Commercial Offices, Half Floors, Full Floors" },
    ],
    amenities: THE_ONE_AMENITIES,
    faqAmenities: THE_ONE_ALL_AMENITIES,
    amenityImages: THE_ONE_AMENITY_IMAGES,
    paymentPlan: [
      { label: "On booking", value: "20%" },
      { label: "During construction", value: "45%" },
      { label: "Post-handover", value: "35%" },
    ],
    nearby: [
      { name: "Dubai Marina", time: "15 min" },
      { name: "Palm Jumeirah", time: "16 min" },
      { name: "Burj Al Arab", time: "15 min" },
      { name: "Downtown Dubai", time: "20 min" },
      { name: "Burj Khalifa", time: "20 min" },
      { name: "Dubai International Airport", time: "25 min" },
    ],
    schools: [
      "GEMS Founders School",
      "Dubai Heights Academy",
      "American University in Dubai",
    ],
    hospitals: ["Saudi German Hospital", "Al Zahra Hospital", "Aster Clinic"],
    faqItems: [
      {
        q: "Where is The One by Prestige One located?",
        a: "The One is located in Barsha Heights, with convenient access to Sheikh Zayed Road, metro stations, Dubai Internet City, Dubai Media City and the city's key commercial and lifestyle destinations.",
      },
      {
        q: "What commercial spaces are available?",
        a: "The development offers commercial offices as well as half-floor and full-floor office opportunities within a 3B+G+14+R tower.",
      },
      {
        q: "What amenities are included?",
        a: "Amenities include Prestige Cafe, a grand reception lounge, sky lounge, virtual golf studio, botanical garden, Prestige Wellness Centre, Prestige Fitness Centre, business lounge, meeting and conference rooms, digital library, cigar lounge, spa pool and observation areas.",
      },
      {
        q: "How well connected is The One?",
        a: "Dubai Marina and Burj Al Arab are approximately 15 minutes away, Palm Jumeirah 16 minutes, Downtown Dubai and Burj Khalifa 20 minutes, and Dubai International Airport 25 minutes away.",
      },
      {
        q: "Which schools and hospitals are nearby?",
        a: "Nearby education options include GEMS Founders School, Dubai Heights Academy and American University in Dubai. Healthcare options include Saudi German Hospital, Al Zahra Hospital and Aster Clinic.",
      },
      {
        q: "What is the payment plan?",
        a: "The payment plan comprises 20% on booking, 45% during construction and 35% post-handover.",
      },
    ],
  },
  "vista-by-prestige-one": {
    status: "Handed Over",
    introImage: VISTA_OVERVIEW_IMAGE,
    closingTitle: "Wake up to a wider view",
    closingImage: `${VISTA_GALLERY_ROOT}/Exterior.webp`,
    originalAmenityImages: true,
    overview: [
      "Vista by Prestige One is a view-centric residential address in Dubai Sports City, positioned to maximise panoramas across The Els Club golf course and the Dubai Marina skyline.",
      "Designed by award-winning architectural firm LACASA, the residences combine refined elegance with a calm, contemporary design language created for both leisure and productivity.",
      "Studios and one-, two- and three-bedroom residences are complemented by rooftop leisure, wellness, sport and family amenities, creating a complete lifestyle above the greens.",
    ],
    highlights: [
      "Wake up to sweeping views across The Els Club",
      "Live between golf-side calm and Dubai Sports City's energy",
      "Recharge with rooftop wellness, sport and leisure",
      "Make space for family time, focus and everyday connection",
    ],
    specs: [
      { label: "Location", value: "Dubai Sports City" },
      { label: "Status", value: "Handed Over" },
      { label: "Configuration", value: "G+2P+14+R" },
      { label: "Unit Types", value: "Studio, 1-Bedroom, 2-Bedroom, 3-Bedroom" },
    ],
    amenities: VISTA_AMENITIES,
    faqAmenities: VISTA_ALL_AMENITIES,
    amenityImages: VISTA_AMENITY_IMAGES,
    paymentPlan: [
      { label: "At booking", value: "10%" },
      { label: "During construction", value: "55%" },
      { label: "Upon handover", value: "35%" },
    ],
    nearby: [
      { name: "The Els Club", time: "4 min" },
      { name: "Dubai International Cricket Stadium", time: "5 min" },
      { name: "Dubai Autodrome", time: "10 min" },
      { name: "Mall of the Emirates", time: "15 min" },
      { name: "Dubai Marina", time: "20 min" },
      { name: "Dubai International Airport", time: "25 min" },
    ],
    schools: [
      "Victory Heights Primary School",
      "GEMS Metropole School",
      "Renaissance School",
    ],
    hospitals: ["Mediclinic Parkview Hospital", "NMC Royal Hospital", "Aster Clinic"],
    faqItems: [
      {
        q: "Where is Vista by Prestige One located?",
        a: "Vista is located in Dubai Sports City, close to The Els Club, Dubai International Cricket Stadium, Dubai Autodrome and the community's schools, retail and dining destinations.",
      },
      {
        q: "What residence types are available at Vista?",
        a: "Vista includes studios from 506 to 509 sq ft, one-bedroom residences from 779 to 1,065 sq ft, two-bedroom residences from 1,388 to 1,613 sq ft and three-bedroom residences from 1,756 to 1,761 sq ft.",
      },
      {
        q: "What amenities are available?",
        a: "Amenities include a grand hotel-like entrance and lobby, observation lounge, rooftop infinity and kids pools, rooftop gym, outdoor cinema, sports and padel courts, spa, indoor and outdoor kids play areas, putting green, barbecue spaces, jogging areas and EV charging.",
      },
      {
        q: "What views does Vista offer?",
        a: "The view-centric residences are positioned to maximise vistas across The Els Club golf course and towards the Dubai Marina skyline.",
      },
      {
        q: "Which schools and hospitals are nearby?",
        a: "Nearby education options include Victory Heights Primary School, GEMS Metropole School and Renaissance School. Healthcare options include Mediclinic Parkview Hospital, NMC Royal Hospital and Aster Clinic.",
      },
      {
        q: "What is the payment plan?",
        a: "The launch-sheet payment plan comprises 10% at booking, a further 55% across scheduled construction installments and 35% upon handover.",
      },
    ],
  },
  "the-residence-by-prestige-one": {
    status: "Handed Over",
    introImage: RESIDENCE_PLACEHOLDER_IMAGE,
    closingTitle: "A more thoughtful way to live in JVC",
    closingImage: "/assets/images/v3/jvc-bg.webp",
    originalAmenityImages: true,
    overview: [
      "The Residence by Prestige One is a boutique residential address in Jumeirah Village Circle, created around detailed design, contemporary comfort and an intimate community atmosphere.",
      "Its dynamic exterior gives way to refined interiors and practical, liveable layouts, with expansive windows framing Dubai's skyline and the greenery surrounding JVC.",
      "Studios and one- and two-bedroom residences are complemented by rooftop leisure, wellness, family and landscaped amenities designed to make everyday living feel effortless.",
    ],
    highlights: [
      "Enjoy boutique community living in the heart of JVC",
      "Fill every day with natural light, comfort and thoughtful design",
      "Unwind across rooftop leisure and landscaped retreats",
      "Stay connected to Dubai's key lifestyle destinations",
    ],
    specs: [
      { label: "Location", value: "Jumeirah Village Circle" },
      { label: "Status", value: "Handed Over" },
      { label: "Configuration", value: "G+5" },
      { label: "Unit Types", value: "Studio, 1-Bedroom, 2-Bedroom" },
    ],
    amenities: RESIDENCE_AMENITIES,
    faqAmenities: RESIDENCE_ALL_AMENITIES,
    amenityImages: RESIDENCE_AMENITY_IMAGES,
    paymentPlan: [],
    nearby: [
      { name: "Vista by Prestige One", time: "12 min" },
      { name: "Dubai Autodrome", time: "14 min" },
      { name: "Mall of the Emirates", time: "18 min" },
      { name: "Palm Jumeirah", time: "20 min" },
      { name: "Dubai Marina", time: "23 min" },
      { name: "Jumeirah Beach", time: "25 min" },
      { name: "Burj Khalifa / Downtown Dubai", time: "28 min" },
      { name: "Dubai International Airport", time: "28 min" },
    ],
    schools: [
      "JSS International School",
      "Nord Anglia International School",
      "GEMS Founders School Dubai",
    ],
    hospitals: [
      "Mediclinic Me'aisem",
      "Emirates Hospital Day Surgery & Medical Center",
      "Karama Medical Centre",
    ],
    faqItems: [
      {
        q: "Where is The Residence by Prestige One located?",
        a: "The Residence is located in Jumeirah Village Circle, with direct access to Sheikh Mohammed Bin Zayed Road and convenient connections to Dubai's major lifestyle and business destinations.",
      },
      {
        q: "What residence types are available?",
        a: "The boutique G+5 development includes studios and one- and two-bedroom residences designed around comfort, natural light and contemporary living.",
      },
      {
        q: "What amenities are available?",
        a: "Amenities include a fitness centre, swimming pool and hot tub, private roof deck and outdoor cinema, putting green, barbecue and sunken seating areas, landscaped lawns, an outdoor kids play area, cabanas, locker rooms, bicycle parking and EV charging.",
      },
      {
        q: "How well connected is The Residence?",
        a: "The brochure places Dubai Autodrome approximately 14 minutes away, Mall of the Emirates 18 minutes, Palm Jumeirah 20 minutes, Dubai Marina 23 minutes and Downtown Dubai and Dubai International Airport 28 minutes away.",
      },
      {
        q: "Which schools and hospitals are nearby?",
        a: "Nearby education options include JSS International School, Nord Anglia International School and GEMS Founders School Dubai. Healthcare options include Mediclinic Me'aisem, Emirates Hospital Day Surgery & Medical Center and Karama Medical Centre.",
      },
      {
        q: "Has The Residence been handed over?",
        a: "Yes. The Residence by Prestige One is a completed and handed-over development in Jumeirah Village Circle.",
      },
    ],
  },
  "luxe-villa-by-prestige-one": {
    status: "Completed",
    hero: LUXE_VILLA_FEATURED_IMAGE,
    introImage: LUXE_VILLA_OVERVIEW_IMAGE,
    closingTitle: "A private expression of Palm Jumeirah living",
    closingImage: "/assets/images/v2/our-destinations/palm-jumeira.webp",
    originalAmenityImages: true,
    overview: [
      "Prestige is an inherent trait, not merely an ambition. At Luxe Villa by Prestige One, it defines every aspect of an exceptional private home on Palm Jumeirah.",
      "Constructed with close attention to detail and high-quality materials, the villa combines flawless design with uncompromising craftsmanship in one of Dubai's most coveted communities.",
      "Created for discerning residents, its generous interiors, elegant entertaining spaces and calm private retreats bring sophistication and effortless island living together.",
    ],
    highlights: [
      "Experience private island living on Palm Jumeirah",
      "Welcome guests through a grand entrance and formal majlis",
      "Gather in generous family spaces crafted for effortless living",
      "Retreat into calm interiors shaped by privacy and lasting quality",
    ],
    specs: [
      { label: "Location", value: "Palm Jumeirah" },
      { label: "Brand", value: "Prestige One" },
      { label: "Configuration", value: "G+2" },
      { label: "Unit Types", value: "Villa" },
    ],
    amenities: [
      "Master Suite",
      "Grand Entrance",
      "Gallery Foyer",
      "Family Lounge",
      "Private Retreat",
      "Formal Majlis",
    ],
    amenityImages: LUXE_VILLA_AMENITY_IMAGES,
    paymentPlan: [],
    nearby: [
      { name: "Dubai Marina", time: "15 min" },
      { name: "Mall of the Emirates", time: "15 min" },
      { name: "Burj Al Arab", time: "15 min" },
      { name: "Museum of the Future", time: "20 min" },
      { name: "Burj Khalifa", time: "20 min" },
      { name: "Dubai International Airport", time: "25 min" },
      { name: "The Dubai Mall", time: "27 min" },
    ],
    schools: [
      "Dubai College",
      "American School of Dubai",
      "GEMS Wellington International School",
    ],
    hospitals: [
      "Emirates Hospital Clinic - The Palm",
      "Al Zahra Hospital Dubai",
      "Saudi German Hospital Dubai",
    ],
    faqItems: [
      {
        q: "Where is Luxe Villa by Prestige One located?",
        a: "Luxe Villa is located on Palm Jumeirah, Dubai's iconic island destination and one of its most exclusive waterfront communities.",
      },
      {
        q: "What type of property is Luxe Villa?",
        a: "Luxe Villa is a G+2 private villa designed around privacy, generous living spaces, refined interiors and contemporary luxury.",
      },
      {
        q: "What features are included in Luxe Villa?",
        a: "Key features include a master suite, grand entrance, gallery foyer, family lounge, private retreat and formal majlis.",
      },
      {
        q: "How well connected is Luxe Villa?",
        a: "Dubai Marina, Mall of the Emirates and Burj Al Arab are approximately 15 minutes away, Museum of the Future and Burj Khalifa 20 minutes, Dubai International Airport 25 minutes and The Dubai Mall 27 minutes away. Driving times are approximate and traffic dependent.",
      },
      {
        q: "Which schools and hospitals are near Luxe Villa?",
        a: "Nearby education options include Dubai College, American School of Dubai and GEMS Wellington International School. Healthcare options include Emirates Hospital Clinic - The Palm, Al Zahra Hospital Dubai and Saudi German Hospital Dubai.",
      },
    ],
  },
  "the-boulevard-by-prestige-one": {
    status: "Now Selling",
    introImage: BOULEVARD_OVERVIEW_IMAGE,
    closingTitle: "Live connected at The Boulevard",
    closingImage: `${BOULEVARD_AMENITY_ROOT}/boulevard.webp`,
    originalAmenityImages: true,
    overview: [
      "The Boulevard by Prestige One brings seamless design and wellness-focused living together in DLRC, where luxury and convenience shape a smart, connected lifestyle.",
      "The collection includes studios from 437.98 to 534.97 sq ft, one-bedroom residences from 677.91 to 1,201.25 sq ft, and two-bedroom residences from 1,025.26 to 1,487.68 sq ft.",
      "A complete podium and rooftop amenity programme creates spaces for fitness, creativity, productivity, family time and relaxed poolside living.",
    ],
    highlights: [
      "Live a smart, connected lifestyle in DLRC",
      "Recharge across poolside, garden and wellness retreats",
      "Create, focus and connect in flexible social spaces",
      "Enjoy everyday balance from the podium to the rooftop",
    ],
    amenities: [
      "Skyline Infinity Pool",
      "Prestige Fitness Center",
      "Little Explorers Zone",
      "Gaming Zone",
      "Creativity Studio",
      "Digital Library",
      "Outdoor Theatre",
      "Cozy Lounger Retreat",
    ],
    faqAmenities: [
      "Lift Lobby",
      "Male/Female Toilet & Changing Room",
      "Little Explorers Zone",
      "Prestige Clubhouse",
      "Digital Library",
      "Productivity Hub",
      "Gaming Zone",
      "Creativity Studio",
      "Prestige Fitness Center",
      "Artic Pool",
      "Calm Garden Corner",
      "Green Labyrinth",
      "Poolside Lounge",
      "Pool Promenade",
      "Aqua Loungers",
      "Floating Passage",
      "Serenity Pool",
      "Jacuzzi Retreat",
      "Observation Deck",
      "Sky Lounge",
      "Bayside Loungers",
      "Skyline Infinity Pool",
      "Female and Male Restroom",
      "Aqua Pool Bar",
      "Infinity Sunken Beds",
      "Library Lounge",
      "Infinity Promenade",
      "Tranquility Corner",
      "Outdoor Theatre",
      "Fire Place",
      "Grill Spot",
      "Serenity Pond",
      "Relaxation Pond",
      "Productivity Suite",
      "Cozy Lounger Retreat",
    ],
    amenityImages: [
      `${BOULEVARD_GALLERY_ROOT}/Skyline Infinity Pool.webp`,
      `${BOULEVARD_GALLERY_ROOT}/1_Gym.jpg`,
      `${BOULEVARD_GALLERY_ROOT}/Little Explorers Zone.webp`,
      `${BOULEVARD_GALLERY_ROOT}/Gaming Zone.webp`,
      `${BOULEVARD_GALLERY_ROOT}/Creativity Studio.webp`,
      `${BOULEVARD_GALLERY_ROOT}/Digital Library.webp`,
      `${BOULEVARD_GALLERY_ROOT}/Outdoor Theatre.webp`,
      `${BOULEVARD_GALLERY_ROOT}/Cozy Lounger Retreat.webp`,
    ],
    paymentPlan: [
      { label: "Total installments", value: "65%" },
      { label: "Upon handover", value: "35%" },
    ],
    faqItems: [
      {
        q: "What is The Boulevard by Prestige One?",
        a: "The Boulevard is a G+17 residential development in DLRC, designed around seamless contemporary living, wellness-focused amenities and everyday connectivity.",
      },
      {
        q: "What residence types are available?",
        a: "The development offers studios from 437.98 to 534.97 sq ft, one-bedroom residences from 677.91 to 1,201.25 sq ft, and two-bedroom residences from 1,025.26 to 1,487.68 sq ft.",
      },
      {
        q: "What amenities are included?",
        a: "The podium and rooftop amenity programmes include the Prestige Clubhouse, Little Explorers Zone, Digital Library, Productivity Hub, Gaming Zone, Creativity Studio, Prestige Fitness Center, Serenity Pool, Skyline Infinity Pool, Outdoor Theatre and more.",
      },
      {
        q: "What is the payment plan?",
        a: "The payment plan is structured as 65% in total installments and 35% upon handover.",
      },
      {
        q: "When is The Boulevard expected to be completed?",
        a: "The Boulevard is anticipated to be completed in Q1 2028.",
      },
    ],
  },
  "golf-residences-by-prestige-one": {
    status: "Now Selling",
    introImage: `${GOLF_AMENITY_GALLERY_ROOT}/golf-featured-image.webp`,
    closingTitle: "Live overlooking uninterrupted greens",
    closingImage: `${GOLF_AMENITY_GALLERY_ROOT}/Golf Place- cta.webp`,
    originalAmenityImages: true,
    overview: [
      "Golf Residences by Prestige One brings expansive contemporary living to the heart of Dubai Sports City, framed by uninterrupted views across the community's championship greens.",
      "The collection comprises spacious two- and three-bedroom residences, with two-bedroom homes starting from 1,294 sq ft and three-bedroom homes starting from 1,720 sq ft.",
      "Ground-floor arrival spaces, an activity-rich podium and a rooftop wellness deck create a complete lifestyle centred on recreation, connection and relaxed golf-course living.",
    ],
    highlights: [
      "Wake up to uninterrupted championship golf-course views",
      "Stay active across the activity-rich podium",
      "Unwind at the rooftop wellness and leisure deck",
      "Connect through thoughtfully designed social spaces",
    ],
    amenities: [
      "Skyline Infinity Pool",
      "Prestige Owners' Lounge",
      "Outdoor Cinema",
      "Podium Amenities",
      "Private Pool",
      "Kids Play Area",
      "Prestige One Fitness",
      "Running Track",
      "Floating Cabanas",
    ],
    faqAmenities: [
      "Drop-Off Area",
      "Pick-Up Area",
      "Prestige Owners' Lounge",
      "Concierge Assistance",
      "Rolling Terrain",
      "Running Track",
      "Seating Area",
      "Grand Entrance Lobby",
      "24/7 Security",
      "The Clubhouse",
      "Library Lounge",
      "Digital Library",
      "The Clubhouse Cafe",
      "Badminton Court",
      "Basketball Court",
      "Children's Adventure Park",
      "Mini Rock Climbing Wall",
      "Plant Nursery",
      "Miniature Golf Course",
      "Event Function Space",
      "Billiard Table",
      "Barbeque Garden",
      "Outdoor Amphitheater",
      "Sky Deck",
      "Female Changing Room",
      "Prestige Wellness Centre",
      "Locker Area",
      "Virtual Trainer",
      "Little Explorers' Zone",
      "Prestige One Fitness",
      "Pool Bar",
      "Sun Deck",
      "Floating Cabanas",
      "Splash Adventure Zone",
      "Outdoor Shower",
      "Sunken Loungers",
      "Skyline Infinity Pool",
      "Male Changing Room",
    ],
    amenityImages: [
      `${GOLF_AMENITY_GALLERY_ROOT}/Skyline-Infinity-Pool.webp`,
      `${GOLF_AMENITY_GALLERY_ROOT}/Club-Lounge.webp`,
      `${GOLF_AMENITY_GALLERY_ROOT}/Outdoor Cinema.webp`,
      `${GOLF_AMENITY_GALLERY_ROOT}/Amenities- Podium.webp`,
      `${GOLF_AMENITY_GALLERY_ROOT}/Private Pool.webp`,
      `${GOLF_AMENITY_GALLERY_ROOT}/Kids-Play-Area.webp`,
      `${GOLF_AMENITY_GALLERY_ROOT}/Fitness.webp`,
      `${GOLF_AMENITY_GALLERY_ROOT}/Golf Place- Amenities- running track.webp`,
      `${GOLF_AMENITY_GALLERY_ROOT}/FLOATING-CABANAS.webp`,
    ],
    paymentPlan: [
      { label: "Down payment", value: "20%" },
      { label: "During construction", value: "20%" },
      { label: "Upon handover", value: "60%" },
    ],
    nearby: [
      { name: "ICC Academy", time: "3 min" },
      { name: "Dubai International Cricket Stadium", time: "3 min" },
      { name: "The Els Club", time: "4 min" },
      { name: "Dubai Autodrome", time: "5 min" },
      { name: "Dubai Polo & Equestrian Club", time: "12 min" },
      { name: "Burj Khalifa", time: "20 min" },
    ],
    schools: [
      "GEMS FirstPoint School — 5 minutes",
      "Repton School Dubai — 8 minutes",
      "Nord Anglia International School Dubai — 12 minutes",
    ],
    hospitals: [
      "Mediclinic Parkview Hospital — 10 minutes",
      "Saudi German Hospital — 20 minutes",
      "American Hospital Dubai — 25 minutes",
    ],
    faqItems: [
      {
        q: "What is Golf Residences by Prestige One?",
        a: "Golf Residences is a contemporary residential development in Dubai Sports City, designed around expansive two- and three-bedroom homes, active living and uninterrupted golf-course views.",
      },
      {
        q: "What are the unit types?",
        a: "The development offers two-bedroom residences starting from 1,294 sq ft and three-bedroom residences starting from 1,720 sq ft. Anticipated completion is Q2 2027.",
      },
      {
        q: "What amenities are included?",
        a: "Amenities extend across the ground, podium and rooftop floors. Highlights include the Prestige Owners' Lounge, Prestige One Fitness, Skyline Infinity Pool, Barbeque Garden, Outdoor Cinema, Children's Adventure Park, Digital Library and sports courts.",
      },
      {
        q: "How well connected is Golf Residences?",
        a: "The ICC Academy and Dubai International Cricket Stadium are approximately three minutes away, The Els Club four minutes, Dubai Autodrome five minutes and Burj Khalifa approximately 20 minutes away.",
      },
      {
        q: "Which schools and hospitals are near Golf Residences?",
        a: "Nearby schools include GEMS FirstPoint School (5 minutes), Repton School Dubai (8 minutes) and Nord Anglia International School Dubai (12 minutes). Healthcare options include Mediclinic Parkview Hospital (10 minutes), Saudi German Hospital (20 minutes) and American Hospital Dubai (25 minutes).",
      },
      {
        q: "What is the payment plan?",
        a: "The standard payment plan is 20% as the down payment, 20% during construction and 60% upon handover.",
      },
    ],
  },
  "seaside-by-prestige-one": {
    status: "Now Selling",
    introImage: SEASIDE_OVERVIEW_IMAGE,
    closingTitle: "Find your place by the water",
    closingImage: `${SEASIDE_GALLERY_ROOT}/Night - Rear Side.webp`,
    originalAmenityImages: true,
    overview: [
      "Seaside by Prestige One is an exclusive Dubai Islands retreat that brings together the ease of urban living and the calm of island life.",
      "Floor-to-ceiling windows and expansive balconies draw the surrounding seascape into every one-, two- and three-bedroom residence.",
      "Clean modern lines and a tiered architectural form create privacy, generous outdoor space and panoramic waterfront views.",
    ],
    highlights: [
      "Wake up to panoramic waterfront views on Dubai Islands",
      "Let natural light and generous balconies shape each day",
      "Spend easy moments by the pool, cinema and landscaped lawns",
      "Balance island calm with convenient city connections",
    ],
    amenities: [
      "Swimming Pool",
      "Prestige One Fitness",
      "Kids' Play Area",
      "Mini Putt Golf",
      "Private Pool",
      "Changing Rooms",
      "Grand Lobby",
      "Retail Shop",
      "EV Charging",
    ],
    faqAmenities: [
      "Swimming Pool",
      "Prestige One Fitness",
      "Kids' Pool & Fountains",
      "Kids' Play Area",
      "Mini Putt Golf",
      "BBQ Area",
      "Outdoor Cinema & Lawn",
      "Private Pool",
      "EV Charging",
    ],
    amenityImages: [
      `${SEASIDE_GALLERY_ROOT}/swimming pool.webp`,
      `${SEASIDE_GALLERY_ROOT}/Gym-1.webp`,
      `${SEASIDE_GALLERY_ROOT}/Kids Play Area.webp`,
      `${SEASIDE_GALLERY_ROOT}/Mini Putt Golf.webp`,
      `${SEASIDE_GALLERY_ROOT}/Spapool.webp`,
      `${SEASIDE_GALLERY_ROOT}/Changing Room 2.webp`,
      `${SEASIDE_GALLERY_ROOT}/Lobby_.webp`,
      `${SEASIDE_GALLERY_ROOT}/Retail Shop.webp`,
      `${SEASIDE_GALLERY_ROOT}/ev-charging.webp`,
    ],
    paymentPlan: [
      { label: "Down payment", value: "20%" },
      { label: "Quarterly", value: "5%" },
      { label: "At handover", value: "35%" },
    ],
    nearby: [
      { name: "Waterfront Market", time: "7 min" },
      { name: "Dubai Hospital", time: "8 min" },
      { name: "Dubai International Airport", time: "18 min" },
      { name: "Burj Khalifa / Downtown Dubai", time: "20 min" },
    ],
    schools: ["Elite English School", "The Westminster School", "Pristine Private School"],
    hospitals: ["Dubai Hospital", "Canadian Specialist Hospital", "Al Kuwait Hospital Dubai"],
    faqItems: [
      {
        q: "What is Seaside by Prestige One?",
        a: "Seaside by Prestige One is a waterfront residential development on Dubai Islands, designed to combine urban convenience with the calm of island life and panoramic sea views.",
      },
      {
        q: "What are the unit types?",
        a: "The development offers one-bedroom residences from 751 sq ft, two-bedroom residences from 1,194 sq ft and three-bedroom residences from 1,975 sq ft. Anticipated completion is Q4 2026.",
      },
      {
        q: "What amenities are included?",
        a: "Amenities include a swimming pool, Prestige One Fitness, kids' pool and fountains, kids' play area, mini putt golf, BBQ area, outdoor cinema and lawn, and a private pool.",
      },
      {
        q: "How well connected is Seaside?",
        a: "Waterfront Market is approximately seven minutes away, Dubai Hospital eight minutes, Dubai International Airport 18 minutes and Burj Khalifa and Downtown Dubai approximately 20 minutes away.",
      },
      {
        q: "Which schools and hospitals are near Seaside?",
        a: "Nearby education options include Elite English School, The Westminster School and Pristine Private School. Healthcare options include Dubai Hospital, Canadian Specialist Hospital and Al Kuwait Hospital Dubai.",
      },
      {
        q: "What is the payment plan?",
        a: "The payment plan comprises a 20% down payment, 5% quarterly installments and 35% at handover.",
      },
    ],
  },
  "hilton-residences-dubai-maritime-city": {
    status: "Now Selling",
    hero: `${V2}/hilton/HILTON-NIGHT-VIEW-1.webp`,
    introImage: `${HILTON_AMENITY_GALLERY_ROOT}/1-hilton-1.webp`,
    closingImage: "/assets/images/v3/Pool-View2.webp",
    originalAmenityImages: true,
    overview: [
      "Hilton Residences Dubai Maritime City introduces the first waterfront Hilton-branded residences, balancing elegance and ease against uninterrupted views of the sea and Dubai skyline.",
      "Impeccable design and more than 45 thoughtful amenities are complemented by the trusted Hilton name, lifetime Gold Hilton Honors status for owners and full hotel-level services.",
      "Set within the 249-hectare Dubai Maritime City district between Port Rashid and Dubai Drydocks, the address combines direct shoreline living with convenient access to Downtown Dubai, Dubai Mall and Dubai International Airport.",
    ],
    highlights: [
      "The first waterfront Hilton-branded residences",
      "Gold Hilton Honors status for owners for life",
      "Full hotel-level services for owners",
      "45+ amenities across four dedicated levels",
    ],
    amenities: [
      "BBQ Garden",
      "Prestige One Fitness",
      "Game Area",
      "Outdoor Cinema Lawn",
      "Kids Play Area",
      "Infinity Swimming Pool",
      "Casual Sky Lounge",
      "City View Work Area",
      "Pool Cabanas",
      ...HILTON_AMENITY_VIDEO_TITLES,
    ],
    faqAmenities: [
      "Horizon Edge Lagoon",
      "Aromatherapy Jacuzzi",
      "Lagoon Cabanas",
      "Wet Deck",
      "Sunrise Bar",
      "Outdoor Lounge",
      "Mist Garden",
      "Little's Lagoon",
      "Splash Grove",
      "Little Explorer's Hub",
      "Swings Garden",
      "BBQ Deck",
      "Sculpted Terrain",
      "Glow Track Run",
      "Multipurpose Court",
      "Palm Waterfall Feature",
      "Buffer Planting",
      "Table Tennis Zone",
      "Sunset Cinema Lawn",
      "Seating Planter",
      "Heated Stone Loungers",
      "Stargaze Grove",
      "Fire Ring Retreat",
      "Hammock Library",
      "Zen Lawn",
      "Floating Garden",
      "Prestige One Fitness",
      "Sky Climb",
      "Teens Hub - Ping Pong",
      "Teens Hub - Foosball Table",
      "Sculpture Terrace",
      "Raised Planters",
      "Shower Stalls",
      "Cloudtop Juice Bar",
      "Casual Sky Lounge",
      "City View Work Area",
      "Panorama Music Nook",
      "Infinity Skyline Pool",
      "Infinity Wet Deck",
      "Sky Jacuzzi",
      "Pool Cabanas",
      "Palm Planters",
    ],
    amenityImages: [
      `${HILTON_AMENITY_GALLERY_ROOT}/13-BBQ-Zone- Hilton Residences DMC.webp`,
      `${HILTON_AMENITY_GALLERY_ROOT}/5-Outdoor-Gym- Hilton Residences DMC.webp`,
      `${HILTON_AMENITY_GALLERY_ROOT}/8-Game-Area- Hilton Residences DMC.webp`,
      `${HILTON_AMENITY_GALLERY_ROOT}/3-SUNSET-CINEMA-LAWN- Hilton Residences DMC.webp`,
      `${HILTON_AMENITY_GALLERY_ROOT}/9-Kids-Area- Hilton Residences DMC.webp`,
      `${HILTON_AMENITY_GALLERY_ROOT}/2-Pool-View- Hilton Residences DMC.webp`,
      `${HILTON_AMENITY_GALLERY_ROOT}/14-ALFRESCO-LOUNGE- Hilton Residences DMC.webp`,
      `${HILTON_AMENITY_GALLERY_ROOT}/4-Terrace- Hilton Residences DMC.webp`,
      `${HILTON_AMENITY_GALLERY_ROOT}/2-Facade 7- Hilton Residences DMC.webp`,
      ...HILTON_AMENITY_VIDEO_FILES.map((file) => `${HILTON_AMENITY_VIDEO_ROOT}/${file}`),
    ],
    nearby: [
      { name: "Downtown Dubai", time: "15 min" },
      { name: "Dubai International Airport", time: "15 min" },
      { name: "Burj Khalifa and Dubai Mall", time: "15 min" },
      { name: "Mall of the Emirates", time: "20 min" },
      { name: "Palm Jumeirah", time: "25 min" },
      { name: "Dubai Marina", time: "25 min" },
    ],
    schools: ["New Academy School", "Ambassador School", "GEMS Legacy School"],
    hospitals: ["International Modern Hospital", "Aster Hospital Mankhool", "Rashid Hospital"],
    faqItems: [
      {
        q: "What is Hilton Residences Dubai Maritime City?",
        a: "Hilton Residences Dubai Maritime City is a waterfront branded residential development by Prestige One, designed around elegant waterfront living, thoughtful amenities and the trusted Hilton name.",
      },
      {
        q: "What are the unit types?",
        a: "The collection includes one-bedroom residences, two-bedroom residences, two-bedroom residences with a maid's room, three-bedroom residences, and two-, three- and five-bedroom penthouses.",
      },
      {
        q: "What amenities are included?",
        a: "Residents have access to more than 45 amenities across four dedicated levels: the podium paradise, wellness deck, living deck and rooftop. Highlights include the BBQ Garden, Prestige One Fitness, BBQ Deck, Cinema Lawn, Kids Play Area, Infinity Swimming Pool, Casual Sky Lounge and City View Work Area.",
      },
      {
        q: "How well connected is Dubai Maritime City?",
        a: "Downtown Dubai, Burj Khalifa, Dubai Mall and Dubai International Airport are approximately 15 minutes away. Mall of the Emirates is approximately 20 minutes away, while Palm Jumeirah and Dubai Marina are approximately 25 minutes away.",
      },
      {
        q: "Which schools and hospitals are near Hilton Residences?",
        a: "Nearby schools include New Academy School, Ambassador School and GEMS Legacy School. Nearby healthcare options include International Modern Hospital, Aster Hospital Mankhool and Rashid Hospital.",
      },
      {
        q: "What is the payment plan?",
        a: "The payment plan is 20% on booking, 40% during construction and 40% on handover.",
      },
    ],
  },
  "fauchon-residences-by-prestige-one": {
    status: "Now Selling",
    hero: `${V2}/fauchon/fauchon-banner.webp`,
    introImage: "/assets/project-featured-images/fauchon/fauchon-banner.webp",
    originalAmenityImages: true,
    closingTitle: "Live the FAUCHON art de vivre",
    closingImage: "/assets/project-featured-images/fauchon/fauchon-banner.webp",
    gallery: [
      `${V2}/fauchon/fauchon-banner.webp`,
      `${V2}/fauchon/fauchon-day-view.webp`,
      `${V2}/fauchon/fauchon-banner-x.webp`,
    ],
    overview: [
      "FAUCHON Résidences brings the world of FAUCHON into everyday living, combining Parisian heritage with contemporary residences in Dubai. From refined interiors to signature experiences, every detail reflects the character of the brand.",
    ],
    highlights: [
      "The first FAUCHON branded residences in the world.",
      "Parisian art-de-vivre life-styles and interiors.",
      "Signature FAUCHON gastronomy on your doorstep",
    ],
    amenities: [
      "Co-Working Zone",
      "Digital Library",
      "Podcast Nook",
      "The Infinity Oasis",
      "Poolside Retreat",
      "BBQ Garden",
      "Prestige Owners’ Lounge",
      "Prestige One Fitness",
    ],
    faqAmenities: [
      "Co-Working Zone",
      "Digital Library",
      "Podcast Nook",
      "The Infinity Oasis",
      "Poolside Retreat",
      "BBQ Garden",
      "Prestige Owners’ Lounge",
      "Prestige One Fitness",
      "The Little Oasis",
      "Sun Retreat Deck",
      "Fauchon Gourmet Bar",
      "Prestige Yoga Retreat",
      "Grill Pavilion",
      "Prestige Yoga",
      "Outdoor Fitness Deck",
      "Floating Cinema",
      "Social Garden",
      "The Water Cascade",
      "Grand Lobby",
      "Entrance Lounge",
      "Lift Lobby",
      "Gourmet Lounge",
      "Social Seating Lounge",
      "Dining Lounge",
      "Culinary Kitchen",
      "Executive Suite",
      "Relaxation Area",
      "The Reading Atelier",
      "Gentlemen’s Washroom",
      "Ladies’ Washroom",
    ],
    amenityImages: [
      `${FAUCHON_AMENITY_ROOT}/01X644LUKSPICJUGHV3ND3QGIYDM4QQEMM.png`,
      `${FAUCHON_AMENITY_ROOT}/gallery/12-amenity-multipurpose-hall.webp`,
      `${FAUCHON_AMENITY_ROOT}/gallery/14-amenity-residents-lounge.webp`,
      `${FAUCHON_AMENITY_ROOT}/gallery/02-exterior-pool.webp`,
      `${FAUCHON_AMENITY_ROOT}/gallery/06-exterior-private-pool.webp`,
      `${FAUCHON_AMENITY_ROOT}/gallery/04-exterior-rooftop-dining.webp`,
      `${FAUCHON_AMENITY_ROOT}/01X644LUOLSFSKRVS5QVGJ4DFVTDQV4X4E.png`,
      `${FAUCHON_AMENITY_ROOT}/gallery/07-exterior-gym.webp`,
    ],
  },
  "sanctuary-residences-by-prestige-one": {
    status: "Now Selling",
    hero: `${V2}/sanctuary/sanctuary-residential-exterior-view.webp`,
    introImage: `${SANCTUARY_AMENITY_ROOT}/sanctuary-aprtment.webp`,
    closingTitle: "Find your sanctuary in Meydan",
    closingImage: `/assets/images/v3/project-amenities/Sanctuary/ras-al-khor-wildlife.webp`,
    originalAmenityImages: true,
    overview: [
      "Sanctuary Residences by Prestige One brings serene living and sophisticated design together in Meydan Horizon, with panoramic views towards Ras Al Khor Wildlife Sanctuary and the Dubai skyline.",
      "The address combines a peaceful setting with convenient access to Business Bay, Downtown Dubai, DIFC and Dubai International Airport.",
      "A collection of one-, two- and three-bedroom residences is complemented by wellness, leisure and family amenities across the Living Deck on Level 9 and the Sky Garden on Level 21.",
    ],
    highlights: [
      "Views of Ras Al Khor Wildlife Sanctuary and the Dubai skyline",
      "10 minutes to Business Bay and 12 minutes to Downtown Dubai",
      "Living Deck on Level 9 and Sky Garden on Level 21",
      "One-, two- and three-bedroom residences",
    ],
    amenities: [
      "BBQ Garden",
      "Prestige One Fitness",
      "Spa",
      "Cinema Lawn",
      "Outdoor Kids' Play Area",
      "Infinity Swimming Pool",
      "Observation Deck",
      "Serenity Garden",
      "Indoor Kids Play Area",
    ],
    faqAmenities: [
      "Kids Play Area with Water Features",
      "Prestige One Fitness",
      "Spa",
      "Observation Deck",
      "Outdoor Cinema",
      "Waterfall Feature and Sunken Island Pool",
      "Kids Pool",
      "Serenity Garden",
      "Mini Picnic Park",
      "Outdoor Spa and Relaxation Pool",
      "Relaxation Area Park",
      "Tranquility Seating with Bonsai Trees",
      "BBQ Area",
      "Jacuzzi",
      "Skylight Infinity Pool",
    ],
    amenityImages: [
      `${SANCTUARY_GALLERY_ROOT}/Rooftop-FLoor-Barbeque.webp`,
      `${SANCTUARY_GALLERY_ROOT}/8.-Residential-Amenities---Gym---Level-9---Option-2.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Residential-Amenities---Spa---Roof-Level.webp`,
      `${SANCTUARY_GALLERY_ROOT}/10.-Residential-Amenities---Cinema---Level-9.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Kids-Play-Area.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Rooftop-Pool.webp`,
      `${SANCTUARY_GALLERY_ROOT}/RoofTop-Floor-Sitting-Area.webp`,
      `${SANCTUARY_GALLERY_ROOT}/9th-floor-water-feature.webp`,
      `${SANCTUARY_GALLERY_ROOT}/indoor-kids-area.webp`,
    ],
    paymentPlan: [
      { label: "On booking", value: "20%" },
      { label: "During construction", value: "45%" },
      { label: "On completion", value: "35%" },
    ],
    nearby: [
      { name: "Business Bay", time: "10 min" },
      { name: "Downtown Dubai", time: "12 min" },
      { name: "DIFC", time: "15 min" },
      { name: "Dubai International Airport", time: "18 min" },
      { name: "Dubai Design District", time: "20 min" },
      { name: "Dubai Marina", time: "25 min" },
    ],
    schools: [
      "North London Collegiate School Dubai",
      "Hartland International School",
      "GEMS Wellington Academy - Al Khail",
    ],
    hospitals: ["Mediclinic City Hospital", "American Hospital Dubai", "Fakeeh University Hospital"],
    faqItems: [
      {
        q: "What is Sanctuary Residences by Prestige One?",
        a: "Sanctuary Residences is a residential development in Meydan Horizon, created around serene living, sophisticated design and views towards Ras Al Khor Wildlife Sanctuary and the Dubai skyline.",
      },
      {
        q: "What are the unit types?",
        a: "The development includes 71 one-bedroom residences from 655.3 to 1,543 sq ft, 49 two-bedroom residences from 1,042.9 to 2,561.3 sq ft, and eight three-bedroom residences from 2,069.8 to 2,088 sq ft.",
      },
      {
        q: "What amenities are included?",
        a: "Amenities are arranged across the Living Deck on Level 9 and Sky Garden on Level 21. Highlights include Prestige One Fitness, an outdoor cinema, kids' play and pool areas, an observation deck, serenity garden, BBQ area, jacuzzi and skylight infinity pool.",
      },
      {
        q: "How well connected is Sanctuary Residences?",
        a: "Business Bay is approximately 10 minutes away, Downtown Dubai 12 minutes, DIFC 15 minutes and Dubai International Airport 18 minutes away.",
      },
      {
        q: "Which schools and hospitals are near Sanctuary Residences?",
        a: "Nearby education options include North London Collegiate School Dubai, Hartland International School and GEMS Wellington Academy - Al Khail. Healthcare options include Mediclinic City Hospital, American Hospital Dubai and Fakeeh University Hospital.",
      },
      {
        q: "What is the payment plan?",
        a: "The 65/35 payment plan begins with 20% on booking, followed by 45% across construction milestones and 35% on completion.",
      },
    ],
  },
  "sanctuary-hive-by-prestige-one": {
    status: "Now Selling",
    introImage: `${V2}/sanctuary/sanctuary-hive-2.webp`,
    closingTitle: "Give your business room to breathe",
    closingImage: `${SANCTUARY_HIVE_GALLERY_ROOT}/sanctuary-hive-exterior-evening.webp`,
    originalAmenityImages: true,
    overview: [
      "Sanctuary Hive by Prestige One is a business hub in Meydan Horizon, surrounded by the calm of Ras Al Khor Wildlife Sanctuary and connected to the pulse of Dubai.",
      "Its sculpted glass facade creates a dialogue between progress and peace, bringing natural light, clarity and balance into office environments designed for focused, productive work.",
      "A dedicated Coworking Forum combines professional, social and wellbeing spaces so ideas, collaboration and everyday business can flow naturally.",
    ],
    highlights: [
      "Business hub overlooking Ras Al Khor Wildlife Sanctuary",
      "10 minutes to Business Bay and 12 minutes to Downtown Dubai",
      "Ground floor, two podium floors, Coworking Forum and office floors",
      "Work, collaboration, fitness and wellbeing spaces in one address",
    ],
    amenities: [
      "Prestige One Fitness",
      "Spa",
      "Private Cinema",
      "Outdoor Kids' Play Area",
      "Rooftop Barbecue Area",
      "Rooftop Sitting Area",
      "Rooftop Pool",
      "Padel Court",
      "Restroom",
    ],
    amenityImages: [
      `${SANCTUARY_GALLERY_ROOT}/8.-Residential-Amenities---Gym---Level-9---Option-2.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Residential-Amenities---Spa---Roof-Level.webp`,
      `${SANCTUARY_GALLERY_ROOT}/10.-Residential-Amenities---Cinema---Level-9.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Kids-Play-Area.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Rooftop-FLoor-Barbeque.webp`,
      `${SANCTUARY_GALLERY_ROOT}/RoofTop-Floor-Sitting-Area.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Rooftop-Pool.webp`,
      `${SANCTUARY_GALLERY_ROOT}/sanctuary-hive-padel.webp`,
      `${SANCTUARY_HIVE_GALLERY_ROOT}/restroom.webp`,
    ],
    paymentPlan: [
      { label: "On booking", value: "20%" },
      { label: "During construction", value: "45%" },
      { label: "On completion", value: "35%" },
    ],
    nearby: [
      { name: "Business Bay", time: "10 min" },
      { name: "Downtown Dubai", time: "12 min" },
      { name: "DIFC", time: "15 min" },
      { name: "Dubai Design District", time: "15 min" },
      { name: "Dubai International Airport", time: "18 min" },
      { name: "Dubai Marina", time: "25 min" },
    ],
    schools: [
      "North London Collegiate School Dubai",
      "Hartland International School",
      "GEMS Wellington Academy - Al Khail",
    ],
    hospitals: ["Mediclinic City Hospital", "American Hospital Dubai", "Fakeeh University Hospital"],
    faqItems: [
      {
        q: "What is Sanctuary Hive by Prestige One?",
        a: "Sanctuary Hive is a commercial office development in Meydan Horizon, created as a calm, connected business hub beside Ras Al Khor Wildlife Sanctuary.",
      },
      {
        q: "What workspace types are available?",
        a: "The development offers commercial office floors supported by shared coworking, collaboration, social and wellbeing spaces.",
      },
      {
        q: "What amenities are included?",
        a: "The amenity programme includes Prestige One Fitness, a private cinema, kids play area, rooftop barbecue and sitting areas, rooftop pool, padel court and restroom facilities.",
      },
      {
        q: "How well connected is Sanctuary Hive?",
        a: "Business Bay is approximately 10 minutes away, Downtown Dubai 12 minutes, DIFC and Dubai Design District 15 minutes, Dubai International Airport 18 minutes and Dubai Marina 25 minutes away.",
      },
      {
        q: "Which schools and hospitals are near Sanctuary Hive?",
        a: "Nearby education options include North London Collegiate School Dubai, Hartland International School and GEMS Wellington Academy - Al Khail. Healthcare options include Mediclinic City Hospital, American Hospital Dubai and Fakeeh University Hospital.",
      },
      {
        q: "What is the payment plan?",
        a: "The 65/35 payment plan begins with 20% on booking, followed by 45% across construction milestones and 35% on completion.",
      },
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
const FAUCHON_V3_GALLERY = `${FAUCHON_AMENITY_ROOT}/gallery`;
function galleryAt(root: string, files: string[]): string[] {
  return files.map((file) => `${root}/${file}`);
}
function gal(slug: string, files: string[]): string[] {
  return galleryAt(`${GAL}/${slug}`, files);
}
const galleryData: Record<string, string[]> = {
  "berkeley-square-north": galleryAt(BERKELEY_NORTH_GALLERY_ROOT, BERKELEY_NORTH_GALLERY_FILES),
  "berkeley-square-south": [
    BERKELEY_SOUTH_HERO_IMAGE,
    BERKELEY_SOUTH_OVERVIEW_IMAGE,
    ...galleryAt(BERKELEY_NORTH_GALLERY_ROOT, BERKELEY_NORTH_GALLERY_FILES),
  ],
  "coastal-haven-by-prestige-one": galleryAt(COASTAL_HAVEN_GALLERY_ROOT, COASTAL_HAVEN_GALLERY_FILES),
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
  "golf-residences-by-prestige-one": galleryAt(GOLF_AMENITY_GALLERY_ROOT, GOLF_GALLERY_FILES),
  "hilton-residences-dubai-maritime-city": galleryAt(HILTON_AMENITY_GALLERY_ROOT, [
    "1-hilton-1.webp",
    "2-Pool-View- Hilton Residences DMC.webp",
    "3-SUNSET-CINEMA-LAWN- Hilton Residences DMC.webp",
    "4-Terrace- Hilton Residences DMC.webp",
    "5-Outdoor-Gym- Hilton Residences DMC.webp",
    "6-Facade 8- Hilton Residences DMC.webp",
    "7-Facade 9- Hilton Residences DMC.webp",
    "8-Game-Area- Hilton Residences DMC.webp",
    "9-Kids-Area- Hilton Residences DMC.webp",
    "11-Facade 3- Hilton Residences DMC.webp",
    "12-Facade 2- Hilton Residences DMC.webp",
    "13-BBQ-Zone- Hilton Residences DMC.webp",
    "14-ALFRESCO-LOUNGE- Hilton Residences DMC.webp",
    "15-Penthouse_Living- Hilton Residences DMC.webp",
    "16-Penthouse 3BED_M-Bathroom- Hilton Residences DMC.webp",
    "18-1BED_Bedroom-Hilton-Residences-DMC.webp",
    "19-2B-+-M-Bedroom_- Hilton Residences DMC.webp",
    "20-2BED_Living-Dining-Kitchen- Hilton Residences DMC.webp",
    "21-3BR_Living-Dining-kitchen_V2- Hilton Residences DMC.webp",
    "22-Main-Lobby- Hilton Residences DMC.webp",
  ]),
  "luxe-villa-by-prestige-one": galleryAt(LUXE_VILLA_GALLERY_ROOT, LUXE_VILLA_GALLERY_FILES),
  "luxury-canal-residences-by-prestige-one": galleryAt(LUXURY_CANAL_GALLERY_ROOT, LUXURY_CANAL_GALLERY_FILES),
  "parkway-by-prestige-one": galleryAt(PARKWAY_GALLERY_ROOT, PARKWAY_GALLERY_FILES),
  "sanctuary-residences-by-prestige-one": galleryAt(SANCTUARY_GALLERY_ROOT, SANCTUARY_GALLERY_FILES),
  "sanctuary-hive-by-prestige-one": SANCTUARY_HIVE_GALLERY,
  "seascape-villa": gal("seascape-villa", [
    "seascape2.jpg",
    "seascape-ext2.jpg",
    "seascape-ext4.jpg",
    "seascape-ext5.jpg",
  ]),
  "seaside-by-prestige-one": galleryAt(SEASIDE_GALLERY_ROOT, SEASIDE_GALLERY_FILES),
  "the-boulevard-by-prestige-one": galleryAt(BOULEVARD_GALLERY_ROOT, BOULEVARD_GALLERY_FILES),
  "the-one-by-prestige-one": galleryAt(THE_ONE_GALLERY_ROOT, THE_ONE_GALLERY_FILES),
  "the-residence-by-prestige-one": galleryAt(RESIDENCE_GALLERY_ROOT, RESIDENCE_GALLERY_FILES),
  "vista-by-prestige-one": galleryAt(VISTA_GALLERY_ROOT, VISTA_GALLERY_FILES),
  "waterway-by-prestige-one": galleryAt(WATERWAY_GALLERY_ROOT, WATERWAY_GALLERY_FILES),
};

const AMENITY_RENDER_PATTERNS: Array<[RegExp, RegExp]> = [
  [/pool|swim|spa/i, /pool|spa|oasis/i],
  [/fitness|gym/i, /fitness|gym/i],
  [/garden|landscap|podium/i, /garden|terrace|podium|landscap/i],
  [/concierge|security|reception/i, /reception|lobby|entrance|arrival/i],
  [/parking|garage/i, /parking|garage|building|exterior/i],
  [/play|children|kids/i, /kids|play|multipurpose/i],
  [/lounge|co-working|coworking/i, /residents-lounge|lounge|majlis/i],
  [/retail|dining|shop/i, /dining|rooftop|retail|kitchen/i],
  [/cinema|theatre|theater/i, /cinema|theatre|theater/i],
  [/running|jogging|track/i, /outdoor|gym|exterior/i],
  [/sports|court|padel|tennis/i, /sports|court|gym|exterior/i],
  [/bbq|barbecue|grill/i, /bbq|grill|rooftop|dining/i],
];

function resolveAmenityImages(amenities: string[], gallery: string[]): string[] {
  if (!gallery.length) return [];

  return amenities.map((amenity, index) => {
    const pattern = AMENITY_RENDER_PATTERNS.find(([labelPattern]) => labelPattern.test(amenity))?.[1];
    return gallery.find((image) => pattern?.test(image)) ?? gallery[index % gallery.length]!;
  });
}

interface ProjectOverviewContent {
  title: string;
  paragraphs: string[];
  features: ProjectOverviewFeature[];
}

const PROJECT_OVERVIEW_CONTENT: Partial<Record<string, ProjectOverviewContent>> = {
  "fauchon-residences-by-prestige-one": {
    title: "A Parisian Icon. Now a Dubai Address.",
    paragraphs: ["FAUCHON Résidences brings the world of FAUCHON into everyday living, combining Parisian heritage with contemporary residences in Dubai. From refined interiors to signature experiences, every detail reflects the character of the brand."],
    features: [
      { title: "The First", text: "FAUCHON branded residences in the world." },
      { title: "Parisian Heritage", text: "Inspired by a legacy dating back to 1886." },
      { title: "Signature Living", text: "FAUCHON hospitality, design, and gastronomy brought home." },
    ],
  },
  "sanctuary-residences-by-prestige-one": {
    title: "Nature in View. Dubai Within Reach.",
    paragraphs: ["Sanctuary Residences brings calm, contemporary living to Meydan Horizon, with views towards Ras Al Khor Wildlife Sanctuary and the Dubai skyline. Thoughtfully designed residences are complemented by wellness, leisure, and family spaces across the Living Deck and Sky Garden."],
    features: [
      { title: "Nature Views", text: "Ras Al Khor Wildlife Sanctuary and Dubai skyline." },
      { title: "Connected Location", text: "Easy access to Business Bay, Downtown Dubai, DIFC, and DXB." },
      { title: "Elevated Amenities", text: "Living Deck on Level 9 and Sky Garden on Level 21." },
      { title: "1-3 Bedroom Residences", text: "Designed for modern everyday living." },
    ],
  },
  "sanctuary-hive-by-prestige-one": {
    title: "Work, In a Better Rhythm.",
    paragraphs: ["Sanctuary Hive brings modern offices to Meydan Horizon, with views of Ras Al Khor Wildlife Sanctuary and easy access to key areas of Dubai. It combines smart workspaces, shared areas, wellness, and everyday comfort to create a better place to work and grow."],
    features: [
      { title: "Work With a View", text: "Offices overlooking Ras Al Khor Wildlife Sanctuary." },
      { title: "Connected Location", text: "Easy access to Business Bay and Downtown Dubai." },
      { title: "Space to Connect", text: "Shared spaces for meetings, ideas, and collaboration." },
      { title: "More to Your Workday", text: "Fitness, wellness, and everyday amenities in one place." },
    ],
  },
  "hilton-residences-dubai-maritime-city": {
    title: "Hilton Living. Every Day.",
    paragraphs: ["Hilton Residences Dubai Maritime City brings Hilton's world-class hospitality to waterfront living in Dubai. With sea and skyline views, thoughtful design, and a wide range of amenities, every day is shaped around comfort and ease."],
    features: [
      { title: "Hilton Hospitality", text: "World-class hospitality and services at home." },
      { title: "Gold Status", text: "Hilton Honors Gold Status for owners." },
      { title: "45+ Amenities", text: "Lifestyle, wellness, and leisure across four dedicated levels." },
      { title: "Waterfront Living", text: "Sea and Dubai skyline views from Dubai Maritime City." },
    ],
  },
  "berkeley-square-north": {
    title: "Made for Everyday Life.",
    paragraphs: ["Berkeley Square North brings comfortable, modern living to Jumeirah Village Circle. Thoughtful homes, green spaces, and a wide range of amenities come together to make everyday life easier, more active, and more enjoyable."],
    features: [
      { title: "Homes for Every Lifestyle", text: "Studios to three-bedroom residences." },
      { title: "Space to Unwind", text: "Pool, courtyard, rooftop, and landscaped areas." },
      { title: "Space to Connect", text: "Clubhouse and social spaces made for time together." },
      { title: "More to Do", text: "Fitness, sports, and recreation for every day." },
    ],
  },
  "berkeley-square-south": {
    title: "More Ways to Enjoy Every Day.",
    paragraphs: ["Berkeley Square South brings comfortable living and everyday experiences together in Jumeirah Village Circle. From relaxing by the pool to spending time outdoors, its homes and amenities are designed around an active and enjoyable lifestyle."],
    features: [
      { title: "Relax & Unwind", text: "Courtyard pool and floating cabanas." },
      { title: "Time Together", text: "Clubhouse, outdoor cinema, and garden BBQ area." },
      { title: "Stay Active", text: "Fitness, sports, and wellness spaces." },
      { title: "Homes for Every Lifestyle", text: "Studios to three-bedroom residences." },
    ],
  },
  "luxury-canal-residences-by-prestige-one": {
    title: "Life, Closer to the Water.",
    paragraphs: ["Luxury Canal Residences brings calm waterfront living to Dubai Islands. With open views, bright homes, and spaces designed for comfort, it offers a relaxed lifestyle with easy access to the city."],
    features: [
      { title: "Waterfront Living", text: "Peaceful canal and open water views." },
      { title: "Space to Unwind", text: "Wellness, leisure, and family amenities." },
      { title: "Homes for Everyday Life", text: "One-, two-, and three-bedroom residences and penthouses." },
      { title: "Connected to Dubai", text: "Easy access to Downtown Dubai and Dubai International Airport." },
    ],
  },
  "coastal-haven-by-prestige-one": {
    title: "Calm by the Coast.",
    paragraphs: ["Coastal Haven brings relaxed coastal living to Dubai Islands, with bright homes, open views, and spaces designed for comfort. A wide range of wellness, leisure, family, and social amenities makes everyday life feel easy and complete."],
    features: [
      { title: "Coastal Living", text: "Open views and a calm setting by the water." },
      { title: "Space to Relax", text: "Wellness, leisure, and poolside amenities." },
      { title: "Made for Everyday Life", text: "Family and social spaces for time together." },
      { title: "Spacious Homes", text: "One-, two-, and three-bedroom residences and penthouses." },
    ],
  },
  "the-boulevard-by-prestige-one": {
    title: "Made for Modern Living.",
    paragraphs: ["The Boulevard brings modern living to DLRC, with comfortable homes and a wide range of spaces for wellness, leisure, creativity, and time together."],
    features: [
      { title: "Homes for Everyday Life", text: "Studios, one-, and two-bedroom residences." },
      { title: "Wellness & Fitness", text: "Gym, yoga, pools, and spaces to relax." },
      { title: "More Ways to Enjoy the Day", text: "Cinema, gaming, creative, and social spaces." },
      { title: "From Podium to Rooftop", text: "Amenities designed for leisure and everyday life." },
    ],
  },
  "parkway-by-prestige-one": {
    title: "Closer to Nature. Closer to the City.",
    paragraphs: ["Parkway brings nature and modern living together in Meydan Horizon, with views of the crystal lagoon, park, and Dubai skyline. Its nature-inspired design brings together comfortable homes, green spaces, leisure, and wellness."],
    features: [
      { title: "Open Views", text: "Crystal lagoon, park, and Dubai skyline views." },
      { title: "Nature-Inspired Design", text: "Architecture inspired by the natural surroundings." },
      { title: "Space to Enjoy", text: "Gardens, leisure, and social spaces." },
      { title: "Wellness on Level 21", text: "A dedicated wellness destination on the 21st floor." },
    ],
  },
  "golf-residences-by-prestige-one": {
    title: "Life with the Golf Course in View.",
    paragraphs: ["Golf Residences brings spacious living to Dubai Sports City, with uninterrupted views across the championship golf course. Large homes, active spaces, and a rooftop wellness deck create a lifestyle made for comfort, movement, and time to unwind."],
    features: [
      { title: "Golf Course Views", text: "Uninterrupted views across the championship greens." },
      { title: "Spacious Homes", text: "Two- and three-bedroom residences." },
      { title: "Active Living", text: "An activity-rich podium for recreation and everyday life." },
      { title: "Rooftop Wellness", text: "A dedicated rooftop deck for wellness and leisure." },
    ],
  },
  "the-one-by-prestige-one": {
    title: "Business, Made Better.",
    paragraphs: ["The One brings modern workspaces to Barsha Heights, one of Dubai's most connected business areas. Flexible offices, meeting spaces, business lounges, fitness, and wellness come together to create a better place to work."],
    features: [
      { title: "Connected Location", text: "A business address in Barsha Heights." },
      { title: "Flexible Workspaces", text: "Office spaces designed for different business needs." },
      { title: "Space to Connect", text: "Meeting spaces and business lounges." },
      { title: "Work & Wellness", text: "Prestige Fitness, virtual golf, and spa pool." },
    ],
  },
  "seaside-by-prestige-one": {
    title: "Island Living, Open to the View.",
    paragraphs: ["Seaside brings calm island living to Dubai Islands, with panoramic waterfront views, natural light, and generous balconies. Modern residences and outdoor spaces come together to create a relaxed way of living by the water."],
    features: [
      { title: "Panoramic Waterfront Views", text: "Open views across the surrounding seascape." },
      { title: "Light & Open Space", text: "Floor-to-ceiling windows and generous balconies." },
      { title: "Space to Unwind", text: "Pool, cinema, and landscaped lawns." },
      { title: "Island Living", text: "A calm setting with convenient city connections." },
    ],
  },
  "waterway-by-prestige-one": {
    title: "Calm, Designed Around Water.",
    paragraphs: ["The Waterway brings calm waterfront living to Meydan Horizon, beside the crystal lagoons and close to Dubai's key destinations. Japanese-inspired interiors, spacious homes, and relaxing social spaces create a simple and peaceful way of living."],
    features: [
      { title: "Crystal Lagoon Living", text: "A waterfront setting beside the crystal lagoons." },
      { title: "Japanese-Inspired Design", text: "Minimalist interiors designed around simplicity and balance." },
      { title: "Rooftop Relaxation", text: "Rooftop pool, sunset area, and water-feature lounges." },
      { title: "Close to the City", text: "Stay close to Downtown while living by the water." },
    ],
  },
  "vista-by-prestige-one": {
    title: "Golf Views. City in Sight.",
    paragraphs: ["Vista brings contemporary living to Dubai Sports City, with panoramic views across The Els Club golf course and the Dubai Marina skyline. Designed by LACASA, the residences combine refined design with rooftop spaces for leisure, wellness, sport, and family time."],
    features: [
      { title: "Panoramic Views", text: "The Els Club golf course and Dubai Marina skyline." },
      { title: "Designed by LACASA", text: "Contemporary architecture with a refined character." },
      { title: "Rooftop Living", text: "Spaces for leisure, wellness, and sport." },
      { title: "Homes for Everyday Life", text: "Studios and one-, two-, and three-bedroom residences." },
    ],
  },
};

function resolveProjectType(slide: ProjectSource): ProjectType {
  if (slide.type) return slide.type;
  if (slide.category === "commercial") return "Commercial";
  if (slide.unitTypes === "Villa" || /villa/i.test(slide.title)) return "Villa";
  return "Residences";
}

function toProject(slide: ProjectSource): Project {
  const { category } = slide;
  const slug = slide.slug ?? slugify(slide.title);
  const e = enrichment[slug] ?? {};
  const overviewContent = PROJECT_OVERVIEW_CONTENT[slug];
  // real gallery (from copied renders) drives both the gallery and the cover
  const realGallery = galleryData[slug];
  const imageOnlyHero = IMAGE_ONLY_HERO_PROJECT_IDS.has(slide.id);
  const hero = e.hero ?? (imageOnlyHero ? slide.image : realGallery ? realGallery[0]! : slide.image);
  const projectGallery = realGallery ?? e.gallery ?? [hero];
  const amenities = e.amenities ?? DEFAULT_AMENITIES;
  return {
    slug,
    title: slide.title,
    location: slide.location,
    type: resolveProjectType(slide),
    category,
    hasDetailPage: slide.hasDetailPage ?? category !== "upcoming",
    status: e.status ?? CATEGORY_DEFAULT_STATUS[category],
    tagline: slide.description,
    description: slide.description,
    image: slide.image,
    hero,
    registrationUrl: slide.registrationUrl,
    introImage: e.introImage,
    gallery: projectGallery,
    overview:
      overviewContent?.paragraphs ?? e.overview ?? [
        slide.description,
        `Set in ${slide.location}, ${slide.title} reflects the Prestige One approach - well-connected locations, architecture designed around real living, and quality you can rely on. Every residence is planned to make the everyday feel effortless.`,
        "Backed by in-house expertise and careful execution, it is an address built to hold its value and its appeal for years to come.",
      ],
    overviewTitle: overviewContent?.title,
    overviewFeatures: overviewContent?.features,
    highlights:
      e.highlights ?? [
        `A signature address in ${slide.location}`,
        "Designed and delivered by Prestige One Developments",
        "Considered architecture built for lasting value",
        "Premium finishes and thoughtful, liveable layouts",
      ],
    specs:
      e.specs ?? [
        { label: "Location", value: slide.location },
        { label: "Type", value: resolveProjectType(slide) },
        { label: "Configuration", value: slide.configuration ?? "Contact for Details" },
        { label: "Unit Types", value: slide.unitTypes ?? "Contact for Details" },
      ],
    amenities,
    showAmenitiesSection: e.showAmenitiesSection ?? true,
    faqAmenities: e.faqAmenities,
    faqItems: e.faqItems,
    amenityImages: e.amenityImages ?? resolveAmenityImages(amenities, projectGallery),
    originalAmenityImages: e.originalAmenityImages,
    paymentPlan: e.paymentPlan ?? DEFAULT_PAYMENT_PLAN,
    connectivity: e.connectivity ?? [],
    nearby: e.nearby ?? [],
    schools: e.schools ?? [],
    hospitals: e.hospitals ?? [],
    documents: e.documents ?? DEFAULT_DOCUMENTS,
    closingTitle: e.closingTitle,
    closingImage: e.closingImage,
    mapLocation: PROJECT_MAP_LOCATION_BY_ID[slide.id],
    video: imageOnlyHero
      ? undefined
      : PROJECT_HERO_VIDEO_BY_ID[slide.id] ?? `${PROJECT_VIDEO_ROOT}/prestigeone_corporate_video.mp4`,
  };
}

export const projects: Project[] = PROJECT_CATALOGUE.map(toProject);

export function getAllProjects(): Project[] {
  return projects;
}

export function getAmenityDisplayName(amenity: string): string {
  return /fitness|gym|hiit/i.test(amenity) ? "Prestige One Fitness" : amenity;
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
    category: project.category,
    hasDetailPage: project.hasDetailPage,
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
