import WhyPrestigeOnePage from "@/components/about-us/WhyPrestigeOnePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Why Prestige One",
  description:
    "Discover what sets Prestige One apart — legacy-led credibility, purposeful design, disciplined execution, and customer-centric developments.",
});

const Page = () => {
  return (
    <Wrapper>
      <WhyPrestigeOnePage />
    </Wrapper>
  );
};

export default Page;
