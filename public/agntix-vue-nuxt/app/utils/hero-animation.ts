import gsap from "gsap";

export function heroAnimation() {
  const tl = gsap.timeline();
  const hr = gsap.matchMedia();
  hr.add("(min-width: 768px)", () => {
    const panels = document.querySelectorAll('.tp-hero-2-area')
    panels.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: '.tp-hero-2-wrapper',
          pin: '.tp-hero-2-area',
          scrub: 1,
          start: 'top 0',
          end: "bottom 0%",
          endTrigger: '.tp-hero-2-wrapper',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  });
}