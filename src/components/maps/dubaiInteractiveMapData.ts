export type DubaiMapProject = {
  id: number;
  name: string;
  area: string;
  floors: number;
  lng: number;
  lat: number;
  desc: string;
  url?: string;
  /** Same card thumbnail used on the homepage's Our Portfolio grid (src/data/projects.ts). */
  image?: string;
};

export type DubaiMapLandmark = {
  name: string;
  type: "icon" | "metro" | "airport" | "leisure" | "business";
  icon: string;
  lng: number;
  lat: number;
};

export const CONFIG = {
  satelliteTiles: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  vectorTilesUrl: "https://tiles.openfreemap.org/planet",
  seaColor: "#0f8fc4",
  seaOpacity: 0.82,
  seaGlow: "#63d9e8",
  center: [55.24, 25.13] as [number, number],
  brand: "#f6f2ea",
  regionZoom: 12.2,
  focusZoom: 13.4,
  ringsKm: [1, 3, 5],
  overviewBearing: 0,
  overviewMinZoom: 11.2,
  overviewPitch: 58,
  focusPitch: 56,
};

export const AREAS: Record<string, [number, number]> = {
  "Jumeirah Gardens City": [55.282, 25.229],
  "Meydan Horizon": [55.302, 25.1655],
  "Dubai Maritime City": [55.283, 25.256],
  JVC: [55.2085, 25.058],
  "Dubai Islands": [55.3305, 25.2955],
  DLRC: [55.36, 25.099],
  "Dubai Sports City": [55.2205, 25.036],
  "Barsha Heights": [55.178, 25.099],
  "Palm Jumeirah": [55.139, 25.1115],
};

/**
 * `url` links back to the project's real detail page on this site (looked up
 * from `HEART_LOCATION_MARKERS` by name) so "Explore More" isn't a dead link.
 */
