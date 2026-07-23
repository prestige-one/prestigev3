"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import {
  ProjectGalleryImageCard,
  ProjectImageGalleryLightbox,
  type ProjectGalleryItem,
} from "@/components/projects/project-page/ProjectImageGalleryLightbox";
import { LocaleAmenityCard } from "@/components/projects/project-page/LocaleAmenityCard";
import ProjectRegisterInterestButton from "@/components/projects/project-page/ProjectRegisterInterestButton";
import ProjectConstructionCtaSection from "@/components/projects/project-page/ProjectConstructionCtaSection";
import { PROJECT_CONSTRUCTION_UPDATE_HREFS } from "@/data/projectConstructionUpdateLinks";

type AmenityVideoRow = {
  label: string;
  video: string;
  poster?: string;
};

const HERO_IMG =
  "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-North.webp";
const HERO_VIDEO =
  "/assets/images/v2/project-features-videos/v3/Berkeley.mp4";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const LOCATION_DESTINATION = "/our-destinations/jumeirah-village-circle/";

const PROJECT_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/v2-Teaser-Video_Berkeley.mp4";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57726.250386632615!2d55.271532549999996!3d25.2742637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4384740a5241%3A0xe6d78cfd14c6ada3!2sMadinat%20Dubai%20Al%20Melaheyah%20-%20Dubai!5e0!3m2!1sen!2sae!4v1775290787017!5m2!1sen!2sae";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Indoor Kids's Play Area",
    video:
      "/assets/images/v2/videos/indoor-kids-play-area-2.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Mini Golf",
    video:
      "/assets/images/v2/videos/mini-golf-2.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Covered Football Court",
    video:
      "/assets/images/v2/videos/covered-football-court-2.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Courtyard Pool",
    video:
      "/assets/images/v2/videos/courtyard-pool.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Padel Court",
    video:
      "/assets/images/v2/videos/padel-court-2.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Fitness Center",
    video:
      "/assets/images/v2/videos/sport-centre.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Outdoor Cinema",
    video:
      "/assets/images/v2/videos/outdoor-cinema-2.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige One Clubhouse",
    video:
      "/assets/images/v2/videos/clubhouse-2.mp4",
    poster: HERO_IMG,
  },
];

const berkeleyGalleryItems: ProjectGalleryItem[] = [
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Berkeley-Square-2BR-Living-Room-02-scaled.webp",
    caption: "Living Area",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Berkeley-Square-kitchen.webp",
    caption: "Kitchen",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Berkeley-Square-3BR-Bathroom-scaled.webp",
    caption: "Bathroom",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Berkeley-Square-Podcast-Room-scaled.webp",
    caption: "Podcast",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Gym-4-scaled.webp",
    caption: "Prestige Fitness",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Kids-play-area-1-scaled.webp",
    caption: "Little Explorers' Zone",
  },
];

const berkeleyInteriorGallery = berkeleyGalleryItems.slice(0, 3);
const berkeleyOutdoorGallery = berkeleyGalleryItems.slice(3, 6);
const berkeleyFullWidthBuilding = HERO_IMG;

const surroundingsPlaces = [
  {
    title: "Circle Mall",
    text: "Moments away, offering fine grocers, dining options, and retail with ease.",
    image:
      "/assets/images/v2/locations/circle-mall.webp",
  },
  {
    title: "Cinepolis Cinema",
    text: "A premium theatre experience is just around the corner, with plush seating and curated film selection.",
    image:
      "/assets/images/v2/pages/pages-internal-images/Circla-Mall-Deluxe.webp",
  },
];

const schools = [
  {
    name: "JSS International School",
    body: "A well-established Indian curriculum school offering CBSE education just minutes away.",
  },
  {
    name: "Sunmarke School",
    body: "A British curriculum school known for academic excellence and innovative learning.",
  },
  {
    name: "Nord Anglia International School",
    body: "Globally recognized with a premium British curriculum, located a short drive from JVC.",
  },
];

const hospitals = [
  {
    name: "Emirates Hospital Day Surgery & Medical Center",
    body: "Specialist-led healthcare with a focus on outpatient procedures and family wellness.",
  },
  {
    name: "Right Health Karama Medical Centre",
    body: "Affordable, quality healthcare is located within easy reach of Berkeley Square.",
  },
  {
    name: "Aster Clinic",
    body: "Reliable and accessible medical services are available within the neighbourhood.",
  },
];

function ResourcePdfIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M8.5 3.5h7l3 3V20a1 1 0 01-1 1h-9a1 1 0 01-1-1v-16a1 1 0 011-1z"
      />
      <path d="M8.5 3.5v4H14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 11v6m0 0l-2.5-2.5M12 17l2.5-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResourceExternalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H9M17 7v8"
      />
    </svg>
  );
}

function CalendarPdfIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function AmenityVideoTile({ label, video, poster }: AmenityVideoRow) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, [video]);

  return (
    <article className="po-project-page-amenity-tile">
      <span className="po-project-page-amenity-top-label">{label}</span>
      <div className="po-project-page-amenity-tile-media">
        <video ref={ref} className="po-project-page-amenity-tile-video" poster={poster} muted loop playsInline autoPlay preload="auto">
          <source src={video} type="video/mp4" />
        </video>
        <div className="po-project-page-amenity-tile-scrim" aria-hidden="true" />
      </div>
    </article>
  );
}

const BerkeleySquareNorthProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.muted = true;
    void el.play().catch(() => {});
  }, []);


  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <video ref={heroRef} className="po-project-page-hero-video" muted loop playsInline autoPlay preload="metadata" poster={HERO_IMG}>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="po-project-page-hero-overlay" />
        </div>

        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>Berkeley Square North</h1>
          <p className="po-project-page-hero-lead">
            Designed for modern living with exceptional amenities, refined interiors, and seamless neighborhood access.
          </p>
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="Berkeley Square North by Prestige One" />
            <a className="po-project-page-btn po-project-page-btn--ghost" href="#signature">
              Discover
            </a>
          </div>
        </div>
      </section>

      <section className="po-project-page-resource-strip" aria-label="Project resources">
        <div className="container">
          <div className="po-project-page-resource-grid" role="group">
            <a href={PDF.brochure} className="po-project-page-resource-link">
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Download</span>
                <span className="po-project-page-resource-value">Brochure</span>
              </span>
            </a>
            <a href={PDF.projectDoc} className="po-project-page-resource-link">
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Download</span>
                <span className="po-project-page-resource-value">Project document</span>
              </span>
            </a>
            <a href={PDF.factSheet} className="po-project-page-resource-link">
              <ResourcePdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Download</span>
                <span className="po-project-page-resource-value">Fact sheet</span>
              </span>
            </a>
            <div className="po-project-page-resource-link" aria-label="Completion date">
              <CalendarPdfIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Completion</span>
                <span className="po-project-page-resource-value">Mar 2028</span>
              </span>
            </div>
            <a href={LOCATION_DESTINATION} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Location</span>
                <span className="po-project-page-resource-value">Jumeirah Village Circle, Dubai</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">Not Just Well-Placed, Well-Chosen</h2>
          <p className="po-project-page-signature-text">
            Berkeley Square North brings together thoughtful architecture, lifestyle amenities, and a connected setting in one
            refined address. Every detail is considered to support modern routines while elevating everyday living.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="berkeley-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">Berkeley Square North</p>
          <h2 id="berkeley-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">A curated collection of spaces for wellness, play, and social living.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="berkeley-interior-heading">
        <div className="container">
          <h2 id="berkeley-interior-heading" className="po-project-page-gallery-title">
            Quietly Placed, Clearly Considered
          </h2>
          <p className="po-project-page-gallery-lead">Internal features - refined layouts and premium finishes.</p>
          <div className="po-project-page-gallery-grid">
            {berkeleyInteriorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Berkeley Square North - building exterior">
        <img src={berkeleyFullWidthBuilding} alt="Berkeley Square North - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="berkeley-outdoor-heading">
        <div className="container">
          <h2 id="berkeley-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Signature Amenity Highlights
          </h2>
          <p className="po-project-page-gallery-lead">A closer look at selected spaces that define Berkeley Square North living.</p>
          <div className="po-project-page-gallery-grid">
            {berkeleyOutdoorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i + 3} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <ProjectImageGalleryLightbox
        items={berkeleyGalleryItems}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onGoTo={setGalleryIndex}
      />
 

      <section className="po-project-page-surroundings-intro" aria-labelledby="berkeley-surroundings-heading">
        <div className="container">
          <h2 id="berkeley-surroundings-heading" className="po-project-page-surroundings-intro-title">
            Surroundings That Echo the Quiet Within
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Positioned in a well-connected neighborhood, Berkeley Square North places everyday essentials and leisure moments
            within easy reach while preserving the calm and character of premium residential living.
          </p>
        </div>
      </section>

      {surroundingsPlaces.map((place, index) => (
        <section
          key={place.title}
          className={`po-project-page-place-strip ${index % 2 === 0 ? "po-project-page-place-strip--text-left" : "po-project-page-place-strip--text-right"}`}
          style={{ backgroundImage: `url(${place.image})` }}
          aria-label={place.title}
        >
          <div className="po-project-page-place-strip-gradient" aria-hidden="true" />
          <div className="container po-project-page-place-strip-inner">
            <div className="po-project-page-place-copy">
              <h3>{place.title}</h3>
              <p>{place.text}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="po-project-page-nearby" aria-labelledby="schools-heading">
        <div className="container">
          <div className="po-project-page-nearby-block">
            <h2 id="schools-heading" className="po-project-page-nearby-title">
              Schools
            </h2>
            <div className="po-project-page-nearby-grid">
              {schools.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="school" />
              ))}
            </div>
          </div>
          <div className="po-project-page-nearby-block po-project-page-nearby-block--follow" aria-labelledby="hospitals-heading">
            <h2 id="hospitals-heading" className="po-project-page-nearby-title">
              Hospitals
            </h2>
            <div className="po-project-page-nearby-grid">
              {hospitals.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="hospital" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="po-project-page-map" aria-label="Map: JVC, Dubai">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - JVC, Dubai"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <ProjectConstructionCtaSection href={PROJECT_CONSTRUCTION_UPDATE_HREFS.berkeley} />

      <SiteFooterBlock />
    </>
  );
};

export default BerkeleySquareNorthProjectPage;
