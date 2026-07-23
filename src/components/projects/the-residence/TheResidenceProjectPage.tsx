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

const HERO_VIDEO = "/assets/images/v2/project-features-videos/compressed-Project-Teaser-Video_The-RESIDENCE.mp4";
const HERO_POSTER = "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const LOCATION_DESTINATION = "/our-destinations/jumeirah-village-circle/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=The+Residence+by+Prestige+One+Jumeirah+Village+Circle&output=embed";

const PROJECT_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/compressed-Project-Teaser-Video_The-RESIDENCE.mp4";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Fitness Gym",
    video: "/assets/images/v2/videos/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Swimming Pool",
    video: "/assets/images/v2/videos/1470836_People_Leisure_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Electric Vehicle Charging",
    video: "/assets/images/v2/videos/5255171_Car_Electric_1280x720-1.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "BBQ & Social Deck",
    video: "/assets/images/v2/videos/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Children's Play",
    video: "/assets/images/v2/videos/5080670_Caucasian_Girl_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Resident Lounge",
    video: "/assets/images/v2/videos/6005508_Person_Human_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Smart-lock",
    video: "/assets/images/v2/videos/smart-lock.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rolling Terrain Lawn",
    video: "/assets/images/v2/videos/6035745_Toddler_Kid_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "USB Outlets in All Rooms",
    video: "/assets/images/v2/videos/5211382_Travelvator_Airport_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Cabbanas & Sunbeds",
    video: "/assets/images/v2/videos/5727546_Coll_wavebreak_People_1280x720.mp4",
    poster: HERO_POSTER,
  } 
];

/**
 * JVC-area interior stills: Berkeley Square gallery assets (same community corridor) until
 * dedicated The Residence CGIs are added under apartment-inside.
 */
