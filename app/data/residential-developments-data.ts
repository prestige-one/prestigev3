export interface DevelopmentSlide {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;
  href: string;
}

const residentialDevelopments: DevelopmentSlide[] = [
  {
    id: 1,
    image: "/assets/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
    title: "Hilton Residences",
    location: "Dubai Maritime City",
    description: "Life at Hilton Residences by Prestige One is a balance of elegance and ease.",
    href: "#",
  },
  {
    id: 2,
    image: "/assets/project-featured-images/fauchon/fauchon-banner.webp",
    title: "FAUCHON Résidences",
    location: "Dubai",
    description: "Stylish branded residences designed around comfort, character, and everyday luxury.",
    href: "#",
  },
  {
    id: 3,
    image: "/assets/project-featured-images/sanctuary/sanctuary-aprtment.webp",
    title: "SANCTUARY Residences",
    location: "Meydan",
    description: "Modern living and commercial spaces combined in a balanced lifestyle setting.",
    href: "#",
  },
  {
    id: 4,
    image: "/assets/project-featured-images/berkeley/Berkeley-Square-North.webp",
    title: "Berkeley Square",
    location: "Jumeirah Village Circle",
    description: "London-inspired architecture featuring clean lines and elegant design.",
    href: "#",
  },
  {
    id: 5,
    image: "/assets/project-featured-images/coastal-haven/Coastal-Haven.webp",
    title: "Coastal Haven",
    location: "Dubai Islands",
    description: "Waterfront residences defining modern coastal living.",
    href: "#",
  },
  {
    id: 6,
    image: "/assets/project-featured-images/parkway/parkway.webp",
    title: "Parkway",
    location: "Meydan Horizon",
    description: "A nature-inspired residential sanctuary rising 33 floors.",
    href: "#",
  },
];

export default residentialDevelopments;
