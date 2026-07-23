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

const HERO_IMAGE = "/assets/images/v2/project-featured-images/seascape/seascape.webp";

const PROJECT_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/v2-Teaser-Video_Seascape.mp4";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const LOCATION_DESTINATION = "/our-destinations/palm-jumeirah/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=Dubai+United+Arab+Emirates&output=embed";

/** Full-bleed hero lives in featured seascape assets (same filename as brief; not under apartment-inside). */
const FULL_WIDTH_IMAGE = "/assets/images/v2/project-featured-images/seascape/seascape2.jpg";

const BASE_APARTMENT = "/assets/images/v2/pages/pages-internal-images/apartment-inside";

const galleryItems: ProjectGalleryItem[] = [
  {
    src: `${BASE_APARTMENT}/seascape-ext4.jpg`,
    caption: "Exterior",
  },
  {
    src: `${BASE_APARTMENT}/seascape-ext2.jpg`,
    caption: "Exterior",
  },
  {
    src: `${BASE_APARTMENT}/seascape-ext5.jpg`,
    caption: "Exterior",
  },
];

const surroundingsPlaces = [
  {
    title: "Dubai International Airport",
    text: "25 minutes by car—straightforward connections for regional and international travel.",
    image: "/assets/images/v2/locations/airport-dubai.webp",
  },
  {
    title: "Burj Khalifa",
    text: "20 minutes to Downtown and the Burj Khalifa—world-class dining, retail, and the Dubai Fountain.",
    image: "/assets/images/v2/locations/dubai-mall.webp",
  },
];

const schools = [
  {
    name: "Asya's Nursery",
    body: "Early-years nursery on Palm Jumeirah with play-based learning and a nurturing environment—about 5 minutes away.",
  },
  {
    name: "Babilou Nursery",
    body: "Established early-learning nursery offering bilingual programmes and structured childcare, roughly 15 minutes from Seascape Villa.",
  },
  {
    name: "GEMS Wellington International School",
    body: "Well-regarded international curriculum school in Al Sufouh with strong academics and extracurricular programmes—around 20 minutes by car.",
  },
];

const hospitals = [
  {
    name: "Emirates Hospital Clinics Palm Jumeirah",
    body: "On-island clinic providing primary care, diagnostics, and specialist consultations for residents of Palm Jumeirah.",
  },
  {
    name: "Saudi German Hospital Dubai",
    body: "Full-service private hospital in Al Barsha with emergency, surgical, and multi-specialty care—about 15 minutes away.",
  },
  {
    name: "King's College Hospital Dubai",
    body: "Internationally linked hospital in Al Sufouh offering advanced inpatient and outpatient services within a short drive.",
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

const SeascapeVillaProjectPage = () => {
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
          <video
            ref={heroRef}
            className="po-project-page-hero-video"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            poster={HERO_IMAGE}
          >
            <source src={PROJECT_WIDE_VIDEO} type="video/mp4" />
          </video>
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>Seascape Villa</h1>
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="Seascape Villa by Prestige One" />
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
                <span className="po-project-page-resource-value">TBA</span>
              </span>
            </div>
            <a href={LOCATION_DESTINATION} className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Location</span>
                <span className="po-project-page-resource-value">Palm Jumeirah, Dubai</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">FINDING YOUR HAVEN OF HARMONY &amp; LUXURY</h2>
          <p className="po-project-page-signature-text">
            Explore your private escape into luxury at Seascape Villa by Prestige One, where the serene embrace of the sea
            welcomes you. Situated in the prestigious Palm Jumeirah, Seascape Villa by Prestige One serves as your personal
            haven amidst the Persian Gulf&apos;s vast beauty. The project is a masterpiece of design, complementing modern
            aesthetics with the timeless allure of the sea. From panoramic windows framing the pristine waters to outdoor
            spaces that invite the gulf breeze, every detail is crafted to harmonise with the marine scenery. Seascape Villa
            by Prestige One is a lifestyle curated for those who find solace in the sea&apos;s tranquil rhythms and seek a living
            experience that transcends the ordinary. Here, luxury is not just seen—it&apos;s felt, with the endless horizon as
            your backdrop and the whisper of waves as your constant companion.
          </p>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="seascape-gallery-heading">
        <div className="container">
          <h2 id="seascape-gallery-heading" className="po-project-page-gallery-title">
            LATEST DEVELOPMENT IN PALM JUMEIRAH
          </h2>
          <div className="po-project-page-gallery-grid">
            {galleryItems.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Seascape Villa by Prestige One">
        <img
          src={FULL_WIDTH_IMAGE}
          alt="Seascape Villa by Prestige One"
          className="po-project-page-building-wide-img"
          loading="lazy"
        />
      </section>

      <ProjectImageGalleryLightbox
        items={galleryItems}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onGoTo={setGalleryIndex}
      />

      <section className="po-project-page-surroundings-intro" aria-labelledby="seascape-neighborhood-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Palm Jumeirah</p>
          <h2 id="seascape-neighborhood-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Commonly referred to as &apos;The Palm,&apos; Palm Jumeirah stands as a hallmark of Dubai&apos;s ingenuity,
            claiming fame as the largest man-made island globally. This iconic masterpiece boasts a central trunk spanning 2
            kilometres, flanked by 17 fronds and encircled by a protective crescent. It&apos;s a haven of sophistication,
            hosting an array of luxury villas, premium apartments, and the city&apos;s most prestigious hotels. Beyond its
            scenic vistas, Palm Jumeirah offers a tapestry of culinary, nightlife, and family-friendly ventures.
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

      <section className="po-project-page-nearby" aria-labelledby="seascape-schools-heading">
        <div className="container">
          <div className="po-project-page-nearby-block">
            <h2 id="seascape-schools-heading" className="po-project-page-nearby-title">
              Schools
            </h2>
            <div className="po-project-page-nearby-grid">
              {schools.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="school" />
              ))}
            </div>
          </div>
          <div
            className="po-project-page-nearby-block po-project-page-nearby-block--follow"
            aria-labelledby="seascape-hospitals-heading"
          >
            <h2 id="seascape-hospitals-heading" className="po-project-page-nearby-title">
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

      <section className="po-project-page-map" aria-label="Map: Dubai, United Arab Emirates">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - Dubai, United Arab Emirates"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>



      <SiteFooterBlock />
    </>
  );
};

export default SeascapeVillaProjectPage;
