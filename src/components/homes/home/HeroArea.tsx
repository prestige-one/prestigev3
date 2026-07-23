"use client";

import { useEffect, useRef } from "react";

const STORY_TITLE = "Our Story";

const STORY_SENTENCES = [
  "It started with a vision.",
  "To create homes people truly love living in.",
  "Today, that vision shapes every Prestige One home.",
] as const;

const HERO_VIDEO_SRC = "/assets/images/v2/project-features-videos/v3/Fauchon.mp4";

/** Scroll steps this section is pinned for: intro beat + one beat per sentence + a release beat. */
const PIN_STEPS = STORY_SENTENCES.length + 2;

const OVERLAY_PEAK = 0.55;
const OVERLAY_RELEASE = 0.16;
const SENTENCE_TRAVEL_PX = 20;

type Point = [progress: number, value: number];

/** Piecewise-linear interpolation across a small set of control points. */
function plerp(progress: number, points: readonly Point[]): number {
  if (progress <= points[0][0]) return points[0][1];
  const last = points[points.length - 1];
  if (progress >= last[0]) return last[1];

  for (let i = 0; i < points.length - 1; i += 1) {
    const [p0, v0] = points[i];
    const [p1, v1] = points[i + 1];
    if (progress >= p0 && progress <= p1) {
      const t = (progress - p0) / (p1 - p0);
      return v0 + (v1 - v0) * t;
    }
  }
  return last[1];
}

/** Fades a value in, holds it, then fades it out within [start, end]. */
function bellCurve(progress: number, start: number, end: number, edgeRatio = 0.28): number {
  if (progress <= start || progress >= end) return 0;
  const span = end - start;
  const edge = span * edgeRatio;
  if (progress < start + edge) return (progress - start) / edge;
  if (progress > end - edge) return (end - progress) / edge;
  return 1;
}

const TITLE_POINTS: readonly Point[] = [
  [0, 0],
  [1 / PIN_STEPS, 1],
  [(PIN_STEPS - 1) / PIN_STEPS, 1],
  [1, 0],
];

const OVERLAY_POINTS: readonly Point[] = [
  [0, 0],
  [1 / PIN_STEPS, OVERLAY_PEAK],
  [(PIN_STEPS - 1) / PIN_STEPS, OVERLAY_PEAK],
  [1, OVERLAY_RELEASE],
];

const HeroArea = () => {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const sentenceRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const applyProgress = () => {
      const viewportHeight = window.innerHeight;
      const pinnableDistance = wrapper.offsetHeight - viewportHeight;
      const rectTop = wrapper.getBoundingClientRect().top;
      const progress = pinnableDistance > 0
        ? Math.min(1, Math.max(0, -rectTop / pinnableDistance))
        : 0;

      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(plerp(progress, OVERLAY_POINTS));
      }

      if (titleRef.current) {
        const opacity = plerp(progress, TITLE_POINTS);
        titleRef.current.style.opacity = String(opacity);
        titleRef.current.style.transform = `translateY(${(1 - opacity) * (SENTENCE_TRAVEL_PX / 2)}px)`;
      }

      const storyStart = 1 / PIN_STEPS;
      const storyEnd = (PIN_STEPS - 1) / PIN_STEPS;
      const storySpan = (storyEnd - storyStart) / STORY_SENTENCES.length;

      sentenceRefs.current.forEach((el, index) => {
        if (!el) return;
        const segStart = storyStart + index * storySpan;
        const segEnd = segStart + storySpan;
        const opacity = bellCurve(progress, segStart, segEnd);
        el.style.opacity = String(opacity);
        el.style.transform = `translateY(${(1 - opacity) * SENTENCE_TRAVEL_PX}px)`;
      });

      rafRef.current = undefined;
    };

    const requestTick = () => {
      if (rafRef.current !== undefined) return;
      rafRef.current = window.requestAnimationFrame(applyProgress);
    };

    applyProgress();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      if (rafRef.current !== undefined) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {
      /* Autoplay can be blocked before user interaction; the video stays muted and loops once allowed. */
    });
  }, []);

  return (
    <section
      className="po-story-hero"
      ref={wrapperRef}
      style={{ height: `${PIN_STEPS * 100}vh` }}
    >
      <div className="po-story-sticky">
        <video
          ref={videoRef}
          className="po-story-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="po-story-overlay" ref={overlayRef} />
        <div className="po-story-content">
          <span className="po-story-eyebrow" ref={titleRef}>
            {STORY_TITLE}
          </span>
          <div className="po-story-sentences" aria-live="off">
            {STORY_SENTENCES.map((sentence, index) => (
              <p
                key={sentence}
                className="po-story-sentence"
                ref={(el) => {
                  sentenceRefs.current[index] = el;
                }}
              >
                {sentence}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
