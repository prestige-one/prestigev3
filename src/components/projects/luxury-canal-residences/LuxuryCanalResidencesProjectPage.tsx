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
  "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp";
const HERO_VIDEO =
  "/assets/images/v2/project-features-videos/v2-Teaser-Luxury-Canal.mp4";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const MORE_DETAILS = "/our-destinations/dubai-islands/";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Luxury+Canal+Residences+by+Prestige+Harbour+Dubai+Islands&output=embed";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Children's Adventure Park",
    video:
      "/assets/images/v2/videos/5339572_Coll_wavebreak_Adventure_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Jacuzzi",
    video:
      "/assets/images/v2/videos/4911200_Couple_Pool_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Owners' Lounge",
    video:
      "/assets/images/v2/videos/clublounge.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Badminton Court",
    video:
      "/assets/images/v2/videos/badminton-court.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Wellness Centre",
    video:
      "/assets/images/v2/videos/5586861_Coll_wavebreak_Summertime_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Outdoor Cinema",
    video:
      "/assets/images/v2/videos/7022819_Couples_Love_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Infinity Pool",
    video:
      "/assets/images/v2/videos/Skyline-Infinity-Pool.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Prestige Fitness Centre",
    video:
      "/assets/images/v2/videos/Fintess-center.mp4",
    poster: HERO_IMG,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/04-3-Bedroom-living-dining-scaled.webp",
    caption: "Living Area",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/06-3-Bedroom-Kitchen-scaled.webp",
    caption: "Kitchen",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Bathroom-scaled.webp",
    caption: "Bathroom",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/01-Game-Room-View-scaled.webp",
    caption: "Game room",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/03-Gym-scaled.webp",
    caption: "Prestige Fitness",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/04-Kids-Play-Area-scaled.webp",
    caption: "Little Explorers' Zone",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding =
  "/assets/images/v2/02-Facade-scaled.webp";
const LUXURY_CANAL_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/Luxury-Canal-Residences-by-Prestige-One.mp4";

const surroundingsPlaces = [
  {
    title: "Al Mamzar Beach Park",
    text: "Pristine beaches and lush parks for family fun.",
    image:
      "/assets/images/v2/pages/pages-internal-images/blue-flag-beach-scaled.webp",
  },
  {
    title: "Dubai Islands Mall",
    text: "A premier retail and dining hub with global brands.",
    image:
      "/assets/images/v2/locations/Deira-mall-scaled.webp",
  },
  {
    title: "Souk Al Marfa",
    text: "A vibrant waterfront market for diverse shopping.",
    image:
      "/assets/images/v2/locations/Souk-Al-Marfa-scaled.webp",
  },
  {
    title: "Dubai Dolphinarium",
    text: "Interactive dolphin and seal shows for all ages.",
    image:
      "/assets/images/v2/pages/pages-internal-images/Dubai-Dolphinarium-scaled.webp",
  },
];

const schools = [
  {
    name: "Dubai International Academy",
    body: "A leading IB curriculum school fostering global excellence.",
  },
  {
    name: "GEMS Wellington Academy",
    body: "Renowned for its academic achievements and holistic education.",
  },
  {
    name: "Deira International School",
    body: "Offers the English National Curriculum through iGCSE with IB Diploma pathways, and is known for strong academic outcomes.",
  },
];

const hospitals = [
  {
    name: "King's College Hospital London",
    body: "World-class healthcare with UK-trained specialists.",
  },
  {
    name: "Mediclinic City Hospital",
    body: "Comprehensive medical services with state-of-the-art technology.",
  },
  {
    name: "Dubai Hospital",
    body: "A leading tertiary hospital in Deira with multidisciplinary specialties and 24/7 emergency care.",
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
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
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

const LuxuryCanalResidencesProjectPage = () => {
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
          <h1>Luxury Canal Residences</h1>
          <p className="po-project-page-hero-lead">
            Waterfront residences shaped for calm, crafted for elevated everyday living.
          </p>
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="Luxury Canal Residences by Prestige One" />
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
                <span className="po-project-page-resource-value">November 2027</span>
              </span>
            </div>
            <a href={MORE_DETAILS} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Location</span>
                <span className="po-project-page-resource-value">Dubai Islands, Dubai</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">EVERY MOMENT IN RHYTHM WITH CALM</h2>
          <p className="po-project-page-signature-text">
            Luxury Canal Residences by Prestige One is an elegant retreat along the serene harbors of Dubai Islands. Designed
            for those who seek calmness, sophistication, and a deep connection to nature, these residences reflect the gentle
            rhythm of the surrounding waters. Life here flows effortlessly, offering a peaceful escape within Dubai&apos;s most
            exclusive waterfront destination.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="luxury-canal-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">Luxury Canal Residences</p>
          <h2 id="luxury-canal-amenities-heading" className="po-project-page-section-title">
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

      <section className="po-project-page-gallery-section" aria-labelledby="luxury-canal-interior-heading">
        <div className="container">
          <h2 id="luxury-canal-interior-heading" className="po-project-page-gallery-title">
            A Haven of Luxury
          </h2>
          <p className="po-project-page-gallery-lead">Internal features - refined layouts and premium finishes.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Luxury Canal Residences - building exterior">
        <img src={HERO_IMG} alt="Luxury Canal Residences - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>
 

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="luxury-canal-outdoor-heading">
        <div className="container">
          <h2 id="luxury-canal-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Signature Amenity Highlights
          </h2>
          <p className="po-project-page-gallery-lead">A closer look at selected spaces that define Luxury Canal Residences living.</p>
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="luxury-canal-surroundings-heading">
        <div className="container">
          <h2 id="luxury-canal-surroundings-heading" className="po-project-page-surroundings-intro-title">
            A HAVEN OF LUXURY
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Dubai Islands, a stunning waterfront destination, is a blend of nature&apos;s beauty and urban sophistication.
            Comprising five distinct islands, it offers residents breathtaking views, exclusive amenities, and a lifestyle
            shaped by elegance and tranquility. From pristine beaches to expansive parks and world-class leisure, Dubai Islands
            redefines waterfront living.
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

      <section className="po-project-page-map" aria-label="Map: Luxury Canal Residences by Prestige Harbour">
        <iframe
          src={MAP_EMBED_SRC}
          title="Luxury Canal Residences by Prestige Harbour"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <ProjectConstructionCtaSection href={PROJECT_CONSTRUCTION_UPDATE_HREFS["luxury-canal"]} />

      <SiteFooterBlock />
    </>
  );
};

export default LuxuryCanalResidencesProjectPage;
