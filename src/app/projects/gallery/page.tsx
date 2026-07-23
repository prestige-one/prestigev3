import ProjectsDepthGalleryPage from "@/components/projects/depth-gallery/ProjectsDepthGalleryPage";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Projects Gallery",
  description:
    "Scroll through an immersive depth gallery of every Prestige One Developments project across Dubai.",
});

export default function ProjectsGalleryRoute() {
  return <ProjectsDepthGalleryPage />;
}
