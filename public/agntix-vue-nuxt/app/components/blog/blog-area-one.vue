<template>
  <div class="dgm-blog-area pt-120 pb-120">
    <div class="container container-1330">
      <div class="dgm-blog-title-wrap mb-60">
        <div class="row align-items-end">
          <div class="col-lg-6 col-md-8">
            <div class="dgm-blog-title-box">
              <h4 class="tp-section-title-grotesk tp_fade_anim" data-delay=".3">
                The latest <br>
                industry trends
              </h4>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div
              class="dgm-blog-btn text-start text-lg-end tp_fade_anim"
              data-delay=".3"
            >
              <nuxt-link
                class="tp-btn-yellow-green green-solid btn-60"
                href="/blog-grid-2-col"
              >
                <span>
                  <span class="text-1">Read all posts</span>
                  <span class="text-2">Read all posts</span>
                </span>
                <i>
                  <svg-arrow-two/>
                  <svg-arrow-two/>
                </i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="dgm-blog-main">
        <div
          v-for="blog in digital_marketing_blog_data"
          :key="blog.id"
          class="dgm-blog-item tp_fade_anim"
        >
          <div class="row">
            <div class="col-xl-7 col-lg-8">
              <div class="dgm-blog-content-wrap d-flex">
                <div
                  class="dgm-blog-content d-flex flex-column justify-content-between"
                >
                  <div class="dgm-blog-meta mb-30">
                    <h4>{{ blog.author }}</h4>
                    <span>{{ blog.date }}</span>
                  </div>
                  <div class="dgm-blog-category">
                    <span>{{ blog.category }}</span>
                  </div>
                </div>
                <div class="dgm-blog-title-box">
                  <h4 class="dgm-blog-title-sm">
                    <nuxt-link class="tp-line-black" :href="`/blog-details`">
                      {{ blog.title }}
                    </nuxt-link>
                  </h4>
                </div>
              </div>
            </div>
            <div class="col-xl-3 offset-xl-2 col-lg-4">
              <div class="dgm-blog-thumb-wrap text-start text-lg-end">
                <div class="dgm-blog-thumb">
                  <nuxt-link :href="`/blog-details`">
                    <img :src="blog.image" alt="blog-image">
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { digital_marketing_blog_data } from "../../data/blog-data";
</script>
