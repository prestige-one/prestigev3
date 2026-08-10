export interface DestinationTimelineItem {
  name: string;
  time?: string;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
}

// Replace these temporary images when the final destination artwork is ready.
const destinationTimelineBySlug: Record<string, readonly DestinationTimelineItem[]> = {
  "dubai-maritime-city": [
    {
      name: "Dubai Maritime City",
      image: "/assets/images/v3/hilton-full.webp",
      imageAlt: "Dubai Maritime City waterfront",
      imagePosition: "center 44%",
    },
    {
      name: "Jumeirah",
      time: "10 minutes",
      image: "/assets/images/v3/palm-j.webp",
      imageAlt: "Palm Jumeirah",
    },
    {
      name: "Downtown Dubai",
      time: "15 minutes",
      image: "/assets/images/v3/burj-k.webp",
      imageAlt: "Burj Khalifa in Downtown Dubai",
    },
    {
      name: "DIFC",
      time: "15 minutes",
      image: "/assets/images/v3/difc.webp",
      imageAlt: "Dubai International Financial Centre",
    },
    {
      name: "Dubai International Airport",
      time: "20 minutes",
      image: "/assets/images/v3/dxb.webp",
      imageAlt: "Dubai International Airport",
    },
  ],
};

export function getDestinationTimelineItems(slug: string): readonly DestinationTimelineItem[] {
  return destinationTimelineBySlug[slug] ?? [];
}
