<template>
  <div>
    <div :class="['tp-offcanvas-area', isOpen ? 'opened' : '']">
        <div :class="`tp-offcanvas-wrapper ${isDark?'offcanvas-black-bg':''}`">
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

const {isDark} = useIsDark();
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

.prestige-offcanvas-contact-row {
  color: #414144;
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
  border: 1px solid rgba(2, 11, 24, 0.1);
  color: inherit;
}
</style>
