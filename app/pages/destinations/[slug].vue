<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main v-if="dest" class="prestige-page">
            <prestige-page-hero
              class="prestige-destination-detail-hero"
              :class="{ 'prestige-destination-detail-hero--centered': isDubaiMaritimeCity }"
              :eyebrow="isDubaiMaritimeCity ? 'DUBAI MARITIME CITY' : dest.region"
              :title="isDubaiMaritimeCity ? 'Waterfront Living, Close to the Heart of Dubai' : dName(dest)"
              :lead="isDubaiMaritimeCity ? undefined : dIntro"
              :image="dest.image"
              :show-actions="!isDubaiMaritimeCity"
            >
              <template #actions>
                <span class="prestige-detail__badge">{{ areaProjects.length ? developmentsBadge : t('dp.detail.badge_new') }}</span>
                <nuxt-link :to="localePath('/contact-us')" class="prestige-btn">{{ t('dp.detail.enquire') }}</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- 1 · about + sub-areas -->
            <section class="prestige-section prestige-detail-heading--swapped">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-7 col-lg-7 mb-40">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('dp.detail.area_eyebrow') }}</span>
                    <div class="prestige-prose tp_fade_anim" data-delay=".3">
                      <p v-for="(para, i) in dAbout" :key="i">{{ para }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4 offset-xl-1 col-lg-5">
                    <div v-if="dest.subAreas?.length" class="prestige-dest-sub tp_fade_anim" data-delay=".4">
                      <h4 class="prestige-detail__mini">{{ t('dp.detail.subareas_title') }}</h4>
                      <ul>
                        <li v-for="(s, i) in dest.subAreas" :key="i"><span class="prestige-detail__dot" />{{ s }}</li>
                      </ul>
                    </div>
                    <ul class="prestige-dest-highlights tp_fade_anim" data-delay=".45">
                      <li v-for="(h, i) in dHighlights" :key="i"><span class="prestige-detail__dot" />{{ h }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- 2 · key stats -->
            <prestige-stat-band class="prestige-destination-statband" :stats="dest.stats" />

            <!-- 3 · nearby attractions -->
            <section class="prestige-section prestige-detail-heading--swapped">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 mb-40">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('dp.detail.nearby_eyebrow') }}</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ t('dp.detail.nearby_title') }}</h2>
                  </div>
                  <div class="col-xl-8">
                    <ul class="prestige-detail__poi prestige-dest-poi tp_fade_anim" data-delay=".3">
                      <li v-for="(p, i) in dest.attractions" :key="i">
                        <span>{{ p.name }}</span><span class="prestige-detail__poi-time">{{ p.time }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- 4 · connectivity -->
            <section class="prestige-section--tight prestige-dest-band prestige-detail-heading--swapped">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('dp.detail.transport_eyebrow') }}</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ t('dp.detail.transport_title') }}</h2>
                  </div>
                  <div class="col-xl-8">
                    <ul class="prestige-detail__conn tp_fade_anim" data-delay=".3">
                      <li v-for="(transport, i) in dTransport" :key="i"><span class="prestige-detail__dot" />{{ transport }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- cinematic interlude -->
            <prestige-statement-band
              :eyebrow="t('dp.detail.statement_eyebrow')"
              :text="dIntro"
              :image="dest.image"
            />

            <!-- 5 · essentials -->
            <section class="prestige-section prestige-detail-heading--swapped">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('dp.detail.essentials_eyebrow') }}</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">{{ t('dp.detail.essentials_title') }}</h2>
                <div class="row">
                  <div class="col-md-4 mb-30">
                    <h4 class="prestige-detail__mini tp_fade_anim" data-delay=".3">{{ t('dp.detail.education') }}</h4>
                    <ul class="prestige-detail__list tp_fade_anim" data-delay=".35">
                      <li v-for="(e, i) in dest.education" :key="i">{{ e }}</li>
                    </ul>
                  </div>
                  <div class="col-md-4 mb-30">
                    <h4 class="prestige-detail__mini tp_fade_anim" data-delay=".4">{{ t('dp.detail.healthcare') }}</h4>
                    <ul class="prestige-detail__list tp_fade_anim" data-delay=".45">
                      <li v-for="(h, i) in dest.healthcare" :key="i">{{ h }}</li>
                    </ul>
                  </div>
                  <div v-if="dest.worship?.length" class="col-md-4 mb-30">
                    <h4 class="prestige-detail__mini tp_fade_anim" data-delay=".5">{{ t('dp.detail.worship') }}</h4>
                    <ul class="prestige-detail__list tp_fade_anim" data-delay=".55">
                      <li v-for="(w, i) in dest.worship" :key="i">{{ w }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- 6 · investment -->
            <section class="prestige-section prestige-dest-invest prestige-detail-heading--swapped">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('dp.detail.invest_eyebrow') }}</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">{{ t('dp.detail.invest_title') }}</h2>
                <div class="row">
                  <div
                    v-for="(inv, i) in dInvestment"
                    :key="i"
                    class="col-xl-4 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <div class="prestige-dest-invest__item">
                      <span class="prestige-dest-invest__num">{{ String(i + 1).padStart(2, '0') }}</span>
                      <p>{{ inv }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- 7 · developments -->
            <section v-if="areaProjects.length" class="prestige-section prestige-section--tight prestige-detail-heading--swapped">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ t('dp.detail.devs_eyebrow') }}</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">{{ t('dp.detail.devs_title', { name: dest.name }) }}</h2>
                <div class="row">
                  <div
                    v-for="p in areaProjects"
                    :key="p.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-project-card :project="p" />
                  </div>
                </div>
              </div>
            </section>
            <section v-else class="prestige-section prestige-section--tight text-center">
              <div class="container container-1430">
                <p class="prestige-prose">{{ t('dp.detail.devs_empty', { name: dest.name }) }}</p>
                <nuxt-link :to="localePath('/contact-us')" class="prestige-btn mt-20">{{ t('dp.detail.register') }}</nuxt-link>
              </div>
            </section>

            <!-- 8 · FAQ -->
            <prestige-faq-accordion class="prestige-detail-heading--swapped" :eyebrow="t('dp.detail.faq_eyebrow')" :title="t('dp.detail.faq_title', { name: dest.name })" :items="faqs" />

            <!-- 9 · CTA + contact -->
            <prestige-cta-band
              :eyebrow="t('dp.detail.cta_eyebrow')"
              :title="t('dp.detail.cta_title', { name: dest.name })"
              :text="t('dp.detail.cta_text', { name: dest.name })"
              :image="dest.image"
              :primary-label="t('dp.detail.enquire')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="t('dp.detail.cta_secondary')"
              :secondary-to="localePath('/destinations')"
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
import { getDestinationBySlug, getProjectsForDestination } from "~/data/destinations-data";

