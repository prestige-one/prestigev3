<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              class="po-legal-hero"
              eyebrow="Prestige One Developments"
              :title="document.title"
              :lead="document.description"
              short
            />

            <section class="po-legal-doc" :aria-label="document.ariaLabel">
              <div class="container container-1430">
                <!-- Content is imported verbatim from the approved PrestigeV2 legal pages. -->
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="po-legal-doc-inner" v-html="document.body" />
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
import type { LegalV2Document } from "~/data/legal-v2-content";

const props = defineProps<{ document: LegalV2Document }>();

useSeoMeta({
  title: () => `${props.document.title} | Prestige One`,
  description: () => props.document.description,
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.po-legal-doc {
  padding: clamp(2.5rem, 5vw, 4rem) 0 clamp(4rem, 8vw, 6rem);
  background: #000;
  color: #fff;
}

:deep(.po-legal-hero .row) {
  justify-content: center;
  text-align: center;
}

:deep(.po-legal-hero .col-xl-9) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

:deep(.po-legal-hero .prestige-hero-band__lead) {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.po-legal-doc-inner {
  max-width: 820px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.7;
}

.po-legal-doc-inner :deep(a) {
  color: rgba(255, 255, 255, 0.92);
  text-decoration: underline;
  text-underline-offset: 0.15em;
}

.po-legal-doc-inner :deep(a:hover) { opacity: 0.75; }
.po-legal-doc-inner :deep(.po-legal-doc-lead) { margin-bottom: 2rem; }
.po-legal-doc-inner :deep(.po-legal-doc-lead p),
.po-legal-doc-inner :deep(> p) {
  margin: 0 0 1rem;
  color: #fff;
  font-size: 16px;
}

.po-legal-doc-inner :deep(h2) {
  margin: 2.5rem 0 1rem;
  color: #fff;
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0.02em;
  text-transform: capitalize;
}

.po-legal-doc-inner :deep(> h2:first-child),
.po-legal-doc-inner :deep(> .po-legal-doc-lead:first-child h2) { margin-top: 0; }

.po-legal-doc-inner :deep(h3) {
  margin: 1.75rem 0 0.75rem;
  color: #fff;
  font-size: 1.12rem;
  font-weight: 500;
}

.po-legal-doc-inner :deep(h4) {
  margin: 1.25rem 0 0.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}

.po-legal-doc-inner :deep(strong) { color: #fff; font-weight: 500; }
.po-legal-doc-inner :deep(.po-legal-doc-list) {
  margin: 0 0 1.25rem;
  padding-left: 1.35rem;
  color: #fff;
}
.po-legal-doc-inner :deep(.po-legal-doc-list li) { margin-bottom: 0.5rem; padding-left: 0.25rem; }
.po-legal-doc-inner :deep(.po-legal-doc-list--numbered) { list-style-type: decimal; }
.po-legal-doc-inner :deep(.po-legal-doc-list--numbered li::marker) { color: #fff; font-weight: 600; }

.po-legal-doc-inner :deep(.po-legal-doc-legal-caps) {
  margin: 0 0 1.25rem;
  padding: 1.25rem 1.35rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
}
.po-legal-doc-inner :deep(.po-legal-doc-legal-caps p) {
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.78rem;
  line-height: 1.65;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

@media (max-width: 767px) {
  .po-legal-doc-inner { font-size: 0.95rem; line-height: 1.65; }
  .po-legal-doc-inner :deep(h2) { font-size: 1.2rem; }
}
</style>
