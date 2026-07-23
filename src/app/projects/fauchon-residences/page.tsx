import FauchonResidencesProjectPage from "@/components/projects/fauchon/FauchonResidencesProjectPage";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "FAUCHON Résidences",
  description:
    "Explore FAUCHON Résidences by Prestige One in Jumeirah Gardens City — curated amenities, refined residences, nearby schools, hospitals, and register your interest.",
});

export default function FauchonResidencesProjectRoute() {
  return (
    <Wrapper>
      <FauchonResidencesProjectPage />
    </Wrapper>
  );
}
