import { gsap } from "gsap";


export function panelAnimation() {
  const pp = gsap.matchMedia();

  pp.add("(min-width: 1200px)", () => {
    const panelWrap = document.querySelector('.tp-funfact-panel-wrap');

    if (panelWrap) {
      const sections = gsap.utils.toArray(".tp-funfact-panel") as HTMLElement[];

      if (sections.length > 0) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            start: "top 70px",
            trigger: panelWrap,
            pin: true,
            scrub: 1,
            end: () => `+=${panelWrap.clientWidth}`
          }
        });
      }
    }
  });
}

export function panelPin(topOffset = 80) {
  const pr = gsap.matchMedia();

  pr.add("(min-width: 1199px)", () => {
    const panels = gsap.utils.toArray<HTMLElement>('.tp-panel-pin');
    const panelPinArea = document.querySelector('.tp-panel-pin-area');

    if (!panelPinArea) return;

    panels.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: `top ${topOffset}px`,
          end: "bottom 99%",
          endTrigger: panelPinArea,
          pinSpacing: false,
          markers: false,
        },
      });
    });
  });
}

export function stackPanelPin() {
  const st = gsap.matchMedia();
	st.add("(min-width: 1199px)", () => {
		const tl = gsap.timeline();
		const panels = document.querySelectorAll('.stack-panel-pin')
		panels.forEach((section) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 0%',
					end: "bottom 100%",
					endTrigger: '.stack-panel-pin-area',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});
}

