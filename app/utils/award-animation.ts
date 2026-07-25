import gsap from "gsap";

export function designAwardAnimation() {
  const aw = gsap.matchMedia();
  aw.add("(min-width: 991px)", () => {
    const awardItems = gsap.utils.toArray<HTMLElement>('.design-award-item');

    awardItems.forEach((item: HTMLElement) => {
      gsap.set(item, { width: '70%' });

      const onMouseEnter = () => {
        gsap.to(item, {
          width: '100%',
          duration: 2,
          ease: 'expo.out'
        });
      };

      const onMouseLeave = () => {
        gsap.to(item, {
          width: '70%',
          duration: 2,
          ease: 'expo.out'
        });
      };

      item.addEventListener('mouseenter', onMouseEnter);
      item.addEventListener('mouseleave', onMouseLeave);

      // Cleanup event listeners
      return () => {
        item.removeEventListener('mouseenter', onMouseEnter);
        item.removeEventListener('mouseleave', onMouseLeave);
      };
    });
  });
}