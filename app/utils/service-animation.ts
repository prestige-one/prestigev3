import gsap from "gsap";

export const serviceAnimation = () => {
  const sv = gsap.matchMedia();

  sv.add("(min-width: 1199px)", () => {
    const projectpanels = gsap.utils.toArray<HTMLElement>('.tp-service-panel');
    const baseOffset = 150;
    const offsetIncrement = 120;

    projectpanels.forEach((section, index) => {
      const topOffset = baseOffset + (index * offsetIncrement);

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: `top ${topOffset}px`,
          end: "bottom 120%",
          endTrigger: '.tp-service-pin',
          pinSpacing: false,
          markers: false,
        },
      });
    });
  });
};

export function innerServiceAnimation() {
  const sr = gsap.matchMedia();
  sr.add("(min-width: 992px)", () => {
    const tl_ser = gsap.timeline();
    const panels = document.querySelectorAll('.tp-inner-service-area')
    panels.forEach((section) => {
      tl_ser.to(section, {
        scrollTrigger: {
          trigger: '.tp-inner-service-area',
          pin: '.inner-service-1-left',
          scrub: 1,
          start: 'top 80px',
          end: "bottom 100%",
          endTrigger: '.tp-inner-service-area',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  });
}