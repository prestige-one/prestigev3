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

const HERO_VIDEO =
  "/assets/images/v2/project-features-videos/compressed-Project-Teaser-Video_The-Waterway.mp4";
const HERO_POSTER =
  "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const LOCATION_DESTINATION = "/our-destinations/mohammed-bin-rashid-city/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=The+Waterway+by+Prestige+One&output=embed";

const PROJECT_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/compressed-Project-Teaser-Video_The-Waterway.mp4";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Outdoor Cinema",
    video:
      "/assets/images/v2/videos/1115750_Cinema_Man_1280x720-1.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rock Climbing Wall",
    video:
      "/assets/images/v2/videos/5946135_Man_Practice_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rooftop BBQ & Lounge Area",
    video: "/assets/images/v2/videos/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rooftop Gym",
    video: "/assets/images/v2/videos/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Rooftop Swimming Pool",
    video:
      "/assets/images/v2/videos/2082411_Back_View_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "2 X Outdoor Lounges With Water Features",
    video:
      "/assets/images/v2/videos/6011933_Lifeguard_Pool_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Men's/Women's Changing Rooms",
    video:
      "/assets/images/v2/videos/4763869_Room_Dressing_1280x720-1.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Grand Lobby With Water Features",
    video:
      "/assets/images/v2/videos/5068603_City_Travel_1280x720.mp4",
    poster: HERO_POSTER,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-waterway-living.webp",
    caption: "Living Area",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-waterway-bedroom.webp",
    caption: "Bedroom",
  },  
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-waterway-living-1.webp",
    caption: "Living",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/The-waterway-bathroom.webp",
    caption: "Bathroom",
  },  
];

const primaryGallery = galleryItems.slice(0, 2);
const secondaryGallery = galleryItems.slice(2, 4);
const fullWidthBuilding =
  "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp";

/** Image paths aligned with Parkway / MBR destination pages (`locations/`, `pages-internal-images/`). */
const surroundingsPlaces = [
  {
    title: "Meydan Racecourse",
    text: "The home of the Dubai World Cup, the world’s richest horse race, and a prestigious venue for horse racing enthusiasts.",
    image: "/assets/images/v2/pages/pages-internal-images/shutterstock_92699545-scaled.webp",
  },
  {
    title: "Meydan One Mall",
    text: "An upcoming destination with entertainment and retail—part of the wider Meydan vision minutes from Meydan Horizon.",
    image: "/assets/images/v2/locations/meydan-one-mall-Cover.webp",
  },
  {
    title: "Dubai Design District (D3)",
    text: "A trendy destination for creatives with art galleries, boutiques, and stylish cafes within a short drive.",
    image: "/assets/images/v2/locations/shutterstock_2504923391-scaled.webp",
  },
  {
    title: "Dubai Mall",
    text: "A short drive away, this mega shopping destination offers luxury brands, dining, and top attractions.",
    image: "/assets/images/v2/pages/pages-internal-images/dubai-mall-scaled.webp",
  },
  {
    title: "Downtown Dubai",
    text: "Dubai Opera, the choreographed Dubai Fountain, and Burj Khalifa are within easy reach for world-class culture and skyline views.",
    image: "/assets/images/v2/locations/downtown-dubai.webp",
  },
  {
    title: "Ras Al Khor Wildlife Sanctuary",
    text: "A nearby nature reserve offering a peaceful escape and a large flamingo population during winter.",
    image: "/assets/images/v2/locations/shutterstock_1688412709-scaled.webp",
  },
];

const schools = [
  {
    name: "North London Collegiate School",
    body: "Offers an IB curriculum and is known for rigorous academics and a strong emphasis on creativity.",
  },
  {
    name: "Hartland International School",
    body: "Located nearby, Hartland offers a British curriculum and focuses on the holistic development of students.",
  },
  {
    name: "Repton School Dubai",
    body: "A British curriculum school in Nad Al Sheba, minutes from Meydan, known for its all-round academic and co-curricular programme.",
  },
];

const hospitals = [
  {
    name: "Meydan One Health Clinic",
    body: "Located in the Meydan area, this clinic provides outpatient services and specialized treatment in a modern setting.",
  },
  {
    name: "King's College Hospital Dubai",
    body: "A leading medical center offering high-quality healthcare with strong clinical standards and patient care.",
  },
  {
    name: "Al Jalila Children's Speciality Hospital",
    body: "Dubai's dedicated children's hospital in Al Jaddaf, offering specialised paediatric care close to Meydan.",
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

const WaterwayProjectPage = () => {
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
          <h1>The Waterway</h1>
          <p className="po-project-page-hero-lead">
            Nature-inspired living in Meydan Horizon with elegant residences, rooftop amenities, and calming lagoon-facing views.
          </p>
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="The Waterway by Prestige One" />
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
                <span className="po-project-page-resource-value">Jun 2027</span>
              </span>
            </div>
            <a href={LOCATION_DESTINATION} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Location</span>
                <span className="po-project-page-resource-value">Mohammed Bin Rashid City, Dubai</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">AN ICONIC MASTERPIECE NEXT TO CRYSTAL LAGOONS</h2>
          <p className="po-project-page-signature-text">
            The Waterway by Prestige One, a G+20-floor building in Meydan Horizon, offers one and two-bedroom apartments that
            bring relaxation to the forefront. Overlooking serene lagoon views, it is designed for those who seek peace and quiet
            in a well-connected area. Life by the water is effortless, with leisure and recreation just moments away.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="waterway-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The Waterway</p>
          <h2 id="waterway-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">Elevated lifestyle amenities designed around wellness and social spaces.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section po-project-page-gallery-two-col" aria-labelledby="waterway-interior-heading">
        <div className="container">
          <h2 id="waterway-interior-heading" className="po-project-page-gallery-title">
            Make Nature Your Next-Door Neighbour
          </h2>
          <p className="po-project-page-gallery-lead">Two-column gallery layout tailored for The Waterway project.</p>
          <div className="po-project-page-gallery-grid">
            {primaryGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="The Waterway - building exterior">
        <img src={fullWidthBuilding} alt="The Waterway - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>

 

      <section
        className="po-project-page-gallery-section po-project-page-gallery-section--compact po-project-page-gallery-two-col"
        aria-labelledby="waterway-outdoor-heading"
      >
        <div className="container">
          <h2 id="waterway-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Refined private spaces
          </h2>
          <p className="po-project-page-gallery-lead">Bedroom and living views with warm material tones.</p>
          <div className="po-project-page-gallery-grid">
            {secondaryGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i + 2} onOpen={setGalleryIndex} />
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="waterway-neighborhood-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Meydan Horizon</p>
          <h2 id="waterway-neighborhood-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Meydan Horizon delivers a luxurious lifestyle with strong connectivity to nature and Dubai&apos;s key landmarks. The
            community is minutes from Meydan Racecourse and offers easy access to Downtown, DIFC, top schools, and healthcare.
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

      <section className="po-project-page-map" aria-label="Map: The Waterway by Prestige One">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - The Waterway by Prestige One"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <ProjectConstructionCtaSection href={PROJECT_CONSTRUCTION_UPDATE_HREFS.waterway} />

      <SiteFooterBlock />
    </>
  );
};

export default WaterwayProjectPage;


