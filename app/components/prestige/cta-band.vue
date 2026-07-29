<template>
  <section class="prestige-ctaband" :style="{ backgroundImage: `url(${image})` }">
    <div class="prestige-ctaband__veil" />
    <div class="container container-1430">
      <div class="row justify-content-center">
        <div class="col-xl-8 text-center">
          <span v-if="eyebrow" class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow }}</span>
          <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ title }}</h2>
          <p v-if="text" class="prestige-ctaband__text tp_fade_anim" data-delay=".4">{{ text }}</p>
          <div class="prestige-ctaband__actions tp_fade_anim" data-delay=".5">
            <nuxt-link :to="primaryTo" class="prestige-btn">{{ primaryLabel }}</nuxt-link>
            <nuxt-link v-if="secondaryTo" :to="secondaryTo" class="prestige-btn prestige-btn--ghost">{{ secondaryLabel }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    image: string;
    eyebrow?: string;
    text?: string;
    primaryLabel?: string;
    primaryTo?: string;
    secondaryLabel?: string;
    secondaryTo?: string;
  }>(),
  {
    eyebrow: "",
    text: "",
    primaryLabel: "Get in touch",
    primaryTo: "/contact-us",
    secondaryLabel: "View developments",
    secondaryTo: "",
  },
);
</script>

<style scoped>
.prestige-ctaband {
  position: relative;
  padding: clamp(90px, 15vh, 190px) 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.prestige-ctaband__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.82));
}
.prestige-ctaband .container {
  position: relative;
  z-index: 2;
}
.prestige-ctaband__text {
  max-width: 620px;
  margin: 22px auto 0;
  font-size: 18px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.8);
}
.prestige-ctaband__actions {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}
@media (max-width: 991px) {
  .prestige-ctaband { background-attachment: scroll; }
}
</style>
