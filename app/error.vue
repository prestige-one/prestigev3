<template>
  <div class="prestige-error-page">
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <main class="prestige-error" :aria-labelledby="headingId">
        <div class="prestige-error__media" aria-hidden="true">
          <img src="/assets/images/v3/projects-hero-skyline.webp" alt="">
        </div>
        <div class="prestige-error__veil" />

        <div class="container container-1430 prestige-error__inner">
          <span class="prestige-error__eyebrow">
            {{ isNotFound ? "Page not found" : "Something went wrong" }}
          </span>
          <span class="prestige-error__code" aria-hidden="true">{{ statusCode }}</span>
          <h1 :id="headingId" class="prestige-error__title">
            {{ isNotFound ? "This address leads somewhere else." : "We couldn't complete that request." }}
          </h1>
          <p class="prestige-error__copy">
            {{ isNotFound
              ? "The page may have moved, or the address may no longer be available. Continue exploring Prestige One from here."
              : "Please return home and try again. If the problem continues, our team will be happy to help."
            }}
          </p>
          <div class="prestige-error__actions">
            <button type="button" class="prestige-btn" @click="returnHome">
              Return home
            </button>
            <nuxt-link to="/projects" class="prestige-btn prestige-btn--ghost">
              Explore projects
            </nuxt-link>
          </div>
        </div>
      </main>

      <prestige-footer-digital-marketing />
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const statusCode = computed(() => props.error?.statusCode || 500);
const isNotFound = computed(() => statusCode.value === 404);
const headingId = "prestige-error-heading";

function returnHome() {
  clearError({ redirect: "/" });
}

useSeoMeta({
  title: () => isNotFound.value ? "Page Not Found | Prestige One" : "Error | Prestige One",
  robots: "noindex, nofollow",
});

useHead({
  bodyAttrs: {
    class: "prestige-error-body",
  },
});
</script>

<style scoped>
.prestige-error-page {
  min-height: 100vh;
  background: #08090b;
  color: #fff;
}

.prestige-error {
  position: relative;
  display: grid;
  min-height: 82vh;
  place-items: center;
  overflow: hidden;
  isolation: isolate;
}

.prestige-error__media,
.prestige-error__veil {
  position: absolute;
  z-index: -2;
  inset: 0;
}

.prestige-error__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
}

.prestige-error__veil {
  z-index: -1;
  background:
    radial-gradient(circle at 50% 40%, rgba(19, 24, 34, 0.2), rgba(4, 5, 7, 0.84) 70%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.92));
}

.prestige-error__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: clamp(130px, 18vh, 190px);
  padding-bottom: clamp(80px, 12vh, 130px);
  text-align: center;
}

.prestige-error__eyebrow {
  margin-bottom: 12px;
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.prestige-error__code {
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(92px, 18vw, 230px);
  font-weight: 400;
  line-height: 0.72;
  color: rgba(255, 255, 255, 0.08);
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.28);
}

.prestige-error__title {
  max-width: 850px;
  margin: clamp(28px, 5vw, 52px) auto 0;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(25px, 5vw, 40px);
  font-weight: 400;
  line-height: 1.05;
  color: #fff;
}

.prestige-error__copy {
  max-width: 680px;
  margin: 22px auto 0;
  font-size: clamp(15px, 1.45vw, 18px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
}

.prestige-error__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 34px;
}

.prestige-error__actions .prestige-btn {
  min-width: 190px;
}

@media (max-width: 575px) {
  .prestige-error {
    min-height: 76vh;
  }

  .prestige-error__inner {
    padding-right: 20px;
    padding-left: 20px;
  }

  .prestige-error__actions,
  .prestige-error__actions .prestige-btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .prestige-error__media img {
    animation: prestigeErrorDrift 16s ease-in-out infinite alternate;
  }
}

@keyframes prestigeErrorDrift {
  from { transform: scale(1.03); }
  to { transform: scale(1.1); }
}
</style>
