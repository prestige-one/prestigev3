// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  Renderer,
  Program,
  Mesh,
  Vec2,
  Texture,
  Flowmap,
  Plane
} from "./distortion-img-depend";


export function distortionImg() {
    const vertex = `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = vec4(position, 0.0, .45);
        }
    `;

    const fragment = `
        precision highp float;
        uniform sampler2D tImage;
        uniform sampler2D tFlow;
        varying vec2 vUv;

        void main() {
            vec3 flow = texture2D(tFlow, vUv).rgb;
            vec2 uv = vUv;
            uv += (flow.rg * flow.b * 50.0);
            vec3 tex = texture2D(tImage, uv).rgb;
            gl_FragColor.rgb = tex;
            gl_FragColor.a = 1.0;
        }
    `;

    const background = document.querySelector(".tp-image-distortion");
    // If the element doesn't exist, exit the function
    if (!background) return;

    // Read image source from data attribute
    const imageSrc = background.getAttribute("data-background");
    if (!imageSrc) {
      console.warn("[distortionImg] Missing data-background attribute on .tp-image-distortion element.");
      return;
    }

    const renderer = new Renderer();
    const gl = renderer.gl;
    background.appendChild(gl.canvas);

    const mouse = new Vec2(0.5);
    const lastMouse = new Vec2(0.5);
    const velocity = new Vec2();
    let aspect = 1;

    function resize() {
      const rect = background.getBoundingClientRect();
      aspect = rect.width / rect.height;
      gl.canvas.width = rect.width;
      gl.canvas.height = rect.height;
      renderer.setSize(rect.width, rect.height);
    }

    window.addEventListener("resize", resize, false);
    resize();

    const flowmap = new Flowmap(gl, { falloff: 0.3, dissipation: 0.95, size: 1000 });

    const geometry = new Plane(gl);

    const texture = new Texture(gl);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      texture.image = img;
      texture.minFilter = gl.LINEAR;
      texture.magFilter = gl.LINEAR;
      texture.wrapS = gl.CLAMP_TO_EDGE;
      texture.wrapT = gl.CLAMP_TO_EDGE;
      animationFrameId = requestAnimationFrame(update);
    };
    img.onerror = (event) => {
      console.error("[distortionImg] Failed to load image:", imageSrc, event);
      if (gl.canvas.parentNode === background) {
        background.removeChild(gl.canvas);
      }
      window.removeEventListener("resize", resize, false);
      background.removeEventListener("mousemove", updateMouse, false);
      background.removeEventListener("touchmove", onTouchMove, false);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
    img.src = imageSrc;  // <-- Here we use the data-background attribute

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        tImage: { value: texture },
        tFlow: flowmap.uniform
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    function updateMouse(event) {
      const rect = background.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      mouse.set(x, y);
    }

    background.addEventListener("mousemove", updateMouse, false);
    function onTouchMove(event: TouchEvent) {
      if (event.touches.length > 0) updateMouse(event.touches[0]);
    }
    background.addEventListener("touchmove", onTouchMove, false);

    const spring = 0.04;
    const friction = 0.8;
    const springVel = new Vec2();

    let animationFrameId = 0;

    function update() {
      springVel.copy(mouse).sub(lastMouse).multiply(spring);
      velocity.add(springVel).multiply(friction);
      lastMouse.add(velocity);

      flowmap.mouse.copy(lastMouse);
      flowmap.velocity.copy(velocity);
      flowmap.aspect = aspect;

      flowmap.update();
      renderer.render({ scene: mesh });
      animationFrameId = requestAnimationFrame(update);
    }
}