export const PROJECTS: DubaiMapProject[] = [
  {
    id: 1,
    name: "FAUCHON Résidences",
    area: "Jumeirah Gardens City",
    floors: 40,
    lng: 55.282,
    lat: 25.229,
    desc: "Prestige One Developments and FAUCHON Hospitality unite in Jumeirah Gardens City. Design integrity, French art de vivre, and skyline residences shaped for refined everyday living.",
    url: "/projects/fauchon-residences",
    image: "/assets/images/v2/project-featured-images/fauchon/fauchon-banner.webp",
  },
  {
    id: 2,
    name: "Sanctuary",
    area: "Meydan Horizon",
    floors: 25,
    lng: 55.2985,
    lat: 25.1672,
    desc: "Step into a more balanced Dubai lifestyle at Sanctuary by Prestige One, where modern living and commercial spaces come together in Meydan.",
    url: "/projects/sanctuary",
    image: "/assets/images/v2/project-featured-images/sanctuary/sanctuary-aprtment.webp",
  },
  {
    id: 3,
    name: "Hilton Residences",
    area: "Dubai Maritime City",
    floors: 45,
    lng: 55.283,
    lat: 25.256,
    desc: "Life at Hilton Residences by Prestige One is a balance of elegance and ease.",
    url: "/projects/hilton-residences-dubai-maritime-city",
    image: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
  },
  {
    id: 4,
    name: "Berkeley Square North",
    area: "JVC",
    floors: 12,
    lng: 55.2062,
    lat: 25.0602,
    desc: "Berkeley Square North, located in Jumeirah Village Circle, stands apart from the rest. Designed with inspiration from London's classic architecture, it favours clean lines.",
    url: "/projects/berkeley-square-north",
    image: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-North.webp",
  },
  {
    id: 5,
    name: "Berkeley Square South",
    area: "JVC",
    floors: 12,
    lng: 55.2112,
    lat: 25.0558,
    desc: "Positioned within Jumeirah Village Circle, Berkeley Square South brings together elegance and beautiful design.",
    url: "/projects/berkeley-square-south",
    image: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-South.webp",
  },
  {
    id: 6,
    name: "Luxury Canal Residences",
    area: "Dubai Islands",
    floors: 15,
    lng: 55.3282,
    lat: 25.2972,
    desc: "Luxury Canal Residences by Prestige One captures the rhythm of the waves in Dubai Islands, offering G+2P+12 canal-front living.",
    url: "/projects/luxury-canal-residences",
    image: "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp",
  },
  {
    id: 7,
    name: "Coastal Haven",
    area: "Dubai Islands",
    floors: 15,
    lng: 55.2854,
    lat: 25.3121,
    desc: "Coastal Haven by Prestige Harbour defines the new era of coastal living in Dubai Islands, with G+2P+12 waterfront elegance.",
    url: "/projects/coastal-haven",
    image: "/assets/images/v2/project-featured-images/coastal-haven/Coastal-Haven.webp",
  },
  {
    id: 8,
    name: "The Boulevard",
    area: "DLRC",
    floors: 18,
    lng: 55.36,
    lat: 25.099,
    desc: "The Boulevard by Prestige One brings bold and ambitious boulevard living to DLRC, rising 18 floors.",
    url: "/projects/the-boulevard-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp",
  },
  {
    id: 9,
    name: "Parkway",
    area: "Meydan Horizon",
    floors: 33,
    lng: 55.315,
    lat: 25.1605,
    desc: "Parkway by Prestige One is a nature-inspired sanctuary in Meydan Horizon, rising 33 floors amidst lush surroundings.",
    url: "/projects/parkway-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/parkway/parkway.webp",
  },
  {
    id: 10,
    name: "Golf Residences",
    area: "Dubai Sports City",
    floors: 23,
    lng: 55.2201,
    lat: 25.0428,
    desc: "Golf Residences by Prestige One is designed for active family living in Sports City, featuring 23 floors with contemporary residences.",
    url: "/projects/golf-residences-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/golf/The-Place-Banner.webp",
  },
  {
    id: 11,
    name: "The One",
    area: "Barsha Heights",
    floors: 15,
    lng: 55.178,
    lat: 25.099,
    desc: "The One by Prestige One is a commercial hub in Barsha Heights, designed for visionaries within a G+14 development.",
    url: "/projects/the-one-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/one/the-one.webp",
  },
  {
    id: 12,
    name: "Seaside",
    area: "Dubai Islands",
    floors: 13,
    lng: 55.283,
    lat: 25.3105,
    desc: "Seaside by Prestige One offers a retreat along the sea in Dubai Islands, with G+12 waterfront living.",
    url: "/projects/seaside-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp",
  },
  {
    id: 13,
    name: "The Waterway",
    area: "Meydan Horizon",
    floors: 20,
    lng: 55.314,
    lat: 25.162,
    desc: "The Waterway by Prestige One, featuring 20 floors and beautiful waterfront homes, brings the flow of water to life in Meydan Horizon.",
    url: "/projects/the-waterway-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp",
  },
  {
    id: 14,
    name: "Vista",
    area: "Dubai Sports City",
    floors: 16,
    lng: 55.2243,
    lat: 25.0401,
    desc: "Vista by Prestige One combines sleek architecture with panoramic golf views in Sports City, standing at G+15.",
    url: "/projects/vista-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/vista/vista.webp",
  },
  {
    id: 15,
    name: "The Residence",
    area: "JVC",
    floors: 6,
    lng: 55.2015,
    lat: 25.0682,
    desc: "The Residence by Prestige One offers modern luxury in a boutique G+5 low-rise setting in JVC.",
    url: "/projects/the-residence-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp",
  },
  {
    id: 16,
    name: "Luxe Villa",
    area: "Palm Jumeirah",
    floors: 3,
    lng: 55.1372,
    lat: 25.1132,
    desc: "Prestige is an inherent trait, not merely an ambition. It flows as naturally as the tide, defining every aspect of existence.",
    url: "/projects/luxe-villa-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/luxe-villa/luxe-villas.webp",
  },
  {
    id: 17,
    name: "Seascape Villa",
    area: "Palm Jumeirah",
    floors: 3,
    lng: 55.141,
    lat: 25.11,
    desc: "Explore your private escape into luxury at Seascape Villa by Prestige One, where the serene embrace of the sea welcomes you.",
    url: "/projects/seascape-villa-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/seascape/seascape.webp",
  },
];

export const CARD_GRADIENTS = [
  "linear-gradient(135deg,#2a1830,#4a2440)",
  "linear-gradient(135deg,#122036,#25405f)",
  "linear-gradient(135deg,#241a2e,#3d2a44)",
];

