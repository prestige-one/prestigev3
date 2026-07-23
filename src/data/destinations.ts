export type DestinationItem = {
  id: string;
  menuTitle: string;
  footerLabel: string;
  href: string;
  description: string;
  /** Shorter copy for the destinations mega menu (~2 lines). */
  menuDescription: string;
  image: string;
};

/** Canonical destination order for nav, footer, and listing pages. */
export const DESTINATIONS: DestinationItem[] = [
  {
    id: "dubai-maritime-city",
    menuTitle: "Dubai Maritime City",
    footerLabel: "Dubai Maritime City",
    href: "/our-destinations/dubai-maritime-city",
    description:
      "Waterfront district between Port Rashid and the Dubai skyline — connectivity, lifestyle, and Prestige One developments.",
    menuDescription: "Waterfront district between Port Rashid and the Dubai skyline",
    image: "/assets/images/v2/our-destinations/dubai-maritime.webp",
  },
  {
    id: "palm-jumeirah",
    menuTitle: "Palm Jumeirah",
    footerLabel: "Palm Jumeirah",
    href: "/our-destinations/palm-jumeirah",
    description: "Iconic island living and premium waterfront positioning on Dubai's best-known archipelago.",
    menuDescription: "Iconic island living and premium waterfront on Dubai's archipelago",
    image: "/assets/images/v2/our-destinations/dubai-golf-residences.webp",
  },
  {
    id: "dubai-islands",
    menuTitle: "Dubai Islands",
    footerLabel: "Dubai Islands",
    href: "/our-destinations/dubai-islands",
    description: "Canal-front and island living with room to grow in one of Dubai's emerging coastal zones.",
    menuDescription: "Canal-front and island living in Dubai's emerging coastal zones",
    image: "/assets/images/v2/our-destinations/dubai-Islands.webp",
  },
  {
    id: "meydan-city",
    menuTitle: "Meydan City",
    footerLabel: "Meydan City",
    href: "/our-destinations/mohammed-bin-rashid-city",
    description:
      "A prestigious address anchored by Meydan Horizon — where nature-inspired living meets strong city connectivity.",
    menuDescription: "A prestigious address anchored by Meydan Horizon and city connectivity",
    image: "/assets/images/v2/our-destinations/Meydan-City.webp",
  },
  {
    id: "jumeirah-village-circle",
    menuTitle: "Jumeirah Village Circle",
    footerLabel: "Jumeirah Village Circle (JVC)",
    href: "/our-destinations/jumeirah-village-circle",
    description: "A balanced community setting with strong appeal for families and long-term residents.",
    menuDescription: "A balanced community setting with strong appeal for families",
    image: "/assets/images/v2/our-destinations/jumeirah-village-circle-jvc.webp",
  },
  {
    id: "dubai-sports-city",
    menuTitle: "Dubai Sports City",
    footerLabel: "Dubai Sports City",
    href: "/our-destinations/dubai-sports-city",
    description: "Active living, major venues, and a clear lifestyle identity within Dubai's sports district.",
    menuDescription: "Active living, major venues, and lifestyle in Dubai's sports district",
    image: "/assets/images/v2/our-destinations/dubai-sport-city.webp",
  },
  {
    id: "jumeirah-garden-city",
    menuTitle: "Jumeirah Garden City",
    footerLabel: "Jumeirah Garden City",
    href: "/our-destinations/jumeirah-garden-city",
    description:
      "A refined urban district with strong access to Dubai's central landmarks, dining, and lifestyle destinations.",
    menuDescription: "A refined urban district with access to Dubai's central landmarks",
    image: "/assets/images/v2/our-destinations/Jumeirah-Garden-City.webp",
  },
  {
    id: "dlrc",
    menuTitle: "Dubai Land Residence Complex",
    footerLabel: "Dubai Land Residence Complex",
    href: "/our-destinations/dlrc",
    description:
      "A vibrant residential corridor in Dubai Land with family-friendly amenities and Prestige One developments.",
    menuDescription: "A vibrant residential corridor in Dubai Land with family amenities",
    image: "/assets/images/v2/our-destinations/DLRC.webp",
  },
  {
    id: "barsha-heights",
    menuTitle: "Barsha Heights",
    footerLabel: "Barsha Heights",
    href: "/our-destinations/barsha-heights",
    description: "A well-connected urban hub with strong access to business corridors and city amenities.",
    menuDescription: "A well-connected urban hub with access to business corridors",
    image: "/assets/images/v2/our-destinations/barsha-heights.webp",
  },
];

/** Destinations not in the primary order — shown after the main list in the footer. */
export const FOOTER_EXTRA_DESTINATIONS = [{ label: "Majan City", href: "/our-destinations/majan-city" }] as const;

export const destinationMenuItems = DESTINATIONS.map((item) => ({
  link: item.href,
  title: item.menuTitle,
}));

/** Excluded from the footer's "Popular Areas" list only — still shown elsewhere (menus, destinations page). */
const FOOTER_HIDDEN_DESTINATION_IDS = new Set(["dlrc", "barsha-heights"]);

export const destinationFooterItems = [
  ...DESTINATIONS.filter((item) => !FOOTER_HIDDEN_DESTINATION_IDS.has(item.id)).map((item) => ({
    label: item.footerLabel,
    href: item.href,
  })),
  ...FOOTER_EXTRA_DESTINATIONS.map((item) => ({ label: item.label, href: item.href })),
];
