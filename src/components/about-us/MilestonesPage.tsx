"use client";

import PageHero from "@/common/PageHero";
import ScrollAnimate, { ScrollAnimateGroup } from "@/components/common/ScrollAnimate";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import RoadmapTimelineSection from "@/components/about-us/RoadmapTimelineSection";
import "@/components/about-us/milestones-page.css";

const MilestonesPage = () => {
  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Milestones"
        description="A timeline of landmark achievements that shaped our growth from group legacy to Dubai development leadership."
      />

      <ScrollAnimateGroup>
        <section className="po-milestones-intro" aria-labelledby="po-milestones-intro-title">
          <div className="container">
            <ScrollAnimate className="po-milestones-intro__panel" delay={100}>
              <p className="po-milestones-intro__kicker">Our Journey</p>
              <h2 id="po-milestones-intro-title">Growth built through decisive milestones and consistent execution.</h2>
              <p>
                Every chapter reflects a strategic move in our evolution, from early investment phases to major
                launches, expanded capabilities, and large-scale developments that continue to define the Prestige One
                journey.
              </p>
            </ScrollAnimate>
          </div>
        </section>

        <ScrollAnimate delay={200}>
          <RoadmapTimelineSection />
        </ScrollAnimate>
      </ScrollAnimateGroup>

      <SiteFooterBlock />
    </>
  );
};

export default MilestonesPage;
