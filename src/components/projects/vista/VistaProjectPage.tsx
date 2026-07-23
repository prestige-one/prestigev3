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

const HERO_VIDEO = "/assets/images/v2/project-features-videos/compressed-Project-Teaser-Video_The-VISTA.mp4";
const HERO_POSTER = "/assets/images/v2/project-featured-images/vista/vista.webp";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const VISTA_3D_VIEWER = "/projects/vista-by-prestige-one/3d-viewer";
const LOCATION_DESTINATION = "/our-destinations/dubai-sports-city/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=Vista+by+Prestige+One+Dubai+Sports+City&output=embed";

const PROJECT_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/compressed-Project-Teaser-Video_The-VISTA.mp4";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Rooftop Gym",
    video: "/assets/images/v2/videos/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Outdoor Cinema",
    video: "/assets/images/v2/videos/1115750_Cinema_Man_1280x720-1.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Swimming Pool",
    video: "/assets/images/v2/videos/1470836_People_Leisure_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "BBQ Area",
    video: "/assets/images/v2/videos/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Kids' Play Area",
    video: "/assets/images/v2/videos/5080670_Caucasian_Girl_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Multi-Sports Court",
    video: "/assets/images/v2/videos/1115557_Hobbies_Tennis_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Club Lounge",
    video: "/assets/images/v2/videos/6005508_Person_Human_1280x720.mp4",
    poster: HERO_POSTER,
  },
  {
    label: "Running Track",
    video: "/assets/images/v2/videos/1115348_Woman_Indoor_1280x720.mp4",
    poster: HERO_POSTER,
  },
];

/** Interior stills: shared Sports City–style assets until Vista-specific CGIs are added under apartment-inside. */
const galleryItems: ProjectGalleryItem[] = [  
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/vista-living-room.webp",
    caption: "Living Room",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/vista-Master-Bedroom.webp",
    caption: "Bedroom",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Vista-carousel-bathroom-1.jpg",
    caption: "Bathroom",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/vista-Observation-Deck.webp",
    caption: "Observation Deck",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Mens-Gym-01-scaled.webp",
    caption: "Fitness",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Kids-1-scaled.webp",
    caption: "Kids Area",
  },
  
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding = HERO_POSTER;

const surroundingsPlaces = [
  {
    title: "The Els Club",
    text: "An exclusive 18-hole championship golf course designed by Ernie Els—panoramic fairway views define the Vista setting.",
    image: "/assets/images/v2/locations/Elsclub-scaled.webp",
  },
  {
    title: "ICC Academy",
    text: "World-class cricket training and facilities within Dubai Sports City.",
    image: "/assets/images/v2/locations/icc-academy-qn9rdnjkqo5cve6uulgl8gjo5kpuv4so277cc5shm8-2048x1536.webp",
  },
  {
    title: "Mall of the Emirates",
    text: "Retail, dining, and Ski Dubai a short drive away.",
    image: "/assets/images/v2/locations/mall-of-the-emirates.webp",
  },
  {
    title: "Dubai Marina",
    text: "Waterfront dining, yachts, and nightlife within easy reach.",
    image: "/assets/images/v2/locations/marina-scaled.webp",
  },
  {
    title: "Dubai Autodrome",
    text: "Motorsport and track experiences minutes from the community.",
    image: "/assets/images/v2/pages/pages-internal-images/AUTODROME-1024x768-1.webp",
  },
];

const schools = [
  {
    name: "Victory Heights Primary School",
    body: "A top-tier British curriculum school with a strong focus on academics and sports, located within Dubai Sports City.",
  },
  {
    name: "GEMS Metropole School",
    body: "Offers a British curriculum and emphasizes creative thinking and innovation, located a short drive from Dubai Sports City.",
  },
  {
    name: "Renaissance School",
    body: "A growing school community in Dubai Sports City known for inclusive learning pathways and student development.",
  },
];

