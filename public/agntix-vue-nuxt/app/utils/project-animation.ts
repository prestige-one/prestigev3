import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function designProjectAnimation() {
  const items = gsap.utils.toArray<HTMLElement>('.design-project-item');

  if (items.length) {
    const pw = gsap.matchMedia();

    pw.add("(min-width: 991px)", () => {
      // Initial setup
      gsap.set('.design-project-thumb.item-1', {
        x: 400,
        rotate: 10,
        opacity: 0 // Added for smoother entry
      });
      gsap.set('.design-project-thumb.item-2', {
        x: -400,
        rotate: -10,
        opacity: 0 // Added for smoother entry
      });

      // Create animations for each item
      items.forEach(item => {
        const thumb1 = item.querySelector('.design-project-thumb.item-1');
        const thumb2 = item.querySelector('.design-project-thumb.item-2');

        if (!thumb1 && !thumb2) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: 1.5, // Smoother scrub
            markers: false // Enable for debugging if needed
          }
        });

        // Animate whichever thumbs exist
        if (thumb1) {
          tl.to(thumb1, {
            x: 0,
            rotate: 0,
            opacity: 1,
            ease: "power3.out"
          }, 0);
        }

        if (thumb2) {
          tl.to(thumb2, {
            x: 0,
            rotate: 0,
            opacity: 1,
            ease: "power3.out"
          }, 0);
        }
      });
    });

    return () => pw.revert();
  }
}

export function creativeAgencyProjectAnimation() {
  const perspective_1 = gsap.matchMedia();

  perspective_1.add("(min-width: 767px)", () => {
    const projectThumbs = gsap.utils.toArray<HTMLElement>('.studio-project-thumb img');

    if (projectThumbs.length) {
      gsap.set('.studio-project-thumb', { perspective: 60 });

      projectThumbs.forEach((img) => {
        gsap.fromTo(img, {
          rotationX: 1.8,
          z: '0vh'
        }, {
          rotationX: -0.5,
          z: '-2vh',
          scrollTrigger: {
            trigger: img,
            start: "top+=150px bottom",
            end: "bottom top",
            immediateRender: false,
            scrub: 0.1,
          }
        });
      });
    }
  });
}


export const studioProjectAnimation = () => {
  const perspective_1 = gsap.matchMedia();

  perspective_1.add("(min-width: 767px)", () => {
    const wrap = document.querySelector(".studio-project-wrap");
    if (wrap) {
      gsap.set(".studio-project-thumb", { perspective: 60 });
      const images = document.querySelectorAll<HTMLImageElement>(".studio-project-thumb img");
      images.forEach((img) => {
        gsap.fromTo(
          img,
          {
            rotationX: 1.8,
            z: "0vh",
          },
          {
            rotationX: -0.5,
            z: "-2vh",
            scrollTrigger: {
              trigger: img,
              start: "top+=150px bottom",
              end: "bottom top",
              immediateRender: false,
              scrub: 0.1,
            },
          }
        );
      });
    }
  });
};

export const projectDetailsAnim = () => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1200px)", () => {
    if (document.querySelector(".project-details-2-area")) {
      ScrollTrigger.create({
        trigger: ".project-details-2-area",
        start: "top top",
        end: "bottom -100%",
        pin: ".project-details-video",
        pinSpacing: false,
      });
    }
  });
};