<template>
  <div>
    <div :class="['tp-offcanvas-area', isOpen ? 'opened' : '']">
        <div :class="`tp-offcanvas-wrapper ${isDark?'offcanvas-black-bg':''}`">
            <div class="tp-offcanvas-top d-flex align-items-center justify-content-between">
                <div class="tp-offcanvas-logo">
                    <nuxt-link href="/">
                        <img class="logo-1" src="/assets/images/v3/prestigeone_logo_oneline_dark-hr.svg" alt="Prestige One" width="140">
                        <img class="logo-2" src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="140">
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
                    <h3 class="tp-offcanvas-title sm">Information</h3>
                    <ul>
                        <li><a href="#">+971 4 000 0000</a></li>
                        <li><a href="#">info@prestigeone.com</a></li>
                        <li><a href="#">Dubai, United Arab Emirates</a></li>
                    </ul>
                </div>
                <div class="tp-offcanvas-social">
                    <h3 class="tp-offcanvas-title sm">Follow Us</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <svg-social-instagram-two/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg-social-fb-three/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg-social-x-three/>
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
