<!-- Data sources: app/data/destinations-data.ts; app/data/destination-page-copy.ts; app/data/projects.ts; i18n/locales/destinations/en.json -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main v-if="dest" class="prestige-page">
            <prestige-page-hero
              class="prestige-destination-detail-hero"
              :title="destinationHeroTitle"
              :lead="destinationHeroLead"
              :image="dest.image"
              :show-actions="false"
            />

            <!-- 1 · about + sub-areas -->
            <prestige-feature-split
              :class="[
                'prestige-destination-overview',
                { 'prestige-destination-overview--maritime': isDubaiMaritimeCity },
              ]"
              :eyebrow="destinationOverviewEyebrow"
              :title="destinationOverviewTitle"
              :image="destinationOverviewImage"
              :paragraphs="destinationOverviewParagraphs"
              :points="[]"
              equal-height
              reverse
              reveal-eyebrow
            />

            <!-- distance -->
            <section
              class="prestige-maritime-distance"
              :class="{ 'prestige-maritime-distance--sports-city': isDubaiSportsCity }"
            >
              <prestige-project-section-heading
                class="prestige-maritime-distance__heading"
                title="Close to What Matters"
                title-class="prestige-maritime-distance__title"
                :zoom-title="false"
              />
              <img
                class="prestige-maritime-distance__image"
                :src="destinationDistanceImage"
                :alt="`Travel times from ${dName(dest)} to key Dubai destinations`"
                loading="lazy"
              >
              <prestige-destination-distance-slider :slides="destinationDistanceSlides" />
            </section>

            <!-- Good to know -->
            <prestige-faq-accordion
              class="prestige-destination-faq"
              :eyebrow="t('dp.detail.faq_eyebrow')"
              :title="t('dp.detail.faq_title', { name: dest.name })"
              :items="faqs"
              reveal-eyebrow
            />

            <!-- developments -->
            <section
              v-if="areaProjects.length"
              class="prestige-section prestige-section--tight prestige-destination-developments"
            >
              <div class="container container-1430">
                <prestige-project-section-heading
                  class="prestige-destination-developments__heading"
                  :title="developmentsTitle"
                  :subtitle="destinationDevelopmentsSubtitle"
                  :description="destinationDevelopmentsDescription"
                  title-class="prestige-destination-developments__title"
                />
                <div class="row g-4 justify-content-center prestige-destination-developments__grid">
                  <div
                    v-for="p in areaProjects"
                    :key="p.slug"
                    class="col-xl-4 col-lg-4 col-md-6 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-project-card
                      class="prestige-destination-developments__card"
                      :project="p"
                      :show-description="isDubaiMaritimeCity"
                      :cta-label="destinationPageCopy?.developments?.cardCtaLabel"
                      :show-coming-soon="destinationPageCopy?.developments?.showComingSoon"
                    />
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

            <!-- CTA -->
            <prestige-cta-band
              class="prestige-destination-cta"
              :title="destinationCtaTitle"
              :text="destinationCtaText"
              :image="destinationCtaImage"
              :primary-label="hasDestinationCtaLabels ? 'ENQUIRE NOW' : t('dp.detail.enquire')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="hasDestinationCtaLabels ? 'EXPLORE ALL DESTINATIONS' : t('dp.detail.cta_secondary')"
              :secondary-to="localePath('/destinations')"
            />

            <!-- Get In Touch -->
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
import { getDestinationDistanceImage, getDestinationDistanceSlides } from "~/data/destination-distance-slides";
import { getDestinationPageCopy } from "~/data/destination-page-copy";

interface FaqItem { q: string; a: string }

definePageMeta({ layout: false });

const { t, tm, te, rt, locale } = useI18n();
const localePath = useLocalePath();
const { dName } = useLocalizedNames();

