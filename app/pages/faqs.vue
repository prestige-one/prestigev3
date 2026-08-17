<!-- Data source: app/data/faq-data.ts -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page prestige-faqpage">
            <prestige-page-hero
              class="prestige-faqpage__hero"
              eyebrow="Prestige One Developments"
              title="Frequently Asked Questions"
              lead="Answers to the most common questions about contracts, ownership, registration, payments, and handover."
              image="/assets/images/v3/prestige-office.webp"
              :show-actions="false"
            />

            <section class="prestige-faqpage__content">
              <div class="container container-1430">
                <PrestigeFaqGroups :groups="prestigeFaqGroups" />
              </div>
            </section>

            <prestige-cta-band
              eyebrow="Need more help?"
              title="Talk to our customer relations team"
              text="Our team is ready to answer questions about your property, payments, registration, or handover."
              image="/assets/images/v3/prestige-office.webp"
              primary-label="Get In Touch"
              primary-to="/contact-us"
            />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import PrestigeFaqGroups from "~/components/prestige/faq-groups.vue";
import { prestigeFaqGroups } from "~/data/faq-data";

definePageMeta({ layout: false });
useSeoMeta({
  title: "FAQs | Prestige One Developments",
  description: "Frequently asked questions about Prestige One contracts, registration, payments, property ownership, resale, and handover.",
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-faqpage__hero :deep(.prestige-hero-band__inner .row) {
  justify-content: center;
}

.prestige-faqpage__hero :deep(.prestige-hero-band__inner .col-xl-9) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.prestige-faqpage__hero :deep(.prestige-hero-band__lead) {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.prestige-faqpage__content {
  padding: clamp(64px, 8vw, 120px) 0;
  background: #0e0e12;
}

@media (max-width: 767.98px) {
  .prestige-faqpage__hero :deep(.prestige-hero-band__inner) {
    padding-bottom: 44px;
  }

  .prestige-faqpage__hero :deep(.prestige-hero-band__title) {
    font-size: clamp(25px, 7vw, 40px);
  }

  .prestige-faqpage__content {
    padding: 52px 0 64px;
  }
}
</style>
