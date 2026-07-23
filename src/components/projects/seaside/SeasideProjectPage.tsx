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
  "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp";
const HERO_VIDEO =
  "/assets/images/v2/project-features-videos/compressed-Project-Teaser-Video_The_SEASIDE.mp4";

const PDF = {
  brochure: "/project-documents",
  projectDoc: "/project-documents",
  factSheet: "/project-documents",
};

const LOCATION_DESTINATION = "/our-destinations/dubai-islands/";
const MAP_EMBED_SRC = "https://www.google.com/maps?q=Prestige+One+Seaside+Dubai+Islands&output=embed";

const PROJECT_WIDE_VIDEO =
  "/assets/images/v2/project-features-videos/compressed-Project-Teaser-Video_The_SEASIDE.mp4";

const amenityVideos: AmenityVideoRow[] = [
  {
    label: "Outdoor Cinema & Lawn",
    video:
      "/assets/images/v2/videos/1115750_Cinema_Man_1280x720-1.mp4",
    poster: HERO_IMG,
  },
  {
    label: "BBQ Area",
    video: "/assets/images/v2/videos/1104331_1080p_4k_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Mini Putt Golf",
    video:
      "/assets/images/v2/videos/2311733_Golf_Club_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Gym & Changing Rooms",
    video: "/assets/images/v2/videos/4730225_Fitness_Workout_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Swimming Pool",
    video: "/assets/images/v2/videos/1470836_People_Leisure_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Kids' Pool & Fountains",
    video:
      "/assets/images/v2/videos/6045622_Children_Swim_1280x720.mp4",
    poster: HERO_IMG,
  },
  {
    label: "Spa Pools",
    video: "/assets/images/v2/videos/spapool.mp4",
    poster: HERO_IMG,
  },
];

const galleryItems: ProjectGalleryItem[] = [
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Seaside-2BHK-Kitchen-1.webp",
    caption: "Living Area",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Seaside-2BHK-Kitchen.webp",
    caption: "Kitchen",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Seaside-3BHK-masterBedBathroom.webp",
    caption: "Bathroom",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Seaside-2BHK-Living.webp",
    caption: "Living Area",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Seaside-3BHK-Kitchen.webp",
    caption: "Kitchen",
  },
  {
    src: "/assets/images/v2/pages/pages-internal-images/apartment-inside/Seaside-3BHK-LivingKitchen.webp",
    caption: "Dining Area",
  },
];

const interiorGallery = galleryItems.slice(0, 3);
const outdoorGallery = galleryItems.slice(3, 6);
const fullWidthBuilding =
  "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp";

const surroundingsPlaces = [
  {
    title: "Dubai Creek Golf & Yacht Club",
    text: "A beautiful waterfront golf course and yacht club offering recreational activities and luxury dining experiences.",
    image:
      "/assets/images/v2/pages/pages-internal-images/shutterstock_24731917-150x150.webp",
  },
  {
    title: "Deira Islands Night Souk",
    text: "The world's largest night market, offering over 5,000 stalls selling traditional goods, crafts, and food.",
    image:
      "/assets/images/v2/locations/Deira-Islands.webp",
  },
  {
    title: "Dubai Dolphinarium",
    text: "A family-friendly attraction offering dolphin and seal shows, located just a short drive from Dubai Islands.",
    image:
      "/assets/images/v2/locations/Dubai-Dolphinarium-scaled-2.webp",
  },
  {
    title: "Museum of the Future",
    text: "An architectural masterpiece that takes you on an immersive journey into what the world could look like 50 years from now.",
    image:
      "/assets/images/v2/our-destinations/museum-of-the-future-in-dubai-uae-downtown.webp",
  },
  {
    title: "Downtown Dubai",
    text: "Less than 25 minutes away, visit Burj Khalifa, The Dubai Mall, and Dubai Fountain for world-class lifestyle experiences.",
    image:
      "/assets/images/v2/locations/downtown-dubai.webp",
  },
  {
    title: "JBR Beach",
    text: "A popular destination, around 30 minutes away, with a beachfront promenade and dining and shopping options.",
    image:
      "/assets/images/v2/locations/JBR.webp",
  },
];

const schools = [
  {
    name: "The Arbor School",
    body: "A unique school with a focus on sustainability and eco-friendly learning, offering a British curriculum.",
  },
  {
    name: "Dubai British School Jumeirah Park",
    body: "A popular school offering a British curriculum, known for fostering academic excellence and personal growth.",
  },
  {
    name: "Deira International School",
    body: "An established K-12 school known for strong academics, modern facilities, and a broad extracurricular program.",
  },
];

