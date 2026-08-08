export interface DestinationListingItem {
  slug: string;
  title: string;
  tagline: string;
}

/**
 * Controls the destination card order and copy on the destination listing page.
 * Destination images and detail-page content remain in destinations-data.ts.
 */
export const destinationListing: DestinationListingItem[] = [
  {
    slug: "dubai-maritime-city",
    title: "Dubai Maritime City",
    tagline: "Waterfront Living, Close to the Heart of Dubai.",
  },
  {
    slug: "palm-jumeirah",
    title: "Palm Jumeirah",
    tagline: "Dubai's Iconic Island Address.",
  },
  {
    slug: "dubai-islands",
    title: "Dubai Islands",
    tagline: "A New Destination for Island Living.",
  },
  {
    slug: "mohammed-bin-rashid-city",
    title: "Meydan City",
    tagline: "Close to Downtown. Made for Modern Living.",
  },
  {
    slug: "jumeirah-village-circle",
    title: "Jumeirah Village Circle",
    tagline: "Connected, Convenient, Made for Everyday Life.",
  },
  {
    slug: "dubai-sports-city",
    title: "Dubai Sports City",
    tagline: "An Active Community Built Around Sport and Lifestyle.",
  },
  {
    slug: "jumeirah-garden-city",
    title: "Jumeirah Garden City",
    tagline: "Urban Living in the Heart of Dubai.",
  },
  {
    slug: "barsha-heights",
    title: "Barsha Heights",
    tagline: "Central, Connected, and Close to the City's Key Destinations.",
  },
  {
    slug: "majan-city",
    title: "Majan",
    tagline: "A Growing Destination with Opportunity Ahead.",
  },
  {
    slug: "dlrc",
    title: "Dubai Land Residence Complex",
    tagline: "Well Connected. Made for a Growing Community.",
  },
];
