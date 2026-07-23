"use client";

import PageHero from "@/common/PageHero";
import ScrollAnimate, { ScrollAnimateGroup } from "@/components/common/ScrollAnimate";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import MissionVisionStatsSection from "@/components/about-us/MissionVisionStatsSection";
import "@/components/about-us/vision-values-page.css";

const VisionValuesPage = () => {
  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Vision & Values"
        description="The principles, priorities, and standards that guide how Prestige One designs, builds, and delivers enduring value."
      />

      <ScrollAnimateGroup>
        <section className="po-vision-values-intro" aria-labelledby="po-vision-values-intro-title">
          <div className="container">
            <ScrollAnimate className="po-vision-values-intro__panel" delay={100}>
              <p className="po-vision-values-intro__kicker">Our Philosophy</p>
              <h2 id="po-vision-values-intro-title">A clear vision, anchored by values that shape every decision.</h2>
              <p>
                At Prestige One, vision and values are practical commitments. They guide how we select locations,
                design living experiences, collaborate with partners, and serve our clients throughout the full
                development journey.
              </p>
            </ScrollAnimate>
          </div>
        </section>

        <MissionVisionStatsSection
          animationDelays={{
            mission: 200,
            vision: 300,
            statsHead: 400,
            stats: [500, 600, 700, 800],
          }}
        />
      </ScrollAnimateGroup>

      <SiteFooterBlock />
    </>
  );
};

export default VisionValuesPage;
