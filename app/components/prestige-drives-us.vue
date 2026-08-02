<template>
  <section class="prestige-drives-area pt-40 pb-80">
    <div class="container container-1430">
      <header class="prestige-drives-header">
        <span class="prestige-drives-eyebrow">{{ t('ap.drives.eyebrow') }}</span>
        <h2 class="prestige-drives-title tp_reveal_anim" data-delay="0.05">
          {{ t('ap.drives.title') }}
        </h2>
      </header>

      <div class="prestige-drives-grid">
        <article
          v-for="(principle, index) in principles"
          :key="principle.title"
          class="prestige-drives-card tp_fade_anim"
          data-fade-from="bottom"
          data-fade-offset="28"
          :data-delay="index * 0.08"
          data-duration="0.7"
        >
          <img
            class="prestige-drives-image"
            :src="principle.image"
            :alt="principle.title"
            loading="lazy"
            decoding="async"
          >
          <div class="prestige-drives-overlay"></div>
          <div class="prestige-drives-content">
            <h3 class="prestige-drives-card-title">{{ principle.title }}</h3>
            <p class="prestige-drives-description">{{ principle.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PrestigeDrivePrinciple {
  title: string;
  description: string;
  image: string;
}

const { t } = useI18n();

const principles = computed<PrestigeDrivePrinciple[]>(() => [
  {
    title: t("ap.drives.p1Title"),
    description: t("ap.drives.p1Desc"),
    image: "/assets/images/v3/MADE-AROUND-PEOPLE.webp",
  },
  {
    title: t("ap.drives.p2Title"),
    description: t("ap.drives.p2Desc"),
    image: "/assets/images/v3/Every-Detail-Has-a-purpose.webp",
  },
  {
    title: t("ap.drives.p3Title"),
    description: t("ap.drives.p3Desc"),
    image: "/assets/images/v3/Built-on-Trust.webp",
  },
  {
    title: t("ap.drives.p4Title"),
    description: t("ap.drives.p4Desc"),
    image: "/assets/images/v3/Always-Thinking-Ahead.webp",
  },
]);
</script>

<style scoped>
.prestige-drives-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.prestige-drives-header {
  margin: 0 auto clamp(48px, 6vw, 72px);
  text-align: center;
}

.prestige-drives-eyebrow {
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.55);
}

.prestige-drives-title {
  margin: 0 auto;
  font-size: clamp(25px, 2.3vw, 40px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -1px;
  color: #fff;
  text-align: center;
}

.prestige-drives-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(14px, 1.6vw, 22px);
}

.prestige-drives-card {
  position: relative;
  min-height: clamp(300px, 28vw, 420px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  isolation: isolate;
}

.prestige-drives-image,
.prestige-drives-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.prestige-drives-image {
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.prestige-drives-overlay {
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.06) 20%, rgba(0, 0, 0, 0.88) 100%),
    linear-gradient(120deg, transparent 38%, rgba(0, 0, 0, 0.28));
}

.prestige-drives-content {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  padding: clamp(26px, 4vw, 44px);
}

.prestige-drives-card-title {
  margin: 0 0 12px;
  font-size: clamp(23px, 2.3vw, 27px);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: #fff;
}

.prestige-drives-description {
  max-width: 480px;
  margin: 0;
  font-size: clamp(14px, 1.2vw, 17px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
}

@media (hover: hover) {
  .prestige-drives-card:hover .prestige-drives-image {
    transform: scale(1.035);
  }
}

@media (max-width: 767.98px) {
  .prestige-drives-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .prestige-drives-header {
    margin-bottom: 36px;
  }

  .prestige-drives-title {
    font-size: clamp(30px, 9vw, 42px);
  }

  .prestige-drives-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (min-width: 768px) and (max-width: 1199.98px) {
  .prestige-drives-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .prestige-drives-card {
    min-height: 360px;
    border-radius: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-drives-image {
    transition: none;
  }
}
</style>
