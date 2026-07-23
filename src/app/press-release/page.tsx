import HubListBodyClass from "@/components/common/HubListBodyClass";
import PressReleaseListingPage from "@/components/press-releases/PressReleaseListingPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Press Release",
  description: "Prestige One in media — external coverage, announcements, and major press mentions.",
});

export default function PressReleaseRoute() {
  return (
    <Wrapper>
      <HubListBodyClass />
      <PressReleaseListingPage />
    </Wrapper>
  );
}
