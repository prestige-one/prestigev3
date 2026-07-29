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
                <nuxt-link to="/contact-us" class="prestige-btn">Enquire now</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- quick facts -->
            <section class="prestige-section--tight prestige-detail__facts">
              <div class="container container-1430">
                <div class="row">
                  <div v-for="spec in project.specs" :key="spec.label" class="col-lg-3 col-6 mb-20">
                    <span class="prestige-detail__fact-label">{{ spec.label }}</span>
                    <span class="prestige-detail__fact-value">{{ spec.value }}</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- overview (image + prose + highlights) -->
            <prestige-feature-split
              eyebrow="Overview"
              :title="`Life at ${project.title.split(' by ')[0]}`"
              :image="project.gallery[1] || project.hero"
              :paragraphs="project.overview"
              :points="project.highlights"
            />

            <!-- amenities -->
            <prestige-amenities-grid
              eyebrow="Amenities"
              title="Everything at your doorstep"
              lead="Thoughtfully curated amenities designed around comfort, wellbeing and everyday convenience."
              :items="project.amenities"
            />

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

            <!-- payment plan + connectivity -->
            <section class="prestige-section prestige-detail__pp">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-lg-6 mb-40">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Payment plan</span>
                    <h2 class="prestige-heading mb-30 tp_fade_anim" data-delay=".3">Flexible & transparent</h2>
                    <div class="prestige-detail__plan tp_fade_anim" data-delay=".4">
                      <div v-for="(m, i) in project.paymentPlan" :key="i" class="prestige-detail__plan-row">
                        <span class="prestige-detail__plan-label">{{ m.label }}</span>
                        <span class="prestige-detail__plan-value">{{ m.value }}</span>
                      </div>
                    </div>
                    <p class="prestige-detail__note tp_fade_anim" data-delay=".5">Indicative payment plan. Speak to our team for the latest terms and availability.</p>
                  </div>
                  <div class="col-lg-5 offset-lg-1">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Connectivity</span>
                    <h2 class="prestige-heading mb-30 tp_fade_anim" data-delay=".3">Perfectly placed</h2>
                    <ul class="prestige-detail__conn tp_fade_anim" data-delay=".4">
                      <li v-for="(c, i) in project.connectivity" :key="i"><span class="prestige-detail__dot" />{{ c }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- FAQ -->
            <prestige-faq-accordion title="Good to know" :items="faqs" />

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

            <!-- CTA band -->
            <prestige-cta-band
              eyebrow="Register your interest"
              :title="`Make ${project.title.split(' by ')[0]} home`"
              text="Speak to our team for floor plans, availability and the latest payment terms."
              :image="project.hero"
              primary-label="Enquire now"
              primary-to="/contact-us"
              secondary-label="View all projects"
              secondary-to="/projects"
            />

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

interface FaqItem { q: string; a: string }

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

const faqs = computed<FaqItem[]>(() => {
  const p = project.value!;
  return [
    { q: `Where is ${p.title.split(" by ")[0]} located?`, a: `${p.title} is located in ${p.location}. ${p.connectivity.slice(0, 2).join(". ")}.` },
    { q: "What is the payment plan?", a: `A flexible plan is available — typically ${p.paymentPlan.map((m) => `${m.value} ${m.label.toLowerCase()}`).join(", ")}. Terms are indicative; contact our team for the latest.` },
    { q: "What amenities are included?", a: `Residents enjoy ${p.amenities.slice(0, 4).join(", ").toLowerCase()} and more.` },
    { q: "Who is the developer?", a: "Prestige One Developments — a premium Dubai developer known for well-located, thoughtfully designed homes built to last." },
    { q: "What is the current status?", a: `${p.title} is currently ${p.status.toLowerCase()}. Register your interest to receive availability and pricing.` },
  ];
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
.prestige-detail__facts {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 40px;
  padding-bottom: 20px;
}
.prestige-detail__fact-label {
  display: block;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
}
.prestige-detail__fact-value {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(20px, 2.2vw, 28px);
  color: #fff;
  line-height: 1.2;
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
.prestige-detail__shot:hover img { transform: scale(1.05); }
.prestige-detail__plan {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-detail__plan-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-detail__plan-label {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.82);
}
.prestige-detail__plan-value {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 34px;
  color: var(--tp-common-gold, #d9b382);
}
.prestige-detail__note {
  margin-top: 18px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}
.prestige-detail__conn {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-detail__conn li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 17px;
  color: rgba(255, 255, 255, 0.82);
}
.prestige-detail__dot {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--tp-common-gold, #d9b382);
}
</style>
