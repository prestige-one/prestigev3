import HubListBodyClass from "@/components/common/HubListBodyClass";
import NewsListingsPage from "@/components/news/NewsListingsPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "News",
  description:
    "Prestige One in media — milestones, partnerships, and press updates from Prestige One Developments.",
});

type NewsRouteProps = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};

export default async function NewsRoute({ searchParams }: NewsRouteProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawPage = Array.isArray(resolvedSearchParams?.page) ? resolvedSearchParams?.page[0] : resolvedSearchParams?.page;
  const requestedPage = Number(rawPage ?? "1");
  const currentPage = Number.isFinite(requestedPage) && requestedPage >= 1 ? Math.floor(requestedPage) : 1;

  return (
    <Wrapper>
      <HubListBodyClass />
      <NewsListingsPage currentPage={currentPage} />
    </Wrapper>
  );
}
