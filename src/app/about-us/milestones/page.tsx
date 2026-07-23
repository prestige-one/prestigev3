import MilestonesPage from "@/components/about-us/MilestonesPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Milestones",
  description:
    "Explore Prestige One milestones — the landmark achievements and timeline that shaped our growth journey.",
});

const Page = () => {
  return (
    <Wrapper>
      <MilestonesPage />
    </Wrapper>
  );
};

export default Page;
