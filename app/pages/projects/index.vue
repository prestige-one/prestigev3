<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('pp.hero.eyebrow')"
              :title="t('pp.hero.title')"
              :lead="t('pp.hero.lead')"
              image="/assets/images/v3/projects-hero-cover.webp"
              media-position="center top"
            />

            <prestige-stat-band :stats="portfolioStats" />

            <section class="prestige-section">
              <div class="container container-1430">
                <!-- filter toolbar: search | project types | destinations -->
                <div class="prestige-toolbar tp_fade_anim" data-delay=".15">
                <!-- search -->
                <div class="prestige-search">
                  <svg class="prestige-search__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
                  <input v-model="search" type="search" :placeholder="t('pp.search.placeholder')">
                </div>

                <!-- filter tabs -->
                <div class="prestige-filter">
                  <button
                    v-for="cat in projectCategories"
                    :key="cat.key"
                    class="prestige-filter__btn"
                    :class="{ active: activeCategory === cat.key }"
                    @click="setCategory(cat.key)"
                  >
                    {{ t('pp.categories.' + cat.key) }}
                    <span class="prestige-filter__count">{{ countFor(cat.key) }}</span>
                  </button>
                </div>

                <!-- destination filter (dropdown, to save vertical space) -->
                <div class="prestige-dest">
                  <div class="prestige-dest__select">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                    <select v-model="activeLocation" :aria-label="t('pp.filters.destinationAria')">
                      <option v-for="loc in locations" :key="loc" :value="loc">
                        {{ loc === 'All' ? t('pp.filters.allDestinations') : loc }}
                      </option>
                    </select>
                    <svg class="prestige-dest__caret" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
                </div>

                <!-- grid -->
                <div class="row">
                  <div
                    v-for="project in filtered"
                    :key="project.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-50 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-project-card :project="project" show-description show-coming-soon />
                  </div>
                </div>

                <p v-if="!filtered.length" class="prestige-prose text-center mt-40">
                  {{ t('pp.empty') }}
                </p>
              </div>
            </section>

            <prestige-cta-band
              :eyebrow="t('pp.cta.eyebrow')"
              :title="t('pp.cta.title')"
              :text="t('pp.cta.text')"
              image="/assets/project-featured-images/sliders/luxury-canal.webp"
              :primary-label="t('pp.cta.primary')"
              :primary-to="localePath('/contact-us')"
              :secondary-label="t('pp.cta.secondary')"
              :secondary-to="localePath('/destinations')"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import {
  getAllProjects,
  projectCategories,
  type ProjectCategory,
} from "~/data/projects";

definePageMeta({ layout: false });
useSeoMeta({
  title: "Developments | Prestige One",
  description:
    "Explore Prestige One's portfolio of residential and commercial developments across Dubai's most prestigious destinations.",
});

type CatKey = ProjectCategory | "all";
const route = useRoute();
const router = useRouter();
// display order - latest / flagship first, the three villas last
const ORDER = [
  "fauchon-residences-by-prestige-one",
  "sanctuary-residences-by-prestige-one",
  "sanctuary-hive-by-prestige-one",
  "hilton-residences-dubai-maritime-city",
  "berkeley-square-north",
  "berkeley-square-south",
  "luxury-canal-residences-by-prestige-one",
  "coastal-haven-by-prestige-one",
  "the-boulevard-by-prestige-one",
  "parkway-by-prestige-one",
  "golf-residences-by-prestige-one",
  "the-one-by-prestige-one",
  "seaside-by-prestige-one",
  "waterway-by-prestige-one",
  "vista-by-prestige-one",
  "the-residence-by-prestige-one",
  "luxe-villa-by-prestige-one",
  "seascape-villa",
  "palm-villa-by-prestige-one",
];
const orderIndex = (slug: string) => {
  const i = ORDER.indexOf(slug);
  return i === -1 ? ORDER.length + 1 : i;
};
const all = [...getAllProjects()].sort((a, b) => orderIndex(a.slug) - orderIndex(b.slug));

const { t } = useI18n();
const localePath = useLocalePath();

const portfolioStats = computed(() => [
  { value: "24+", label: t("pp.stats.projects") },
  { value: "21+", label: t("pp.stats.destinations") },
  { value: "7", label: t("pp.stats.countries") },
  { value: "100%", label: t("pp.stats.freehold") },
]);

// destination (location) filter
const locations = ["All", ...Array.from(new Set(all.map((p) => p.location)))];
const activeLocation = ref("All");

const activeCategory = ref<CatKey>(
  (route.query.category as CatKey) || "all",
);

// keep in sync when the nav submenu links change ?category=
watch(
  () => route.query.category,
  (c) => {
    activeCategory.value = (c as CatKey) || "all";
  },
);

const search = ref("");
const filtered = computed(() => {
  const q = search.value.trim().toLowerCase();
  return all.filter(
    (p) =>
      (activeCategory.value === "all" || p.category === activeCategory.value) &&
      (activeLocation.value === "All" || p.location === activeLocation.value) &&
      (!q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)),
  );
});

function countFor(key: CatKey) {
  return key === "all" ? all.length : all.filter((p) => p.category === key).length;
}

function setCategory(key: CatKey) {
  activeCategory.value = key;
  router.replace({ query: key === "all" ? {} : { category: key } });
}

usePrestigePage({ hero: false });
</script>

<style scoped>
/* one-line toolbar: search | project types | destinations dropdown */
.prestige-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 18px;
  margin-bottom: 54px;
}
.prestige-search {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 1 240px;
  max-width: 340px;
  padding: 11px 20px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.03);
}
.prestige-search__icon { color: rgba(255, 255, 255, 0.5); flex: 0 0 auto; }
.prestige-search input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14.5px;
}
.prestige-search input::placeholder { color: rgba(255, 255, 255, 0.4); }

.prestige-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* destination dropdown pushed to the right */
.prestige-dest { margin-left: auto; }
.prestige-dest__select {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 42px 11px 18px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.7);
}
.prestige-dest__select > svg:first-child { flex: 0 0 auto; color: rgba(255, 255, 255, 0.5); }
.prestige-dest__select select {
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.prestige-dest__select select option { color: #111; }
.prestige-dest__caret {
  position: absolute;
  right: 16px;
  pointer-events: none;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 767.98px) {
  .prestige-search { max-width: none; flex-basis: 100%; }
  .prestige-dest { margin-left: 0; }
  .prestige-dest__select { width: 100%; }
}
.prestige-filter__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  letter-spacing: 0.04em;
  transition: 0.3s;
}
.prestige-filter__btn:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.4);
}
.prestige-filter__btn.active {
  color: #0b0b0d;
  background: var(--tp-common-gold, #ffffff);
  border-color: var(--tp-common-gold, #ffffff);
}
.prestige-filter__count {
  font-size: 11px;
  opacity: 0.7;
}
</style>
