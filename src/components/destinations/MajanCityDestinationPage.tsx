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
    value: "Majan City, Dubailand, Dubai, UAE",
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
];

const HERO_BG = "/assets/images/v2/our-destinations/Majan-city.webp";

const INTRO_COPY =
  "Majan is a rapidly emerging mixed-use community in Dubailand, Dubai, strategically located along Sheikh Mohammed Bin Zayed Road (E311) and known for its balanced lifestyle, modern residential offerings, and strong growth potential. Spanning over millions of square feet, Majan bridges urban convenience with suburban tranquillity, making it ideal for families, professionals and long-term investors alike. The neighbourhood features contemporary apartment living, accessible amenities, green spaces, retail conveniences, and is well connected to Dubai's major highways and key destinations such as Downtown Dubai, Global Village and Dubai Marina.";

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
    title: "Burj Al Arab",
    time: "~20 minutes",
    image: "/assets/images/v2/pages/pages-internal-images/Burj-Al-Arab.webp",
  },
  {
    title: "Mall of the Emirates",
    time: "~16 minutes",
    image: "/assets/images/v2/locations/mall-of-the-emirates.webp",
  },
  {
    title: "Dubai International Airport (DXB)",
    time: "~20 minutes",
    image: "/assets/images/v2/locations/airport-dubai.webp",
  },
  {
    title: "IMG Worlds of Adventure",
    time: "~5 minutes",
    image: "/assets/images/v2/pages/pages-internal-images/IMG-Worlds-of-Adventure-dubai.webp",
  },
  {
    title: "Global Village",
    time: "~5 minutes",
    image: "/assets/images/v2/pages/pages-internal-images/global-village-dubai-768x512.webp",
  },
  {
    title: "Silicon Central Mall",
    time: "~8 minutes",
    image: "/assets/images/v2/pages/pages-internal-images/Silicon-Central-Mall.webp",
  },
  {
    title: "City Land Mall",
    time: "~8 minutes",
    image: "/assets/images/v2/pages/pages-internal-images/cityland-mall-website.webp",
  },
  {
    title: "Al Barari Park",
    time: "~3 minutes",
    image: "/assets/images/v2/pages/pages-internal-images/Majan-Public-Park-dubai.webp",
  },
  {
    title: "Burj Khalifa & Dubai Mall",
    time: "~20 minutes",
    video: "/assets/images/v2/videos/6600778_Architecture_Cityscape_1280x720.mp4",
  },
  {
    title: "Majan Public Park",
    time: "~3 minutes",
    image: "/assets/images/v2/pages/pages-internal-images/Majan-Public-Park-dubai.webp",
  },
];

const accessFacilities: AccessFacilityItem[] = [
  {
    title: "Transportation in Majan City",
    body: "Sheikh Mohammed Bin Zayed Road (E311) provides direct and efficient road access throughout Dubai and beyond. Short commuting times make the city centre, business districts, and airport reachable within 20-30 minutes by car. Public transport options are limited currently, with taxis, ride-hailing services, and private vehicles being the primary mode of travel.",
    video: "/assets/images/v2/videos/City-Transport-Highway_Road_1280x720.mp4",
  },
  {
    title: "Healthcare Establishments Near Majan City",
    body: "Majan City is strategically located near a range of hospitals and medical clinics in Dubailand and neighboring communities, offering residents convenient access to essential healthcare services. With well-established medical facilities just a short drive away, the community ensures reliable and timely medical care for families and professionals alike.",
    video: "/assets/images/v2/videos/health-care.mp4",
  },
  {
    title: "Mosques & Churches",
    body: "Majan City is home to several mosques, including Umm Al Qura Masjid and Masjid Hussain Al Bahri, providing residents with convenient on-site locations for daily prayers and community gatherings. Christian places of worship such as Dubai City Church and St. Mary's Catholic Church are also accessible within a reasonable drive, supporting the spiritual and cultural needs of residents from diverse backgrounds.",
    video: "/assets/images/v2/videos/2644343_Mosque_Sharjah_1280x720.mp4",
  },
  {
    title: "Schools Near Majan City",
    body: "Majan City residents enjoy excellent access to a range of respected nurseries and schools just minutes from home, including Dunecrest American School, Odyssey Nursery, GEMS FirstPoint School, and GEMS Winchester School, catering to early childhood through secondary education. These nearby institutions offer diverse international curricula and strong academic environments, making Majan an ideal choice for families seeking quality education close to their residence.",
    video: "/assets/images/v2/videos/schools.mp4",
  },
];

const investReasons: InvestReasonItem[] = [
  {
    title: "Affordable Entry with High Growth Potential",
    description:
      "Majan offers competitively priced properties compared to central Dubai locations, making it attractive for first-time investors and buyers seeking long-term capital growth in an emerging district.",
    bullets: [],
  },
  {
    title: "Strong Capital Appreciation",
    description:
      "As part of the wider Dubailand master plan, Majan continues to benefit from infrastructure development and increasing residential demand, supporting steady property value appreciation over time.",
    bullets: [],
  },
  {
    title: "Strategic Dubailand Location",
    description:
      "Positioned along Sheikh Mohammed Bin Zayed Road (E311), Majan provides seamless connectivity to Downtown Dubai, Business Bay, Dubai Marina, and major leisure destinations across the city.",
    bullets: [],
  }
];

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
      {bullets.length > 0 ? (
        <ul className="po-destination-invest-list">
          {bullets.map((line) => (
            <li key={line} className="po-destination-invest-list-item">
              <InvestCheckIcon />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default function MajanCityDestinationPage() {
  return (
    <>
      <SiteHeader />
      <main className="po-destination-page">
        <section className="po-destination-hero po-destination-hero--with-contact-rail" aria-labelledby="destination-hero-title">
          <div
            className="po-destination-hero-media"
            style={{ backgroundImage: `url(${HERO_BG})` }}
            role="img"
            aria-label="Majan City"
          />
          <div className="po-destination-hero-overlay" aria-hidden="true" />
          <div className="po-destination-hero-frame">
            <div className="container po-destination-hero-title-wrap">
              <h1 id="destination-hero-title" className="po-destination-hero-title">
                Majan City
              </h1>
            </div>
          </div>
          <div className="po-destination-hero-bottom-rail">
            <ContactDetailCardsSection items={DESTINATION_CONTACT_ITEMS} showSocial className="po-contact-detail-strip--hero-glass" />
          </div>
        </section>

        <section className="po-destination-intro" aria-label="About Majan City">
          <div className="container po-destination-intro-copy">
            <p className="po-destination-intro-text">{INTRO_COPY}</p>
          </div>
        </section>

        <section className="po-destination-nearby" aria-labelledby="destination-nearby-heading">
          <div className="container po-destination-nearby-intro">
            <h2 id="destination-nearby-heading" className="po-destination-section-title">
              Nearby attractions
            </h2>
            <p className="po-destination-section-lead">Drive times are approximate from Majan City.</p>
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
              <p className="po-destination-invest-kicker">Why Majan</p>
              <h2 id="destination-invest-heading" className="po-destination-invest-title">
                Why invest in Majan City?
              </h2>
              <p className="po-destination-invest-intro">
                Majan&apos;s strategic location, expanding infrastructure, and competitive property pricing make it a
                high-potential investment destination within Dubailand. Backed by future-focused community planning
                and rising residential demand, Majan offers investors a balanced opportunity for capital appreciation
                and sustainable rental returns.
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
