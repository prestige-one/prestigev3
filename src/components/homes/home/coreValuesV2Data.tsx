import type { ReactNode } from "react";
import IntegrityCrestIcon from "@/components/homes/home/icons/IntegrityCrestIcon";

const IMG = "/assets/images/v2/pages/core-values";

export type CoreValueV2 = {
  id: string;
  title: string;
  image: string;
  description: string;
  icon: string | ReactNode;
};

export const coreValuesV2: CoreValueV2[] = [
  {
    id: "quality",
    title: "Quality",
    image: `${IMG}/fauchon-banner-800.webp`,
    description:
      "We deliver exceptional craftsmanship and meticulous attention to detail in every project—setting the highest standards in everything we build.",
    icon: "workspace_premium",
  },
  {
    id: "innovation",
    title: "Innovation",
    image: `${IMG}/innovation.webp`,
    description:
      "We embrace advanced technologies and visionary design to create distinctive landmarks that shape the future of urban living.",
    icon: "lightbulb",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    image: `${IMG}/sustainability.webp`,
    description:
      "We are committed to responsible development through eco-efficient designs that enhance communities and protect our environment.",
    icon: "eco",
  },
  {
    id: "integrity",
    title: "Integrity",
    image: `${IMG}/integrity.webp`,
    description:
      "We uphold the highest standards of professionalism, transparency, and ethics in all our relationships and operations.",
    icon: <IntegrityCrestIcon />,
  },
];
