<template>
  <header
    class="prestige-project-heading"
    :class="[
      `prestige-project-heading--${align}`,
      { 'prestige-project-heading--uppercase': uppercase },
    ]"
    data-prestige-reveal-trigger
  >
    <span
      v-if="eyebrow"
      class="prestige-eyebrow prestige-project-heading__eyebrow prestige-text-paint"
    >{{ eyebrow }}</span>
    <h2
      class="prestige-heading prestige-project-heading__title prestige-text-paint"
      :class="[titleClass, { 'prestige-developments-title': zoomTitle }]"
    >{{ title }}</h2>
    <p
      v-if="description"
      class="prestige-project-heading__description prestige-developments-subtitle"
      :class="descriptionClass"
    >{{ description }}</p>
  </header>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  uppercase?: boolean;
  zoomTitle?: boolean;
  titleClass?: string;
  descriptionClass?: string;
}>(), {
  eyebrow: "",
  description: "",
  align: "center",
  uppercase: false,
  zoomTitle: true,
  titleClass: "",
  descriptionClass: "",
});
</script>

<style scoped>
.prestige-project-heading {
  position: relative;
  isolation: isolate;
  max-width: 820px;
}
.prestige-project-heading::before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  width: min(560px, 100%);
  height: 250px;
  content: "";
  pointer-events: none;
  background:
    radial-gradient(circle at 65% 35%, rgba(120, 210, 255, 0.28), transparent 60%),
    radial-gradient(circle at 32% 68%, rgba(255, 140, 210, 0.2), transparent 60%);
  filter: blur(60px);
  opacity: 0.9;
  transform: translate(-50%, -50%);
}
.prestige-project-heading--center {
  margin-inline: auto;
  text-align: center;
}
.prestige-project-heading--left {
  text-align: left;
}
.prestige-project-heading__eyebrow {
  display: inline-block;
}
.prestige-project-heading__title {
  margin: 0;
  font-size: var(--prestige-project-section-title-size, clamp(25px, 4.4vw, 30px));
}
.prestige-project-heading__eyebrow + .prestige-project-heading__title {
  margin-top: 14px;
}
.prestige-project-heading--uppercase .prestige-project-heading__title {
  text-transform: uppercase;
}
.prestige-project-heading__description {
  max-width: 720px;
  margin: 20px auto 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: clamp(13px, 1.25vw, 15px);
  line-height: 1.75;
}
.prestige-project-heading--left .prestige-project-heading__description {
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
@media (max-width: 575.98px) {
  .prestige-project-heading::before {
    width: 100%;
    height: 220px;
    filter: blur(52px);
  }
}
</style>
