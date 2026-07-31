<template>
  <section id="our-leadership" class="prestige-leadership-area pt-40 pb-140">
    <div class="container container-1430">
      <header class="prestige-leadership-header">
        <span class="prestige-leadership-eyebrow">Our Leadership</span>
        <h2 class="prestige-leadership-title tp_reveal_anim" data-delay="0.05">
          Guided by Experience
        </h2>
      </header>

      <div class="prestige-leadership-grid">
        <article
          v-for="(leader, index) in leaders"
          :key="leader.name"
          class="prestige-leadership-card tp_fade_anim"
          data-fade-from="bottom"
          data-fade-offset="28"
          :data-delay="index * 0.1"
          data-duration="0.75"
        >
          <div class="prestige-leadership-image-wrap">
            <img
              class="prestige-leadership-image"
              :src="leader.image"
              :alt="`${leader.name}, ${leader.role}`"
              loading="lazy"
              decoding="async"
            >
          </div>
          <div class="prestige-leadership-content">
            <span class="prestige-leadership-role">{{ leader.role }}</span>
            <h3 class="prestige-leadership-name">{{ leader.name }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PrestigeLeader {
  name: string;
  role: string;
  image: string;
}

const leaders: PrestigeLeader[] = [
  {
    name: "Sulaiman Saifi",
    role: "Vice Chairman",
    image: "/assets/images/v2/pages/Sulaiman_Saifi.webp",
  },
  {
    name: "Ajmal Saifi",
    role: "Founder & CEO",
    image: "/assets/images/v2/pages/Ajmal-CEO.webp",
  },
];
</script>

<style scoped>
.prestige-leadership-area {
  scroll-margin-top: 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.prestige-leadership-header {
  max-width: 760px;
  margin: 0 auto clamp(54px, 7vw, 84px);
  text-align: center;
}

.prestige-leadership-eyebrow {
  display: block;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.prestige-leadership-title {
  margin: 0;
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #fff;
  text-align: center;
}

.prestige-leadership-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(20px, 2.7vw, 34px);
}

.prestige-leadership-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  min-height: clamp(330px, 29vw, 390px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 11px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.012));
}

.prestige-leadership-image-wrap {
  min-width: 0;
  overflow: hidden;
}

.prestige-leadership-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.prestige-leadership-content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(28px, 3.5vw, 48px);
}

.prestige-leadership-role {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.prestige-leadership-name {
  margin: 16px 0 0;
  font-size: clamp(30px, 3vw, 30px);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.8px;
  color: #fff;
}

@media (hover: hover) {
  .prestige-leadership-card:hover .prestige-leadership-image {
    transform: scale(1.035);
  }
}

@media (max-width: 991.98px) {
  .prestige-leadership-grid {
    grid-template-columns: 1fr;
  }

  .prestige-leadership-card {
    min-height: 380px;
  }
}

@media (max-width: 575.98px) {
  .prestige-leadership-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .prestige-leadership-header {
    margin-bottom: 38px;
  }

  .prestige-leadership-card {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .prestige-leadership-image-wrap {
    aspect-ratio: 4 / 3;
  }

  .prestige-leadership-content {
    min-height: 150px;
    padding: 28px 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-leadership-image {
    transition: none;
  }
}
</style>
