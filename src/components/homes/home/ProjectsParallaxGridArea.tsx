"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/homes/home/projects-parallax-grid.css";
import {
  COLUMN_OFFSETS_REM,
  distributeColumns,
  FILLER_LAYOUT_BY_COUNT,
  MODIFIERS_BY_COUNT,
  PARALLAX_CARDS,
} from "@/components/homes/home/projectsParallaxData";

// Register once at module scope so the plugin is guaranteed available before
// any tween with a `scrollTrigger` config is created (otherwise GSAP silently
// ignores the config and the tween just plays once on mount).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ============================================================
 * SPEED CONTROLS — this is what to edit to change how fast the
 * cards move while scrolling.
 * ============================================================
 *
 * Base travel distance in px, scaled from the section's own height so the
 * effect stays proportional at any viewport size:
 *
 *   amplitude = clamp(section.offsetHeight * RATIO, MIN, MAX)
 *
 * Raise RATIO (or MIN/MAX) to make every column move further → faster.
 * Per-column relative speed (1st/3rd vs 2nd/4th) is controlled separately
 * in MODIFIERS_BY_COUNT, in projectsParallaxData.ts.
 *
 * The hard limit: translating a column up doesn't change the grid's
 * layout height, so an upward-moving column always opens a gap below
 * itself exactly equal to its own travel distance — push these too high
 * and that gap becomes visible empty space at the bottom of the section.
 * These values are tuned right up against that limit (verified with no
 * visible gap at any screen width) — raise them further only in small
 * steps, checking the very bottom of the section (scroll it fully into
 * view) after each change.
 */
const PARALLAX_AMPLITUDE_MIN = 1200;
const PARALLAX_AMPLITUDE_MAX = 2000;
const PARALLAX_AMPLITUDE_RATIO = 0.4;

/** Set to true to render ScrollTrigger start/end markers while debugging. */
const DEBUG_MARKERS = false;

/**
 * TEMPORARY: smaller-resolution thumbnail variants, swapped in for just
 * these cards to preview the image size in this grid. Scoped to this
 * component only (not the shared `projects.ts` data) so it doesn't affect
 * the project listing page or anywhere else PROJECTS is used. Once
 * approved, promote these into `projects.ts` for all cards and remove this.
 */
const THUMBNAIL_OVERRIDES: Record<string, string> = {
  "Berkeley Square North": "/assets/images/v2/project-images-sm/Berkeley-Square-North.webp",
  "Berkeley Square South": "/assets/images/v2/project-images-sm/Berkeley-Square-South.webp",
  "Luxury Canal Residences": "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal-v4.webp",
  "Hilton Residences Dubai Maritime City": "/assets/images/v2/project-featured-images/hilton/hilton-v5.webp",
  "The One by Prestige One": "/assets/images/v2/project-featured-images/one/the-one-v3.webp",
  "Parkway by Prestige One": "/assets/images/v2/project-images-sm/parkway.webp",
  "Vista by Prestige One": "/assets/images/v2/project-images-sm/vista.webp",
  "Sanctuary by Prestige One": "/assets/images/v2/project-featured-images/sanctuary/sanctuary-aprtment.webp",
  "Seaside by Prestige One": "/assets/images/v2/project-images-sm/seaside-featured-image-1.webp",
};

function getParallaxAmplitude(section: HTMLElement): number {
  const scaled = Math.round(section.offsetHeight * PARALLAX_AMPLITUDE_RATIO);
  return Math.min(PARALLAX_AMPLITUDE_MAX, Math.max(PARALLAX_AMPLITUDE_MIN, scaled));
}

function getColumnCount(width: number): number {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  if (width < 1440) return 3;
  return 4;
}

// Server-rendered markup always starts from the useState(3) default (no
// window to measure), so on wide screens the client used to paint a visible
// 3-column frame before useEffect corrected it to 4 after paint — a CLS
// jump. useLayoutEffect runs synchronously before the browser paints, so
// the correction happens invisibly instead. It's skipped during SSR (no
// DOM), which is fine since there's nothing to measure there anyway.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Asymmetric, multi-column vertical parallax grid.
 *
 * Uses GSAP ScrollTrigger (scrubbed) for the per-column parallax, driven by the
 * global Lenis smooth-scroll layer (see `SmoothScroll`). Each column translates
 * at a different speed based on its modifier. Cleanup is handled via
 * `gsap.context().revert()`, and parallax is skipped on mobile / reduced motion.
 */
