<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('mdata.docs.heroEyebrow')"
              :title="t('mdata.docs.heroTitle')"
              :lead="t('mdata.docs.heroLead')"
              image="/assets/project-featured-images/sliders/boulevard.webp"
            />

            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".2">
                      <p>{{ t('mdata.docs.intro') }}</p>
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
                      <NuxtLink :to="localePath('/contact-us')" class="prestige-docs__request">
                        {{ t('mdata.common.requestDocument') }}
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

const { t } = useI18n();
const localePath = useLocalePath();

definePageMeta({ layout: false });
useSeoMeta({
  title: "Project Documents | Prestige One",
  description:
    "Request brochures, floor plans, payment plans and master plans for Prestige One's flagship Dubai developments.",
});

// Generic document labels are translated; project/brand names stay literal.
const documents = computed(() => [
  t("mdata.docs.docBrochure"),
  t("mdata.docs.docFloorPlans"),
  t("mdata.docs.docPaymentPlan"),
  t("mdata.docs.docMasterPlan"),
]);

const documentGroups = computed<DocumentGroup[]>(() => [
  { name: "Hilton Residences", documents: documents.value },
  { name: "FAUCHON Résidences", documents: documents.value },
  { name: "Sanctuary Residences", documents: documents.value },
]);

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
  color: var(--tp-common-gold, #ffffff);
  transition: letter-spacing 0.3s ease;
}
.prestige-docs__request:hover {
  letter-spacing: 0.2em;
  color: var(--tp-common-gold, #ffffff);
}
</style>
