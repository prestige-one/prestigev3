"use client";

import { useEffect, useId, useRef } from "react";
import { Cormorant_Garamond } from "next/font/google";
import "maplibre-gl/dist/maplibre-gl.css";
import "@/components/maps/dubai-interactive-map.css";
import { initDubaiMap, type DubaiMapRefs } from "./dubaiInteractiveMapEngine";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--po-dmap-serif-font",
  display: "swap",
});

function BrochureIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
      <path
        d="M12 3v11m0 0l-3.5-3.5M12 14l3.5-3.5M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Cinematic MapLibre-powered Dubai developments map (satellite imagery,
 * crystal-blue sea mask, drifting clouds, per-project fly-to camera + detail
 * card). Self-contained and safe to mount more than once on a page — every
 * class is `po-dmap-*` scoped and the one truly-global id (the SVG cloud
 * turbulence filter) is namespaced per instance via `useId()`.
 */
export default function DubaiInteractiveMap() {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, "");

  const mapDivRef = useRef<HTMLDivElement | null>(null);
  const cloudsRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const loadFillRef = useRef<HTMLDivElement | null>(null);
  const loadPctRef = useRef<HTMLDivElement | null>(null);
  const countNumRef = useRef<HTMLDivElement | null>(null);
  const countLblRef = useRef<HTMLDivElement | null>(null);
  const filtersRef = useRef<HTMLDivElement | null>(null);
  const legendRef = useRef<HTMLDivElement | null>(null);
  const compassRef = useRef<HTMLButtonElement | null>(null);
  const needleRef = useRef<SVGGElement | null>(null);
  const bearingReadRef = useRef<HTMLDivElement | null>(null);
  const zoomValRef = useRef<HTMLDivElement | null>(null);
  const zoomInRef = useRef<HTMLButtonElement | null>(null);
  const zoomOutRef = useRef<HTMLButtonElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const cardMediaRef = useRef<HTMLDivElement | null>(null);
  const cardBadgeRef = useRef<HTMLSpanElement | null>(null);
  const cardCloseRef = useRef<HTMLButtonElement | null>(null);
  const cardTitleRef = useRef<HTMLHeadingElement | null>(null);
  const cardFloorsRef = useRef<HTMLSpanElement | null>(null);
  const cardAreaRef = useRef<HTMLSpanElement | null>(null);
  const cardDescRef = useRef<HTMLParagraphElement | null>(null);
  const cardExploreRef = useRef<HTMLAnchorElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    import("maplibre-gl").then((mod) => {
      if (cancelled) return;
      const gl = mod.default ?? mod;

      const refs: DubaiMapRefs | null =
        mapDivRef.current &&
        cloudsRef.current &&
        loaderRef.current &&
        loadFillRef.current &&
        loadPctRef.current &&
        countNumRef.current &&
        countLblRef.current &&
        filtersRef.current &&
        legendRef.current &&
        compassRef.current &&
        needleRef.current &&
        bearingReadRef.current &&
        zoomValRef.current &&
        zoomInRef.current &&
        zoomOutRef.current &&
        cardRef.current &&
        cardMediaRef.current &&
        cardBadgeRef.current &&
        cardCloseRef.current &&
        cardTitleRef.current &&
        cardFloorsRef.current &&
        cardAreaRef.current &&
        cardDescRef.current &&
        cardExploreRef.current &&
        prevBtnRef.current &&
        nextBtnRef.current
          ? {
              mapDiv: mapDivRef.current,
              cloudsHost: cloudsRef.current,
              loader: loaderRef.current,
              loadFill: loadFillRef.current,
              loadPct: loadPctRef.current,
              countNum: countNumRef.current,
              countLbl: countLblRef.current,
              filters: filtersRef.current,
              legend: legendRef.current,
              compass: compassRef.current,
              needle: needleRef.current,
              bearingRead: bearingReadRef.current,
              zoomVal: zoomValRef.current,
              zoomIn: zoomInRef.current,
              zoomOut: zoomOutRef.current,
              card: cardRef.current,
              cardMedia: cardMediaRef.current,
              cardBadge: cardBadgeRef.current,
              cardClose: cardCloseRef.current,
              cardTitle: cardTitleRef.current,
              cardFloors: cardFloorsRef.current,
              cardArea: cardAreaRef.current,
              cardDesc: cardDescRef.current,
              cardExplore: cardExploreRef.current,
              prevBtn: prevBtnRef.current,
              nextBtn: nextBtnRef.current,
            }
          : null;

      if (!refs || !rootRef.current) return;
      cleanup = initDubaiMap(rootRef.current, refs, uid, gl);
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [uid]);

  return (
    <div ref={rootRef} className={`po-dmap-root ${cormorant.variable}`}>
      <div className="po-dmap-app">
        <div ref={mapDivRef} className="po-dmap-map" />
        <div className="po-dmap-vignette" aria-hidden="true" />
        <div ref={cloudsRef} className="po-dmap-clouds" aria-hidden="true" />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <filter id={`${uid}-cloud-filter`} x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.011 0.016"
              numOctaves={5}
              seed={7}
              stitchTiles="stitch"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={120}
              xChannelSelector="R"
              yChannelSelector="G"
              result="disp"
            />
            <feGaussianBlur in="disp" stdDeviation={2.2} />
          </filter>
        </svg>

        <header className="po-dmap-topbar">
          <div className="po-dmap-counter">
            <div className="po-dmap-counter-num" ref={countNumRef}>
              0
            </div>
            <div className="po-dmap-counter-lbl" ref={countLblRef}>
              Developments
            </div>
          </div>
        </header>

        <nav className="po-dmap-filters" ref={filtersRef} aria-label="Filter by area" />

        <div className="po-dmap-legend" ref={legendRef} aria-hidden="true" />

        <div className="po-dmap-instruments">
          <button type="button" className="po-dmap-compass" ref={compassRef} title="Reset bearing to north">
            <svg width="74" height="74" viewBox="0 0 74 74" aria-hidden="true">
              <circle cx="37" cy="37" r="30" fill="none" stroke="rgba(255,255,255,0.10)" />
              <g className="po-dmap-needle" ref={needleRef}>
                <path d="M37 14 L42 39 L37 34 L32 39 Z" fill="#f6f2ea" />
                <path d="M37 60 L42 35 L37 40 L32 35 Z" fill="rgba(255,255,255,0.35)" />
              </g>
              <text x="37" y="12" textAnchor="middle" fill="#9aa3b2" fontSize={8}>
                N
              </text>
            </svg>
            <div className="po-dmap-readout" ref={bearingReadRef}>
              N 000&deg;
            </div>
          </button>
          <div className="po-dmap-zoombox">
            <button type="button" className="po-dmap-zbtn" ref={zoomOutRef} aria-label="Zoom out">
              &minus;
            </button>
            <div className="po-dmap-zval" ref={zoomValRef}>
              1.0&times;
            </div>
            <button type="button" className="po-dmap-zbtn" ref={zoomInRef} aria-label="Zoom in">
              +
            </button>
          </div>
        </div>

        <aside className="po-dmap-card" ref={cardRef} aria-hidden="true">
          <div className="po-dmap-card-media" ref={cardMediaRef}>
            <span className="po-dmap-card-badge" ref={cardBadgeRef}>
              Area
            </span>
            <button type="button" className="po-dmap-card-close" ref={cardCloseRef} aria-label="Close">
              &times;
            </button>
          </div>
          <div className="po-dmap-card-body">
            <h2 className="po-dmap-card-title" ref={cardTitleRef}>
              Project
            </h2>
            <div className="po-dmap-card-meta">
              <div className="po-dmap-m">
                <span className="po-dmap-mv" ref={cardFloorsRef}>
                  0
                </span>
                <span className="po-dmap-ml">Floors</span>
              </div>
              <div className="po-dmap-m po-dmap-mwide">
                <span className="po-dmap-mv po-dmap-mv-text" ref={cardAreaRef}>
                  Area
                </span>
                <span className="po-dmap-ml">District</span>
              </div>
            </div>
            <p className="po-dmap-card-desc" ref={cardDescRef} />
          </div>
          <div className="po-dmap-card-foot">
            <a className="po-dmap-explore" ref={cardExploreRef} href="#" target="_self">
              Explore More
            </a>
            <div className="po-dmap-card-nav">
              <a
                className="po-dmap-navbtn po-dmap-brochure-btn"
                href="/project-documents"
                target="_blank"
                rel="noreferrer"
                aria-label="Download project brochure"
                title="Download project brochure"
              >
                <BrochureIcon />
              </a>
              <button type="button" className="po-dmap-navbtn" ref={prevBtnRef} aria-label="Previous project">
                &#8249;
              </button>
              <button type="button" className="po-dmap-navbtn" ref={nextBtnRef} aria-label="Next project">
                &#8250;
              </button>
            </div>
          </div>
        </aside>

        <div className="po-dmap-loader" ref={loaderRef}>
          <div style={{ textAlign: "center" }}>
            <div className="po-dmap-brand-mark">Prestige One</div>
            <div className="po-dmap-brand-sub">Dubai Developments</div>
          </div>
          <div className="po-dmap-load-track">
            <div className="po-dmap-load-fill" ref={loadFillRef} />
          </div>
          <div className="po-dmap-load-pct" ref={loadPctRef}>
            0%
          </div>
        </div>
      </div>
    </div>
  );
}
