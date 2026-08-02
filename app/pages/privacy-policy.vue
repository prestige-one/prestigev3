<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Legal"
              :title="title"
              :lead="doc.intro"
              image="/assets/images/v3/map-locations.webp"
              short
            />
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-9">
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <div class="prestige-prose" v-html="body" />
                    <p class="prestige-legal__updated">{{ t('mdata.common.lastUpdated') }}: {{ doc.updated }}</p>
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
import { getLegalDoc, type LegalDoc } from "~/data/legal-data";

const doc: LegalDoc = getLegalDoc("privacy-policy")!;
const legalKey = "privacy";

const { t, tm, rt, te } = useI18n();

definePageMeta({ layout: false });
useSeoMeta({
  title: `${doc.title} | Prestige One`,
  description: doc.intro,
});

// Translate the page title and the <h2> section headings only; the dense legal
// body paragraphs stay in English. Reactive on locale switch.
const title = computed(() =>
  te(`mdata.legal.${legalKey}.title`) ? t(`mdata.legal.${legalKey}.title`) : doc.title,
);

const body = computed(() => {
  let html = doc.body;
  const map = tm(`mdata.legal.${legalKey}.headings`) as Record<string, unknown>;
  for (const [en, val] of Object.entries(map || {})) {
    const translated = rt(val as string);
    if (translated) html = html.replaceAll(`<h2>${en}</h2>`, `<h2>${translated}</h2>`);
  }
  return html;
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-legal__updated {
  margin-top: 40px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}
</style>
