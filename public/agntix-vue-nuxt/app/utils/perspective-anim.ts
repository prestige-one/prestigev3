import gsap from "gsap";

export function perspective() {
  const slider = document.querySelector(".tp-perspective-slider");
  if (!slider) return;

  // set perspective on matching elements
  gsap.set(
    ".tp-perspective-slider .tp-perspective-main .tp-perspective-inner",
    { perspective: 60 }
  );

  const images = Array.from(
    document.querySelectorAll(
      ".tp-perspective-slider .tp-perspective-main .tp-perspective-inner .tp-perspective-image"
    )
  );

  // keep references to tweens so we can clean them up if needed
  const createdTweens = images.map((el) => {
    return gsap.fromTo(
      el,
      {
        rotationX: 1.8,
        scaleX: 1,
        z: "0vh",
      },
      {
        rotationX: -0.5,
        scaleX: 1,
        z: "-2vh",
        scrollTrigger: {
          trigger: el,
          start: "top+=150px bottom",
          end: "bottom top",
          immediateRender: false,
          scrub: 0.1,
        },
      }
    );
  });

  return function cleanup() {
    createdTweens.forEach((t) => {
      if (t) {
        t.kill();
      }
    });
  };
}
