export interface ProjectDistanceSlide {
  name: string;
  time: string;
  image: string;
}

export interface ProjectDistanceSliderConfig {
  titleColor: string;
  slides: ProjectDistanceSlide[];
}

const FAUCHON_ROOT = "/assets/images/v3/amenities-sliders/fauchon";
const HILTON_ROOT = "/assets/images/v3/amenities-sliders/hilton";
const DARK_ROOT = "/assets/images/v3/amenities-sliders/dark";

const SANCTUARY_SLIDES: ProjectDistanceSlide[] = [
  { name: "Downtown Dubai", time: "12 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Burj Khalifa", time: "12 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Museum of the Future", time: "15 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Dubai International Airport", time: "18 min", image: `${DARK_ROOT}/dxb.webp` },
  { name: "Jumeirah Beach", time: "20 min", image: `${DARK_ROOT}/jumeira_beach.webp` },
  { name: "Palm Jumeirah", time: "25 min", image: `${DARK_ROOT}/palm_jumeirah.webp` },
  { name: "Dubai Marina", time: "25 min", image: `${DARK_ROOT}/dubai_marina.webp` },
];

const GOLF_SLIDES: ProjectDistanceSlide[] = [
  { name: "Dubai Marina", time: "18 min", image: `${DARK_ROOT}/dubai_marina.webp` },
  { name: "Palm Jumeirah", time: "20 min", image: `${DARK_ROOT}/palm_jumeirah.webp` },
  { name: "Jumeirah Beach", time: "22 min", image: `${DARK_ROOT}/jumeira_beach.webp` },
  { name: "Downtown Dubai", time: "20 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Burj Khalifa", time: "20 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Museum of the Future", time: "22 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Dubai International Airport", time: "28 min", image: `${DARK_ROOT}/dxb.webp` },
];

const BOULEVARD_SLIDES: ProjectDistanceSlide[] = [
  { name: "Downtown Dubai", time: "20 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Burj Khalifa", time: "20 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Museum of the Future", time: "22 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Dubai International Airport", time: "25 min", image: `${DARK_ROOT}/dxb.webp` },
  { name: "Jumeirah Beach", time: "25 min", image: `${DARK_ROOT}/jumeira_beach.webp` },
  { name: "Palm Jumeirah", time: "30 min", image: `${DARK_ROOT}/palm_jumeirah.webp` },
  { name: "Dubai Marina", time: "30 min", image: `${DARK_ROOT}/dubai_marina.webp` },
];

const SEASIDE_SLIDES: ProjectDistanceSlide[] = [
  { name: "Dubai International Airport", time: "16 min", image: `${DARK_ROOT}/dxb.webp` },
  { name: "Museum of the Future", time: "20 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Downtown Dubai", time: "25 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Burj Khalifa", time: "25 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Jumeirah Beach", time: "30 min", image: `${DARK_ROOT}/jumeira_beach.webp` },
  { name: "Palm Jumeirah", time: "35 min", image: `${DARK_ROOT}/palm_jumeirah.webp` },
  { name: "Dubai Marina", time: "35 min", image: `${DARK_ROOT}/dubai_marina.webp` },
];

const projectDistanceSliders: Record<string, ProjectDistanceSliderConfig> = {
  "fauchon-residences-by-prestige-one": {
    titleColor: "#f28bd7",
    slides: [
      { name: "City Walk", time: "3 min", image: `${FAUCHON_ROOT}/city-walking_GQ4G.webp` },
      { name: "DIFC", time: "5 min", image: `${FAUCHON_ROOT}/01_difc_GQ4G.webp` },
      { name: "Museum of the Future", time: "5 min", image: `${FAUCHON_ROOT}/03_museum_GQ4G.webp` },
      { name: "The Dubai Mall", time: "5 min", image: `${FAUCHON_ROOT}/01_dubai_mall_GQ4G.webp` },
      { name: "Downtown Dubai", time: "5 min", image: `${FAUCHON_ROOT}/01_downtown_dubai_GQ4G.webp` },
      { name: "Emirates Towers", time: "5 min", image: `${FAUCHON_ROOT}/emirates-tower-metro_GQ4G.webp` },
      { name: "Burj Khalifa", time: "5 min", image: `${FAUCHON_ROOT}/04_burj_khalifa_GQ4G.webp` },
      { name: "Jumeirah Beach", time: "10 min", image: `${FAUCHON_ROOT}/05_jumeira_beach_GQ4G.webp` },
      { name: "Dubai International Airport", time: "13 min", image: `${FAUCHON_ROOT}/02_airport_GQ4G.webp` },
      { name: "Palm Jumeirah", time: "15 min", image: `${FAUCHON_ROOT}/05_palm_jumeirah_GQ4G.webp` },
      { name: "Dubai Marina", time: "20 min", image: `${FAUCHON_ROOT}/04_dubai_marina_GQ4G.webp` },
    ],
  },
  "hilton-residences-dubai-maritime-city": {
    titleColor: "#a5baf9",
    slides: [
      { name: "Museum of the Future", time: "15 min", image: `${HILTON_ROOT}/museum.webp` },
      { name: "Downtown Dubai", time: "15 min", image: `${HILTON_ROOT}/downtown_dubai.webp` },
      { name: "Burj Khalifa", time: "15 min", image: `${HILTON_ROOT}/burj-klf.webp` },
      { name: "The Dubai Mall", time: "15 min", image: `${HILTON_ROOT}/dubai-mall.webp` },
      { name: "Dubai International Airport", time: "15 min", image: `${HILTON_ROOT}/dxb.webp` },
      { name: "Jumeirah Beach", time: "22 min", image: `${HILTON_ROOT}/jumeira_beach.webp` },
      { name: "Palm Jumeirah", time: "25 min", image: `${HILTON_ROOT}/palm_jumeirah.webp` },
      { name: "Dubai Marina", time: "25 min", image: `${HILTON_ROOT}/dubai_marina.webp` },
    ],
  },
  "golf-residences-by-prestige-one": {
    titleColor: "#b8d79f",
    slides: GOLF_SLIDES,
  },
  "the-boulevard-by-prestige-one": {
    titleColor: "#d8c39f",
    slides: BOULEVARD_SLIDES,
  },
  "seaside-by-prestige-one": {
    titleColor: "#8fd3e8",
    slides: SEASIDE_SLIDES,
  },
  "sanctuary-residences-by-prestige-one": {
    titleColor: "#98d8c0",
    slides: SANCTUARY_SLIDES,
  },
  "sanctuary-hive-by-prestige-one": {
    titleColor: "#98d8c0",
    slides: SANCTUARY_SLIDES,
  },
};

export function getProjectDistanceSliderConfig(projectSlug: string): ProjectDistanceSliderConfig | undefined {
  return projectDistanceSliders[projectSlug];
}
