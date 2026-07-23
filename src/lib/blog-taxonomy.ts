import { BLOG_POSTS, type BlogPostItem } from "@/data/blogs";

export function toTaxonomySlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toTaxonomyLabel(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getPostsByCategorySlug(slug: string): BlogPostItem[] {
  const normalized = toTaxonomySlug(slug);
  return BLOG_POSTS.filter((post) => post.categories.some((category) => toTaxonomySlug(category) === normalized));
}

export function getPostsByTagSlug(slug: string): BlogPostItem[] {
  const normalized = toTaxonomySlug(slug);
  return BLOG_POSTS.filter((post) => post.tags.some((tag) => toTaxonomySlug(tag) === normalized));
}

export function getAllCategorySlugs(): string[] {
  return Array.from(new Set(BLOG_POSTS.flatMap((post) => post.categories.map(toTaxonomySlug)).filter(Boolean)));
}

export function getAllTagSlugs(): string[] {
  return Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags.map(toTaxonomySlug)).filter(Boolean)));
}
