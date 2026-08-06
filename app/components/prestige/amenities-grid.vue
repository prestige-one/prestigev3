<template>
  <section class="prestige-amen">
    <div class="container container-1430">
      <div class="prestige-amen__layout">
        <header class="prestige-amen__intro">
          <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow }}</span>
          <h2 class="prestige-amen__title tp_fade_anim" :class="headingClass" data-delay=".3">{{ title }}</h2>
          <p v-if="lead" class="prestige-amen__lead tp_fade_anim" data-delay=".4">{{ lead }}</p>
        </header>

        <div class="prestige-amen__grid">
          <article
            v-for="(a, i) in items"
            :key="a"
            class="prestige-amen__item tp_fade_anim"
            :data-delay="0.2 + (i % 4) * 0.07"
          >
            <prestige-amenity-icon :label="a" :index="i" />
            <span class="prestige-amen__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="prestige-amen__label">{{ a }}</span>
            <span
              v-if="i < items.length - 1 && (i + 1) % 4 !== 0"
              class="prestige-amen__connector"
              aria-hidden="true"
            />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ items: string[]; title: string; eyebrow: string; lead?: string; headingClass?: string }>(),
  { lead: "", headingClass: "" },
);

</script>

<style scoped>
.prestige-amen {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(62px, 10vw, 80px) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background:
    radial-gradient(circle at 14% 30%, rgba(255, 255, 255, 0.055), transparent 32%),
    radial-gradient(circle at 80% 72%, rgba(255, 255, 255, 0.025), transparent 34%),
    linear-gradient(125deg, #121417 0%, #07080a 48%, #050607 100%);
}
.prestige-amen::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  content: "";
  opacity: 0.2;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='prestigeAmenNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23prestigeAmenNoise)' opacity='.48'/%3E%3C/svg%3E");
  mix-blend-mode: soft-light;
}
.prestige-amen__layout {
  display: grid;
  grid-template-columns: minmax(270px, 0.72fr) minmax(0, 1.7fr);
  align-items: center;
  gap: clamp(52px, 6vw, 96px);
}
.prestige-amen__intro {
  max-width: 390px;
}
.prestige-amen__title {
  margin: 14px 0 0;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(38px, 4vw, 35px) !important;
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #f7f7f8;
}
.prestige-amen__lead {
  max-width: 360px;
  margin: 28px 0 0;
  font-size: clamp(16px, 1.25vw, 19px);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.68);
}
.prestige-amen__connector {
	display: none !important;
}
.prestige-amen__grid {
  --prestige-amen-gap: clamp(14px, 2vw, 30px);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: var(--prestige-amen-gap);
  row-gap: clamp(48px, 5vw, 72px);
}
.prestige-amen__item {
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 205px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.86);
}
.prestige-amen__item :deep(.prestige-amen-icon) {
  margin-bottom: 10px;
}
.prestige-amen__num {
  display: block;
  margin-bottom: 11px;
  font-size: 19px;
  font-weight: 400;
  line-height: 1;
  color: rgba(255, 255, 255, 0.92);
  font-variant-numeric: tabular-nums;
}
.prestige-amen__label {
  display: block;
  max-width: 190px;
  font-size: clamp(14px, 1.12vw, 17px);
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.88);
}
.prestige-amen__connector {
  position: absolute;
  top: 98px;
  left: calc(50% + 44px);
  width: calc(100% + var(--prestige-amen-gap) - 88px);
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 22%, rgba(255, 255, 255, 0.3) 78%, transparent 100%);
}
.prestige-amen__connector::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  content: "";
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 4px #fff, 0 0 12px rgba(255, 255, 255, 0.9);
  transform: translate(-50%, -50%);
}
.prestige-amen-icon {
	width: 65px;
	height: 65px;
}
@media (max-width: 1199.98px) {
  .prestige-amen__layout {
    grid-template-columns: 1fr;
  }
  .prestige-amen__intro {
    max-width: 720px;
  }
  .prestige-amen__lead {
    max-width: 600px;
  }
}

@media (max-width: 767.98px) {
  .prestige-amen {
    padding: 82px 0;
  }
  .prestige-amen__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 38px 18px;
  }
  .prestige-amen__item {
    min-height: 185px;
  }
  .prestige-amen__connector {
    display: none;
  }
  .prestige-amen__item :deep(.prestige-amen-icon) {
    width: 68px;
    height: 68px;
  }
}
</style>
