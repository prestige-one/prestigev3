import type { Metadata } from "next";
import LuxeVillaProjectPage from "@/components/projects/luxe-villa/LuxeVillaProjectPage";

export const metadata: Metadata = {
  title: "Luxe Villa by Prestige One",
  description:
    "Luxe Villa by Prestige One on Palm Jumeirah — exclusive villas, amenities, neighborhood highlights, and Prestige One craftsmanship.",
};

export default function Page() {
  return <LuxeVillaProjectPage />;
}
