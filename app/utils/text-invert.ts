/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export const textInvert = () => {
  const elements = document.querySelectorAll('.tp_text_invert');

  if (elements.length > 0) {
    const split = new SplitText(".tp_text_invert", { type: "lines" });

    const animations = split.lines.map(target => {
      return gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: 'top 85%',
          end: "bottom center"
        }
      });
    });
    return () => {
      animations.forEach(anim => anim.kill());
      split.revert();
    };
  }
}

export function textInvertTwo(cls: string) {
  const elements = document.querySelectorAll(`.${cls}`);
  if (!elements.length) return;

  const split = new SplitText(elements, { type: "lines" });

  (split.lines as Element[]).forEach((target) => {
    if (!(target instanceof HTMLElement)) return;

    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: 'top 85%',
        end: "bottom center"
      }
    });
  });
}

export function codeTextAnimation () {
  function randChar() {
		const chars = "abcdefghijklmnopqrstuvwxyz";
		return chars[Math.floor(Math.random() * chars.length)];
	}
  document.querySelectorAll('.codetext').forEach((t: any) => {
		const arr1 = t.innerHTML.split('');
		const arr2 = arr1.map(() => randChar()); 
	  
		t.onpointerover = () => {
		  const tl = gsap.timeline();
		  let step = 0;
	  
		  tl.fromTo(
			t,
			{ innerHTML: arr2.join('') },
			{
			  duration: arr1.length / 20, 
			  ease: 'power4.in',
			  delay: 0.1,
			  onUpdate: () => {
				const progress = Math.floor(tl.progress() * arr1.length);
				if (step !== progress) { 

					step = progress;
					arr1.forEach((_:any, i:any) => (arr2[i] = randChar()));
		
					let start = arr1.slice(0, progress).join('');
					let end = arr2.slice(progress).join('');
		
					if (t.classList.contains('fromRight')) {
						start = arr2.slice(0, progress).join('');
						end = arr1.slice(progress).join('');
					}

					t.innerHTML = start + end; 
				}
			  },
			}
		  );
		};
	});
}