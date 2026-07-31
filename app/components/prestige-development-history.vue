<template>
  <section class="prestige-development-history-area pt-40 pb-80">
    <div class="container container-1430">
      <header class="prestige-development-history-header">
        <span class="prestige-development-history-eyebrow">Our Developments</span>
        <h2 class="prestige-development-history-title tp_reveal_anim" data-delay="0.05">
          Where Vision Shapes Addresses
        </h2>
      </header>

      <div class="prestige-development-history-years">
        <section
          v-for="(yearGroup, yearIndex) in developmentYears"
          :key="yearGroup.year"
          class="prestige-development-history-year-group"
          :aria-labelledby="`prestige-development-year-${yearGroup.year}`"
        >
          <h3
            :id="`prestige-development-year-${yearGroup.year}`"
            class="prestige-development-history-year tp_fade_anim"
            data-fade-from="left"
            data-fade-offset="24"
            :data-delay="yearIndex * 0.04"
            data-duration="0.65"
          >
            <prestige-metallic-number :value="yearGroup.year" />
          </h3>

          <div class="prestige-development-history-grid">
            <NuxtLink
              v-for="(project, projectIndex) in yearGroup.projects"
              :key="project.name"
              :to="project.link"
              class="prestige-development-history-card tp_fade_anim"
              :aria-label="`View ${project.name}`"
              data-fade-from="bottom"
              data-fade-offset="24"
              :data-delay="projectIndex * 0.07"
              data-duration="0.7"
            >
              <img
                class="prestige-development-history-image"
                :src="project.image"
                :alt="project.name"
                loading="lazy"
                decoding="async"
              >
              <div class="prestige-development-history-overlay"></div>
              <div class="prestige-development-history-card-content">
                <h4>{{ project.name }}</h4>
                <span>{{ project.location }}</span>
              </div>
            </NuxtLink>
          </div>
        </section>
      </div>

      <div class="prestige-development-history-action">
        <NuxtLink to="#" class="prestige-development-history-link">
          <span>Explore All Developments</span>
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PrestigeDevelopmentHistoryProject {
  name: string;
  location: string;
  image: string;
  link: string;
}

interface PrestigeDevelopmentHistoryYear {
  year: number;
  projects: PrestigeDevelopmentHistoryProject[];
}

const developmentYears: PrestigeDevelopmentHistoryYear[] = [
  {
    year: 2023,
    projects: [
      {
        name: "Vista",
        location: "Dubai Sports City",
        image: "/assets/project-featured-images/sliders/vista.webp",
        link: "#",
      },
      {
        name: "The Residence",
        location: "Jumeirah Village Circle",
        image: "/assets/project-featured-images/sliders/residence.webp",
        link: "#",
      },
    ],
  },
  {
    year: 2024,
    projects: [
      {
        name: "Waterway",
        location: "Meydan Horizon",
        image: "/assets/project-featured-images/sliders/waterway.webp",
        link: "#",
      },
      {
        name: "Seaside",
        location: "Dubai Islands",
        image: "/assets/project-featured-images/sliders/seaside.webp",
        link: "#",
      },
      {
        name: "Place",
        location: "Dubai Sports City",
        image: "/assets/project-featured-images/golf/The-Place-Banner.webp",
        link: "#",
      },
      {
        name: "Parkway",
        location: "Meydan Horizon",
        image: "/assets/project-featured-images/sliders/parkway.webp",
        link: "#",
      },
      {
        name: "The One",
        location: "Barsha Heights",
        image: "/assets/project-featured-images/sliders/the-one-1.webp",
        link: "#",
      },
    ],
  },
  {
    year: 2025,
    projects: [
      {
        name: "The Boulevard",
        location: "DLRC",
        image: "/assets/project-featured-images/sliders/boulevard.webp",
        link: "#",
      },
      {
        name: "Coastal Haven",
        location: "Dubai Islands",
        image: "/assets/project-featured-images/sliders/coastal-heaven.webp",
        link: "#",
      },
      {
        name: "Luxury Canal Residences",
        location: "Dubai Islands",
        image: "/assets/project-featured-images/sliders/luxury-canal.webp",
        link: "#",
      },
      {
        name: "Berkeley Square North",
        location: "Jumeirah Village Circle",
        image: "/assets/project-featured-images/sliders/berkeley-north.webp",
        link: "#",
      },
      {
        name: "Hilton Residences Dubai Maritime City",
        location: "Dubai Maritime City",
        image: "/assets/project-featured-images/sliders/hilton-1.webp",
        link: "#",
      },
    ],
  },
  {
    year: 2026,
    projects: [
      {
        name: "Sanctuary Residences",
        location: "Meydan Horizon",
        image: "/assets/project-featured-images/sliders/sanctuary.webp",
        link: "#",
      },
      {
        name: "FAUCHON Résidences",
        location: "Jumeirah Garden City",
        image: "/assets/project-featured-images/sliders/fauchon.webp",
        link: "#",
      },
    ],
  },
];
</script>

