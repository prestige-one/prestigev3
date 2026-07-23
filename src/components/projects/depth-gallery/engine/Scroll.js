// Adapted from https://github.com/houmahani/codrops-depth-gallery (MIT)
// Snaps one plane per wheel notch / swipe instead of free continuous
// scrolling, so the camera always settles fully on one project instead of
// resting half-blended between two.
import * as THREE from "three";

class Scroll {
  constructor(camera, gallery, target) {
    this.isInitialized = false;
    this.camera = camera;
    this.gallery = gallery;
    this.target = target;

    // Scroll state (scrollCurrent eases toward scrollTarget every frame,
    // producing the animated slide between snapped positions)
    this.scrollTarget = 0;
    this.scrollCurrent = 0;
    this.scrollSmoothing = 0.045;
    this.scrollToWorldFactor = 0.01;
    this.previousScrollCurrent = 0;
    this.invertScroll = false;

    // Snapping
    this.currentPlaneIndex = 0;
    this.snapCooldownMs = 1500;
    this.lastSnapTime = -Infinity;
    this.touchStartY = 0;
    this.touchAccumulatedDelta = 0;
    this.touchSwipeThreshold = 40;

    // Velocity (still used to drive the background's motion response)
    this.rawVelocity = 0;
    this.velocity = 0;
    this.velocityDamping = 0.12;
    this.velocityMax = 1.5;
    this.velocityStopThreshold = 0.0001;

    // Bounds
    this.useScrollBounds = true;
    this.firstPlaneViewOffset = 5;
    this.lastPlaneViewOffset = 5;
    this.minCameraZ = -Infinity;
    this.maxCameraZ = Infinity;
    this.cameraStartZ = this.camera.position.z;

    this.onWheel = (event) => {
      event.preventDefault();
      if (!this.canSnap()) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      this.stepToPlane(direction);
    };
    this.onTouchStart = (event) => {
      this.touchStartY = event.touches[0]?.clientY ?? 0;
      this.touchAccumulatedDelta = 0;
    };
    this.onTouchMove = (event) => {
      event.preventDefault();
      const currentTouchY = event.touches[0]?.clientY ?? this.touchStartY;
      this.touchAccumulatedDelta = this.touchStartY - currentTouchY;

      if (!this.canSnap()) return;
      if (Math.abs(this.touchAccumulatedDelta) < this.touchSwipeThreshold) return;

      const direction = this.touchAccumulatedDelta > 0 ? 1 : -1;
      this.stepToPlane(direction);
      this.touchStartY = currentTouchY;
      this.touchAccumulatedDelta = 0;
    };
  }

  init() {
    if (this.isInitialized) return;

    this.updateCameraBounds();
    this.cameraStartZ = this.maxCameraZ;
    this.camera.position.z = this.cameraStartZ;
    this.currentPlaneIndex = 0;
    this.scrollTarget = 0;
    this.scrollCurrent = 0;
    this.previousScrollCurrent = this.scrollCurrent;
    this.rawVelocity = 0;
    this.velocity = 0;

    this.isInitialized = true;
  }

  bindEvents() {
    const target = this.target || window;
    target.addEventListener("wheel", this.onWheel, { passive: false });
    target.addEventListener("touchstart", this.onTouchStart, { passive: true });
    target.addEventListener("touchmove", this.onTouchMove, { passive: false });
  }

  canSnap() {
    return performance.now() - this.lastSnapTime >= this.snapCooldownMs;
  }

  stepToPlane(direction) {
    const planeCount = this.gallery.planes.length;
    if (!planeCount) return;

    const scrollDirection = this.invertScroll ? -direction : direction;
    const nextIndex = THREE.MathUtils.clamp(this.currentPlaneIndex + scrollDirection, 0, planeCount - 1);
    if (nextIndex === this.currentPlaneIndex) return;

    this.currentPlaneIndex = nextIndex;
    this.lastSnapTime = performance.now();
    this.scrollTarget = this.scrollFromCameraZ(this.gallery.getCameraZForPlaneIndex(nextIndex));
  }

  updateCameraBounds() {
    const depthRange = this.gallery.getDepthRange();
    this.maxCameraZ = depthRange.nearestZ + this.firstPlaneViewOffset;
    this.minCameraZ = depthRange.deepestZ + this.lastPlaneViewOffset;

    if (this.minCameraZ > this.maxCameraZ) {
      this.minCameraZ = this.maxCameraZ;
    }
  }

  cameraZFromScroll(scrollAmount) {
    return this.cameraStartZ - scrollAmount * this.scrollToWorldFactor;
  }

  scrollFromCameraZ(cameraZ) {
    if (this.scrollToWorldFactor === 0) return 0;
    return (this.cameraStartZ - cameraZ) / this.scrollToWorldFactor;
  }

  updateVelocity() {
    this.rawVelocity = this.scrollCurrent - this.previousScrollCurrent;
    this.velocity = THREE.MathUtils.lerp(this.velocity, this.rawVelocity, this.velocityDamping);
    this.velocity = THREE.MathUtils.clamp(this.velocity, -this.velocityMax, this.velocityMax);

    if (Math.abs(this.velocity) < this.velocityStopThreshold) {
      this.velocity = 0;
    }

    this.previousScrollCurrent = this.scrollCurrent;
  }

  update() {
    this.updateCameraBounds();
    this.scrollCurrent = THREE.MathUtils.lerp(this.scrollCurrent, this.scrollTarget, this.scrollSmoothing);

    if (this.useScrollBounds) {
      const minimumScroll = this.scrollFromCameraZ(this.maxCameraZ);
      const maximumScroll = this.scrollFromCameraZ(this.minCameraZ);

      this.scrollTarget = THREE.MathUtils.clamp(this.scrollTarget, minimumScroll, maximumScroll);
      this.scrollCurrent = THREE.MathUtils.clamp(this.scrollCurrent, minimumScroll, maximumScroll);
    }

    this.updateVelocity();

    const nextCameraZ = this.cameraZFromScroll(this.scrollCurrent);
    if (this.useScrollBounds) {
      this.camera.position.z = THREE.MathUtils.clamp(nextCameraZ, this.minCameraZ, this.maxCameraZ);
      return;
    }

    this.camera.position.z = nextCameraZ;
  }

  dispose() {
    const target = this.target || window;
    target.removeEventListener("wheel", this.onWheel);
    target.removeEventListener("touchstart", this.onTouchStart);
    target.removeEventListener("touchmove", this.onTouchMove);
  }
}

export { Scroll };
