"use client";

import ListItemCardLink from "@/common/ListItemCardLink";
import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import PageHero from "@/common/PageHero";
import ShimmerImage from "@/components/common/ShimmerImage";
import { DESTINATIONS } from "@/data/destinations";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const INTRO_COPY =
  "Discover the Dubai communities where Prestige One builds from waterfront districts to established residential corridors.";

export default function OurDestinationsIndexPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHero
          kicker="Prestige One Developments"
          title="Our destinations"
          description={INTRO_COPY}
          headingId="destinations-list-heading"
        />

        <section className="po-list-page po-destinations-list-page" aria-labelledby="destinations-list-heading">
          <div className="po-list-page-cards-shell" aria-label="Destination listings">
            <div className="container">
              <div className="po-list-page-grid list-page-grid">
                {DESTINATIONS.map((item) => (
                  <ListItemCardLink key={item.id} href={item.href} className="po-list-item-card item-card">
                    <ShimmerImage src={item.image} alt={item.menuTitle} className="po-list-item-media item-card-image" />
                    <div className="po-list-item-body item-card-content">
                      <h3 className="po-list-item-title">{item.menuTitle}</h3>
                      <p className="po-list-item-desc">{item.description}</p>
                      <span className="po-list-item-btn">
                        <span>Explore more</span>
                        <ListPageExploreArrow />
                      </span>
                    </div>
                  </ListItemCardLink>
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
