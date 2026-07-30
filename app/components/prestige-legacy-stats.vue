<template>
  <section class="prestige-legacy-area">
    <div class="container container-1430">
      <div class="prestige-legacy-panel">
        <span class="prestige-legacy-eyebrow">Legacy &amp; Credibility</span>
        <h2 class="prestige-legacy-title tp_reveal_anim">
          Nearly 60 years as a business group. 19 years shaping Dubai real estate.
        </h2>
        <p class="prestige-legacy-desc">
          Prestige One has been active in Dubai real estate since 2007, bringing 19 years of market experience. As part of a wider group in business since 1976, we carry nearly six decades of discipline, trust, and long-term vision into every development.
        </p>

        <div class="prestige-legacy-grid">
          <div v-for="stat in stats" :key="stat.label" class="prestige-legacy-card">
            <span class="prestige-legacy-shine" />
            <span class="prestige-legacy-icon">
              <component :is="stat.icon" />
            </span>
            <span class="prestige-legacy-value">{{ stat.value }}</span>
            <span class="prestige-legacy-divider" />
            <span class="prestige-legacy-label">{{ stat.label }}</span>
          </div>

          <div class="prestige-legacy-card prestige-legacy-card-sponsor">
            <span class="prestige-legacy-shine" />
            <div class="prestige-legacy-sponsor-logos">
              <img
                src="/assets/images/v3/only-logo-light.webp"
                alt="Prestige One"
                class="prestige-legacy-sponsor-mark"
              >
              <span class="prestige-legacy-sponsor-sep" />
              <img
                src="/assets/images/v2/pages/AFA-logo-400.webp"
                alt="Argentina Football Association"
                class="prestige-legacy-sponsor-afa"
              >
            </div>
            <span class="prestige-legacy-sponsor-name">Prestige One Developments</span>
            <span class="prestige-legacy-sponsor-caption">
              Regional Sponsor of the<br>Argentina National Team
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StarLegacy from "./svg/star/star-legacy.vue";
import BuildingOne from "./svg/building/building-one.vue";
import MapOne from "./svg/map/map-one.vue";
import FolderOne from "./svg/folder/folder-one.vue";
import HouseOne from "./svg/house/house-one.vue";

const stats = [
  { icon: StarLegacy, value: "Since 1967", label: "Group Business Legacy" },
  { icon: BuildingOne, value: "Est. 2007", label: "In Dubai, UAE" },
  { icon: MapOne, value: "21+", label: "Destinations Worldwide" },
  { icon: FolderOne, value: "32+", label: "Developing Projects" },
  { icon: HouseOne, value: "3500+", label: "Commercial and Residential Units" },
];
</script>

<style scoped>
.prestige-legacy-area {
  background-color: #000;
  padding: 90px 0 120px;
}

.prestige-legacy-panel {
  position: relative;
  padding: 48px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
}

.prestige-legacy-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 18px;
}

.prestige-legacy-title {
  font-size: clamp(22px, 2.6vw, 32px);
  font-weight: 500;
  line-height: 1.3;
  color: #fff;
  margin: 0 0 16px;
  max-width: 900px;
}

.prestige-legacy-desc {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 40px;
  max-width: 880px;
}

/* ---- stat grid ---- */

.prestige-legacy-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.prestige-legacy-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: radial-gradient(120% 100% at 50% 0%, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.015) 60%);
  transition: transform 0.35s ease, border-color 0.35s ease, background-color 0.35s ease;
}

.prestige-legacy-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.28);
}

/* "reflecting" glare — a skewed light band parked just off the card's left
   edge, swept across to the right on hover. */
.prestige-legacy-shine {
  position: absolute;
  top: 0;
  left: -75%;
  width: 45%;
  height: 100%;
  background: linear-gradient(115deg, transparent, rgba(255, 255, 255, 0.22), transparent);
  transform: skewX(-20deg);
  transition: left 0.75s ease;
  pointer-events: none;
}

.prestige-legacy-card:hover .prestige-legacy-shine {
  left: 130%;
}

.prestige-legacy-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  color: #111;
  margin-bottom: 20px;
}

.prestige-legacy-value {
  font-size: clamp(22px, 2vw, 26px);
  font-weight: 700;
  color: #fff;
}

.prestige-legacy-divider {
  display: block;
  width: 34px;
  height: 1px;
  margin: 16px 0;
  background: rgba(255, 255, 255, 0.2);
}

.prestige-legacy-label {
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

/* ---- sponsor card ---- */

.prestige-legacy-card-sponsor {
  justify-content: center;
}

.prestige-legacy-sponsor-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 18px;
}

.prestige-legacy-sponsor-mark {
  height: 34px;
  width: auto;
}

.prestige-legacy-sponsor-sep {
  width: 1px;
  height: 34px;
  background: rgba(255, 255, 255, 0.2);
}

.prestige-legacy-sponsor-afa {
  height: 44px;
  width: auto;
}

.prestige-legacy-sponsor-name {
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 6px;
}

.prestige-legacy-sponsor-caption {
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 991.98px) {
  .prestige-legacy-panel {
    padding: 34px 24px;
  }

  .prestige-legacy-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .prestige-legacy-grid {
    grid-template-columns: 1fr;
  }
}
</style>
