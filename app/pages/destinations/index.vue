<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Our Destinations"
              title="Prime locations"
              lead="Prestige One builds where life is best lived - the waterfronts, communities and landmarks that define Dubai and beyond."
              image="/assets/images/v2/our-destinations/palm-jumeira.webp"
            />

            <prestige-stat-band :stats="portfolioStats" />

            <prestige-feature-split
              eyebrow="Why location matters"
              title="We build where Dubai lives best"
              image="/assets/images/v2/locations/downtown-dubai.webp"
              :paragraphs="[
                'A home is only ever as good as the life around it. That belief guides every acquisition we make - before we design a single floor plate, we ask whether a location can carry a community for decades, not just a launch weekend.',
                'From the beaches of Dubai Islands to the lagoons of Mohammed Bin Rashid City and the fairways of Dubai Sports City, each Prestige One address is chosen for how it connects to schools, retail, work and the water - the everyday things that make a place worth returning to.',
              ]"
              :points="[
                'Waterfront, community and landmark destinations across Dubai',
                'Minutes from the metro, Sheikh Zayed Road and the airport',
                'Locations selected for long-term liveability and value',
                'Neighbourhoods with schools, retail and leisure at hand',
              ]"
            />

            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div
                    v-for="dest in destinations"
                    :key="dest.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-50 tp_fade_anim"
                    data-delay=".2"
                  >
                    <nuxt-link :to="`/destinations/${dest.slug}`" class="prestige-dest-card">
                      <div class="prestige-dest-card__media">
                        <img :src="dest.image" :alt="dest.name" loading="lazy">
                        <div class="prestige-dest-card__veil" />
                        <div class="prestige-dest-card__body">
                          <span class="prestige-dest-card__region">{{ dest.region }}</span>
                          <h3 class="prestige-dest-card__name">{{ dest.name }}</h3>
                          <span class="prestige-dest-card__count">{{ countFor(dest) }}</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </section>

            <prestige-cta-band
              eyebrow="Find your address"
              title="Not sure where to begin?"
              text="Tell us how you want to live and our team will point you to the destinations - and the developments - that fit. From first investment to forever home."
              image="/assets/images/v2/locations/Meydan.webp"
              primary-label="Speak to our team"
              primary-to="/contact-us"
              secondary-label="View all developments"
              secondary-to="/projects"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { destinations, getProjectsForDestination, type Destination } from "~/data/destinations-data";
import { getAllProjects } from "~/data/projects";

definePageMeta({ layout: false });
useSeoMeta({
  title: "Our Destinations | Prestige One",
  description:
    "Explore the Dubai waterfronts, communities and landmarks where Prestige One builds - from Palm Jumeirah to Dubai Islands.",
});

function countFor(dest: Destination) {
  const n = getProjectsForDestination(dest).length;
  return n === 1 ? "1 development" : `${n} developments`;
}

const portfolioStats: { value: string; label: string; col?: string }[] = [
  { value: `${destinations.length}`, label: "Destinations", col: "col-lg-2 col-md-6" },
  { value: `${getAllProjects().length}`, label: "Developments", col: "col-lg-3 col-md-6" },
  { value: "AED 500M+", label: "Committed investment", col: "col-lg-4 col-md-6" },
  { value: "100%", label: "Escrow-protected", col: "col-lg-3 col-md-6" },
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-dest-card {
  display: block;
  color: #fff;
}
.prestige-dest-card__media {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 6px;
  background: #101013;
}
.prestige-dest-card__media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-dest-card:hover .prestige-dest-card__media img {
  transform: scale(1.07);
}
.prestige-dest-card__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.85) 100%);
}
.prestige-dest-card__body {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 26px;
  z-index: 2;
}
.prestige-dest-card__region {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}
.prestige-dest-card__name {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 30px;
  font-weight: 400;
  color: #fff;
  margin: 6px 0 8px;
  line-height: 1.15;
}
.prestige-dest-card__count {
  font-size: 13px;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.65);
}
</style>
