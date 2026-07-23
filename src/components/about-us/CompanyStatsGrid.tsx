"use client";

import ScrollAnimate from "@/components/common/ScrollAnimate";
import { COMPANY_STATS } from "@/data/company-stats";
import "@/components/about-us/company-stats-grid.css";

type CompanyStatsGridProps = {
  className?: string;
  animationDelays?: number[];
};

const CompanyStatsGrid = ({ className, animationDelays }: CompanyStatsGridProps) => {
  const renderStat = (stat: (typeof COMPANY_STATS)[number], index: number) => {
    const content = stat.logo ? (
      <>
        <img src={stat.logo} alt={stat.label} className="po-company-stats__logo" loading="lazy" />
      </>
    ) : (
      <>
        <span className="po-company-stats__icon" aria-hidden="true">
          <i className={stat.iconClass} />
        </span>
        <p className="po-company-stats__value">{stat.value}</p>
        <p className="po-company-stats__label">{stat.label}</p>
      </>
    );

    const delay = animationDelays?.[index];
    if (delay === undefined) {
      return (
        <article className="po-company-stats__item" key={stat.label} role="listitem">
          {content}
        </article>
      );
    }

    return (
      <ScrollAnimate as="article" className="po-company-stats__item" key={stat.label} delay={delay} role="listitem">
        {content}
      </ScrollAnimate>
    );
  };

  return (
    <div
      className={["po-company-stats", className].filter(Boolean).join(" ")}
      aria-label="Prestige One key milestones"
    >
      <div className="po-company-stats__grid po-company-stats__grid--top" role="list">
        {COMPANY_STATS.slice(0, 3).map((stat, index) => renderStat(stat, index))}
      </div>
      <div className="po-company-stats__grid po-company-stats__grid--bottom" role="list">
        {COMPANY_STATS.slice(3).map((stat, index) => renderStat(stat, index + 3))}
      </div>
    </div>
  );
};

export default CompanyStatsGrid;
