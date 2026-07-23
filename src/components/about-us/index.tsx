import PageHero from "@/common/PageHero";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import ScrollAnimate, { ScrollAnimateGroup } from "@/components/common/ScrollAnimate";
import AboutArea from "../homes/home/AboutArea";
import FounderMessageSectionLight from "./FounderMessageSectionLight";
import MissionVisionStatsSection from "./MissionVisionStatsSection";
import ManagementTeamSection from "./ManagementTeamSection";
import RoadmapTimelineSection from "./RoadmapTimelineSection";
import CompanyStatsGrid from "./CompanyStatsGrid";
import GlobalPresenceSection from "./GlobalPresenceSection";
import LogoMarqueeArea from "../homes/home/LogoMarqueeArea";
import "@/components/about-us/our-story-page.css";
import "@/components/about-us/leadership-page.css";
import "@/components/about-us/vision-values-page.css";
import "@/components/about-us/milestones-page.css";

const Aboutus = () => {
  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="About Us"
        description="Discover our story, values, and the people shaping exceptional living experiences in Dubai and beyond."
      />

      {/* 1. Prestige One Developments + 2. Legacy & Credibility */}
      {/* AboutArea below already carries id="our-story" as its anchor target */}
      <section className="po-about-anchor-section" aria-labelledby="po-our-story-highlight-title">
        <ScrollAnimateGroup>
          <ScrollAnimate delay={100}>
            <AboutArea showBottomDivider={false} />
          </ScrollAnimate>

          <div className="po-our-story-highlight" id="legacy-credibility">
            <div className="container">
              <div className="po-our-story-highlight__shell">
                <ScrollAnimate delay={200}>
                  <p className="po-our-story-highlight__kicker">Legacy &amp; Credibility</p>
                  <h2 id="po-our-story-highlight-title">
                    Nearly 60 years as a business group. 19 years shaping Dubai real estate.
                  </h2>
                  <p>
                    Prestige One has been active in Dubai real estate since 2007, bringing 19 years of market experience.
                    As part of a wider group in business since 1976, we carry nearly six decades of discipline, trust, and
                    long-term vision into every development.
                  </p>
                </ScrollAnimate>

                <CompanyStatsGrid
                  className="po-our-story-highlight__stats"
                  animationDelays={[300, 400, 500, 600, 700, 800]}
                />
              </div>
            </div>
          </div>
        </ScrollAnimateGroup>
      </section>

      <GlobalPresenceSection />

      {/* Vision & Mission — MissionVisionStatsSection already carries id="vision-values" */}
      <section className="po-about-anchor-section">
        <ScrollAnimateGroup>
          <MissionVisionStatsSection
            showStats={false}
            animationDelays={{
              mission: 100,
              vision: 200,
            }}
          />
        </ScrollAnimateGroup>
      </section>

      {/* 3. Meet Our Founder & CEO — FounderMessageSectionLight already carries id="leadership" */}
      <section className="po-about-anchor-section">
        <ScrollAnimateGroup>
          <ScrollAnimate delay={200}>
            <FounderMessageSectionLight />
          </ScrollAnimate>
        </ScrollAnimateGroup>
      </section>

      {/* 4. Our Team — ManagementTeamSection already carries id="our-team" */}
      <section className="po-about-anchor-section">
        <ScrollAnimateGroup>
          <ScrollAnimate delay={100}>
            <ManagementTeamSection />
          </ScrollAnimate>
        </ScrollAnimateGroup>
      </section>

      {/* 5. Our Philosophy and Our Journey — one row, 2 columns */}
      <section id="our-philosophy-journey" className="po-about-anchor-section">
        <ScrollAnimateGroup>
          <div className="po-philosophy-journey">
            <div className="container">
              <div className="po-philosophy-journey__grid">
                <ScrollAnimate className="po-vision-values-intro__panel" delay={100}>
                  <p className="po-vision-values-intro__kicker">Our Philosophy</p>
                  <h2>A clear vision, anchored by values that shape every decision.</h2>
                  <p>
                    At Prestige One, vision and values are practical commitments. They guide how we select locations,
                    design living experiences, collaborate with partners, and serve our clients throughout the full
                    development journey.
                  </p>
                </ScrollAnimate>

                <ScrollAnimate className="po-milestones-intro__panel" delay={200}>
                  <p className="po-milestones-intro__kicker">Our Journey</p>
                  <h2>Growth built through decisive milestones and consistent execution.</h2>
                  <p>
                    Every chapter reflects a strategic move in our evolution, from early investment phases to major
                    launches, expanded capabilities, and large-scale developments that continue to define the Prestige One
                    journey.
                  </p>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </ScrollAnimateGroup>
      </section>

      {/* 6. Our Company Roadmap — RoadmapTimelineSection carries its own id="milestones" anchor */}
      <ScrollAnimateGroup>
        <ScrollAnimate delay={100}>
          <RoadmapTimelineSection />
        </ScrollAnimate>
      </ScrollAnimateGroup>

      { /* <LogoMarqueeArea /> */ }
      <SiteFooterBlock />
    </>
  );
};

export default Aboutus;
