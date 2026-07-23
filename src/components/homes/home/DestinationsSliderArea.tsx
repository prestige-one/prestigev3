"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

type DestinationSlide = {
  title: string;
  image: string;
  link: string;
};

const destinations: DestinationSlide[] = [
  {
    title: "Dubai Maritime City",
    link: "/our-destinations/dubai-maritime-city",
    image: "/assets/images/v2/our-destinations/dubai-maritime.webp",
  },
  {
    title: "Palm Jumeirah",
    link: "/our-destinations/palm-jumeirah",
    image: "/assets/images/v2/our-destinations/dubai-golf-residences.webp",
  },
  {
    title: "Dubai Islands",
    link: "/our-destinations/dubai-islands",
    image: "/assets/images/v2/our-destinations/dubai-Islands.webp",
  },
  {
    title: "Meydan City",
    link: "/our-destinations/mohammed-bin-rashid-city",
    image: "/assets/images/v2/our-destinations/Meydan-City.webp",
  },
  {
    title: "Jumeirah Village Circle",
    link: "/our-destinations/jumeirah-village-circle",
    image: "/assets/images/v2/our-destinations/jumeirah-village-circle-jvc.webp",
  },
  {
    title: "Dubai Sports City",
    link: "/our-destinations/dubai-sports-city",
    image: "/assets/images/v2/our-destinations/dubai-sport-city.webp",
  },
  {
    title: "Jumeirah Garden City",
    link: "/our-destinations/jumeirah-garden-city",
    image: "/assets/images/v2/our-destinations/Jumeirah-Garden-City.webp",
  },
  {
    title: "Barsha Heights",
    link: "/our-destinations/barsha-heights",
    image: "/assets/images/v2/our-destinations/barsha-v3.webp",
  },
];

const AUTOPLAY_DELAY_MS = 4000;

/**
 * Full-bleed horizontal destinations slider. Autoplay runs whenever the
 * section is substantially in view; left/right arrows and the dot rail
 * navigate manually with wraparound. Normal page scrolling is left
 * untouched — the slider no longer hijacks the mouse wheel.
 */
const DestinationsSliderArea = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number, options?: { instant?: boolean }) => {
    const total = destinations.length;
    const clamped = ((index % total) + total) % total;
    activeIndexRef.current = clamped;
    setActiveIndex(clamped);
    const track = trackRef.current;
    if (!track) return;

    if (options?.instant) {
      // Cut straight to the target (used when wrapping around) instead of
      // visibly sliding backwards across every other slide.
      track.style.transitionDuration = "0ms";
      track.style.transform = `translateX(-${clamped * 100}%)`;
      void track.offsetHeight;
      track.style.transitionDuration = "";
    } else {
      track.style.transform = `translateX(-${clamped * 100}%)`;
    }
  }, []);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      const isLast = activeIndexRef.current >= destinations.length - 1;
      goTo(isLast ? 0 : activeIndexRef.current + 1, isLast ? { instant: true } : undefined);
    }, AUTOPLAY_DELAY_MS);
  }, [goTo, stopAutoplay]);

  const goToManual = useCallback(
    (direction: 1 | -1) => {
      const isWrapForward = direction === 1 && activeIndexRef.current >= destinations.length - 1;
      const isWrapBackward = direction === -1 && activeIndexRef.current <= 0;
      goTo(activeIndexRef.current + direction, isWrapForward || isWrapBackward ? { instant: true } : undefined);
      // Restart the autoplay clock so it doesn't immediately advance again
      // right after a manual navigation.
      startAutoplay();
    },
    [goTo, startAutoplay]
  );

  // Autoplay only while the section is substantially in view.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          startAutoplay();
          return;
        }
        stopAutoplay();
      },
      { threshold: [0.45, 0.6] }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  return (
    <>
      <div className="po-dest-slider-heading">
        <div className="container">
          <h2 className="po-dest-slider-heading__title">Our Destinations</h2>
          <p className="po-dest-slider-heading__sub">Prestige Properties In The Most Prime Locations</p>
          <img
            src="/assets/images/v2/pages/slogan.png"
            alt="Prestige One Developments slogan"
            className="po-dest-slider-heading__slogan"
          />
        </div>
      </div>

      <section className="po-dest-slider-section" ref={sectionRef}>
        <div className="po-dest-slider-track" ref={trackRef}>
          {destinations.map((item) => {
            const slideStyle = { backgroundImage: `url(${item.image})` } as CSSProperties;
            const external = item.link.startsWith("http");
            const inner = (
              <>
                <div className="po-dest-slider-overlay" />
                <div className="container h-100">
                  <div className="po-dest-slider-content"> 
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </>
            );

            return external ? (
              <a
                key={item.title}
                className="po-dest-slider-slide"
                href={item.link}
                style={slideStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <Link key={item.title} className="po-dest-slider-slide" href={item.link} style={slideStyle}>
                {inner}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="po-dest-slider-arrow po-dest-slider-arrow--prev"
          aria-label="Previous destination"
          onClick={() => goToManual(-1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="po-dest-slider-arrow po-dest-slider-arrow--next"
          aria-label="Next destination"
          onClick={() => goToManual(1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="po-dest-slider-dots" role="tablist" aria-label="Destinations">
          {destinations.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={item.title}
              className={`po-dest-slider-dot${activeIndex === index ? " is-active" : ""}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DestinationsSliderArea;
