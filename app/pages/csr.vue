<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Our Commitment"
              title="Corporate Social Responsibility"
              lead="Building responsibly means looking beyond the buildings — to the communities we serve and the environment we share."
              image="/assets/images/v2/pages/core-values/sustainability.webp"
            />

            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Our Commitment</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      Development with purpose
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p>
                        At Prestige One, responsibility is built into everything we create. We believe
                        that great developments should give back — enriching the communities around
                        them and treading lightly on the environment they inhabit.
                      </p>
                      <p>
                        From energy-efficient design and considered material choices to spaces that
                        bring people together, our approach to sustainability is practical and
                        long-term. We hold ourselves to the same high standard in our social impact as
                        we do in our architecture, ensuring every project leaves a positive legacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- pillars -->
            <section class="prestige-section prestige-section--tight prestige-csr__pillars">
              <div class="container container-1430">
                <div class="row">
                  <div
                    v-for="(pillar, i) in pillars"
                    :key="pillar.title"
                    class="col-xl-4 col-lg-4 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <div class="prestige-csr__pillar">
                      <span class="prestige-csr__pillar-num">{{ String(i + 1).padStart(2, "0") }}</span>
                      <h3 class="prestige-csr__pillar-title">{{ pillar.title }}</h3>
                      <p class="prestige-csr__pillar-text">{{ pillar.text }}</p>
                    </div>
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
interface Pillar {
  title: string;
  text: string;
}

definePageMeta({ layout: false });
useSeoMeta({
  title: "Corporate Social Responsibility | Prestige One",
  description:
    "Prestige One's commitment to sustainable development, community and responsible building across every project we deliver.",
});

const pillars: Pillar[] = [
  {
    title: "Sustainability",
    text: "Energy-efficient design, responsible materials and a lower environmental footprint across the lifecycle of every development.",
  },
  {
    title: "Community",
    text: "Creating shared spaces and supporting local initiatives that bring people together and strengthen the neighbourhoods we build in.",
  },
  {
    title: "Responsible Building",
    text: "Uncompromising safety, ethical practices and lasting quality — building homes that stand the test of time.",
  },
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-csr__pillars {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-csr__pillar {
  padding-right: 14px;
}
.prestige-csr__pillar-num {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 34px;
  color: var(--tp-common-gold, #d9b382);
  margin-bottom: 14px;
}
.prestige-csr__pillar-title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  color: #fff;
  font-size: 26px;
  font-weight: 400;
  margin: 0 0 12px;
}
.prestige-csr__pillar-text {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}
</style>
