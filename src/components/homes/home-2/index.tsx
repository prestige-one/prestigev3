import HeroArea from "../home/HeroArea";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import LogoSliderArea from "../home/LogoSliderArea";
import MissionVisionTabsArea from "../home/MissionVisionTabsArea";
import ProjectsParallaxGridArea from "../home/ProjectsParallaxGridArea";
import ImmersiveMapArea from "./ImmersiveMapArea";
import DestinationsSliderArea from "../home/DestinationsSliderArea";
import TestimonialSliderArea from "../home/TestimonialSliderArea";
import "@/components/homes/home/home-page.css";

/**
 * Clone of the real homepage (src/components/homes/home/index.tsx), reusing
 * every section as-is except the footprint map: this page uses
 * ImmersiveMapArea (the cinematic DubaiInteractiveMap widget) in place of
 * HeartOfLocationsArea's Resimo iframe, so the real homepage is unaffected.
 */
const HomeTwo = () => {
  return (
    <>
      <SiteHeader />
      <div className="po-home-page">
        <HeroArea />
        <LogoSliderArea />
        <MissionVisionTabsArea />
        <ProjectsParallaxGridArea />
        <ImmersiveMapArea />
        <DestinationsSliderArea />
        <TestimonialSliderArea />
      </div>
      <SiteFooterBlock />
    </>
  );
};

export default HomeTwo;