interface FaqItem { q: string; a: string }

definePageMeta({ layout: false });

const { t, tm, te, rt, locale } = useI18n();
const localePath = useLocalePath();
const { dName } = useLocalizedNames();

const route = useRoute();
const dest = computed(() => getDestinationBySlug(String(route.params.slug)));
const isDubaiMaritimeCity = computed(() => dest.value?.slug === "dubai-maritime-city");

if (!dest.value) {
  throw createError({ statusCode: 404, statusMessage: "Destination not found", fatal: true });
}

// --- translated per-destination prose (ddata namespace) with English-data fallback ---
// Data lives in i18n/locales/destinations/<code>.json under `ddata.d.<slug>`.
// t()/tm() can't run inside the data module, so resolve reactively here.
function ddKey(sub: string): string {
  return `ddata.d.${dest.value?.slug ?? ""}.${sub}`;
}
function ddScalar(sub: string, fallback: string): string {
  void locale.value; // re-run on locale switch
  const key = ddKey(sub);
  return te(key) ? t(key) : fallback;
}
function ddArray(sub: string, fallback: string[]): string[] {
  void locale.value; // re-run on locale switch
  const key = ddKey(sub);
  if (!te(key)) return fallback;
  const raw = tm(key) as unknown[];
  if (!Array.isArray(raw) || raw.length === 0) return fallback;
  return raw.map((item) => (typeof item === "string" ? item : rt(item as never)));
}

