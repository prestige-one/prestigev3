import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


/**
 * @param topOffset Pixels to keep clear at the top when a panel pins — lets
 * the pinned panel stop below a fixed header instead of sliding under it.
 * Defaults to 0 (pins flush to the viewport top, the original behavior).
 */
export function portfolioAnimation(topOffset = 0) {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 767px)", () => {
    const sections = document.querySelectorAll('.des-portfolio-panel');
    const wrap = document.querySelector('.des-portfolio-wrap');

    if (!sections.length || !wrap) return;

    sections.forEach((section) => {
      gsap.set(section, { scale: 1 });

      gsap.to(section, {
        scale: 0.8,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: `top ${topOffset}`,
          end: 'bottom 60%',
          endTrigger: wrap,
          pinSpacing: false,
          markers: false,
        }
      });
    });
  });
};

export function stPortfolioAnimation() {
  const pm = gsap.matchMedia();

  pm.add("(min-width: 1200px)", () => {
    const portfolioArea = document.querySelector('.st-portfolio-area');
    if (!portfolioArea) return;

    const projectText = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioArea,
        start: 'top 5%',
        end: "bottom 55%",
        pin: ".st-portfolio-heading",
        markers: false,
        pinSpacing: false,
        scrub: 1,
      }
    });

    projectText
      .set(".st-portfolio-title", {
        scale: 0.9,
        duration: 2
      })
      .to(".st-portfolio-title", {
        scale: 1.2,
        duration: 2
      })
      .to(".st-portfolio-title", {
        scale: 1.2,
        duration: 2
      }, "+=2");
  })
};


export function portfolioAnimationTwo() {
  // Animation timeline
  const project_text = gsap.timeline({
    scrollTrigger: {
      trigger: ".tp-project-5-2-area",
      start: 'top center-=350',
      end: "bottom 150%",
      pin: ".tp-project-5-2-title",
      markers: false,
      pinSpacing: false,
      scrub: 1,
    }
  });

  project_text.set(".tp-project-5-2-title", {
    scale: 0.6,
    duration: 2
  })
    .to(".tp-project-5-2-title", {
      scale: 1,
      duration: 2
    })
    .to(".tp-project-5-2-title", {
      scale: 1,
      duration: 2
    }, "+=2");
}

export const portfolioSlicerAnimation = () => {
  if (window.innerWidth >= 1200) {
    gsap.set('.tp-portfolio-slicer-wrap .pro-img-1 img', {
      x: 500,
    });
    gsap.set('.tp-portfolio-slicer-wrap .pro-img-2 img', {
      x: -500,
    });

    const portfolioWraps = gsap.utils.toArray<HTMLElement>('.tp-portfolio-slicer-wrap');

    portfolioWraps.forEach((wrap) => {
      // Animate first image
      gsap.to(wrap.querySelector('.pro-img-1 img'), {
        x: 0,
        scrollTrigger: {
          trigger: wrap,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
          markers: false,
        },
      });

      // Animate second image
      gsap.to(wrap.querySelector('.pro-img-2 img'), {
        x: 0,
        scrollTrigger: {
          trigger: wrap,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
      });
    });
  }
};


export const portfolioItemPinAnimation = () => {
  const pi = gsap.matchMedia();
  pi.add("(min-width: 1200px)", () => {
    document.querySelectorAll('.tp-pd-3-portfolio-item-wrap').forEach((group) => {
      const panels = group.querySelectorAll('.tp-pd-3-portfolio-item');
      const pinTarget = group.querySelector('.tp-pd-3-content-pin');
      panels.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          pin: pinTarget,
          start: 'top 20%',
          end: 'bottom center',
          scrub: 1,
          pinSpacing: false,
          markers: false,
        });
      });
    });
  });
}

export function portfolioCustomLightAnim() {
  if (document.querySelectorAll('.tp-pd-5-hero-black-overlay').length > 0) {
    gsap.to(".tp-pd-5-hero-black-overlay", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".tp-pd-5-hero-black-anim",
        start: "top -40%",
        end: "bottom 100%",
        scrub: true,
      }
    });
  }
  if (document.querySelectorAll('.tp-pd-5-hero-white-overlay').length > 0) {
    gsap.to(".tp-pd-5-hero-white-overlay", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".tp-pd-5-hero-white-anim",
        start: "top -5%",
        end: "bottom 100%",
        scrub: true,
      }
    });
  }
}