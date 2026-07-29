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
      <div class="prestige-timeline__card">
        <span class="prestige-timeline__year">{{ item.year }}</span>
        <h3 class="prestige-timeline__title">{{ item.title }}</h3>
        <p class="prestige-timeline__text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

defineProps<{ items: TimelineItem[] }>();
</script>

<style scoped>
.prestige-timeline {
  position: relative;
  max-width: 1000px;
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
    rgba(217, 179, 130, 0.55) 12%,
    rgba(217, 179, 130, 0.55) 88%,
    rgba(217, 179, 130, 0) 100%
  );
}
.prestige-timeline__item {
  position: relative;
  width: 50%;
  padding: 0 48px 60px;
  box-sizing: border-box;
}
.prestige-timeline__item:last-child {
  padding-bottom: 0;
}
.prestige-timeline__item.is-left {
  margin-left: 0;
  text-align: right;
}
.prestige-timeline__item.is-right {
  margin-left: 50%;
  text-align: left;
}
/* node dot on the center line */
.prestige-timeline__node {
  position: absolute;
  top: 6px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--tp-common-gold, #d9b382);
  box-shadow: 0 0 0 6px rgba(217, 179, 130, 0.12);
}
.prestige-timeline__item.is-left .prestige-timeline__node {
  right: -6.5px;
}
.prestige-timeline__item.is-right .prestige-timeline__node {
  left: -6.5px;
}
.prestige-timeline__year {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1;
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
.prestige-timeline__text {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.68);
}

/* mobile: single stacked column with the line on the left */
@media (max-width: 767.98px) {
  .prestige-timeline__line {
    left: 6px;
    transform: none;
  }
  .prestige-timeline__item {
    width: 100%;
    margin-left: 0 !important;
    padding: 0 0 44px 34px;
    text-align: left !important;
  }
  .prestige-timeline__item.is-left .prestige-timeline__node,
  .prestige-timeline__item.is-right .prestige-timeline__node {
    left: 0;
    right: auto;
  }
}
</style>
