import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HubListBodyClass from "@/components/common/HubListBodyClass";
import { NEWS_ARTICLES } from "@/data/news";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";
import Wrapper from "@/layouts/Wrapper";
import { stripEmptyParagraphsFromHtml } from "@/lib/blog-html";
import { createPageMetadata } from "@/lib/site-meta";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = NEWS_ARTICLES.find((item) => item.slug === slug);
  if (!post) {
    return createPageMetadata({
      title: "News",
      description: "Read the latest news and press updates from Prestige One Developments.",
    });
  }

  return createPageMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || "Read the latest news from Prestige One Developments.",
  });
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const post = NEWS_ARTICLES.find((item) => item.slug === slug);
  if (!post) notFound();

  const postIndex = NEWS_ARTICLES.findIndex((item) => item.slug === post.slug);
  const prevPost = postIndex > 0 ? NEWS_ARTICLES[postIndex - 1] : null;
  const nextPost = postIndex >= 0 && postIndex < NEWS_ARTICLES.length - 1 ? NEWS_ARTICLES[postIndex + 1] : null;
  const contentHtml = stripEmptyParagraphsFromHtml(post.contentHtml);

  return (
    <Wrapper>
      <HubListBodyClass />
      <SiteHeader />

      <main className="po-blog-post-page">
        <section className="po-blog-post-hero" aria-labelledby="news-article-title">
          <div className="container po-blog-post-hero-inner">
            <h1 id="news-article-title" className="po-blog-post-hero-title">
              {post.title}
            </h1>
          </div>
        </section>

        <section className="po-blog-post-content-shell" aria-label="Article content">
          <div className="container">
            {post.featuredImage ? (
              <div className="po-blog-post-featured-media">
                <img src={post.featuredImage} alt={post.title} loading="eager" />
              </div>
            ) : null}
            <div className="po-blog-post-content-inner" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </section>

        <section className="po-blog-post-related" aria-label="Article navigation">
          <div className="container">
            <div className="po-blog-post-inline-nav">
              {prevPost ? (
                <article className="po-blog-post-inline-item">
                  <p className="po-blog-post-inline-label">Previous article</p>
                  <Link className="po-blog-post-inline-link" href={`/news/${prevPost.slug}`}>
                    <span className="po-blog-post-inline-thumb">
                      {prevPost.featuredImage ? (
                        <img src={prevPost.featuredImage} alt={prevPost.title} loading="lazy" />
                      ) : (
                        <span className="po-list-item-media-fallback" aria-hidden="true" />
                      )}
                    </span>
                    <span className="po-blog-post-inline-title">{prevPost.title}</span>
                  </Link>
                </article>
              ) : null}
              {nextPost ? (
                <article className="po-blog-post-inline-item">
                  <p className="po-blog-post-inline-label">Next article</p>
                  <Link className="po-blog-post-inline-link" href={`/news/${nextPost.slug}`}>
                    <span className="po-blog-post-inline-thumb">
                      {nextPost.featuredImage ? (
                        <img src={nextPost.featuredImage} alt={nextPost.title} loading="lazy" />
                      ) : (
                        <span className="po-list-item-media-fallback" aria-hidden="true" />
                      )}
                    </span>
                    <span className="po-blog-post-inline-title">{nextPost.title}</span>
                  </Link>
                </article>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </Wrapper>
  );
}
