import gsap from 'gsap';

export function workChooseAnimation() {
  const items = gsap.utils.toArray<HTMLElement>('.design-work-wrapper');

  if (items.length) {
    const pw = gsap.matchMedia();

    pw.add("(min-width: 1200px)", () => {
      items.forEach(item => {
        const item1 = item.querySelector('.design-work-item-1');
        const item2 = item.querySelector('.design-work-item-2');

        // Initial setup
        if (item1) {
          gsap.set(item1, {
            x: 0, rotate: 0,
          });
        }
        if (item2) {
          gsap.set(item2, {
            x: 0, rotate: 0,
          });
        }

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'bottom center',
            scrub: 1,
            markers: false
          }
        });

        // Animation
        if (item1) {
          tl.to(item1, {
            x: -400, rotate: -40,
          }, 0);
        }

        if (item2) {
          tl.to(item2, {
            x: 400, rotate: 40,
          }, 0);
        }
      });
    });

    return () => pw.revert();
  }
}