const hospitals = [
  {
    name: "Mediclinic Parkview Hospital",
    body: "Offers specialized healthcare and emergency services, located 10 minutes from Dubai Sports City.",
  },
  {
    name: "NMC Royal Hospital",
    body: "One of Dubai's leading hospitals, offering advanced medical services with a family-friendly approach.",
  },
  {
    name: "Aster Clinic, Sports City",
    body: "A nearby community clinic providing general practice, diagnostics, and everyday healthcare services.",
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

const VistaProjectPage = () => {
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
          <h1>Vista</h1>
          <p className="po-project-page-hero-lead">
            Sleek G+15 residences in Dubai Sports City with panoramic golf views and a calm, contemporary presence.
          </p>
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="Vista by Prestige One" />
            <Link className="po-project-page-btn po-project-page-btn--ghost" href={VISTA_3D_VIEWER}>
              Explore in 3D
            </Link>
            <a className="po-project-page-btn po-project-page-btn--ghost" href="#signature">
              Discover
            </a>
          </div>
        </div>
      </section>

      <section className="po-project-page-resource-strip" aria-label="Project resources">
        <div className="container">
          <div className="po-project-page-resource-grid" role="group">
            <Link href={VISTA_3D_VIEWER} className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Explore</span>
                <span className="po-project-page-resource-value">3D building viewer</span>
              </span>
            </Link>
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
                <span className="po-project-page-resource-value">Handover in Apr 2026</span>
              </span>
            </div>
            <a href={LOCATION_DESTINATION} className="po-project-page-resource-link">
              <ResourceExternalIcon className="po-project-page-resource-icon" />
              <span className="po-project-page-resource-copy">
                <span className="po-project-page-resource-kicker">Location</span>
                <span className="po-project-page-resource-value">Dubai Sports City, Dubai</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="signature" className="po-project-page-signature">
        <div className="container">
          <h2 className="po-project-page-signature-title">LIVING ABOVE THE FAIRWAYS</h2>
          <p className="po-project-page-signature-text">
            Vista by Prestige One rises G+15 in Dubai Sports City, designed by award-winning architect Lacasa. Light-filled
            residences frame sweeping golf course views, while clean lines and refined materials create a modern sanctuary.
            Rooftop wellness, social spaces, and a connected location make Vista a compelling address for buyers who value
            sport, serenity, and skyline sunsets.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="vista-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">Vista</p>
          <h2 id="vista-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">Wellness, leisure, and family experiences tailored to an active community.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="vista-interior-heading">
        <div className="container">
          <h2 id="vista-interior-heading" className="po-project-page-gallery-title">
            Views that breathe
          </h2>
          <p className="po-project-page-gallery-lead">Interiors imagined for light, flow, and everyday comfort.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Vista - building exterior">
        <img src={fullWidthBuilding} alt="Vista by Prestige One" className="po-project-page-building-wide-img" loading="lazy" />
      </section>
 

      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="vista-more-heading">
        <div className="container">
          <h2 id="vista-more-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Signature Lifestyle Spaces
          </h2>
          <p className="po-project-page-gallery-lead">Observation deck views, Prestige Fitness, and dedicated kids&apos; areas complete the Vista experience.</p>
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="vista-neighborhood-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Dubai Sports City</p>
          <h2 id="vista-neighborhood-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Dubai Sports City blends stadiums, academies, and golf with everyday convenience—schools, clinics, and dining are
            close by, with Sheikh Zayed Road and key districts within easy reach. Vista sits at the heart of this energetic,
            outdoor-minded community.
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

      <section className="po-project-page-nearby" aria-labelledby="vista-schools-heading">
        <div className="container">
          <div className="po-project-page-nearby-block">
            <h2 id="vista-schools-heading" className="po-project-page-nearby-title">
              Schools
            </h2>
            <div className="po-project-page-nearby-grid">
              {schools.map((item, i) => (
                <LocaleAmenityCard key={item.name} index={i + 1} title={item.name} body={item.body} kind="school" />
              ))}
            </div>
          </div>
          <div className="po-project-page-nearby-block po-project-page-nearby-block--follow" aria-labelledby="vista-hospitals-heading">
            <h2 id="vista-hospitals-heading" className="po-project-page-nearby-title">
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

      <section className="po-project-page-map" aria-label="Map: Vista by Prestige One">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - Vista by Prestige One"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <ProjectConstructionCtaSection href={PROJECT_CONSTRUCTION_UPDATE_HREFS.vista} headingId="vista-construction-cta-heading" />

      <SiteFooterBlock />
    </>
  );
};

export default VistaProjectPage;