export const LM_ICONS: Record<string, string> = {
  tower: '<path d="M12 2.5 L12 5.5 M9.5 5.5 L14.5 5.5 L13.5 10 L14.5 21 L9.5 21 L10.5 10 Z M12 10 L12 21"/>',
  sail: '<path d="M5 21 L19 21 M17 21 C17 12 14 6 8 2.5 C11.5 9 12.5 15 12.5 21"/>',
  metro: '<rect x="6" y="4" width="12" height="12" rx="2.5"/><path d="M6 12 L18 12 M9.5 20 L7.5 16.5 M14.5 20 L16.5 16.5"/>',
  plane: '<path d="M2.5 13 L21.5 8.5 M2.5 13 L9 15 L11 20 L12.8 14 M9 15 L14 10"/>',
  bag: '<path d="M6 8 L18 8 L19 21 L5 21 Z M9 8 C9 4.2 15 4.2 15 8"/>',
  build: '<path d="M4 21 L4 9 L11 9 L11 21 M11 21 L11 4 L20 4 L20 21 M2 21 L22 21 M6.5 12.5 L8.5 12.5 M6.5 16 L8.5 16 M14 7.5 L17 7.5 M14 12 L17 12 M14 16 L17 16"/>',
  museum:
    '<path d="M3 21 L21 21 M4.5 21 L4.5 10.5 M19.5 21 L19.5 10.5 M8.5 21 L8.5 10.5 M15.5 21 L15.5 10.5 M12 21 L12 10.5 M2.5 10.5 L21.5 10.5 L12 3.5 Z"/>',
};

export const LANDMARK_TYPES: Record<string, { color: string; label: string }> = {
  icon: { color: "#e8b44a", label: "Landmark" },
  metro: { color: "#3ecf8e", label: "Metro" },
  airport: { color: "#e8734a", label: "Airport" },
  leisure: { color: "#c07ae0", label: "Leisure" },
  business: { color: "#5aa9e6", label: "Business" },
};

export const LANDMARKS: DubaiMapLandmark[] = [
  { name: "Burj Khalifa", type: "icon", icon: "tower", lng: 55.2744, lat: 25.1972 },
  { name: "Burj Al Arab", type: "icon", icon: "sail", lng: 55.1853, lat: 25.1412 },
  { name: "Museum of the Future", type: "icon", icon: "museum", lng: 55.282, lat: 25.2196 },
  { name: "Atlantis, The Palm", type: "leisure", icon: "build", lng: 55.117, lat: 25.1304 },
  { name: "The Dubai Mall", type: "leisure", icon: "bag", lng: 55.2796, lat: 25.1975 },
  { name: "Mall of the Emirates", type: "leisure", icon: "bag", lng: 55.2003, lat: 25.1181 },
  { name: "Dubai Marina", type: "leisure", icon: "build", lng: 55.14, lat: 25.0805 },
  { name: "Global Village", type: "leisure", icon: "bag", lng: 55.308, lat: 25.07 },
  { name: "Dubai Intl Airport", type: "airport", icon: "plane", lng: 55.3644, lat: 25.2532 },
  { name: "Al Maktoum Airport", type: "airport", icon: "plane", lng: 55.1614, lat: 24.8964 },
  { name: "DIFC", type: "business", icon: "build", lng: 55.282, lat: 25.211 },
  { name: "Business Bay", type: "business", icon: "build", lng: 55.265, lat: 25.186 },
  { name: "Expo City", type: "business", icon: "build", lng: 55.15, lat: 24.96 },
  { name: "Burj Khalifa Metro", type: "metro", icon: "metro", lng: 55.28, lat: 25.202 },
  { name: "Mall of Emirates Metro", type: "metro", icon: "metro", lng: 55.2003, lat: 25.12 },
  { name: "DMCC Metro", type: "metro", icon: "metro", lng: 55.1428, lat: 25.068 },
  { name: "Business Bay Metro", type: "metro", icon: "metro", lng: 55.264, lat: 25.188 },
  { name: "Union Metro", type: "metro", icon: "metro", lng: 55.3183, lat: 25.266 },
];
