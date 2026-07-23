import gsap from "gsap";

export function careerAnimation() {
  const cr = gsap.matchMedia();
  cr.add("(min-width: 1200px)", () => {
    const tl_ser = gsap.timeline();
    const panels = document.querySelectorAll('.tp-career-details-ptb')
    panels.forEach((section) => {
      tl_ser.to(section, {
        scrollTrigger: {
          trigger: '.tp-career-details-wrapper',
          pin: '.tp-career-details-sidebar',
          scrub: 1,
          start: 'top 80px',
          end: "bottom 100%",
          endTrigger: '.tp-career-details-ptb',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  });
}