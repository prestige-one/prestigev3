import JumeirahGardenCityDestinationPage from "@/components/destinations/JumeirahGardenCityDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Jumeirah Garden City",
  description:
    "Discover Jumeirah Garden City — a refined central Dubai address with strong connectivity to Downtown, DIFC, landmark destinations, schools, healthcare, and FAUCHON Résidences by Prestige One.",
});

export default function JumeirahGardenCityDestinationRoute() {
  return (
    <Wrapper>
      <JumeirahGardenCityDestinationPage />
    </Wrapper>
  );
}
