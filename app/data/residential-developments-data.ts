export interface DevelopmentSlide {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;
  href: string;
}

// Taglines & locations follow the official Projects-page content plan. Titles
// keep the "by Prestige One" form where it keeps generated slugs stable
// (enrichment in projects.ts keys on those slugs). Display order on the
// Projects page is controlled by the ORDER list in pages/projects/index.vue.
const residentialDevelopments: DevelopmentSlide[] = [
  {
    id: 1,
    image: "/assets/project-featured-images/sliders/vista.webp",
    title: "Vista by Prestige One",
    location: "Dubai Sports City",
    description: "Contemporary residences designed around panoramic views.",
    href: "#",
  },
  {
    id: 2,
    image: "/assets/project-featured-images/sliders/residence.webp",
    title: "The Residence by Prestige One",
    location: "Jumeirah Village Circle",
    description: "Boutique living with thoughtful design.",
    href: "#",
  },
  {
    id: 3,
    image: "/assets/project-featured-images/sliders/waterway.webp",
    title: "Waterway by Prestige One",
    location: "Meydan Horizon",
    description: "Serene living inspired by the water.",
    href: "#",
  },
  {
    id: 4,
    image: "/assets/project-featured-images/sliders/seaside.webp",
    title: "Seaside by Prestige One",
    location: "Dubai Islands",
    description: "A peaceful waterfront retreat.",
    href: "#",
  },
  {
    id: 6,
    image: "/assets/project-featured-images/sliders/parkway.webp",
    title: "Parkway by Prestige One",
    location: "Meydan Horizon",
    description: "Nature-inspired living designed for balance.",
    href: "#",
  },
  {
    id: 7,
    image: "/assets/project-featured-images/sliders/the-one-1.webp",
    title: "The One by Prestige One",
    location: "Barsha Heights",
    description: "Modern workspaces for today's professionals.",
    href: "#",
  },
  {
    id: 8,
    image: "/assets/project-featured-images/sliders/boulevard.webp",
    title: "The Boulevard by Prestige One",
    location: "DLRC",
    description: "Bold urban living for modern lifestyles.",
    href: "#",
  },
  {
    id: 9,
    image: "/assets/project-featured-images/sliders/coastal-heaven.webp",
    title: "Coastal Haven by Prestige One",
    location: "Dubai Islands",
    description: "Coastal living with breathtaking Gulf views.",
    href: "#",
  },
  {
    id: 10,
    image: "/assets/project-featured-images/sliders/luxury-canal.webp",
    title: "Luxury Canal Residences by Prestige One",
    location: "Dubai Islands",
    description: "Waterfront living inspired by the rhythm of Dubai Islands.",
    href: "#",
  },
  {
    id: 11,
    image: "/assets/project-featured-images/palm-villa/Palm-Jumierah-Villa.webp",
    title: "Palm Villa by Prestige One",
    location: "Palm Jumeirah",
    description: "Exclusive living, designed for privacy.",
    href: "#",
  },
  {
    id: 12,
    image: "/assets/project-featured-images/sliders/luxe-villa.webp",
    title: "Luxe Villa by Prestige One",
    location: "Palm Jumeirah",
    description: "Private villa living with timeless elegance.",
    href: "#",
  },
  {
    id: 13,
    image: "/assets/project-featured-images/sliders/berkeley-north.webp",
    title: "Berkeley Square North",
    location: "Jumeirah Village Circle",
    description: "Timeless architecture inspired by London living.",
    href: "#",
  },
  {
    id: 14,
    image: "/assets/project-featured-images/sliders/berkeley-south.webp",
    title: "Berkeley Square South",
    location: "Jumeirah Village Circle",
    description: "Where open spaces shape everyday living.",
    href: "#",
  },
  {
    id: 15,
    image: "/assets/project-featured-images/sliders/hilton-1.webp",
    title: "Hilton Residences Dubai Maritime City",
    location: "Dubai Maritime City",
    description: "Waterfront living inspired by the Hilton way of life.",
    href: "#",
  },
  {
    id: 16,
    image: "/assets/project-featured-images/sliders/sanctuary.webp",
    title: "Sanctuary Residences by Prestige One",
    location: "Meydan Horizon",
    description: "Panoramic lagoon views overlooking Ras Al Khor Wildlife Sanctuary.",
    href: "#",
  },
  {
    id: 17,
    image: "/assets/project-featured-images/sliders/fauchon.webp",
    title: "FAUCHON Résidences by Prestige One",
    location: "Jumeirah Garden City",
    description: "Parisian-inspired living with the iconic FAUCHON lifestyle.",
    href: "#",
  },
  {
    id: 18,
    image: "/assets/project-featured-images/sliders/golf-1.webp",
    title: "Golf Residences by Prestige One",
    location: "Dubai Sports City",
    description: "Uninterrupted golf course views, every day.",
    href: "#",
  },
  {
    id: 19,
    image: "/assets/project-featured-images/sliders/seascape-1.webp",
    title: "Seascape Villa",
    location: "Palm Jumeirah",
    description: "A private escape by the sea.",
    href: "#",
  },
];

export default residentialDevelopments;
