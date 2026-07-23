

/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// --- Helpers ---
const toArray = <T extends Element>(selectorOrList: string | NodeListOf<Element> | Element[] | null): T[] => {
  if (!selectorOrList) return [];
  if (typeof selectorOrList === "string") return Array.from(document.querySelectorAll<T>(selectorOrList));
  if (NodeList.prototype.isPrototypeOf(selectorOrList)) return Array.from(selectorOrList as NodeListOf<T>);
  return selectorOrList as T[];
};

const getNumberAttr = (el: Element, attr: string, fallback: number) => {
  const v = el.getAttribute(attr);
  const n = v !== null ? parseFloat(v) : NaN;
  return Number.isFinite(n) ? n : fallback;
};

const getStringAttr = (el: Element, attr: string, fallback = "") => {
  return el.getAttribute(attr) ?? fallback;
};

// --------------------
// fadeAnimation
// --------------------
export function fadeAnimation(): void {
  const items = toArray<HTMLElement>(".tp_fade_anim");
  if (!items.length) return;

  items.forEach((item) => {
    const tp_fade_offset = item.dataset.fadeOffset ? parseInt(item.dataset.fadeOffset) : 40;
    const tp_duration_value = item.dataset.duration ? parseFloat(item.dataset.duration) : 0.75;
    const tp_fade_direction = item.dataset.fadeFrom || "bottom";
    const tp_onscroll_value = item.dataset.onScroll !== "0";
    const tp_delay_value = item.dataset.delay ? parseFloat(item.dataset.delay) : 0.15;
    const tp_ease_value = item.dataset.ease || "power2.out";

    const tp_anim_setting: gsap.TweenVars = {
      opacity: 0,
      ease: tp_ease_value as any,
      duration: tp_duration_value,
      delay: tp_delay_value,
      x: tp_fade_direction === "left" ? -tp_fade_offset : tp_fade_direction === "right" ? tp_fade_offset : 0,
      y: tp_fade_direction === "top" ? -tp_fade_offset : tp_fade_direction === "bottom" ? tp_fade_offset : 0,
    };

    if (tp_onscroll_value) {
      tp_anim_setting.scrollTrigger = {
        trigger: item,
        start: "top 85%",
      } as any;
    }

    gsap.from(item, tp_anim_setting);
  });
}

// --------------------
// bounceAnimation
// --------------------
export function bounceAnimation(): void {
  const bounceElements = toArray<HTMLElement>(".tp-btn-bounce");
  if (!bounceElements.length) return;

  // set initial state
  gsap.set(".tp-btn-bounce", { y: -100, opacity: 0 });

  bounceElements.forEach((btn) => {
    const triggerElement = btn.closest(".tp-btn-trigger");
    const delayValue = getNumberAttr(btn, "data-delay", 1);

    if (!triggerElement) return;

    gsap.to(btn, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        markers: false,
      },
      duration: 1.5,
      delay: delayValue,
      ease: "bounce.out",
      y: 0,
      opacity: 1,
    });
  });
}

// --------------------
// charAnimation
// --------------------
export function charAnimation(): void {
  const charElements = toArray<HTMLElement>(".tp-char-animation");
  if (!charElements.length) return;

  charElements.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    // SplitText returns an object we rely on
    const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" }) as unknown as {
      chars: HTMLElement[];
      words?: HTMLElement[];
      lines?: HTMLElement[];
      revert?: () => void;
    };

    gsap.set(splitTextLine, { perspective: 300 });
    // Ensure chars available (SplitText builds them at construction)
    tl.from(itemSplitted.chars, {
      duration: 1,
      delay: 0.5,
      x: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });

    // (optional) return cleanup if needed by caller — not returned here.
  });
}

// --------------------
// textBounceAnimation
// --------------------
export function textBounceAnimation(): void {
  const triggerElements = toArray(".tp-text-bounce-trigger");
  if (!triggerElements.length) return;

  // Set initial state
  gsap.set(".tp-text-bounce", { y: 100, opacity: 0 });

  const bounceElements = toArray<HTMLElement>(".tp-text-bounce");
  bounceElements.forEach((el) => {
    const triggerElement = el.closest(".tp-text-bounce-trigger");
    const delayValue = getNumberAttr(el, "data-delay", 0.15);

    if (!triggerElement) return;

    gsap.to(el, {
      scrollTrigger: {
        trigger: triggerElement,
        start: "top center",
        markers: false,
      },
      duration: 1,
      delay: delayValue,
      ease: "back.out(1.7)",
      y: 0,
      opacity: 1,
    });
  });
}

