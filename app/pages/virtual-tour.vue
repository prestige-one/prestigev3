<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Experience"
              title="Virtual Tour"
              lead="Step inside our landmark residences from anywhere in the world. Explore each development through an immersive cinematic tour."
              image="/assets/project-featured-images/sliders/hilton-1.webp"
            />

            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div
                    v-for="tour in tours"
                    :key="tour.slug"
                    class="col-xl-6 col-lg-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <NuxtLink :to="tour.link" class="prestige-tour">
                      <video
                        :src="tour.video"
                        autoplay
                        muted
                        loop
                        playsinline
                        preload="metadata"
                      />
                      <span class="prestige-tour__veil" />
                      <span class="prestige-tour__body">
                        <span class="prestige-tour__name">{{ tour.name }}</span>
                        <span class="prestige-tour__cta">Take the tour</span>
                      </span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
interface Tour {
  name: string;
  slug: string;
  video: string;
  link: string;
}

definePageMeta({ layout: false });
useSeoMeta({
  title: "Virtual Tour | Prestige One",
  description:
    "Explore Prestige One's landmark Dubai residences through immersive virtual video tours — Hilton, FAUCHON, Sanctuary, Berkeley and Coastal.",
});

const tours: Tour[] = [
  {
    name: "Hilton Residences",
    slug: "hilton",
    video: "/assets/images/v2/project-features-videos/v3/Hilton.mp4",
    link: "/projects/hilton-residences-dubai-maritime-city",
  },
  {
    name: "FAUCHON Résidences",
    slug: "fauchon",
    video: "/assets/images/v2/project-features-videos/v3/Fauchon-v3.mp4",
    link: "/projects/fauchon-residences-by-prestige-one",
  },
  {
    name: "Sanctuary Residences",
    slug: "sanctuary",
    video: "/assets/images/v2/project-features-videos/v3/Sanctuary.mp4",
    link: "/projects/sanctuary-residences-by-prestige-one",
  },
  {
    name: "Berkeley Square North",
    slug: "berkeley",
    video: "/assets/images/v2/project-features-videos/v3/Berkeley.mp4",
    link: "/projects/berkeley-square-north",
  },
  {
    name: "Coastal Haven",
    slug: "coastal",
    video: "/assets/images/v2/project-features-videos/v3/Coastal.mp4",
    link: "/projects/coastal-haven-by-prestige-one",
  },
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-tour {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 16 / 10;
  background: #101013;
}
.prestige-tour video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-tour:hover video {
  transform: scale(1.06);
}
.prestige-tour__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.35) 55%,
    rgba(0, 0, 0, 0.85) 100%
  );
}
.prestige-tour__body {
  position: absolute;
  inset: auto 0 0 0;
  z-index: 2;
  padding: 34px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.prestige-tour__name {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  color: #fff;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.1;
}
.prestige-tour__cta {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #d9b382);
  transition: letter-spacing 0.3s ease;
}
.prestige-tour:hover .prestige-tour__cta {
  letter-spacing: 0.24em;
}
</style>