const route = useRoute();
const dest = computed(() => getDestinationBySlug(String(route.params.slug)));
const isDubaiMaritimeCity = computed(() => dest.value?.slug === "dubai-maritime-city");
const isDubaiIslands = computed(() => dest.value?.slug === "dubai-islands");
const isDubaiSportsCity = computed(() => dest.value?.slug === "dubai-sports-city");
const destinationPageCopy = computed(() => getDestinationPageCopy(dest.value?.slug ?? "", locale.value));
const destinationOverviewImages: Readonly<Record<string, string>> = {
  "dubai-maritime-city": "/assets/images/v3/our-destinations/maritime.webp",
  "dubai-sports-city": "/assets/images/v3/our-destinations/dubai-sport-city.webp",
  "meydan-city": "/assets/images/v3/our-destinations/meydan-city.webp",
};
const destinationCtaImages: Readonly<Record<string, string>> = {
  "jumeirah-garden-city": "/assets/project-featured-images/fauchon/fauchon-banner-x.webp",
  "meydan-city": "/assets/images/v3/project-amenities/Sanctuary/ras-al-khor-wildlife.webp",
};
const maritimeOverview = [
  "Set along Dubai’s coastline, Dubai Maritime City brings together sea views, city connectivity, and modern urban living. Its unique setting offers the calm of life by the water while keeping Dubai’s key destinations within easy reach.",
];
const dubaiIslandsOverview = [
  "Dubai Islands brings together waterfront living, open coastal surroundings, and easy access to the city. With a growing mix of residences, leisure, and hospitality, it offers a fresh way to experience Dubai with the sea at the heart of everyday life.",
];
const destinationTravelFaqs: Partial<Record<string, FaqItem>> = {
  "dubai-sports-city": {
    q: "What's nearby?",
    a: "ICC Academy – 3 mins; Dubai International Cricket Stadium – 3 mins; LALIGA Academy – 3 mins; The Els Club – 4 mins; Dubai Autodrome – 5 mins; Dubai Polo & Equestrian Club – 12 mins; Mall of the Emirates – 14 mins; Burj Khalifa – 20 mins.",
  },
  "palm-jumeirah": {
    q: "How far is Palm Jumeirah from Dubai’s key destinations?",
    a: "Dubai Marina – 15 mins; Dubai International Airport – 25 mins; Aquaventure Waterpark – 7 mins; Dubai Mall – 16 mins; Museum of the Future – 18 mins; Burj Khalifa – 16 mins.",
  },
  "meydan-city": {
    q: "How far is Meydan City from Dubai’s key destinations?",
    a: "Meydan One Mall – 3 mins; Meydan Racecourse District – 8 mins; Dubai International Airport – 16 mins; Ras Al Khor Wildlife Sanctuary – 5 mins; Dubai Mall – 5 mins; Museum of the Future – 15 mins; Burj Khalifa – 5 mins.",
  },
};

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
const destinationHeroTitle = computed(() => {
  if (destinationPageCopy.value?.heroTitle !== undefined) return destinationPageCopy.value.heroTitle;
  if (isDubaiMaritimeCity.value) return "Waterfront Living, Close to the Heart of Dubai";
  return dName(dest.value!);
});
const destinationHeroLead = computed(() => {
  if (destinationPageCopy.value?.heroLead !== undefined) return destinationPageCopy.value.heroLead;
  if (isDubaiMaritimeCity.value) return undefined;
  if (isDubaiIslands.value) return "A New Destination for Island Living";
  return dIntro.value;
});
const destinationOverviewEyebrow = computed(() => `About ${dName(dest.value!)}`);
const destinationOverviewTitle = computed(() => {
  if (destinationPageCopy.value) return destinationPageCopy.value.overviewTitle;
  if (isDubaiMaritimeCity.value) return "Where the Waterfront Meets the City";
  if (isDubaiIslands.value) return "A New Side of Dubai, Shaped by the Sea.";
  return `Experience ${dName(dest.value!)}`;
});
const destinationOverviewImage = computed(() =>
  destinationOverviewImages[dest.value!.slug] ?? dest.value!.image
);
const destinationCtaImage = computed(() =>
  destinationCtaImages[dest.value!.slug] ?? dest.value!.image
);
const destinationOverviewParagraphs = computed(() => {
  if (destinationPageCopy.value) return destinationPageCopy.value.overviewParagraphs;
  if (isDubaiMaritimeCity.value) return maritimeOverview;
  if (isDubaiIslands.value) return dubaiIslandsOverview;
  return dAbout.value;
});
const destinationDistanceSlides = computed(() =>
  getDestinationDistanceSlides(dest.value!.slug)
);
const destinationDistanceImage = computed(() =>
  getDestinationDistanceImage(dest.value!.slug)
);

