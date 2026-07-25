import { gsap, Power2 } from "gsap";

export function cursorAnimation(): void {
  if (!import.meta.client) return;
  const body = document.body;
  
  if (!body.classList.contains("is-mobile") && body.classList.contains("tp-magic-cursor")) {
    // Wrap magnetic items
    const magneticItems = document.querySelectorAll<HTMLElement>(".tp-magnetic-item");
    magneticItems.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.className = "tp-magnetic-wrap";
      item.parentNode?.insertBefore(wrapper, item);
      wrapper.appendChild(item);
      
      if (item.tagName === "A") {
        item.classList.add("not-hide-cursor");
      }
    });

    const $mouse: { x: number; y: number } = { x: 0, y: 0 };
    const $pos: { x: number; y: number } = { x: 0, y: 0 };
    const $ratio = 0.15;
    let $active = false;
    const $ball = document.getElementById("ball");

    if (!$ball) return;

    const $ballWidth = 14;
    const $ballHeight = 14;
    const $ballScale = 1;
    const $ballOpacity = 1;
    const $ballBorderWidth = 1;

    gsap.set($ball, {
      xPercent: -50,
      yPercent: -50,
      width: $ballWidth,
      height: $ballHeight,
      borderWidth: $ballBorderWidth,
      opacity: $ballOpacity
    });

    document.addEventListener("mousemove", mouseMove);

    function mouseMove(e: MouseEvent): void {
      $mouse.x = e.clientX;
      $mouse.y = e.clientY;
    }

    gsap.ticker.add(updatePosition);

    function updatePosition(): void {
      if (!$active) {
        $pos.x += ($mouse.x - $pos.x) * $ratio;
        $pos.y += ($mouse.y - $pos.y) * $ratio;
        gsap.set($ball, { x: $pos.x, y: $pos.y });
      }
    }

    // Magnetic wrap event listeners
    const magneticWraps = document.querySelectorAll<HTMLElement>(".tp-magnetic-wrap");
    magneticWraps.forEach((wrap) => {
      wrap.addEventListener("mousemove", function(e: MouseEvent) {
        parallaxCursor(e, this, 2);
        callParallax(e, this);
      });

      wrap.addEventListener("mouseenter", function() {
        gsap.to($ball, { duration: 0.3, scale: 2, borderWidth: 1, opacity: $ballOpacity });
        $active = true;
      });

      wrap.addEventListener("mouseleave", function() {
        gsap.to($ball, { duration: 0.3, scale: $ballScale, borderWidth: $ballBorderWidth, opacity: $ballOpacity });
        const magneticItem = this.querySelector<HTMLElement>(".tp-magnetic-item");
        if (magneticItem) {
          gsap.to(magneticItem, { duration: 0.3, x: 0, y: 0, clearProps: "all" });
        }
        $active = false;
      });
    });

    function callParallax(e: MouseEvent, parent: HTMLElement): void {
      const target = parent.querySelector<HTMLElement>(".tp-magnetic-item");
      if (target) {
        parallaxIt(e, parent, target, 25);
      }
    }

    function parallaxIt(e: MouseEvent, parent: HTMLElement, target: HTMLElement, movement: number): void {
      const boundingRect = parent.getBoundingClientRect();
      const relX = e.clientX - boundingRect.left;
      const relY = e.clientY - boundingRect.top;

      gsap.to(target, {
        duration: 0.3,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
        ease: Power2.easeOut
      });
    }

    function parallaxCursor(e: MouseEvent, parent: HTMLElement, movement: number): void {
      const rect = parent.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
      $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
      gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
    }

    // Cursor view on hover
    function myFunction(color = '#fff'): void {
      const cursorElements = document.querySelectorAll<HTMLElement>("[data-cursor]");
      cursorElements.forEach((element) => {
        element.addEventListener("mouseenter", function() {
          const ball = document.getElementById("ball");
          if (!ball) return;
          
          ball.classList.add("with-blur");
          
          const ballView = document.createElement("div");
          ballView.className = "ball-view";
          
          // Fix: Use innerHTML to properly render HTML content
          const cursorText = this.getAttribute("data-cursor") || "";
          ballView.innerHTML = cursorText;
          ball.appendChild(ballView);
          
          gsap.to(ball, {
            duration: 0.3,
            xPercent: is_rtl() ? 50 : -50,
            yPercent: -60,
            width: 110,
            height: 110,
            opacity: 1,
            borderWidth: 0,
            zIndex: 1,
            backdropFilter: "blur(14px)",
            backgroundColor: color,
          });
          gsap.to(".ball-view", { duration: 0.3, scale: 1, autoAlpha: 1 });
        });

        element.addEventListener("mouseleave", function() {
          const ball = document.getElementById("ball");
          if (!ball) return;
          
          gsap.to(ball, {
            duration: 0.3,
            yPercent: -50,
            width: $ballWidth,
            height: $ballHeight,
            opacity: $ballOpacity,
            borderWidth: $ballBorderWidth,
            backgroundColor: "#000"
          });
          gsap.to(".ball-view", { duration: 0.3, scale: 0, autoAlpha: 0, clearProps: "all" });
          
          const ballView = ball.querySelector(".ball-view");
          if (ballView) {
            ballView.remove();
          }
        });

        element.classList.add("not-hide-cursor");
      });
    }

    if (document.querySelector('.cursor-bg-red')) {
      myFunction('#FF535B');
    }
    if (document.querySelector('.cursor-bg-red-2')) {
      myFunction('#FF481F');
    }
    if (document.querySelector('.cursor-white-bg')) {
      myFunction('#FFF');
    }
    if (document.querySelector('.cursor-bg-yellow')) {
      myFunction('#FFF669');
    }

    // Hide on hover
    const interactiveElements = document.querySelectorAll<HTMLElement>("a, button");
    interactiveElements.forEach((element) => {
      if (!element.classList.contains('cursor-hide')) {
        element.addEventListener("mouseenter", function() {
          gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
        });

        element.addEventListener("mouseleave", function() {
          gsap.to($ball, { duration: 0.3, scale: $ballScale, opacity: $ballOpacity });
        });
      }
    });

    // Hide on click
    const links = document.querySelectorAll<HTMLAnchorElement>("a");
    links.forEach((link) => {
      const shouldHide = 
        link.getAttribute("target") !== "_blank" &&
        !link.classList.contains('cursor-hide') &&
        !link.getAttribute("href")?.startsWith("#") &&
        !link.getAttribute("href")?.startsWith("mailto") &&
        !link.getAttribute("href")?.startsWith("tel") &&
        !link.classList.contains("lg-trigger") &&
        !link.closest(".tp-btn-disabled");

      if (shouldHide) {
        link.addEventListener("click", function() {
          gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
        });
      }
    });

    // Show/hide on document leave/enter
    document.addEventListener("mouseleave", function() {
      const magicCursor = document.getElementById("magic-cursor");
      if (magicCursor) {
        gsap.to(magicCursor, { duration: 0.3, autoAlpha: 0 });
      }
    });

    document.addEventListener("mouseenter", function() {
      const magicCursor = document.getElementById("magic-cursor");
      if (magicCursor) {
        gsap.to(magicCursor, { duration: 0.3, autoAlpha: 1 });
      }
    });

    // Show as the mouse moves
    document.addEventListener("mousemove", function() {
      const magicCursor = document.getElementById("magic-cursor");
      if (magicCursor) {
        gsap.to(magicCursor, { duration: 0.3, autoAlpha: 1 });
      }
    });
  }

  function is_rtl(): boolean {
    return document.documentElement.getAttribute('dir') === 'rtl';
  }
}