const ProjectsParallaxGridArea = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const columnRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [columnCount, setColumnCount] = useState(3);

  // "Seascape Villa", "Palm Villa", and "Luxe Villa" are rendered directly in
  // the slogan / "coming soon" tile slots below, so they're excluded from the
  // regular round-robin grid distribution.
  const gridCards = useMemo(
    () =>
      PARALLAX_CARDS.filter(
        (card) => card.title !== "Seascape Villa" && card.title !== "Palm Villa" && card.title !== "Luxe Villa",
      ),
    [],
  );
  const seascapeVillaCard = useMemo(
    () => PARALLAX_CARDS.find((card) => card.title === "Seascape Villa"),
    [],
  );
  const palmVillaCard = useMemo(
    () => PARALLAX_CARDS.find((card) => card.title === "Palm Villa"),
    [],
  );
  const luxeVillaCard = useMemo(
    () => PARALLAX_CARDS.find((card) => card.title === "Luxe Villa"),
    [],
  );

  const columns = useMemo(
    () => distributeColumns(gridCards, columnCount),
    [gridCards, columnCount],
  );

  // NOTE: looping/repeating each column's cards was tried here to give more
  // travel room, but it doesn't actually help: amplitude is computed from
  // section height (see getParallaxAmplitude), so a taller looped section
  // just requires a proportionally smaller ratio to stay within the same
  // safe travel distance — the two cancel out, and per-scroll-pixel speed
  // (what actually reads as "fast") is unchanged. The real lever is
  // PARALLAX_AMPLITUDE_RATIO and the modifiers below.
  const loopedColumns = columns;

  // Track responsive column count. useIsomorphicLayoutEffect (not
  // useEffect) so the corrected value lands before the browser's first
  // paint on the client, instead of visibly snapping from the
  // server-rendered default afterward.
  useIsomorphicLayoutEffect(() => {
    const update = () => setColumnCount(getColumnCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // GSAP ScrollTrigger parallax engine.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const modifiers = MODIFIERS_BY_COUNT[columnCount] ?? [1];
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // No parallax on a single column or when the user prefers reduced motion.
    if (prefersReduced || columnCount === 1) {
      columnRefs.current.forEach((el) => {
        if (el) gsap.set(el, { clearProps: "transform" });
      });
      return;
    }

    let amplitude = getParallaxAmplitude(section);

    const ctx = gsap.context(() => {
      columnRefs.current.forEach((el) => {
        if (el) gsap.set(el, { y: 0, force3D: true });
      });

      ScrollTrigger.create({
        trigger: section,
        // Cards stay put while the section is still scrolling into place;
        // the parallax only kicks in once the section's top has settled at
        // the top of the viewport (fully in frame, heading + first row
        // visible), then scrubs for the rest of the section's pass.
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
        markers: DEBUG_MARKERS,
        onRefresh: () => {
          amplitude = getParallaxAmplitude(section);
        },
        onUpdate: (self) => {
          columnRefs.current.forEach((el, index) => {
            if (!el) return;
            const modifier = modifiers[index] ?? 1;
            const target = (1 - modifier) * amplitude;
            gsap.set(el, { y: self.progress * target, force3D: true });
          });
        },
      });
    }, section);

    // Recalculate after layout/images settle so start/end are measured correctly.
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, [columnCount]);

  // Which filler villa card(s) close out each column — see
  // FILLER_LAYOUT_BY_COUNT for why this layout differs per column count
  // (keeping columns close to equal natural height is what avoids the big
  // empty-gap bug; an unbuffered column with a big parallax deviation opens
  // a visible gap below itself even when heights are otherwise balanced).
  const fillerLayout = FILLER_LAYOUT_BY_COUNT[columnCount] ?? {};
  const fillerCardsByKey = {
    seascape: seascapeVillaCard,
    luxe: luxeVillaCard,
    palm: palmVillaCard,
  } as const;

  return (
    <section
      ref={sectionRef}
      className="po-ppg-section"
      aria-labelledby="po-ppg-heading"
    >
      <header className="po-ppg-heading">
        <p className="po-ppg-kicker">Our Portfolio</p>
        <h2 id="po-ppg-heading">A Landscape of Landmark Living</h2>
        <img
          src="/assets/images/v2/pages/slogan.png"
          alt="Prestige One Developments slogan"
          className="po-ppg-slogan"
        />
      </header>

      <div
        className="po-ppg-grid"
        style={{ "--po-ppg-cols": columnCount } as React.CSSProperties}
      >
        {loopedColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            ref={(el) => {
              columnRefs.current[columnIndex] = el;
            }}
            className="po-ppg-column"
            style={
              {
                "--po-ppg-offset": `${COLUMN_OFFSETS_REM[columnIndex] ?? 0}rem`,
              } as React.CSSProperties
            }
          >
            {column.map((card, cardIndex) => (
              <Link
                key={`${card.link}-${cardIndex}`}
                href={card.link}
                className="po-ppg-card"
              >
                <Image
                  src={THUMBNAIL_OVERRIDES[card.title] ?? card.thumbnail}
                  alt={card.title}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="po-ppg-card-img"
                  priority={columnIndex < 2 && cardIndex === 0}
                />
                <span className="po-ppg-card-overlay" aria-hidden="true" />
                <span className="po-ppg-card-body">
                  <span className="po-ppg-card-title">{card.title}</span>
                  <span className="po-ppg-card-loc">{card.location}</span>
                </span>
              </Link>
            ))}
            {/* Filler villa card(s) closing out this column — see
                fillerLayout above for why the assignment differs per
                column count. */}
            {(fillerLayout[columnIndex] ?? []).map((key) => {
              const fillerCard = fillerCardsByKey[key];
              if (!fillerCard) return null;
              return (
                <Link key={fillerCard.link} href={fillerCard.link} className="po-ppg-card">
                  <Image
                    src={THUMBNAIL_OVERRIDES[fillerCard.title] ?? fillerCard.thumbnail}
                    alt={fillerCard.title}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="po-ppg-card-img"
                  />
                  <span className="po-ppg-card-overlay" aria-hidden="true" />
                  <span className="po-ppg-card-body">
                    <span className="po-ppg-card-title">{fillerCard.title}</span>
                    <span className="po-ppg-card-loc">{fillerCard.location}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsParallaxGridArea;
