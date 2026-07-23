import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export function teamAnimation() {
  const tm = gsap.matchMedia();

  tm.add("(min-width: 991px)", () => {
    const panels = gsap.utils.toArray<HTMLElement>('.studio-team-area');
    const tl_team = gsap.timeline();

    panels.forEach((section) => {
      tl_team.to(section, {
        scrollTrigger: {
          trigger: '.studio-team-area',
          pin: '.studio-team-title-box',
          scrub: 1,
          start: 'top 17%',
          end: "bottom 90%",
          endTrigger: '.studio-team-area',
          pinSpacing: false,
          markers: false,
        },
      });
    });
  });
}

export function textParagraphAnimation() {
  const paragraphs = gsap.utils.toArray<HTMLElement>('.tp_text_anim p');
  paragraphs.forEach((paragraph) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraph,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
      }
    });

    const splitText = new SplitText(paragraph, { type: "lines" });
    gsap.set(paragraph, { perspective: 400 });
    tl.from(splitText.lines, {
      duration: 1,
      delay: 0.2,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1
    });
  });
}