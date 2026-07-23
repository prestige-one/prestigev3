<template>
  <div class="creative-blog-area pt-120 pb-80">
    <div class="container container-1580">
      <div class="creative-blog-title-wrap mb-60">
        <div class="row">
          <div class="col-xl-3">
            <div class="creative-blog-subtitle-box">
              <span class="tp-section-subtitle mb-20 fs-17 pre-circle">
                Featured Works
              </span>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6">
            <div class="creative-blog-title-box">
              <h4 class="tp-section-title fs-44">
                Take a look <br>
                at our projects
              </h4>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6">
            <div class="creative-blog-top-content">
              <p>
                The place that we share everything related to <br>
                design trends, tips and more.
              </p>
              <nuxt-link
                href="/blog-masonry"
                class="tp-btn-black btn-green-light-bg pr-15"
              >
                <span class="tp-btn-black-filter-blur">
                  <svg-btn-blur-filter filter-id="buttonFilter8" />
                </span>
                <span
                  class="tp-btn-black-filter d-inline-flex align-items-center"
                  style="filter: url(#buttonFilter8)"
                >
                  <span class="tp-btn-black-text">See all Articles</span>
                  <span class="tp-btn-black-circle">
                    <svg-arrow-four />
                  </span>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in creative_studio_blog_data"
          :key="item.id"
          class="col-xl-4 col-lg-6 col-md-6"
        >
          <div class="creative-blog-item mb-40">
            <div class="creative-blog-thumb">
              <nuxt-link href="/blog-details">
                <img :src="item.image" alt="blog-image">
              </nuxt-link>
            </div>
            <div class="creative-blog-meta">
              <span>{{item.category}}</span>
              <span>{{item.date}}</span>
            </div>
            <h4 class="creative-blog-title-sm">
              <nuxt-link class="tp-line-white" href="/blog-details">
                
                <div v-html="sanitizeHtml(item.title)" />
              </nuxt-link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { creative_studio_blog_data } from "../../data/blog-data";
</script>
