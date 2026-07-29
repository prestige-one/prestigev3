<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="About Us"
              title="Built on Strong Principles"
              lead="Prestige One is a Dubai luxury developer redefining premium living — crafting landmark residences where architecture, service and lifestyle meet at the highest standard."
              image="/assets/images/v3/Built-on-Strong-Principles.webp"
            />

            <!-- our story -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Our Story</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      A new benchmark for luxury living
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p>
                        Prestige One is a Dubai-based luxury real-estate developer redefining what
                        premium living should feel like. As part of a group with decades of experience
                        across construction, hospitality and real estate, we bring an uncommon depth
                        of expertise to every address we create.
                      </p>
                      <p>
                        Our developments are shaped by an obsession with detail — from the way light
                        moves through a living space to the calibre of the amenities and the service
                        that surrounds residents every day. Each project is conceived as a landmark,
                        designed to hold its value and elevate the neighbourhood around it.
                      </p>
                      <p>
                        That ambition is reflected in the company we keep. Through partnerships with
                        globally recognised brands such as Hilton and FAUCHON, Prestige One blends
                        world-class hospitality and heritage craftsmanship into homes that are
                        unmistakably Dubai and unmistakably ours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- our values -->
            <section class="prestige-section prestige-section--tight prestige-about__values">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Our Values</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">
                  The principles behind every address
                </h2>
                <div class="row">
                  <div
                    v-for="value in coreValues"
                    :key="value.title"
                    class="col-xl-3 col-lg-3 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <div class="prestige-about__value">
                      <div class="prestige-about__value-media">
                        <img :src="value.image" :alt="value.title" loading="lazy">
                      </div>
                      <h3 class="prestige-about__value-title">{{ value.title }}</h3>
                      <p class="prestige-about__value-text">{{ value.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- closing CTA -->
            <section class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <div class="prestige-about__cta tp_fade_anim" data-delay=".2">
                  <h2 class="prestige-heading mb-30">Discover the portfolio</h2>
                  <p class="prestige-prose mb-40">
                    Explore our collection of residential and commercial landmarks across Dubai's
                    most sought-after destinations — or reach out to speak with our team.
                  </p>
                  <div class="prestige-about__cta-actions">
                    <NuxtLink to="/projects" class="prestige-btn">View Developments</NuxtLink>
                    <NuxtLink to="/contact-us" class="prestige-btn prestige-btn--ghost">Contact Us</NuxtLink>
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
interface CoreValue {
  title: string;
  text: string;
  image: string;
}

definePageMeta({ layout: false });
useSeoMeta({
  title: "About Us | Prestige One",
  description:
    "Prestige One is a Dubai luxury developer redefining premium living, with partnerships spanning globally recognised brands like Hilton and FAUCHON.",
});

const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    text: "Doing right by our residents, partners and communities in every decision we make.",
    image: "/assets/images/v2/pages/core-values/integrity.webp",
  },
  {
    title: "Quality",
    text: "An uncompromising standard of craftsmanship across design, materials and finish.",
    image: "/assets/images/v2/pages/core-values/quality.webp",
  },
  {
    title: "Innovation",
    text: "Reimagining how people live through forward-thinking design and technology.",
    image: "/assets/images/v2/pages/core-values/innovation.webp",
  },
  {
    title: "Sustainability",
    text: "Building responsibly for the long term, for both people and the planet.",
    image: "/assets/images/v2/pages/core-values/sustainability.webp",
  },
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-about__values {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-about__value-media {
  overflow: hidden;
  border-radius: 6px;
  aspect-ratio: 3 / 2;
  background: #101013;
  margin-bottom: 22px;
}
.prestige-about__value-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-about__value:hover .prestige-about__value-media img {
  transform: scale(1.05);
}
.prestige-about__value-title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 10px;
}
.prestige-about__value-text {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.68);
  margin: 0;
}
.prestige-about__cta {
  max-width: 720px;
}
.prestige-about__cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
</style>
