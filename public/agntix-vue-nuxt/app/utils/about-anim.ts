import gsap from "gsap";

export function PPAboutAnimation() {
  const tl = gsap.timeline();
  const p = gsap.matchMedia();
  p.add("(min-width: 992px)", () => {
    const panels = document.querySelectorAll('.pp-top-wrap');
    panels.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: '.pp-top-wrap',
          pin: '.pp-about-me-area',
          scrub: 1,
          start: 'top 0',
          end: "bottom 0%",
          endTrigger: '.pp-top-wrap',
          pinSpacing: false,
          markers: false,
        },
      });
    });
  });
}