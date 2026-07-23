import Link from "next/link";
import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import ShimmerImage from "@/components/common/ShimmerImage";
import { BLOG_POSTS, type BlogPostItem } from "@/data/blogs";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";

const INTRO_COPY = "Read the latest insights, updates, and stories from Prestige One Developments.";
const POSTS_PER_PAGE = 9;

type BlogListingsPageProps = {
  currentPage: number;
  posts?: BlogPostItem[];
  title?: string;
  introCopy?: string;
  basePath?: string;
  emptyMessage?: string;
};

export default function BlogListingsPage({
  currentPage,
  posts = BLOG_POSTS,
  title = "Blogs",
  introCopy = INTRO_COPY,
  basePath = "/blogs",
  emptyMessage = "No posts found.",
}: BlogListingsPageProps) {
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(start, start + POSTS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, idx) => idx + 1);
  const pageHref = (page: number) => (page <= 1 ? basePath : `${basePath}?page=${page}`);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="po-list-page" aria-labelledby="blogs-list-heading">
          <div className="po-list-page-hero po-news-list-hero">
            <div className="container po-list-page-hero-inner">
              <p className="po-list-page-kicker">Prestige One Developments</p>
              <h1 id="blogs-list-heading" className="po-list-page-title">
                {title}
              </h1>
              <p className="po-list-page-intro">{introCopy}</p>
            </div>
          </div>

          <div className="po-list-page-cards-shell" aria-label="Blog listings">
            <div className="container">
              <div className="po-list-page-grid list-page-grid">
                {visiblePosts.length > 0 ? (
                  visiblePosts.map((item) => (
                    <Link key={item.id} href={`/blogs/${item.slug}`} className="po-list-item-card item-card">
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
                  ))
                ) : (
                  <p>{emptyMessage}</p>
                )}
              </div>

              {visiblePosts.length > 0 && totalPages > 1 && (
                <nav className="po-blogs-pagination" aria-label="Blog pages">
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
