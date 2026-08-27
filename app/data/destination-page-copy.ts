interface DestinationPageCopy {
  /** Omit hero fields when the PDF marks the existing hero as "Keep". */
  heroTitle?: string;
  heroLead?: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  developments?: {
    subtitle: string;
    description: string;
    cardCtaLabel?: string;
    showComingSoon?: boolean;
  };
  ctaTitle: string;
  ctaText: string;
}

// Approved English destination copy. "Closing Section" in the supplied PDFs
// maps to the final CTA band, not the contact form. Preserve other locales.
const destinationPageCopy: Readonly<Record<string, DestinationPageCopy>> = {
  "dubai-sports-city": {
    overviewTitle: "Built Around an Active Way of Life.",
    overviewParagraphs: [
      "Dubai Sports City is a purpose-built community for active living, combining golf, international sports venues, schools, retail, and everyday convenience in one connected neighbourhood.",
      "Home to Dubai International Cricket Stadium, Dubai Autodrome, The Els Club golf course, and Sports Village, it brings sport and community into everyday life.",
    ],
    developments: {
      subtitle: "Homes Shaped by Active Living.",
      description: "Explore Prestige One developments created around the active lifestyle and sporting character of Dubai Sports City.",
      cardCtaLabel: "Explore Development",
    },
    ctaTitle: "Dubai Sports City",
    ctaText: "Where Active Living Feels at Home.",
  },
  "dubai-islands": {
    heroTitle: "DUBAI ISLANDS",
    heroLead: "A New Destination for Island Living",
    overviewTitle: "A New Side of Dubai, Shaped by the Sea.",
    overviewParagraphs: [
      "Dubai Islands brings together waterfront living, open coastal surroundings, and easy access to the city. With a growing mix of residences, leisure, and hospitality, it offers a fresh way to experience Dubai with the sea at the heart of everyday life.",
    ],
    developments: {
      subtitle: "Homes Shaped by Island Living.",
      description: "Explore Prestige One developments created to make the most of Dubai Islands’ coastal setting and relaxed way of life.",
      cardCtaLabel: "Explore Development",
    },
    ctaTitle: "Dubai Islands",
    ctaText: "A Different Side of Island Living.",
  },
  "palm-jumeirah": {
    heroTitle: "PALM JUMEIRAH",
    heroLead: "Dubai’s Iconic Island Address.",
    overviewTitle: "Where Island Living Became an Icon.",
    overviewParagraphs: [
      "Palm Jumeirah brings together private beaches, landmark resorts, and a unique island lifestyle. Home to some of Dubai’s best-known attractions, it offers a distinctive waterfront setting while staying within easy reach of Dubai Marina and Downtown.",
    ],
    ctaTitle: "Palm Jumeirah",
    ctaText: "Live at Dubai’s Iconic Island Address.",
  },
  "meydan-city": {
    heroTitle: "MEYDAN CITY",
    heroLead: "Green Living, Connected to Dubai.",
    overviewTitle: "Where Green Living Meets the City.",
    overviewParagraphs: [
      "Meydan City brings together open green spaces, crystal lagoons, and easy access to Dubai’s key destinations. A calm, well-connected setting designed for modern city living.",
    ],
    developments: {
      subtitle: "Designed Around a Greener Side of Dubai.",
      description: "Explore Prestige One developments shaped by Meydan City’s green setting and connected location.",
      cardCtaLabel: "Explore Development",
    },
    ctaTitle: "MEYDAN CITY",
    ctaText: "Where Green Living Meets the City.",
  },
  "jumeirah-village-circle": {
    heroTitle: "JUMEIRAH VILLAGE CIRCLE",
    heroLead: "Community Living, Connected to Dubai.",
    overviewTitle: "Made for Everyday Community Living.",
    overviewParagraphs: [
      "Jumeirah Village Circle brings together homes, landscaped parks, schools, and retail in one connected community. With easy access to Circle Mall and Al Khail Road, it offers a practical and well-connected place to live.",
    ],
    developments: {
      subtitle: "Homes Made for Everyday JVC Living.",
      description: "Explore Prestige One developments created around the comfort, community, and convenience of Jumeirah Village Circle.",
      cardCtaLabel: "Explore Development",
    },
    ctaTitle: "Jumeirah Village Circle",
    ctaText: "Connected to What Matters.",
  },
  "jumeirah-garden-city": {
    heroTitle: "JUMEIRAH GARDEN CITY",
    heroLead: "Central Dubai Living, Close to Everything.",
    overviewTitle: "At the Centre of Dubai Life.",
    overviewParagraphs: [
      "Jumeirah Garden City brings everyday city living into one well-connected neighbourhood. Close to Downtown Dubai, DIFC, City Walk and the Jumeirah coastline, it puts some of the city’s most important destinations within easy reach.",
      "Central, connected, and designed for everyday life.",
    ],
    developments: {
      subtitle: "Designed for Life at the Centre.",
      description: "Prestige One brings its approach to modern living to one of Dubai’s most central and connected neighbourhoods.",
      cardCtaLabel: "Explore Development",
    },
    ctaTitle: "JUMEIRAH GARDEN CITY",
    ctaText: "Live at the Centre of It All.",
  },
  "barsha-heights": {
    heroTitle: "BARSHA HEIGHTS",
    heroLead: "Connected to the City. Made for Modern Life.",
    overviewTitle: "Connected for Work and Everyday Life.",
    overviewParagraphs: [
      "Barsha Heights is a mixed-use district with homes, offices, hotels, and easy access to key parts of Dubai. With metro connections, Sheikh Zayed Road nearby, and a central location between Dubai Internet City and Media City, it brings living and business together in one well-connected area.",
    ],
    developments: {
      subtitle: "Designed for the Way the City Works.",
      description: "Prestige One brings modern spaces to a connected district where business and city life come together.",
      cardCtaLabel: "Explore Development",
    },
    ctaTitle: "BARSHA HEIGHTS",
    ctaText: "Where Dubai Stays Connected.",
  },
  "majan-city": {
    heroTitle: "MAJAN CITY",
    heroLead: "A Growing Community in the Heart of Dubailand.",
    overviewTitle: "A Growing Community, Well Connected to Dubai.",
    overviewParagraphs: [
      "Majan City combines modern community living with easy access across Dubai. Located near Sheikh Mohammed Bin Zayed Road, it is close to popular destinations including Global Village, IMG Worlds of Adventure, and Dubai Miracle Garden.",
    ],
    developments: {
      subtitle: "Designed for a Growing Part of Dubai",
      description: "Prestige One developments in Majan are shaped around a growing community, easy city access, and the changing way people live and work.",
      showComingSoon: true,
    },
    ctaTitle: "MAJAN CITY",
    ctaText: "Where Growth Finds Its Place.",
  },
  "dlrc": {
    heroTitle: "DUBAI LAND RESIDENCE COMPLEX",
    heroLead: "A Growing Community Made for Modern Living.",
    overviewTitle: "Designed for Space, Comfort, and Connection.",
    overviewParagraphs: [
      "Dubai Land Residence Complex is a growing residential community in Dubailand, offering modern living with space, convenience, and easy access across the city.",
      "Located along Al Ain Road and close to key Dubai destinations, the area combines residential developments, green spaces, and everyday amenities in one connected community.",
    ],
    developments: {
      subtitle: "Find a Home That Fits Your Everyday Life.",
      description: "Explore Prestige One developments created for comfort, convenience, and easy city access.",
      cardCtaLabel: "Explore Development",
    },
    ctaTitle: "DUBAI LAND RESIDENCE COMPLEX",
    ctaText: "A Place That Fits Everyday Life.",
  },
};

export function getDestinationPageCopy(slug: string, locale: string): DestinationPageCopy | undefined {
  return locale === "en" && Object.prototype.hasOwnProperty.call(destinationPageCopy, slug)
    ? destinationPageCopy[slug]
    : undefined;
}
