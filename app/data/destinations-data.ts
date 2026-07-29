// Prestige One "Our Destinations" — the Dubai (and beyond) areas the developer
// builds in. Each destination matches projects by location substring(s) so the
// detail page can show every development in that area automatically.

import { getAllProjects, type Project } from "./projects";

export interface Destination {
  slug: string;
  name: string;
  region: string;
  image: string;
  intro: string;
  description: string[];
  highlights: string[];
  /** location substrings used to match projects to this destination */
  match: string[];
}

const OD = "/assets/images/v2/our-destinations";

export const destinations: Destination[] = [
  {
    slug: "dubai-islands",
    name: "Dubai Islands",
    region: "Waterfront · Dubai",
    image: `${OD}/dubai-Islands.webp`,
    intro: "An archipelago of beachfront living minutes from the city.",
    description: [
      "Dubai Islands is a five-island waterfront destination reshaping the emirate's coastline — golden beaches, marinas and resorts wrapped around a relaxed, connected way of life.",
      "Prestige One's addresses here bring waterfront homes within reach of the city, where the sea sits at your doorstep and downtown is a short drive away.",
    ],
    highlights: ["20km of beaches", "Marinas & resorts", "Minutes from Deira & the airport"],
    match: ["Dubai Islands"],
  },
  {
    slug: "mohammed-bin-rashid-city",
    name: "Mohammed Bin Rashid City",
    region: "Central · Dubai",
    image: `${OD}/mbr-city.webp`,
    intro: "A green, central district around the Meydan lifestyle.",
    description: [
      "Mohammed Bin Rashid City places you at the green heart of Dubai — lagoons, parks and the Meydan lifestyle, all within minutes of Downtown and DIFC.",
      "It is where several of Prestige One's Meydan Horizon developments take shape, balancing nature, connectivity and lasting value.",
    ],
    highlights: ["Crystal lagoons & parks", "Minutes from Downtown", "Meydan racecourse & golf"],
    match: ["Meydan"],
  },
  {
    slug: "dubai-sports-city",
    name: "Dubai Sports City",
    region: "Lifestyle · Dubai",
    image: `${OD}/dubai-sport-city.webp`,
    intro: "An active, family-focused community built around sport.",
    description: [
      "Dubai Sports City is a purpose-built community for active living — championship golf, stadiums and academies threaded through walkable, family-friendly neighbourhoods.",
      "Prestige One's residences here are designed for that rhythm of life, with panoramic golf views and amenities that keep every day in motion.",
    ],
    highlights: ["Championship golf course", "Sports academies & stadiums", "Family-friendly community"],
    match: ["Sport"],
  },
  {
    slug: "jumeirah-village-circle",
    name: "Jumeirah Village Circle",
    region: "Community · Dubai",
    image: `${OD}/jumeirah-village-circle-jvc.webp`,
    intro: "One of Dubai's most loved, well-connected communities.",
    description: [
      "Jumeirah Village Circle (JVC) is a self-contained community of villas, townhouses and apartments wrapped around landscaped parks — one of Dubai's most popular addresses for its value and connectivity.",
      "Prestige One's London-inspired Berkeley Square residences and boutique low-rises call JVC home.",
    ],
    highlights: ["Landscaped central parks", "Schools & retail within reach", "Easy access to Al Khail Road"],
    match: ["Jumeirah Village Circle", "JVC"],
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    region: "Iconic · Dubai",
    image: `${OD}/palm-jumeira.webp`,
    intro: "The world's most recognisable address on the water.",
    description: [
      "Palm Jumeirah needs no introduction — an icon of Dubai and one of the most exclusive coastal addresses on earth, lined with private beaches and landmark resorts.",
      "Prestige One's signature villas here are a study in waterfront prestige, where the sea defines every aspect of living.",
    ],
    highlights: ["Private beaches", "Landmark resorts & dining", "Unrivalled sea views"],
    match: ["Palm Jumeirah"],
  },
  {
    slug: "barsha-heights",
    name: "Barsha Heights",
    region: "Connected · Dubai",
    image: `${OD}/barsha-heights.webp`,
    intro: "A central, business-friendly district by the metro.",
    description: [
      "Barsha Heights (Tecom) is a well-connected mixed-use district minutes from Sheikh Zayed Road, the metro and Dubai Internet & Media Cities — ideal for both living and business.",
      "Prestige One's The One rises here as a striking commercial-led development at the centre of it all.",
    ],
    highlights: ["On the metro line", "Beside Sheikh Zayed Road", "Business & residential mix"],
    match: ["Barsha Heights"],
  },
  {
    slug: "dubai-maritime-city",
    name: "Dubai Maritime City",
    region: "Waterfront · Dubai",
    image: `${OD}/dubai-maritime.webp`,
    intro: "A purpose-built peninsula between Port Rashid and Drydocks.",
    description: [
      "Dubai Maritime City is a waterfront peninsula between the historic port and the sea — a growing address for elevated coastal living close to the heart of old and new Dubai.",
      "It is home to Prestige One's Hilton Residences, bringing branded waterfront living to the district.",
    ],
    highlights: ["360° waterfront setting", "Close to Port Rashid & Deira", "Branded residences"],
    match: ["Maritime"],
  },
  {
    slug: "dlrc",
    name: "Dubai Land Residence Complex",
    region: "Community · Dubai",
    image: `${OD}/DLRC.webp`,
    intro: "A fast-growing, value-driven residential community.",
    description: [
      "Dubai Land Residence Complex (DLRC) is an emerging residential district offering space, value and connectivity in one of Dubailand's most active corners.",
      "Prestige One's The Boulevard brings bold, amenity-rich boulevard living to the community.",
    ],
    highlights: ["Value-driven living", "Green, low-density layout", "Quick access to Emirates Road"],
    match: ["DLRC"],
  },
  {
    slug: "jumeirah-garden-city",
    name: "Jumeirah Garden City",
    region: "Central · Dubai",
    image: `${OD}/Jumeirah-Garden-City.webp`,
    intro: "A central urban district moments from the coast.",
    description: [
      "Jumeirah Garden City is a central regeneration district near Sheikh Zayed Road and the Jumeirah coastline — walkable, connected and close to everything that defines city living.",
      "A destination Prestige One continues to watch closely as it grows.",
    ],
    highlights: ["Central Dubai location", "Steps from the coast", "Urban, walkable district"],
    match: ["Jumeirah Garden City"],
  },
  {
    slug: "majan-city",
    name: "Majan",
    region: "Emerging · Dubai",
    image: `${OD}/Majan-city.webp`,
    intro: "An emerging Dubailand community on the rise.",
    description: [
      "Majan is a fast-emerging community within Dubailand — a calm, green, well-priced corner of the city with quick access to the major arteries.",
      "It is where Prestige One's upcoming Vista Hub is taking shape.",
    ],
    highlights: ["Emerging Dubailand address", "Green & low-density", "Strong growth potential"],
    match: ["Majan"],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getProjectsForDestination(dest: Destination): Project[] {
  const terms = dest.match.map((m) => m.toLowerCase());
  return getAllProjects().filter((p) =>
    terms.some((t) => p.location.toLowerCase().includes(t)),
  );
}
