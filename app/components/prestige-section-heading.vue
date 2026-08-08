<template>
  <header
    class="prestige-section-heading"
    :class="`prestige-section-heading--${align}`"
  >
    <h2 class="prestige-section-heading__title prestige-text-paint">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="prestige-section-heading__subtitle">
      {{ subtitle }}
    </p>
    <p v-if="description" class="prestige-section-heading__description">
      {{ description }}
    </p>
  </header>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}>(), {
  subtitle: "",
  description: "",
  align: "center",
});
</script>

<style scoped>
.prestige-section-heading {
  max-width: 820px;
}

.prestige-section-heading--center {
  margin-inline: auto;
  text-align: center;
}

.prestige-section-heading--left {
  text-align: left;
}

.prestige-section-heading__title {
  margin: 0;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(35px, 6vw, 40px);
  font-weight: 500;
  letter-spacing: -0.045em;
}

.prestige-section-heading__subtitle {
  margin: 18px 0 0;
  font-size: clamp(15px, 1.35vw, 20px);
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.03em;
  color: #fff;
}

.prestige-section-heading__description {
  max-width: 660px;
  margin: 14px auto 0;
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.52);
}

.prestige-section-heading--left .prestige-section-heading__description {
  margin-inline: 0;
}

.prestige-text-paint {
  color: transparent;
  background-image: linear-gradient(
    to right,
    #fff 50%,
    rgba(255, 255, 255, 0.32) 50%
  );
  background-position-x: 100%;
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
