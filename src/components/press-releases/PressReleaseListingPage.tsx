import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import ShimmerImage from "@/components/common/ShimmerImage";
import { PRESS_RELEASES } from "@/data/press-releases";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const INTRO_COPY =
  "Prestige One Developments journey is marked by continuous growth and a dedication to creating spaces that leave a lasting impact. From strategic partnerships to landmark developments, Prestige One consistently pushes forward, shaping a future of distinction and success. Get exclusive insights into our milestones and the landmark achievements that define our legacy. Stay informed with all the news and developments as we push boundaries and set new standards in the world of real estate.";

export default function PressReleaseListingPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="po-list-page" aria-labelledby="press-release-list-heading">
          <div className="po-list-page-hero po-news-list-hero">
            <div className="container po-list-page-hero-inner">
              <h1 id="press-release-list-heading" className="po-list-page-title">
                Prestige One in Media
              </h1>
              <p className="po-list-page-intro">{INTRO_COPY}</p>
            </div>
          </div>

          <div className="po-list-page-cards-shell" aria-label="Press release listings">
            <div className="container">
              <div className="po-list-page-grid list-page-grid po-press-release-grid">
                {PRESS_RELEASES.map((item) => (
                  <a
                    key={item.id}
                    className="po-list-item-card item-card po-press-release-card"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShimmerImage
                      src={item.image}
                      alt={item.title}
                      className="po-list-item-media item-card-image po-press-release-media"
                    />
                    <div className="po-list-item-body item-card-content po-press-release-content">
                      <h3 className="po-list-item-title">{item.title}</h3>
                      <span className="po-list-item-btn">
                        <span>Read more</span>
                        <ListPageExploreArrow />
                      </span>
                    </div>
                  </a>
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
