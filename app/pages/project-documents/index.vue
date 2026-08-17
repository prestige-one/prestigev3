<!-- Data source: app/data/project-document-hubs.ts -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              class="po-project-docs-page-hero"
              eyebrow="Prestige One Developments"
              title="Project Documents"
              lead="Access project-specific documents and resources. Select a development below to view available materials on our official portal."
              image="/assets/images/v3/project-doc.webp"
            />

            <section class="po-project-docs-section">
              <div class="container container-1430">
                <ul class="po-project-docs-list">
                  <li v-for="hub in projectDocumentHubs" :key="hub.slug" class="po-project-docs-item tp_fade_anim">
                    <NuxtLink :to="`/project-documents/${hub.slug}`" class="po-project-docs-link">
                      <span class="po-project-docs-thumb-wrap">
                        <img :src="hub.thumbnail" alt="" class="po-project-docs-thumb" loading="lazy" decoding="async">
                      </span>
                      <span class="po-project-docs-title">{{ hub.listTitle }}</span>
                      <span class="po-project-docs-cta">
                        <span>Find Out More</span>
                        <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                          <path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
                        </svg>
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
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
import { projectDocumentHubs } from "~/data/project-document-hubs";

definePageMeta({ layout: false });
useSeoMeta({
  title: "Project Documents | Prestige One",
  description: "Access project-specific documents and resources from Prestige One Developments.",
});

usePrestigePage({ hero: false });
</script>
