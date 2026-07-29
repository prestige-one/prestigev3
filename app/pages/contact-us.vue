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
              lead="Speak with our team about our developments, investment opportunities or arranging a private viewing. We're here to help."
              image="/assets/images/v3/map-locations.webp"
            />

            <!-- contact info cards -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-md-6 mb-30 tp_fade_anim" data-delay=".2">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">Call us</span>
                      <a href="tel:80077378443" class="prestige-contact-card__value">800 PRESTIGE</a>
                      <a href="tel:80077378443" class="prestige-contact-card__sub">800 77378443</a>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 mb-30 tp_fade_anim" data-delay=".3">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">Email us</span>
                      <a href="mailto:enquiries@prestigeone.ae" class="prestige-contact-card__value">
                        enquiries@prestigeone.ae
                      </a>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 mb-30 tp_fade_anim" data-delay=".4">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">Visit us</span>
                      <p class="prestige-contact-card__value prestige-contact-card__value--address">
                        Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="prestige-contact-actions tp_fade_anim" data-delay=".3">
                  <a
                    href="https://wa.me/+971523412936"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="prestige-btn"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div class="prestige-contact-map tp_fade_anim" data-delay=".2">
                  <img src="/assets/images/v3/map-locations.webp" alt="Prestige One office locations" loading="lazy">
                </div>
              </div>
            </section>

            <prestige-contact-form />
          </main>
          <prestige-footer-digital-marketing />
        </div>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
useSeoMeta({
  title: "Contact Us | Prestige One",
  description:
    "Get in touch with Prestige One — call 800 PRESTIGE, email enquiries@prestigeone.ae or visit our Dubai Marina office.",
});

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
  border-color: rgba(217, 179, 130, 0.5);
  background: rgba(255, 255, 255, 0.04);
}
.prestige-contact-card__label {
  display: block;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #d9b382);
  margin-bottom: 16px;
}
.prestige-contact-card__value {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: 26px;
  line-height: 1.3;
  color: #fff;
  transition: color 0.3s ease;
}
a.prestige-contact-card__value:hover {
  color: var(--tp-common-gold, #d9b382);
}
.prestige-contact-card__value--address {
  font-size: 22px;
  margin: 0;
}
.prestige-contact-card__sub {
  display: block;
  margin-top: 6px;
  font-size: 15px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
}
.prestige-contact-card__sub:hover {
  color: var(--tp-common-gold, #d9b382);
}
.prestige-contact-actions {
  margin-top: 20px;
  margin-bottom: 60px;
}
.prestige-contact-map {
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.prestige-contact-map img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
