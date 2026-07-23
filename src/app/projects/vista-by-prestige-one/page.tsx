import type { Metadata } from "next";
import VistaProjectPage from "@/components/projects/vista/VistaProjectPage";

export const metadata: Metadata = {
  title: "Vista by Prestige One",
  description:
    "Vista by Prestige One in Dubai Sports City — G+15 residences with golf views, curated amenities, neighborhood highlights, and construction updates.",
};

export default function Page() {
  return <VistaProjectPage />;
}
