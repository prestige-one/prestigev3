"use client";

import {
  createContext,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import "@/components/common/scroll-animate.css";

type ScrollRevealState = {
  visible: boolean;
  instant: boolean;
};

/** `null` = not inside a group. */
const ScrollAnimateGroupContext = createContext<ScrollRevealState | null>(null);

const REVEAL_VIEWPORT_RATIO = 0.92;

function useScrollReveal(skip = false) {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "0px 0px -10% 0px",
    skip,
  });

  const elementRef = useRef<HTMLElement | null>(null);
  const setRef = useCallback(
    (node: HTMLElement | null) => {
      elementRef.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  const [revealed, setRevealed] = useState(false);
  const [instant, setInstant] = useState(false);

  const reveal = useCallback((asInstant: boolean) => {
    setRevealed(true);
    if (asInstant) setInstant(true);
  }, []);

  const evaluateVisibility = useCallback(() => {
    const element = elementRef.current;
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < viewportHeight * REVEAL_VIEWPORT_RATIO) {
      // Already scrolled past this point (e.g. mid-page reload) → show instantly.
      reveal(rect.top < 0);
      return true;
    }
    return false;
  }, [reveal]);

  useEffect(() => {
    if (inView) reveal(false);
  }, [inView, reveal]);

  useEffect(() => {
    if (skip || revealed) return;

    evaluateVisibility();

    const raf = window.requestAnimationFrame(evaluateVisibility);
    const timeoutShort = window.setTimeout(evaluateVisibility, 60);
    const timeoutLong = window.setTimeout(evaluateVisibility, 250);

    const handlePageReady = () => evaluateVisibility();
    window.addEventListener("load", handlePageReady);
    window.addEventListener("pageshow", handlePageReady);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeoutShort);
      window.clearTimeout(timeoutLong);
      window.removeEventListener("load", handlePageReady);
      window.removeEventListener("pageshow", handlePageReady);
    };
  }, [evaluateVisibility, skip, revealed]);

  return {
    ref: setRef,
    visible: revealed || inView,
    instant,
  };
}

type ScrollAnimateGroupProps = {
  children: ReactNode;
  className?: string;
};

export const ScrollAnimateGroup = ({ children, className = "" }: ScrollAnimateGroupProps) => {
  const { ref, visible, instant } = useScrollReveal();

  return (
    <ScrollAnimateGroupContext.Provider value={{ visible, instant }}>
      <div className={["po-scroll-animate-group", className].filter(Boolean).join(" ")}>
        <div ref={ref} className="po-scroll-animate-sentinel" aria-hidden="true" />
        {children}
      </div>
    </ScrollAnimateGroupContext.Provider>
  );
};

type ScrollAnimateProps = {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  duration?: number;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

const ScrollAnimate = ({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 1000,
  as: Component = "div",
  style,
  ...rest
}: ScrollAnimateProps) => {
  const groupState = useContext(ScrollAnimateGroupContext);
  const isGrouped = groupState !== null;
  const { ref, visible: selfVisible, instant: selfInstant } = useScrollReveal(isGrouped);

  const isVisible = isGrouped ? groupState.visible : selfVisible;
  const instantReveal = isGrouped ? groupState.instant : selfInstant;
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false);
  }, []);

  const shouldAnimate = isVisible && !reduceMotion && !instantReveal;

  const classes = [
    className,
    isVisible
      ? shouldAnimate
        ? `animated ${animation} po-scroll-animate--visible`
        : "po-scroll-animate--visible"
      : "po-scroll-animate--hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={isGrouped ? undefined : ref}
      className={classes}
      style={{
        ...style,
        animationDelay: shouldAnimate ? `${delay}ms` : undefined,
        animationDuration: shouldAnimate ? `${duration}ms` : undefined,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default ScrollAnimate;
