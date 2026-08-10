<template>
  <section class="prestige-listing-intro prestige-section--tight">
    <div class="container container-1430">
      <div class="row justify-content-center">
        <div class="col-xl-9 text-center">
          <span v-if="eyebrow" class="prestige-eyebrow tp_fade_anim" data-delay=".2">
            {{ eyebrow }}
          </span>
          <h2
            class="prestige-listing-intro__title tp_fade_anim"
            :class="{ 'prestige-listing-intro__title--uppercase': uppercase }"
            data-delay=".3"
          >
            {{ title }}
          </h2>
          <div v-if="text" class="prestige-prose prestige-listing-intro__copy tp_fade_anim" data-delay=".4">
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string;
  eyebrow?: string;
  text?: string;
  uppercase?: boolean;
}>(), {
  eyebrow: "",
  text: "",
  uppercase: false,
});
</script>

<style scoped>
.prestige-listing-intro {
  padding-bottom: clamp(24px, 3vw, 40px);
}

.prestige-listing-intro__title {
  margin: 0;
  font-family: inherit;
  font-size: clamp(26px, 3.2vw, 32px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
  color: #fff;
}

.prestige-listing-intro .prestige-eyebrow + .prestige-listing-intro__title {
  margin-top: 6px;
}

.prestige-listing-intro__title--uppercase {
  text-transform: uppercase;
}

.prestige-listing-intro__copy {
  max-width: 1280px;
  margin: 24px auto 0;
}

.prestige-listing-intro__copy p {
  margin-bottom: 0;
}
</style>
