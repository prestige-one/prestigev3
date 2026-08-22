<template>
  <section class="prestige-section prestige-fsplit">
    <div class="container container-1430">
      <div
        class="row"
        :class="[reverse ? 'flex-row-reverse' : '', equalHeight ? 'align-items-stretch' : 'align-items-center']"
      >
        <div class="col-lg-6 mb-40" :class="equalHeight ? 'd-flex mb-lg-0' : ''">
          <div class="prestige-fsplit__media tp_fade_anim" :class="{ 'is-fill': equalHeight }" data-delay=".2">
            <img :src="image" :alt="title" loading="lazy">
          </div>
        </div>
        <div class="col-lg-6" :class="reverse ? 'pe-lg-5' : 'ps-lg-5'">
          <div class="prestige-fsplit__body">
            <span v-if="eyebrow" class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow }}</span>
            <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ title }}</h2>
            <div class="prestige-prose tp_fade_anim" data-delay=".4" style="margin-top: 22px;">
              <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
            </div>
            <div
              v-if="featureCards?.length"
              class="prestige-fsplit__features tp_fade_anim"
              :class="{ 'has-four': featureCards.length === 4 }"
              data-delay=".5"
            >
              <article v-for="card in featureCards" :key="card.title" class="prestige-fsplit__feature">
                <h3>{{ card.title }}</h3>
                <p>{{ card.text }}</p>
              </article>
            </div>
            <ul v-if="points && points.length" class="prestige-fsplit__points tp_fade_anim" data-delay=".5">
              <li v-for="(pt, i) in points" :key="i"><span class="prestige-fsplit__dot" />{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FeatureCard {
  title: string;
  text: string;
}

defineProps<{
  title: string;
  image: string;
  paragraphs: string[];
  eyebrow?: string;
  points?: string[];
  featureCards?: FeatureCard[];
  reverse?: boolean;
  equalHeight?: boolean;
}>();
</script>

<style scoped>
.prestige-fsplit__media {
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4 / 3;
  background: #101013;
}
/* equal-height variant: image matches the text column's height */
.prestige-fsplit__media.is-fill {
  position: relative;
  aspect-ratio: auto;
  width: 100%;
  height: 100%;
  min-height: 340px;
}
.prestige-fsplit__media.is-fill img {
  position: absolute;
  inset: 0;
}
.prestige-fsplit__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-fsplit__media:hover img { transform: scale(1.05); }
.prestige-fsplit__features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}
.prestige-fsplit__feature {
  padding: 2px 20px 0;
}
.prestige-fsplit__feature:first-child {
  padding-left: 0;
}
.prestige-fsplit__feature:last-child {
  padding-right: 0;
}
.prestige-fsplit__feature + .prestige-fsplit__feature {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-fsplit__features.has-four {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 44px;
  row-gap: 0;
}
.prestige-fsplit__features.has-four .prestige-fsplit__feature {
  padding-right: 0;
  padding-left: 0;
  border-left: 0;
}
.prestige-fsplit__features.has-four .prestige-fsplit__feature:nth-child(-n + 2) {
  padding-bottom: 26px;
}
.prestige-fsplit__features.has-four .prestige-fsplit__feature:nth-child(n + 3) {
  padding-top: 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.prestige-fsplit__features.has-four .prestige-fsplit__feature:nth-child(even) {
  position: relative;
}
.prestige-fsplit__features.has-four .prestige-fsplit__feature:nth-child(even)::before {
  position: absolute;
  left: -22px;
  width: 1px;
  background: rgba(255, 255, 255, 0.12);
  content: "";
}
.prestige-fsplit__features.has-four .prestige-fsplit__feature:nth-child(2)::before {
  top: 0;
  bottom: 22px;
}
.prestige-fsplit__features.has-four .prestige-fsplit__feature:nth-child(4)::before {
  top: 22px;
  bottom: 0;
}
.prestige-fsplit__feature h3 {
  margin: 0 0 12px;
  color: #fff;
  font-size: 12px;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.prestige-fsplit__feature p {
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: 13px;
  line-height: 1.55;
}
@media (max-width: 1199px) {
  .prestige-fsplit__features { grid-template-columns: 1fr; }
  .prestige-fsplit__feature,
  .prestige-fsplit__feature:first-child,
  .prestige-fsplit__feature:last-child { padding: 18px 0; }
  .prestige-fsplit__feature + .prestige-fsplit__feature {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 0;
  }
}
@media (max-width: 991px) {
  .prestige-fsplit__features { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .prestige-fsplit__feature,
  .prestige-fsplit__feature:first-child,
  .prestige-fsplit__feature:last-child { padding: 2px 20px 0; }
  .prestige-fsplit__feature:first-child { padding-left: 0; }
  .prestige-fsplit__feature:last-child { padding-right: 0; }
  .prestige-fsplit__feature + .prestige-fsplit__feature {
    border-top: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.12);
  }
}
@media (max-width: 767px) {
  .prestige-fsplit__features,
  .prestige-fsplit__features.has-four { grid-template-columns: 1fr; }
  .prestige-fsplit__feature,
  .prestige-fsplit__feature:first-child,
  .prestige-fsplit__feature:last-child { padding: 18px 0; }
  .prestige-fsplit__feature + .prestige-fsplit__feature {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 0;
  }
  .prestige-fsplit__features.has-four .prestige-fsplit__feature:nth-child(n) {
    padding: 18px 0;
  }
  .prestige-fsplit__features.has-four .prestige-fsplit__feature:nth-child(even)::before {
    display: none;
  }
}
.prestige-fsplit__points {
  list-style: none;
  margin: 26px 0 0;
  padding: 0;
}
.prestige-fsplit__points li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.82);
  font-size: 16px;
}
.prestige-fsplit__dot {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--tp-common-gold, #ffffff);
}
</style>
