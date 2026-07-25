import gsap from "gsap";

/**
 * Text-paint reveal for the "Our Developments" title/subtitle — same
 * gradient text-clip technique as the hero's 3 sentences, but driven by a
 * scrub ScrollTrigger (not a one-shot play) so it un-paints in reverse
 * when the user scrolls back up, exactly like the hero sentences do.
 */
export function prestigeDevelopmentsReveal() {
  const elements = document.querySelectorAll<HTMLElement>(".prestige-text-paint");

  elements.forEach((el) => {
    gsap.to(el, {
      backgroundPositionX: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  // Zoom each headline in as it enters, tied to the same scrub so it
  // un-zooms in reverse when scrolling back up past it. querySelectorAll
  // (not querySelector) because this page has more than one "Our
  // Developments"-style section (residential + commercial) — a single
  // query would only ever animate the first one.
  const titles = document.querySelectorAll<HTMLElement>(".prestige-developments-title");
  titles.forEach((title) => {
    gsap.fromTo(
      title,
      { scale: 0.75 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  });

  // Subtitles appear with a subtle zoom instead of the text-paint sweep
  // used elsewhere — a lighter scale range than the title since it's a
  // smaller supporting line, not the main headline.
  const subtitles = document.querySelectorAll<HTMLElement>(".prestige-developments-subtitle");
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
}
