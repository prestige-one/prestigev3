"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";
import { PROJECT_LOGOS } from "@/data/project-logos";

function ProjectLogoCard({ name, file, href, src }: (typeof PROJECT_LOGOS)[number]) {
  const image = (
    <img
      src={src ?? `/assets/images/v2/web-logos/v2/${file}`}
      alt={name}
      draggable={false}
    />
  );

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className="po-logo-card"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${name} project`}
        draggable={false}
      >
        {image}
      </a>
    );
  }

  return (
    <Link href={href} className="po-logo-card" aria-label={`View ${name} project`} draggable={false}>
      {image}
    </Link>
  );
}

// Single-set width in px the track auto-scrolls through per second — matches
// the previous CSS animation's ~60s-per-loop pace.
const AUTO_SCROLL_PX_PER_SEC = 40;
// Pointer movement beyond this (px) counts as a drag, not a click, so logo
// links still work for an actual tap/click.
const DRAG_CLICK_THRESHOLD_PX = 6;

const LogoSliderArea = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const pointerCapturedRef = useRef(false);
  const lastFrameTimeRef = useRef<number | null>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      // Track holds two copies of PROJECT_LOGOS back-to-back — one set's
      // width is exactly the distance to scroll before wrapping seamlessly.
      setWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const applyTransform = () => {
      const setWidth = setWidthRef.current;
      if (setWidth > 0) {
        // Wrap into (-setWidth, 0] so dragging or auto-scrolling in either
        // direction loops forever across the duplicated content.
        let normalized = offsetRef.current % setWidth;
        if (normalized > 0) normalized -= setWidth;
        offsetRef.current = normalized;
      }
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    };

    const tick = (time: number) => {
      if (!draggingRef.current) {
        const lastTime = lastFrameTimeRef.current ?? time;
        const deltaSeconds = Math.min((time - lastTime) / 1000, 0.1);
        offsetRef.current -= AUTO_SCROLL_PX_PER_SEC * deltaSeconds;
      }
      lastFrameTimeRef.current = time;
      applyTransform();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onPointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    draggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    dragDistanceRef.current = 0;
    pointerCapturedRef.current = false;
    lastFrameTimeRef.current = null;
    event.currentTarget.classList.add("is-dragging");
    // Pointer capture is deferred to the first real move (below) rather than
    // grabbed here — capturing on every pointerdown retargets the browser's
    // synthetic click event even for a plain tap, which silently broke the
    // logo links (Next's <Link> never saw the click to navigate on).
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    if (!pointerCapturedRef.current) {
      pointerCapturedRef.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    const delta = event.clientX - dragStartXRef.current;
    dragDistanceRef.current = Math.abs(delta);
    offsetRef.current = dragStartOffsetRef.current + delta;
  }, []);

  const endDrag = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    event.currentTarget.classList.remove("is-dragging");
    if (pointerCapturedRef.current && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    pointerCapturedRef.current = false;
  }, []);

  // Swallow the click that follows a drag so logo links don't navigate
  // when the user was just dragging the strip.
  const onClickCapture = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (dragDistanceRef.current > DRAG_CLICK_THRESHOLD_PX) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, []);

  return (
    <section className="po-logo-slider">
      <div className="container-fluid">
        <div className="po-logo-slider-viewport">
          <div
            className="po-logo-marquee-css po-logo-marquee-draggable"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={onClickCapture}
          >
            <div className="po-logo-marquee-track" ref={trackRef}>
              {[...PROJECT_LOGOS, ...PROJECT_LOGOS].map((logo, i) => (
                <div className="po-logo-track-item" key={`${logo.file}-${i}`}>
                  <ProjectLogoCard {...logo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSliderArea;
