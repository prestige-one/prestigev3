<template>
  <main ref="sliderRoot">
    <!-- project slider area start (same as portfolio-coverflow-slider-light) -->
    <div :class="['coverflow-slider-main', 'fix', { 'coverflow-slider-contained': contained }]">
      <div :class="contained ? 'container' : null">
        <div class="coverflow-slider-inner">
          <div class="coverflow-slider-wrap">
            <div class="swiper-container coverflow-slider-active fix">
              <div class="swiper-wrapper">
                <div v-for="item in loopSlides" :key="item.id" class="swiper-slide">
                  <div class="coverflow-slider-item">
                    <img :src="item.image" :alt="item.title">
                  </div>
                </div>
              </div>
            </div>
            <div class="coverflow-slider-edge-fade coverflow-slider-edge-fade-left" />
            <div class="coverflow-slider-edge-fade coverflow-slider-edge-fade-right" />
          </div>
          <div class="coverflow-slider-text-wrap">
            <div class="swiper-container coverflow-slider-text-active fix">
              <div class="swiper-wrapper">
                <div v-for="item in loopSlides" :key="item.id" class="swiper-slide">
                  <div class="coverflow-slider-item">
                    <div class="coverflow-slider-content text-center">
                      <h4 class="coverflow-slider-title-sm">
                        <NuxtLink class="tp-line-white" :to="item.href">
                          {{ item.title }}
                          <div class="coverflow-slider-location">[{{ item.location }}]</div>
                        </NuxtLink>
                      </h4>
                      <p class="coverflow-slider-description">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="coverflow-slider-arrow">
            <button class="coverflow-slider-prev pl-100">
              <span>
                <svg-arrow-slide-prev />
              </span>
              <span>Prev</span>
            </button>
            <button class="coverflow-slider-next pr-100">
              <span>Next</span>
              <span>
                <svg-arrow-slide-next />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- project slider area end -->
  </main>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import { Navigation, EffectCoverflow, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import type { DevelopmentSlide } from "../data/residential-developments-data";

const props = withDefaults(
  defineProps<{
    slides: DevelopmentSlide[];
    loop?: boolean;
    autoplay?: boolean;
    contained?: boolean;
  }>(),
  {
    loop: true,
    autoplay: true,
    contained: false,
  }
);

const sliderRoot = ref<HTMLElement | null>(null);

// Swiper's loop mode needs roughly twice as many slides as can be visible
// at once to loop reliably (the demo used 11 for the same reason) —
// duplicate the real project list enough times to clear that. Bumped up
// from 8 to cover ultra-wide viewports too: slide width is now a fixed
// px value (see .coverflow-slider-active .swiper-slide below) rather than
// container-width ÷ slidesPerView, so a very wide screen can fit more
// slides at once than the old 4-per-view cap ever allowed. Skipped
// entirely when loop is off (e.g. the commercial section only has 2 real
// projects, so it just shows those 2 as-is rather than padding them out).
const MIN_LOOP_SLIDES = 14;
const loopSlides = computed(() => {
  const base = props.slides;
  if (!props.loop) return base;
  const repeatCount = Math.max(2, Math.ceil(MIN_LOOP_SLIDES / base.length));
  return Array.from({ length: repeatCount })
    .flatMap(() => base)
    .map((item, index) => ({ ...item, id: index + 1 }));
});

onMounted(() => {
  // This component can appear more than once on a page (residential +
  // commercial development sliders), so every Swiper target is queried
  // from this instance's own root rather than a page-wide class selector
  // — otherwise Swiper would only ever find the first instance's markup.
  const root = sliderRoot.value;
  if (!root) return;

  const thumbEl = root.querySelector<HTMLElement>(".coverflow-slider-active");
  const textEl = root.querySelector<HTMLElement>(".coverflow-slider-text-active");
  const prevEl = root.querySelector<HTMLElement>(".coverflow-slider-prev");
  const nextEl = root.querySelector<HTMLElement>(".coverflow-slider-next");
  if (!thumbEl || !textEl || !prevEl || !nextEl) return;

  // main (image) swiper — no mousewheel interaction, autoplay only.
  // slidesPerView: "auto" makes Swiper size each slide from its own CSS
  // width (see .coverflow-slider-active .swiper-slide) instead of
  // dividing the container width by a slide count — that container-width
  // division was the reason a boxed slider (commercial/upcoming, narrower
  // "contained" container) and a full-bleed one (residential, full
  // viewport width) rendered different-sized slides even at the same
  // slidesPerView number. Fixed pixel widths make every slider's cards
  // the same size everywhere, independent of both slide count and
  // container width.
  const coverflowThumbSlider = new Swiper(thumbEl, {
    loop: props.loop,
    effect: "coverflow",
    modules: [Navigation, EffectCoverflow, Autoplay, Keyboard],
    speed: 1500,
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    autoplay: props.autoplay
      ? {
          delay: 2500,
          disableOnInteraction: false,
        }
      : false,
    navigation: {
      nextEl,
      prevEl,
    },
  });

  // text swiper — purely a follower, driven programmatically below.
  // (autoHeight was tried here so each slide sizes to its title +
  // location + description content, but combined with loop mode and this
  // absolutely-positioned wrapper it made Swiper miscompute slide height
  // as 6000px — a known-flaky combo. A fixed height sized generously for
  // the tallest caption is far more predictable.)
  const coverflowTextSlider = new Swiper(textEl, {
    modules: [Keyboard],
    spaceBetween: 30,
    slidesPerView: 1,
    direction: "vertical",
    loop: props.loop,
    allowTouchMove: false,
    speed: 1500,
  });

  // Sync the caption swiper to the image swiper's real (non-looped) index.
  // The Controller module keys its sync off scroll *progress*, which
  // diverges badly here because the two swipers have different
  // slidesPerView (image: 1-4 depending on breakpoint, text: always 1)
  // and therefore different loop-clone counts — that mismatch left the
  // caption stuck on whichever slide happened to sit under the initial
  // progress value. Driving it by realIndex instead stays correct at
  // every breakpoint.
  coverflowThumbSlider.on("slideChange", () => {
    if (props.loop) {
      coverflowTextSlider.slideToLoop(coverflowThumbSlider.realIndex, 1500);
    } else {
      coverflowTextSlider.slideTo(coverflowThumbSlider.activeIndex, 1500);
    }
  });
});
</script>

<style scoped>
.coverflow-slider-main {
  position: relative;
}

/* the theme's base .coverflow-slider-text-wrap is `position: absolute;
   bottom: 60px`, overlaid on top of the images — hard to read against a
   busy photo. Pulled into normal flow instead so the caption sits as its
   own block underneath the image row, never on top of it. */
.coverflow-slider-text-wrap {
  position: static;
  left: auto;
  bottom: auto;
  transform: none;
  margin-top: 40px;
}

/* contained variant (commercial) sits in a narrower box — a slightly
   tighter gap than the full-bleed residential slider reads better there. */
.coverflow-slider-contained .coverflow-slider-text-wrap {
  margin-top: 24px;
}

.coverflow-slider-inner {
  position: relative;
}

/* the base theme pads the image swiper itself by 100px top/bottom
   (_project-slider.scss .coverflow-slider-active { padding: 100px 0 }) —
   on top of the .coverflow-slider-wrap height trim above, that leftover
   padding was still the biggest single contributor to the gap before the
   caption. Cut down instead of removed outright so the coverflow's 3D
   tilt still has a little breathing room and doesn't clip. */
.coverflow-slider-active {
  padding: 20px 0;
}

/* fixed slide width for the image (thumb) swiper only — paired with
   slidesPerView: "auto" above, this is what makes every slide the same
   physical size regardless of slide count or whether the slider sits in
   a full-bleed or "contained" (boxed) section. Deliberately NOT applied
   to .coverflow-slider-text-active, which stays a single full-width
   vertical slide. Stepped by viewport width (not container width) so it
   stays consistent whether or not the slider is boxed. */
.coverflow-slider-active .swiper-slide {
  width: min(320px, 82vw);
}

@media (min-width: 600px) {
  .coverflow-slider-active .swiper-slide {
    width: 300px;
  }
}

@media (min-width: 991px) {
  .coverflow-slider-active .swiper-slide {
    width: 340px;
  }
}

@media (min-width: 1400px) {
  .coverflow-slider-active .swiper-slide {
    width: 400px;
  }
}

/* .coverflow-slider-item (the image box) is a fixed 500px tall in the
   base theme, but .coverflow-slider-wrap was a viewport-relative height
   (55vh) — on anything taller than a ~900px-tall viewport that's bigger
   than the 500px image it's centering, so the wrap's own box left dead
   space below the image before the caption even started. Matching the
   wrap's height to the image's exactly removes that empty space instead
   of trying to paper over it with a bigger margin below. Trimmed further
   (470 -> 380) to pull the caption closer under the image. */
.coverflow-slider-wrap {
  position: relative;
  height: 380px;
}

/* fades the coverflow's outermost slides into the page's solid black
   background (main.scss sets body { background-color: #000 }) instead of
   letting them hard-crop at the section edge — paired with the narrower
   max-width below (~5 slides' worth) so only 5 cards ever read as fully
   visible per side-trim request. */
.coverflow-slider-edge-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: min(320px, 24vw);
  /* Swiper's coverflow effect assigns each .swiper-slide its own inline
     z-index (highest at the center slide, stepping down outward) which
     can run well into the double digits with this many loop-cloned
     slides — a low z-index here just rendered underneath them. */
  z-index: 999;
  pointer-events: none;
}

