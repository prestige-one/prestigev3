<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Our Portfolio"
              title="Developments"
              lead="A diverse portfolio of residential and commercial addresses across Dubai's most prestigious destinations — each one built for how people actually want to live."
              image="/assets/project-featured-images/sliders/hilton-1.webp"
            />

            <prestige-stat-band :stats="portfolioStats" />

            <section class="prestige-section">
              <div class="container container-1430">
                <!-- filter tabs -->
                <div class="prestige-filter tp_fade_anim" data-delay=".2">
                  <button
                    v-for="cat in projectCategories"
                    :key="cat.key"
                    class="prestige-filter__btn"
                    :class="{ active: activeCategory === cat.key }"
                    @click="setCategory(cat.key)"
                  >
                    {{ cat.label }}
                    <span class="prestige-filter__count">{{ countFor(cat.key) }}</span>
                  </button>
                </div>

                <!-- destination filter -->
                <div class="prestige-filter prestige-filter--dest tp_fade_anim" data-delay=".25">
                  <button
                    v-for="loc in locations"
                    :key="loc"
                    class="prestige-filter__btn prestige-filter__btn--sm"
                    :class="{ active: activeLocation === loc }"
                    @click="activeLocation = loc"
                  >
                    {{ loc }}
                  </button>
                </div>

                <!-- grid -->
                <div class="row">
                  <div
                    v-for="project in filtered"
                    :key="project.slug"
                    class="col-xl-4 col-lg-4 col-md-6 mb-50 tp_fade_anim"
                    data-delay=".2"
                  >
                    <prestige-project-card :project="project" />
                  </div>
                </div>

                <p v-if="!filtered.length" class="prestige-prose text-center mt-40">
                  No projects in this category yet — check back soon.
                </p>
              </div>
            </section>

            <prestige-cta-band
              eyebrow="Can't decide?"
              title="Let's find the right address for you"
              text="Tell us what you're looking for and our team will match you with the Prestige One developments that fit."
              image="/assets/project-featured-images/sliders/luxury-canal.webp"
              primary-label="Talk to our team"
              primary-to="/contact-us"
              secondary-label="Explore destinations"
              secondary-to="/destinations"
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
// display order — latest / flagship first, the three villas last
const ORDER = [
  "fauchon-residences-by-prestige-one",
  "sanctuary-residences-by-prestige-one",
  "hilton-residences-dubai-maritime-city",
  "seaside-by-prestige-one",
  "golf-residences-by-prestige-one",
  "berkeley-square-south",
  "berkeley-square-north",
  "luxury-canal-residences-by-prestige-one",
  "coastal-haven-by-prestige-one",
  "the-boulevard-by-prestige-one",
  "parkway-by-prestige-one",
  "the-one-by-prestige-one",
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

const portfolioStats = [
  { value: "24+", label: "Projects" },
  { value: "21+", label: "Destinations" },
  { value: "7", label: "Countries" },
  { value: "100%", label: "Freehold" },
];

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

const filtered = computed(() =>
  all.filter(
    (p) =>
      (activeCategory.value === "all" || p.category === activeCategory.value) &&
      (activeLocation.value === "All" || p.location === activeLocation.value),
  ),
);

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
.prestige-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}
.prestige-filter--dest {
  gap: 8px;
  margin-bottom: 56px;
}
.prestige-filter__btn--sm {
  padding: 8px 16px;
  font-size: 12.5px;
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
