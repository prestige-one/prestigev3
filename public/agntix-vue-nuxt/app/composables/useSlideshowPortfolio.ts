import type { Ref } from 'vue';

type SliderDirection = "next" | "prev";

interface UseSlideshowPortfolioReturn {
  sliderRef: Ref<HTMLDivElement | null>;
  sliderBGRef: Ref<HTMLDivElement | null>;
  sliderFGRef: Ref<HTMLDivElement | null>;
  titlesRef: Ref<(HTMLDivElement | null)[]>;
  nextBtnRef: Ref<HTMLButtonElement | null>;
  prevBtnRef: Ref<HTMLButtonElement | null>;
}

export function useSlideshowPortfolio(): UseSlideshowPortfolioReturn {
  const sliderRef = ref<HTMLDivElement | null>(null);
  const sliderBGRef = ref<HTMLDivElement | null>(null);
  const sliderFGRef = ref<HTMLDivElement | null>(null);
  const titlesRef = ref<(HTMLDivElement | null)[]>([]);
  const nextBtnRef = ref<HTMLButtonElement | null>(null);
  const prevBtnRef = ref<HTMLButtonElement | null>(null);

  onMounted(async() => {
    if (!sliderRef.value) return;
    const { gsap } = await import('gsap');
    const { Observer } = await import('gsap/all');

    gsap.registerPlugin(Observer);

    class Slider {
      private _current = 0;
      isAnimating = false;
      element: HTMLElement;
      reverseDirection: boolean;
      items: HTMLElement[];
      itemsInner: (HTMLElement | null)[];
      itemsTotal: number;

      constructor(element: HTMLElement, reverseDirection = false) {
        this.element = element;
        this.reverseDirection = reverseDirection;
        this.items = [...element.querySelectorAll<HTMLElement>(".tp-portfolio-slider__item")];
        this.itemsInner = this.items.map(item =>
          item.querySelector<HTMLElement>(".tp-portfolio-slider__item-inner")
        );
        this.items[this.current]?.classList.add("current");
        this.itemsTotal = this.items.length;
        gsap.set([...this.items, ...this.itemsInner.filter(Boolean)], { "will-change": "transform" });
      }

      get current(): number {
        return this._current;
      }

      set current(value: number) {
        this._current = value;
      }

      next(): void {
        this.navigate(1);
      }

      prev(): void {
        this.navigate(-1);
      }

      navigate(direction: number): void {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const previous = this.current;
        this.current =
          direction === 1
            ? this.current < this.itemsTotal - 1
              ? this.current + 1
              : 0
            : this.current > 0
            ? this.current - 1
            : this.itemsTotal - 1;

        const currentItem = this.items[previous];
        const currentInner = this.itemsInner[previous];
        const upcomingItem = this.items[this.current];
        const upcomingInner = this.itemsInner[this.current];

        if (!currentItem || !upcomingItem || !currentInner || !upcomingInner) return;

        gsap
          .timeline({
            defaults: { duration: 1.1, ease: "power3.inOut" },
            onComplete: () => {
              this.items[previous]?.classList.remove("current");
              this.items[this.current]?.classList.add("current");
              this.isAnimating = false;
            },
          })
          .to(currentItem, {
            xPercent: this.reverseDirection ? direction * 100 : -direction * 100,
            onComplete: () => {
              gsap.set(currentItem, { opacity: 0 });
            },
          })
          .to(
            currentInner,
            {
              xPercent: this.reverseDirection ? -direction * 30 : direction * 30,
              startAt: { rotation: 0 },
              rotation: -direction * 20,
              scaleX: 2.8,
            },
            0
          )
          .to(
            upcomingItem,
            {
              startAt: {
                opacity: 1,
                xPercent: this.reverseDirection ? -direction * 80 : direction * 80,
              },
              xPercent: 0,
            },
            0
          )
          .to(
            upcomingInner,
            {
              startAt: {
                xPercent: this.reverseDirection ? direction * 30 : -direction * 30,
                scaleX: 2.8,
                rotation: direction * 20,
              },
              xPercent: 0,
              scaleX: 1,
              rotation: 0,
            },
            0
          );
      }
    }

    if (!sliderBGRef.value || !sliderFGRef.value) return;
    const sliderBG = new Slider(sliderBGRef.value);
    const sliderFG = new Slider(sliderFGRef.value, true);

    const titles = titlesRef.value.filter(Boolean) as HTMLDivElement[];
    if (titles.length === 0) return;

    titles[0]?.classList.add("type__item--current");

    // Text splitting
    titles.forEach((title) => {
      const h4 = title.querySelector("h4");
      if (!h4) return;

      const link = h4.querySelector("a");
      if (!link) return;

      const text = link.textContent || "";
      link.innerHTML = "";

      const words = text.split(" ");
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word";
        wordSpan.setAttribute("data-word", word);
        wordSpan.style.setProperty("--word-index", wordIndex.toString());

        const chars = word.split("");
        chars.forEach((char, charIndex) => {
          const charWrap = document.createElement("span");
          charWrap.className = "char-wrap";

          const charSpan = document.createElement("span");
          charSpan.className = "char";
          charSpan.setAttribute("data-char", char);
          charSpan.style.setProperty("--char-index", charIndex.toString());
          charSpan.textContent = char;

          charWrap.appendChild(charSpan);
          wordSpan.appendChild(charWrap);
        });

        link.appendChild(wordSpan);

        if (wordIndex < words.length - 1) {
          const space = document.createTextNode(" ");
          link.appendChild(space);
        }
      });

      title.style.setProperty("--word-total", words.length.toString());
      title.style.setProperty("--char-total", text.replace(/\s/g, "").length.toString());
      title.classList.add("words", "chars", "splitting");
      title.setAttribute("data-splitting", "");
    });

    gsap.set(titles, { "will-change": "transform" });

    // Title toggle animation
    const toggleTitle = (action: SliderDirection): void => {
      if (sliderBG.isAnimating) return;

      const current = sliderBG.current;
      const upcoming =
        action === "next"
          ? current < sliderBG.itemsTotal - 1
            ? current + 1
            : 0
          : current > 0
          ? current - 1
          : sliderBG.itemsTotal - 1;

      const titleCurrent = titles[current];
      const titleUpcoming = titles[upcoming];

      if (!titleCurrent || !titleUpcoming) return;

      const duration = 1.1;
      const reverse = action === "next" ? -1 : 1;

      gsap
        .timeline({
          defaults: { duration, ease: "power4.inOut" },
          onStart: () => {
            titleUpcoming.classList.add("type__item--current");
          },
          onComplete: () => {
            titleCurrent.classList.remove("type__item--current");
          },
        })
        .to(titleCurrent, {
          xPercent: reverse * 40,
          opacity: 0,
        })
        .to(
          titleCurrent.querySelectorAll(".char"),
          {
            xPercent: reverse * 103,
          },
          0
        )
        .addLabel("in", duration * 0.15)
        .fromTo(
          titleUpcoming,
          {
            xPercent: reverse * -40,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
          },
          "in"
        )
        .fromTo(
          titleUpcoming.querySelectorAll(".char"),
          {
            xPercent: reverse * -103,
          },
          {
            xPercent: 0,
          },
          "in"
        );
    };

    // Navigation handler
    const navigate = (action: SliderDirection): void => {
      toggleTitle(action);
      sliderBG[action]();
      sliderFG[action]();
    };

    const handleNext = () => navigate("next");
    const handlePrev = () => navigate("prev");

    nextBtnRef.value?.addEventListener("click", handleNext);
    prevBtnRef.value?.addEventListener("click", handlePrev);

    // Wheel/touch observer
    // let isScrolling = false;
    Observer.create({
      target: sliderRef.value, // 👈 use the slider container instead of window
      type: "wheel,touch,pointer",
      tolerance: 20,
      preventDefault: true,
      wheelSpeed: -1,

      onUp: () => handleNext(),
      onDown: () => handlePrev(),

      // 👇 NEW: handle horizontal drag/swipe
      onLeft: () => handleNext(),
      onRight: () => handlePrev(),
    });
  });

  return {
    sliderRef,
    sliderBGRef,
    sliderFGRef,
    titlesRef,
    nextBtnRef,
    prevBtnRef,
  };
}
