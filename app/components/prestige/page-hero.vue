<template>
  <section class="prestige-hero-band" :class="{ 'prestige-hero-band--short': short }">
    <div class="prestige-hero-band__media">
      <video
        v-if="video"
        :src="video"
        autoplay
        muted
        loop
        playsinline
        :poster="image"
      />
      <img v-else-if="image" :src="image" :alt="title">
    </div>
    <div class="prestige-hero-band__veil" />
    <div class="prestige-hero-band__inner container container-1430">
      <div class="row">
        <div class="col-xl-9">
          <span v-if="eyebrow" class="prestige-hero-band__eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow }}</span>
          <h1 class="prestige-hero-band__title tp_fade_anim" data-delay=".3">{{ title }}</h1>
          <p v-if="lead" class="prestige-hero-band__lead tp_fade_anim" data-delay=".45">{{ lead }}</p>
          <div v-if="$slots.actions" class="prestige-hero-band__actions tp_fade_anim" data-delay=".55">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  eyebrow?: string;
  lead?: string;
  image?: string;
  video?: string;
  short?: boolean;
}>();
</script>

<style scoped>
.prestige-hero-band--short {
  min-height: 58vh;
}
.prestige-hero-band__actions {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
</style>