<style scoped>
.prestige-development-history-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.prestige-development-history-header {
  max-width: 860px;
  margin: 0 auto clamp(66px, 8vw, 100px);
  text-align: center;
}

.prestige-development-history-eyebrow {
  display: block;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.prestige-development-history-title {
  margin: 0;
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #fff;
  text-align: center;
}

.prestige-development-history-years {
  display: grid;
  gap: clamp(70px, 8vw, 110px);
}

.prestige-development-history-year-group {
  display: grid;
  grid-template-columns: minmax(145px, 155px) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 58px);
  align-items: start;
}

.prestige-development-history-year {
  margin: 0;
  font-size: clamp(56px, 6vw, 55px);
  line-height: 0.9;
  letter-spacing: -3px;
}

.prestige-development-history-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 2vw, 26px);
}

.prestige-development-history-card {
  position: relative;
  display: block;
  aspect-ratio: 1.5 / 1;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  isolation: isolate;
}

.prestige-development-history-image,
.prestige-development-history-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.prestige-development-history-image {
  object-fit: cover;
  transition: transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.prestige-development-history-overlay {
  z-index: 1;
  background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.82) 100%);
}

.prestige-development-history-card-content {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  padding: clamp(18px, 2.2vw, 28px);
}

.prestige-development-history-card-content h4 {
  margin: 0;
  font-size: clamp(16px, 1.35vw, 20px);
  font-weight: 600;
  line-height: 1.18;
  text-transform: uppercase;
  color: #fff;
}

.prestige-development-history-card-content span {
  display: block;
  margin-top: 8px;
  font-size: clamp(12px, 1vw, 14px);
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.62);
}

.prestige-development-history-card:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.9);
  outline-offset: 4px;
}

.prestige-development-history-action {
  display: flex;
  justify-content: center;
  margin-top: clamp(70px, 8vw, 110px);
}

.prestige-development-history-link {
  display: inline-flex;
  min-height: 58px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 36px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.prestige-development-history-link:hover {
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
}

@media (hover: hover) {
  .prestige-development-history-card:hover .prestige-development-history-image {
    transform: scale(1.035);
  }
}

@media (max-width: 1199.98px) {
  .prestige-development-history-year-group {
    grid-template-columns: 130px minmax(0, 1fr);
  }

  .prestige-development-history-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767.98px) {
  .prestige-development-history-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .prestige-development-history-header {
    margin-bottom: 52px;
  }

  .prestige-development-history-years {
    gap: 68px;
  }

  .prestige-development-history-year-group {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .prestige-development-history-year {
    font-size: clamp(48px, 16vw, 68px);
  }

  .prestige-development-history-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .prestige-development-history-card {
    aspect-ratio: 1.45 / 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-development-history-image,
  .prestige-development-history-link {
    transition: none;
  }
}
</style>
