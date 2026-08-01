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
              lead="Own a share of Dubai's most dynamic real-estate market - backed by a trusted developer, strong returns and one of the most investor-friendly cities in the world."
              image="/assets/images/v2/locations/Prestige-One-Invest-in-Dorra-Bay.webp"
            >
              <template #actions>
                <nuxt-link to="/contact-us" class="prestige-btn">Speak to an advisor</nuxt-link>
                <nuxt-link to="/projects" class="prestige-btn prestige-btn--ghost">View developments</nuxt-link>
              </template>
            </prestige-page-hero>

            <!-- why dubai -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Why Dubai</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      A market built for growth
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p>
                        Dubai has established itself as one of the world's premier destinations for
                        property investment - combining some of the strongest rental yields of any
                        global city with consistent capital appreciation and the security of a mature,
                        transparent, well-regulated market.
                      </p>
                      <p>
                        Investors benefit from tax-free ownership, freehold titles and residency
                        pathways, all within a city renowned for its safety, connectivity and
                        world-class lifestyle. A stable currency pegged to the US dollar and a growing
                        population of high earners keep demand for quality homes consistently ahead of
                        supply.
                      </p>
                      <p>
                        With flexible, construction-linked payment plans, entering the market has never
                        been more accessible - you can secure a home today and pay in staged
                        instalments as it is built.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <prestige-stat-band :stats="stats" />

            <prestige-feature-split
              eyebrow="Why Prestige One"
              title="Invest alongside a trusted developer"
              image="/assets/images/v3/Built-on-Trust.webp"
              :paragraphs="whyUsParagraphs"
              :points="whyUsPoints"
            />

            <prestige-feature-split
              eyebrow="How it works"
              title="From enquiry to keys"
              image="/assets/images/v2/locations/downtown.webp"
              :paragraphs="howParagraphs"
              :points="howPoints"
              reverse
            />

            <prestige-faq-accordion title="Investor questions" eyebrow="FAQs" :items="faqs" />

            <prestige-cta-band
              eyebrow="Start your investment journey"
              title="Let's talk returns"
              text="Speak with our investment team to explore available opportunities, payment plans and projected returns across the Prestige One portfolio."
              image="/assets/images/v2/locations/Prestige-One-Invest-in-Embankment.webp"
              primary-label="Speak to an advisor"
              primary-to="/contact-us"
              secondary-label="View developments"
              secondary-to="/projects"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import type { FaqItem } from "~/components/prestige/faq-accordion.vue";

interface StatItem {
  value: string;
  label: string;
}

definePageMeta({ layout: false });
useSeoMeta({
  title: "Invest | Prestige One",
  description:
    "Invest in Dubai real estate with Prestige One - strong rental yields, tax-free freehold ownership, capital appreciation and flexible payment plans.",
});

const stats: StatItem[] = [
  { value: "Up to 8%", label: "Rental yields" },
  { value: "0%", label: "Property tax" },
  { value: "Freehold", label: "Ownership" },
  { value: "Flexible", label: "Payment plans" },
];

const whyUsParagraphs: string[] = [
  "An investment is only as sound as the developer behind it. Prestige One is part of a group with more than two decades of experience across construction, hospitality and real estate - depth that translates into projects delivered to standard, on quality, and built to hold their value.",
  "Our branded partnerships with globally recognised names such as Hilton and FAUCHON Paris add a layer of demand that ordinary developments can't match. Branded residences command premium rents and resale interest, and our prime locations keep occupancy high.",
];

const whyUsPoints: string[] = [
  "Group with a 25-year delivery track record",
  "Branded residences with Hilton and FAUCHON Paris",
  "Prime, well-connected addresses across Dubai",
  "Hospitality-grade management that protects rental value",
];

const howParagraphs: string[] = [
  "Investing with us is refreshingly straightforward. Tell us your goals and budget, and your advisor will shortlist the homes and payment plans that fit - whether you're after rental income, capital growth or a home to eventually move into.",
  "From there we handle the detail: reservation, the Sale and Purchase Agreement, DLD registration and a clear payment schedule. The entire process can be completed remotely, and we stay with you through construction, handover and, if you wish, leasing and management.",
];

const howPoints: string[] = [
  "1. Share your goals and budget with an advisor",
  "2. Shortlist homes and choose a payment plan",
  "3. Reserve, sign the SPA and register with the DLD",
  "4. Pay in staged instalments through construction",
  "5. Take handover - we can lease and manage it for you",
];

const faqs: FaqItem[] = [
  {
    q: "What kind of rental yield can I expect?",
    a: "Well-located Dubai apartments commonly deliver gross rental yields in the region of 6-8%, among the highest of any major global city. Branded residences and prime addresses tend to sit at the stronger end of that range thanks to premium demand. Actual returns depend on the unit, location and management, so we'll model realistic figures for any home you're considering.",
  },
  {
    q: "Do I really pay no tax on my property?",
    a: "Dubai levies no annual property tax and no capital gains tax on residential real estate, and rental income is not personally taxed. You'll pay a one-time Dubai Land Department registration fee (typically 4%) at purchase. This tax-friendly structure is a major reason net yields here outperform many other global markets.",
  },
  {
    q: "Can foreigners own property outright?",
    a: "Yes. Our developments sit in designated freehold zones, where buyers of any nationality can own the property and the land it stands on outright, in perpetuity. Ownership is registered with the Dubai Land Department and gives you full rights to live in, lease or resell your home.",
  },
  {
    q: "Does buying property give me UAE residency?",
    a: "Qualifying property investments can open a pathway to UAE residency, including the long-term Golden Visa for eligible investments. Requirements and thresholds are set by the government and can change, so we'll connect you with the right guidance for your situation as part of the buying process.",
  },
  {
    q: "How do off-plan payment plans work?",
    a: "Most of our homes are sold on construction-linked plans: a deposit on booking, a series of instalments tied to build milestones, and a final balance on handover. This spreads the cost over the construction period and lets you secure today's price. Exact terms vary by project and availability - your advisor will share the current plan.",
  },
];

usePrestigePage({ hero: false });
</script>
