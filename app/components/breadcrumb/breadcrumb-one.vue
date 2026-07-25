<template>
   <div class="tp-breadcrumb-area tp-breadcrumb-ptb">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-xxl-12">
                  <div class="tp-breadcrumb-content text-center">
                      <h3 class="tp-breadcrumb-title">{{ title }}</h3>
                      <div class="tp-breadcrumb-list mb-35">
                          <span><nuxt-link href="/">Home</nuxt-link></span>
                          <span class="dvdr"><i>|</i></span>
                          <span>{{ title }}</span>
                      </div>
                      <div class="tp-breadcrumb-scrolldown smooth">
                          <a href="#postbox">
                              <span>
                                  <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1 1L8 8L15 1" :stroke="isDark?'#fff':'black'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                              </span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{title:string}>();
const {isDark} = useIsDark();
</script>