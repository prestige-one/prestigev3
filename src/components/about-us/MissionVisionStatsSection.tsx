"use client";

import React, { useEffect, useMemo, useState } from "react";
import ScrollAnimate from "@/components/common/ScrollAnimate";
import "@/components/about-us/about-mission-vision.css";

export type MissionVisionAnimationDelays = {
  mission?: number;
  vision?: number;
  statsHead?: number;
  stats?: number[];
};

type MissionVisionStatsSectionProps = {
  animationDelays?: MissionVisionAnimationDelays;
  showStats?: boolean;
};

const missionText =
  "Prestige One Developments is committed to creating innovative and sustainable developments that enhance the quality of life for our clients. By combining superior design, high-quality materials, and exceptional service, we contribute to Dubai's reputation as a global real estate leader.";

const visionText =
  "To lead the transformation of real estate by creating iconic, sustainable developments that improve the living experience and inspire communities to 'Live in Prestige'.";

const MissionIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M9 9h5v14H9V9Zm9 0h5v8h-5V9Zm0 11h5v3h-5v-3Z" />
  </svg>
);

const VisionIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 9c5.4 0 10.2 3.2 12.8 8-2.6 4.8-7.4 8-12.8 8S5.8 21.8 3.2 17C5.8 12.2 10.6 9 16 9Z" />
    <circle cx="16" cy="17" r="3.5" />
  </svg>
);

const missionVisionPanels = [
  {
    kicker: "Our Mission",
    title: "Our Mission",
    text: missionText,
    image: "/assets/images/v2/pages/our-mission-2.webp",
    imageAlt: "Prestige One team collaborating on development plans",
    icon: <MissionIcon />,
  },
  {
    kicker: "Our Vision",
    title: "Our Vision",
    text: visionText,
    image: "/assets/images/v2/pages/pages-internal-images/the-one-1.webp",
    imageAlt: "Prestige One Developments across Dubai",
    icon: <VisionIcon />,
  },
] as const;

const stats = [
  {
    value: "20+",
    label: "Ongoing Projects",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5h16M7 3v2.5M17 3v2.5M6 9h12a1 1 0 0 1 1 1V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  {
    value: "6.5K",
    label: "Brokers with us",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-7 7c.7-2.7 3.3-4.5 7-4.5s6.3 1.8 7 4.5M8 9.5h.01M16 9.5h.01" />
      </svg>
    ),
  },
  {
    value: "127K+",
    label: "Strategic Partners",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4.5 19c.4-2.2 2.4-3.8 4.7-3.8 2.3 0 4.3 1.6 4.7 3.8m1.6 0c.3-1.8 1.9-3 3.7-3 .9 0 1.8.3 2.6.9" />
      </svg>
    ),
  },
  {
    value: "11.5K",
    label: "Satisfied Clients",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s-7-3.8-7-9.2a4.2 4.2 0 0 1 7-3 4.2 4.2 0 0 1 7 3C19 16.2 12 20 12 20Z" />
      </svg>
    ),
  },
];

type StatMeta = {
  target: number;
  suffix: string;
  decimals: number;
  plus: boolean;
};

const parseStatValue = (value: string): StatMeta => {
  const plus = value.includes("+");
  const raw = value.replace("+", "").trim();

  if (raw.endsWith("K")) {
    const numStr = raw.replace("K", "");
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    return { target: parseFloat(numStr), suffix: "K", decimals, plus: false };
  }

  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return { target: parseFloat(raw), suffix: "", decimals, plus };
};

const formatStatValue = (num: number, meta: StatMeta) => {
  if (meta.suffix === "K") return `${num.toFixed(meta.decimals)}K`;
  if (meta.plus) return `${Math.round(num)}+`;
  if (meta.decimals > 0) return num.toFixed(meta.decimals);
  return `${Math.round(num)}`;
};

const MissionVisionStatsSection = ({ animationDelays, showStats = true }: MissionVisionStatsSectionProps) => {
  const metas = useMemo(() => stats.map((s) => parseStatValue(s.value)), []);
  const [displayNums, setDisplayNums] = useState<number[]>(() => metas.map(() => 0));
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasEnteredViewport) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  useEffect(() => {
    if (!hasEnteredViewport) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      setDisplayNums(metas.map((m) => m.target));
      return;
    }

    const durationMs = 1200;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / durationMs));
      const eased = easeOutCubic(t);
      setDisplayNums(metas.map((m) => m.target * eased));

      if (t < 1) raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [hasEnteredViewport, metas]);

  const panelDelays = [animationDelays?.mission, animationDelays?.vision];

  const renderPanel = (panel: (typeof missionVisionPanels)[number], index: number) => {
    const content = (
      <>
        <img className="po-mv-panel-bg" src={panel.image} alt={panel.imageAlt} loading="lazy" />
        <div className="po-mv-panel-shade" aria-hidden="true" />
        <div className="po-mv-panel-body">
          <div className="po-mv-panel-body-inner">
            <span className="po-mv-panel-icon" aria-hidden="true">
              {panel.icon}
            </span>
            <div className="po-mv-panel-copy">
              <h3>{panel.title}</h3>
              <span className="po-mv-panel-divider" aria-hidden="true" />
              <p className="po-mv-panel-text">{panel.text}</p>
            </div>
          </div>
        </div>
      </>
    );

    const delay = panelDelays[index];
    if (delay === undefined) {
      return (
        <article className="po-mv-panel" key={panel.kicker}>
          {content}
        </article>
      );
    }

    return (
      <ScrollAnimate as="article" className="po-mv-panel" key={panel.kicker} delay={delay}>
        {content}
      </ScrollAnimate>
    );
  };

  const statsHead = (
    <>
      <p>Prestige One at a Glance</p>
      <h2>Our Impact in Numbers</h2>
    </>
  );

  return (
    <section className="po-mv-stats-section" ref={sectionRef} id="vision-values">
      <div className="container">
        <div className="po-mv-wrapper">
          <div className="po-mv-panels">
            {missionVisionPanels.map((panel, index) => renderPanel(panel, index))}
          </div>

          {showStats && (
            <div className="po-mv-stats-band">
              {animationDelays?.statsHead !== undefined ? (
                <ScrollAnimate as="header" className="po-mv-stats-head" delay={animationDelays.statsHead}>
                  {statsHead}
                </ScrollAnimate>
              ) : (
                <header className="po-mv-stats-head">{statsHead}</header>
              )}

              <div className="po-mv-stats-grid po-mv-stats-grid--prominent">
                {stats.map((item, index) => {
                  const card = (
                    <>
                      <span className="po-mv-stat-icon">{item.icon}</span>
                      <div className="po-mv-stat-copy">
                        <h3>{formatStatValue(displayNums[index] ?? 0, metas[index])}</h3>
                        <p>{item.label}</p>
                      </div>
                    </>
                  );

                  const delay = animationDelays?.stats?.[index];
                  if (delay === undefined) {
                    return (
                      <article className="po-mv-stat-card" key={item.label}>
                        {card}
                      </article>
                    );
                  }

                  return (
                    <ScrollAnimate as="article" className="po-mv-stat-card" key={item.label} delay={delay}>
                      {card}
                    </ScrollAnimate>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionStatsSection;