const areaProjects = computed(() => (dest.value ? getProjectsForDestination(dest.value) : []));
const developmentsTitle = computed(() => `PRESTIGE ONE IN ${dName(dest.value!).toUpperCase()}`);
const destinationDevelopmentsSubtitle = computed(() => {
  if (destinationPageCopy.value?.developments) return destinationPageCopy.value.developments.subtitle;
  return isDubaiIslands.value ? "Homes Shaped by Island Living." : "";
});
const destinationDevelopmentsDescription = computed(() => {
  if (destinationPageCopy.value?.developments) {
    return destinationPageCopy.value.developments.description;
  }
  return isDubaiIslands.value
    ? "Explore Prestige One developments created to make the most of Dubai Islands’ coastal setting and relaxed way of life."
    : "";
});
const destinationCtaTitle = computed(() => {
  if (destinationPageCopy.value) return destinationPageCopy.value.ctaTitle;
  if (isDubaiMaritimeCity.value) return "Dubai Maritime City";
  if (isDubaiIslands.value) return "A Different Side of Island Living";
  return t("dp.detail.cta_title", { name: dest.value!.name });
});
const destinationCtaText = computed(() => {
  if (destinationPageCopy.value) return destinationPageCopy.value.ctaText;
  if (isDubaiMaritimeCity.value) return "Waterfront Living, Within Reach.";
  return t("dp.detail.cta_text", { name: dest.value!.name });
});
const hasDestinationCtaLabels = computed(() =>
  isDubaiMaritimeCity.value || !!destinationPageCopy.value
);

