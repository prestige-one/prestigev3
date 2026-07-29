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
            >
              <template #actions>
                <nuxt-link to="/projects" class="prestige-btn">View developments</nuxt-link>
                <nuxt-link to="/contact-us" class="prestige-btn prestige-btn--ghost">Get in touch</nuxt-link>
              </template>
            </prestige-page-hero>

            <prestige-stat-band :stats="stats" />

            <prestige-feature-split
              eyebrow="Our Story"
              title="A new benchmark for luxury living"
              image="/assets/images/v3/Built-on-Trust.webp"
              :paragraphs="storyParagraphs"
              :points="storyPoints"
            />

            <prestige-feature-split
              eyebrow="Our Approach"
              title="Homes designed for real living"
              image="/assets/images/v3/Designed-for-Real-Living.webp"
              :paragraphs="approachParagraphs"
              :points="approachPoints"
              reverse
            />

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

            <prestige-cta-band
              eyebrow="Discover the portfolio"
              title="Come and see what we build"
              text="Explore our collection of residential and commercial landmarks across Dubai's most sought-after destinations, or speak with our team about what's coming next."
              image="/assets/images/v3/A-Global-Perspective.webp"
              primary-label="View developments"
              primary-to="/projects"
              secondary-label="Contact us"
              secondary-to="/contact-us"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
interface StatItem {
  value: string;
  label: string;
}

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

const stats: StatItem[] = [
  { value: "18+", label: "Developments" },
  { value: "9", label: "Destinations" },
  { value: "3", label: "Countries" },
  { value: "25+", label: "Years of expertise" },
];

const storyParagraphs: string[] = [
  "Prestige One is a Dubai-based luxury real-estate developer redefining what premium living should feel like. As part of a group with more than two decades of experience across construction, hospitality and real estate, we bring an uncommon depth of expertise to every address we create.",
  "Our developments are shaped by an obsession with detail — from the way light moves through a living space to the calibre of the amenities and the service that surrounds residents every day. Each project is conceived as a landmark, designed to hold its value and elevate the neighbourhood around it.",
  "That ambition is reflected in the company we keep. Through partnerships with globally recognised names such as Hilton and the storied Parisian maison FAUCHON, we blend world-class hospitality and heritage craftsmanship into homes that are unmistakably Dubai and unmistakably ours.",
];

const storyPoints: string[] = [
  "Backed by a diversified group with a 25-year track record",
  "Branded residences with Hilton and FAUCHON Paris",
  "A growing portfolio across Dubai's prime destinations",
];

const approachParagraphs: string[] = [
  "We start with how people actually live. Before a single line is drawn, we study the site, the light and the daily rhythm of the neighbourhood — then design around comfort, wellbeing and the quiet moments that make a house a home.",
  "Quality is never negotiable. We partner with leading architects, interior designers and contractors, and we hold every material, finish and fit-out to a single uncompromising standard. The result is homes that feel considered on the first day and endure for decades.",
  "And we stay long after handover. Thoughtful management, hospitality-grade service and genuinely useful amenities mean residents don't just own a Prestige One home — they love living in it.",
];

const approachPoints: string[] = [
  "Human-centred design led by daily rhythms, not floor-plan efficiency",
  "Best-in-class architects, designers and contractors on every project",
  "Hospitality-grade service and management after handover",
  "Amenities curated around wellbeing and everyday convenience",
];

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
</style>
