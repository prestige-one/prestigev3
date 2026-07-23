"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import FauchonDestinationsSlider from "@/components/projects/fauchon/FauchonDestinationsSlider";
import FauchonMapCycleOverlay from "@/components/projects/fauchon/FauchonMapCycleOverlay";
import {
  ProjectGalleryImageCard,
  ProjectImageGalleryLightbox,
  type ProjectGalleryItem,
} from "@/components/projects/project-page/ProjectImageGalleryLightbox";
import { LocaleAmenityCard } from "@/components/projects/project-page/LocaleAmenityCard";
import ProjectRegisterInterestButton from "@/components/projects/project-page/ProjectRegisterInterestButton";
import "@/components/projects/fauchon/fauchon-destinations-slider.css";

type AmenityVideoRow = {
  label: string;
  video: string;
  poster?: string;
};

const HERO_VIDEO = "/assets/images/v2/project-features-videos/compressed-Project-Teaser-video-FAUCHON.mp4";
const HERO_POSTER = "/assets/images/v2/project-featured-images/fauchon/fauchon-banner.webp";
const MAIN_BANNER = "/assets/images/v2/project-featured-images/fauchon/fauchon-banner.webp";
const DESTINATIONS_BANNER = "/assets/images/v2/project-featured-images/fauchon/fauchon-banner-x.webp";
const DAY_VIEW = "/assets/images/v2/project-featured-images/fauchon/fauchon-day-view.webp";

