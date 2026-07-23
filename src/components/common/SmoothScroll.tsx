"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

declare global {
  interface Window {
    __poLenis?: Lenis | null;
  }
}

/**
 * Global smooth-scroll layer. Drives Lenis from GSAP's ticker and keeps
 * ScrollTrigger in sync so scrub-based animations track the smoothed scroll
 * position. Disabled when the user prefers reduced motion.
 *
 * Exposes `window.__poLenis` so other sections (e.g. destinations pin) can
 * temporarily stop/start smooth scroll without fighting page wheel.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    window.__poLenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      if (window.__poLenis === lenis) window.__poLenis = null;
      lenis.destroy();
    };
  }, []);

  return null;
}
