<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Investments"
              title="Invest in Prestige One"
              lead="Own a share of Dubai's most dynamic real-estate market — backed by a trusted developer, strong returns and one of the most investor-friendly cities in the world."
              image="/assets/images/v2/locations/Prestige-One-Invest-in-Dorra-Bay.webp"
            />

            <!-- why invest -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Why Invest</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      A market built for growth
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p>
                        Dubai has established itself as one of the world's premier destinations for
                        property investment — combining strong rental yields and consistent capital
                        appreciation with the security of a mature, transparent market.
                      </p>
                      <p>
                        Investors benefit from tax-free ownership, freehold titles and residency
                        pathways, all within a city renowned for its safety, connectivity and
                        world-class lifestyle. With flexible payment plans, entering the market has
                        never been more accessible.
                      </p>
                      <p>
                        Partnering with Prestige One means investing alongside a developer with a
                        proven track record, landmark addresses and partnerships with globally
                        recognised brands — a foundation designed to protect and grow your investment
                        for years to come.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- stats row -->
            <section class="prestige-section prestige-section--tight prestige-invest__stats-band">
              <div class="container container-1430">
                <div class="row">
                  <div
                    v-for="stat in stats"
                    :key="stat.label"
                    class="col-xl-3 col-lg-3 col-md-6 mb-30 tp_fade_anim"
                    data-delay=".2"
                  >
                    <div class="prestige-invest__stat">
                      <span class="prestige-invest__stat-num">{{ stat.value }}</span>
                      <span class="prestige-invest__stat-label">{{ stat.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- closing CTA -->
            <section class="prestige-section prestige-section--tight">
              <div class="container container-1430">
                <div class="prestige-invest__cta tp_fade_anim" data-delay=".2">
                  <h2 class="prestige-heading mb-30">Start your investment journey</h2>
                  <p class="prestige-prose mb-40">
                    Speak with our investment team to explore available opportunities, payment plans
                    and projected returns across the Prestige One portfolio.
                  </p>
                  <NuxtLink to="/contact-us" class="prestige-btn">Speak to an Advisor</NuxtLink>
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
interface InvestStat {
  value: string;
  label: string;
}

definePageMeta({ layout: false });
useSeoMeta({
  title: "Invest | Prestige One",
  description:
    "Invest in Dubai real estate with Prestige One — strong rental yields, tax-free freehold ownership, capital appreciation and flexible payment plans.",
});

const stats: InvestStat[] = [
  { value: "Up to 8%", label: "Rental yields" },
  { value: "0%", label: "Property tax" },
  { value: "Freehold", label: "Ownership" },
  { value: "Flexible", label: "Payment plans" },
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-invest__stats-band {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.prestige-invest__stat {
  padding-right: 14px;
}
.prestige-invest__stat-num {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(38px, 4.4vw, 58px);
  line-height: 1;
  color: var(--tp-common-gold, #d9b382);
  margin-bottom: 14px;
}
.prestige-invest__stat-label {
  display: block;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}
.prestige-invest__cta {
  max-width: 720px;
}
</style>
