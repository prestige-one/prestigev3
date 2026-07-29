<template>
  <section class="pstate" :style="{ backgroundImage: `url(${image})` }">
    <div class="pstate__veil" />
    <div class="container container-1430">
      <div class="row justify-content-center">
        <div class="col-xl-9 text-center">
          <span v-if="eyebrow" class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow }}</span>
          <p class="pstate__text tp_fade_anim" data-delay=".3">{{ text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ text: string; image: string; eyebrow?: string }>();
</script>

<style scoped>
.pstate {
  position: relative;
  padding: clamp(90px, 16vh, 200px) 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.pstate__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8));
}
.pstate .container { position: relative; z-index: 2; }
.pstate__text {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(26px, 4vw, 52px);
  line-height: 1.25;
  color: #fff;
  margin: 14px 0 0;
  font-weight: 400;
}
@media (max-width: 991px) {
  .pstate { background-attachment: scroll; }
}
</style>
