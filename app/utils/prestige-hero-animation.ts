import gsap from "gsap";

export function prestigeHeroAnimation() {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 992px)", () => {
    const hero = document.querySelector(".prestige-hero");
    const intro = document.querySelector(".prestige-hero-content");
    const logo = document.querySelector(".prestige-hero-logo");
    const overlay = document.querySelector(".prestige-hero-overlay");

    const headlines = [1, 2, 3]
      .map((n) => {
        const el = document.querySelector<HTMLElement>(`.prestige-hero-headline-${n}`);
        const text = el?.querySelector<HTMLHeadingElement>("h2") ?? null;
        return { el, text };
      })
      .filter(
        (h): h is { el: HTMLElement; text: HTMLHeadingElement } => !!h.el && !!h.text,
      );

    if (!hero || !intro || !logo || !overlay || headlines.length !== 3) return;

    // headline pacing knobs — tweak these to change how the sequence feels
    const HEADLINE_ENTER = 0.9; // slide-up + text-paint duration
    const HEADLINE_HOLD = 1.1; // how long a fully-revealed headline stays put before it exits
    const HEADLINE_EXIT = 0.6; // fade-out duration
    const NEXT_OVERLAP = 0.2; // next headline starts this long after current exit begins

    const HEADLINES_START = 3.0;
    const totalHeadlineTime = headlines.reduce((cursor, _, index) => {
      const exitStart = cursor + HEADLINE_ENTER + HEADLINE_HOLD;
      const isLast = index === headlines.length - 1;
      return isLast ? exitStart + HEADLINE_EXIT : exitStart + NEXT_OVERLAP;
    }, HEADLINES_START);

    // scroll-distance-per-timeline-second — was 76 (≈9 viewport heights for
    // the full sequence), which meant the logo and headlines only arrived
    // after many separate scroll actions. Dropped way down so the whole
    // thing plays out within roughly one continuous scroll gesture.
    const SCROLL_DISTANCE_PER_SECOND = 20;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: `+=${Math.round(totalHeadlineTime * SCROLL_DISTANCE_PER_SECOND)}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // intro copy fades right away, logo rises from the bottom and settles
    // in clearly visible (opacity 0.55, scale 1) — then, instead of
    // holding still, it travels upward while fading out AT THE SAME TIME
    // (scroll-driven the whole way, no dead/static zone). The travel
    // distance is kept short and the fade finishes before it gets near
    // the top/header, so its bottom edge never ends up peeking out —
    // it's fully gone well before it would reach that point. Settling at
    // scale 1 (not 1.2) keeps the logo's full height inside the hero's
    // overflow:hidden bounds instead of overshooting past the top/bottom
    // edges and getting clipped.
    tl.to(intro, { opacity: 0, y: -30, duration: 0.5, ease: "none" }, 0)
      .fromTo(
        logo,
        { yPercent: 100, scale: 0.6, opacity: 0 },
        { yPercent: 0, scale: 1, opacity: 0.55, duration: 1, ease: "none" },
        0.3,
      )
      .to(logo, { yPercent: -35, duration: 1.7, ease: "none" }, 1.3)
      // opacity finishes fading well before the travel above completes, so
      // it's fully invisible before it ever gets close enough to the top
      // to be clipped by the header — no cut-off bottom edge ever shows
      .to(logo, { opacity: 0, duration: 1, ease: "none" }, 1.3);

    // dark overlay fades in smoothly right before the headlines start
    // arriving (for text contrast) and is never faded back out — it stays
    // in place for the rest of the pinned sequence.
    const OVERLAY_FADE = 1;
    tl.to(
      overlay,
      { opacity: 1, duration: OVERLAY_FADE, ease: "none" },
      HEADLINES_START - OVERLAY_FADE,
    );

    // each headline reveals by sliding up from below while the previous
    // one is covered/faded, mirroring the tp-service-pin panel reveal —
    // plus a text-paint sweep (same technique as .tp_text_invert) that
    // brightens the words in as they arrive. Every headline then holds
    // in place for HEADLINE_HOLD before it fades out for the next one.
    let cursor = HEADLINES_START;
    headlines.forEach(({ el, text }, index) => {
      const enterStart = cursor;

      tl.fromTo(
        el,
        { yPercent: 25, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: HEADLINE_ENTER, ease: "none" },
        enterStart,
      ).fromTo(
        text,
        { backgroundPositionX: "100%" },
        { backgroundPositionX: "0%", duration: HEADLINE_ENTER, ease: "none" },
        enterStart,
      );

      const exitStart = enterStart + HEADLINE_ENTER + HEADLINE_HOLD;
      tl.to(
        el,
        { yPercent: -25, opacity: 0, duration: HEADLINE_EXIT, ease: "none" },
        exitStart,
      );

      const isLast = index === headlines.length - 1;
      cursor = isLast ? exitStart + HEADLINE_EXIT : exitStart + NEXT_OVERLAP;
    });

    return () => tl.kill();
  });
}
