export function initFauchonDestinationsSlider(root: HTMLElement) {
  const slides = Array.from(root.querySelectorAll<HTMLElement>(".fauchon-dls-slide"));
  const progressEl = root.querySelector<HTMLElement>(".fauchon-dls-progress");
  const prevBtn = root.querySelector<HTMLButtonElement>(".fauchon-dls-arrow-prev");
  const nextBtn = root.querySelector<HTMLButtonElement>(".fauchon-dls-arrow-next");
  const slidesEl = root.querySelector<HTMLElement>(".fauchon-dls-slides");

  if (!slides.length || !progressEl || !slidesEl) {
    return () => {};
  }

  const slidesWrap = slidesEl;
  const progress = progressEl;

  const autoplay = root.dataset.autoplay === "true";
  const speed = Math.max(1000, parseInt(root.dataset.speed || "5000", 10));
  const total = slides.length;
  let current = total > 2 ? 2 : 0;
  let timer: ReturnType<typeof setInterval> | null = null;
  let wheelLock = false;
  let isAnimating = false;
  let touchStartX = 0;
  let touchDeltaX = 0;
  let pointerDown = false;
  let dragStartX = 0;
  let dragDeltaX = 0;

  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  function slidesPerView() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 1023) return 2;
    return 3;
  }

  function spacing() {
    if (window.innerWidth <= 767) return 0;
    if (window.innerWidth <= 1023) return 24;
    return 30;
  }

  function getCenterX() {
    return slidesWrap.clientWidth / 2;
  }

  function render() {
    const view = slidesPerView();
    const gap = spacing();
    const centerX = getCenterX();

    slides.forEach((slide, i) => {
      slide.classList.remove("fauchon-dls-active", "fauchon-dls-visible");
      let pos: number | null = null;

      if (view === 1) {
        if (i === current) pos = 0;
      } else if (view === 2) {
        if (i === current) pos = 0;
        if (i === mod(current + 1, total)) pos = 1;
      } else {
        if (i === mod(current - 1, total)) pos = -1;
        if (i === current) pos = 0;
        if (i === mod(current + 1, total)) pos = 1;
      }

      if (pos === null) {
        slide.style.opacity = "0";
        slide.style.left = "-9999px";
        return;
      }

      const cardWidth = slide.offsetWidth || Math.min(360, window.innerWidth * 0.7);
      const x = centerX + pos * (cardWidth + gap);
      slide.style.left = `${x}px`;
      slide.style.opacity = "1";
      slide.classList.add("fauchon-dls-visible");
      if (i === current) slide.classList.add("fauchon-dls-active");
    });

    progress.style.width = `${100 / total}%`;
    progress.style.transform = `translateX(${current * 100}%)`;
  }

  function goTo(idx: number) {
    if (isAnimating) return;
    current = mod(idx, total);
    isAnimating = true;
    render();
    window.setTimeout(() => {
      isAnimating = false;
    }, 580);
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function startAutoplay() {
    if (!autoplay) return;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      next();
    }, speed);
  }

  function onWheel(event: WheelEvent) {
    const absY = Math.abs(event.deltaY);
    const absX = Math.abs(event.deltaX);
    if (absY < absX || absY < 9 || wheelLock) return;
    event.preventDefault();
    wheelLock = true;
    if (event.deltaY > 0) next();
    else prev();
    window.setTimeout(() => {
      wheelLock = false;
    }, 420);
  }

  function onResize() {
    render();
  }

  function onTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
    touchDeltaX = 0;
  }

  function onTouchMove(event: TouchEvent) {
    touchDeltaX = event.touches[0].clientX - touchStartX;
    if (Math.abs(touchDeltaX) > 6) {
      event.preventDefault();
    }
  }

  function onTouchEnd() {
    if (Math.abs(touchDeltaX) > 40) {
      if (touchDeltaX < 0) next();
      else prev();
    }
    touchDeltaX = 0;
  }

  function onPointerDown(event: PointerEvent) {
    pointerDown = true;
    dragStartX = event.clientX;
    dragDeltaX = 0;
    slidesWrap.setPointerCapture(event.pointerId);
    slidesWrap.style.cursor = "grabbing";
  }

  function onPointerMove(event: PointerEvent) {
    if (!pointerDown) return;
    dragDeltaX = event.clientX - dragStartX;
  }

  function endPointerDrag() {
    if (!pointerDown) return;
    pointerDown = false;
    slidesWrap.style.cursor = "grab";
    const threshold = 38;
    if (Math.abs(dragDeltaX) > threshold) {
      if (dragDeltaX < 0) next();
      else prev();
    }
    dragDeltaX = 0;
  }

  root.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", onResize);
  root.addEventListener("touchstart", onTouchStart, { passive: true });
  root.addEventListener("touchmove", onTouchMove, { passive: false });
  root.addEventListener("touchend", onTouchEnd, { passive: true });
  slidesWrap.style.cursor = "grab";
  slidesWrap.addEventListener("pointerdown", onPointerDown);
  slidesWrap.addEventListener("pointermove", onPointerMove);
  slidesWrap.addEventListener("pointerup", endPointerDrag);
  slidesWrap.addEventListener("pointercancel", endPointerDrag);
  slidesWrap.addEventListener("pointerleave", endPointerDrag);
  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  render();
  startAutoplay();

  return () => {
    if (timer) clearInterval(timer);
    root.removeEventListener("wheel", onWheel);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("orientationchange", onResize);
    root.removeEventListener("touchstart", onTouchStart);
    root.removeEventListener("touchmove", onTouchMove);
    root.removeEventListener("touchend", onTouchEnd);
    slidesWrap.removeEventListener("pointerdown", onPointerDown);
    slidesWrap.removeEventListener("pointermove", onPointerMove);
    slidesWrap.removeEventListener("pointerup", endPointerDrag);
    slidesWrap.removeEventListener("pointercancel", endPointerDrag);
    slidesWrap.removeEventListener("pointerleave", endPointerDrag);
    prevBtn?.removeEventListener("click", prev);
    nextBtn?.removeEventListener("click", next);
  };
}
