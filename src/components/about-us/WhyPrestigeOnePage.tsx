"use client";

import PageHero from "@/common/PageHero";
import ScrollAnimate, { ScrollAnimateGroup } from "@/components/common/ScrollAnimate";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import GrowingTogetherSection from "@/components/about-us/GrowingTogetherSection";
import CompanyStatsGrid from "@/components/about-us/CompanyStatsGrid";
import LogoMarqueeArea from "@/components/homes/home/LogoMarqueeArea";
import "@/components/about-us/why-prestige-one-page.css";

const DIFFERENTIATORS = [
  {
    title: "Legacy-Led Credibility",
    description:
      "Nearly 60 years of group strength and 19 years in Dubai real estate build confidence at every step.",
    iconClass: "fa-solid fa-shield-halved",
  },
  {
    title: "Design With Purpose",
    description:
      "Each project is shaped around how people live today, balancing elegance, utility, and lasting appeal.",
    iconClass: "fa-solid fa-compass-drafting",
  },
  {
    title: "Execution Discipline",
    description:
      "From planning to handover, our teams focus on quality, detail, and delivery you can depend on.",
    iconClass: "fa-solid fa-helmet-safety",
  },
  {
    title: "Customer-Centric Vision",
    description:
      "We build communities and experiences that keep residents, investors, and partners at the center.",
    iconClass: "fa-solid fa-handshake",
  },
] as const;

const WhyPrestigeOnePage = () => {
  return (
    <>
      <SiteHeader />
      <PageHero
        kicker="Prestige One Developments"
        title="Why Prestige One"
        description="See what sets us apart in design, quality, and customer experience, and why buyers and investors choose Prestige One."
      />

      <ScrollAnimateGroup>
        <section className="po-why-prestige-one-intro" aria-labelledby="po-why-prestige-one-intro-title">
          <div className="container">
            <ScrollAnimate className="po-why-prestige-one-intro__panel" delay={100}>
              <p className="po-why-prestige-one-intro__kicker">Our Difference</p>
              <h2 id="po-why-prestige-one-intro-title">
                A developer built on legacy, guided by design, and committed to lasting value.
              </h2>
              <p>
                Prestige One stands apart through a rare combination of long-term business credibility, thoughtful
                architecture, and disciplined delivery. Every development reflects our focus on quality living,
                investor confidence, and communities designed to endure.
              </p>
            </ScrollAnimate>
          </div>
        </section>

        <section className="po-why-prestige-one-pillars" aria-labelledby="po-why-prestige-one-pillars-title">
          <div className="container">
            <ScrollAnimate className="po-why-prestige-one-pillars__head" delay={200}>
              <p>What Sets Us Apart</p>
              <h2 id="po-why-prestige-one-pillars-title">The standards behind every Prestige One development.</h2>
            </ScrollAnimate>
            <div className="po-why-prestige-one-pillars__grid" role="list">
              {DIFFERENTIATORS.map((item, index) => (
                <ScrollAnimate
                  as="article"
                  className="po-why-prestige-one-pillars__item"
                  key={item.title}
                  delay={300 + index * 100}
                  role="listitem"
                >
                  <span className="po-why-prestige-one-pillars__icon" aria-hidden="true">
                    <i className={item.iconClass} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        <ScrollAnimate delay={700}>
          <GrowingTogetherSection />
        </ScrollAnimate>

        <section className="po-why-prestige-one-stats" aria-label="Prestige One key milestones">
          <div className="container">
            <CompanyStatsGrid animationDelays={[800, 900, 1000, 1100, 1200, 1300]} />
          </div>
        </section>
      </ScrollAnimateGroup>

      <LogoMarqueeArea />
      <SiteFooterBlock />
    </>
  );
};

export default WhyPrestigeOnePage;
