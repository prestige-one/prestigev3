export type FauchonDestinationSlide = {
  image: string;
  minutes: string;
  title: string;
  description: string;
};

const IMG = "/assets/images/v2/projects/fauchon/destinations";

export const fauchonDestinationSlides: FauchonDestinationSlide[] = [
  {
    image: `${IMG}/01_dubai_mall.webp`,
    minutes: "10 Minutes",
    title: "Dubai Mall",
    description: "World-class shopping, dining, and entertainment in the heart of Downtown Dubai.",
  },
  {
    image: `${IMG}/02_airport.webp`,
    minutes: "5 Minutes",
    title: "Airport",
    description: "Seamless global connectivity from Dubai's main international gateway.",
  },
  {
    image: `${IMG}/03_museum.webp`,
    minutes: "5 Minutes",
    title: "Museum of the Future",
    description: "A global icon of innovation, technology, and forward-thinking design.",
  },
  {
    image: `${IMG}/04_burj_khalifa.webp`,
    minutes: "12 Minutes",
    title: "Burj Khalifa",
    description: "The world's tallest tower with panoramic city views and an iconic skyline presence.",
  },
  {
    image: `${IMG}/01_downtown_dubai.webp`,
    minutes: "5 Minutes",
    title: "Downtown Dubai",
    description: "Quick access to premium lifestyle destinations, landmarks, and business hubs.",
  },
  {
    image: `${IMG}/05_jumeira_beach.webp`,
    minutes: "10 Minutes",
    title: "Jumeira Beach",
    description: "Relaxed beachfront vibes, scenic views, and leisure activities by the coastline.",
  },
  {
    image: `${IMG}/04_dubai_marina.webp`,
    minutes: "20 Minutes",
    title: "Dubai Marina",
    description: "A vibrant waterfront district known for dining, retail, and nightlife experiences.",
  },
  {
    image: `${IMG}/05_palm_jumeirah.webp`,
    minutes: "15 Minutes",
    title: "Palm Jumeirah",
    description: "Easy reach to luxury resorts, beach clubs, and signature waterfront living.",
  },
  {
    image: `${IMG}/01_difc.webp`,
    minutes: "5 Minutes",
    title: "DIFC",
    description: "Fast access to Dubai's top financial district with premium business addresses.",
  },
  {
    image: `${IMG}/emirates-tower-metro.webp`,
    minutes: "5 Minutes",
    title: "Emirates Tower Metro Station",
    description: "A connected city scene with metro access, moving traffic, and skyline views.",
  },
];
