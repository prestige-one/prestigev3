import type { Metadata } from "next";
import Vista3DViewerPage from "@/components/projects/vista/Vista3DViewerPage";

export const metadata: Metadata = {
  title: "Vista 3D Viewer",
  description:
    "Explore the Vista by Prestige One tower exterior in 3D. Rotate and zoom the building model in your browser.",
};

export default function Vista3DViewerRoute() {
  return <Vista3DViewerPage />;
}
