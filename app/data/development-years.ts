// Shared launch-year groups used by About Us and construction listing order.
export interface DevelopmentYear {
  year: string;
  projectSlugs: readonly string[];
}

export const DEVELOPMENT_YEARS: readonly DevelopmentYear[] = [
  {
    year: "2023",
    projectSlugs: ["vista-by-prestige-one", "the-residence-by-prestige-one"],
  },
  {
    year: "2024",
    projectSlugs: ["waterway-by-prestige-one", "seaside-by-prestige-one", "golf-residences-by-prestige-one", "parkway-by-prestige-one", "the-one-by-prestige-one"],
  },
  {
    year: "2025",
    projectSlugs: ["the-boulevard-by-prestige-one", "coastal-haven-by-prestige-one", "luxury-canal-residences-by-prestige-one", "berkeley-square-south", "berkeley-square-north", "hilton-residences-dubai-maritime-city"],
  },
  {
    year: "2026",
    projectSlugs: ["sanctuary-residences-by-prestige-one", "sanctuary-hive-by-prestige-one", "fauchon-residences-by-prestige-one"],
  },
];
