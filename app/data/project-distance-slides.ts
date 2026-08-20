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
const SANCTUARY_ROOT = "/assets/images/v3/amenities-sliders/sanctuary";

const SANCTUARY_SLIDES: ProjectDistanceSlide[] = [
  { name: "Business Bay", time: "10 min", image: `${SANCTUARY_ROOT}/Business-Bay.webp` },
  { name: "Downtown Dubai", time: "12 min", image: `${SANCTUARY_ROOT}/downtown-dubai.webp` },
  { name: "Burj Khalifa", time: "12 min", image: `${SANCTUARY_ROOT}/burj-khalifa-1.webp` },
  { name: "Dubai Design District", time: "15 min", image: `${SANCTUARY_ROOT}/Dubai-Design-District.webp` },
  { name: "Dubai International Airport", time: "18 min", image: `${SANCTUARY_ROOT}/dxb.webp` },
  { name: "Museum of the Future", time: "18 min", image: `${SANCTUARY_ROOT}/museum.webp` },
  { name: "Jumeirah Beach", time: "20 min", image: `${SANCTUARY_ROOT}/jumeirah-beach.webp` },
  { name: "Dubai Marina Mall", time: "25 min", image: `${SANCTUARY_ROOT}/marina-mall.webp` },
  { name: "Palm Jumeirah", time: "25 min", image: `${SANCTUARY_ROOT}/palm_jumeirah.webp` },
  { name: "Dubai Marina", time: "25 min", image: `${SANCTUARY_ROOT}/dubai-marina.webp` },
];

const BERKELEY_SQUARE_SLIDES: ProjectDistanceSlide[] = [
  { name: "Mall of the Emirates", time: "15 min", image: `${DARK_ROOT}/mall-of-emirates.webp` },
  { name: "Palm Jumeirah", time: "16 min", image: `${DARK_ROOT}/palm_jumeirah.webp` },
  { name: "Dubai Marina", time: "18 min", image: `${DARK_ROOT}/dubai_marina.webp` },
  { name: "Downtown Dubai", time: "18 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Burj Khalifa and Dubai Mall", time: "25 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Dubai International Airport", time: "30 min", image: `${DARK_ROOT}/dxb.webp` },
];