const faqs = computed<FaqItem[]>(() => {
  const d = dest.value!;
  const travelFaq = destinationTravelFaqs[d.slug] ?? {
    q: t("dp.detail.faq.q3"),
    a: `${d.attractions.slice(0, 3).map((a) => `${a.name} (${a.time})`).join(", ")} and more.`,
  };

  return [
    { q: t("dp.detail.faq.q1", { name: d.name }), a: `${dAbout.value[0] ?? d.about[0]}` },
    { q: t("dp.detail.faq.q2", { name: d.name }), a: `${dTransport.value.slice(0, 2).join(". ")}.` },
    travelFaq,
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
.prestige-page {
  --prestige-destination-section-heading-size: clamp(25px, 4.4vw, 30px);
}
.prestige-destination-detail-hero {
  align-items: center;
}
:deep(.prestige-destination-detail-hero .prestige-hero-band__inner) {
  padding-top: clamp(50px, 8vh, 110px);
  padding-bottom: clamp(50px, 8vh, 110px);
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
:deep(.prestige-destination-detail-hero .prestige-hero-band__title) {
  font-size: clamp(34px, 4.4vw, 40px);
}
:deep(.prestige-heading) {
  font-size: clamp(34px, 4.4vw, 40px);
}
.prestige-destination-faq :deep(.prestige-faq__row:first-child .prestige-faq__q) {
  padding-top: 0;
}
.prestige-page :deep(.prestige-fsplit .prestige-heading) {
  font-size: clamp(25px, 4.4vw, 30px);
}
.prestige-maritime-distance {
  width: 100%;
  padding: clamp(40px, 6vw, 80px) 0;
  border: 0;
  background: #000;
}
.prestige-maritime-distance__heading {
  margin-bottom: clamp(26px, 3vw, 42px);
}
:deep(.prestige-maritime-distance__title) {
  font-size: clamp(25px, 4.4vw, 30px) !important;
}
.prestige-maritime-distance__image {
  display: block;
  width: 100%;
  max-width: 70vw;
  height: auto;
  margin: 0 auto;
  border: 0;
  border-radius: 0;
}
.prestige-maritime-distance--sports-city .prestige-maritime-distance__image {
  max-width: 80vw;
}
:deep(.prestige-destination-overview .col-lg-6:last-child) {
  display: flex;
  align-items: center;
}
:deep(.prestige-destination-overview .prestige-fsplit__body) {
  width: 100%;
}
:deep(.prestige-destination-overview .prestige-eyebrow) {
  font-size: var(--prestige-destination-section-heading-size);
  letter-spacing: 1px;
}
.prestige-page :deep(.prestige-destination-overview .prestige-heading) {
  font-size: 20px !important;
}
:deep(.prestige-destination-overview .prestige-prose) {
  font-size: 15px;
}
:deep(.prestige-destination-overview .prestige-fsplit__media.is-fill) {
  min-height: 440px;
}
:deep(.prestige-destination-faq .prestige-eyebrow),
:deep(.prestige-destination-developments__title),
:deep(.prestige-destination-cta .prestige-heading),
:deep(.prestige-contact-heading .prestige-section-heading__title) {
  font-size: var(--prestige-destination-section-heading-size) !important;
  line-height: 1.15;
}
:deep(.prestige-destination-faq .prestige-heading) {
  font-size: 20px !important;
}
:deep(.prestige-destination-faq .prestige-eyebrow) {
  letter-spacing: 0;
}
.prestige-destination-developments__heading {
  margin-bottom: clamp(34px, 4vw, 50px);
}
.prestige-destination-developments__heading :deep(.prestige-project-heading__subtitle) {
  margin-top: 10px;
}
.prestige-destination-developments__heading :deep(.prestige-project-heading__description) {
  width: 100%;
  max-width: 620px;
  margin-top: 10px;
}
.prestige-destination-developments :deep(.prestige-destination-developments__card .prestige-pcard__body) {
  text-align: center;
}

@media (max-width: 767.98px) {
  .prestige-maritime-distance__image {
    display: none;
  }

  :deep(.prestige-destination-overview .prestige-eyebrow),
  :deep(.prestige-destination-overview .prestige-heading),
  :deep(.prestige-destination-faq .prestige-eyebrow),
  :deep(.prestige-destination-faq .prestige-heading),
  :deep(.prestige-destination-cta .prestige-eyebrow),
  :deep(.prestige-destination-cta .prestige-heading),
  :deep(.prestige-contact-heading .prestige-section-heading__title),
  :deep(.prestige-contact-heading .prestige-section-heading__subtitle),
  .prestige-destination-developments__title {
    text-align: center;
  }

  :deep(.prestige-destination-overview .prestige-eyebrow),
  :deep(.prestige-destination-faq .prestige-eyebrow) {
    display: block;
    width: 100%;
  }

  :deep(.prestige-destination-overview .prestige-prose) {
    text-align: center;
  }
}

@media (max-width: 575.98px) {
  :deep(.prestige-destination-detail-hero .prestige-hero-band__inner) {
    padding-right: 24px;
    padding-left: 24px;
  }

  :deep(.prestige-destination-detail-hero .prestige-hero-band__title) {
    font-size: clamp(25px, 7vw, 40px);
  }

  :deep(.prestige-destination-overview .prestige-eyebrow) {
    font-size: var(--prestige-destination-section-heading-size);
    letter-spacing: 1px;
  }

  .prestige-page :deep(.prestige-destination-overview .prestige-heading) {
    font-size: 20px !important;
  }
}
</style>
