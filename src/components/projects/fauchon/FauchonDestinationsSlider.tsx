"use client";

import { useEffect, useRef } from "react";
import { fauchonDestinationSlides } from "@/components/projects/fauchon/fauchonDestinationsData";
import { initFauchonDestinationsSlider } from "@/components/projects/fauchon/fauchonDestinationsSliderInit";
import "@/components/projects/fauchon/fauchon-destinations-slider.css";

export default function FauchonDestinationsSlider() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const destroy = initFauchonDestinationsSlider(root);
    return destroy;
  }, []);

  return (
    <div
      ref={rootRef}
      className="fauchon-dls-slider"
      data-autoplay="true"
      data-speed="5000"
      aria-label="Nearby destinations from FAUCHON Résidences"
    >
      <button className="fauchon-dls-arrow fauchon-dls-arrow-prev" type="button" aria-label="Previous destination">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M14.8 4.8L7.6 12l7.2 7.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className="fauchon-dls-arrow fauchon-dls-arrow-next" type="button" aria-label="Next destination">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M9.2 4.8L16.4 12l-7.2 7.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="fauchon-dls-slides">
        {fauchonDestinationSlides.map((slide) => (
          <article key={slide.title} className="fauchon-dls-slide">
            <img src={slide.image} alt={slide.title} loading="lazy" />
            <div className="fauchon-dls-content">
              <p className="fauchon-dls-minutes">{slide.minutes}</p>
              <h3 className="fauchon-dls-title">{slide.title}</h3>
              <p className="fauchon-dls-description">{slide.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="fauchon-dls-track">
        <div className="fauchon-dls-progress" />
      </div>
    </div>
  );
}
