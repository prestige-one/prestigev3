import * as THREE from "three";


export default class WebGL {
  private scene: THREE.Scene;
  private vertex: string;
  private fragment: string;
  private uniforms: { [uniform: string]: THREE.IUniform };
  private renderer: THREE.WebGLRenderer;
  private width: number;
  private height: number;
  private container: HTMLElement;
  private images: HTMLImageElement[];
  private camera: THREE.PerspectiveCamera;
  private current: number;
  private textures: THREE.Texture[];
  private isRunning: boolean;
  private paused: boolean;
  private material!: THREE.ShaderMaterial;
  private geometry!: THREE.PlaneGeometry;
  private plane!: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private imageAspect!: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(e: any) {
    this.scene = new THREE.Scene();
    this.vertex =
      "varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}";
    this.material = e.material ?? ({} as THREE.ShaderMaterial);
    this.fragment = e.fragment;
    this.uniforms = e.uniforms;

    this.renderer = new THREE.WebGLRenderer();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x232626, 1); // 2303786 decimal converted

    const container = document.getElementById("canvas-slider");
    if (!container) throw new Error("Canvas container not found");
    this.container = container;

    this.images = Array.from(
      document.querySelectorAll<HTMLImageElement>(".slide-img")
    );

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    this.camera.position.set(0, 0, 2);

    this.current = 0;
    this.textures = [];
    this.isRunning = false;
    this.paused = true;

    this.initiate(() => {
      this.setupResize();
      this.addObjects();
      this.resize();
      this.play();
    });
  }

  private initiate(callback: () => void): void {
    const promises: Promise<void>[] = [];
    this.images.forEach((img, s) => {
      const p = new Promise<void>((resolve) => {
        this.textures[s] = new THREE.TextureLoader().load(img.src, () =>
          resolve()
        );
      });
      promises.push(p);
    });
    Promise.all(promises).then(callback);
  }

  private setupResize(): void {
    window.addEventListener("resize", this.resize.bind(this));
  }

  private resize(): void {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    if (this.textures[0]?.image) {
      this.imageAspect =
        (this.textures[0].image as HTMLImageElement).height /
        (this.textures[0].image as HTMLImageElement).width;

      let e: number, t: number;
      if (this.height / this.width > this.imageAspect) {
        e = (this.width / this.height) * this.imageAspect;
        t = 1;
      } else {
        e = 1;
        t = this.height / this.width / this.imageAspect;
      }

      if (
        this.material.uniforms.resolution &&
        this.material.uniforms.resolution.value
      ) {
        this.material.uniforms.resolution.value.x = this.width;
        this.material.uniforms.resolution.value.y = this.height;
        this.material.uniforms.resolution.value.z = e;
        this.material.uniforms.resolution.value.w = t;
      }
    }

    const i = this.camera.position.z;
    this.camera.fov = (180 / Math.PI) * 2 * Math.atan(1 / (2 * i));
    this.camera.updateProjectionMatrix();

    if (this.plane) {
      this.plane.scale.x = this.camera.aspect;
      this.plane.scale.y = 1;
    }
  }

  private addObjects(): void {
    const showcaseEl = document.getElementById("showcase-slider-holder");
    const patternSrc = showcaseEl?.getAttribute("data-pattern-img");

    if (!patternSrc) {
      throw new Error("Pattern image not found");
    }

    const dispTex = new THREE.TextureLoader().load(patternSrc);
    dispTex.wrapS = dispTex.wrapT = THREE.RepeatWrapping;

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        effectFactor: { value: 0.15 },
        dispFactor: { value: 0 },
        currentImage: { value: this.textures[0] },
        nextImage: { value: this.textures[1] },
        disp: { value: dispTex },
        resolution: { value: new THREE.Vector4() },
      },
      vertexShader: this.vertex,
      fragmentShader: this.fragment,
      transparent: true,
      opacity: 1,
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  public stop(): void {
    this.paused = true;
  }

  public play(): void {
    this.paused = false;
    this.render();
  }

  private render(): void {
    if (!this.paused) {
      requestAnimationFrame(this.render.bind(this));
      this.renderer.render(this.scene, this.camera);
    }
  }
}
