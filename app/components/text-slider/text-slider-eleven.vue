<template>
  <div class="ar-about-us-4-text-area">
    <div class="row">
      <div class="col-lg-12">
        <div class="ar-about-us-4-text-warp">
          <ClientOnly>
           <Vue3Marquee
            :clone="true"
            :duration="60"
            class="tp-brand-active slide-transtion"
          >
            <h2
              v-for="(text, index) in slideTexts"
              :key="index"
              class="ar-about-us-4-text-title me-4"
            >
              {{ text }}
            </h2>
          </Vue3Marquee>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const slideTexts = [
  "HAVE A GREAT PROJECT?",
  "HAVE A GREAT PROJECT?",
  "HAVE A GREAT PROJECT?",
  "HAVE A GREAT PROJECT?",
  "HAVE A GREAT PROJECT?",
  "About Us",
  "HAVE A GREAT PROJECT?",
  "HAVE A GREAT PROJECT?",
  "HAVE A GREAT PROJECT?",
  "About Us",
]
</script>