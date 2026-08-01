// Prestige One "Our Destinations" - the Dubai (and beyond) areas the developer
// builds in. Each destination matches projects by location substring(s) so the
// detail page can show every development in that area automatically.

import { getAllProjects, type Project } from "./projects";

export interface DestinationPOI {
  name: string;
  time: string;
}

export interface DestinationStat {
  value: string;
  label: string;
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  image: string;
  intro: string;
  /** 2-3 real paragraphs about the area */
  about: string[];
  /** sub-districts / islands if any */
  subAreas?: string[];
  /** 4 real key stats */
  stats: DestinationStat[];
  /** 5-7 real nearby places with real drive times */
  attractions: DestinationPOI[];
  /** 3-5 real connectivity points */
  transport: string[];
  /** 2-4 real nearby schools / universities */
  education: string[];
  /** 2-3 real nearby hospitals / clinics */
  healthcare: string[];
  /** 1-3 real nearby mosques / churches */
  worship?: string[];
  /** 5-6 real reasons to invest */
  investment: string[];
  /** 3 short highlight phrases */
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
    about: [
      "Dubai Islands is a masterfully designed waterfront destination - a collection of five islands (Deira Island, Dream Island, Island Central, Marina Island and Hills Island) reshaping the emirate's northern coastline with beaches, marinas and resorts.",
      "It blends laid-back island living with genuine city connectivity: Downtown, the historic souks and Dubai International Airport are all a short drive away, while 20 kilometres of beaches and a growing collection of resorts sit on your doorstep.",
    ],
    subAreas: ["Deira Island", "Dream Island", "Island Central", "Hills Island"],
    stats: [
      { value: "20 km", label: "of beaches" },
      { value: "16 min", label: "to DXB Airport" },
      { value: "5", label: "connected islands" },
      { value: "80+", label: "hotels & resorts planned" },
    ],
    attractions: [
      { name: "Dubai Islands Mall", time: "1 min" },
      { name: "Souk Al Marfa", time: "5 min" },
      { name: "Centara Mirage Beach Resort", time: "5 min" },
      { name: "Riu Palace Dubai Island", time: "5 min" },
      { name: "Dubai Islands Marina", time: "7 min" },
      { name: "Dubai International Airport", time: "16 min" },
    ],
    transport: [
      "Well connected via Sheikh Zayed Road and Al Khail Road",
      "Planned metro extensions and dedicated bus routes",
      "Marinas with water taxis and ferry services",
      "16 minutes to Dubai International Airport",
    ],
    education: ["GEMS Royal Dubai School", "The Winchester School"],
    healthcare: ["Al Baraha Hospital", "Dubai Hospital", "New island clinics planned"],
    worship: ["Deira Grand Mosque", "St. Mary's Catholic Church"],
    investment: [
      "Rare waterfront living on Dubai's northern coast",
      "Strong tourism-driven rental demand",
      "Rising property values as the district matures",
      "Minutes from Downtown and the airport",
      "Major ongoing infrastructure investment",
      "Sustainable, master-planned island design",
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
    about: [
      "Mohammed Bin Rashid City (MBR City) is a landmark AED 30 billion master development set at the green heart of Dubai, wrapped around one of the world's largest man-made crystal lagoons and threaded with parks, promenades and the Meydan lifestyle.",
      "Framed by three of the city's key arteries - Sheikh Mohammed Bin Zayed Road (E311), Sheikh Zayed Road (E11) and Al Khail Road (E44) - it puts Downtown, DIFC and the Dubai Mall within a five-minute reach while keeping the calm of lagoons and open green space.",
      "It is where several of Prestige One's Meydan Horizon addresses take shape, balancing nature, connectivity and lasting value in one of Dubai's most sought-after central districts.",
    ],
    subAreas: ["District One", "Sobha Hartland", "Meydan One", "Nad Al Sheba"],
    stats: [
      { value: "AED 30bn", label: "master development" },
      { value: "5 min", label: "to Burj Khalifa" },
      { value: "16 min", label: "to DXB Airport" },
      { value: "3", label: "major highways" },
    ],
    attractions: [
      { name: "Meydan One Mall", time: "3 min" },
      { name: "Ras Al Khor Wildlife Sanctuary", time: "5 min" },
      { name: "The Dubai Mall", time: "5 min" },
      { name: "Burj Khalifa", time: "5 min" },
      { name: "Meydan Racecourse", time: "8 min" },
      { name: "Museum of the Future", time: "15 min" },
      { name: "Dubai International Airport", time: "16 min" },
    ],
    transport: [
      "Bordered by Sheikh Mohammed Bin Zayed Road, Sheikh Zayed Road and Al Khail Road",
      "Business Bay Metro Station minutes away, with a new Meydan metro station planned",
      "Direct 5-minute reach to Downtown Dubai and DIFC",
      "16 minutes to Dubai International Airport",
    ],
    education: [
      "North London Collegiate School",
      "Hartland International School",
      "Swiss International Scientific School",
    ],
    healthcare: ["Medicare Hospital", "Emirates Hospital"],
    worship: ["Nad Al Sheba Great Mosque", "Masjid E Ibad Ur Rehman"],
    investment: [
      "Central position between Downtown, DIFC and Meydan",
      "Government-backed AED 30 billion master plan",
      "Crystal lagoon and parkland setting commanding premium value",
      "Strong rental yields from a prime central address",
      "Five minutes from Burj Khalifa and the Dubai Mall",
      "Continuous infrastructure and lifestyle investment",
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
    about: [
      "Dubai Sports City is a purpose-built community for active living - championship golf, international stadiums and world-class academies threaded through walkable, family-friendly neighbourhoods along Mohammed Bin Zayed Road.",
      "From the Dubai International Cricket Stadium and Dubai Autodrome to The Els Club golf course, sport shapes daily life here, while schools, clinics and retail keep the community entirely self-contained.",
      "Prestige One's residences here are designed for that rhythm of life, with panoramic golf views and amenities that keep every day in motion.",
    ],
    subAreas: ["Victory Heights", "Canal Residence West", "Gallery Villas"],
    stats: [
      { value: "3 min", label: "to Cricket Stadium" },
      { value: "4 min", label: "to The Els Club golf" },
      { value: "20 min", label: "to Burj Khalifa" },
      { value: "9", label: "schools nearby" },
    ],
    attractions: [
      { name: "ICC Academy", time: "3 min" },
      { name: "Dubai International Cricket Stadium", time: "3 min" },
      { name: "The Els Club", time: "4 min" },
      { name: "Dubai Autodrome", time: "5 min" },
      { name: "Dubai Polo & Equestrian Club", time: "12 min" },
      { name: "Burj Khalifa", time: "20 min" },
    ],
    transport: [
      "Positioned along Mohammed Bin Zayed Road (E311)",
      "Easy access to Sheikh Zayed Road and Al Khail Road",
      "Multiple bus routes and nearby metro connections",
      "Uber, Careem and taxi services throughout the community",
    ],
    education: [
      "Victory Heights Primary School",
      "Bradenton Preparatory Academy",
      "Renaissance School",
    ],
    healthcare: ["Mediclinic Parkview Hospital", "Dubai Sports City Clinic", "Aster Clinic"],
    worship: ["Dubai Sports City Mosque", "Grand Horizon Community Mosque"],
    investment: [
      "Purpose-built lifestyle community with strong end-user demand",
      "Diverse stock from apartments to golf-view villas",
      "High rental yields and steady capital appreciation",
      "Growing expatriate and family demand",
      "Direct highway access across the city",
      "Government support and long-term community masterplan",
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
    about: [
      "Jumeirah Village Circle (JVC) is a self-contained 811-hectare community of villas, townhouses and apartments wrapped around landscaped parks - one of Dubai's most popular addresses for its blend of value, community feel and connectivity.",
      "Mediterranean and Arabic-influenced homes sit alongside contemporary low-rises, with Circle Mall, schools and retail all inside the community and Al Khail Road linking residents to the rest of the city in minutes.",
      "Prestige One's London-inspired Berkeley Square residences and boutique low-rises call JVC home.",
    ],
    stats: [
      { value: "811 ha", label: "community size" },
      { value: "4 min", label: "to Circle Mall" },
      { value: "5 min", label: "to Burj Khalifa area" },
      { value: "25 min", label: "to DXB Airport" },
    ],
    attractions: [
      { name: "Circle Mall", time: "4 min" },
      { name: "Dubai Hills Mall", time: "10 min" },
      { name: "Mall of the Emirates", time: "15 min" },
      { name: "The Walk, JBR", time: "22 min" },
      { name: "Museum of the Future", time: "24 min" },
      { name: "Dubai International Airport", time: "25 min" },
    ],
    transport: [
      "Direct access to Al Khail Road (E44) and Sheikh Mohammed Bin Zayed Road (E311)",
      "J01 bus route linking to Mall of the Emirates and neighbouring districts",
      "Al Furjan and The Gardens metro stations minutes away",
      "25 minutes to Dubai International Airport",
    ],
    education: [
      "GEMS Founders School Dubai",
      "Nord Anglia International School",
      "Arcadia School",
      "Sunmarke School",
    ],
    healthcare: ["Karama Medical Centre", "Emirates Hospital Day Surgery, Motor City"],
    worship: ["JVC Mosque", "Saleh Bin Lahej Mosque", "Emirates Baptist Church, Al Barsha"],
    investment: [
      "One of Dubai's most in-demand freehold communities",
      "Strong, consistent rental yields and occupancy",
      "Central location with major road and metro connectivity",
      "Diverse stock from studios to villas suiting every budget",
      "Community-focused design with parks and retail",
      "Proven track record of capital appreciation",
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
    about: [
      "Palm Jumeirah needs no introduction - the largest man-made island on earth, a 2km central trunk fanning into 17 fronds and wrapped by a protective crescent, lined with private beaches and landmark resorts.",
      "It is one of the most exclusive coastal addresses in the world, home to Atlantis, The View observation deck and Aquaventure Waterpark, yet still within a short drive of Dubai Marina and Downtown.",
      "Prestige One's signature villas here are a study in waterfront prestige, where the sea defines every aspect of living.",
    ],
    subAreas: ["The Trunk", "The Fronds", "The Crescent"],
    stats: [
      { value: "17", label: "residential fronds" },
      { value: "6 min", label: "to The View" },
      { value: "15 min", label: "to Dubai Marina" },
      { value: "25 min", label: "to DXB Airport" },
    ],
    attractions: [
      { name: "The View at The Palm", time: "6 min" },
      { name: "Aquaventure Waterpark", time: "7 min" },
      { name: "Dubai Marina", time: "15 min" },
      { name: "The Dubai Mall", time: "16 min" },
      { name: "Burj Khalifa", time: "16 min" },
      { name: "Dubai International Airport", time: "25 min" },
    ],
    transport: [
      "Palm Monorail driverless system from Palm Gateway to Atlantis",
      "Dubai Tram connections at the trunk gateway",
      "Strategic proximity to Sheikh Zayed Road",
      "Taxi and ride-hailing services throughout the island",
    ],
    education: [
      "GEMS Wellington International School",
      "American School of Dubai",
      "The International School of Choueifat",
    ],
    healthcare: [
      "American Hospital Dubai – Palm Jumeirah Clinic",
      "Emirates Hospital Day Surgery, Palm Jumeirah",
      "Mediclinic Parkview Hospital",
    ],
    worship: ["Al Farooq Omar Bin Al Khattab Mosque", "Jumeirah Mosque"],
    investment: [
      "The world's most iconic and prestigious waterfront address",
      "Robust rental yields from luxury and holiday demand",
      "Scarce beachfront supply protecting long-term value",
      "Landmark resorts, dining and leisure on the doorstep",
      "Resilient, blue-chip real estate market",
      "Unrivalled sea and skyline views",
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
    about: [
      "Barsha Heights (formerly Tecom) is a well-connected mixed-use district of residential buildings, corporate offices, serviced apartments and hotels, sitting beside Sheikh Zayed Road and minutes from Dubai Internet and Media Cities.",
      "Bordered by Al Hessa Street (D61) and linked to Al Khail Road, it is served by multiple metro stations and offers a rare central address for both living and business at accessible price points.",
      "Prestige One's The One rises here as a striking commercial-led development at the centre of it all.",
    ],
    stats: [
      { value: "3 min", label: "to The Greens Souk" },
      { value: "8 min", label: "to Mall of the Emirates" },
      { value: "13 min", label: "to Burj Khalifa" },
      { value: "3", label: "metro stations nearby" },
    ],
    attractions: [
      { name: "The Greens Souk", time: "3 min" },
      { name: "Emirates Golf Club", time: "6 min" },
      { name: "Dubai Marina Mall", time: "8 min" },
      { name: "Mall of the Emirates", time: "8 min" },
      { name: "Al Sufouh Beach", time: "9 min" },
      { name: "Kite Beach", time: "11 min" },
      { name: "Burj Khalifa", time: "13 min" },
    ],
    transport: [
      "Beside Sheikh Zayed Road (E11) with access to Al Khail Road (E44)",
      "Served by Mall of the Emirates, Mashreq and Dubai Internet City metro stations",
      "Minutes from Dubai Internet City and Media City business hubs",
      "Extensive bus and ride-hailing coverage",
    ],
    education: [
      "GEMS Founders School",
      "Dubai Heights Academy",
      "American University in Dubai",
      "University of Wollongong in Dubai",
    ],
    healthcare: ["Saudi German Hospital", "Al Zahra Hospital", "Aster Clinic"],
    worship: ["The Greens Mosque", "Osama Bin Zaid Mosque", "The Fellowship Dubai Church"],
    investment: [
      "Central, transit-connected location on Sheikh Zayed Road",
      "Strong rental yields from business-district demand",
      "Mixed-use appeal to tenants, owners and companies",
      "Accessible entry prices for a prime area",
      "Walking distance to three metro stations",
      "Steady capital appreciation potential",
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
    about: [
      "Dubai Maritime City is a purpose-built waterfront peninsula set between the historic Port Rashid and the open sea - a 360-degree coastal address rising close to the heart of both old and new Dubai.",
      "With Sheikh Rashid Road linking it directly into the city, residents are minutes from the Dubai Frame, City Walk and the Gold Souk, and a short drive from Downtown, DIFC and the airport.",
      "It is home to Prestige One's Hilton Residences, bringing branded waterfront living to the district.",
    ],
    subAreas: ["Marina District", "Harbour District", "Marine Cluster"],
    stats: [
      { value: "360°", label: "waterfront setting" },
      { value: "8 min", label: "to Dubai Frame" },
      { value: "15 min", label: "to DXB Airport" },
      { value: "15 min", label: "to Downtown Dubai" },
    ],
    attractions: [
      { name: "Dubai Frame", time: "8 min" },
      { name: "Jumeirah Mosque", time: "8 min" },
      { name: "City Walk", time: "9 min" },
      { name: "Museum of the Future", time: "12 min" },
      { name: "Gold Souk & Old Dubai", time: "12 min" },
      { name: "Burj Khalifa & Dubai Mall", time: "15 min" },
    ],
    transport: [
      "Smooth access via Sheikh Rashid Road into the city core",
      "Minutes from Port Rashid cruise terminal and Deira",
      "15 minutes to Dubai International Airport",
      "Planned marina berths, water transport and upgraded corridors",
    ],
    education: ["The Winchester School", "Dubai Gem Private School", "New Academy School"],
    healthcare: ["Rashid Hospital", "International Modern Hospital"],
    worship: ["Jumeirah Mosque", "Community mosques within the district"],
    investment: [
      "Scarce 360-degree waterfront land driving demand",
      "Strong capital appreciation as the district develops",
      "Central location near Downtown, DIFC and the airport",
      "Branded-residence appeal for tenants and investors",
      "Sustainability-focused masterplan with upgraded marinas",
      "Proximity to Port Rashid's cruise and leisure growth",
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
    about: [
      "Dubai Land Residence Complex (DLRC) is a self-contained freehold community spanning roughly 14 million square feet within Dubailand's expansive vision - a value-driven address offering studios to townhouses and land plots along the Al Ain Road spine.",
      "Anchored by clusters such as Skycourts, Queue Point and neighbouring Liwan and The Villa, it offers space, greenery and community amenities with quick access to Emirates Road and the wider Dubailand attractions.",
      "Prestige One's The Boulevard brings bold, amenity-rich boulevard living to the community.",
    ],
    subAreas: ["Skycourts", "Queue Point", "Liwan", "The Villa"],
    stats: [
      { value: "14M sqft", label: "master community" },
      { value: "10-15 min", label: "to Global Village" },
      { value: "20 min", label: "to Downtown Dubai" },
      { value: "25 min", label: "to DXB Airport" },
    ],
    attractions: [
      { name: "Global Village", time: "10 min" },
      { name: "IMG Worlds of Adventure", time: "12 min" },
      { name: "Dragon Mart", time: "12 min" },
      { name: "Dubai Outlet Mall", time: "12 min" },
      { name: "Downtown Dubai", time: "20 min" },
      { name: "Dubai International Airport", time: "25 min" },
    ],
    transport: [
      "Positioned on the Al Ain Road (E66) spine with Emirates Road access",
      "RTA Bus 30 connecting the community to the Dubai Metro",
      "Proposed metro station under Dubai's 2040 Urban Master Plan",
      "Around 20 minutes to Downtown Dubai and Business Bay",
    ],
    education: ["The Aquila School", "GEMS Wellington Academy", "The Indian International School"],
    healthcare: ["Ace Medical Centre, Skycourts", "Dubai London Clinic, The Villa", "Mediclinic Parkview Hospital"],
    worship: ["Community mosques across Skycourts and Queue Point"],
    investment: [
      "Freehold ownership open to all nationalities",
      "Some of the most affordable entry prices in Dubai",
      "Strong rental yields from value-seeking tenants",
      "Planned metro expansion set to lift accessibility and value",
      "Minutes from Dubailand's major leisure attractions",
      "Continuous development in a fast-growing corridor",
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
    about: [
      "Jumeirah Garden City is a central regeneration district in Al Satwa, set just off Sheikh Zayed Road between Downtown Dubai, DIFC and the Jumeirah coastline - one of the most walkable and connected corners of the city.",
      "Residents are around five minutes from the Museum of the Future, the Dubai Mall and the Trade Centre, with City Walk and Jumeirah Beach on the doorstep and two metro stations within minutes.",
      "A destination Prestige One continues to watch closely as it grows into a blend of residential, retail and commercial life.",
    ],
    stats: [
      { value: "3 min", label: "to City Walk" },
      { value: "5 min", label: "to Downtown & DIFC" },
      { value: "10 min", label: "to Jumeirah Beach" },
      { value: "13 min", label: "to DXB Airport" },
    ],
    attractions: [
      { name: "City Walk", time: "3 min" },
      { name: "Museum of the Future", time: "5 min" },
      { name: "The Dubai Mall", time: "5 min" },
      { name: "DIFC", time: "5 min" },
      { name: "Jumeirah Beach", time: "10 min" },
      { name: "Dubai International Airport", time: "13 min" },
    ],
    transport: [
      "Positioned just off Sheikh Zayed Road (E11)",
      "World Trade Centre and Emirates Towers metro stations minutes away",
      "Bus routes and pedestrian-friendly streets throughout",
      "13 minutes to Dubai International Airport",
    ],
    education: ["Al Shorouq Private School", "Wasl School", "Al Ittihad Private School"],
    healthcare: ["Iranian Hospital, Al Satwa", "Medcare Hospital Al Safa", "Aster Clinic, Emirates Towers"],
    worship: ["Satwa Grand Mosque", "Khadri Mosque", "Obai Bin Kaab Mosque"],
    investment: [
      "Prime central location between Downtown, DIFC and Jumeirah",
      "Limited supply supporting strong rental demand",
      "Walkable, mixed-use urban regeneration district",
      "Steps from the coast and City Walk lifestyle",
      "Ongoing infrastructure driving capital appreciation",
      "13 minutes from the international airport",
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
    about: [
      "Majan is a fast-emerging community within Dubailand, set off Sheikh Mohammed Bin Zayed Road (E311) - a calm, green and well-priced corner of the city bordering the lush Al Barari neighbourhood.",
      "It offers quick access to Dubai Silicon Oasis and Arabian Ranches, and sits minutes from Dubailand's headline attractions including Global Village, IMG Worlds of Adventure and the Miracle and Butterfly Gardens.",
      "It is where Prestige One's upcoming Vista Hub is taking shape.",
    ],
    stats: [
      { value: "3 min", label: "to Dunecrest School" },
      { value: "10 min", label: "to Dubai Silicon Oasis" },
      { value: "18 min", label: "to DXB Airport" },
      { value: "E311", label: "on the highway spine" },
    ],
    attractions: [
      { name: "Global Village", time: "10 min" },
      { name: "IMG Worlds of Adventure", time: "12 min" },
      { name: "Dubai Miracle Garden", time: "12 min" },
      { name: "Dubai Butterfly Garden", time: "12 min" },
      { name: "Dubai Silicon Oasis", time: "10 min" },
      { name: "Arabian Ranches", time: "14 min" },
    ],
    transport: [
      "Positioned off Sheikh Mohammed Bin Zayed Road (E311)",
      "Quick links to Dubai Silicon Oasis and Arabian Ranches",
      "18 minutes to Dubai International Airport",
      "Bus routes and ride-hailing serving the Dubailand corridor",
    ],
    education: ["Dunecrest American School", "GEMS FirstPoint School", "The Aquila School"],
    healthcare: [
      "Health Avenue Polyclinic",
      "Dr. Kamkar Medical & Physiotherapy Centre",
      "Mediclinic Parkview Hospital",
    ],
    worship: ["Community mosques within Majan and Al Barari"],
    investment: [
      "Emerging Dubailand address with strong growth potential",
      "Attractive entry prices and freehold ownership",
      "Green, low-density living beside Al Barari",
      "Continuous development lifting future value",
      "Minutes from Dubailand's major attractions",
      "Direct E311 highway access across the city",
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
