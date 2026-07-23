// Adapted from https://github.com/houmahani/codrops-depth-gallery (MIT)
// Trimmed for production use: no debug/tweakpane panel, no FPS stats, no
// cursor-trail particles. The core depth-scroll gallery + mood background
// + project label overlay are kept intact.
import * as THREE from "three";
import { Experience } from "./Experience";
import { Scroll } from "./Scroll";

class Engine {
  constructor(canvas, { labelContainer, scrollTarget, onProgress } = {}) {
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error("Engine requires a valid canvas element");
    }

    this.canvas = canvas;
    this.labelContainer = labelContainer || null;
    this.onProgress = typeof onProgress === "function" ? onProgress : null;
    this.experience = new Experience();
    this.isInitialized = false;
    this.isRunning = false;
    this.animationFrameRequestId = null;
    this.preloadedTextures = new Map();
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.set(0, 0, 6);

    this.scroll = new Scroll(this.camera, this.experience.gallery, scrollTarget || canvas);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.autoClear = false;

    this.onResize = () => this.resize();
    this.animate = this.update.bind(this);
  }

  async init() {
    if (this.isInitialized) return;

    this.preloadedTextures = await this.preloadTextures();
    this.experience.gallery.setPreloadedTextures(this.preloadedTextures);

    await this.experience.init(this.scene, this.camera, this.labelContainer);
    this.scroll.init();

    this.resize();
    window.addEventListener("resize", this.onResize);
    this.scroll.bindEvents();

    this.isInitialized = true;
    this.start();
  }

  start() {
    if (!this.isInitialized || this.isRunning) return;

    this.isRunning = true;
    this.update();
  }

  resize() {
    const width = this.canvas.clientWidth || window.innerWidth || 1;
    const height = this.canvas.clientHeight || window.innerHeight || 1;
    if (width <= 0 || height <= 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.experience.gallery.updatePlaneScale();
    this.experience.gallery.layoutPlanes();
    this.experience.label.resize(width, height);
  }

  async preloadTextures() {
    const textureSources = this.experience.gallery.getTextureSources();
    if (!textureSources.length) return new Map();

    const textureLoader = new THREE.TextureLoader();
    const loadedTextures = new Map();
    let loadedCount = 0;

    await Promise.all(
      textureSources.map(async (textureSource) => {
        try {
          const texture = await textureLoader.loadAsync(textureSource);
          texture.colorSpace = THREE.SRGBColorSpace;
          loadedTextures.set(textureSource, texture);
        } catch (error) {
          console.warn(`Texture failed to load: ${textureSource}`, error);
        } finally {
          loadedCount += 1;
          this.onProgress?.(loadedCount / textureSources.length);
        }
      })
    );

    return loadedTextures;
  }

  update() {
    if (!this.isRunning) return;

    this.animationFrameRequestId = requestAnimationFrame(this.animate);

    const time = performance.now();

    this.scroll.update();
    this.experience.update(time, this.camera, this.scroll);

    this.renderer.clear(true, true, true);
    this.experience.background.render(this.renderer);
    this.renderer.clearDepth();
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.isRunning = false;

    if (this.animationFrameRequestId !== null) {
      cancelAnimationFrame(this.animationFrameRequestId);
      this.animationFrameRequestId = null;
    }

    window.removeEventListener("resize", this.onResize);
    this.scroll.dispose();

    this.preloadedTextures.forEach((texture) => texture.dispose());
    this.preloadedTextures.clear();

    this.experience.dispose();
    this.renderer.dispose();
  }
}

export { Engine };
