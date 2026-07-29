<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main v-if="dest" class="prestige-page">
            <prestige-page-hero
              :eyebrow="dest.region"
              :title="dest.name"
              :lead="dest.intro"
              :image="dest.image"
            >
              <template #actions>
                <span class="prestige-detail__badge">{{ areaProjects.length ? developmentsBadge : "New addresses coming" }}</span>
                <nuxt-link to="/contact-us" class="prestige-btn">Enquire now</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- about the destination -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-7 col-lg-7 mb-40">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">The area</span>
                    <div class="prestige-prose tp_fade_anim" data-delay=".3">
                      <p v-for="(para, i) in dest.description" :key="i">{{ para }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4 offset-xl-1 col-lg-5">
                    <ul class="prestige-dest-highlights tp_fade_anim" data-delay=".4">
                      <li v-for="(h, i) in dest.highlights" :key="i">
                        <span class="prestige-dest-highlights__dot" />{{ h }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- lifestyle & connectivity -->
            <prestige-feature-split
              eyebrow="Life here"
              :title="`Living in ${dest.name}`"
              :image="lifestyleImage"
              :paragraphs="lifestyleParagraphs"
              :points="dest.highlights"
              reverse
            />

            <!-- projects in this destination -->
            <section v-if="areaProjects.length" class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Developments here</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">
                  Prestige One in {{ dest.name }}
                </h2>
                <div class="row">
                  <div
                    v-for="project in areaProjects"
                    :key="project.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-project-card :project="project" />
                  </div>
                </div>
              </div>
            </section>

            <section v-else class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <div class="row align-items-center">
                  <div class="col-xl-6 col-lg-6 mb-40">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">On the horizon</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      Coming soon to {{ dest.name }}
                    </h2>
                    <div class="prestige-prose tp_fade_anim" data-delay=".4" style="margin-top: 22px;">
                      <p>{{ dest.name }} is a destination we watch closely. As the community matures, Prestige One is actively exploring addresses that do justice to its setting — designed to the same standard of location, architecture and lasting value that defines everything we build.</p>
                      <p>Register your interest today and you will be among the first to hear when a new development launches here, ahead of the wider market.</p>
                    </div>
                    <nuxt-link to="/contact-us" class="prestige-btn mt-20 tp_fade_anim" data-delay=".5">Register interest</nuxt-link>
                  </div>
                  <div class="col-xl-5 offset-xl-1 col-lg-6">
                    <div class="prestige-dest-still tp_fade_anim" data-delay=".3">
                      <img :src="lifestyleImage" :alt="dest.name" loading="lazy">
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- FAQ -->
            <prestige-faq-accordion
              eyebrow="Good to know"
              :title="`About ${dest.name}`"
              :items="faqs"
            />

            <!-- CTA -->
            <prestige-cta-band
              eyebrow="Your next address"
              :title="`Make ${dest.name} home`"
              :text="`Speak to our team about living in ${dest.name} — availability, pricing and the developments best suited to how you want to live.`"
              :image="dest.image"
              primary-label="Enquire now"
              primary-to="/contact-us"
              secondary-label="Explore all destinations"
              secondary-to="/destinations"
            />

            <prestige-contact-form />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getDestinationBySlug, getProjectsForDestination } from "~/data/destinations-data";
import type { FaqItem } from "~/components/prestige/faq-accordion.vue";

definePageMeta({ layout: false });

const route = useRoute();
const dest = computed(() => getDestinationBySlug(String(route.params.slug)));

if (!dest.value) {
  throw createError({ statusCode: 404, statusMessage: "Destination not found", fatal: true });
}

const areaProjects = computed(() => (dest.value ? getProjectsForDestination(dest.value) : []));

const developmentsBadge = computed(() => {
  const n = areaProjects.value.length;
  return n === 1 ? "1 development" : `${n} developments`;
});

// A second, ground-level image for each area so the lifestyle split and the
// empty-state still feel place-specific. Falls back to the hero image.
const LOC = "/assets/images/v2/locations";
const lifestyleImages: Record<string, string> = {
  "dubai-islands": `${LOC}/DUBAI-ISLANDS-MARINA-1024x768-1.webp`,
  "mohammed-bin-rashid-city": `${LOC}/Meydan-Racecourse-scaled.webp`,
  "dubai-sports-city": `${LOC}/CRICKET-STA-1024x768-1.webp`,
  "jumeirah-village-circle": `${LOC}/circle-mall.webp`,
  "palm-jumeirah": `${LOC}/palm-jumeirah.webp`,
  "barsha-heights": `${LOC}/al-sufouh-1024x768-1.webp`,
  "dubai-maritime-city": `${LOC}/Souk-Al-Marfa-scaled.webp`,
  dlrc: `${LOC}/dubai-hills-mall-1024x768-1.webp`,
  "jumeirah-garden-city": `${LOC}/city-walk-1024x768-1.webp`,
  "majan-city": `${LOC}/Dubai-Miracle-Garden.webp`,
};

const lifestyleImage = computed(() =>
  dest.value ? (lifestyleImages[dest.value.slug] ?? dest.value.image) : "",
);

const lifestyleParagraphs = computed<string[]>(() => {
  const d = dest.value;
  if (!d) return [];
  const setting = (d.region.split("·")[0] ?? "").trim().toLowerCase() || "connected";
  return [
    `Day to day, ${d.name} is defined by its ${setting} character — a rhythm of life that Prestige One designs around rather than against. ${d.description[0]}`,
    `The result is a place that works in every direction: ${d.highlights.map((h) => h.toLowerCase()).join(", ")}. It is the kind of location that rewards you long after the keys are handed over, holding both its appeal and its value.`,
  ];
});

const faqs = computed<FaqItem[]>(() => {
  const d = dest.value;
  if (!d) return [];
  const region = (d.region.split("·")[0] ?? "").trim() || "Dubai";
  const items: FaqItem[] = [
    {
      q: `What makes ${d.name} a good place to live?`,
      a: `${d.description[0]} In short, expect ${d.highlights.slice(0, 3).map((h) => h.toLowerCase()).join(", ")} — the ingredients of a community you can settle into for the long term.`,
    },
    {
      q: `Is ${d.name} well connected?`,
      a: `Yes. As a ${region.toLowerCase()} address, ${d.name} offers quick access across the city, with major road links, retail and everyday amenities close at hand — one of the reasons Prestige One chooses to build here.`,
    },
    {
      q: `Does Prestige One have developments in ${d.name}?`,
      a: areaProjects.value.length
        ? `Yes — there ${areaProjects.value.length === 1 ? "is 1 Prestige One development" : `are ${areaProjects.value.length} Prestige One developments`} in ${d.name}: ${areaProjects.value.map((p) => p.title.split(" by ")[0]).join(", ")}. Register your interest for availability and pricing.`
        : `New Prestige One addresses are being planned for ${d.name}. Register your interest to be the first to hear when a development launches here.`,
    },
    {
      q: `Is ${d.name} a good choice for investment?`,
      a: `Dubai's fundamentals — no annual property tax, strong rental demand and robust escrow protections — apply across the emirate, and a well-located address like ${d.name} is exactly where those fundamentals tend to reward buyers most. Our team can talk you through the numbers.`,
    },
  ];
  return items;
});

useSeoMeta({
  title: () => `${dest.value?.name} | Prestige One Destinations`,
  description: () => dest.value?.intro,
  ogImage: () => dest.value?.image,
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-dest-highlights {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-dest-highlights li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.82);
}
.prestige-dest-highlights__dot {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--tp-common-gold, #d9b382);
}
.prestige-detail__badge {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
}
.prestige-dest-still {
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4 / 3;
  background: #101013;
}
.prestige-dest-still img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-dest-still:hover img { transform: scale(1.05); }
</style>
