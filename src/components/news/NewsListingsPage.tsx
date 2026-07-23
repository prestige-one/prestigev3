import Link from "next/link";
import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import ShimmerImage from "@/components/common/ShimmerImage";
import { NEWS_ARTICLES } from "@/data/news";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const NEWS_HERO_INTRO =
  "Prestige One Developments journey is marked by continuous growth and a dedication to creating spaces that leave a lasting impact. From strategic partnerships to landmark developments, Prestige One consistently pushes forward, shaping a future of distinction and success. Get exclusive insights into our milestones and the landmark achievements that define our legacy. Stay informed with all the news and developments as we push boundaries and set new standards in the world of real estate.";

const POSTS_PER_PAGE = 9;

type NewsListingsPageProps = {
  currentPage: number;
};

export default function NewsListingsPage({ currentPage }: NewsListingsPageProps) {
  const totalPages = Math.max(1, Math.ceil(NEWS_ARTICLES.length / POSTS_PER_PAGE));
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = NEWS_ARTICLES.slice(start, start + POSTS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, idx) => idx + 1);
  const pageHref = (page: number) => (page <= 1 ? "/news" : `/news?page=${page}`);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="po-list-page" aria-labelledby="news-list-heading">
          <div className="po-list-page-hero po-news-list-hero">
            <div className="container po-list-page-hero-inner">
              <h1 id="news-list-heading" className="po-list-page-title">
                Prestige One in Media
              </h1>
              <p className="po-list-page-intro">{NEWS_HERO_INTRO}</p>
            </div>
          </div>

          <div className="po-list-page-cards-shell" aria-label="News listings">
            <div className="container">
              <div className="po-list-page-grid list-page-grid">
                {visiblePosts.map((item) => (
                  <Link key={item.id} href={`/news/${item.slug}`} className="po-list-item-card item-card">
                    {item.featuredImage ? (
                      <ShimmerImage src={item.featuredImage} alt={item.title} className="po-list-item-media item-card-image" />
                    ) : (
                      <div className="po-list-item-media item-card-image">
                        <div className="po-list-item-media-fallback" aria-hidden="true" />
                      </div>
                    )}
                    <div className="po-list-item-body item-card-content">
                      <h3 className="po-list-item-title">{item.title}</h3>
                      <span className="po-list-item-btn">
                        <span>Read more</span>
                        <ListPageExploreArrow />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <nav className="po-blogs-pagination" aria-label="News pages">
                  <Link
                    href={pageHref(currentPage - 1)}
                    className="po-blogs-pagination-btn"
                    aria-disabled={currentPage === 1}
                    tabIndex={currentPage === 1 ? -1 : undefined}
                  >
                    Previous
                  </Link>
                  {pageNumbers.map((page) => (
                    <Link
                      key={page}
                      href={pageHref(page)}
                      className={`po-blogs-pagination-btn ${page === currentPage ? "is-active" : ""}`}
                      aria-current={page === currentPage ? "page" : undefined}
                    >
                      {page}
                    </Link>
                  ))}
                  <Link
                    href={pageHref(currentPage + 1)}
                    className="po-blogs-pagination-btn"
                    aria-disabled={currentPage === totalPages}
                    tabIndex={currentPage === totalPages ? -1 : undefined}
                  >
                    Next
                  </Link>
                </nav>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </>
  );
}
