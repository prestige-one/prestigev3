import { mount, type VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import HeroPrestige from "../../app/components/hero/hero-prestige.vue";

let wrapper: VueWrapper | undefined;

beforeEach(() => {
  vi.useFakeTimers();
  vi.spyOn(document, "readyState", "get").mockReturnValue("complete");
  vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {});
  vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
  vi.spyOn(window, "matchMedia").mockReturnValue({ matches: false } as MediaQueryList);
});

afterEach(() => {
  wrapper?.unmount();
  wrapper = undefined;
  vi.clearAllTimers();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

function mountHero(frameCallbackSupported = true) {
  wrapper = mount(HeroPrestige, { global: { mocks: { $t: (key: string) => key } } });
  const video = wrapper.get("video").element as HTMLVideoElement;
  let frameCallback: VideoFrameRequestCallback | undefined;
  const requestFrame = vi.fn((callback: VideoFrameRequestCallback) => {
    frameCallback = callback;
    return 42;
  });
  const cancelFrame = vi.fn();
  Object.defineProperties(video, {
    paused: { configurable: true, value: false },
    ended: { configurable: true, value: false },
    readyState: { configurable: true, value: 2 },
    requestVideoFrameCallback: { configurable: true, value: frameCallbackSupported ? requestFrame : undefined },
    cancelVideoFrameCallback: { configurable: true, value: cancelFrame },
  });
  return {
    wrapper,
    video,
    requestFrame,
    cancelFrame,
    presentFrame: async () => {
      frameCallback?.(0, {} as VideoFrameCallbackMetadata);
      await nextTick();
    },
  };
}

describe("homepage video cover", () => {
  it("keeps the original media and deferred loading while displaying the cover", async () => {
    const { wrapper, video } = mountHero();
    const cover = wrapper.get(".prestige-hero-cover");
    expect(cover.attributes("src")).toBe("/assets/images/v3/prestige-hero-video-cover.webp");
    expect(cover.attributes("src")).toBe(video.getAttribute("poster"));
    expect(cover.attributes("fetchpriority")).toBe("high");
    expect(cover.attributes("aria-hidden")).toBe("true");
    expect(video.getAttribute("preload")).toBe("none");
    expect(wrapper.find("source").exists()).toBe(false);
    await vi.advanceTimersByTimeAsync(449);
    expect(wrapper.find("source").exists()).toBe(false);
    await vi.advanceTimersByTimeAsync(1);
    expect(wrapper.get("source").attributes("src")).toBe("/assets/videos/prestige-hero-video-v3.mp4");
    expect(video.load).toHaveBeenCalledOnce();
    expect(video.play).toHaveBeenCalledOnce();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
  });

  it("waits for a presented frame, fades once, and removes the image after the transition", async () => {
    const { wrapper, requestFrame, presentFrame } = mountHero();
    await wrapper.get("video").trigger("playing");
    expect(requestFrame).toHaveBeenCalledOnce();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
    await presentFrame();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(true);
    await wrapper.get(".prestige-hero-cover").trigger("transitionend", { propertyName: "transform" });
    expect(wrapper.find(".prestige-hero-cover").exists()).toBe(true);
    await wrapper.get(".prestige-hero-cover").trigger("transitionend", { propertyName: "opacity" });
    expect(wrapper.find(".prestige-hero-cover").exists()).toBe(false);
    await wrapper.get("video").trigger("waiting");
    await wrapper.get("video").trigger("playing");
    expect(requestFrame).toHaveBeenCalledOnce();
    expect(wrapper.find(".prestige-hero-cover").exists()).toBe(false);
  });

  it("does not reveal on load, canplay, or a play request alone", async () => {
    const { wrapper, requestFrame } = mountHero();
    for (const event of ["loadeddata", "canplay", "play"]) await wrapper.get("video").trigger(event);
    expect(requestFrame).not.toHaveBeenCalled();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
  });

  it("retains the cover when autoplay is blocked and allows a later successful start", async () => {
    vi.mocked(HTMLMediaElement.prototype.play).mockRejectedValue(new DOMException("Blocked", "NotAllowedError"));
    const { wrapper, presentFrame } = mountHero();
    await vi.advanceTimersByTimeAsync(450);
    expect(wrapper.find(".prestige-hero-cover").exists()).toBe(true);
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
    await wrapper.get("video").trigger("playing");
    await presentFrame();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(true);
  });

  it.each(["waiting", "pause", "error"])("cancels a pending reveal on %s and retries on playback", async (event) => {
    const { wrapper, cancelFrame, requestFrame, presentFrame } = mountHero();
    await wrapper.get("video").trigger("playing");
    await wrapper.get("video").trigger(event);
    expect(cancelFrame).toHaveBeenCalledWith(42);
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
    await wrapper.get("video").trigger("playing");
    expect(requestFrame).toHaveBeenCalledTimes(2);
    await presentFrame();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(true);
  });

  it("ignores duplicate playing events while waiting for the first frame", async () => {
    const { wrapper, requestFrame } = mountHero();
    await wrapper.get("video").trigger("playing");
    await wrapper.get("video").trigger("playing");
    expect(requestFrame).toHaveBeenCalledOnce();
  });

  it.each([
    { property: "paused", value: true },
    { property: "ended", value: true },
    { property: "readyState", value: 1 },
  ])("does not reveal if $property changes before presentation", async ({ property, value }) => {
    const { wrapper, video, presentFrame } = mountHero();
    await wrapper.get("video").trigger("playing");
    Object.defineProperty(video, property, { configurable: true, value });
    await presentFrame();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
  });

  it("uses a paint-based fallback when video frame callbacks are unavailable", async () => {
    const { wrapper, requestFrame } = mountHero(false);
    await wrapper.get("video").trigger("playing");
    vi.advanceTimersToNextFrame();
    await nextTick();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
    vi.advanceTimersToNextFrame();
    await nextTick();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(true);
    expect(requestFrame).not.toHaveBeenCalled();
  });

  it("cancels the fallback if playback pauses before the frame is displayed", async () => {
    const { wrapper } = mountHero(false);
    await wrapper.get("video").trigger("playing");
    vi.advanceTimersToNextFrame();
    await wrapper.get("video").trigger("pause");
    vi.advanceTimersToNextFrame();
    await nextTick();
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
  });

  it("skips the animated fade for reduced motion, but still waits for a frame", async () => {
    vi.mocked(window.matchMedia).mockReturnValue({ matches: true } as MediaQueryList);
    const { wrapper, presentFrame } = mountHero();
    await wrapper.get("video").trigger("playing");
    expect(wrapper.find(".prestige-hero-cover").exists()).toBe(true);
    await presentFrame();
    expect(wrapper.find(".prestige-hero-cover").exists()).toBe(false);
  });

  it("restores the cover on a later media error", async () => {
    const { wrapper, presentFrame } = mountHero();
    await wrapper.get("video").trigger("playing");
    await presentFrame();
    await wrapper.get(".prestige-hero-cover").trigger("transitionend", { propertyName: "opacity" });
    await wrapper.get("video").trigger("error");
    expect(wrapper.find(".prestige-hero-cover").exists()).toBe(true);
    expect(wrapper.find(".prestige-hero-cover--revealed").exists()).toBe(false);
  });

  it("cancels pending video callbacks and deferred loading when unmounted", async () => {
    const { wrapper, video, cancelFrame } = mountHero();
    await wrapper.get("video").trigger("playing");
    wrapper.unmount();
    await vi.advanceTimersByTimeAsync(500);
    expect(cancelFrame).toHaveBeenCalledWith(42);
    expect(video.load).not.toHaveBeenCalled();
    expect(video.play).not.toHaveBeenCalled();
  });

  it("removes the page-load listener if unmounted before the page finishes loading", async () => {
    vi.spyOn(document, "readyState", "get").mockReturnValue("loading");
    const { wrapper, video } = mountHero();
    wrapper.unmount();
    window.dispatchEvent(new Event("load"));
    await vi.advanceTimersByTimeAsync(500);
    expect(video.play).not.toHaveBeenCalled();
  });

  it("cancels a pending paint fallback when unmounted", async () => {
    const cancel = vi.spyOn(window, "cancelAnimationFrame");
    const { wrapper } = mountHero(false);
    await wrapper.get("video").trigger("playing");
    wrapper.unmount();
    expect(cancel).toHaveBeenCalledOnce();
  });
});
