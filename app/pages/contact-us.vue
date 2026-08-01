<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Contact Us"
              title="Get in touch"
              lead="Speak with our team about our developments, investment opportunities or arranging a private viewing. We're here to help, seven days a week."
              image="/assets/images/v2/locations/marina-plaza-investments.webp"
            >
              <template #actions>
                <a href="tel:80077378443" class="prestige-btn">Call 800 PRESTIGE</a>
                <a
                  href="https://wa.me/+971523412936"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="prestige-btn prestige-btn--ghost"
                >Chat on WhatsApp</a>
              </template>
            </prestige-page-hero>

            <!-- contact info cards -->
            <section class="prestige-section">
              <div class="container container-1430">
                <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">How to reach us</span>
                <h2 class="prestige-heading mb-50 tp_fade_anim" data-delay=".3">
                  Talk to a real person
                </h2>
                <div class="row">
                  <div class="col-xl-3 col-md-6 mb-30 tp_fade_anim" data-delay=".2">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">Call us</span>
                      <a href="tel:80077378443" class="prestige-contact-card__value">800 PRESTIGE</a>
                      <a href="tel:80077378443" class="prestige-contact-card__sub">800 77378443</a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-30 tp_fade_anim" data-delay=".3">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">Email us</span>
                      <a href="mailto:enquiries@prestigeone.ae" class="prestige-contact-card__value">
                        enquiries@prestigeone.ae
                      </a>
                      <span class="prestige-contact-card__sub">We reply within one business day</span>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-30 tp_fade_anim" data-delay=".4">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">WhatsApp</span>
                      <a
                        href="https://wa.me/+971523412936"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="prestige-contact-card__value"
                      >+971 52 341 2936</a>
                      <span class="prestige-contact-card__sub">Message us any time</span>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-30 tp_fade_anim" data-delay=".5">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">Visit us</span>
                      <p class="prestige-contact-card__value prestige-contact-card__value--address">
                        Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <prestige-contact-form />

            <prestige-feature-split
              eyebrow="Sales Gallery"
              title="Visit our sales gallery"
              image="/assets/images/v3/map-locations.webp"
              :paragraphs="galleryParagraphs"
              :points="galleryPoints"
              reverse
            />

            <prestige-faq-accordion title="Frequently asked" eyebrow="Good to know" :items="faqs" />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import type { FaqItem } from "~/components/prestige/faq-accordion.vue";

definePageMeta({ layout: false });
useSeoMeta({
  title: "Contact Us | Prestige One",
  description:
    "Get in touch with Prestige One - call 800 PRESTIGE, email enquiries@prestigeone.ae or visit our Dubai Marina sales gallery.",
});

const galleryParagraphs: string[] = [
  "Our sales gallery sits on the 16th floor of Marina Plaza, in the heart of Dubai Marina. It's the best place to see our developments come to life - scale models, material palettes, sample interiors and interactive floor plans, all in one room.",
  "A private appointment gives you a dedicated advisor, uninterrupted time to explore availability and payment plans, and the space to ask every question. Prefer to stay remote? We'll walk you through everything over a video call and share the same materials digitally.",
];

const galleryPoints: string[] = [
  "Office 1602-1604, Marina Plaza, Dubai Marina",
  "Open seven days a week, 9am to 7pm",
  "Private and virtual appointments available",
  "Dedicated advisor for every enquiry",
];

const faqs: FaqItem[] = [
  {
    q: "How does the booking process work?",
    a: "Once you've chosen a home, we reserve it with a booking form and an initial deposit - typically a percentage of the purchase price. Your advisor prepares the Sale and Purchase Agreement, guides you through the DLD registration, and confirms your payment schedule. The whole process is transparent and usually completed within a few days.",
  },
  {
    q: "What payment plans are available?",
    a: "Most of our developments offer flexible, construction-linked payment plans - commonly a deposit on booking, staged instalments through construction, and a final balance on handover. Exact terms vary by project and change with availability, so speak to our team for the latest plan on the home you're interested in.",
  },
  {
    q: "Can international buyers purchase a Prestige One home?",
    a: "Yes. Our developments are in designated freehold areas, so buyers of any nationality can own their home outright. Purchases can be completed remotely, and qualifying investments may open a pathway to UAE residency. We regularly work with overseas buyers and can arrange everything by video call and secure digital documents.",
  },
  {
    q: "How do I arrange a viewing?",
    a: "Call 800 PRESTIGE, message us on WhatsApp, or submit the enquiry form above and we'll be in touch to schedule a private appointment at our Dubai Marina sales gallery - or a virtual tour if you'd rather view from home.",
  },
  {
    q: "I'm a broker - how do I register a client?",
    a: "We welcome registered brokers and offer a straightforward partner process. Email enquiries@prestigeone.ae with your RERA details and your client's information to register the lead, and our channel team will confirm terms and share the latest inventory and commission structure.",
  },
];

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-contact-card {
  height: 100%;
  padding: 34px 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.3s ease, background 0.3s ease;
}
.prestige-contact-card:hover {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.04);
}
.prestige-contact-card__label {
  display: block;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
  margin-bottom: 16px;
}
.prestige-contact-card__value {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 24px;
  line-height: 1.3;
  color: #fff;
  transition: color 0.3s ease;
  word-break: break-word;
}
a.prestige-contact-card__value:hover {
  color: var(--tp-common-gold, #ffffff);
}
.prestige-contact-card__value--address {
  font-size: 21px;
  margin: 0;
}
.prestige-contact-card__sub {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.3s ease;
}
a.prestige-contact-card__sub:hover {
  color: var(--tp-common-gold, #ffffff);
}
</style>