const galleryItems: ProjectGalleryItem[] = [
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Berkeley-Square-2BR-Living-Room-02-scaled.webp",
    caption: "Living",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Berkeley-Square-kitchen.webp",
    caption: "Kitchen",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/the-residence-carousel-2.webp",
    caption: "Bathroom",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/the-residence-carousel-10.webp",
    caption: "Multi-purpose room",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/the-residence-carousel-3.jpg",
    caption: "Living area",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/the-residence-carousel-6.webp",
    caption: "Bedroom",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding = HERO_POSTER;

const surroundingsPlaces = [
  {
    title: "Dubai Miracle Garden",
    text: "Just a 10-minute drive away, this is the world's largest natural flower garden, featuring spectacular floral designs and displays. ",
    image: "/assets/images/v2/locations/Dubai-Miracle-Garden.webp",
  },
  {
    title: "Dubai Marina",
    text: "Only 15 minutes away, Dubai Marina is a waterfront haven filled with cafes, restaurants, and yacht cruises.",
    image: "/assets/images/v2/locations/marina-scaled.webp",
  },
  {
    title: "Mall of the Emirates",
    text: "A short 15-minute drive takes you to this premier shopping destination, featuring luxury brands, entertainment, and Ski Dubai.",
    image: "/assets/images/v2/locations/mall-of-the-emirates.webp",
  },
  {
    title: "JBR - The Walk",
    text: "About 20 minutes from JVC, this beachfront destination offers an array of dining and shopping experiences right along the coastline.",
    image: "/assets/images/v2/locations/JBR.webp",
  } 
];

const schools = [
  {
    name: "JSS International School",
    body: "A highly respected British curriculum school known for academic excellence and a range of extracurricular activities.",
  },
  {
    name: "Nord Anglia International School",
    body: "Offers a global standard education with a focus on innovation and personal development.",
  },
  {
    name: "Arcadia School",
    body: "A British curriculum school known for innovation and community engagement, accessible from JVC.",
  },
];

const hospitals = [
  {
    name: "Mediclinic Me'aisem",
    body: "Known for its comprehensive healthcare services and a family-friendly approach, this clinic is located in the nearby Me’aisem area.",
  },
  {
    name: "Emirates Hospital Day Surgery & Medical Center",
    body: "Offers outpatient services, specialized treatments, and day surgeries with high-quality patient care.",
  },
  {
    name: "NMC Royal Hospital",
    body: "Trusted private hospital network with comprehensive outpatient and inpatient services.",
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

const TheResidenceProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <video className="po-project-page-hero-video" poster={HERO_POSTER} autoPlay muted loop playsInline preload="auto">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>The Residence</h1>
          <p className="po-project-page-hero-lead">
            Boutique G+5 living in Jumeirah Village Circle—modern luxury, human scale, and a connected village lifestyle.
          </p>
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="The Residence by Prestige One" />
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
                <span className="po-project-page-resource-value">Mar 2026</span>
              </span>
            </div>
            <a href={LOCATION_DESTINATION} className="po-project-page-resource-link">
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
          <h2 className="po-project-page-signature-title">INTIMATE LUXURY IN THE HEART OF JVC</h2>
          <p className="po-project-page-signature-text">
            The Residence by Prestige One is a low-rise G+5 statement in Jumeirah Village Circle—finely detailed architecture,
            carefully composed interiors, and a calm residential rhythm. It reflects Prestige One&apos;s focus on craftsmanship
            and livability: fewer homes, more privacy, and a setting where community parks, retail, and major roads are all within
            practical reach.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="residence-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The Residence</p>
          <h2 id="residence-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">Curated wellness and social spaces for a boutique community.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="residence-interior-heading">
        <div className="container">
          <h2 id="residence-interior-heading" className="po-project-page-gallery-title">
            Crafted for everyday elegance
          </h2>
          <p className="po-project-page-gallery-lead">Warm materials, generous light, and thoughtful layouts.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="The Residence - building exterior">
        <img src={fullWidthBuilding} alt="The Residence by Prestige One" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

    

      <section
        className="po-project-page-gallery-section po-project-page-gallery-section--compact"
        aria-labelledby="residence-more-heading"
      >
        <div className="container">
          <h2 id="residence-more-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            More interior moments
          </h2>
          <p className="po-project-page-gallery-lead">Spaces designed for work, rest, and gathering.</p>
          <div className="po-project-page-gallery-grid">
            {outdoorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i + 3} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <ProjectImageGalleryLightbox
        items={galleryItems}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onGoTo={setGalleryIndex}
      />

      <section className="po-project-page-surroundings-intro" aria-labelledby="residence-neighborhood-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Jumeirah Village Circle</p>
          <h2 id="residence-neighborhood-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            JVC combines village-style blocks, green pockets, and everyday convenience with strong links to Sheikh Mohammed Bin
            Zayed Road and Al Khail Road. Malls, schools, clinics, and Dubai&apos;s landmarks are within comfortable reach—ideal
            for residents who want balance between calm community life and city access.
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

      <section className="po-project-page-nearby" aria-labelledby="residence-schools-heading">
        <div className="container">
          <div className="po-project-page-nearby-block">
            <h2 id="residence-schools-heading" className="po-project-page-nearby-title">
              Schools
            </h2>
            <div className="po-project-page-nearby-grid">
              {schools.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="school" />
              ))}
            </div>
          </div>
          <div className="po-project-page-nearby-block po-project-page-nearby-block--follow" aria-labelledby="residence-hospitals-heading">
            <h2 id="residence-hospitals-heading" className="po-project-page-nearby-title">
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

      <section className="po-project-page-map" aria-label="Map: The Residence by Prestige One">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - The Residence by Prestige One"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <ProjectConstructionCtaSection href={PROJECT_CONSTRUCTION_UPDATE_HREFS.residence} headingId="residence-construction-cta-heading" />

      <SiteFooterBlock />
    </>
  );
};

export default TheResidenceProjectPage;

