export interface DestinationDistanceSlide {
  image: string;
  alt: string;
}

const SLIDER_ROOT = "/assets/images/v3/our-destinations/destination-slider-responsive";

const maritimeSlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/maritime/slide-burj.webp`,
    alt: "Driving distance from Dubai Maritime City to Downtown Dubai",
  },
  {
    image: `${SLIDER_ROOT}/maritime/slide-difc.webp`,
    alt: "Driving distance from Dubai Maritime City to DIFC",
  },
  {
    image: `${SLIDER_ROOT}/maritime/slide-dxb.webp`,
    alt: "Driving distance from Dubai Maritime City to Dubai International Airport",
  },
  {
    image: `${SLIDER_ROOT}/maritime/slide-jumeirah.webp`,
    alt: "Driving distance from Dubai Maritime City to Jumeirah",
  },
];

const palmJumeirahSlides: DestinationDistanceSlide[] = [
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/b-marina.webp`,
    alt: "Driving distance from Palm Jumeirah to Dubai Marina",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/b-dxb.webp`,
    alt: "Driving distance from Palm Jumeirah to Dubai International Airport",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/b-water.webp`,
    alt: "Driving distance from Palm Jumeirah to Aquaventure Waterpark",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/b-dubai-mall.webp`,
    alt: "Driving distance from Palm Jumeirah to Dubai Mall",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/b-mesuem.webp`,
    alt: "Driving distance from Palm Jumeirah to Museum of the Future",
  },
  {
    image: `${SLIDER_ROOT}/palm-jumeirah/b-burj-k.webp`,
    alt: "Driving distance from Palm Jumeirah to Burj Khalifa",
  },
];

const slidesByDestination: Readonly<Record<string, DestinationDistanceSlide[]>> = {
  "dubai-maritime-city": maritimeSlides,
  "palm-jumeirah": palmJumeirahSlides,
};

const desktopImageByDestination: Readonly<Record<string, string>> = {
  "barsha-heights": "/assets/images/v3/our-destinations/distance-barsha.webp",
  "dlrc": "/assets/images/v3/our-destinations/dlrc-distance.webp",
  "dubai-maritime-city": "/assets/images/v3/maritime-distance.webp",
  "dubai-islands": "/assets/images/v3/our-destinations/dubai-island-distances.webp",
  "dubai-sports-city": "/assets/images/v3/our-destinations/sport-city-distances.webp",
  "jumeirah-garden-city": "/assets/images/v3/our-destinations/distance-Jumeirah -Garden-City.webp",
  "jumeirah-village-circle": "/assets/images/v3/our-destinations/jumeirah-village-circle-distances.webp",
  "majan-city": "/assets/images/v3/our-destinations/majan-city-distance.webp",
  "meydan-city": "/assets/images/v3/our-destinations/meydan-city-destinations.webp",
  "palm-jumeirah": "/assets/images/v3/our-destinations/palm-jumeirah-landmark-distances-neon-blue.webp",
};

export function getDestinationDistanceSlides(slug: string): DestinationDistanceSlide[] {
  return slidesByDestination[slug] ?? maritimeSlides;
}

export function getDestinationDistanceImage(slug: string): string {
  return desktopImageByDestination[slug] ?? desktopImageByDestination["dubai-maritime-city"]!;
}
