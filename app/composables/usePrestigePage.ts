// Shared page bootstrap for every Prestige One page.
//
// Wraps the GSAP + ScrollSmooth + reveal/zoom/fade init that the homepage
// used inline, so each page can just call `usePrestigePage()` in <script setup>.
// All the animation helpers bail out safely when their target elements are
// absent, so this is safe to run on pages that don't have (e.g.) a hero.

export interface PrestigePageOptions {
  /** run the homepage hero scroll timeline (default: true, no-op if no hero) */
  hero?: boolean;
  /** header offset passed to the pinned portfolio/scale-stack animation */
  portfolioOffset?: number;
}

export function usePrestigePage(options: PrestigePageOptions = {}) {
  const { hero = true, portfolioOffset = 80 } = options;

  onMounted(async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger, ScrollToPlugin } = await import("gsap/all");
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // smooth scroll
    await useScrollSmooth();

    // distortion / webgl hover images
    distortionImg();

    const imagesLoaded = (await import("imagesloaded")).default;
    const smoothWrapper = document.getElementById("smooth-wrapper");
    if (!smoothWrapper) {
      // no smooth wrapper on this page - still run reveal animations
      runAnimations();
      return;
    }

    const imgLoad = imagesLoaded(smoothWrapper, { background: true });
    imgLoad.on("always", runAnimations);

    function runAnimations() {
      if (hero) prestigeHeroAnimation();
      prestigeDevelopmentsReveal();
      fadeAnimation();
      revealAnimation();
      zoomAnimation();
      portfolioAnimation(portfolioOffset);
      // recalculate trigger positions once everything is laid out
      ScrollTrigger.refresh();
    }
  });
}
