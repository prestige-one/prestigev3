<template>
  <div class="prestige-timeline">
    <div class="prestige-timeline__line" aria-hidden="true" />
    <div
      v-for="(item, i) in items"
      :key="i"
      class="prestige-timeline__item tp_fade_anim"
      :class="i % 2 === 0 ? 'is-left' : 'is-right'"
      data-delay=".2"
    >
      <div class="prestige-timeline__node" aria-hidden="true" />
      <div class="prestige-timeline__text">
        <span class="prestige-timeline__year">{{ item.year }}</span>
        <h3 class="prestige-timeline__title">{{ item.title }}</h3>
        <p class="prestige-timeline__desc">{{ item.text }}</p>
      </div>
      <div v-if="item.image" class="prestige-timeline__media">
        <img :src="item.image" :alt="`${item.year} — ${item.title}`" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  year: string;
  title: string;
  text: string;
  image?: string;
}

defineProps<{ items: TimelineItem[] }>();
</script>

<style scoped>
.prestige-timeline {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 0;
}
/* center vertical gold line (desktop) */
.prestige-timeline__line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    rgba(217, 179, 130, 0) 0%,
    rgba(217, 179, 130, 0.55) 10%,
    rgba(217, 179, 130, 0.55) 90%,
    rgba(217, 179, 130, 0) 100%
  );
}
/* each row: text on one side of the centre line, image on the other */
.prestige-timeline__item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 90px;
  align-items: center;
  padding-bottom: 64px;
}
.prestige-timeline__item:last-child {
  padding-bottom: 0;
}
.prestige-timeline__text {
  grid-column: 1;
  text-align: right;
}
.prestige-timeline__media {
  grid-column: 2;
}
.is-right .prestige-timeline__text {
  grid-column: 2;
  text-align: left;
}
.is-right .prestige-timeline__media {
  grid-column: 1;
  grid-row: 1;
}
/* node dot on the centre line */
.prestige-timeline__node {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--tp-common-gold, #d9b382);
  box-shadow: 0 0 0 6px rgba(217, 179, 130, 0.12);
}
.prestige-timeline__year {
  display: block;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.01em;
  color: var(--tp-common-gold, #d9b382);
  margin-bottom: 10px;
}
.prestige-timeline__title {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(20px, 2.2vw, 26px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 12px;
}
.prestige-timeline__desc {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.68);
}
.prestige-timeline__media {
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 16 / 10;
  background: #101013;
}
.prestige-timeline__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.prestige-timeline__item:hover .prestige-timeline__media img {
  transform: scale(1.06);
}

/* mobile: single stacked column with the line on the left */
@media (max-width: 767.98px) {
  .prestige-timeline__line {
    left: 6px;
    transform: none;
  }
  .prestige-timeline__item {
    grid-template-columns: 1fr;
    row-gap: 20px;
    padding: 0 0 46px 34px;
  }
  .prestige-timeline__text,
  .is-right .prestige-timeline__text {
    grid-column: 1;
    text-align: left;
  }
  .prestige-timeline__media,
  .is-right .prestige-timeline__media {
    grid-column: 1;
    grid-row: auto;
  }
  .prestige-timeline__node {
    left: 0;
    transform: none;
  }
}
</style>
