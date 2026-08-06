export interface ProjectDistanceSlide {
  name: string;
  time: string;
  image: string;
}

const FAUCHON_ROOT = "/assets/images/v3/amenities-sliders/fauchon";

const projectDistanceSlides: Record<string, ProjectDistanceSlide[]> = {
  "fauchon-residences-by-prestige-one": [
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
};

export function getProjectDistanceSlides(projectSlug: string): ProjectDistanceSlide[] {
  return projectDistanceSlides[projectSlug] ?? [];
}
