import type { Metadata } from "next";
import GolfResidencesProjectPage from "@/components/projects/golf/GolfResidencesProjectPage";

export const metadata: Metadata = {
  title: "Golf Residences by Prestige One",
  description:
    "Discover Golf Residences by Prestige One in Dubai Sports City, featuring curated amenities, refined interiors, neighborhood highlights, and project updates.",
};

export default function Page() {
  return <GolfResidencesProjectPage />;
}
