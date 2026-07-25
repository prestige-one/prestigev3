import { gsap } from "gsap";

export const buttonBounceAnimation = () => {
  gsap.set(".tp-bounce", { y: -80, opacity: 0 });
  const mybtn = gsap.utils.toArray(".tp-bounce") as HTMLElement[];

  mybtn.forEach((btn) => {
    const tp_delay_value = btn.getAttribute("data-delay") || 1;
    const triggerElement = btn.closest(".tp-bounce-trigger");

    gsap.to(btn, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        markers: false,
      },
      duration: 1.5,
      delay: tp_delay_value,
      ease: "bounce.out",
      y: 0,
      opacity: 1,
    });
  });
};