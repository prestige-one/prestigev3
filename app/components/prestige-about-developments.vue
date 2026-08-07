<template>
  <section class="prestige-devyears-area pt-80 pb-100">
    <div class="container container-1430">
      <prestige-section-heading
        class="prestige-devyears-header"
        :title="t('ap.developments.eyebrow')"
        :subtitle="t('ap.developments.title')"
      />

      <div
        v-for="block in developmentsByYear"
        :key="block.year"
        class="prestige-devyears-block"
      >
        <div class="prestige-devyears-year">{{ block.year }}</div>

        <div class="prestige-devyears-grid">
          <nuxt-link
            v-for="p in block.projects"
            :key="p.slug"
            :to="localePath(`/projects/${p.slug}`)"
            class="prestige-devyears-card tp_fade_anim"
            data-fade-from="bottom"
            data-fade-offset="24"
          >
            <div class="prestige-devyears-thumb">
              <img :src="p.image" :alt="p.name" loading="lazy">
              <div class="prestige-devyears-overlay" />
              <div class="prestige-devyears-meta">
                <h3 class="prestige-devyears-name">{{ p.name }}</h3>
                <span class="prestige-devyears-loc">{{ p.location }}</span>
              </div>
            </div>
          </nuxt-link>

          <article
            v-if="block.comingSoon"
            class="prestige-devyears-coming-soon tp_fade_anim"
            data-fade-from="bottom"
            data-fade-offset="24"
          >
            <span>COMING SOON</span>
          </article>
        </div>
      </div>

      <div class="prestige-devyears-cta">
        <nuxt-link :to="localePath('/projects')" class="prestige-devyears-explore">
          {{ t('ap.developments.explore') }} <span aria-hidden="true">→</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import residentialDevelopments, { type DevelopmentSlide } from "~/data/residential-developments-data";
import commercialDevelopments from "~/data/commercial-developments-data";
import { slugify } from "~/data/projects";

const { t } = useI18n();
const localePath = useLocalePath();

// Developments grouped into visual chapters by year (content plan section 08).
// Namespaced catalogue keys keep residential and commercial IDs collision-free.
const YEARS: { year: string; projectKeys: string[] }[] = [
  {
    year: "2023",
    projectKeys: ["residential:1", "residential:2"],
  },
  {
    year: "2024",
    projectKeys: ["residential:3", "residential:4", "residential:18", "residential:6", "residential:7"],
  },
  {
    year: "2025",
    projectKeys: ["residential:8", "residential:9", "residential:10", "residential:14", "residential:13", "residential:15"],
  },
  {
    year: "2026",
    projectKeys: ["residential:16", "commercial:2", "residential:17"],
  },
];

const byProjectKey = new Map<string, DevelopmentSlide>([
  ...residentialDevelopments.map((project) => [`residential:${project.id}`, project] as const),
  ...commercialDevelopments.map((project) => [`commercial:${project.id}`, project] as const),
]);

const developmentsByYear = YEARS.map((block) => ({
  year: block.year,
  comingSoon: block.year === "2026",
  projects: block.projectKeys
    .map((projectKey) => {
      const slide = byProjectKey.get(projectKey);
      if (!slide) return null;
      return {
        name: slide.title,
        location: slide.location,
        image: slide.image,
        slug: slugify(slide.title),
      };
    })
    .filter((p): p is NonNullable<typeof p> => Boolean(p)),
}));
</script>

<style scoped>
.prestige-devyears-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-devyears-header {
  margin: 0 auto clamp(50px, 6vw, 80px);
  text-align: center;
}
/* one chapter per year: big year marker on the left, project renders on the right */
.prestige-devyears-block {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: clamp(24px, 3vw, 56px);
  padding-bottom: clamp(40px, 5vw, 74px);
}
.prestige-devyears-year {
  position: sticky;
  top: 120px;
  align-self: start;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(46px, 5vw, 55px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  color: #fff;
  /*background: linear-gradient(
    180deg,
    #f8fcff 0%,
    #b7cad7 22%,
    #819bab 23%,
    #edf8ff 46%,
    #7896aa 47%,
    #eaf6ff 79%,
    #9bb4c5 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(232, 245, 253, 0.9);*/
}
.prestige-devyears-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: clamp(16px, 1.8vw, 24px);
}
.prestige-devyears-card {
  display: block;
  color: #fff;
}
.prestige-devyears-thumb {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: #101013;
}
.prestige-devyears-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.prestige-devyears-card:hover .prestige-devyears-thumb img {
  transform: scale(1.06);
}
.prestige-devyears-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.04) 40%, rgba(0, 0, 0, 0.82) 100%);
}
.prestige-devyears-meta {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: clamp(16px, 1.6vw, 22px);
  z-index: 2;
}
.prestige-devyears-name {
  margin: 0 0 4px;
  font-size: clamp(15px, 1.2vw, 18px);
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #fff;
}
.prestige-devyears-loc {
  font-size: 12.5px;
  letter-spacing: 0.4px;
  color: var(--tp-common-gold, #ffffff);
}
.prestige-devyears-card:hover .prestige-devyears-name {
  color: #fff;
}

.prestige-devyears-coming-soon {
  display: flex;
  aspect-ratio: 4 / 3;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background:
    radial-gradient(circle at 50% 42%, rgba(153, 188, 211, 0.08), transparent 54%), linear-gradient(145deg, #45464b, #0b0b0d);
}

.prestige-devyears-coming-soon span {
  font-size: clamp(14px, 1.25vw, 18px);
  font-weight: 500;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.62);
}

.prestige-devyears-cta {
  margin-top: clamp(20px, 3vw, 40px);
  text-align: center;
}
.prestige-devyears-explore {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 34px;
  border-radius: 60px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  transition: background 0.3s ease, transform 0.3s ease;
  background: radial-gradient(circle at 50% 42%, rgba(153, 188, 211, 0.08), transparent 54%), linear-gradient(145deg, #555556, #040406);
}
.prestige-devyears-explore span { transition: transform 0.3s ease; }
.prestige-devyears-explore:hover { background: rgba(255, 255, 255, 0.08); color: #fff; transform: translateY(-2px); }
.prestige-devyears-explore:hover span { transform: translateX(4px); }

@media (max-width: 767.98px) {
  .prestige-devyears-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .prestige-devyears-block {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-bottom: 50px;
  }
  .prestige-devyears-year {
    position: static;
  }
  .prestige-devyears-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}
</style>