const GOLF_SLIDES: ProjectDistanceSlide[] = [
  { name: "Jumeirah Golf Estates", time: "15 min", image: `${SANCTUARY_ROOT}/Jumeirah Golf Estates.webp` },
  { name: "Dubai Marina", time: "18 min", image: `${SANCTUARY_ROOT}/dubai-marina.webp` },
  { name: "Global Village", time: "18 min", image: `${SANCTUARY_ROOT}/global-village.webp` },
  { name: "Palm Jumeirah", time: "20 min", image: `${SANCTUARY_ROOT}/palm_jumeirah.webp` },
  { name: "Downtown Dubai", time: "20 min", image: `${SANCTUARY_ROOT}/downtown-dubai.webp` },
  { name: "Burj Khalifa", time: "20 min", image: `${SANCTUARY_ROOT}/burj-khalifa-1.webp` },
  { name: "Jumeirah Beach", time: "22 min", image: `${SANCTUARY_ROOT}/jumeirah-beach.webp` },
  { name: "Museum of the Future", time: "22 min", image: `${SANCTUARY_ROOT}/museum.webp` },
  { name: "Dubai International Airport", time: "28 min", image: `${SANCTUARY_ROOT}/dxb.webp` },
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

const DUBAI_ISLANDS_SLIDES: ProjectDistanceSlide[] = [
  { name: "Dubai International Airport", time: "16 min", image: `${DARK_ROOT}/dxb.webp` },
  { name: "Museum of the Future", time: "20 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Downtown Dubai", time: "25 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Burj Khalifa", time: "25 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Jumeirah Beach", time: "30 min", image: `${DARK_ROOT}/jumeira_beach.webp` },
  { name: "Palm Jumeirah", time: "35 min", image: `${DARK_ROOT}/palm_jumeirah.webp` },
  { name: "Dubai Marina", time: "35 min", image: `${DARK_ROOT}/dubai_marina.webp` },
];

const SEASIDE_SLIDES: ProjectDistanceSlide[] = [
  { name: "Waterfront Market", time: "7 min", image: `${DARK_ROOT}/dubai_marina.webp` },
  { name: "Dubai Hospital", time: "8 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Dubai International Airport", time: "18 min", image: `${DARK_ROOT}/dxb.webp` },
  { name: "Burj Khalifa / Downtown Dubai", time: "20 min", image: `${DARK_ROOT}/burj-klf.webp` },
];

const PARKWAY_SLIDES: ProjectDistanceSlide[] = [
  { name: "Dubai Marina", time: "20 min", image: `${SANCTUARY_ROOT}/dubai-marina.webp` },
  { name: "Palm Jumeirah", time: "24 min", image: `${SANCTUARY_ROOT}/palm_jumeirah.webp` },
  { name: "Burj Al Arab", time: "25 min", image: `${SANCTUARY_ROOT}/jumeirah-beach.webp` },
];

const WATERWAY_SLIDES: ProjectDistanceSlide[] = [
  { name: "Business Bay", time: "10 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Downtown Dubai", time: "12 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Burj Khalifa", time: "12 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Dubai Design District", time: "15 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Dubai International Airport", time: "18 min", image: `${DARK_ROOT}/dxb.webp` },
  { name: "Museum of the Future", time: "18 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Jumeirah Beach", time: "20 min", image: `${DARK_ROOT}/jumeira_beach.webp` },
  { name: "Dubai Marina Mall", time: "25 min", image: `${DARK_ROOT}/dubai_marina.webp` },
  { name: "Palm Jumeirah", time: "25 min", image: `${DARK_ROOT}/palm_jumeirah.webp` },
  { name: "Dubai Marina", time: "25 min", image: `${DARK_ROOT}/dubai_marina.webp` },
];

const THE_ONE_SLIDES: ProjectDistanceSlide[] = [
  { name: "Dubai Marina", time: "15 min", image: `${DARK_ROOT}/dubai_marina.webp` },
  { name: "Palm Jumeirah", time: "16 min", image: `${DARK_ROOT}/palm_jumeirah.webp` },
  { name: "Burj Al Arab", time: "15 min", image: `${DARK_ROOT}/jumeira_beach.webp` },
  { name: "Downtown Dubai", time: "20 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
  { name: "Burj Khalifa", time: "20 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Dubai International Airport", time: "25 min", image: `${DARK_ROOT}/dxb.webp` },
];

const LUXE_VILLA_SLIDES: ProjectDistanceSlide[] = [
  { name: "Dubai Marina", time: "15 min", image: `${DARK_ROOT}/dubai_marina.webp` },
  { name: "Mall of the Emirates", time: "15 min", image: `${DARK_ROOT}/mall-of-emirates.webp` },
  { name: "Burj Al Arab", time: "15 min", image: `${DARK_ROOT}/jumeira_beach.webp` },
  { name: "Museum of the Future", time: "20 min", image: `${DARK_ROOT}/museum.webp` },
  { name: "Burj Khalifa", time: "20 min", image: `${DARK_ROOT}/burj-klf.webp` },
  { name: "Dubai International Airport", time: "25 min", image: `${DARK_ROOT}/dxb.webp` },
  { name: "The Dubai Mall", time: "27 min", image: `${DARK_ROOT}/downtown_dubai.webp` },
];

const VISTA_SLIDES: ProjectDistanceSlide[] = [
  { name: "Mall of the Emirates", time: "15 min", image: `${SANCTUARY_ROOT}/emirates-mall.webp` },
  { name: "Dubai Marina", time: "20 min", image: `${SANCTUARY_ROOT}/dubai-marina.webp` },
  { name: "Jumeirah Beach", time: "20 min", image: `${SANCTUARY_ROOT}/jumeirah-beach.webp` },
  { name: "Downtown Dubai", time: "25 min", image: `${SANCTUARY_ROOT}/downtown-dubai.webp` },
  { name: "Burj Khalifa", time: "25 min", image: `${SANCTUARY_ROOT}/burj-khalifa-1.webp` },
  { name: "Dubai International Airport", time: "25 min", image: `${SANCTUARY_ROOT}/dxb.webp` },
];

const RESIDENCE_SLIDES: ProjectDistanceSlide[] = [
  { name: "Dubai International Airport", time: "28 min", image: `${SANCTUARY_ROOT}/dxb.webp` },
  { name: "Burj Khalifa", time: "28 min", image: `${SANCTUARY_ROOT}/burj-khalifa-1.webp` },
  { name: "Downtown Dubai", time: "28 min", image: `${SANCTUARY_ROOT}/downtown-dubai.webp` },
  { name: "Mall of the Emirates", time: "18 min", image: `${SANCTUARY_ROOT}/emirates-mall.webp` },
  { name: "Jumeirah Beach", time: "25 min", image: `${SANCTUARY_ROOT}/jumeirah-beach.webp` },
  { name: "Palm Jumeirah", time: "20 min", image: `${SANCTUARY_ROOT}/palm_jumeirah.webp` },
  { name: "Dubai Marina", time: "23 min", image: `${SANCTUARY_ROOT}/dubai-marina.webp` },
  { name: "Dubai Autodrome", time: "14 min", image: `${SANCTUARY_ROOT}/Dubai-Autodrome.webp` },
  { name: "Vista by Prestige One", time: "12 min", image: `${SANCTUARY_ROOT}/vista-green.webp` },
];

const projectDistanceSliders: Record<string, ProjectDistanceSliderConfig> = {
  "fauchon-residences-by-prestige-one": {
    titleColor: "#ffffff",
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
    titleColor: "#ffffff",
    slides: [
      { name: "Museum of the Future", time: "15 min", image: `${HILTON_ROOT}/museum.webp` },
      { name: "Downtown Dubai", time: "15 min", image: `${HILTON_ROOT}/downtown_dubai.webp` },
      { name: "Burj Khalifa", time: "15 min", image: `${HILTON_ROOT}/burj-klf.webp` },
      { name: "The Dubai Mall", time: "15 min", image: `${HILTON_ROOT}/dubai-mall.webp` },
      { name: "Dubai International Airport", time: "15 min", image: `${HILTON_ROOT}/dxb.webp` },
      { name: "Mall of the Emirates", time: "20 min", image: `${HILTON_ROOT}/mall-of-emirates.webp` },
      { name: "Jumeirah Beach", time: "22 min", image: `${HILTON_ROOT}/jumeira_beach.webp` },
      { name: "Palm Jumeirah", time: "25 min", image: `${HILTON_ROOT}/palm_jumeirah.webp` },
      { name: "Dubai Marina", time: "25 min", image: `${HILTON_ROOT}/dubai_marina.webp` },
    ],
  },
  "berkeley-square-north": {
    titleColor: "#6bffba",
    slides: BERKELEY_SQUARE_SLIDES,
  },
  "berkeley-square-south": {
    titleColor: "#6bffba",
    slides: BERKELEY_SQUARE_SLIDES,
  },
  "golf-residences-by-prestige-one": {
    titleColor: "#6bffba",
    slides: GOLF_SLIDES,
  },
  "the-boulevard-by-prestige-one": {
    titleColor: "#ffffff",
    slides: BOULEVARD_SLIDES,
  },
  "seaside-by-prestige-one": {
    titleColor: "#ffffff",
    slides: SEASIDE_SLIDES,
  },
  "luxury-canal-residences-by-prestige-one": {
    titleColor: "#ffffff",
    slides: DUBAI_ISLANDS_SLIDES,
  },
  "coastal-haven-by-prestige-one": {
    titleColor: "#ffffff",
    slides: DUBAI_ISLANDS_SLIDES,
  },
  "parkway-by-prestige-one": {
    titleColor: "#20c48e",
    slides: PARKWAY_SLIDES,
  },
  "waterway-by-prestige-one": {
    titleColor: "#ffffff",
    slides: WATERWAY_SLIDES,
  },
  "the-one-by-prestige-one": {
    titleColor: "#ffffff",
    slides: THE_ONE_SLIDES,
  },
  "luxe-villa-by-prestige-one": {
    titleColor: "#ffffff",
    slides: LUXE_VILLA_SLIDES,
  },
  "vista-by-prestige-one": {
    titleColor: "#6bffba",
    slides: VISTA_SLIDES,
  },
  "the-residence-by-prestige-one": {
    titleColor: "#6bffba",
    slides: RESIDENCE_SLIDES,
  },
  "sanctuary-residences-by-prestige-one": {
    titleColor: "#6bffba",
    slides: SANCTUARY_SLIDES,
  },
  "sanctuary-hive-by-prestige-one": {
    titleColor: "#6bffba",
    slides: SANCTUARY_SLIDES,
  },
};

export function getProjectDistanceSliderConfig(projectSlug: string): ProjectDistanceSliderConfig | undefined {
  return projectDistanceSliders[projectSlug];
}
