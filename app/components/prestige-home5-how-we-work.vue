<template>
  <section class="prestige-home5-work">
    <div class="container container-1430">
      <prestige-section-heading
        class="prestige-home5-work__heading"
        :title="$t('hp.whyUs.title')"
        :subtitle="$t('hp.whyUs.subtitle')"
      />

      <div class="prestige-home5-work__grid">
        <article
          v-for="item in principles"
          :key="item.title"
          class="prestige-home5-work__card"
        >
          <figure class="prestige-home5-work__media">
            <img :src="item.image" :alt="item.title" loading="lazy" decoding="async">
          </figure>

          <div class="prestige-home5-work__content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PrestigePrinciple {
  title: string;
  description: string;
  image: string;
}

const { t } = useI18n();

const principles = computed<PrestigePrinciple[]>(() => [
  {
    title: t("hp.whyUs.item1Title"),
    description: t("hp.whyUs.item1Desc"),
    image: "/assets/images/v3/prestige-one-where-opportunity-grows.webp",
  },
  {
    title: t("hp.whyUs.item2Title"),
    description: t("hp.whyUs.item2Desc"),
    image: "/assets/images/v3/Designed-Around-Life-5.webp",
  },
  {
    title: t("hp.whyUs.item3Title"),
    description: t("hp.whyUs.item3Desc"),
    image: "/assets/images/v3/Built-on-Trust-5.webp",
  },
  {
    title: t("hp.whyUs.item4Title"),
    description: t("hp.whyUs.item4Desc"),
    image: "/assets/images/v3/connected.jpeg",
  },
]);
</script>

<style scoped>
.prestige-home5-work {
  position: relative;
  padding: clamp(92px, 9vw, 145px) 0 clamp(100px, 10vw, 100px);
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 50% 8%, rgba(119, 151, 174, 0.1), transparent 32%),
    #0e0e12;
}
.prestige-home5-work__heading {
  margin-bottom: clamp(44px, 5vw, 72px);
}
.prestige-home5-work__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(16px, 1.6vw, 24px);
}
.prestige-home5-work__card {
  min-width: 0;
}
.prestige-home5-work__media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  margin: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: #16171a;
}
.prestige-home5-work__media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.2));
  pointer-events: none;
}
.prestige-home5-work__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.5s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-home5-work__content {
  padding: 24px 4px 0;
}
.prestige-home5-work__content h3 {
  margin: 0 0 11px;
  font-size: clamp(18px, 1.45vw, 22px);
  font-weight: 500;
  line-height: 1.25;
  color: #fff;
}
.prestige-home5-work__content p {
  margin: 0;
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.62);
}

@media (hover: hover) {
  .prestige-home5-work__card:hover .prestige-home5-work__media img {
    filter: brightness(1.05);
    transform: scale(1.045);
  }
}

@media (max-width: 1199.98px) {
  .prestige-home5-work__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .prestige-home5-work__content { padding-bottom: 20px; }
}

@media (max-width: 575.98px) {
  .prestige-home5-work { padding-block: 82px 96px; }
  .prestige-home5-work__heading { margin-bottom: 38px; }
  .prestige-home5-work__grid { grid-template-columns: 1fr; gap: 24px; }
  .prestige-home5-work__content { padding: 18px 2px 4px; }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-home5-work__media img { transition-duration: 0.01ms; }
}
</style>
