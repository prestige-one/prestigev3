<!-- Data sources: app/data/projects.ts; app/data/destinations-data.ts; app/data/project-distance-slides.ts; i18n/locales/projects/en.json -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main v-if="project" class="prestige-page">
            <prestige-page-hero
              class="prestige-project-detail-hero"
              :eyebrow="project.location"
              :title="pName(project)"
              :lead="heroLead"
              :image="project.hero"
              :video="project.video"
            >
              <template #actions>
                <a
                  :href="project.registrationUrl || localePath('/contact-us')"
                  class="prestige-detail__badge"
                  :target="project.registrationUrl ? '_blank' : undefined"
                  :rel="project.registrationUrl ? 'noopener noreferrer' : undefined"
                >{{ t('pp.detail.registerInterest') }}</a>
                <nuxt-link :to="localePath('/contact-us')" class="prestige-btn">{{ t('pp.detail.enquireNow') }}</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- 1 · quick facts -->
            <section class="prestige-section--tight prestige-detail__facts">
              <div class="container container-1430">
                <div class="prestige-detail__facts-grid">
                  <div v-for="spec in project.specs" :key="spec.label" class="prestige-detail__fact">
                    <prestige-project-fact-icon :name="spec.label" />
                    <span class="prestige-detail__fact-copy">
                      <span class="prestige-detail__fact-label">{{ spec.label }}</span>
                      <span
                        class="prestige-detail__fact-value"
                        :class="{ 'prestige-detail__fact-value--fixed-lines': spec.label !== 'Unit Types' && spec.value.includes('\n') }"
                      >
                        <template v-if="spec.label === 'Unit Types'">
                          <span
                            v-for="(unitType, index) in unitTypeParts(spec.value)"
                            :key="`${unitType}-${index}`"
                            class="prestige-detail__fact-value-part"
                          >{{ unitType }}</span>
                        </template>
                        <template v-else>{{ spec.value }}</template>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- 2 · overview -->
            <prestige-feature-split
              :eyebrow="t('pp.detail.overview.eyebrow')"
              :title="t('pp.detail.overview.title', { name: shortName })"
              :image="project.introImage || project.gallery[1] || project.hero"
              :paragraphs="overview"
              :points="highlights"
              equal-height
            />

            <!-- 3 · amenities -->
            <prestige-amenities-grid
              class="prestige-detail-heading--swapped"
              :eyebrow="t('pp.detail.amenities.eyebrow')"
              :title="t('pp.detail.amenities.title')"
              heading-class="prestige-detail__amenities-heading"
              :lead="t('pp.detail.amenities.lead')"
              :items="amenities"
              :images="project.amenityImages"
              :original-images="project.originalAmenityImages"
            />

            <!-- 4 · gallery -->
            <prestige-project-gallery
              class="prestige-detail-heading--swapped"
              :images="project.gallery"
              :eyebrow="t('pp.detail.gallery.eyebrow')"
              :title="t('pp.detail.gallery.title')"
              :project-title="pName(project)"
            />

            <!-- 5 · location & nearby -->
            <section class="prestige-section prestige-detail__loc prestige-detail-heading--swapped">
              <div class="container container-1430">
                <div class="row justify-content-center mb-40 prestige-detail__heading-row prestige-detail__heading-row--centered">
                  <div class="col-lg-9 prestige-detail__heading-column">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('pp.detail.location.eyebrow') }}</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ t('pp.detail.location.title', { location: project.location }) }}</h2>
                  </div>
                </div>
                <prestige-location-distance-slider
                  v-if="distanceSlider"
                  :slides="distanceSlider.slides"
                  :title-color="distanceSlider.titleColor"
                />
                <prestige-location-info-grid :groups="locationInfoGroups" />
              </div>
            </section>

            <!-- 6 · payment plan -->
            <section class="prestige-section prestige-section--tight prestige-detail__pp prestige-detail-heading--swapped">
              <div class="container container-1430">
                <div class="row mb-40 prestige-detail__heading-row">
                  <div class="col-lg-8 prestige-detail__heading-column">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('pp.detail.payment.eyebrow') }}</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ t('pp.detail.payment.title') }}</h2>
                    <p class="prestige-detail__note tp_fade_anim" data-delay=".4">{{ t('pp.detail.payment.note') }}</p>
                  </div>
                </div>
                <prestige-payment-wizard :steps="paymentPlan" />
              </div>
            </section>

            <!-- 7 · documents -->
            <section class="prestige-section--tight prestige-detail__docs">
              <div class="container container-1430">
                <h2 class="prestige-heading prestige-detail__uppercase-title mb-40 tp_fade_anim" data-delay=".2">{{ t('pp.detail.resources.title') }}</h2>
                <div class="prestige-docgrid">
                  <button
                    v-for="(d, i) in documents"
                    :key="i"
                    type="button"
                    class="prestige-doccard tp_fade_anim"
                    :data-delay="0.3 + i * 0.07"
                    @click="requestDocument(d)"
                  >
                    <span class="prestige-doccard__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                        <path d="M6 2h8l4 4v16H6z" stroke-linejoin="round" />
                        <path d="M14 2v4h4" stroke-linejoin="round" />
                        <path d="M9 12h6M9 16h6" stroke-linecap="round" />
                      </svg>
                    </span>
                    <span class="prestige-doccard__name">{{ d.label }}</span>
                    <span class="prestige-doccard__cta">{{ t('pp.detail.resources.request') }} <i>→</i></span>
                  </button>
                </div>
              </div>
            </section>

            <prestige-doc-request-modal
              :open="docModalOpen"
              :document-name="activeDocument"
              :project-title="shortName"
              @close="docModalOpen = false"
            />

            <!-- 8 · FAQ -->
            <prestige-faq-accordion class="prestige-detail-heading--swapped" :title="t('pp.detail.faqTitle')" :items="faqs" />

            <!-- 9 · related -->
            <section v-if="related.length" class="prestige-section prestige-section--tight prestige-detail__related">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('pp.detail.related.eyebrow') }}</span>
                <h2 class="prestige-heading prestige-detail__uppercase-title mb-50 tp_fade_anim" data-delay=".3">{{ t('pp.detail.related.title') }}</h2>
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

            <!-- 10 · CTA + contact -->
            <prestige-cta-band
              :eyebrow="t('pp.detail.closing.eyebrow')"
              :title="project.closingTitle || t('pp.detail.closing.title', { name: shortName })"
              :text="t('pp.detail.closing.text')"
              :image="project.closingImage || project.hero"
              :primary-label="t('pp.detail.closing.primary')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="t('pp.detail.closing.secondary')"
              :secondary-to="localePath('/projects')"
            />

            <prestige-contact-form
              :map-location="project.mapLocation"
              :map-title="pName(project)"
              :current-project="pName(project)"
            />
          </main>

          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { getAmenityDisplayName, getProjectBySlug, getAllProjects, slugify } from "~/data/projects";
