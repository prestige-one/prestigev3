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
    alt: "Driving distance from Dubai Islands to Dubai Marina",
  },
  {
    image: `${SLIDER_ROOT}/dubai-island/dubai-i-downt.webp`,
    alt: "Driving distance from Dubai Islands to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/dubai-island/dubai-i-mall.webp`,
    alt: "Driving distance from Dubai Islands to Dubai Mall",
  },
  {
    image: `${SLIDER_ROOT}/dubai-island/dubai-i-dxb.webp`,
    alt: "Driving distance from Dubai Islands to Dubai International Airport",
  },
];

const slidesByDestination: Readonly<Record<string, DestinationDistanceSlide[]>> = {
  "barsha-heights": barshaHeightsSlides,
  "dubai-islands": dubaiIslandsSlides,
  "dubai-maritime-city": maritimeSlides,
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
  return slidesByDestination[slug] ?? maritimeSlides;
}

export function getDestinationDistanceImage(slug: string): string {
  return desktopImageByDestination[slug] ?? desktopImageByDestination["dubai-maritime-city"]!;
}
