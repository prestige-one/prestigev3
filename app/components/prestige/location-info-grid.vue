<template>
  <div class="prestige-loc-info">
    <article v-for="group in groups" :key="group.key" class="prestige-loc-info__card">
      <header class="prestige-loc-info__header">
        <span class="prestige-loc-info__icon" aria-hidden="true">
          <svg v-if="group.key === 'schools'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
            <path d="m3 9 9-5 9 5-9 5-9-5Z" />
            <path d="M6 11.5V17c3.8 2.7 8.2 2.7 12 0v-5.5M21 9v7" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
            <path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z" />
            <path d="M9 12h6M12 9v6" />
          </svg>
        </span>
        <div class="prestige-loc-info__heading">
          <span>Local essentials</span>
          <h3>{{ group.title }}</h3>
        </div>
      </header>

      <ol class="prestige-loc-info__list">
        <li v-for="(item, index) in group.items" :key="item">
          <span class="prestige-loc-info__number">{{ pad(index + 1) }}</span>
          <span class="prestige-loc-info__name">{{ item }}</span>
          <span class="prestige-loc-info__arrow" aria-hidden="true">↗</span>
        </li>
      </ol>
    </article>
  </div>
</template>

<script setup lang="ts">
interface LocationInfoGroup {
  key: string;
  title: string;
  items: string[];
}

defineProps<{ groups: LocationInfoGroup[] }>();

const pad = (value: number) => String(value).padStart(2, "0");
</script>

<style scoped>
.prestige-loc-info {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(18px, 2vw, 28px);
}
.prestige-loc-info__card {
  position: relative;
  overflow: hidden;
  padding: clamp(26px, 3vw, 42px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background:
    radial-gradient(circle at 8% 0%, rgba(255, 255, 255, 0.07), transparent 32%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015));
}
.prestige-loc-info__card::after {
  position: absolute;
  right: -70px;
  bottom: -90px;
  width: 220px;
  height: 220px;
  content: "";
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 50%;
  pointer-events: none;
}
.prestige-loc-info__header {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-loc-info__icon {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.86);
}
.prestige-loc-info__icon svg { width: 25px; height: 25px; }
.prestige-loc-info__heading span {
  display: block;
  margin-bottom: 5px;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.42);
}
.prestige-loc-info__heading h3 {
  margin: 0;
  font-size: clamp(20px, 1.7vw, 27px);
  font-weight: 400;
  line-height: 1.1;
  color: #fff;
}
.prestige-loc-info__count {
  display: grid;
  min-width: 42px;
  height: 32px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.58);
}
.prestige-loc-info__list {
  margin: 0;
  padding: 12px 0 0;
  list-style: none;
}
.prestige-loc-info__list li {
  position: relative;
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) auto;
  align-items: center;
  min-height: 64px;
  gap: 12px;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  transition: color 0.3s ease, background 0.3s ease, padding-left 0.3s ease;
}
.prestige-loc-info__list li:last-child { border-bottom: 0; }
.prestige-loc-info__list li:hover {
  padding-left: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.055);
  color: #fff;
}
.prestige-loc-info__number {
  font-size: 11px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.34);
  font-variant-numeric: tabular-nums;
}
.prestige-loc-info__name {
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.4;
}
.prestige-loc-info__arrow {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.28);
  transition: color 0.3s ease, transform 0.3s ease;
}
.prestige-loc-info__list li:hover .prestige-loc-info__arrow {
  color: #fff;
  transform: translate(2px, -2px);
}

@media (max-width: 767.98px) {
  .prestige-loc-info { grid-template-columns: 1fr; }
  .prestige-loc-info__card { padding: 24px 18px; }
  .prestige-loc-info__header { gap: 13px; }
  .prestige-loc-info__icon { width: 46px; height: 46px; }
  .prestige-loc-info__list li { padding-inline: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-loc-info__list li,
  .prestige-loc-info__arrow { transition-duration: 0.01ms; }
}
</style>
