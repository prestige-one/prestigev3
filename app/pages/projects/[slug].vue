<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main v-if="project" class="prestige-page">
            <prestige-page-hero
              :eyebrow="project.location"
              :title="project.title"
              :lead="project.tagline"
              :image="project.hero"
              :video="project.video"
            >
              <template #actions>
                <span class="prestige-detail__badge">{{ project.status }}</span>
              </template>
            </prestige-page-hero>

            <!-- overview + specs -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-7 col-lg-7 mb-40">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Overview</span>
                    <div class="prestige-prose tp_fade_anim" data-delay=".3">
                      <p v-for="(para, i) in project.overview" :key="i">{{ para }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4 offset-xl-1 col-lg-5">
                    <div class="prestige-specs tp_fade_anim" data-delay=".4">
                      <div v-for="spec in project.specs" :key="spec.label" class="prestige-specs__row">
                        <span class="prestige-specs__label">{{ spec.label }}</span>
                        <span class="prestige-specs__value">{{ spec.value }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- highlights -->
            <section class="prestige-section prestige-section--tight prestige-detail__highlights">
              <div class="container container-1430">
                <div class="row">
                  <div
                    v-for="(h, i) in project.highlights"
                    :key="i"
                    class="col-xl-3 col-lg-3 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <div class="prestige-detail__hl">
                      <span class="prestige-detail__hl-num">{{ String(i + 1).padStart(2, '0') }}</span>
                      <p>{{ h }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- gallery -->
            <section v-if="project.gallery.length" class="prestige-section">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Gallery</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">A closer look</h2>
                <div class="row">
                  <div
                    v-for="(img, i) in project.gallery"
                    :key="i"
                    class="mb-30 tp_fade_anim"
                    :class="i % 3 === 0 ? 'col-xl-8 col-lg-8' : 'col-xl-4 col-lg-4 col-md-6'"
                    data-delay=".2"
                  >
                    <div class="prestige-detail__shot">
                      <img :src="img" :alt="`${project.title} — view ${i + 1}`" loading="lazy">
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- related -->
            <section v-if="related.length" class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Explore more</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">Related developments</h2>
                <div class="row">
                  <div
                    v-for="rel in related"
                    :key="rel.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-project-card :project="rel" />
                  </div>
                </div>
              </div>
            </section>

            <!-- contact CTA -->
            <prestige-contact-form />
          </main>

          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getProjectBySlug, getAllProjects } from "~/data/projects";

definePageMeta({ layout: false });

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const project = computed(() => getProjectBySlug(slug.value));

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found", fatal: true });
}

const related = computed(() => {
  const p = project.value!;
  return getAllProjects()
    .filter((x) => x.slug !== p.slug && (x.category === p.category || x.location === p.location))
    .slice(0, 3);
});

useSeoMeta({
  title: () => `${project.value?.title} | Prestige One`,
  description: () => project.value?.tagline,
  ogImage: () => project.value?.hero,
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-detail__badge {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
}
.prestige-specs {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-specs__row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-specs__label {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}
.prestige-specs__value {
  font-size: 17px;
  color: #fff;
  text-align: right;
}
.prestige-detail__highlights {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-detail__hl {
  padding-right: 14px;
}
.prestige-detail__hl-num {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 34px;
  color: var(--tp-common-gold, #d9b382);
  margin-bottom: 10px;
}
.prestige-detail__hl p {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
  margin: 0;
}
.prestige-detail__shot {
  overflow: hidden;
  border-radius: 6px;
  aspect-ratio: 3 / 2;
  background: #101013;
}
.prestige-detail__shot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-detail__shot:hover img {
  transform: scale(1.05);
}
</style>
