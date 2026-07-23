import type { Metadata } from "next";
import TheResidenceProjectPage from "@/components/projects/the-residence/TheResidenceProjectPage";

export const metadata: Metadata = {
  title: "The Residence by Prestige One",
  description:
    "The Residence by Prestige One in Jumeirah Village Circle — boutique G+5 living, amenities, neighborhood highlights, and construction updates.",
};

export default function Page() {
  return <TheResidenceProjectPage />;
}
