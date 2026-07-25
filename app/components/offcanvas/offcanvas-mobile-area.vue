<template>
  <div>
    <div :class="['tp-offcanvas-area', isOpen ? 'opened' : '']">
        <div :class="`tp-offcanvas-wrapper ${isDark?'offcanvas-black-bg':''}`">
            <div class="tp-offcanvas-top d-flex align-items-center justify-content-between">
                <div class="tp-offcanvas-logo">
                    <nuxt-link href="/">
                        <img class="logo-1" src="/img/logo/logo-black.png" alt="" width="120">
                        <img class="logo-2" src="/img/logo/logo-white.png" alt="" width="120">
                    </nuxt-link>
                </div>
                <div class="tp-offcanvas-close">
                    <button class="tp-offcanvas-close-btn" @click="$emit('close')">
                        <svg-close-three/>
                    </button>
                </div>
            </div>
            <div class="tp-offcanvas-main">
                <div class="tp-offcanvas-content d-none d-xl-block">
                    <h3 class="tp-offcanvas-title">Hello There!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                </div>
                <div class="tp-offcanvas-menu d-xl-none">
                    <nav>
                      <offcanvas-mobile-menus/>
                    </nav>
                </div>
                <div class="tp-offcanvas-gallery d-none d-xl-block">
                    <div class="row gx-2">
                        <div class="col-md-3 col-3">
                            <div class="tp-offcanvas-gallery-img fix">
                                <a class="popup-image" href="/img/offcanvas/offcanvas-1.jpg"><img src="/img/offcanvas/offcanvas-1.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="col-md-3 col-3">
                            <div class="tp-offcanvas-gallery-img fix">
                                <a class="popup-image" href="/img/offcanvas/offcanvas-2.jpg"><img src="/img/offcanvas/offcanvas-2.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="col-md-3 col-3">
                            <div class="tp-offcanvas-gallery-img fix">
                                <a class="popup-image" href="/img/offcanvas/offcanvas-3.jpg"><img src="/img/offcanvas/offcanvas-3.jpg" alt=""></a>
                            </div>
                        </div>
                        <div class="col-md-3 col-3">
                            <div class="tp-offcanvas-gallery-img fix">
                                <a class="popup-image" href="/img/offcanvas/offcanvas-4.jpg"><img src="/img/offcanvas/offcanvas-4.jpg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tp-offcanvas-contact">
                    <h3 class="tp-offcanvas-title sm">Information</h3>
                    <ul>
                        <li><a href="tel:1245654">+ 4 20 7700 1007</a></li>
                        <li><a href="mailto:hello@diego.com">hello@diego.com</a></li>
                        <li><a href="#">Avenue de Roma 158b, Lisboa</a></li>
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
                                <svg-social-dribble-two/>
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
