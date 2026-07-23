<template>
  <div>
    <div :class="`tp-header-14-area ${topCls}`">
        <div :class="`container container-${containerCls}`">
            <div class="row">
                <div class="col-xl-12">
                    <div class="tp-header-14-wrapper d-flex align-items-center justify-content-between">
                        <div class="tp-header-14-left">
                            <div class="tp-header-logo">
                                <nuxt-link href="/">
                                    <img v-if="logoBlack" src="/img/logo/logo-black.png" alt="logo" width="120">
                                    <img v-else src="/img/logo/logo-white.png" alt="logo" width="120">
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="tp-header-14-right d-flex align-items-center">
                            <div v-if="showEmail" class="tp-header-14-info d-none d-md-block">
                                <a class="tp-line-white" href="mailto:hello@agntix.com">hello@agntix.com</a>
                            </div>
                            <div class="tp-header-14-bar-wrap ml-20">
                                <button class="tp-header-8-bar tp-offcanvas-open-btn" @click="openOffcanvas = true">
                                    <span>Menu</span>
                                    <span>
                                        <svg-menu-one/>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- offcanvas sidebar -->
    <offcanvas-area :is-open="openOffcanvas" @close="openOffcanvas = false" />
  </div>
</template>

<script setup lang="ts">
type IProps = {
  topCls?: string;
  logoBlack?: boolean;
  containerCls?: string;
  showEmail?: boolean
}
withDefaults(defineProps<IProps>(),{
  topCls: 'header-transparent tp-header-light',
  logoBlack: false,
  containerCls: '1800',
  showEmail: true
});
const openOffcanvas = ref(false);
</script>