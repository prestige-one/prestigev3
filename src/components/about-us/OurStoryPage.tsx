"use client";

import PageHero from "@/common/PageHero";
import ScrollAnimate, { ScrollAnimateGroup } from "@/components/common/ScrollAnimate";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import AboutArea from "@/components/homes/home/AboutArea";
import CompanyStatsGrid from "@/components/about-us/CompanyStatsGrid";
import "@/components/about-us/our-story-page.css";

const OurStoryPage = () => {
  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Our Story"
        description="A legacy built over decades, from group foundations in 1976 to real estate leadership in Dubai since 2007."
      />

      <ScrollAnimateGroup>
        <section className="po-our-story-highlight" aria-labelledby="po-our-story-highlight-title">
          <div className="container">
            <div className="po-our-story-highlight__shell">
              <ScrollAnimate delay={100}>
                <p className="po-our-story-highlight__kicker">Legacy & Credibility</p>
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
                animationDelays={[200, 300, 400, 500, 600, 700]}
              />
            </div>
          </div>
        </section>

        <ScrollAnimate delay={800}>
          <AboutArea showBottomDivider={false} />
        </ScrollAnimate>

        <section className="po-our-story-narrative" aria-labelledby="po-our-story-narrative-title">
          <div className="container">
            <div className="po-our-story-narrative__grid">
              <ScrollAnimate as="article" className="po-our-story-narrative__card" delay={900}>
                <p className="po-our-story-narrative__kicker">Our Foundation</p>
                <h2 id="po-our-story-narrative-title">From group heritage to modern Dubai developments.</h2>
                <p>
                  Prestige One brings long-established group standards into every project through disciplined planning,
                  strong design intent, and reliable execution.
                </p>
              </ScrollAnimate>
              <ScrollAnimate as="article" className="po-our-story-narrative__card" delay={1000}>
                <p className="po-our-story-narrative__kicker">Our Direction</p>
                <h2>Built for modern lifestyles and enduring quality.</h2>
                <p>
                  Our story is defined by consistency and trust, with homes shaped around lifestyle, architecture, and
                  service that stay relevant for years.
                </p>
              </ScrollAnimate>
            </div>
          </div>
        </section>
      </ScrollAnimateGroup>

      <SiteFooterBlock />
    </>
  );
};

export default OurStoryPage;
