import LeadershipPage from "@/components/about-us/LeadershipPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Leadership",
  description:
    "Meet Prestige One's leadership team — the people driving strategy, design excellence, and delivery across Dubai developments.",
});

const Page = () => {
  return (
    <Wrapper>
      <LeadershipPage />
    </Wrapper>
  );
};

export default Page;
