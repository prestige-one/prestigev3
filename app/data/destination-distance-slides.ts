export interface DestinationDistanceSlide {
  image: string;
  alt: string;
}

const SLIDER_ROOT = "/assets/images/v3/our-destinations/destination-slider-responsive";

const maritimeSlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/hilton/hil-downtown.webp`,
    alt: "Driving distance from Dubai Maritime City to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/hilton/hil-difc.webp`,
    alt: "Driving distance from Dubai Maritime City to DIFC",
  },
  {
    image: `${SLIDER_ROOT}/hilton/hil-dxb.webp`,
    alt: "Driving distance from Dubai Maritime City to Dubai International Airport",
  },
  {
    image: `${SLIDER_ROOT}/hilton/hil-jumierah.webp`,
    alt: "Driving distance from Dubai Maritime City to Jumeirah",
  },
];

const palmJumeirahSlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/pj-marina.webp`,
    alt: "Driving distance from Palm Jumeirah to Dubai Marina",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/pj-dxb.webp`,
    alt: "Driving distance from Palm Jumeirah to Dubai International Airport",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/pj-aqua.webp`,
    alt: "Driving distance from Palm Jumeirah to Aquaventure Waterpark",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/pj-downt.webp`,
    alt: "Driving distance from Palm Jumeirah to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/pj-mes.webp`,
    alt: "Driving distance from Palm Jumeirah to Museum of the Future",
  },
];

const barshaHeightsSlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/barsha/b-al-sufouh.webp`,
    alt: "Driving distance from Barsha Heights to Al Sufouh Beach",
  },
  {
    image: `${SLIDER_ROOT}/barsha/b-marina.webp`,
    alt: "Driving distance from Barsha Heights to Dubai Marina",
  },
  {
    image: `${SLIDER_ROOT}/barsha/b-downtown.webp`,
    alt: "Driving distance from Barsha Heights to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/barsha/b-meseum.webp`,
    alt: "Driving distance from Barsha Heights to Museum of the Future",
  },
  {
    image: `${SLIDER_ROOT}/barsha/b-dxb.webp`,
    alt: "Driving distance from Barsha Heights to Dubai International Airport",
  },
];

const dubaiIslandsSlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/dubai-island/dubai-i-marina.webp`,
    alt: "Driving distance from Dubai Islands to Dubai Islands Marina",
  },
  {
    image: `${SLIDER_ROOT}/dubai-island/dubai-i-downt.webp`,
    alt: "Driving distance from Dubai Islands to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/dubai-island/dubai-i-mall.webp`,
    alt: "Driving distance from Dubai Islands to Dubai Islands Mall",
  },
  {
    image: `${SLIDER_ROOT}/dubai-island/dubai-i-dxb.webp`,
    alt: "Driving distance from Dubai Islands to Dubai International Airport",
  },
];

const meydanCitySlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/meydan-city/mh-meydan-mall.webp`,
    alt: "Driving distance from Meydan City to Meydan One Mall",
  },
  {
    image: `${SLIDER_ROOT}/meydan-city/mh-race.webp`,
    alt: "Driving distance from Meydan City to Meydan Racecourse District",
  },
  {
    image: `${SLIDER_ROOT}/meydan-city/mh-dxb.webp`,
    alt: "Driving distance from Meydan City to Dubai International Airport",
  },
  {
    image: `${SLIDER_ROOT}/meydan-city/mh-ras-al.webp`,
    alt: "Driving distance from Meydan City to Ras Al Khor Wildlife Sanctuary",
  },
  {
    image: `${SLIDER_ROOT}/meydan-city/mh-dubai-mall.webp`,
    alt: "Driving distance from Meydan City to Dubai Mall",
  },
  {
    image: `${SLIDER_ROOT}/meydan-city/mh-museum.webp`,
    alt: "Driving distance from Meydan City to Museum of the Future",
  },
  {
    image: `${SLIDER_ROOT}/meydan-city/mh-burj.webp`,
    alt: "Driving distance from Meydan City to Burj Khalifa",
  },
];

const dlrcSlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/dlrc/dlrc-globl.webp`,
    alt: "Driving distance from Dubai Land Residence Complex to Global Village",
  },
  {
    image: `${SLIDER_ROOT}/dlrc/dlrc-img.webp`,
    alt: "Driving distance from Dubai Land Residence Complex to IMG Worlds of Adventure",
  },
  {
    image: `${SLIDER_ROOT}/dlrc/dlrc-downtown.webp`,
    alt: "Driving distance from Dubai Land Residence Complex to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/dlrc/dlrc-meseum.webp`,
    alt: "Driving distance from Dubai Land Residence Complex to Museum of the Future",
  },
  {
    image: `${SLIDER_ROOT}/dlrc/dlrc-dxb.webp`,
    alt: "Driving distance from Dubai Land Residence Complex to Dubai International Airport",
  },
];

const jumeirahGardenCitySlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/jumeirah-garden-city/jgc-difc.webp`,
    alt: "Driving distance from Jumeirah Garden City to DIFC",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-garden-city/jgc-meseum.webp`,
    alt: "Driving distance from Jumeirah Garden City to Museum of the Future",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-garden-city/jgc-metro.webp`,
    alt: "Driving distance from Jumeirah Garden City to Emirates Towers Metro Station",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-garden-city/jgc-downtown.webp`,
    alt: "Driving distance from Jumeirah Garden City to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-garden-city/jgc-dxb.webp`,
    alt: "Driving distance from Jumeirah Garden City to Dubai International Airport",
  },
];

const jumeirahVillageCircleSlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/jumeirah-village-circle/jvc-cyclemall.webp`,
    alt: "Driving distance from Jumeirah Village Circle to Circle Mall",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-village-circle/jvc-moe.webp`,
    alt: "Driving distance from Jumeirah Village Circle to Mall of the Emirates",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-village-circle/jvc-marina.webp`,
    alt: "Driving distance from Jumeirah Village Circle to Dubai Marina",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-village-circle/jvc-downtown.webp`,
    alt: "Driving distance from Jumeirah Village Circle to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-village-circle/jvc-meseum.webp`,
    alt: "Driving distance from Jumeirah Village Circle to Museum of the Future",
  },
  {
    image: `${SLIDER_ROOT}/jumeirah-village-circle/jvc-dxb.webp`,
    alt: "Driving distance from Jumeirah Village Circle to Dubai International Airport",
  },
];

const majanCitySlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/majan-city/majan-img.webp`,
    alt: "Driving distance from Majan City to IMG Worlds of Adventure",
  },
  {
    image: `${SLIDER_ROOT}/majan-city/majan-global-v.webp`,
    alt: "Driving distance from Majan City to Global Village",
  },
  {
    image: `${SLIDER_ROOT}/majan-city/majan-downtown.webp`,
    alt: "Driving distance from Majan City to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/majan-city/majan-meseum.webp`,
    alt: "Driving distance from Majan City to Museum of the Future",
  },
  {
    image: `${SLIDER_ROOT}/majan-city/majan-dxb.webp`,
    alt: "Driving distance from Majan City to Dubai International Airport",
  },
];

const dubaiSportsCitySlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/sport-city/sport-city-cricket.webp`,
    alt: "Driving distance from Dubai Sports City to Dubai International Cricket Stadium",
  },
  {
    image: `${SLIDER_ROOT}/sport-city/sport-city-moe.webp`,
    alt: "Driving distance from Dubai Sports City to Mall of the Emirates",
  },
  {
    image: `${SLIDER_ROOT}/sport-city/sport-city-marina.webp`,
    alt: "Driving distance from Dubai Sports City to Dubai Marina",
  },
  {
    image: `${SLIDER_ROOT}/sport-city/sport-city-burj.webp`,
    alt: "Driving distance from Dubai Sports City to Burj Khalifa",
  },
  {
    image: `${SLIDER_ROOT}/sport-city/sport-city-meseum.webp`,
    alt: "Driving distance from Dubai Sports City to Museum of the Future",
  },
  {
    image: `${SLIDER_ROOT}/sport-city/sport-city-dxb.webp`,
    alt: "Driving distance from Dubai Sports City to Dubai International Airport",
  },
];

const slidesByDestination: Readonly<Record<string, DestinationDistanceSlide[]>> = {
  "barsha-heights": barshaHeightsSlides,
  "dlrc": dlrcSlides,
  "dubai-islands": dubaiIslandsSlides,
  "dubai-maritime-city": maritimeSlides,
  "dubai-sports-city": dubaiSportsCitySlides,
  "jumeirah-garden-city": jumeirahGardenCitySlides,
  "jumeirah-village-circle": jumeirahVillageCircleSlides,
  "majan-city": majanCitySlides,
  "meydan-city": meydanCitySlides,
  "palm-jumeirah": palmJumeirahSlides,
};

const desktopImageByDestination: Readonly<Record<string, string>> = {
  "barsha-heights": "/assets/images/v3/our-destinations/distance-barsha.webp",
  "dlrc": "/assets/images/v3/our-destinations/dlrc-distance.webp",
  "dubai-maritime-city": "/assets/images/v3/our-destinations/maritime-distance.webp",
  "dubai-islands": "/assets/images/v3/our-destinations/dubai-island-distances.webp",
  "dubai-sports-city": "/assets/images/v3/our-destinations/sport-city-distances.webp",
  "jumeirah-garden-city": "/assets/images/v3/our-destinations/distance-Jumeirah -Garden-City.webp",
  "jumeirah-village-circle": "/assets/images/v3/our-destinations/jumeirah-village-circle-distances.webp",
  "majan-city": "/assets/images/v3/our-destinations/majan-city-distance.webp",
  "meydan-city": "/assets/images/v3/our-destinations/meydan-city-destinations.webp",
  "palm-jumeirah": "/assets/images/v3/our-destinations/palm-jumeirah-distance.webp",
};

export function getDestinationDistanceSlides(slug: string): DestinationDistanceSlide[] {
  return slidesByDestination[slug] ?? [];
}

export function getDestinationDistanceImage(slug: string): string {
  return desktopImageByDestination[slug] ?? desktopImageByDestination["dubai-maritime-city"]!;
}
