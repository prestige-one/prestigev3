<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main v-if="project" class="prestige-page">
            <prestige-page-hero
              :eyebrow="project.location"
              :title="pName(project)"
              :lead="heroLead"
              :image="project.hero"
              :video="project.video"
            >
              <template #actions>
                <span class="prestige-detail__badge">{{ statusLabel }}</span>
                <nuxt-link :to="localePath('/contact-us')" class="prestige-btn">{{ t('pp.detail.enquireNow') }}</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- 1 · quick facts -->
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

            <!-- 2 · overview -->
            <prestige-feature-split
              :eyebrow="t('pp.detail.overview.eyebrow')"
              :title="t('pp.detail.overview.title', { name: shortName })"
              :image="project.gallery[1] || project.hero"
              :paragraphs="overview"
              :points="highlights"
              equal-height
            />

            <!-- 3 · amenities -->
            <prestige-amenities-grid
              :eyebrow="t('pp.detail.amenities.eyebrow')"
              :title="t('pp.detail.amenities.title')"
              heading-class="prestige-detail__amenities-heading"
              :lead="t('pp.detail.amenities.lead')"
              :items="amenities"
            />

            <!-- 4 · gallery -->
            <prestige-project-gallery
              :images="project.gallery"
              :eyebrow="t('pp.detail.gallery.eyebrow')"
              :title="t('pp.detail.gallery.title')"
              :project-title="pName(project)"
            />

            <!-- 5 · location & nearby -->
            <section class="prestige-section prestige-detail__loc">
              <div class="container container-1430">
                <div class="row mb-40">
                  <div class="col-lg-9">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('pp.detail.location.eyebrow') }}</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ t('pp.detail.location.title', { location: project.location }) }}</h2>
                  </div>
                </div>
                <prestige-location-distance-slider v-if="distanceSlides.length" :slides="distanceSlides" />
                <prestige-location-info-grid :groups="locationInfoGroups" />
              </div>
            </section>

            <!-- 6 · payment plan -->
            <section class="prestige-section prestige-section--tight prestige-detail__pp">
              <div class="container container-1430">
                <div class="row mb-40">
                  <div class="col-lg-8">
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
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('pp.detail.resources.eyebrow') }}</span>
                <h2 class="prestige-heading mb-40 tp_fade_anim" data-delay=".3">{{ t('pp.detail.resources.title') }}</h2>
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
            <prestige-faq-accordion :title="t('pp.detail.faqTitle')" :items="faqs" />

            <!-- 9 · related -->
            <section v-if="related.length" class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('pp.detail.related.eyebrow') }}</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">{{ t('pp.detail.related.title') }}</h2>
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
              :title="t('pp.detail.closing.title', { name: shortName })"
              :text="t('pp.detail.closing.text')"
              :image="project.hero"
              :primary-label="t('pp.detail.closing.primary')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="t('pp.detail.closing.secondary')"
              :secondary-to="localePath('/projects')"
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
import { getProjectBySlug, getAllProjects, slugify } from "~/data/projects";
import { destinations } from "~/data/destinations-data";
import { getProjectDistanceSlides } from "~/data/project-distance-slides";

interface FaqItem { q: string; a: string }

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

function tAmenity(a: string) { const k = `pdata.amenities.${slugify(a)}`; return te(k) ? t(k) : a; }
function tPayment(l: string) { const k = `pdata.payment.${slugify(l)}`; return te(k) ? t(k) : l; }
function tDoc(d: string) { const k = `pdata.docs.${slugify(d)}`; return te(k) ? t(k) : d; }

const amenities = computed(() => project.value!.amenities.map(tAmenity));
const distanceSlides = computed(() => getProjectDistanceSlides(slug.value));
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
  const amenList = amenities.value.slice(0, 5).join(", ");

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
:deep(.prestige-hero-band__title) {
  font-size: clamp(34px, 4.4vw, 40px);
}
/* all main section headings on the detail page share one size */
:deep(.prestige-heading) {
  font-size: clamp(34px, 4.4vw, 40px);
}
.prestige-page :deep(.prestige-fsplit .prestige-heading) {
  font-size: clamp(18px, 4.4vw, 22px);
}
.prestige-page :deep(.prestige-detail__amenities-heading) {
  font-size: clamp(38px, 4vw, 56px);
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
  align-items: flex-start;
  gap: 16px;
  padding: 30px 26px 26px;
  min-height: 200px;
  text-align: left;
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
.prestige-detail__facts {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 40px;
  padding-bottom: 20px;
}
.prestige-detail__loc {
  background: #000;
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
  font-size: clamp(18px, 2.2vw, 20px);
  color: #fff;
  line-height: 1.2;
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

@media (max-width: 575.98px) {
  .prestige-detail__fact-value { font-size: 20px; }
}
</style>
