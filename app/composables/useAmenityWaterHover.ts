import type {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Texture,
  WebGLRenderer,
} from "three";

const WATER_DISPLACEMENT_IMAGE = "/img/webgl/1.jpg";
const WATER_TRANSITION_MS = 720;

export function useAmenityWaterHover() {
  const waterHoverRoot = ref<HTMLElement | null>(null);

  let renderer: WebGLRenderer | null = null;
  let scene: Scene | null = null;
  let camera: OrthographicCamera | null = null;
  let geometry: PlaneGeometry | null = null;
  let material: ShaderMaterial | null = null;
  let mesh: Mesh | null = null;
  let displacementTexture: Texture | null = null;
  let placeholderTexture: Texture | null = null;
  let amenityTexture: Texture | null = null;
  let activeMedia: HTMLElement | null = null;
  let activeItem: HTMLElement | null = null;
  let resizeObserver: ResizeObserver | null = null;
  let preloadObserver: IntersectionObserver | null = null;
  let frameId = 0;
  let progress = 0;
  let preparation: Promise<void> | null = null;
  let disposed = false;

  const vertexShader = `
    varying vec2 prestigeAmenUv;

    void main() {
      prestigeAmenUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 prestigeAmenUv;

    uniform sampler2D prestigeAmenImageOne;
    uniform sampler2D prestigeAmenImageTwo;
    uniform sampler2D prestigeAmenDisplacement;
    uniform vec2 prestigeAmenViewport;
    uniform vec2 prestigeAmenImageSize;
    uniform float prestigeAmenProgress;
    uniform float prestigeAmenIntensity;

    vec2 prestigeAmenCoverUv(vec2 uv) {
      float viewportRatio = prestigeAmenViewport.x / prestigeAmenViewport.y;
      float imageRatio = prestigeAmenImageSize.x / prestigeAmenImageSize.y;
      vec2 scale = vec2(1.0);

      if (viewportRatio > imageRatio) {
        scale.y = imageRatio / viewportRatio;
      } else {
        scale.x = viewportRatio / imageRatio;
      }

      return (uv - 0.5) * scale + 0.5;
    }

    void main() {
      vec2 coverUv = prestigeAmenCoverUv(prestigeAmenUv);
      vec2 flow = texture2D(prestigeAmenDisplacement, prestigeAmenUv).rg - 0.5;
      vec2 firstUv = coverUv + flow * prestigeAmenIntensity * prestigeAmenProgress;
      vec2 secondUv = coverUv - flow * prestigeAmenIntensity * (1.0 - prestigeAmenProgress);
      vec4 firstImage = texture2D(prestigeAmenImageOne, firstUv);
      vec4 secondImage = texture2D(prestigeAmenImageTwo, secondUv);

      gl_FragColor = mix(firstImage, secondImage, prestigeAmenProgress);
    }
  `;

  function updateRendererSize() {
    if (!renderer || !material || !activeMedia) return;

    const width = Math.max(1, activeMedia.clientWidth);
    const height = Math.max(1, activeMedia.clientHeight);
    renderer.setSize(width, height, false);
    material.uniforms.prestigeAmenViewport!.value.set(width, height);
    renderer.render(scene!, camera!);
  }

  async function prepareEffect() {
    if (preparation) return preparation;

    preparation = (async () => {
      const THREE = await import("three");
      if (disposed) return;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.domElement.className = "prestige-amen__water-canvas";
      renderer.domElement.setAttribute("aria-hidden", "true");

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
      camera.position.z = 1;
      geometry = new THREE.PlaneGeometry(2, 2);

      const loadedDisplacement = await new Promise<Texture>((resolve, reject) => {
        new THREE.TextureLoader().load(WATER_DISPLACEMENT_IMAGE, resolve, undefined, reject);
      });
      if (disposed) {
        loadedDisplacement.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
        return;
      }

      displacementTexture = loadedDisplacement;
      displacementTexture.minFilter = THREE.LinearFilter;
      displacementTexture.magFilter = THREE.LinearFilter;

      placeholderTexture = new THREE.Texture();
      material = new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          prestigeAmenImageOne: { value: placeholderTexture },
          prestigeAmenImageTwo: { value: placeholderTexture },
          prestigeAmenDisplacement: { value: displacementTexture },
          prestigeAmenViewport: { value: new THREE.Vector2(1, 1) },
          prestigeAmenImageSize: { value: new THREE.Vector2(1, 1) },
          prestigeAmenProgress: { value: 0 },
          prestigeAmenIntensity: { value: 0.18 },
        },
        vertexShader,
        fragmentShader,
      });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    })().catch((error) => {
      renderer?.dispose();
      renderer?.forceContextLoss();
      renderer?.domElement.remove();
      renderer = null;
      preparation = null;
      console.warn("Amenities water effect could not be initialized:", error);
    });

    return preparation;
  }

  function stopAnimation() {
    if (!frameId) return;
    window.cancelAnimationFrame(frameId);
    frameId = 0;
  }

  function animateTo(target: number, onComplete?: () => void) {
    if (!renderer || !material || !scene || !camera) {
      onComplete?.();
      return;
    }

    stopAnimation();
    const start = progress;
    const startedAt = performance.now();

    const renderFrame = (now: number) => {
      const elapsed = Math.min(1, (now - startedAt) / WATER_TRANSITION_MS);
      const eased = elapsed === 1 ? 1 : 1 - 2 ** (-10 * elapsed);
      progress = start + (target - start) * eased;
      material!.uniforms.prestigeAmenProgress!.value = progress;
      renderer!.render(scene!, camera!);

      if (elapsed < 1) {
        frameId = window.requestAnimationFrame(renderFrame);
      } else {
        frameId = 0;
        onComplete?.();
      }
    };

    frameId = window.requestAnimationFrame(renderFrame);
  }

  function resetMedia(media: HTMLElement | null) {
    if (!media || activeMedia !== media) return;

    resizeObserver?.disconnect();
    resizeObserver = null;
    media.classList.remove("prestige-amen__media--water-active");
    renderer?.domElement.remove();
    activeMedia = null;
  }

  async function activateItem(item: HTMLElement) {
    const media = item.querySelector<HTMLElement>(".prestige-amen__media");
    const image = media?.querySelector<HTMLImageElement>(".prestige-amen__image");
    if (!media || !image) return;

    if (!image.complete || image.naturalWidth === 0) {
      try {
        await image.decode();
      } catch {
        return;
      }
    }

    await prepareEffect();
    if (disposed || activeItem !== item || !renderer || !material) return;

    const THREE = await import("three");
    amenityTexture?.dispose();
    amenityTexture = new THREE.Texture(image);
    amenityTexture.colorSpace = THREE.SRGBColorSpace;
    amenityTexture.minFilter = THREE.LinearFilter;
    amenityTexture.magFilter = THREE.LinearFilter;
    amenityTexture.needsUpdate = true;

    material.uniforms.prestigeAmenImageOne!.value = amenityTexture;
    material.uniforms.prestigeAmenImageTwo!.value = amenityTexture;
    material.uniforms.prestigeAmenImageSize!.value.set(image.naturalWidth, image.naturalHeight);
    progress = 0;
    material.uniforms.prestigeAmenProgress!.value = 0;

    activeMedia?.classList.remove("prestige-amen__media--water-active");
    activeMedia = media;
    activeMedia.classList.add("prestige-amen__media--water-active");
    activeMedia.appendChild(renderer.domElement);

    resizeObserver?.disconnect();
    resizeObserver = new ResizeObserver(updateRendererSize);
    resizeObserver.observe(activeMedia);
    updateRendererSize();
    animateTo(1);
  }

  function handlePointerOver(event: PointerEvent) {
    if (event.pointerType !== "mouse" || !(event.target instanceof Element)) return;

    const root = waterHoverRoot.value;
    const item = event.target.closest<HTMLElement>(".prestige-amen__item");
    if (!root || !item || !root.contains(item) || item.contains(event.relatedTarget as Node | null)) return;

    activeItem = item;
    void activateItem(item);
  }

  function handlePointerOut(event: PointerEvent) {
    if (!(event.target instanceof Element)) return;

    const item = event.target.closest<HTMLElement>(".prestige-amen__item");
    if (!item || item.contains(event.relatedTarget as Node | null) || activeItem !== item) return;

    activeItem = null;
    const exitingMedia = activeMedia;
    animateTo(0, () => resetMedia(exitingMedia));
  }

  onMounted(() => {
    const root = waterHoverRoot.value;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!root || !canHover || reduceMotion) return;

    root.addEventListener("pointerover", handlePointerOver, { passive: true });
    root.addEventListener("pointerout", handlePointerOut, { passive: true });

    preloadObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        void prepareEffect();
      },
      { rootMargin: "160px" },
    );
    preloadObserver.observe(root);
  });

  onBeforeUnmount(() => {
    disposed = true;
    const root = waterHoverRoot.value;
    root?.removeEventListener("pointerover", handlePointerOver);
    root?.removeEventListener("pointerout", handlePointerOut);

    stopAnimation();
    preloadObserver?.disconnect();
    resizeObserver?.disconnect();
    activeMedia?.classList.remove("prestige-amen__media--water-active");
    amenityTexture?.dispose();
    placeholderTexture?.dispose();
    displacementTexture?.dispose();
    material?.dispose();
    geometry?.dispose();
    renderer?.dispose();
    renderer?.forceContextLoss();
    renderer?.domElement.remove();
    if (scene && mesh) scene.remove(mesh);
  });

  return { waterHoverRoot };
}
