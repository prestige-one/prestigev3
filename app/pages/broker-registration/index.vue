<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              :eyebrow="t('mdata.broker.heroEyebrow')"
              :title="t('mdata.broker.heroTitle')"
              :lead="t('mdata.broker.heroLead')"
              image="/assets/project-featured-images/sliders/the-one-1.webp"
            />

            <section class="prestige-section prestige-broker-options">
              <div class="container container-1430">
                <header class="prestige-broker-options__header tp_fade_anim" data-delay=".2">
                  <h2>Join Prestige One's broker network and access premium projects, exceptional incentives, and dedicated support</h2>
                  <p>Register today to elevate your business.</p>
                </header>

                <div class="prestige-broker-options__grid">
                  <NuxtLink
                    v-for="(option, index) in registrationOptions"
                    :key="option.type"
                    :to="`/broker-registration/${option.type}`"
                    class="prestige-broker-option tp_fade_anim"
                    :data-delay="0.25 + index * 0.08"
                  >
                    <svg v-if="option.kind === 'company'" viewBox="0 0 32 36" aria-hidden="true">
                      <path d="M7 33V4h18v29M3 33h26M12 10h3m3 0h3m-9 6h3m3 0h3m-9 6h3m3 0h3m-6 11v-5h4v5" />
                    </svg>
                    <svg v-else viewBox="0 0 36 36" aria-hidden="true">
                      <circle cx="18" cy="10" r="7" />
                      <path d="M6 33c.6-8.2 4.5-12.3 12-12.3S29.4 24.8 30 33M14 21l4 5 4-5m-4 5v7" />
                    </svg>
                    <span>{{ option.lineOne }}</span>
                    <strong>{{ option.lineTwo }}</strong>
                  </NuxtLink>
                </div>
              </div>
            </section>
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({ layout: false });
useSeoMeta({
  title: "Broker Registration | Prestige One",
  description:
    "Register your agency to partner with Prestige One and offer clients access to Dubai's most sought-after luxury residences.",
});

// Keep the registration entry points aligned with the four detail-page slugs.
const registrationOptions = [
  { type: "uae-company", kind: "company", lineOne: "UAE", lineTwo: "Company" },
  { type: "uae-individual", kind: "individual", lineOne: "UAE", lineTwo: "Individual" },
  { type: "international-company", kind: "company", lineOne: "International", lineTwo: "Company" },
  { type: "international-individual", kind: "individual", lineOne: "International", lineTwo: "Individual" },
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-broker-options {
  padding: clamp(80px, 9vw, 140px) 0;
  background: #111;
}

.prestige-broker-options__header {
  width: min(980px, 100%);
  margin: 0 auto clamp(42px, 5vw, 64px);
  text-align: center;
}

.prestige-broker-options__header h2 {
  margin: 0;
  font-size: clamp(28px, 3vw, 46px);
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0.035em;
  color: #f7f7f7;
  text-transform: uppercase;
}

.prestige-broker-options__header p {
  margin: 22px 0 0;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
}

.prestige-broker-options__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  width: min(1080px, 100%);
  margin: 0 auto;
}

.prestige-broker-option {
  display: flex;
  min-height: 190px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 18px;
  border: 1px dashed rgba(255, 255, 255, 0.7);
  color: #fff;
  text-align: center;
  transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
}

.prestige-broker-option:hover {
  border-color: #fff;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.prestige-broker-option svg {
  width: 34px;
  height: 38px;
  margin-bottom: 18px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.prestige-broker-option span,
.prestige-broker-option strong {
  display: block;
  font-size: clamp(15px, 1.3vw, 18px);
  font-weight: 600;
  line-height: 1.45;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 991.98px) {
  .prestige-broker-options__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .prestige-broker-options__grid {
    grid-template-columns: 1fr;
  }

  .prestige-broker-option {
    min-height: 160px;
  }
}
</style>
