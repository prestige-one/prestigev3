<template>
  <div>
    <common-magic-cursor />
    <nuxt-layout name="layout-one">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main class="prestige-page">
            <prestige-page-hero
              eyebrow="Partners"
              title="Broker Registration"
              lead="Partner with Prestige One and offer your clients access to Dubai's most sought-after residences, with dedicated support and competitive commissions."
              image="/assets/project-featured-images/sliders/the-one-1.webp"
            />

            <section class="prestige-section">
              <div class="container container-1430">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-30">
                    <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">Become a Partner</span>
                    <h2 class="prestige-heading tp_fade_anim" data-delay=".3">
                      Register your agency
                    </h2>
                  </div>
                  <div class="col-xl-7 offset-xl-1 col-lg-8">
                    <div class="prestige-prose tp_fade_anim" data-delay=".4">
                      <p>
                        We work closely with a trusted network of real-estate professionals to bring
                        our developments to discerning buyers around the world. Registering as a
                        partner gives your agency direct access to inventory, marketing materials and
                        a dedicated broker relations team.
                      </p>
                      <p>
                        Complete the form below and our partnerships team will be in touch to
                        finalise your registration and share the latest availability.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-center">
                  <div class="col-xl-9">
                    <div class="prestige-broker-form-wrap tp_fade_anim" data-delay=".2">
                      <prestige-broker-form />
                    </div>
                  </div>
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
definePageMeta({ layout: false });
useSeoMeta({
  title: "Broker Registration | Prestige One",
  description:
    "Register your agency to partner with Prestige One and offer clients access to Dubai's most sought-after luxury residences.",
});

usePrestigePage({ hero: false });
</script>

<style scoped>
.prestige-broker-form-wrap {
  margin-top: 60px;
}

/* dark form styling — mirror prestige-contact-form.vue, reaching into the
   broker-form child with :deep() so field colors win over the global sheet. */
.prestige-broker-form-wrap :deep(.tp-contact-form-input label) {
  color: #fff !important;
}
.prestige-broker-form-wrap :deep(.tp-contact-form-input input),
.prestige-broker-form-wrap :deep(.tp-contact-form-input textarea) {
  background: #1f1f1f !important;
  border-color: #484646 !important;
  color: #fff !important;
}
.prestige-broker-form-wrap :deep(.tp-contact-form-input input:focus),
.prestige-broker-form-wrap :deep(.tp-contact-form-input textarea:focus) {
  background: #1f1f1f !important;
  border-color: rgba(120, 210, 255, 0.7) !important;
}
.prestige-broker-form-wrap :deep(.tp-contact-form-input input)::placeholder,
.prestige-broker-form-wrap :deep(.tp-contact-form-input textarea)::placeholder {
  color: rgba(255, 255, 255, 0.4) !important;
}
.prestige-broker-form-wrap :deep(.tp-contact-form-btn button) {
  background-color: #303030 !important;
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
}
</style>
