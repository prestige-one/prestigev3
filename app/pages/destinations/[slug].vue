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
            />

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
              <div class="container container-1430 text-center">
                <p class="prestige-prose">New Prestige One developments are coming to {{ dest.name }}. Register your interest to be the first to know.</p>
                <nuxt-link to="/contact-us" class="prestige-btn mt-20">Register interest</nuxt-link>
              </div>
            </section>

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

definePageMeta({ layout: false });

const route = useRoute();
const dest = computed(() => getDestinationBySlug(String(route.params.slug)));

if (!dest.value) {
  throw createError({ statusCode: 404, statusMessage: "Destination not found", fatal: true });
}

const areaProjects = computed(() => (dest.value ? getProjectsForDestination(dest.value) : []));

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
</style>
