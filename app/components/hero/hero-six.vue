<template>
  <div class="studio-hero-area p-relative fix pb-80">
    <!-- Floating Content Images -->
    <div class="content z-index-2 d-none d-md-block">
      <div
        v-for="(img, i) in heroImages"
        :key="i"
        class="content__img"
      >
        <div
          class="content__img-inner"
          :style="{ backgroundImage: `url(${img})` }"
        />
      </div>
    </div>

    <!-- Hero Info -->
    <div class="container container-1830">
      <div class="studio-hero-bg">
        <div class="row">
          <div class="col-xl-12">
            <div
              class="studio-hero-info z-index-5 d-flex justify-content-md-between justify-content-center align-items-center"
            >
              <a href="mailto:@agntix.studio">@agntix.studio</a>
              <span>Motion design <br> Studio</span>
              <a href="mailto:@agntix.studio">@agntix.studio</a>
            </div>
          </div>
        </div>

        <!-- Hero Title -->
        <div class="row">
          <div class="col-xl-12">
            <div
              class="studio-hero-content text-center tp-text-perspective"
              data-delay=".5"
              data-fade-from="top"
              data-ease="bounce"
            >
              <h2 :class="`studio-hero-title ${fontStyle}`">{{ title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
  fontStyle?: string;
}>(), {
  title: 'Agntix',
  fontStyle: ''
})
const heroImages = [
  "/img/1.webp",
  "/img/2.webp",
  "/img/3.webp",
  "/img/4.webp",
  "/img/5.webp",
  "/img/6.webp",
  "/img/7.webp",
  "/img/9.webp",
  "/img/10.webp",
  "/img/11.webp",
  "/img/12.webp",
  "/img/13.webp",
  "/img/14.webp",
  "/img/15.webp",
  "/img/16.webp",
  "/img/17.webp"
]
</script>
