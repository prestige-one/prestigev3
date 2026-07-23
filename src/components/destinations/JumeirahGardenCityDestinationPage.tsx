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
    value: "Jumeirah Garden City, UAE",
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
    value: "FAUCHON Résidences",
    href: "/projects/fauchon-residences",
  },
];

const HERO_BG = "/assets/images/v2/our-destinations/Jumeirah-Garden-City.webp";
const LOC = "/assets/images/v2/locations";
const PAGES = "/assets/images/v2/pages/pages-internal-images";
const VIDS = "/assets/images/v2/videos";
const BURJ_KHALIFA_VIDEO = `${VIDS}/6600778_Architecture_Cityscape_1280x720.mp4`;
const INVEST_VIDEO =
  `${VIDS}/dubai-city-road-with-buildings-and-futuristic-arch-2023-11-27-04-59-19-utc_compressed.mp4`;
const INVEST_IMAGE = `${LOC}/Dubai-Miracle-Garden.webp`;

const INTRO_COPY =
  "A neighbourhood chosen for its position, Jumeirah Gardens City sits at the centre of Dubai's cultural and commercial life — close to everything, yet removed from distraction. Urban energy is present without being overwhelming, supported by strong connectivity to key business districts, lifestyle destinations, and major road networks. Defined by a composed residential scale rather than density, the area offers a balanced setting where convenience feels effortless and city living remains calm, considered, and refined.";

type NearbyItem = {
  title: string;
  time: string;
  image?: string;
  video?: string;
};

type AccessFacilityItem = {
  title: string;
  body: string;
  video: string;
};

type InvestReasonItem = {
  title: string;
  description: string;
};

const nearbyAttractions: NearbyItem[] = [
  {
    title: "Museum of the Future",
    time: "~5 minutes",
    image: `${PAGES}/museum-of-the.webp`,
  },
  {
    title: "Dubai Mall",
    time: "~5 minutes",
    image: `${LOC}/dubai-mall.webp`,
  },
  {
    title: "Dubai International Airport (DXB)",
    time: "~13 minutes",
    image: `${LOC}/airport-dubai.webp`,
  },
  {
    title: "Palm Jumeirah",
    time: "~15 minutes",
    image: "/assets/images/v2/our-destinations/palm-jumeira.webp",
  },
  {
    title: "Trade Center",
    time: "~5 minutes",
    image: `${LOC}/Convention-Gate-Dubai-World-Trade-Centre.webp`,
  },
  {
    title: "Downtown Dubai",
    time: "~5 minutes",
    image: `${LOC}/downtown.webp`,
  },
  {
    title: "Jumeirah Beach",
    time: "~10 minutes",
    image: `${LOC}/JBR.webp`,
  },
  {
    title: "Dubai Marina",
    time: "~20 minutes",
    image: `${LOC}/dubai-aerial-view-of-marina-skyscrapers-at-sunset.webp`,
  },
  {
    title: "DIFC",
    time: "~5 minutes",
    image:
      "/assets/images/v2/project-featured-images/sanctuary/Dubai-International-Financial-Centre-DIFC-1.webp",
  },
  {
    title: "Burj Khalifa",
    time: "~5 minutes",
    video: BURJ_KHALIFA_VIDEO,
  },
  {
    title: "City Walk",
    time: "~3 minutes",
    image: `${LOC}/city-walk-1024x768-1.webp`,
  },
];

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in Jumeirah Garden City",
    body: "Jumeirah Garden City is a centrally located district offering seamless access to Dubai's key destinations. Positioned just off Sheikh Zayed Road, the area is well connected via major road networks and public transport. Residents benefit from proximity to World Trade Centre Metro Station and Emirates Towers Metro Station, both reachable within minutes. Bus routes and pedestrian-friendly streets further enhance daily connectivity, making commuting across the city efficient and stress-free.",
    video:
      `${VIDS}/dubai-metro-arrive-at-metro-station-2023-11-27-05-33-18-utc-1.mov`,
  },
  {
    title: "Healthcare Establishments Near Jumeirah Garden City",
    body: "Healthcare access around Jumeirah Garden City is comprehensive and reliable. Several leading hospitals and clinics are located within a short drive, ensuring residents have immediate access to quality medical care. From specialized treatments to everyday healthcare services, the area supports a healthy and well-served lifestyle.",
    video: `${VIDS}/5383333_Coll_wavebreak_Hospital_1280x720.mp4`,
  },
  {
    title: "Mosques & Churches",
    body: "Jumeirah Garden City supports a diverse and inclusive community with easy access to places of worship. Mosques and churches are conveniently located nearby, catering to different faiths and fostering a sense of cultural harmony.",
    video: `${VIDS}/2644343_Mosque_Sharjah_1280x720.mp4`,
  },
  {
    title: "Schools Near Jumeirah Garden City",
    body: "Jumeirah Garden City is surrounded by a selection of well-established international schools, making it a practical choice for families seeking quality education close to home. With British, IB, and American curricula available nearby, residents benefit from short commute times and access to some of Dubai's most respected educational institutions.",
    video: `${VIDS}/6249626_Young_School_1280x720.mp4`,
  },
];

