"use client";

import PageHero from "@/common/PageHero";
import ScrollAnimate, { ScrollAnimateGroup } from "@/components/common/ScrollAnimate";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import FounderMessageSectionLight from "@/components/about-us/FounderMessageSectionLight";
import ManagementTeamSection from "@/components/about-us/ManagementTeamSection";
import "@/components/about-us/leadership-page.css";

const LeadershipPage = () => {
  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Leadership"
        description="Meet the leaders shaping Prestige One's strategy, design vision, and long-term growth in Dubai."
      />

      <ScrollAnimateGroup>
        <section className="po-leadership-intro" aria-labelledby="po-leadership-intro-title">
          <div className="container">
            <ScrollAnimate className="po-leadership-intro__panel" delay={100}>
              <p className="po-leadership-intro__kicker">Leadership Overview</p>
              <h2 id="po-leadership-intro-title">Driven by experience. Guided by long-term vision.</h2>
              <p>
                Prestige One's leadership combines deep regional knowledge with disciplined execution to deliver
                high-quality developments. From land strategy to design and delivery, our team focuses on creating
                enduring value for homeowners, investors, and communities.
              </p>
            </ScrollAnimate>
          </div>
        </section>

        <ScrollAnimate delay={200}>
          <FounderMessageSectionLight />
        </ScrollAnimate>

        <ScrollAnimate delay={300}>
          <ManagementTeamSection />
        </ScrollAnimate>
      </ScrollAnimateGroup>

      <SiteFooterBlock />
    </>
  );
};

export default LeadershipPage;
