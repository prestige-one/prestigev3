/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export function revealAnimation() {
  document.querySelectorAll(".tp_reveal_anim").forEach((areveal:any) => {
		const duration = areveal.getAttribute("data-duration") || 1.5;
		const onScroll = areveal.getAttribute("data-on-scroll") || 1;
		const stagger = areveal.getAttribute("data-stagger") || 0.02;
		const delay = areveal.getAttribute("data-delay") || 0.05;
		areveal.split = new SplitText(areveal, {
			type: "lines,words,chars",
			linesClass: "tp-reveal-line"
		});
		const animConfig: any = {
			duration,
			delay,
			ease: "circ.out",
			y: 80,
			stagger,
			opacity: 0,
		};
		if (onScroll == 1) {
			animConfig.scrollTrigger = {
				trigger: areveal,
				start: 'top 85%',
			};   
		}
		areveal.anim = gsap.from(areveal.split.chars, animConfig);
	});
}