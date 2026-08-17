<!-- Data source: i18n/locales/shared/en.json -->
<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              class="prestige-contact-hero"
              :title="$t('nav.getInTouch')"
              :lead="$t('sh.contactHeroLead')"
              image="/assets/images/v3/prestige-office.webp"
              :show-actions="false"
            />

            <!-- contact info cards -->
            <section class="prestige-section">
              <div class="container container-1430">
                <div class="prestige-contact-info__heading">
                  <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ $t('sh.howToReachUs') }}</span>
                  <h2 class="prestige-heading prestige-contact-info__title tp_fade_anim" data-delay=".3">
                    {{ $t('sh.talkToRealPerson') }}
                  </h2>
                </div>
                <div class="row">
                  <div class="col-xl-3 col-md-6 mb-30 tp_fade_anim" data-delay=".2">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">{{ $t('sh.callUs') }}</span>
                      <a href="tel:80077378443" class="prestige-contact-card__value">800 PRESTIGE</a>
                      <a
                        href="tel:80077378443"
                        class="prestige-contact-card__value prestige-contact-card__value--secondary"
                      >800 77378443</a>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-30 tp_fade_anim" data-delay=".3">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">{{ $t('sh.emailUs') }}</span>
                      <a href="mailto:enquiries@prestigeone.ae" class="prestige-contact-card__value">
                        enquiries@prestigeone.ae
                      </a>
                      <span class="prestige-contact-card__sub">{{ $t('sh.replyWithinDay') }}</span>
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
                      <span class="prestige-contact-card__sub">{{ $t('sh.messageAnyTime') }}</span>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-30 tp_fade_anim" data-delay=".5">
                    <div class="prestige-contact-card">
                      <span class="prestige-contact-card__label">{{ $t('sh.visitUs') }}</span>
                      <p class="prestige-contact-card__value prestige-contact-card__value--address">
                        {{ $t('sh.address') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <prestige-contact-form />

            <prestige-feature-split
              class="prestige-contact-gallery"
              :title="$t('sh.visitSalesGallery')"
              image="/assets/images/v3/prestige-office.webp"
              :paragraphs="galleryParagraphs"
              :points="galleryPoints"
              reverse
            />

            <prestige-faq-accordion
              id="faqs"
              class="prestige-contact-faq"
              title=""
              :eyebrow="$t('sh.faqEyebrow')"
              :items="faqs"
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

const { tm, rt } = useI18n();

definePageMeta({ layout: false });
useSeoMeta({
  title: "Contact Us | Prestige One",
  description:
    "Get in touch with Prestige One - call 800 PRESTIGE, email enquiries@prestigeone.ae or visit our Dubai Marina sales gallery.",
});

const galleryParagraphs = computed(() =>
  (tm("sh.gallery.paras") as unknown[]).map((x) => rt(x as string)),
);

const galleryPoints = computed(() =>
  (tm("sh.gallery.points") as unknown[]).map((x) => rt(x as string)),
);

const faqs = computed<FaqItem[]>(() =>
  (tm("sh.faq.items") as { q: string; a: string }[]).map((o) => ({
    q: rt(o.q),
    a: rt(o.a),
  })),
);

usePrestigePage({ hero: false });
</script>

<style scoped>
:deep(.prestige-contact-hero .row) {
  justify-content: center;
  text-align: center;
}
:deep(.prestige-contact-hero .col-xl-9) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep(.prestige-contact-hero .prestige-hero-band__lead) {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
.prestige-contact-info__title {
  margin-bottom: 36px;
  font-size: clamp(25px, 3.2vw, 35px);
}
.prestige-contact-info__heading {
  text-align: center;
}
:deep(.prestige-contact-gallery .prestige-heading) {
  font-size: clamp(26px, 3.2vw, 32px);
}
:deep(.prestige-contact-gallery .col-lg-6:last-child) {
  display: flex;
  align-items: center;
}
:deep(.prestige-contact-gallery .prestige-fsplit__body) {
  width: 100%;
}
:deep(.prestige-contact-faq .prestige-eyebrow) {
  font-size: clamp(26px, 3.2vw, 32px);
  line-height: 1.1;
  letter-spacing: 0;
}
:deep(.prestige-contact-faq .prestige-faq__row:first-child .prestige-faq__q) {
  padding-top: 0;
}
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
  font-size: 20px;
  line-height: 1.3;
  color: #fff;
  transition: color 0.3s ease;
  word-break: break-word;
}
a.prestige-contact-card__value:hover {
  color: var(--tp-common-gold, #ffffff);
}
.prestige-contact-card__value--address {
  font-size: 20px;
  margin: 0;
}
.prestige-contact-card__value--secondary {
  margin-top: 8px;
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
