import gsap from "gsap";

export function ctaBgCircleAnimation(): void {
  const ctaAreas = document.querySelectorAll<HTMLElement>('.st-cta-area');
  if (ctaAreas.length === 0) return;

  gsap.set(".st-cta-bg-circle", { scaleX: 1 });

  const mm = gsap.matchMedia();

  mm.add("(min-width:1400px)", () => {
    const triggerEl = document.querySelector<HTMLElement>('.st-cta-area');

    const tween = gsap.to(".st-cta-bg-circle", {
      scrollTrigger: {
        trigger: triggerEl ?? ".st-cta-area",
        scrub: 0.2,
        start: "top 70%",
        end: "bottom 100%",
      },
      duration: 2,
      scaleX: 1,
      borderRadius: "1100px 1100px 0 0",
      transformOrigin: "top center",
      ease: "none",
    });

    return () => {
      tween.kill();
    };
  });
}
