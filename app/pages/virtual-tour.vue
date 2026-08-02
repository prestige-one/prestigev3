<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('mdata.tour.heroEyebrow')"
              :title="t('mdata.tour.heroTitle')"
              :lead="t('mdata.tour.heroLead')"
              image="/assets/project-featured-images/sliders/hilton-1.webp"
            >
              <template #actions>
                <nuxt-link :to="localePath('/contact-us')" class="prestige-btn">{{ t('mdata.common.bookPrivateViewing') }}</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- intro prose -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('mdata.tour.introEyebrow') }}</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      {{ t('mdata.tour.introTitle') }}
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p v-for="(para, i) in introParas" :key="i">{{ para }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- video tour grid -->
            <section class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <div class="row">
                  <div
                    v-for="tour in tours"
                    :key="tour.slug"
                    class="col-xl-6 col-lg-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <NuxtLink :to="localePath(tour.link)" class="prestige-tour">
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
                        <span class="prestige-tour__loc">{{ tour.location }}</span>
                        <span class="prestige-tour__name">{{ tour.name }}</span>
                        <span class="prestige-tour__cta">{{ t('mdata.common.takeTheTour') }}</span>
                      </span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </section>

            <prestige-feature-split
              :eyebrow="t('mdata.tour.whyEyebrow')"
              :title="t('mdata.tour.whyTitle')"
              image="/assets/project-featured-images/sliders/sanctuary.webp"
              :paragraphs="whyParagraphs"
              :points="whyPoints"
            />

            <prestige-cta-band
              :eyebrow="t('mdata.tour.ctaEyebrow')"
              :title="t('mdata.tour.ctaTitle')"
              :text="t('mdata.tour.ctaText')"
              image="/assets/project-featured-images/sliders/fauchon.webp"
              :primary-label="t('mdata.common.bookViewing')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="t('mdata.common.viewAllProjects')"
              :secondary-to="localePath('/projects')"
            />
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
  location: string;
  slug: string;
  video: string;
  link: string;
}

const { t, tm, rt } = useI18n();
const localePath = useLocalePath();

definePageMeta({ layout: false });
useSeoMeta({
  title: "Virtual Tour | Prestige One",
  description:
    "Explore Prestige One's landmark Dubai residences through immersive virtual video tours - Hilton, FAUCHON, Sanctuary, Berkeley and Coastal.",
});

const strList = (key: string): string[] =>
  (tm(key) as unknown[]).map((m) => rt(m as string));

const introParas = computed(() => strList("mdata.tour.introParas"));

const tours: Tour[] = [
  {
    name: "Hilton Residences",
    location: "Dubai Maritime City",
    slug: "hilton",
    video: "/assets/images/v2/project-features-videos/v3/Hilton.mp4",
    link: "/projects/hilton-residences-dubai-maritime-city",
  },
  {
    name: "FAUCHON Résidences",
    location: "Dubai",
    slug: "fauchon",
    video: "/assets/images/v2/project-features-videos/v3/Fauchon-v3.mp4",
    link: "/projects/fauchon-residences-by-prestige-one",
  },
  {
    name: "Sanctuary Residences",
    location: "Meydan",
    slug: "sanctuary",
    video: "/assets/images/v2/project-features-videos/v3/Sanctuary.mp4",
    link: "/projects/sanctuary-residences-by-prestige-one",
  },
  {
    name: "Berkeley Square North",
    location: "Jumeirah Village Circle",
    slug: "berkeley",
    video: "/assets/images/v2/project-features-videos/v3/Berkeley.mp4",
    link: "/projects/berkeley-square-north",
  },
  {
    name: "Coastal Haven",
    location: "Dubai Islands",
    slug: "coastal",
    video: "/assets/images/v2/project-features-videos/v3/Coastal.mp4",
    link: "/projects/coastal-haven-by-prestige-one",
  },
];

const whyParagraphs = computed(() => strList("mdata.tour.whyParas"));
const whyPoints = computed(() => strList("mdata.tour.whyPoints"));

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
  gap: 8px;
}
.prestige-tour__loc {
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}
.prestige-tour__name {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  color: #fff;
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.1;
}
.prestige-tour__cta {
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
  transition: letter-spacing 0.3s ease;
}
.prestige-tour:hover .prestige-tour__cta {
  letter-spacing: 0.24em;
}
</style>
