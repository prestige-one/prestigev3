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
              lead="Building responsibly means looking beyond the buildings - to the communities we serve and the environment we share."
              image="/assets/images/v2/pages/core-values/sustainability.webp"
            >
              <template #actions>
                <nuxt-link to="/about-us" class="prestige-btn">About Prestige One</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- intro prose -->
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
                        that great developments should give back - enriching the communities around
                        them and treading lightly on the environment they inhabit.
                      </p>
                      <p>
                        From energy-efficient design and considered material choices to public realm
                        that genuinely brings people together, our approach is practical, measurable
                        and long-term. We hold ourselves to the same high standard in our social and
                        environmental impact as we do in our architecture, so that every project leaves
                        a positive legacy well beyond handover.
                      </p>
                      <p>
                        Our commitment is organised around three pillars: sustainability, community and
                        responsible building. Together they shape how we choose sites, how we design,
                        how we build and how we operate the places we deliver.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- three pillars as feature-splits -->
            <prestige-feature-split
              eyebrow="Pillar 01"
              title="Sustainability"
              image="/assets/images/v2/pages/core-values/sustainability.webp"
              :paragraphs="sustainabilityParagraphs"
              :points="sustainabilityPoints"
            />

            <prestige-feature-split
              eyebrow="Pillar 02"
              title="Community"
              image="/assets/images/v2/locations/city-walk-1024x768-1.webp"
              :paragraphs="communityParagraphs"
              :points="communityPoints"
              reverse
            />

            <prestige-feature-split
              eyebrow="Pillar 03"
              title="Responsible Building"
              image="/assets/images/v3/Built-on-Trust.webp"
              :paragraphs="responsibleParagraphs"
              :points="responsiblePoints"
            />

            <prestige-stat-band :stats="stats" />

            <prestige-cta-band
              eyebrow="Build with purpose"
              title="A partner that gives back"
              text="Learn more about the principles behind Prestige One, or talk to our team about the values that shape every home we deliver."
              image="/assets/images/v3/A-Global-Perspective.webp"
              primary-label="About Prestige One"
              primary-to="/about-us"
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

definePageMeta({ layout: false });
useSeoMeta({
  title: "Corporate Social Responsibility | Prestige One",
  description:
    "Prestige One's commitment to sustainable development, community and responsible building across every project we deliver.",
});

const sustainabilityParagraphs: string[] = [
  "Sustainability at Prestige One starts at the drawing board. We design for the climate we build in - orienting buildings to reduce solar gain, specifying high-performance glazing and insulation, and choosing efficient systems that cut energy and water use over the whole life of a development.",
  "We favour responsibly sourced materials, design out waste on site, and integrate landscaping and shade that lower the urban heat around our buildings. The goal is simple: homes that cost less to run, last longer, and place a lighter demand on the resources of the city.",
];

const sustainabilityPoints: string[] = [
  "Energy-efficient design, glazing and building systems",
  "Responsibly sourced, durable materials",
  "Water-wise landscaping and reduced heat island effect",
  "Construction practices that design out waste",
];

const communityParagraphs: string[] = [
  "A building is only as good as the life that happens around it. We design generous shared spaces - landscaped courtyards, walkable ground floors, gathering areas and amenities - that turn residents into neighbours and developments into genuine communities.",
  "Beyond our own sites, we invest in the neighbourhoods we build in and support local initiatives that improve everyday life. We prioritise local partners and talent, and we design public realm that stays open, active and welcoming long after the last home is sold.",
];

const communityPoints: string[] = [
  "Generous shared and public spaces in every scheme",
  "Support for local initiatives and neighbourhood life",
  "Local partners, suppliers and talent prioritised",
  "Walkable, welcoming ground floors and courtyards",
];

const responsibleParagraphs: string[] = [
  "Responsible building means uncompromising standards where it matters most - safety, ethics and lasting quality. We hold our contractors to strict health-and-safety practices, fair labour standards and transparent conduct on every site we run.",
  "That discipline carries through to the finished home. Rigorous quality control, honest specifications and thorough handover checks mean the residence you buy is the residence you receive - built to endure, and backed by a developer that stands behind its work.",
];

const responsiblePoints: string[] = [
  "Strict health, safety and fair-labour standards on site",
  "Transparent, ethical conduct with every partner",
  "Rigorous quality control and honest specifications",
  "Homes built to endure, backed after handover",
];

const stats: StatItem[] = [
  { value: "3", label: "Pillars of commitment" },
  { value: "100%", label: "Freehold, well-regulated sites" },
  { value: "25+", label: "Years of responsible delivery" },
  { value: "0", label: "Compromises on safety" },
];

usePrestigePage({ hero: false });
</script>
