"use client";

import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import ShimmerImage from "@/components/common/ShimmerImage";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";

type ConstructionUpdateItem = {
  href: string;
  pathSlug: string;
  image: string;
};

const CONSTRUCTION_UPDATES: ConstructionUpdateItem[] = [
  {
    href: "/construction-update-seaside-by-prestige-one/",
    pathSlug: "construction-update-seaside-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp",
  },
  {
    href: "/construction-update-hilton-residences-by-prestige-one/",
    pathSlug: "construction-update-hilton-residences-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp",
  },
  {
    href: "/construction-update-the-residence-by-prestige-one/",
    pathSlug: "construction-update-the-residence-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp",
  },
  {
    href: "/construction-update-luxury-canal-residences-by-prestige-harbour/",
    pathSlug: "construction-update-luxury-canal-residences-by-prestige-harbour",
    image: "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp",
  },
  {
    href: "/construction-update-coastal-haven-by-prestige-harbour/",
    pathSlug: "construction-update-coastal-haven-by-prestige-harbour",
    image: "/assets/images/v2/project-featured-images/coastal-haven/Coastal-Haven.webp",
  },
  {
    href: "/construction-update-the-boluevard-by-prestige-one/",
    pathSlug: "construction-update-the-boluevard-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp",
  },
  {
    href: "/construction-update-parkway-by-prestige-one/",
    pathSlug: "construction-update-parkway-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/parkway/parkway.webp",
  },
  {
    href: "/construction-update-vista-by-prestigeone/",
    pathSlug: "construction-update-vista-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/vista/vista.webp",
  },
  {
    href: "/construction-update-the-waterway-by-prestige-one/",
    pathSlug: "construction-update-the-waterway-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp",
  },
  {
    href: "/construction-update-the-one-by-prestige-one/",
    pathSlug: "construction-update-the-one-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/one/the-one.webp",
  },
  {
    href: "/construction-update-golf-residences-by-prestige-one/",
    pathSlug: "construction-update-golf-residences-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/golf/The-Place-Banner.webp",
  },
  {
    href: "https://prestigeone.ae/construction-update-the-berkeley-by-prestige-one/",
    pathSlug: "construction-update-the-berkeley-by-prestige-one",
    image: "/assets/images/v2/project-featured-images/berkeley/Berkeley-Square-North.webp",
  },
];

const INTRO_COPY =
  "Track how Prestige One communities take shape across Dubai. Choose a project below for dedicated construction updates, imagery, and timelines on the main Prestige One site.";

function titleFromConstructionSlug(pathSlug: string) {
  const withoutPrefix = pathSlug.replace(/^construction-update-/, "");
  return withoutPrefix
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function ConstructionUpdateCard({ item }: { item: ConstructionUpdateItem }) {
  const title = titleFromConstructionSlug(item.pathSlug);
  const external = !item.href.startsWith("/");

  return (
    <a
      className="po-list-item-card item-card"
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <ShimmerImage src={item.image} alt={title} className="po-list-item-media item-card-image" />
      <div className="po-list-item-body item-card-content">
        <h3 className="po-list-item-title">{title}</h3>
        <p className="po-list-item-desc">
          Follow construction progress, major milestones, and quality milestones for this Prestige One development.
        </p>
        <span className="po-list-item-btn">
          <span>Explore more</span>
          <ListPageExploreArrow />
        </span>
      </div>
    </a>
  );
}

export default function ConstructionUpdatesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="po-list-page" aria-labelledby="construction-updates-heading">
          <div className="po-list-page-hero">
            <div className="container po-list-page-hero-inner">
              <p className="po-list-page-kicker">Prestige One Developments</p>
              <h1 id="construction-updates-heading" className="po-list-page-title">
                Construction updates
              </h1>
              <p className="po-list-page-intro">{INTRO_COPY}</p>
            </div>
          </div>
          <div className="po-list-page-cards-shell" aria-label="Projects with construction updates">
            <div className="container">
              <div className="po-list-page-grid list-page-grid">
                {CONSTRUCTION_UPDATES.map((item) => (
                  <ConstructionUpdateCard key={item.pathSlug} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooterBlock />
    </>
  );
}
