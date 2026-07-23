import GolfResidencesConstructionUpdatePage from "@/components/construction-updates/GolfResidencesConstructionUpdatePage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Construction Update: Golf Residences by Prestige One",
  description:
    "Monthly construction updates for Golf Residences by Prestige One with grouped gallery progress snapshots.",
});

export default function ConstructionUpdateGolfResidencesByPrestigeOneRoute() {
  return (
    <Wrapper>
      <GolfResidencesConstructionUpdatePage />
    </Wrapper>
  );
}
