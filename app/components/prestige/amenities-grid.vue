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
            <span class="prestige-amen__media">
              <NuxtImg
                v-if="images[i]"
                class="prestige-amen__image"
                :src="images[i]"
                :alt="a"
                width="240"
                height="160"
                sizes="50vw sm:180px lg:220px"
                format="webp"
                quality="74"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span class="prestige-amen__copy">
              <span class="prestige-amen__label">{{ a }}</span>
            </span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ items: string[]; images?: string[]; title: string; eyebrow: string; lead?: string; headingClass?: string }>(),
  { images: () => [], lead: "", headingClass: "" },
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
  display: flex;
  max-width: 390px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
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
  margin: 20px 0 0;
  font-size: clamp(13px, 1.25vw, 15px);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.68);
}
.prestige-amen__grid {
  --prestige-amen-gap: clamp(12px, 1.4vw, 20px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--prestige-amen-gap);
}
.prestige-amen__item {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 0;
  min-width: 0;
  min-height: 116px;
  padding: 0;
  overflow: hidden;
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  border-radius: 10px;
  background: linear-gradient(135deg, hsla(0, 0%, 100%, 0.035), hsla(0, 0%, 100%, 0.012));
  text-align: left;
  color: rgba(255, 255, 255, 0.86);
  transition: border-color 240ms ease, background-color 240ms ease, transform 240ms ease;
}
.prestige-amen__media {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 9px 0 0 9px;
  background: rgba(255, 255, 255, 0.035);
}
.prestige-amen__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
}
.prestige-amen__copy {
  display: block;
  min-width: 0;
  padding: clamp(14px, 1.5vw, 22px);
}
.prestige-amen__label {
  display: block;
  max-width: 180px;
  font-size: clamp(14px, 1.05vw, 16px);
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.92);
}
@media (hover: hover) and (pointer: fine) {
  .prestige-amen__item:hover {
    border-color: hsla(0, 0%, 100%, 0.18);
    background: hsla(0, 0%, 100%, 0.045);
    transform: translateY(-2px);
  }
  .prestige-amen__item:hover .prestige-amen__image {
    transform: scale(1.045);
  }
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
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .prestige-amen__item {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    min-height: 96px;
    padding: 0;
  }
  .prestige-amen__label {
    max-width: none;
  }
}
</style>
