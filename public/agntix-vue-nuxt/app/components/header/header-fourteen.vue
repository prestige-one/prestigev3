<template>
 <div>
    <div :class="`tp-header-14-area ${topCls} header-transparent`">
        <div class="container container-1750">
            <div class="row">
                <div class="col-xl-12">
                    <div class="tp-header-14-wrapper d-flex align-items-center justify-content-between">
                        <div :class="`tp-header-14-left ${styleTwo?'':'ml-10'}`">
                            <div class="tp-header-logo">
                                <nuxt-link href="/">
                                <nuxt-link href="/">
                                    <img v-if="!isDark || styleTwo" src="/img/logo/logo-black.png" alt="logo" width="120">
                                    <img v-if="isDark && !styleTwo" src="/img/logo/logo-fashion.png" alt="logo" width="120">
                                    </nuxt-link>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="tp-header-14-right d-flex align-items-center">
                            <div v-if="!styleTwo" class="tp-header-14-info d-none d-md-block">
                                <a class="tp-line-white" href="mailto:hello@agntix.com">
                                hello@agntix.com
                                </a>
                            </div>
                            <div v-if="!styleTwo" class="tp-header-14-bar-wrap ml-20">
                                <button class="tp-header-8-bar tp-offcanvas-open-btn" @click="openOffcanvas = true">
                                    <span>Menu</span>
                                    <span> <svg-menu-one/> </span>
                                </button>
                            </div>
                            <button v-if="styleTwo" class="tp-header-8-bar tp-offcanvas-open-btn ml-20" @click="openOffcanvas = true">
                                <span>Menu</span>
                                <span> <svg-menu-one/> </span>
                            </button>
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
interface Props {
  topCls?: string;
  styleTwo?: boolean;
}

const { isDark } = useIsDark();

withDefaults(defineProps<Props>(), {
  topCls: 'tp-header-15-style',
  styleTwo: false,
});
const openOffcanvas = ref(false);
</script>