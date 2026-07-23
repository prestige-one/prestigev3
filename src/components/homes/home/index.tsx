 
import HeroArea from "./HeroArea";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import LogoSliderArea from "./LogoSliderArea";
// Backup: import LogoMarqueeArea from "./LogoMarqueeArea"; (react-fast-marquee has no drag support)
import MissionVisionTabsArea from "./MissionVisionTabsArea";
import CoreValuesAreaV2 from "./CoreValuesAreaV2";
import ProjectsParallaxGridArea from "./ProjectsParallaxGridArea";
// Backup: import OurDestinationsArea from "./OurDestinationsArea";
import DestinationsSliderArea from "./DestinationsSliderArea";
import HeartOfLocationsArea from "./HeartOfLocationsArea";
import TestimonialSliderArea from "./TestimonialSliderArea";
import "@/components/homes/home/home-page.css";

const HomeOne = () => {
	return (
		<>
			<SiteHeader />
			<div className="po-home-page">
				<HeroArea />
				{/* Marquee backup kept (no drag support): <LogoMarqueeArea /> */}
				<LogoSliderArea />
				<MissionVisionTabsArea />
				{ /* <CoreValuesAreaV2 /> */ }
				<ProjectsParallaxGridArea />
				<HeartOfLocationsArea />
				{/* Backup component: <OurDestinationsArea /> (see OurDestinationsArea.tsx) */}
				<DestinationsSliderArea />
				<TestimonialSliderArea />
			</div>
			<SiteFooterBlock />
		</>
	);
};

export default HomeOne;


