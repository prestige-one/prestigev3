"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import type SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type DestinationSlide =
  | {
      title: string;
      image: string;
      link: string;
    }
  | {
      title: string;
      image: string;
      placeholder: true;
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
    title: "Dubai Land Residence Complex",
    link: "/our-destinations/dlrc",
    image: "/assets/images/v2/our-destinations/DLRC.webp",
  },
  {
    title: "Barsha Heights",
    link: "/our-destinations/barsha-heights",
    image: "/assets/images/v2/our-destinations/barsha-v3.webp",
  },
];

const PINNED_SCROLL_MIN_WIDTH = 768;
const WHEEL_THRESHOLD = 36;
const WHEEL_LOCK_MS = 620;

const OurDestinationsArea = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  const activeIndexRef = useRef(0);
  const isPinnedActiveRef = useRef(false);
  const wheelDeltaRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const wheelResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isScrollDriven, setIsScrollDriven] = useState(false);

  useEffect(() => {
    const updateMode = () => setIsScrollDriven(window.innerWidth >= PINNED_SCROLL_MIN_WIDTH);
    updateMode();
    window.addEventListener("resize", updateMode);
    return () => window.removeEventListener("resize", updateMode);
  }, []);

  // Pin the section in viewport while wheel advances horizontal slides.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !isScrollDriven) {
      isPinnedActiveRef.current = false;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const totalSteps = Math.max(1, destinations.length - 1);
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      // Enough pin distance to keep section locked while user wheels through slides.
      end: () => `+=${Math.round(window.innerHeight * totalSteps * 0.9)}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onToggle: (self) => {
        isPinnedActiveRef.current = self.isActive;
        const lenis = window.__poLenis;
        if (!lenis) return;
        // Pause Lenis while pinned so wheel only drives the slider.
        if (self.isActive) lenis.stop();
        else lenis.start();
      },
    });

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || !isPinnedActiveRef.current) return;

      const swiper = swiperRef.current;
      if (!swiper) return;

      const primaryDelta =
        Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (primaryDelta === 0) return;

      const scrollingDown = primaryDelta > 0;

      // At ends, unlock page scroll to leave the pinned section.
      if ((scrollingDown && swiper.isEnd) || (!scrollingDown && swiper.isBeginning)) {
        window.__poLenis?.start();
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      window.__poLenis?.stop();

      wheelDeltaRef.current += primaryDelta;
      if (wheelResetRef.current) clearTimeout(wheelResetRef.current);
      wheelResetRef.current = setTimeout(() => {
        wheelDeltaRef.current = 0;
      }, 140);

      if (wheelLockedRef.current || Math.abs(wheelDeltaRef.current) < WHEEL_THRESHOLD) return;

      wheelDeltaRef.current = 0;
      wheelLockedRef.current = true;

      if (scrollingDown) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }

      window.setTimeout(() => {
        wheelLockedRef.current = false;
      }, WHEEL_LOCK_MS);
    };

    // Capture phase so we beat Lenis / page scroll while slides remain.
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 220);
    return () => {
      window.clearTimeout(refreshId);
      window.removeEventListener("wheel", onWheel, true);
      if (wheelResetRef.current) clearTimeout(wheelResetRef.current);
      isPinnedActiveRef.current = false;
      window.__poLenis?.start();
      trigger.kill();
    };
  }, [isScrollDriven]);

  return (
    <section
      className="po-destinations-section"
      ref={sectionRef}
      aria-labelledby="po-destinations-heading"
    >
      <header className="po-destinations-head">
        <p className="po-destinations-kicker">Our Destinations</p>
        <h2 id="po-destinations-heading">
          Prestige Properties in the Most Prime Locations
        </h2>
      </header>

      <Swiper
        modules={[Autoplay, Pagination]}
        direction="horizontal"
        effect="slide"
        loop={false}
        speed={620}
        slidesPerView={1}
        spaceBetween={0}
        allowTouchMove={!isScrollDriven}
        simulateTouch={!isScrollDriven}
        resistanceRatio={0.65}
        autoplay={
          isScrollDriven
            ? false
            : {
                delay: 2600,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
        }
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          activeIndexRef.current = swiper.activeIndex;
        }}
        onSlideChange={(swiper) => {
          activeIndexRef.current = swiper.activeIndex;
        }}
        pagination={{ clickable: true, dynamicBullets: false }}
        className="po-destinations-swiper"
      >
        {destinations.map((item) => {
          const slideClassName = [
            "po-destination-slide",
            "placeholder" in item && item.placeholder ? "po-destination-slide--placeholder" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const slideStyle = { backgroundImage: `url(${item.image})` } as CSSProperties;
          const inner = (
            <>
              <div className="po-destination-overlay" />
              <div className="container h-100">
                <div className="po-destination-content">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </>
          );

          if (!("link" in item)) {
            return (
              <SwiperSlide key={item.title}>
                <div className={slideClassName} style={slideStyle} aria-label={item.title}>
                  {inner}
                </div>
              </SwiperSlide>
            );
          }

          const link = item.link;
          const external = link.startsWith("http");
          const slideProps = {
            className: slideClassName,
            href: link,
            style: slideStyle,
          };

          return (
            <SwiperSlide key={item.title}>
              {external ? (
                <a {...slideProps} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <Link {...slideProps}>{inner}</Link>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default OurDestinationsArea;