/* solid for the outer half, only fading through the inner half — a fade
   starting at 0% opacity right away left the outermost sliver of the
   cropped 6th/7th slide still half-visible instead of fully hidden. */
.coverflow-slider-edge-fade-left {
  left: 0;
  background: linear-gradient(to right, #000 0%, #000 55%, rgba(0, 0, 0, 0) 100%);
}

.coverflow-slider-edge-fade-right {
  right: 0;
  background: linear-gradient(to left, #000 0%, #000 55%, rgba(0, 0, 0, 0) 100%);
}

/* caps how many coverflow cards can occupy the visible row at once —
   without this the swiper container spans the full viewport and, at
   ultra-wide widths, fits 6-7 slide-widths (main + 3 per side) with the
   outermost ones peeking in half-cropped. Narrowing to ~5 slide-widths
   removes 1 card's worth from each side; the edge-fade above then hides
   the now-closer clip point. */
@media (min-width: 991px) {
  .coverflow-slider-active {
    max-width: 1500px;
    margin: 0 auto;
  }
}

@media (min-width: 1400px) {
  .coverflow-slider-active {
    max-width: 1700px;
  }
}

.coverflow-slider-item {
  height: 340px;
}

/* object-fit: contain (the base theme's default crop behavior aside) left
   visible letterboxed bars — the item's own background — around any image
   whose aspect ratio didn't match the box, which read as a dark box edge
   against the section's gradient background. cover fills the box
   completely (trading a bit of edge-cropping for it) so no bg shows. */
.coverflow-slider-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.coverflow-slider-title-sm {
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0px;
  font-family: var(--tp-ff-body);
  font-weight: 600; 
}

.coverflow-slider-location {
  font-size: 0.5em;
  font-weight: 400; 
  letter-spacing: 0px;
  margin-top: 10px;
}

/* the theme's base .coverflow-slider-text-active is a fixed 100px tall,
   sized for a single line of title text — bumped up to fit the title +
   location line plus a 2-line description underneath. */
.coverflow-slider-text-active {
  height: 190px;
}

.coverflow-slider-content {
  max-width: 640px;
  margin: 0 auto;
  padding: 10px 20px;
}

.coverflow-slider-description {
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.5;
  color: rgb(255, 255, 255);
}

/* nav arrows moved from the bottom bar to vertically centered at the
   slider's left/right edges. Raised above the edge-fade overlays (z-index
   999) so Prev/Next stay visible instead of getting painted over by them. */
.coverflow-slider-arrow {
  top: 50%;
  bottom: auto;
  z-index: 1000;
  transform: translateY(-50%);
}
</style>
