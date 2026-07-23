export type ProjectCycleSlide = {
  title: string;
  text: string;
  location: string;
  href: string;
  image: string;
  comingSoon?: boolean;
};

const IMG = "/assets/images/v2/project-featured-images";

export const projectCycleSlides: ProjectCycleSlide[] = [
  {
    title: "FAUCHON Résidences",
    text: "French art de vivre and skyline residences in Jumeirah Gardens City.",
    location: "Jumeirah Gardens City",
    href: "/projects/fauchon-residences",
    image: `${IMG}/fauchon/fauchon-banner.webp`,
  },
  {
    title: "Sanctuary Hive",
    text: "Well planned commercial spaces in Dubai, designed for growth.",
    location: "Meydan Horizon",
    href: "https://prestigeone.ae/projects/sanctuary-hive-by-prestige-one/",
    image: `${IMG}/sanctuary/sanctuary-hive-2.webp`,
  },
  {
    title: "Sanctuary",
    text: "Modern living and commercial spaces come together in Meydan.",
    location: "Meydan Horizon",
    href: "https://prestigeone.ae/projects/sanctuary/",
    image: `${IMG}/sanctuary/sanctuary-residential-exterior-view.webp`,
  },
  {
    title: "Hilton Residences",
    text: "Waterfront living, redefined at Dubai Maritime City.",
    location: "Dubai Maritime City",
    href: "/projects/hilton-residences-dubai-maritime-city",
    image: `${IMG}/hilton/HILTON-NIGHT-VIEW-1.webp`,
  },
  {
    title: "Berkeley Square North",
    text: "Elevated living in a connected JVC community.",
    location: "Jumeirah Village Circle",
    href: "/projects/berkeley-square-north",
    image: `${IMG}/berkeley/Berkeley-Square-North.webp`,
  },
  {
    title: "Berkeley Square South",
    text: "Elegance and beautiful design in Jumeirah Village Circle.",
    location: "Jumeirah Village Circle",
    href: "/projects/berkeley-square-south",
    image: `${IMG}/berkeley/Berkeley-Square-South.webp`,
  },
  {
    title: "Luxury Canal Residences",
    text: "Canal-front living shaped by the rhythm of the waves.",
    location: "Dubai Islands",
    href: "/projects/luxury-canal-residences",
    image: `${IMG}/luxury-canal/luxury-canal.webp`,
  },
  {
    title: "Coastal Haven",
    text: "A new era of coastal living on Dubai Islands.",
    location: "Dubai Islands",
    href: "/projects/coastal-haven/",
    image: `${IMG}/coastal-haven/Coastal-Haven.webp`,
  },
  {
    title: "The Boulevard",
    text: "Bold boulevard living in Dubai Land Residence Complex.",
    location: "DLRC",
    href: "/projects/the-boulevard-by-prestige-one/",
    image: `${IMG}/boulevard/boulevard.webp`,
  },
  {
    title: "Parkway",
    text: "A nature-inspired sanctuary rising in Meydan Horizon.",
    location: "Meydan Horizon",
    href: "/projects/parkway-by-prestige-one/",
    image: `${IMG}/parkway/parkway.webp`,
  },
  {
    title: "Golf Residences",
    text: "Active family living in Dubai Sports City.",
    location: "Dubai Sports City",
    href: "/projects/golf-residences-by-prestige-one/",
    image: `${IMG}/golf/The-Place-Banner.webp`,
  },
  {
    title: "The One",
    text: "A commercial hub for visionaries in Barsha Heights.",
    location: "Barsha Heights",
    href: "/projects/the-one-by-prestige-one/",
    image: `${IMG}/one/the-one.webp`,
  },
  {
    title: "Seaside",
    text: "A retreat along the sea with waterfront living.",
    location: "Dubai Islands",
    href: "/projects/seaside-by-prestige-one/",
    image: `${IMG}/seaside/seaside-featured-image.webp`,
  },
  {
    title: "The Waterway",
    text: "A fluid waterfront address at Meydan Horizon.",
    location: "Meydan Horizon",
    href: "/projects/the-waterway-by-prestige-one/",
    image: `${IMG}/waterway/Waterway-pic-2.webp`,
  },
  {
    title: "Vista",
    text: "Sleek architecture with panoramic golf views.",
    location: "Dubai Sports City",
    href: "/projects/vista-by-prestige-one/",
    image: `${IMG}/vista/vista.webp`,
  },
  {
    title: "The Residence",
    text: "Modern luxury in a boutique low-rise JVC setting.",
    location: "Jumeirah Village Circle",
    href: "/projects/the-residence-by-prestige-one/",
    image: `${IMG}/residence/THE-RESIDENCE.webp`,
  },
  {
    title: "Luxe Villa",
    text: "Private villa living defined by prestige and calm.",
    location: "Palm Jumeirah",
    href: "/projects/luxe-villa-by-prestige-one/",
    image: `${IMG}/luxe-villa/luxe-villas.webp`,
  },
  {
    title: "Seascape Villa",
    text: "A private escape where the sea meets luxury.",
    location: "Palm Jumeirah",
    href: "/projects/seascape-villa-by-prestige-one/",
    image: `${IMG}/seascape/seascape.webp`,
  },
  {
    title: "More Projects Coming Soon",
    text: "Our next iconic developments are on the horizon. Stay tuned.",
    location: "",
    href: "#coming-soon",
    image: "",
    comingSoon: true,
  },
];

export const PROJECT_CYCLE_AUTOPLAY_MS = 3000;
