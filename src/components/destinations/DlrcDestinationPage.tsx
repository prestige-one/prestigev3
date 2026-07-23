"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import ContactDetailCardsSection, {
  type ContactDetailCardItem,
} from "@/components/common/ContactDetailCardsSection";
import { COMPANY_CONTACT } from "@/data/company-contact";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const DESTINATION_CONTACT_ITEMS: ContactDetailCardItem[] = [
  {
    icon: "pin",
    label: "Address:",
    value: "Dubai Land Residence Complex, UAE",
  },
  {
    icon: "phone",
    label: "Phone:",
    value: COMPANY_CONTACT.phoneDisplay,
    href: COMPANY_CONTACT.phoneTel,
  },
  {
    icon: "email",
    label: "Email:",
    value: COMPANY_CONTACT.email,
    href: COMPANY_CONTACT.emailMailto,
  },
  {
    icon: "globe",
    label: "Project:",
    value: "The Boulevard by Prestige One",
    href: "/projects/the-boulevard-by-prestige-one/",
  },
];

const HERO_BG = "/assets/images/v2/our-destinations/DLRC.webp";

const INTRO_COPY =
  "Dubai Land Residence Complex (DLRC) is a vibrant residential corridor in Dubailand where modern living, family-friendly amenities, and strong connectivity come together. With landmark attractions nearby and a growing community infrastructure, DLRC offers residents and investors an accessible address at the heart of one of Dubai's most dynamic growth zones.";

const BURJ_KHALIFA_VIDEO =
  "/assets/images/v2/videos/6600778_Architecture_Cityscape_1280x720.mp4";

const BOTTOM_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/v2-Teaser-Video_The-Boulevard.mp4";

type NearbyItem = {
  title: string;
  time: string;
  image?: string;
  video?: string;
};

type AccessFacilityItem = {
  title: string;
  body: string;
  video?: string;
};

type InvestReasonItem = {
  title: string;
  description: string;
  bullets: string[];
};

const nearbyAttractions: NearbyItem[] = [
  {
    title: "IMG Worlds of Adventure",
    time: "~8 minutes",
    image: "/assets/images/v2/locations/hfpqyV7B-IMG-Dubai-UAE.webp",
  },
  {
    title: "Global Village",
    time: "~12 minutes",
    image: "/assets/images/v2/locations/dubai-expo-2020.webp",
  },
  {
    title: "Dubai Miracle Garden",
    time: "~15 minutes",
    image: "/assets/images/v2/locations/Dubai-Miracle-Garden.webp",
  },
  {
    title: "Hamdan Sports Complex",
    time: "~10 minutes",
    image: "/assets/images/v2/locations/hamdan-sports-complex-poi.webp",
  },
  {
    title: "Meydan Racecourse",
    time: "~18 minutes",
    image: "/assets/images/v2/locations/Meydan-Racecourse-scaled.webp",
  },
  {
    title: "Burj Khalifa",
    time: "~25 minutes",
    video: BURJ_KHALIFA_VIDEO,
  },
];

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in DLRC",
    body: "DLRC enjoys strong road connectivity across Dubailand with direct access to major highways linking Dubai Marina, Downtown, and business districts. Public transport, taxis, and ride-hailing services are readily available, while planned community infrastructure continues to improve everyday mobility for residents.",
    video:
      "/assets/images/v2/videos/dubai-city-road-with-buildings-and-futuristic-arch-2023-11-27-04-59-19-utc_compressed.mp4",
  },
  {
    title: "Healthcare Establishments in DLRC",
    body: "Residents benefit from clinics and medical centres across the Dubailand corridor, with larger hospitals and specialist facilities within a short drive in Arabian Ranches, Dubai Silicon Oasis, and surrounding districts.",
    video: "/assets/images/v2/videos/Dubai-healthccare.mp4",
  },
  {
    title: "Mosques in DLRC",
    body: "Community mosques serve daily prayer across DLRC and neighbouring Dubailand districts, with additional places of worship easily reachable across the wider residential corridor.",
    video: "/assets/images/v2/videos/2644343_Mosque_Sharjah_1280x720.mp4",
  },
  {
    title: "Schools in DLRC",
    body: "Families can access reputable schools in the Dubailand corridor including GEMS FirstPoint School, Repton School Dubai, and The Aquila School—offering British and international curricula within a short drive of DLRC.",
    video: "/assets/images/v2/videos/6249880_Teacher_Classroom_1280x720.mp4",
  },
];