import { destinations } from "~/data/destinations-data";
import { getProjectDistanceSliderConfig } from "~/data/project-distance-slides";

interface FaqItem { q: string; a: string }

function unitTypeParts(value: string): string[] {
  const parts = value.split(/,\s*/).filter(Boolean);
  return parts.map((part, index) => `${part.trim()}${index < parts.length - 1 ? "," : ""}`);
}

definePageMeta({ layout: false });

const { t, tm, rt, te } = useI18n();
const { pName } = useLocalizedNames();
const localePath = useLocalePath();

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const project = computed(() => getProjectBySlug(slug.value));

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found", fatal: true });
}

const shortName = computed(() => project.value!.title.split(" by ")[0] ?? project.value!.title);

// Per-project marketing copy resolved from the `pdata` locale namespace, each
// falling back to the original (English) project data when a key is absent so
// nothing ever renders blank. Keyed by slug / slugified label to stay in sync
// with the data files without calling t() inside them.
const pKey = computed(() => `pdata.p.${slug.value}`);

const heroLead = computed(() => {
  const k = `${pKey.value}.tagline`;
  return te(k) ? t(k) : project.value!.tagline;
});

const overview = computed<string[]>(() => {
  const raw = tm(`${pKey.value}.overview`) as unknown[];
  return Array.isArray(raw) && raw.length ? raw.map((p) => rt(p as string)) : project.value!.overview;
});

const highlights = computed<string[]>(() => {
  const raw = tm(`${pKey.value}.highlights`) as unknown[];
  return Array.isArray(raw) && raw.length ? raw.map((p) => rt(p as string)) : project.value!.highlights;
});

const projectsWithOfficialAmenityTitles = new Set([
  "berkeley-square-north",
  "berkeley-square-south",
  "coastal-haven-by-prestige-one",
  "luxury-canal-residences-by-prestige-one",
  "parkway-by-prestige-one",
  "the-boulevard-by-prestige-one",
  "the-one-by-prestige-one",
  "vista-by-prestige-one",
  "waterway-by-prestige-one",
]);

