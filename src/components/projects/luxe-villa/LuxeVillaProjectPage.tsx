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

type AmenityVideoRow = {
  label: string;
  video: string;
  poster?: string;
};

const HERO_POSTER = "/assets/images/v2/project-featured-images/luxe-villa/luxe-villas.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const LOCATION_DESTINATION = "/our-destinations/palm-jumeirah/";
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Palm+Jumeirah+Dubai+United+Arab+Emirates&output=embed";

const PROJECT_WIDE_VIDEO = "/assets/images/v2/videos/4911200_Couple_Pool_1280x720.mp4";
 
/** Palm–villa lifestyle stills: shared premium assets until Luxe Villa–specific CGIs are added. */
const galleryItems: ProjectGalleryItem[] = [
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-Luxe-Villas-1.jpg",
    caption: "Lux Villas",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-Luxe-Villas-Entrance-2.jpg",
    caption: "Entrance",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-Luxe-Villas-Interior-Firstfloor-2.jpg",
    caption: "First Floor",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-Luxe-Villas-Entrance.jpg",
    caption: "Entrance",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-Luxe-Villas-Majlis.jpg",
    caption: "Majlis Lounge",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-Luxe-Villas-Interior-Firstfloor.jpg",
    caption: "First-Floor Interior",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding = HERO_POSTER;

const surroundingsPlaces = [
  {
    title: "Dubai International Airport",
    text: "25 mins drive from the villa",
    image: "/assets/images/v2/locations/airport-dubai.webp",
  },
  {
    title: "Dubai Mall & Downtown",
    text: "Roughly sixteen minutes to Dubai Mall, with global retail, dining, and direct access to Burj Khalifa and the fountains.",
    image: "/assets/images/v2/locations/dubai-mall.webp",
  }
];

const schools = [
  {
    name: "GEMS Wellington International School",
    body: "A well-regarded international curriculum school in Al Sufouh, within a short drive of Palm Jumeirah.",
  },
  {
    name: "Dubai British School Jumeirah Park",
    body: "British curriculum through secondary, known for strong academics and pastoral support.",
  },
  {
    name: "Kings' School Dubai",
    body: "Established British curriculum school in Umm Suqeim with a focus on holistic development.",
  },
];

const hospitals = [
  {
    name: "Saudi German Hospital Dubai",
    body: "Full-service private hospital with emergency, surgical, and specialist care—reachable within minutes toward Al Barsha.",
  },
  {
    name: "Mediclinic City Hospital",
    body: "Premium healthcare in Dubai Healthcare City, offering multidisciplinary inpatient and outpatient services.",
  },
  {
    name: "American Hospital Dubai",
    body: "Internationally accredited hospital network with advanced diagnostics and specialist centres.",
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

const LuxeVillaProjectPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <SiteHeader />

      <section className="po-project-page-hero">
        <div className="po-project-page-hero-media">
          <img
            src={HERO_POSTER}
            alt="Luxe Villa by Prestige One, Palm Jumeirah"
            className="po-project-page-hero-video"
            fetchPriority="high"
          />
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>Luxe Villa</h1> 
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="Luxe Villa by Prestige One" />
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
                <span className="po-project-page-resource-value">Nov 2027</span>
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
          <h2 className="po-project-page-signature-title">ELEVATING PRESTIGE & EXCLUSIVITY</h2>
          <p className="po-project-page-signature-text">
          Prestige is an inherent trait, not merely an ambition. It flows as naturally as the tide—defining every aspect of existence. At Luxe Villa by Prestige One in Palm Jumeirah, this principle is our cornerstone. The villa is a testament to flawless design and unique craftsmanship. Constructed with the utmost attention to detail and the highest quality materials, Luxe Villa by Prestige One is set in one of Dubai’s most coveted communities. Designed for the discerning, for whom luxury is not an option but a necessity, Luxe Villa by Prestige One caters to those with an inherent sense of sophistication and a lifestyle that demands the exceptional.
          </p>
        </div>
      </section>
 

      <section className="po-project-page-gallery-section" aria-labelledby="luxe-villa-interior-heading">
        <div className="container">
          <h2 id="luxe-villa-interior-heading" className="po-project-page-gallery-title">
          LATEST DEVELOPMENT IN PALM JUMEIRAH
          </h2>
           <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Luxe Villa by Prestige One - exterior">
        <img src={fullWidthBuilding} alt="Luxe Villa by Prestige One" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section
        className="po-project-page-gallery-section po-project-page-gallery-section--compact"
        aria-labelledby="luxe-villa-more-heading"
      >
        <div className="container">
          <h2 id="luxe-villa-more-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            More moments
          </h2>
          <p className="po-project-page-gallery-lead">Indoor–outdoor flow, light-filled rooms, and resort-grade calm.</p>
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
 

      <section className="po-project-page-surroundings-intro" aria-labelledby="luxe-villa-neighborhood-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Palm Jumeirah</p>
          <h2 id="luxe-villa-neighborhood-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Palm Jumeirah is Dubai&apos;s celebrated island archipelago—private beaches, resort-grade amenities, and uninterrupted
            sea views. With its fronds and crescent, plus fast links to Dubai Marina and Sheikh Zayed Road, it remains one of the
            city&apos;s most prestigious waterfront communities.
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

      <section className="po-project-page-nearby" aria-labelledby="luxe-villa-schools-heading">
        <div className="container">
          <div className="po-project-page-nearby-block">
            <h2 id="luxe-villa-schools-heading" className="po-project-page-nearby-title">
              Schools
            </h2>
            <div className="po-project-page-nearby-grid">
              {schools.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="school" />
              ))}
            </div>
          </div>
          <div className="po-project-page-nearby-block po-project-page-nearby-block--follow" aria-labelledby="luxe-villa-hospitals-heading">
            <h2 id="luxe-villa-hospitals-heading" className="po-project-page-nearby-title">
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

      <section className="po-project-page-map" aria-label="Map: Palm Jumeirah, Dubai">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - Palm Jumeirah, Dubai"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>



      <SiteFooterBlock />
    </>
  );
};

export default LuxeVillaProjectPage;
