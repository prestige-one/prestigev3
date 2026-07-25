<template>
  <div class="ar-blog-area pb-100">
    <div class="ar-blog-title-wrap ar-title-mlr mb-60">
      <div class="row align-items-end">
        <div class="col-xl-8 col-lg-8 col-md-7">
          <div class="ar-blog-title-box">
            <span class="tp-section-subtitle-satisfy mb-20 tp_fade_anim" data-delay=".3">Latesrt Articles</span>
            <h3
              class="tp-section-title-clash-600 fs-60 mb-0 tp_fade_anim"
              data-delay=".4"
            >
              RECENT BLOG POSTS
            </h3>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-5">
          <div
            class="ar-blog-btn-box d-flex justify-content-md-end justify-content-start mb-15"
          >
            <div
              class="tp-btn-red-circle-box tp_fade_anim"
              data-delay=".5"
              data-fade-from="top"
              data-ease="bounce"
            >
              <nuxt-link class="tp-btn-red-circle-icon" href="/blog-grid">
                <span><svg-arrow-two /></span>
              </nuxt-link>
              <nuxt-link class="tp-btn-red-circle-text" href="/blog-grid">
                View all blog
              </nuxt-link>
              <nuxt-link class="tp-btn-red-circle-icon" href="/blog-grid">
                <span><svg-arrow-two /></span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container container-1430">
      <div class="row gx-40">
        <div
          v-for="(item, index) in architecture_blogs"
          :key="index"
          class="col-xl-3 col-lg-6 col-md-6"
        >
          <div class="ar-blog-item mb-30 tp_fade_anim" :data-delay="item.delay">
            <div class="ar-blog-thumb p-relative">
              <nuxt-link href="/blog-details">
                <img class="w-100" :src="item.image" alt="blog-img">
              </nuxt-link>
              <nuxt-link class="ar-blog-category" href="/blog-details">
                {{ item.category }}
              </nuxt-link>
            </div>
            <div class="ar-blog-content">
              <h3 class="ar-blog-title-sm">
                <nuxt-link class="tp-line-black" href="/blog-details">
                  {{ item.title }}
                </nuxt-link>
              </h3>
              <span class="ar-blog-meta">{{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { architecture_blogs } from "../../data/blog-data";
</script>
