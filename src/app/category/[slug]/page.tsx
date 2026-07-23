import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListingsPage from "@/components/blogs/BlogListingsPage";
import HubListBodyClass from "@/components/common/HubListBodyClass";
import Wrapper from "@/layouts/Wrapper";
import {
  getAllCategorySlugs,
  getPostsByCategorySlug,
  toTaxonomyLabel,
} from "@/lib/blog-taxonomy";
import { createPageMetadata } from "@/lib/site-meta";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryLabel = toTaxonomyLabel(slug);

  return createPageMetadata({
    title: `${categoryLabel} Category`,
    description: `Browse blog posts in the ${categoryLabel} category.`,
  });
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const filteredPosts = getPostsByCategorySlug(slug);
  if (!filteredPosts.length) notFound();

  const categoryLabel = toTaxonomyLabel(slug);
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
        title={`Category: ${categoryLabel}`}
        introCopy={`Explore all blog posts filed under ${categoryLabel}.`}
        basePath={`/category/${slug}`}
        emptyMessage={`No posts found in ${categoryLabel}.`}
      />
    </Wrapper>
  );
}
