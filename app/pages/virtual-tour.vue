<!-- Data sources: i18n/locales/shared/en.json; page-specific media is inline in this file. -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <section class="prestige-virtual-map" aria-label="Prestige One developments map">
              <iframe
                frameborder="0"
                width="100%"
                height="1000"
                allow="fullscreen"
                class="prestige-virtual-map__frame allinone-iframe"
                data-lazy-src="https://investments-map.prod.resimo.io/prestige-one/dubai/?project=D_P10&amp;lang=en&amp;theme=dark"
                src="https://investments-map.prod.resimo.io/prestige-one/dubai/?project=D_P10&amp;lang=en&amp;theme=light"
                title="Prestige One developments across Dubai"
                loading="lazy"
              />
            </section>

            <prestige-cta-band
              :eyebrow="t('mdata.tour.ctaEyebrow')"
              :title="t('mdata.tour.ctaTitle')"
              :text="t('mdata.tour.ctaText')"
              image="/assets/images/v3/dubai-skyline-view.webp"
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
const { t } = useI18n();
const localePath = useLocalePath();

definePageMeta({ layout: false });
useSeoMeta({
  title: "Virtual Tour | Prestige One",
  description:
    "Explore Prestige One developments across Dubai through an interactive project map, then connect with our team for availability and private viewings.",
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-virtual-map {
  width: 100%;
  background: #0e0e12;
}

.prestige-virtual-map__frame {
  display: block;
  width: 100%;
  height: 1000px;
  border: 0;
}

@media (max-width: 767.98px) {
  .prestige-virtual-map__frame {
    height: 720px;
  }
}
</style>
