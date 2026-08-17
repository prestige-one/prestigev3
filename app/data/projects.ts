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

interface ProjectSource extends Omit<DevelopmentSlide, "href"> {
  category: ProjectCategory;
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
    description: "Commercial spaces ideal for businesses seeking visibility and connectivity.",
    category: "commercial",
    type: "Commercial",
  },
  {
    id: "hilton-residences",
    image: "/assets/project-featured-images/sliders/hilton-1.webp",
    title: "Hilton Residences Dubai Maritime City",
    location: "Dubai Maritime City",
    description: "Waterfront living inspired by the Hilton way of life.",
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
    description: "Timeless architecture inspired by London living.",
    category: "residential",
    configuration: "2B+G+5+Roof",
    unitTypes: "Studio, 1-Bedroom, 2-Bedroom, 3-Bedroom",
  },
  {
    id: "berkeley-square-south",
    image: "/assets/project-featured-images/sliders/berkeley-south.webp",
    title: "Berkeley Square South",
    location: "Jumeirah Village Circle",
    description: "Where open spaces shape everyday living.",
    category: "residential",
    configuration: "2B+G+5+Roof",
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
    image: "/assets/project-featured-images/sliders/coastal-heaven.webp",
    title: "Coastal Haven by Prestige One",
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
    configuration: "G+2P+16+R",
    unitTypes: "Studio, 1-Bedroom, 2-Bedroom",
  },
  {
    id: "parkway",
    image: "/assets/project-featured-images/sliders/parkway.webp",
    title: "Parkway by Prestige One",
    location: "Meydan Horizon",
    description: "Nature-inspired living designed for balance.",
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
  },
  {
    id: "seaside",
    image: "/assets/project-featured-images/sliders/seaside.webp",
    title: "Seaside by Prestige One",
    location: "Dubai Islands",
    description: "A peaceful waterfront retreat.",
    category: "residential",
    configuration: "G+12",
    unitTypes: "1-Bedroom, 2-Bedroom, 3-Bedroom",
  },
  {
    id: "waterway",
    image: "/assets/project-featured-images/sliders/waterway.webp",
    title: "Waterway by Prestige One",
    location: "Meydan Horizon",
    description: "Serene living inspired by the water.",
    category: "residential",
    configuration: "G+3P+16+R",
    unitTypes: "1-Bedroom, 2-Bedroom",
  },
  {
    id: "vista",
    image: "/assets/project-featured-images/sliders/vista.webp",
    title: "Vista by Prestige One",
    location: "Dubai Sports City",
    description: "Contemporary residences designed around panoramic views.",
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
const GOLF_AMENITY_GALLERY_ROOT = "/assets/images/v3/project-amenities/golf-residences/gallery";
const GOLF_GALLERY_FILES = [
  "Golf Place- Exterior Hero.webp",
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
  "9th-floor-water-feature.webp",
  "10.-Residential-Amenities---Cinema---Level-9.webp",
  "11.-Residential-Amenities---Multipurpose-Room---Roof-Level.webp",
  "15.-1-&-2-Bedroom-Unit---Master-Bedroom.webp",
  "18.--3-Bedroom-Unit---Toilet-1.webp",
  "Kids-Play-Area.webp",
  "Rooftop-FLoor-Barbeque.webp",
  "RoofTop-Floor-Sitting-Area.webp",
  "Rooftop-Pool.webp",
];

// Per-project real content. Keyed by slug. Only flagships are fully enriched;
// everything else falls back to derived defaults below.
const enrichment: Record<string, ProjectEnrichment> = {
  "golf-residences-by-prestige-one": {
    status: "Now Selling",
    introImage: `${GOLF_AMENITY_GALLERY_ROOT}/Golf Place- Exterior Hero.webp`,
    closingTitle: "Live overlooking uninterrupted greens",
    closingImage: `${GOLF_AMENITY_GALLERY_ROOT}/Golf Place- cta.webp`,
    originalAmenityImages: true,
    overview: [
      "Golf Residences by Prestige One brings expansive contemporary living to the heart of Dubai Sports City, framed by uninterrupted views across the community's championship greens.",
      "The collection comprises spacious two- and three-bedroom residences, with two-bedroom homes starting from 1,294 sq ft and three-bedroom homes starting from 1,720 sq ft.",
      "Ground-floor arrival spaces, an activity-rich podium and a rooftop wellness deck create a complete lifestyle centred on recreation, connection and relaxed golf-course living.",
    ],
    highlights: [
      "Uninterrupted golf-course views in Dubai Sports City",
      "Two-bedroom residences from 1,294 sq ft",
      "Three-bedroom residences from 1,720 sq ft",
      "Anticipated completion in Q2 2027",
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
    schools: ["Victory Heights Primary School", "GEMS United School", "Renaissance School"],
    hospitals: ["Mediclinic Parkview Hospital", "NMC Royal Hospital DIP", "King's College Hospital Dubai Hills"],
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
        a: "Nearby schools include Victory Heights Primary School, GEMS United School and Renaissance School. Healthcare options include Mediclinic Parkview Hospital, NMC Royal Hospital DIP and King's College Hospital Dubai Hills.",
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
      "Waterfront living on Dubai Islands",
      "One-, two- and three-bedroom residences",
      "Floor-to-ceiling windows and expansive balconies",
      "Anticipated completion in Q4 2026",
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
    ],
    paymentPlan: [
      { label: "Down payment", value: "20%" },
      { label: "Quarterly", value: "5%" },
      { label: "At handover", value: "35%" },
    ],
    nearby: [
      { name: "Dubai Islands Mall", time: "1 min" },
      { name: "Souk Al Marfa", time: "5 min" },
      { name: "Dubai Islands Marina", time: "7 min" },
      { name: "Dubai International Airport", time: "16 min" },
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
        a: "Dubai Islands Mall is approximately one minute away, Souk Al Marfa five minutes, Dubai Islands Marina seven minutes and Dubai International Airport approximately 16 minutes away.",
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
      "FAUCHON Résidences brings the art de vivre of the storied Parisian maison to Dubai - branded residences where French elegance shapes every detail.",
      "From curated interiors to signature gastronomy, life at FAUCHON is designed around comfort, character and everyday luxury.",
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
      "Cinema Lawn",
      "Kids Play Area",
      "Infinity Swimming Pool",
      "Observation Deck",
      "Serenity Garden",
      "Relaxation Pool Jacuzzi",
    ],
    faqAmenities: [
      "Kids Play Area with Water Features",
      "Prestige One Fitness",
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
      `${SANCTUARY_GALLERY_ROOT}/10.-Residential-Amenities---Cinema---Level-9.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Kids-Play-Area.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Rooftop-Pool.webp`,
      `${SANCTUARY_GALLERY_ROOT}/RoofTop-Floor-Sitting-Area.webp`,
      `${SANCTUARY_GALLERY_ROOT}/9th-floor-water-feature.webp`,
      `${SANCTUARY_GALLERY_ROOT}/Rooftop-Pool.webp`,
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
  "sanctuary-residences-by-prestige-one": galleryAt(SANCTUARY_GALLERY_ROOT, SANCTUARY_GALLERY_FILES),
  "seascape-villa": gal("seascape-villa", [
    "seascape2.jpg",
    "seascape-ext2.jpg",
    "seascape-ext4.jpg",
    "seascape-ext5.jpg",
  ]),
  "seaside-by-prestige-one": galleryAt(SEASIDE_GALLERY_ROOT, SEASIDE_GALLERY_FILES),
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

function resolveProjectType(slide: ProjectSource): ProjectType {
  if (slide.type) return slide.type;
  if (slide.category === "commercial") return "Commercial";
  if (slide.unitTypes === "Villa" || /villa/i.test(slide.title)) return "Villa";
  return "Residences";
}

function toProject(slide: ProjectSource): Project {
  const { category } = slide;
  const slug = slugify(slide.title);
  const e = enrichment[slug] ?? {};
  // real gallery (from copied renders) drives both the gallery and the cover
  const realGallery = galleryData[slug];
  const hero = realGallery ? realGallery[0]! : (e.hero ?? slide.image);
  const projectGallery = realGallery ?? e.gallery ?? [hero];
  const amenities = e.amenities ?? DEFAULT_AMENITIES;
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
    gallery: projectGallery,
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
        { label: "Location", value: slide.location },
        { label: "Type", value: resolveProjectType(slide) },
        { label: "Configuration", value: slide.configuration ?? "Contact for Details" },
        { label: "Unit Types", value: slide.unitTypes ?? "Contact for Details" },
      ],
    amenities,
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
    video: PROJECT_HERO_VIDEO_BY_ID[slide.id] ?? `${PROJECT_VIDEO_ROOT}/prestigeone_corporate_video.mp4`,
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
