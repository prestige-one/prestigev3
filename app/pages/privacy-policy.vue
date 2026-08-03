<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('mdata.legal.eyebrow')"
              :title="title"
              :lead="intro"
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
import { legalBodies } from "~/data/i18n-bodies";

const doc: LegalDoc = getLegalDoc("privacy-policy")!;
const legalKey = "privacy";

const { t, te, locale } = useI18n();

definePageMeta({ layout: false });
useSeoMeta({
  title: `${doc.title} | Prestige One`,
  description: doc.intro,
});

const title = computed(() =>
  te(`mdata.legal.${legalKey}.title`) ? t(`mdata.legal.${legalKey}.title`) : doc.title,
);
const intro = computed(() => {
  const k = `mdata.legal.${legalKey}.intro`;
  return te(k) ? t(k) : doc.intro;
});
// Body HTML lives in the plain data module (not the locale JSON) - full markup
// with email @ breaks vue-i18n's message precompiler. English data fallback.
const body = computed(() => legalBodies[locale.value]?.[legalKey] ?? doc.body);

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-legal__updated {
  margin-top: 40px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}
</style>
