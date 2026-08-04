import gsap from "gsap";

/**
 * Text-paint reveal for the "Our Developments" title/subtitle - same
 * gradient text-clip technique as the hero's 3 sentences, but driven by a
 * scrub ScrollTrigger (not a one-shot play) so it un-paints in reverse
 * when the user scrolls back up, exactly like the hero sentences do.
 */
export function prestigeDevelopmentsReveal() {
  function revealTrigger(element: HTMLElement) {
    const sectionTrigger = element.closest<HTMLElement>("[data-prestige-reveal-trigger]");

    return {
      trigger: sectionTrigger ?? element,
      start: sectionTrigger ? "top 92%" : "top 85%",
      end: sectionTrigger ? "top 45%" : "top 40%",
    };
  }

  const loadPaintElements = document.querySelectorAll<HTMLElement>(".prestige-load-text-paint");
  const loadTitles = document.querySelectorAll<HTMLElement>(".prestige-load-title");
  const loadSubtitles = document.querySelectorAll<HTMLElement>(".prestige-load-subtitle");

  loadPaintElements.forEach((element) => {
    gsap.fromTo(
      element,
      { backgroundPositionX: "100%" },
      {
        backgroundPositionX: "0%",
        duration: 1.15,
        ease: "power2.out",
      }
    );
  });

  loadTitles.forEach((title) => {
    gsap.fromTo(
      title,
      { scale: 0.75 },
      {
        scale: 1,
        duration: 1.15,
        ease: "power2.out",
      }
    );
  });

  loadSubtitles.forEach((subtitle) => {
    gsap.fromTo(
      subtitle,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        delay: 0.2,
        ease: "power2.out",
      }
    );
  });

  const elements = document.querySelectorAll<HTMLElement>(
    ".prestige-text-paint:not(.prestige-load-text-paint)"
  );

  elements.forEach((el) => {
    const reveal = revealTrigger(el);

    gsap.to(el, {
      backgroundPositionX: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: reveal.trigger,
        start: reveal.start,
        end: reveal.end,
        scrub: true,
      },
    });
  });

  // Zoom each headline in as it enters, tied to the same scrub so it
  // un-zooms in reverse when scrolling back up past it. querySelectorAll
  // (not querySelector) because this page has more than one "Our
  // Developments"-style section (residential + commercial) - a single
  // query would only ever animate the first one.
  const titles = document.querySelectorAll<HTMLElement>(
    ".prestige-developments-title:not(.prestige-load-title)"
  );
  titles.forEach((title) => {
    const reveal = revealTrigger(title);

    gsap.fromTo(
      title,
      { scale: 0.75 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: reveal.trigger,
          start: reveal.start,
          end: reveal.end,
          scrub: true,
        },
      }
    );
  });

  // Subtitles appear with a subtle zoom instead of the text-paint sweep
  // used elsewhere - a lighter scale range than the title since it's a
  // smaller supporting line, not the main headline.
  const subtitles = document.querySelectorAll<HTMLElement>(
    ".prestige-developments-subtitle:not(.prestige-load-subtitle)"
  );
  subtitles.forEach((subtitle) => {
    gsap.fromTo(
      subtitle,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: subtitle,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  });

  // Slogan image: zoom + fade in, kept back at its resting 0.7 opacity
  // (its CSS default) rather than a full 1 so it still reads as a subtle
  // watermark-style signature once revealed. Triggered off its own
  // position (same "top 85% -> top 40%" entrance window as everything
  // else here) so it reveals as soon as it scrolls into view. This used
  // to be chained to the subtitle's scroll position instead so it would
  // only start after the subtitle finished - but that end point ("top
  // -20%" of the *subtitle*) worked out to well above the viewport by
  // the time it resolved, so the slogan (sitting lower on the page than
  // the subtitle) was still finishing its reveal after it had already
  // scrolled up under the header.
  const slogans = document.querySelectorAll<HTMLElement>(".prestige-developments-slogan");
  slogans.forEach((slogan) => {
    gsap.fromTo(
      slogan,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: slogan,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  });
}
