export interface DevelopmentSlide {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;
  href: string;
}

// Order, taglines and locations follow the official Homepage Content Plan
// (Our Developments). Titles keep the "by Prestige One" form where it keeps
// generated slugs stable (enrichment in projects.ts keys on those slugs).
const residentialDevelopments: DevelopmentSlide[] = [
  {
    id: 1,
    image: "/assets/project-featured-images/sliders/vista.webp",
    title: "Vista by Prestige One",
    location: "Dubai Sports City",
    description: "Open views and modern comfort for everyday living.",
    href: "#",
  },
  {
    id: 2,
    image: "/assets/project-featured-images/sliders/residence.webp",
    title: "The Residence by Prestige One",
    location: "Jumeirah Village Circle",
    description: "Thoughtful spaces shaped around contemporary lifestyles.",
    href: "#",
  },
  {
    id: 3,
    image: "/assets/project-featured-images/sliders/waterway.webp",
    title: "Waterway by Prestige One",
    location: "Meydan Horizon",
    description: "Crystal lagoons and peaceful waterfront surroundings.",
    href: "#",
  },
  {
    id: 4,
    image: "/assets/project-featured-images/sliders/seaside.webp",
    title: "Seaside by Prestige One",
    location: "Dubai Islands",
    description: "Island living with the comfort of city life.",
    href: "#",
  },
  {
    id: 6,
    image: "/assets/project-featured-images/sliders/parkway.webp",
    title: "Parkway by Prestige One",
    location: "Meydan Horizon",
    description: "Green spaces, calm surroundings, and a community made for families.",
    href: "#",
  },
  {
    id: 7,
    image: "/assets/project-featured-images/sliders/the-one-1.webp",
    title: "The One by Prestige One",
    location: "Barsha Heights",
    description: "State-of-the-art workspaces for modern professionals.",
    href: "#",
  },
  {
    id: 8,
    image: "/assets/project-featured-images/sliders/boulevard.webp",
    title: "The Boulevard by Prestige One",
    location: "DLRC",
    description: "Wellness-focused amenities with everyday convenience close at hand.",
    href: "#",
  },
  {
    id: 9,
    image: "/assets/project-featured-images/sliders/coastal-heaven.webp",
    title: "Coastal Haven by Prestige One",
    location: "Dubai Islands",
    description: "Private pools, Gulf views, and open spaces by the sea.",
    href: "#",
  },
  {
    id: 10,
    image: "/assets/project-featured-images/sliders/luxury-canal.webp",
    title: "Luxury Canal Residences by Prestige One",
    location: "Dubai Islands",
    description: "Effortless comfort with an elegant way of life.",
    href: "#",
  },
  {
    id: 11,
    image: "/assets/project-featured-images/palm-villa/Palm-Jumierah-Villa.webp",
    title: "Palm Villa by Prestige One",
    location: "Palm Jumeirah",
    description: "Private villa living in one of Dubai's most iconic destinations.",
    href: "#",
  },
  {
    id: 12,
    image: "/assets/project-featured-images/sliders/luxe-villa.webp",
    title: "Luxe Villa by Prestige One",
    location: "Palm Jumeirah",
    description: "Refined villa living with privacy at its heart.",
    href: "#",
  },
  {
    id: 13,
    image: "/assets/project-featured-images/sliders/berkeley-north.webp",
    title: "Berkeley Square North",
    location: "Jumeirah Village Circle",
    description: "Refined finishes and well-planned spaces made for balance and comfort.",
    href: "#",
  },
  {
    id: 14,
    image: "/assets/project-featured-images/sliders/berkeley-south.webp",
    title: "Berkeley Square South",
    location: "Jumeirah Village Circle",
    description: "A landscaped courtyard, natural light, and open spaces to enjoy every day.",
    href: "#",
  },
  {
    id: 15,
    image: "/assets/project-featured-images/sliders/hilton-1.webp",
    title: "Hilton Residences Dubai Maritime City",
    location: "Dubai Maritime City",
    description: "Hilton-branded residences with uninterrupted sea and skyline views.",
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
    description: "Parisian elegance brought to Dubai through the iconic Fauchon brand.",
    href: "#",
  },
  // Real projects kept available beyond the featured plan order.
  {
    id: 18,
    image: "/assets/project-featured-images/sliders/golf-1.webp",
    title: "Golf Residences by Prestige One",
    location: "Dubai Sports City",
    description: "Contemporary residences designed for active family living, with panoramic golf views.",
    href: "#",
  },
  {
    id: 19,
    image: "/assets/project-featured-images/sliders/seascape-1.webp",
    title: "Seascape Villa",
    location: "Palm Jumeirah",
    description: "A private escape into luxury where the serene embrace of the sea welcomes you.",
    href: "#",
  },
];

export default residentialDevelopments;