// --------------------
// textScaleAnimation
// --------------------
export function textScaleAnimation(): void {
  const headings = toArray<HTMLElement>(".text-scale-anim");
  if (!headings.length) return;

  headings.forEach((heading) => {
    const textNodes: Node[] = [];

    heading.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent ?? "";
        // split by spaces but preserve spaces between words
        const words = text.split(" ");
        words.forEach((word, index, arr) => {
          const wordSpan = document.createElement("span");
          wordSpan.classList.add("tp-word-span");

          word.split("").forEach((letter) => {
            const letterSpan = document.createElement("span");
            letterSpan.classList.add("tp-letter-span");
            letterSpan.textContent = letter;
            wordSpan.appendChild(letterSpan);
          });

          textNodes.push(wordSpan);
          if (index < arr.length - 1) {
            textNodes.push(document.createTextNode(" "));
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        textNodes.push(node.cloneNode(true));
      }
    });

    // replace content
    heading.innerHTML = "";
    textNodes.forEach((n) => heading.appendChild(n));

    const letters = toArray<HTMLElement>(heading.querySelectorAll(".tp-letter-span"));
    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          scaleY: 1.3,
          y: "10%",
          duration: 0.2,
          ease: "sine",
        });
      });
      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          scaleY: 1,
          y: "0%",
          duration: 0.2,
          ease: "sine",
        });
      });
    });
  });
}

// --------------------
// zoomAnimation
// --------------------
export function zoomAnimation(): void {
  const zoomElements = toArray<HTMLElement>(".anim-zoomin");
  zoomElements.forEach((element) => {
    const wrapper = document.createElement("div");
    wrapper.className = "anim-zoomin-wrap";
    wrapper.style.overflow = "hidden";

    element.parentNode?.insertBefore(wrapper, element);
    wrapper.appendChild(element);

    const zoomInTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top 100%",
        markers: false,
      },
    });

    zoomInTimeline.from(element, {
      duration: 2,
      autoAlpha: 0,
      scale: 1.2,
      ease: "power2.out",
      clearProps: "all",
    });
  });
}

// --------------------
// textRightScroll
// --------------------
export function textRightScroll(): void {
  gsap.matchMedia().add("(min-width: 991px)", () => {
    const boxes = toArray<HTMLElement>(".title-box");
    boxes.forEach((box) => {
      const rightElements = toArray<HTMLElement>(box.querySelectorAll(".tp-text-right-scroll"));
      if (!rightElements.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start: "top 100%",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      });

      tl.fromTo(
        rightElements,
        { xPercent: 50 },
        {
          xPercent: -20,
          ease: "power1.out",
        }
      );
    });
  });
}

// --------------------
// textPerspectiveAnimation
// --------------------
export function textPerspectiveAnimation(): void {
  const textElements = toArray<HTMLElement>(".tp-text-perspective");
  textElements.forEach((splitTextLine) => {
    const delay_value = getNumberAttr(splitTextLine, "data-delay", 0.5);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 85%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    // `.lines` should exist after SplitText construction
    tl.from(itemSplitted.lines as any, {
      duration: 1,
      delay: delay_value,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });

    // optional revert returned per element (not used in caller)
    // return () => { itemSplitted.revert(); };
  });
}

// --------------------
// splitTextAnimation
// --------------------
export function splitTextAnimation(): void {
  const st = toArray<HTMLElement>(".tp-split-text");
  if (!st.length) return;

  st.forEach((el) => {
    // Construct SplitText
    const split = new SplitText(el, {
      type: "lines,words,chars",
      linesClass: "tp-split-line",
    });

    gsap.set(el, { perspective: 400 });

    const animationProps: gsap.TweenVars = { opacity: 0 };

    if (el.classList.contains("tp-split-right")) (animationProps as any).x = "50";
    if (el.classList.contains("tp-split-left")) (animationProps as any).x = "-50";
    if (el.classList.contains("tp-split-up")) (animationProps as any).y = "80";
    if (el.classList.contains("tp-split-down")) (animationProps as any).y = "-80";

    gsap.set(split.chars, animationProps);

    gsap.to(split.chars, {
      scrollTrigger: { trigger: el, start: "top 90%" },
      x: "0",
      y: "0",
      rotateX: "0",
      scale: 1,
      opacity: 1,
      duration: 0.4,
      stagger: 0.02,
    });

    // Optionally store references on element for cleanup:
    (el as any)._splitInstance = split;
    // (el as any)._splitTween = the created tween if you want to keep it
  });
}

// --------------------
// textRevealAnimation
// --------------------
export function textRevealAnimation(): void {
  const elements = toArray<HTMLElement>(".tp-text-revel-anim");
  elements.forEach((element) => {
    const duration = getNumberAttr(element, "data-duration", 1);
    const onScroll = getNumberAttr(element, "data-on-scroll", 1);
    const stagger = getNumberAttr(element, "data-stagger", 0.02);
    const delay = getNumberAttr(element, "data-delay", 0.05);
    const ease = getStringAttr(element, "data-ease", "circ.out");

    const split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "tp-revel-line",
    });

    const animationProps: gsap.TweenVars = {
      duration,
      delay,
      ease: ease as any,
      y: 80,
      stagger,
      opacity: 0,
    };

    if (onScroll === 1) {
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
        ...animationProps,
      });
    } else {
      gsap.from(split.chars, animationProps);
    }

    // Optionally expose split for cleanup
    (element as any)._splitInstance = split;
  });
}