const investReasons: InvestReasonItem[] = [
  {
    title: "Central Dubailand address",
    description:
      "DLRC sits within Dubailand's established residential corridor with convenient access to major roads and city destinations.",
    bullets: [
      "Strong highway connectivity",
      "Accessible from key Dubai districts",
      "Growing community infrastructure",
    ],
  },
  {
    title: "Family-friendly lifestyle",
    description:
      "The neighbourhood blends modern residences with parks, retail, and leisure attractions suited to families and end users.",
    bullets: [
      "Community-focused planning",
      "Nearby entertainment destinations",
      "Balanced suburban-city living",
    ],
  },
  {
    title: "Attraction-led demand",
    description:
      "World-class leisure destinations nearby support long-term rental and resale interest in the corridor.",
    bullets: [
      "IMG Worlds and Global Village proximity",
      "Strong tourism and leisure draw",
      "Enduring lifestyle appeal",
    ],
  },
  {
    title: "Prestige One presence",
    description:
      "Prestige One developments in DLRC bring design-led residences and boulevard living to this growing district.",
    bullets: [
      "The Boulevard by Prestige One",
      "Design-led residential product",
      "Trusted developer track record",
    ],
  },
  {
    title: "Value growth corridor",
    description:
      "Dubailand continues to mature as a residential destination with improving amenities and investor confidence.",
    bullets: [
      "Long-term district development",
      "Rising community completion",
      "Attractive entry positioning",
    ],
  },
  {
    title: "Rental and end-user appeal",
    description:
      "DLRC attracts both investors and residents seeking space, amenities, and connectivity at a compelling price point.",
    bullets: [
      "Diverse buyer and tenant demand",
      "Strong lifestyle proposition",
      "Sustained occupancy potential",
    ],
  },
];

const projectHighlights = [
  {
    label: "The Boulevard by Prestige One",
    href: "/projects/the-boulevard-by-prestige-one/",
    image: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp",
  },
] as const;

function videoMimeType(url: string) {
  if (url.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

function InvestCheckIcon() {
  return (
    <svg className="po-destination-invest-check" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DestinationNearbyTile({ title, time, image, video }: NearbyItem) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video) return;
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-project-page-amenity-tile po-destination-nearby-tile">
      <div className="po-project-page-amenity-tile-media">
        {video ? (
          <>
            <video ref={ref} className="po-project-page-amenity-tile-video" poster={image ?? undefined} muted loop playsInline autoPlay preload="auto">
              <source src={video} type={videoMimeType(video)} />
            </video>
            <div className="po-project-page-amenity-tile-scrim" aria-hidden="true" />
          </>
        ) : (
          <>
            <img src={image} alt="" className="po-destination-nearby-img" loading="lazy" />
            <div className="po-project-page-amenity-tile-scrim" aria-hidden="true" />
          </>
        )}
        <div className="po-destination-nearby-caption">
          <p className="po-destination-nearby-caption-text">
            <span className="po-destination-nearby-caption-name">{title}</span>
            <span className="po-destination-nearby-caption-time"> {time}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

function AccessFacilityCard({ title, body, video }: AccessFacilityItem) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !video) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-destination-access-card">
      <div className="po-destination-access-media">
        {video ? (
          <video ref={ref} className="po-destination-access-video" muted loop playsInline autoPlay preload="metadata">
            <source src={video} type={videoMimeType(video)} />
          </video>
        ) : (
          <div className="po-destination-access-media-fallback" aria-hidden="true" />
        )}
        <div className="po-destination-access-media-scrim" aria-hidden="true" />
      </div>
      <div className="po-destination-access-card-body">
        <h3 className="po-destination-access-card-title">{title}</h3>
        <p className="po-destination-access-card-text">{body}</p>
      </div>
    </article>
  );
}

