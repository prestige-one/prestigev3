<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Legal"
              :title="doc.title"
              :lead="doc.intro"
              image="/assets/images/v3/map-locations.webp"
              short
            />
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-9">
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <div class="prestige-prose" v-html="doc.body" />
                    <p class="prestige-legal__updated">Last updated: {{ doc.updated }}</p>
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

definePageMeta({ layout: false });
useSeoMeta({
  title: `${doc.title} | Prestige One`,
  description: doc.intro,
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