function tAmenity(a: string) {
  if (projectsWithOfficialAmenityTitles.has(slug.value)) return a;

  const displayName = getAmenityDisplayName(a);
  if (displayName !== a) return displayName;

  const k = `pdata.amenities.${slugify(displayName)}`;
  return te(k) ? t(k) : displayName;
}
function tPayment(l: string) { const k = `pdata.payment.${slugify(l)}`; return te(k) ? t(k) : l; }
function tDoc(d: string) { const k = `pdata.docs.${slugify(d)}`; return te(k) ? t(k) : d; }

const amenities = computed(() => project.value!.amenities.map(tAmenity));
const distanceSlider = computed(() => getProjectDistanceSliderConfig(slug.value));
const paymentPlan = computed(() => project.value!.paymentPlan.map((m) => ({ value: m.value, label: tPayment(m.label) })));
const documents = computed(() => project.value!.documents.map((d) => ({ raw: d, label: tDoc(d) })));
const statusLabel = computed(() => {
  const k = `pdata.status.${slugify(project.value!.status)}`;
  return te(k) ? t(k) : project.value!.status;
});

// The destination this project sits in - used to fill location facts (nearby
// drive times, schools and hospitals) with real, researched data
// instead of generic guesses. The project's own values win when present.
const areaDest = computed(() => {
  const loc = project.value!.location.toLowerCase();
  return destinations.find((d) => d.match.some((m) => loc.includes(m.toLowerCase())));
});
const nearby = computed(() => (project.value!.nearby.length ? project.value!.nearby : areaDest.value?.attractions ?? []));
const schools = computed(() => (project.value!.schools.length ? project.value!.schools : areaDest.value?.education ?? []));
const hospitals = computed(() => (project.value!.hospitals.length ? project.value!.hospitals : areaDest.value?.healthcare ?? []));
const locationInfoGroups = computed(() => [
  { key: "schools", title: t("pp.detail.location.schools"), items: schools.value },
  { key: "healthcare", title: t("pp.detail.location.healthcare"), items: hospitals.value },
].filter((group) => group.items.length));

const related = computed(() => {
  const p = project.value!;
  return getAllProjects()
    .filter((x) => x.slug !== p.slug && (x.category === p.category || x.location === p.location))
    .slice(0, 3);
});

const faqs = computed<FaqItem[]>(() => {
  const p = project.value!;
  if (p.faqItems?.length) return p.faqItems;

  // Answers are translated via `pdata.faq.a.*` with the data (names, times,
  // %, place names) kept as interpolated placeholders; each falls back to
  // English through the locale fallback chain.
  const nearbyItems = nearby.value
    .slice(0, 2)
    .map((n) => t("pdata.faq.a.locationItem", { name: n.name, time: n.time }));
  const nearby2 = nearbyItems.length ? `. ${nearbyItems.join(t("pdata.faq.a.locationJoin"))}` : "";
  const plan = p.paymentPlan
    .map((m) => t("pdata.faq.a.paymentItem", { value: m.value, label: tPayment(m.label) }))
    .join(", ");
  const faqAmenityNames = (p.faqAmenities ?? amenities.value.slice(0, 5)).map(tAmenity);
  const amenList = Array.from(
    new Map(faqAmenityNames.map((amenity) => [amenity.trim().toLocaleLowerCase(), amenity])).values(),
  ).join(", ");

  const items: FaqItem[] = [
    { q: t("pdata.faq.q.location", { name: shortName.value }), a: t("pdata.faq.a.location", { title: p.title, location: p.location, nearby: nearby2 }) },
    { q: t("pdata.faq.q.payment"), a: t("pdata.faq.a.payment", { plan }) },
    { q: t("pdata.faq.q.amenities"), a: t("pdata.faq.a.amenities", { list: amenList }) },
  ];
  if (schools.value.length || hospitals.value.length) {
    const list = [...schools.value.slice(0, 2), ...hospitals.value.slice(0, 1)].join(", ");
    items.push({ q: t("pdata.faq.q.schools"), a: t("pdata.faq.a.schools", { list }) });
  }
  items.push({ q: t("pdata.faq.q.developer"), a: t("pdata.faq.a.developer", { title: p.title, status: statusLabel.value }) });
  return items;
});

