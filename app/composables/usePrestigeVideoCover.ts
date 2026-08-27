import { onBeforeUnmount, ref, type Ref } from "vue";

// One-shot cover reveal, shared by video heroes without per-frame polling.
export function usePrestigeVideoCover(videoRef: Ref<HTMLVideoElement | null>) {
  const coverMounted = ref(true);
  const videoRevealed = ref(false);
  let frameId: number | null = null;
  let animationId: number | null = null;
  let pendingVideo: HTMLVideoElement | null = null;
  let disposed = false;

  function cancelPendingReveal() {
    if (frameId !== null) pendingVideo?.cancelVideoFrameCallback(frameId);
    if (animationId !== null) cancelAnimationFrame(animationId);
    frameId = null;
    animationId = null;
    pendingVideo = null;
  }

  function reveal() {
    const video = videoRef.value;
    if (disposed || !video || video.paused || video.ended || video.readyState < 2) return;
    videoRevealed.value = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      coverMounted.value = false;
    }
  }

  function onPlaying() {
    const video = videoRef.value;
    if (disposed || !video || videoRevealed.value || frameId !== null || animationId !== null) return;

    if (typeof video.requestVideoFrameCallback === "function") {
      pendingVideo = video;
      frameId = video.requestVideoFrameCallback(() => {
        frameId = null;
        pendingVideo = null;
        reveal();
      });
    } else {
      // Older browsers: allow a paint after `playing`, then verify playback.
      animationId = requestAnimationFrame(() => {
        animationId = requestAnimationFrame(() => {
          animationId = null;
          reveal();
        });
      });
    }
  }

  function restoreCover() {
    cancelPendingReveal();
    if (disposed) return;
    coverMounted.value = true;
    videoRevealed.value = false;
  }

  function onCoverTransitionEnd(event: TransitionEvent) {
    if (event.target === event.currentTarget && event.propertyName === "opacity" && videoRevealed.value) {
      // Release the extra image layer after the one-time fade.
      coverMounted.value = false;
    }
  }

  onBeforeUnmount(() => {
    disposed = true;
    cancelPendingReveal();
  });

  return { coverMounted, videoRevealed, onPlaying, cancelPendingReveal, restoreCover, onCoverTransitionEnd };
}
