import gsap from "gsap";

export const videoAnimation = () => {
  const vd = gsap.matchMedia();

  vd.add("(min-width: 1199px)", () => {
    const videoArea = document.querySelector('.tp-video-area');
    if (!videoArea) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoArea,
        scrub: 1,
        pin: true,
        start: "top 40px",
        end: "+=100%",
      },
    });

    tl.to(".tp-video-thumb-wrap", {
      scale: 3.2,
      ease: "none",
    });

    return () => tl.kill();
  });
}