import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListingsPage from "@/components/blogs/BlogListingsPage";
import HubListBodyClass from "@/components/common/HubListBodyClass";
import Wrapper from "@/layouts/Wrapper";
import { getAllTagSlugs, getPostsByTagSlug, toTaxonomyLabel } from "@/lib/blog-taxonomy";
import { createPageMetadata } from "@/lib/site-meta";

type TagPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};

export async function generateStaticParams() {
  return getAllTagSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tagLabel = toTaxonomyLabel(slug);

  return createPageMetadata({
    title: `${tagLabel} Tag`,
    description: `Browse blog posts tagged with ${tagLabel}.`,
  });
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const { slug } = await params;
  const filteredPosts = getPostsByTagSlug(slug);
  if (!filteredPosts.length) notFound();

  const tagLabel = toTaxonomyLabel(slug);
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawPage = Array.isArray(resolvedSearchParams?.page) ? resolvedSearchParams.page[0] : resolvedSearchParams?.page;
  const requestedPage = Number(rawPage ?? "1");
  const currentPage = Number.isFinite(requestedPage) && requestedPage >= 1 ? Math.floor(requestedPage) : 1;

  return (
    <Wrapper>
      <HubListBodyClass />
      <BlogListingsPage
        currentPage={currentPage}
        posts={filteredPosts}
        title={`Tag: ${tagLabel}`}
        introCopy={`Explore all blog posts tagged with ${tagLabel}.`}
        basePath={`/tag/${slug}`}
        emptyMessage={`No posts found for ${tagLabel}.`}
      />
    </Wrapper>
  );
}