const dIntro = computed(() => ddScalar("intro", dest.value?.intro ?? ""));
const dAbout = computed(() => ddArray("about", dest.value?.about ?? []));
const dTransport = computed(() => ddArray("transport", dest.value?.transport ?? []));
const dInvestment = computed(() => ddArray("investment", dest.value?.investment ?? []));
const dHighlights = computed(() => ddArray("highlights", dest.value?.highlights ?? []));

const areaProjects = computed(() => (dest.value ? getProjectsForDestination(dest.value) : []));
const developmentsBadge = computed(() => {
  const n = areaProjects.value.length;
  return n === 1 ? t("dp.card.count_one", { n }) : t("dp.card.count_other", { n });
});

const faqs = computed<FaqItem[]>(() => {
  const d = dest.value!;
  return [
    { q: t("dp.detail.faq.q1", { name: d.name }), a: `${dAbout.value[0] ?? d.about[0]}` },
    { q: t("dp.detail.faq.q2", { name: d.name }), a: `${dTransport.value.slice(0, 2).join(". ")}.` },
    { q: t("dp.detail.faq.q3"), a: `${d.attractions.slice(0, 3).map((a) => `${a.name} (${a.time})`).join(", ")} and more.` },
    { q: t("dp.detail.faq.q4", { name: d.name }), a: `${dInvestment.value.slice(0, 3).join("; ")}.` },
  ];
});

useSeoMeta({
  title: () => t("dp.detail.seo_title", { name: dest.value?.name ?? "" }),
  description: () => dIntro.value,
  ogImage: () => dest.value?.image,
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-destination-detail-hero {
  align-items: flex-end;
}
.prestige-destination-detail-hero--centered {
  align-items: center;
}
:deep(.prestige-destination-detail-hero--centered .prestige-hero-band__inner) {
  padding-top: clamp(110px, 15vh, 170px);
  padding-bottom: clamp(60px, 9vh, 110px);
}
:deep(.prestige-destination-detail-hero .row) {
  justify-content: center;
  text-align: center;
}
:deep(.prestige-destination-detail-hero .col-xl-9) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep(.prestige-destination-detail-hero .prestige-hero-band__lead) {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
:deep(.prestige-destination-detail-hero .prestige-hero-band__actions) {
  justify-content: center;
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
.prestige-page :deep(.prestige-destination-statband .prestige-statband__value) {
  color: #fff;
  background: none;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke: 0;
}
.prestige-detail__mini {
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
  margin-bottom: 16px;
}
.prestige-detail__dot {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--tp-common-gold, #ffffff);
}
.prestige-dest-sub {
  margin-bottom: 30px;
}
.prestige-dest-sub ul,
.prestige-dest-highlights {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-dest-sub li,
.prestige-dest-highlights li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.82);
}
.prestige-detail__poi {
  list-style: none;
  margin: 0;
  padding: 0;
}
.prestige-detail__poi li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 17px;
  color: rgba(255, 255, 255, 0.85);
}
.prestige-dest-poi { border-top: 1px solid rgba(255, 255, 255, 0.12); }
.prestige-detail__poi-time { color: var(--tp-common-gold, #ffffff); white-space: nowrap; }
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
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.82);
}
.prestige-detail__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.prestige-detail__list li {
  padding: 12px 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.prestige-dest-band {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-dest-invest__item {
  padding-right: 16px;
}
.prestige-dest-invest__num {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 38px;
  color: var(--tp-common-gold, #ffffff);
  margin-bottom: 10px;
}
.prestige-dest-invest__item p {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}
</style>
