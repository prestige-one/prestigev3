<template>
  <section class="prestige-devyears-area pt-140 pb-140">
    <div class="container container-1430">
      <header class="prestige-devyears-header">
        <span class="prestige-devyears-eyebrow">OUR DEVELOPMENTS</span>
        <h2 class="prestige-devyears-title tp_reveal_anim" data-delay="0.05">
          Where Vision Shapes Addresses.
        </h2>
      </header>

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
            :to="`/projects/${p.slug}`"
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
        </div>
      </div>

      <div class="prestige-devyears-cta">
        <nuxt-link to="/projects" class="prestige-devyears-explore">
          Explore All Developments <span aria-hidden="true">→</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import residentialDevelopments from "~/data/residential-developments-data";
import { slugify } from "~/data/projects";

// developments grouped into visual chapters by year (content plan section 08).
// Titles map to the residential catalogue so each card reuses the real render.
const YEARS: { year: string; titles: string[] }[] = [
  {
    year: "2023",
    titles: ["Vista by Prestige One", "The Residence by Prestige One"],
  },
  {
    year: "2024",
    titles: [
      "Waterway by Prestige One",
      "Seaside by Prestige One",
      "Place by Prestige One",
      "Parkway by Prestige One",
      "The One by Prestige One",
    ],
  },
  {
    year: "2025",
    titles: [
      "The Boulevard by Prestige One",
      "Coastal Haven by Prestige One",
      "Luxury Canal Residences by Prestige One",
      "Berkeley Square North",
      "Hilton Residences Dubai Maritime City",
    ],
  },
  {
    year: "2026",
    titles: ["Sanctuary Residences by Prestige One", "FAUCHON Résidences by Prestige One"],
  },
];

const bySlideTitle = new Map(residentialDevelopments.map((s) => [s.title, s]));

const developmentsByYear = YEARS.map((block) => ({
  year: block.year,
  projects: block.titles
    .map((title) => {
      const slide = bySlideTitle.get(title);
      if (!slide) return null;
      return {
        name: slide.title.replace(/\s+by Prestige One$/i, ""),
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
.prestige-devyears-eyebrow {
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.55);
}
.prestige-devyears-title {
  margin: 0 auto;
  font-size: clamp(25px, 2.3vw, 40px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -1px;
  color: #fff;
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
  color: transparent;
  background: linear-gradient(
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
  -webkit-text-stroke: 1px rgba(232, 245, 253, 0.9);
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
  text-transform: uppercase;
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
