import MajanCityDestinationPage from "@/components/destinations/MajanCityDestinationPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Majan City",
  description:
    "Discover Majan City — a rapidly emerging mixed-use community in Dubailand with nearby attractions, connectivity, and investment potential.",
});

export default function MajanCityDestinationRoute() {
  return (
    <Wrapper>
      <MajanCityDestinationPage />
    </Wrapper>
  );
}
