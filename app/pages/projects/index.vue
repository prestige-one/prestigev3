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
const all = getAllProjects();

const portfolioStats = [
  { value: `${all.length}`, label: "Developments" },
  { value: "10", label: "Destinations" },
  { value: "2", label: "Countries" },
  { value: "100%", label: "Freehold" },
];

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
  activeCategory.value === "all"
    ? all
    : all.filter((p) => p.category === activeCategory.value),
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
  margin-bottom: 60px;
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
