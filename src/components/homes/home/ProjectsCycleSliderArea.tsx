"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import "@/components/homes/home/projects-cycle-slider.css";
import { projectCycleSlides, PROJECT_CYCLE_AUTOPLAY_MS } from "@/components/homes/home/projectsCycleSliderData";

const AUTOPLAY_MS = PROJECT_CYCLE_AUTOPLAY_MS;
const DRAG_THRESHOLD = 48;
const VIEWPORT_COVERAGE = 0.68;
const IMMERSIVE_MEDIA = "(min-width: 992px)";
const IMMERSIVE_COVERAGE = 0.52;

function isSectionInView(section: HTMLElement) {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;
  const visibleHeight = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
  const viewportCoverage = visibleHeight / vh;
  return viewportCoverage >= VIEWPORT_COVERAGE && rect.top <= vh * 0.12;
}

function isSectionImmersive(section: HTMLElement) {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;
  const visibleHeight = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
  const viewportCoverage = visibleHeight / vh;
  return viewportCoverage >= IMMERSIVE_COVERAGE && rect.top <= vh * 0.2;
}

function wrappedOffset(index: number, active: number, total: number) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function slideVars(offset: number): CSSProperties {
  const abs = Math.abs(offset);
  const hidden = abs > 2;
  const x = offset * 60;
  const z = offset === 0 ? 160 : -260 - abs * 80;
  const rotate = offset * -7;
  const scale = offset === 0 ? 1 : 0.74 - abs * 0.07;

  return {
    ["--po-cycle-x" as string]: `${x}%`,
    ["--po-cycle-z" as string]: `${z}px`,
    ["--po-cycle-rotate" as string]: `${rotate}deg`,
    ["--po-cycle-scale" as string]: String(Math.max(0.54, scale)),
    ["--po-cycle-opacity" as string]: hidden ? "0" : String(offset === 0 ? 1 : 0.42 - abs * 0.08),
    ["--po-cycle-brightness" as string]: String(offset === 0 ? 1 : 0.46),
    ["--po-cycle-saturation" as string]: String(offset === 0 ? 1 : 0.75),
    zIndex: 10 - abs,
  };
}

const ProjectsCycleSliderArea = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartRef = useRef(0);
  const activeRef = useRef(0);

  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isImmersive, setIsImmersive] = useState(false);

  const total = projectCycleSlides.length;
  const lastIndex = total - 1;

  const setActiveIndex = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(next, lastIndex));
    activeRef.current = clamped;
    setActive(clamped);
    setAnimKey((k) => k + 1);
  }, [lastIndex]);

  const restartAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((current) => {
        if (current >= lastIndex) {
          if (timerRef.current) clearInterval(timerRef.current);
          return current;
        }
        const next = current + 1;
        activeRef.current = next;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, AUTOPLAY_MS);
  }, [lastIndex]);

  const go = useCallback(
    (index: number) => {
      setActiveIndex(index);
      restartAutoplay();
    },
    [setActiveIndex, restartAutoplay]
  );

  const goNext = useCallback(() => {
    if (activeRef.current >= lastIndex) return;
    setActiveIndex(activeRef.current + 1);
    restartAutoplay();
  }, [lastIndex, setActiveIndex, restartAutoplay]);

  const goPrev = useCallback(() => {
    if (activeRef.current <= 0) return;
    setActiveIndex(activeRef.current - 1);
    restartAutoplay();
  }, [setActiveIndex, restartAutoplay]);

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [restartAutoplay]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = window.matchMedia(IMMERSIVE_MEDIA);
    let raf = 0;

    const applyImmersive = () => {
      if (!media.matches) {
        setIsImmersive(false);
        document.body.classList.remove("po-cycle-immersive");
        return;
      }

      const next = isSectionImmersive(section);
      setIsImmersive(next);
      document.body.classList.toggle("po-cycle-immersive", next);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(applyImmersive);
    };

    applyImmersive();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    media.addEventListener("change", onScrollOrResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      media.removeEventListener("change", onScrollOrResize);
      document.body.classList.remove("po-cycle-immersive");
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          restartAutoplay();
        } else if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      },
      { threshold: [0.35, 0.45, 0.6] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [restartAutoplay]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (!isSectionInView(section)) return;
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const delta = event.clientX - dragStartRef.current;
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      delta < 0 ? goNext() : goPrev();
    }
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      className={`po-cycle-section${isImmersive ? " is-immersive" : ""}`}
      aria-labelledby="po-cycle-heading"
      style={{ ["--po-cycle-autoplay" as string]: `${AUTOPLAY_MS}ms` }}
    >
      <header className="po-cycle-heading">
        <h2 id="po-cycle-heading">Our Project Excellence</h2>
        <p>Building iconic spaces that define tomorrow.</p>
      </header>

      <div className="po-cycle-shell" aria-label="Project carousel">
        <button type="button" className="po-cycle-arrow po-cycle-arrow-prev" aria-label="Previous project" onClick={goPrev}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          className="po-cycle-stage"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {projectCycleSlides.map((project, index) => {
            const offset = wrappedOffset(index, active, total);
            const isActive = offset === 0;
            const slideKey = project.comingSoon ? "coming-soon" : project.href;
            const external = !project.comingSoon && project.href.startsWith("http");

            return (
              <article
                key={slideKey}
                className={`po-cycle-slide${project.comingSoon ? " po-cycle-slide--coming-soon" : ""}${isActive ? " is-active" : ""}`}
                style={{
                  ...slideVars(offset),
                  ...(project.image
                    ? { ["--po-cycle-bg-image" as string]: `url(${project.image})` }
                    : {}),
                }}
                aria-hidden={!isActive}
                aria-label={isActive ? `${project.title} project slide` : undefined}
              >
                <div className="po-cycle-slide-content">
                  <h3 className="po-cycle-slide-title">{project.title}</h3>
                  <p className="po-cycle-slide-text">{project.text}</p>
                  {!project.comingSoon &&
                    (external ? (
                      <a className="po-cycle-slide-button" href={project.href} target="_blank" rel="noreferrer">
                        View Project
                      </a>
                    ) : (
                      <Link className="po-cycle-slide-button" href={project.href}>
                        View Project
                      </Link>
                    ))}
                </div>
              </article>
            );
          })}
        </div>

        <button type="button" className="po-cycle-arrow po-cycle-arrow-next" aria-label="Next project" onClick={goNext}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <footer className="po-cycle-footer">
        <div className="po-cycle-progress" aria-label="Slider pagination">
          {projectCycleSlides.map((project, index) => (
            <button
              key={project.comingSoon ? "coming-soon" : project.href}
              type="button"
              className={`po-cycle-dot${index === active ? " is-active" : ""}`}
              aria-label={`Go to ${project.title}`}
              onClick={() => go(index)}
            >
              <span key={index === active ? animKey : index} />
            </button>
          ))}
        </div>
        <div className="po-cycle-counter">
          <strong>{pad(active + 1)}</strong> / <span>{pad(total)}</span>
        </div>
      </footer>
    </section>
  );
};

export default ProjectsCycleSliderArea;