useSeoMeta({
  title: () => `${project.value?.title} | Prestige One`,
  description: () => heroLead.value,
  ogImage: () => project.value?.hero,
});

usePrestigePage({ hero: false });

// Document-request modal: opening a document card pops the contact form
// pre-noted with the requested document and fires a KPI event.
const docModalOpen = ref(false);
const activeDocument = ref("");

function trackDocumentRequest(documentName: string) {
  if (import.meta.server) return;
  const payload = { event: "document_request", document: documentName, project: slug.value };
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  if (w.dataLayer) w.dataLayer.push(payload);
  else console.info("[kpi] document_request", payload);
}

function requestDocument(doc: { raw: string; label: string }) {
  activeDocument.value = doc.label;
  docModalOpen.value = true;
  trackDocumentRequest(doc.raw);
}
</script>

<style scoped>
/* project detail page: larger hero + intro (overview) heading */
.prestige-project-detail-hero {
  align-items: center;
}
:deep(.prestige-project-detail-hero .prestige-hero-band__inner) {
  padding-top: clamp(110px, 15vh, 170px);
  padding-bottom: clamp(60px, 9vh, 110px);
}
:deep(.prestige-project-detail-hero .row) {
  justify-content: center;
  text-align: center;
}
:deep(.prestige-project-detail-hero .col-xl-9) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep(.prestige-project-detail-hero .prestige-hero-band__lead) {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
:deep(.prestige-project-detail-hero .prestige-hero-band__actions) {
  width: 100%;
  justify-content: center;
}
:deep(.prestige-hero-band__title) {
  font-size: clamp(34px, 4.4vw, 40px);
}
/* all main section headings on the detail page share one size */
:deep(.prestige-heading) {
  font-size: clamp(34px, 4.4vw, 40px);
}
.prestige-page :deep(.prestige-fsplit .prestige-heading) {
  font-size: clamp(25px, 4.4vw, 30px);
}
.prestige-page :deep(.prestige-detail__amenities-heading) {
  font-size: clamp(38px, 4vw, 56px);
}
.prestige-detail__heading-row--centered .prestige-detail__heading-column {
  margin-inline: auto;
  text-align: center;
}
.prestige-detail__uppercase-title {
  text-transform: uppercase;
}
.prestige-detail__pp .row.mb-40 {
  margin-bottom: 20px !important;
}
.prestige-detail__docs .prestige-heading {
  margin-bottom: 24px !important;
  font-size: clamp(34px, 4.4vw, 35px);
}
.prestige-detail__related .prestige-heading {
  margin-bottom: 13px !important;
  font-size: clamp(25px, 4.4vw, 30px);
}
/* project documents as cards */
.prestige-docgrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.prestige-doccard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 30px 26px 26px;
  min-height: 200px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  color: #fff;
  cursor: pointer;
  transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
}
.prestige-doccard:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-4px);
}
.prestige-doccard__icon { width: 34px; height: 34px; color: rgba(255, 255, 255, 0.85); }
.prestige-doccard__icon svg { width: 100%; height: 100%; }
.prestige-doccard__name {
  margin-top: auto;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(20px, 2vw, 24px);
  line-height: 1.2;
}
.prestige-doccard__cta {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
}
.prestige-doccard:hover .prestige-doccard__cta { color: #fff; }
.prestige-doccard__cta i { font-style: normal; }
@media (max-width: 991.98px) { .prestige-docgrid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 479.98px) {
  .prestige-docgrid { grid-template-columns: 1fr; }
  .prestige-doccard { min-height: 0; }
}
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
.prestige-detail__badge:hover,
.prestige-detail__badge:focus-visible {
  border-color: rgba(255, 255, 255, 0.55);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}
.prestige-detail__facts {
  padding: 0;
  border-top: 1px solid hsla(0, 0%, 100%, 0.08);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  background: #0e0e12;
}
.prestige-detail__facts-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  background: #0e0e12;
}
.prestige-detail__fact {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 14px;
  min-height: 110px;
  min-width: 0;
  padding: 12px clamp(18px, 2vw, 30px);
  border-right: 1px solid hsla(0, 0%, 100%, 0.08);
}
.prestige-detail__fact:last-child {
  border-right: 0;
}
.prestige-detail__fact-copy {
  display: block;
  min-width: 0;
}
.prestige-detail__loc {
  background: #000;
}
.prestige-detail__fact-label {
  display: block;
  margin-bottom: 7px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.prestige-detail__fact-value {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(16px, 1.35vw, 17px);
  font-weight: 500;
  color: #fff;
  line-height: 1.32;
  white-space: pre-line;
  text-wrap: balance;
}
.prestige-detail__fact-value--fixed-lines {
  white-space: pre;
}
.prestige-detail__fact-value-part {
  display: inline-block;
  white-space: nowrap;
}
.prestige-detail__fact-value-part + .prestige-detail__fact-value-part {
  margin-left: 0.25em;
}
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
  color: var(--tp-common-gold, #ffffff);
}
.prestige-detail__note {
  margin-top: 18px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
}
.prestige-detail__docrows {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-detail__docrow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: clamp(18px, 2vw, 22px);
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  transition: padding-left 0.3s ease;
}
.prestige-detail__docrow:hover { padding-left: 10px; color: #fff; }
.prestige-detail__docget {
  font-family: -apple-system, sans-serif;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
  white-space: nowrap;
}
.prestige-detail__docget i { font-style: normal; }

@media (max-width: 991.98px) {
  .prestige-detail__facts-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .prestige-detail__fact {
    border-right: 1px solid hsla(0, 0%, 100%, 0.08);
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  }

  .prestige-detail__fact:nth-child(even) {
    border-right: 0;
  }

  .prestige-detail__fact:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

}

@media (max-width: 575.98px) {
  :deep(.prestige-project-detail-hero .prestige-hero-band__inner) {
    padding-right: 24px;
    padding-left: 24px;
  }

  :deep(.prestige-project-detail-hero .prestige-hero-band__title) {
    font-size: clamp(25px, 7vw, 40px);
  }

  :deep(.prestige-project-detail-hero .prestige-hero-band__actions) {
    align-items: center;
    flex-direction: column;
  }

  :deep(.prestige-project-detail-hero .prestige-hero-band__actions > *) {
    justify-content: center;
    width: min(100%, 240px);
    height: 56px;
    min-height: 56px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .prestige-detail__facts-grid {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .prestige-detail__fact {
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 13px;
    min-height: 92px;
    padding: 20px;
    border-right: 0;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  }

  .prestige-detail__fact :deep(.prestige-project-fact-icon) {
    width: 40px;
    height: 40px;
  }

  .prestige-detail__fact:nth-last-child(2) {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  }

  .prestige-detail__fact:last-child {
    border-bottom: 0;
  }

  .prestige-detail__fact-value {
    font-size: clamp(16px, 1.35vw, 17px);
  }

  :deep(.prestige-heading),
  .prestige-page :deep(.prestige-fsplit .prestige-heading) {
    font-size: 28px !important;
    line-height: 1.15;
  }

  .prestige-page .prestige-detail-heading--swapped :deep(.prestige-heading),
  .prestige-page .prestige-detail-heading--swapped :deep(.prestige-amen__title) {
    font-size: 17px !important;
    line-height: 1.4;
  }

  .prestige-page :deep(.prestige-fsplit__body),
  .prestige-page :deep(.prestige-amen__intro) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .prestige-page :deep(.prestige-amen__intro) {
    align-items: center;
  }

  .prestige-page :deep(.prestige-amen__lead),
  .prestige-page :deep(.prestige-fsplit .prestige-prose),
  .prestige-detail__note {
    font-size: 17px;
    line-height: 1.5;
  }

  .prestige-page :deep(.prestige-amen__lead) {
    max-width: 100%;
  }

  .prestige-page :deep(.prestige-fsplit__points) {
    text-align: left;
  }

  .prestige-page :deep(.prestige-fsplit .prestige-prose) {
    text-align: left;
  }

  .prestige-detail-heading--swapped :deep(.prestige-eyebrow),
  .prestige-detail-heading--swapped :deep(.prestige-heading),
  .prestige-detail__docs .prestige-heading,
  .prestige-detail__related .prestige-eyebrow,
  .prestige-detail__related .prestige-heading {
    display: block;
    text-align: center;
  }

  .prestige-detail__heading-row {
    justify-content: center;
  }

  .prestige-detail__heading-column {
    width: 100%;
    text-align: center;
  }

  .prestige-detail__note {
    margin-right: auto;
    margin-left: auto;
  }

  .prestige-page :deep(.prestige-contact-heading .prestige-section-heading__title) {
    font-size: 28px;
  }
}
</style>
