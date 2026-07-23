import type { Metadata } from "next";
import SeascapeVillaProjectPage from "@/components/projects/seascape-villa/SeascapeVillaProjectPage";

export const metadata: Metadata = {
  title: "Seascape Villa by Prestige One",
  description:
    "Seascape Villa by Prestige One on Palm Jumeirah — elegant coastal residences, connectivity, schools, and Prestige One craftsmanship.",
};

export default function Page() {
  return <SeascapeVillaProjectPage />;
}
