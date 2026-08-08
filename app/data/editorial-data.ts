import { BLOG_POSTS } from "~/data/prestige-v2-blogs";
import { NEWS_ARTICLES } from "~/data/prestige-v2-news";
import { PRESS_RELEASES } from "~/data/prestige-v2-press-releases";

export type EditorialCategory = "blog" | "press" | "industry";

export interface EditorialArticle {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  category: EditorialCategory;
  author?: string;
  body: string;
  href: string;
  external?: boolean;
  categories?: string[];
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  publisherLogo?: string;
  publisherName?: string;
}

function normalizeEditorialText(value: string): string {
  return value
    .replaceAll("Ã¢â‚¬â€œ", "–")
    .replaceAll("Ã¢â‚¬â€", "—")
    .replaceAll("Ã¢â‚¬Ëœ", "‘")
    .replaceAll("Ã¢â‚¬â„¢", "’")
    .replaceAll("Ã¢â‚¬Å“", "“")
    .replaceAll("Ã¢â‚¬Â", "”")
    .replaceAll("â€“", "–")
    .replaceAll("â€”", "—")
    .replaceAll("â€˜", "‘")
    .replaceAll("â€™", "’")
    .replaceAll("â€œ", "“")
    .replaceAll("â€", "”")
    .replaceAll("Ã©", "é")
    .replaceAll("Ã¨", "è")
    .replaceAll("Ã´", "ô")
    .replaceAll("Ã§", "ç")
    .replaceAll("Ã‚Â", "")
    .replaceAll("Â", "");
}

function getLocalBlogCover(source: string): string {
  if (!source.startsWith("http://") && !source.startsWith("https://")) return source;
  const pathname = new URL(source).pathname;
  const filename = decodeURIComponent(pathname.slice(pathname.lastIndexOf("/") + 1));
  return `/assets/images/v2/blogs/${filename}`;
}

function getLocalBlogBody(source: string): string {
  return source
    .replace(/\s+srcset=["'][^"']*["']/gi, "")
    .replace(/\s+sizes=["'][^"']*["']/gi, "")
    .replace(
      /(<img\b[^>]*\bsrc=["'])https?:\/\/[^"']+\/([^/"']+)(["'])/gi,
      "$1/assets/images/v2/blogs/$2$3",
    );
}

export const blogArticles: EditorialArticle[] = BLOG_POSTS.map((post) => ({
  slug: post.slug,
  title: normalizeEditorialText(post.title),
  excerpt: normalizeEditorialText(post.excerpt),
  cover: getLocalBlogCover(post.featuredImage),
  date: post.dateIso || post.date,
  category: "blog",
  author: normalizeEditorialText(post.author),
  body: normalizeEditorialText(getLocalBlogBody(post.contentHtml)),
  href: `/blog/${post.slug}`,
  categories: post.categories,
  tags: post.tags,
  seoTitle: normalizeEditorialText(post.seoTitle),
  seoDescription: normalizeEditorialText(post.seoDescription),
}));

export const industryArticles: EditorialArticle[] = NEWS_ARTICLES.map((post) => ({
  slug: post.slug,
  title: normalizeEditorialText(post.title),
  excerpt: normalizeEditorialText(post.excerpt),
  cover: post.featuredImage,
  date: post.dateIso || post.date,
  category: "industry",
  author: normalizeEditorialText(post.author),
  body: normalizeEditorialText(post.contentHtml),
  href: `/industry-news/${post.slug}`,
  categories: post.categories,
  tags: post.tags,
  seoTitle: normalizeEditorialText(post.seoTitle),
  seoDescription: normalizeEditorialText(post.seoDescription),
}));

export const pressReleaseArticles: EditorialArticle[] = [...PRESS_RELEASES]
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .map((item) => ({
    slug: `press-release-${item.id}`,
    title: normalizeEditorialText(item.title),
    excerpt: normalizeEditorialText(item.description),
    cover: item.image,
    date: item.date,
    category: "press",
    author: normalizeEditorialText(item.publisherName),
    body: "",
    href: item.url,
    external: true,
    publisherLogo: item.publisherLogo,
    publisherName: normalizeEditorialText(item.publisherName),
  }));

export function getEditorialArticles(category: EditorialCategory): EditorialArticle[] {
  if (category === "blog") return blogArticles;
  if (category === "press") return pressReleaseArticles;
  return industryArticles;
}

export function getEditorialArticle(
  category: Exclude<EditorialCategory, "press">,
  slug: string,
): EditorialArticle | undefined {
  return getEditorialArticles(category).find((article) => article.slug === slug);
}

export function editorialCategoryLabel(category: EditorialCategory): string {
  if (category === "press") return "Press Release";
  if (category === "industry") return "Industry News";
  return "Blog";
}
