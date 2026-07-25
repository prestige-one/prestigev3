
import gsap from "gsap";

export function slidePrevTransitionStart(): void {
  // Find all pagination bullets inside .tp-slider-dot
  const bullets = Array.from(document.querySelectorAll<HTMLElement>(".tp-slider-dot .swiper-pagination-bullet"));

  bullets.forEach((bullet) => {
    // If this bullet is NOT active, run the trigger logic (matches original logic)
    if (!bullet.classList.contains("swiper-pagination-bullet-active")) {
      // Process both active and duplicate-active slides under #trigger-slides
      const container = document.getElementById("trigger-slides");
      if (!container) return;

      const selectors = [".swiper-slide-active", ".swiper-slide-duplicate-active"];
      selectors.forEach((sel) => {
        const slides = Array.from(container.querySelectorAll<HTMLElement>(sel));
        slides.forEach((slide) => {
          // find the first div inside the slide (equivalent to .find('div').first())
          const firstDiv = slide.querySelector<HTMLDivElement>("div");
          if (firstDiv && !firstDiv.classList.contains("active")) {
            // trigger click if not active
            (firstDiv as HTMLDivElement).click();
          }
        });
      });
    }
  });
}

export function slideNextTransitionStart(): void {
  // The original functions were identical — replicate same behavior without 
  const bullets = Array.from(document.querySelectorAll<HTMLElement>(".tp-slider-dot .swiper-pagination-bullet"));

  bullets.forEach((bullet) => {
    if (!bullet.classList.contains("swiper-pagination-bullet-active")) {
      const container = document.getElementById("trigger-slides");
      if (!container) return;

      const selectors = [".swiper-slide-active", ".swiper-slide-duplicate-active"];
      selectors.forEach((sel) => {
        const slides = Array.from(container.querySelectorAll<HTMLElement>(sel));
        slides.forEach((slide) => {
          const firstDiv = slide.querySelector<HTMLDivElement>("div");
          if (firstDiv && !firstDiv.classList.contains("active")) {
            (firstDiv as HTMLDivElement).click();
          }
        });
      });
    }
  });
}

export function verTextFragment() {
  const vertex =
    "varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );	}";
  const fragment = `
		varying vec2 vUv;
	
		uniform sampler2D currentImage;
		uniform sampler2D nextImage;
		uniform sampler2D disp;
		uniform float dispFactor;
		uniform float effectFactor;
		uniform vec4 resolution;
	
		void main() {
	
			vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	
			vec4 disp = texture2D(disp, uv);
			vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
			vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
			vec4 _currentImage = texture2D(currentImage, distortedPosition);
			vec4 _nextImage = texture2D(nextImage, distortedPosition2);
			vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
	
			gl_FragColor = finalTexture; }`;

  return { vertex, fragment };
}

interface WebGLContext {
  isRunning: boolean;
  material: {
    uniforms: {
      nextImage: {
        value: unknown;
        needsUpdate: boolean;
      };
      currentImage: {
        value: unknown;
        needsUpdate: boolean;
      };
      dispFactor: {
        value: number;
      };
    };
  };
  textures: unknown[];
}

export function addEvents(webGL: WebGLContext): void {
  const triggerSlidesContainer = document.getElementById("trigger-slides");
  if (!triggerSlidesContainer) return;

  const triggerSlide: HTMLElement[] = Array.from(
    triggerSlidesContainer.querySelectorAll<HTMLElement>(".slide-wrap")
  );

  webGL.isRunning = false;

  triggerSlide.forEach((el: HTMLElement) => {
    el.addEventListener("click", () => {
      if (!webGL.isRunning) {
        webGL.isRunning = true;

        // Remove "active" class from any existing active element inside #trigger-slides
        const activeElements = triggerSlidesContainer.querySelectorAll<HTMLElement>(".active");
        if (activeElements && activeElements.length > 0) {
          // clear classes (matching original behavior)
          activeElements.forEach((ae) => (ae.className = ""));
        }

        // set clicked element to active
        el.className = "active";

        const slideId = parseInt(el.dataset.slide || "0", 10);

        webGL.material.uniforms.nextImage.value = webGL.textures[slideId];
        webGL.material.uniforms.nextImage.needsUpdate = true;

        gsap.to(webGL.material.uniforms.dispFactor, {
          duration: 1,
          value: 1,
          ease: "Sine.easeInOut",
          onComplete: () => {
            webGL.material.uniforms.currentImage.value = webGL.textures[slideId];
            webGL.material.uniforms.currentImage.needsUpdate = true;
            webGL.material.uniforms.dispFactor.value = 0.0;
            webGL.isRunning = false;
          },
        });
      }
    });
  });
}
