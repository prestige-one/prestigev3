import DlrcDestinationPage from "@/components/destinations/DlrcDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Dubai Land Residence Complex (DLRC)",
  description:
    "Discover Dubai Land Residence Complex — nearby attractions, connectivity, family-friendly amenities, and Prestige One developments including The Boulevard.",
});

export default function DlrcDestinationRoute() {
  return (
    <Wrapper>
      <DlrcDestinationPage />
    </Wrapper>
  );
}
