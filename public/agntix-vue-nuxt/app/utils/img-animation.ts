import gsap from "gsap";

export function imagRevealAnimation() {
  const tp_img_reveal = document.querySelectorAll(".tp_img_reveal");
  if (!tp_img_reveal.length) return () => { };

  const ctx = gsap.context(() => {
    tp_img_reveal.forEach((img_reveal) => {
      const image = img_reveal.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img_reveal,
          start: "top 70%",
        }
      });

      tl.set(img_reveal, { autoAlpha: 1 });
      tl.from(img_reveal, {
        duration: 1.5,
        xPercent: -100,
        ease: "power2.out"
      });
      tl.from(image, {
        duration: 1.5,
        xPercent: 100,
        scale: 1.5,
        delay: -1.5,
        ease: "power2.out"
      });
    });
  });

  return () => ctx.revert();
}

export const brandImgAnim = () => {
  gsap.set(".tp-brand-inner-item img", { scale: 1.3, opacity: 0 });
  gsap.to(".tp-brand-inner-item img", {
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: "bounce.out",
    stagger: {
      each: 0.1
    },
    scrollTrigger: {
      trigger: '.tp-brand-inner-area',
      start: "top 100%"
    }
  })
}

export const gsapBgAnimation = () => {
  gsap.set(".tp-gsap-bg", { scaleX: 1 });
  const mm = gsap.matchMedia();
  mm.add("(min-width:1400px)", () => {
    gsap.to(".tp-gsap-bg", {
      scrollTrigger: {
        trigger: ".tp-gsap-bg",
        scrub: 0.2,
        start: "top 90%",
        end: "bottom 100%",
      },
      scaleX: 0.85,
      borderRadius: "60px",
      transformOrigin: "center center",
      ease: "none",
    });
  });
};


export function parallaxSlider() {
  // Check if we're in browser environment
  if (typeof window === 'undefined') return;

  const images: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
  const slider = document.querySelector('.parallax-sliders') as HTMLElement;
  const sliderWrapper = document.querySelector('.parallax-slider-wrapper') as HTMLElement;
  
  // If elements don't exist, return early
  if (!slider || !sliderWrapper || images.length === 0) return;

  let sliderWidth: number;
  let imageWidth: number;
  let current = 0;
  let target = 0;
  const ease = 0.05;

  window.addEventListener('resize', init);

  images.forEach((img, idx) => { 
    img.style.backgroundImage = `url(/img/project-slider-img/portfolio-slider-5/port-${idx + 1}.jpg)`;
  });

  // Add wheel event listener only if sliderWrapper exists
  sliderWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    target += e.deltaY * 0.5;
    
    // Limit target to valid range (need to wait for init to set sliderWidth)
    if (sliderWidth) {
      target = Math.max(0, target);
      target = Math.min(sliderWidth - window.innerWidth, target);
    }
  });

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
  }

  function animate() {
    current = parseFloat(lerp(current, target, ease).toFixed(2));
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    requestAnimationFrame(animate);
  }

  function animateImages() {
    const ratio = current / imageWidth;
    let intersectionRatioValue: number;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - (idx * 0.7);
      setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
    });
  }
  
  // Initialize after a small delay to ensure DOM is ready
  setTimeout(() => {
    init();
    animate();
  }, 100);
}

export const imgBoxScrollAnimation = () => {
  gsap.matchMedia().add("(min-width: 991px)", () => {
    document.querySelectorAll(".img-box").forEach((box) => {
      gsap.fromTo(
        box.querySelectorAll('.tp-top-bottom-scroll'),
        { yPercent: 20 },
        {
          yPercent: -26, ease: "power1.out", scrollTrigger: {
            trigger: box,
            start: "top 100%",
            end: "bottom top",
            scrub: true,
            markers: false,
          }
        }
      );
    });
  });
}

export function bgAnimation() {
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cr-hero-bottom-wrap, .cr-footer-bg",
      start: "top 110%",
    }
  })
  t2.from(".bg-b", {
    y: 100,
    opacity: 0,
    duration: 1
  })
  t2.from(".bg-l", {
    x: 100,
    opacity: 0,
    duration: 1
  }, "-=0.5")

  t2.from(".bg-r", {
    x: -100,
    opacity: 0,
    duration: 1
  }, "-=1")
}