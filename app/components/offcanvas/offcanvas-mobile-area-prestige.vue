<template>
  <div>
    <div :class="['tp-offcanvas-area', isOpen ? 'opened' : '']">
        <div class="tp-offcanvas-wrapper offcanvas-black-bg prestige-offcanvas-glass">
            <div class="tp-offcanvas-top d-flex align-items-center justify-content-between">
                <div class="tp-offcanvas-logo">
                    <nuxt-link href="/">
                        <img class="logo-1" src="/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg" alt="Prestige One" width="190">
                        <img class="logo-2" src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="190">
                    </nuxt-link>
                </div>
                <div class="tp-offcanvas-close">
                    <button class="tp-offcanvas-close-btn" @click="$emit('close')">
                        <svg-close-three/>
                    </button>
                </div>
            </div>
            <div class="tp-offcanvas-main">
                <div class="tp-offcanvas-menu d-xl-none">
                    <nav>
                      <offcanvas-mobile-menus-prestige/>
                    </nav>
                </div>
                <div class="tp-offcanvas-contact">
                    <h3 class="tp-offcanvas-title sm prestige-offcanvas-info-title">Prestige One Developments</h3>
                    <ul>
                        <li>
                            <a href="tel:80077378443">
                                <span class="prestige-offcanvas-contact-icon"><svg-phone-one /></span>
                                <span>800 PRESTIGE / 800 77378443</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:enquiries@prestigeone.ae">
                                <span class="prestige-offcanvas-contact-icon"><svg-email-two /></span>
                                <span>enquiries@prestigeone.ae</span>
                            </a>
                        </li>
                        <li>
                            <div class="prestige-offcanvas-contact-row">
                                <span class="prestige-offcanvas-contact-icon"><svg-location-one /></span>
                                <span>Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="tp-offcanvas-social">
                    <h3 class="tp-offcanvas-title sm">Follow Us</h3>
                    <ul>
                        <li>
                            <a href="https://instagram.com/byprestigeone/" target="_blank">
                                <svg-social-instagram-two/>
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/ByPrestigeOne/" target="_blank">
                                <svg-social-fb-three/>
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/company/byprestigeone/" target="_blank">
                                <svg-social-linkedin-three/>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+971523412936" target="_blank">
                                <svg-social-whatsapp-three/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div :class="['body-overlay', isOpen ? 'opened' : '']" @click="$emit('close')"/>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  close: [];
}>();
</script>

<style scoped>
.prestige-offcanvas-info-title {
  font-size: 14px;
  letter-spacing: 0.5px;
}

.tp-offcanvas-contact :deep(li > a),
.prestige-offcanvas-contact-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* this row is a plain div (not an <a>), so it falls outside the theme's
   .offcanvas-black-bg .tp-offcanvas-contact ul li a rule — colored to
   match that rule's white-on-dark text explicitly. */
.prestige-offcanvas-contact-row {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
}

.prestige-offcanvas-contact-icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: inherit;
}

/* site is permanently dark-themed, so this panel always uses the theme's
   .offcanvas-black-bg look (white logo/text/close-button/social icons) —
   but swapped from that variant's solid #1C1D20 fill to a translucent,
   blurred glass panel so the page behind still shows through, tinted
   black, matching the header pill's glass treatment. */
.prestige-offcanvas-glass {
  background: rgba(10, 10, 12, 0.8) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>
