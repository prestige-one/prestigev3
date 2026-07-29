<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Resources"
              title="Project Documents"
              lead="Access brochures, floor plans and payment plans for our flagship developments. Documents are shared on request through our team."
              image="/assets/project-featured-images/sliders/boulevard.webp"
            />

            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".2">
                      <p>
                        Below is a selection of documents available for our flagship residences. As
                        these materials contain detailed pricing and unit information, they are shared
                        directly by our sales team. Request any document and we'll send it over
                        promptly.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  v-for="project in documentGroups"
                  :key="project.name"
                  class="prestige-docs__group tp_fade_anim"
                  data-delay=".2"
                >
                  <h2 class="prestige-docs__group-title">{{ project.name }}</h2>
                  <ul class="prestige-docs__list">
                    <li v-for="doc in project.documents" :key="doc" class="prestige-docs__row">
                      <span class="prestige-docs__doc">{{ doc }}</span>
                      <NuxtLink to="/contact-us" class="prestige-docs__request">
                        Request document
                      </NuxtLink>
                    </li>
                  </ul>
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
interface DocumentGroup {
  name: string;
  documents: string[];
}

definePageMeta({ layout: false });
useSeoMeta({
  title: "Project Documents | Prestige One",
  description:
    "Request brochures, floor plans, payment plans and master plans for Prestige One's flagship Dubai developments.",
});

const documents = ["Brochure", "Floor Plans", "Payment Plan", "Master Plan"];

const documentGroups: DocumentGroup[] = [
  { name: "Hilton Residences", documents },
  { name: "FAUCHON Résidences", documents },
  { name: "Sanctuary Residences", documents },
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-docs__group {
  margin-top: 70px;
}
.prestige-docs__group-title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  color: #fff;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 400;
  margin: 0 0 20px;
}
.prestige-docs__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.prestige-docs__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.prestige-docs__doc {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.85);
}
.prestige-docs__request {
  flex: 0 0 auto;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #d9b382);
  transition: letter-spacing 0.3s ease;
}
.prestige-docs__request:hover {
  letter-spacing: 0.2em;
  color: var(--tp-common-gold, #d9b382);
}
</style>
