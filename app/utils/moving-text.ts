import gsap from "gsap";

export function movingText() {
  if (document.querySelectorAll<HTMLElement>('.moving-text').length > 0) {
    gsap.utils.toArray<HTMLElement>('.moving-text').forEach((section, index) => {
      const w = section.querySelector<HTMLElement>('.wrapper-text');
      if (!w) return;

      const [x, xEnd] = (index % 2) ?
        [section.offsetWidth - w.scrollWidth, 0] :
        [0, section.offsetWidth - w.scrollWidth];

      gsap.fromTo(w, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.1,
        }
      });
    });
  }
}