const INTERIOR_IMG = "/assets/images/v2/pages/pages-internal-images/apartment-inside";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Grand Arrival",
    video: "/assets/images/v2/videos/fauchon-Grand-Arrival.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Entrance Lounge",
    video: "/assets/images/v2/videos/fauchon-Entrance-Lounge.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "The Infinity Oasis",
    video: "/assets/images/v2/videos/fauchon-The-Infinity-Oasis.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "BBQ Garden",
    video: "/assets/images/v2/videos/fauchon-BBQ.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Gourmet Lounge",
    video: "/assets/images/v2/videos/fauchon-Gourmet-Lounge.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Prestige One Fitness",
    video: "/assets/images/v2/videos/fauchon-Prestige-One-Fitness.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Grill Pavilion",
    video: "/assets/images/v2/videos/fauchon-Grill-Pavilion.mp4",
    poster: HERO_POSTER,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: `${INTERIOR_IMG}/fauchon-Dining.webp`,
    caption: "Dining",
  },
  {
    src: `${INTERIOR_IMG}/fauchon-Bedroom.webp`,
    caption: "Bedroom",
  },
  {
    src: `${INTERIOR_IMG}/fauchon-Bathroom.webp`,
    caption: "Bathroom",
  },
  {
    src: DAY_VIEW,
    caption: "Daytime skyline view",
  },
  {
    src: `${INTERIOR_IMG}/fauchon-ext-2.webp`,
    caption: "Exterior",
  },
  {
    src: `${INTERIOR_IMG}/fauchon-ext-3.webp`,
    caption: "Architectural silhouette",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const exteriorGallery = galleryItems.slice(3, 6);

const schools = [
  {
    name: "Dubai International School Jumeirah",
    body: "Offers IB and UK-based programs, serving a diverse international community.",
  },
  {
    name: "Horizon International School",
    body: "British curriculum with strong academic outcomes, easily accessible from JGC.",
  },
  {
    name: "Citizens School",
    body: "A co-educational UK-curriculum school in Al Satwa, minutes from Jumeirah Gardens City and City Walk.",
  },
];

const hospitals = [
  {
    name: "American Hospital Dubai",
    body: "One of Dubai's leading private hospitals, known for world-class care and specialist services.",
  },
  {
    name: "Aster Hospital Mankhool",
    body: "24-hour multi-specialty hospital offering accessible, quality healthcare.",
  },
  {
    name: "NMC Medical Centre, Satwa",
    body: "A family medical centre in Al Satwa with GP, paediatric, and specialist outpatient care close to JGC.",
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

const FauchonResidencesProjectPage = () => {
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
            poster={HERO_POSTER}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>FAUCHON Résidences</h1>
          <p className="po-project-page-hero-lead">
            Sophisticated living, defined by detail and balance in Jumeirah Gardens City.
          </p>
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="FAUCHON Résidences" />
            <a
              className="po-project-page-btn po-project-page-btn--ghost"
              href="https://fauchonresidencesbyprestigeone.ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <div className="po-project-page-resource-link" aria-label="Project location">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Location</span>
                <span className="po-project-page-resource-value">Jumeirah Gardens City</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">WHEN DESIGN INTEGRITY MEETS ART DE VIVRE</h2>
          <p className="po-project-page-signature-text">
            Prestige One Developments and FAUCHON Hospitality come together to create a residential experience shaped by
            clarity, quality, and intention. Prestige One&apos;s design-led approach and focus on long-term value is complemented
            by FAUCHON&apos;S refined French perspective and celebrated art de vivre, resulting in homes that feel curated rather
            than branded, refined rather than overstated, where lifestyle, design and hospitality align naturally.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities po-fauchon-amenities" aria-labelledby="fauchon-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">FAUCHON Résidences</p>
          <h2 id="fauchon-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">A curated collection of arrival, wellness, and hospitality-led spaces.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="fauchon-interior-heading">
        <div className="container">
          <h2 id="fauchon-interior-heading" className="po-project-page-gallery-title">
            SOPHISTICATED LIVING, DEFINED BY DETAIL AND BALANCE
          </h2>
          <p className="po-project-page-gallery-lead">
            Nestled within Jumeirah Garden City, FAUCHON Résidences balances urban clarity with a softer residential
            rhythm—light-filled interiors, elegant materials, and calm, composed spaces shaped for everyday ease. Wake to
            skyline views, unwind on landscaped terraces, and live moments made meaningful.
          </p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="FAUCHON Résidences - building exterior">
        <img src={MAIN_BANNER} alt="FAUCHON Résidences" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="fauchon-exterior-heading">
        <div className="container">
          <h2 id="fauchon-exterior-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            A bold architectural silhouette
          </h2>
          <p className="po-project-page-gallery-lead">Exterior views shaped by clarity, proportion, and skyline presence.</p>
          <div className="po-project-page-gallery-grid">
            {exteriorGallery.map((item, i) => (
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

      <section className="po-project-page-quote-band" aria-label="FAUCHON Résidences skyline statement">
        <div className="container">
          <p>FAUCHON RÉSIDENCES REDEFINES THE SKYLINE WITH A BOLD ARCHITECTURAL SILHOUETTE.</p>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="FAUCHON Résidences - destination preview">
        <img src={DESTINATIONS_BANNER} alt="" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

      <section className="po-project-page-destinations" aria-labelledby="fauchon-destinations-heading" id="destinations">
        <div className="po-project-page-destinations-intro">
          <h2 id="fauchon-destinations-heading" className="po-project-page-destinations-title">
            Connected to Dubai&apos;s iconic addresses
          </h2>
          <p className="po-project-page-destinations-lead">
            From FAUCHON Résidences in Jumeirah Gardens City, landmark destinations, business districts, and leisure
            experiences are within easy reach.
          </p>
        </div>
        <FauchonDestinationsSlider />
      </section>

      <section className="po-project-page-nearby" aria-labelledby="fauchon-advantages-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">Advantages</p>
          <div className="po-project-page-nearby-block">
            <h2 id="fauchon-advantages-heading" className="po-project-page-nearby-title">
              Schools
            </h2>
            <div className="po-project-page-nearby-grid">
              {schools.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="school" />
              ))}
            </div>
          </div>
          <div className="po-project-page-nearby-block po-project-page-nearby-block--follow" aria-labelledby="fauchon-hospitals-heading">
            <h2 id="fauchon-hospitals-heading" className="po-project-page-nearby-title">
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

      <section className="po-project-page-map po-fauchon-map" aria-label="FAUCHON Résidences location map" id="map">
        <FauchonMapCycleOverlay />
      </section>

      <SiteFooterBlock />
    </>
  );
};

export default FauchonResidencesProjectPage;
