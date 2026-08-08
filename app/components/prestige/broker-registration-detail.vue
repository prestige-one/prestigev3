<template>
  <main class="prestige-broker-reg-page">
    <section class="prestige-broker-reg-hero" aria-labelledby="prestige-broker-reg-detail-heading">
      <div class="container prestige-broker-reg-hero__inner">
        <p class="prestige-broker-reg-hero__kicker">Prestige One Developments</p>
        <h1 id="prestige-broker-reg-detail-heading" class="prestige-broker-reg-hero__title">
          {{ content.heroTitle }}
        </h1>
        <p class="prestige-broker-reg-hero__intro">{{ content.heroIntro }}</p>
      </div>
    </section>

    <div class="prestige-broker-reg-detail-shell">
      <div class="container prestige-broker-reg-detail-inner">
        <section
          v-for="section in content.sections"
          :key="section.heading"
          class="prestige-broker-reg-detail-block prestige-broker-reg-detail-panel"
        >
          <h2 class="prestige-broker-reg-detail-heading">{{ section.heading }}</h2>
          <p
            v-for="(paragraph, index) in section.paragraphs"
            :key="`${section.heading}-${index}`"
            class="prestige-broker-reg-detail-text"
          >
            {{ paragraph }}
          </p>
        </section>

        <div class="prestige-broker-reg-form-shell prestige-broker-reg-detail-panel">
          <h2 class="prestige-broker-reg-detail-heading prestige-broker-reg-form-section-heading">
            Registration form
          </h2>
          <prestige-broker-registration-form :slug="slug" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { BrokerRegistrationPageContent, BrokerRegistrationSlug } from "~/data/broker-registration";

defineProps<{
  slug: BrokerRegistrationSlug;
  content: BrokerRegistrationPageContent;
}>();
</script>

<style scoped>
.prestige-broker-reg-page {
  overflow-x: clip;
  background: #000;
}

.prestige-broker-reg-hero {
  padding: clamp(12.5rem, 15vh, 11.5rem) 0 clamp(1.75rem, 3.5vw, 2.5rem);
  background: #000;
  border-bottom: 1px solid #2a2a2a;
}

.prestige-broker-reg-hero__inner {
  max-width: 52rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.prestige-broker-reg-hero__kicker {
  margin: 0 0 0.65rem;
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.prestige-broker-reg-hero__title {
  margin: 0;
  color: #fff;
  font-size: clamp(1.5rem, 3.4vw, 2.15rem);
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1.15;
  text-transform: uppercase;
}

.prestige-broker-reg-hero__intro {
  margin: 1.1rem 0 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: clamp(0.92rem, 1.3vw, 1.02rem);
  line-height: 1.7;
}

.prestige-broker-reg-detail-shell {
  position: relative;
  z-index: 1;
  margin-top: 0;
  padding: clamp(2.5rem, 5vw, 4.5rem) 0 clamp(3.5rem, 8vw, 5rem);
  background: #000;
}

.prestige-broker-reg-detail-inner {
  display: flex;
  max-width: 52rem;
  flex-direction: column;
  gap: 1.35rem;
  margin-right: auto;
  margin-left: auto;
}

.prestige-broker-reg-detail-panel {
  margin: 0;
  padding: 1.4rem 1.5rem 1.5rem;
  background-color: #202020;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
}

.prestige-broker-reg-detail-heading {
  margin: 0 0 0.9rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.94);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.prestige-broker-reg-detail-text {
  margin: 0 0 0.85rem;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.94rem;
  line-height: 1.7;
}

.prestige-broker-reg-detail-text:last-child {
  margin-bottom: 0;
}

.prestige-broker-reg-form-shell {
  margin-top: 0.35rem;
  padding-top: 1.35rem;
}

.prestige-broker-reg-form-section-heading {
  margin-top: 0;
  margin-bottom: 1.1rem;
}

@media (max-width: 575px) {
  .prestige-broker-reg-detail-inner {
    gap: 1.1rem;
  }

  .prestige-broker-reg-detail-panel {
    padding: 1.15rem 1.15rem 1.25rem;
    border-radius: 12px;
  }
}
</style>
