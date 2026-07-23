import OurStoryPage from "@/components/about-us/OurStoryPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Our Story",
  description:
    "Discover the Prestige One journey — group legacy since 1976 and nearly two decades of real estate leadership in Dubai since 2007.",
});

const Page = () => {
  return (
    <Wrapper>
      <OurStoryPage />
    </Wrapper>
  );
};

export default Page;
