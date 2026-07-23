<template>
  <div class="container container-1300">
    <!-- Top Row -->
    <div class="row">
      <!-- Left: Small Images -->
      <div class="col-lg-6 col-md-6">
        <div class="tp-funfact-img-wrap">
          <div class="row gx-20">
            <div
              v-for="(image, index) in panel.images"
              :key="index"
              class="col-lg-3 col-sm-4 col-6"
            >
              <FunFactImage :src="image.src" :delay="image.delay" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Title & Subtitle -->
      <div class="col-lg-6 col-md-6">
        <div class="tp-funfact-content-wrap">
          <div
            class="tp-funfact-content"
            v-bind="panel.id !== 3 ? { 'data-fade-from': 'right', 'data-delay': '1.3' } : {}"
          >
            <span class="tp-funfact-subtitle">{{ panel.subtitle }}</span>
            
            <h4 class="tp-funfact-title" v-html="sanitizeHtml(panel.title)"/>
            
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div class="tp-funfact-img-wrap-2 p-relative">
      <div class="row">
        <!-- Left Side: Secondary Images + Big Image -->
        <div v-if="panel.secondaryImages || panel.bigImage" class="col-lg-6 col-md-6">
          <div class="row">
            <!-- Secondary Images -->
            <div v-if="panel.secondaryImages" class="col-lg-6">
              <div class="row gx-20">
                <div
                  v-for="(image, index) in panel.secondaryImages"
                  :key="index"
                  class="col-lg-6 col-sm-4 col-6"
                >
                  <FunFactImage :src="image.src" :delay="image.delay" />
                </div>
              </div>
            </div>

            <!-- Big Image -->
            <div v-if="panel.bigImage" class="col-lg-6">
              <div
                class="tp-funfact-big-img mb-20 tp-text-bounce"
                :data-delay="panel.bigImage.delay"
              >
                <img
                  :src="panel.bigImage.src"
                  alt="funfact-image"
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Number -->
        <div class="col-lg-6 col-md-6">
          <div class="tp-funfact-content-wrap">
            <div class="tp-funfact-number">
              <span>
                <template v-if="panel.number.includes('#')">
                  {{ panel.number }}
                </template>
                <template v-else>
                  <span
                    v-for="(char, i) in panel.number.split('')"
                    :key="i"
                    class="tp-text-bounce"
                    :data-delay="1 + (i * 0.3)"
                  >
                    {{ char }}
                  </span>
                </template>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Panel } from '~/types/custom-d-t';


defineProps<{ panel: Panel }>()
</script>
