export async function useScrollSmooth(isScrollSmooth: boolean = true): Promise<void> {
  const { gsap } = await import("gsap");
  const { ScrollToPlugin, ScrollSmoother } = await import("gsap/all");

  if (!import.meta.client) return;

  gsap.registerPlugin(ScrollSmoother, ScrollToPlugin);

  const smoothWrapper = document.getElementById("smooth-wrapper");
  const smoothContent = document.getElementById("smooth-content");

  if (isScrollSmooth && smoothWrapper && smoothContent) {
    gsap.config({
      nullTargetWarn: false,
    });

    ScrollSmoother.create({
      wrapper: smoothWrapper,
      content: smoothContent,
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
  }
}