function InvestReasonCard({ title, description, bullets }: InvestReasonItem) {
  return (
    <article className="po-destination-invest-card">
      <h3 className="po-destination-invest-card-title">{title}</h3>
      <p className="po-destination-invest-card-desc">{description}</p>
      <ul className="po-destination-invest-list">
        {bullets.map((line) => (
          <li key={line} className="po-destination-invest-list-item">
            <InvestCheckIcon />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function DlrcDestinationPage() {
  const wideRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = wideRef.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="po-destination-page">
        <section className="po-destination-hero po-destination-hero--with-contact-rail" aria-labelledby="destination-hero-title">
          <div
            className="po-destination-hero-media"
            style={{ backgroundImage: `url(${HERO_BG})` }}
            role="img"
            aria-label="Dubai Land Residence Complex"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">
                Dubai Land Residence Complex
              </h1>
            </div>
          </div>
          <div className="po-destination-hero-bottom-rail">
            <ContactDetailCardsSection items={DESTINATION_CONTACT_ITEMS} showSocial className="po-contact-detail-strip--hero-glass" />
          </div>
        </section>

        <section className="po-destination-intro" aria-label="About Dubai Land Residence Complex">
          <div className="container po-destination-intro-copy">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">
              Nearby attractions
            </h2>
            <p className="po-destination-section-lead">Drive times are approximate from DLRC.</p>
          </div>
          <div className="po-project-page-amenities-fullbleed">
            <div className="po-project-page-amenities-masonry">
              {nearbyAttractions.map((item) => (
                <DestinationNearbyTile key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="po-destination-access" aria-labelledby="destination-access-heading">
          <div className="container">
            <h2 id="destination-access-heading" className="po-destination-access-heading">
              Accessibility &amp; facilities
            </h2>
            <div className="po-destination-access-grid">
              {accessFacilities.map((item) => (
                <AccessFacilityCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="po-destination-invest" aria-labelledby="destination-invest-heading">
          <div className="po-destination-invest-header">
            <div className="container po-destination-invest-header-inner">
              <p className="po-destination-invest-kicker">Why DLRC</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">
                Why invest in Dubai Land Residence Complex?
              </h2>
              <p className="po-destination-invest-intro">
                DLRC combines family-friendly living, landmark leisure destinations, and strong connectivity—making it a
                compelling choice for residents and investors alike.
              </p>
            </div>
          </div>
          <div className="po-destination-invest-cards-shell">
            <div className="container">
              <div className="po-destination-invest-grid">
                {investReasons.map((item) => (
                  <InvestReasonCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="po-destination-project-spotlight" aria-labelledby="dlrc-project-heading">
          <div className="container">
            <h2 id="dlrc-project-heading" className="po-destination-project-spotlight-title">
              Prestige One Projects in DLRC
            </h2>
            <p className="po-destination-project-spotlight-lead">
              The Boulevard by Prestige One brings bold boulevard living to the heart of DLRC—rising 18 floors with
              curated amenities, design-led residences, and a vibrant community address.
            </p>
            <ul className="po-destination-project-list">
              {projectHighlights.map((project) => (
                <li key={project.label}>
                  <Link href={project.href} className="po-destination-project-card">
                    <span className="po-destination-project-card-media">
                      <img src={project.image} alt={project.label} loading="lazy" />
                    </span>
                    <span className="po-destination-project-card-body">
                      <span className="po-destination-project-card-title">{project.label}</span>
                      <span className="po-destination-project-spotlight-cta-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="po-destination-wide-video" aria-label="The Boulevard by Prestige One">
          <video ref={wideRef} className="po-destination-wide-video-el" muted loop playsInline autoPlay preload="metadata">
            <source src={BOTTOM_WIDE_VIDEO} type="video/mp4" />
          </video>
        </section>

        <section className="po-destination-tail" aria-label="More from Prestige One">
          <div className="container">
            <p className="po-destination-tail-text">
              Explore our <Link href="/projects" className="po-destination-tail-link">all residential projects</Link> across Dubai.
            </p>
          </div>
        </section>
      </main>
      <SiteFooterBlock />
    </>
  );
}