const investReasons: InvestReasonItem[] = [
  {
    title: "Ideal Central Location",
    description:
      "Situated between Downtown Dubai, DIFC, and Jumeirah, JGC offers unmatched accessibility to business districts, lifestyle destinations, and transport corridors.",
  },
  {
    title: "Urban Community Living",
    description:
      "Designed as a walkable urban neighborhood, JGC blends residential, retail, and commercial elements, creating a vibrant yet relaxed community environment.",
  },
  {
    title: "Diverse Real Estate Options",
    description:
      "From premium apartments to mixed-use developments, the area caters to end-users and investors seeking long-term value.",
  },
  {
    title: "Strong Investment Potential",
    description:
      "Ongoing infrastructure upgrades and its prime central location position JGC for steady capital appreciation and rental demand.",
  },
];

const projectHighlights = [
  {
    label: "FAUCHON Résidences by Prestige One",
    href: "/projects/fauchon-residences",
    image: "/assets/images/v2/project-featured-images/fauchon/fauchon-banner.webp",
  },
] as const;

function videoMimeType(url: string) {
  if (url.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

function AccessFacilityCard({ title, body, video }: AccessFacilityItem) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-destination-access-card">
      <div className="po-destination-access-media">
        <video
          ref={ref}
          className="po-destination-access-video"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        >
          <source src={video} type={videoMimeType(video)} />
        </video>
        <div className="po-destination-access-media-scrim" aria-hidden="true" />
      </div>
      <div className="po-destination-access-card-body">
        <h3 className="po-destination-access-card-title">{title}</h3>
        <p className="po-destination-access-card-text">{body}</p>
      </div>
    </article>
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
            <video
              ref={ref}
              className="po-project-page-amenity-tile-video"
              poster={image ?? undefined}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            >
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

function InvestMediaPanel({ video, image }: { video: string; image: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <div className="po-destination-invest-media-grid">
      <div className="po-destination-invest-media-item">
        <video ref={ref} className="po-destination-invest-media-video" muted loop playsInline autoPlay preload="metadata">
          <source src={video} type={videoMimeType(video)} />
        </video>
      </div>
      <div className="po-destination-invest-media-item">
        <img src={image} alt="" className="po-destination-invest-media-image" loading="lazy" />
      </div>
    </div>
  );
}

export default function JumeirahGardenCityDestinationPage() {
  return (
    <>
      <SiteHeader />
      <main className="po-destination-page">
        <section
          className="po-destination-hero po-destination-hero--with-contact-rail"
          aria-labelledby="destination-hero-title"
        >
          <div
            className="po-destination-hero-media"
            style={{ backgroundImage: `url(${HERO_BG})` }}
            role="img"
            aria-label="Jumeirah Garden City"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">
                Jumeirah Garden City
              </h1>
            </div>
          </div>
          <div className="po-destination-hero-bottom-rail">
            <ContactDetailCardsSection
              items={DESTINATION_CONTACT_ITEMS}
              showSocial
              className="po-contact-detail-strip--hero-glass"
            />
          </div>
        </section>

        <section className="po-destination-intro" aria-label="About Jumeirah Garden City">
          <div className="container po-destination-intro-copy">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">
              Nearby attractions
            </h2>
            <p className="po-destination-section-lead">Drive times are approximate from Jumeirah Garden City.</p>
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
              <p className="po-destination-invest-kicker">Why Jumeirah Garden City</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">
                Why invest in Jumeirah Garden City?
              </h2>
              <p className="po-destination-invest-intro">
                Jumeirah Garden City offers a prime central address between Downtown Dubai, DIFC, and Jumeirah. With
                excellent connectivity, limited supply, strong rental demand, and ongoing urban development, JGC presents
                solid potential for long-term value and capital appreciation.
              </p>
            </div>
          </div>
          <div className="po-destination-invest-cards-shell">
            <div className="container">
              <div className="po-destination-invest-grid">
                {investReasons.map((item) => (
                  <article key={item.title} className="po-destination-invest-card">
                    <h3 className="po-destination-invest-card-title">{item.title}</h3>
                    <p className="po-destination-invest-card-desc">{item.description}</p>
                  </article>
                ))}
              </div>
              <InvestMediaPanel video={INVEST_VIDEO} image={INVEST_IMAGE} />
            </div>
          </div>
        </section>

        <section className="po-destination-project-spotlight" aria-labelledby="jgc-project-heading">
          <div className="container">
            <h2 id="jgc-project-heading" className="po-destination-project-spotlight-title">
              Prestige One Projects in Jumeirah Garden City
            </h2>
            <p className="po-destination-project-spotlight-lead">
              FAUCHON Résidences by Prestige One brings French art de vivre to Jumeirah Garden City — curated skyline
              residences shaped by design integrity, refined hospitality, and a central address minutes from Downtown
              Dubai, DIFC, and the city&apos;s landmark destinations.
            </p>
            <ul className="po-destination-project-list">
              {projectHighlights.map((project) => (
                <li key={project.label}>
                  <a href={project.href} className="po-destination-project-card">
                    <span className="po-destination-project-card-media">
                      <img src={project.image} alt={project.label} loading="lazy" />
                    </span>
                    <span className="po-destination-project-card-body">
                      <span className="po-destination-project-card-title">{project.label}</span>
                      <span className="po-destination-project-spotlight-cta-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 18l6-6-6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="po-destination-tail" aria-label="More from Prestige One">
          <div className="container">
            <p className="po-destination-tail-text">
              Explore our{" "}
              <Link href="/projects" className="po-destination-tail-link">
                residential projects
              </Link>{" "}
              across Dubai.
            </p>
          </div>
        </section>
      </main>
      <SiteFooterBlock />
    </>
  );
}
