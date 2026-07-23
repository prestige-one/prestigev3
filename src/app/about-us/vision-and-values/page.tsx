import VisionValuesPage from "@/components/about-us/VisionValuesPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Vision & Values",
  description:
    "Discover Prestige One's vision and values — the principles that guide design, delivery, and long-term excellence across our developments.",
});

const Page = () => {
  return (
    <Wrapper>
      <VisionValuesPage />
    </Wrapper>
  );
};

export default Page;