const hospitals = [
  {
    name: "Dubai Hospital",
    body: "A modern healthcare facility offering comprehensive medical services, known for advanced care and specialist departments.",
  },
  {
    name: "Medcare Medical Centre",
    body: "A respected healthcare provider offering multi-specialty services and accessible outpatient care.",
  },
  {
    name: "Rashid Hospital",
    body: "A major public tertiary hospital in Dubai with emergency and trauma expertise and comprehensive specialist care.",
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

const SeasideProjectPage = () => {
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
          <video ref={heroRef} className="po-project-page-hero-video" poster={HERO_IMG} muted loop playsInline autoPlay preload="metadata">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="po-project-page-hero-overlay" />
        </div>
        <div className="po-project-page-hero-content">
          <p className="po-project-page-hero-eyebrow">
            <Link href="/projects">Projects</Link>
          </p>
          <h1>The Seaside</h1>
          <p className="po-project-page-hero-lead">
            Waterfront living in Dubai Islands with elegant residences, curated amenities, and panoramic sea-facing character.
          </p>
          <div className="po-project-page-hero-actions">
            <ProjectRegisterInterestButton projectName="Seaside by Prestige One" />
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
                <span className="po-project-page-resource-value">Dec 2026</span>
              </span>
            </div>
            <a href={LOCATION_DESTINATION} target="_blank" rel="noopener noreferrer" className="po-project-page-resource-link">
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
          <h2 className="po-project-page-signature-title">A RETREAT ALONG THE SEA</h2>
          <p className="po-project-page-signature-text">
            Set against the backdrop of Dubai Islands, Seaside by Prestige One is a G+12-floor building offering serene one,
            two, and three-bedroom apartments. Here, the soothing rhythm of waterfront living blends with modern design, creating
            a perfect escape from the busy city. Designed with sophistication, each residence boasts floor-to-ceiling windows and
            expansive balconies that invite the surrounding seascape into every home.
          </p>
        </div>
      </section>

      <section className="po-project-page-amenities" aria-labelledby="seaside-amenities-heading">
        <div className="container po-project-page-amenities-intro">
          <p className="po-project-page-section-kicker">The Seaside</p>
          <h2 id="seaside-amenities-heading" className="po-project-page-section-title">
            Amenities
          </h2>
          <p className="po-project-page-section-sub">Family-friendly wellness and leisure experiences by the waterfront.</p>
        </div>
        <div className="po-project-page-amenities-fullbleed">
          <div className="po-project-page-amenities-masonry">
            {amenityVideos.map((item) => (
              <AmenityVideoTile key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-gallery-section" aria-labelledby="seaside-interior-heading">
        <div className="container">
          <h2 id="seaside-interior-heading" className="po-project-page-gallery-title">
            Sea More, Live More
          </h2>
          <p className="po-project-page-gallery-lead">Interior moments designed around calm, light, and comfort.</p>
          <div className="po-project-page-gallery-grid">
            {interiorGallery.map((item, i) => (
              <ProjectGalleryImageCard key={item.src} item={item} index={i} onOpen={setGalleryIndex} />
            ))}
          </div>
        </div>
      </section>

      <section className="po-project-page-building-wide" aria-label="Seaside - building exterior">
        <img src={fullWidthBuilding} alt="Seaside - building" className="po-project-page-building-wide-img" loading="lazy" />
      </section>


      <section className="po-project-page-gallery-section po-project-page-gallery-section--compact" aria-labelledby="seaside-outdoor-heading">
        <div className="container">
          <h2 id="seaside-outdoor-heading" className="po-project-page-gallery-title po-project-page-gallery-title--sm">
            Spacious everyday living
          </h2>
          <p className="po-project-page-gallery-lead">More living and kitchen views from signature apartments.</p>
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

      <section className="po-project-page-surroundings-intro" aria-labelledby="seaside-neighborhood-heading">
        <div className="container">
          <p className="po-project-page-section-kicker">About Dubai Islands</p>
          <h2 id="seaside-neighborhood-heading" className="po-project-page-surroundings-intro-title">
            THE NEIGHBORHOOD
          </h2>
          <p className="po-project-page-surroundings-intro-text">
            Dubai Islands offers a peaceful waterfront lifestyle with all the amenities of modern living. Residents enjoy ocean
            views, walking promenades, and easy access to schools, healthcare, and entertainment destinations.
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

      <section className="po-project-page-map" aria-label="Map: Prestige One Seaside">
        <iframe
          src={MAP_EMBED_SRC}
          title="Google Map - Prestige One Seaside"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <ProjectConstructionCtaSection href={PROJECT_CONSTRUCTION_UPDATE_HREFS.seaside} />

      <SiteFooterBlock />
    </>
  );
};

export default SeasideProjectPage;


