
<template>
  <div class="st-blog-area st-blog-ptb pb-110">
      <div class="container container-1320">
          <div class="row align-items-end">
              <div class="col-lg-8">
                  <div class="st-blog-heading mb-70">
                      <span class="tp-section-subtitle st tp_fade_anim" data-delay=".3">
                        // OUR BLOG POST
                      </span>
                      <h3 class="tp-section-title-playfair mb-20 tp_fade_anim" data-delay=".5">LATEST NEWS <br> FROM <span>STARTUP</span></h3>
                  </div>
              </div>
              <div class="col-lg-4">
                  <div class="st-blog-text mb-70 tp_fade_anim" data-delay=".5">
                      <p>The place that we share everything related to <br>
                          design trends, tips and more.</p>
                      <nuxt-link class="tp-btn-border-2 st" href="/blog-grid">
                          VIEW ALL NEWS
                          <span>
                              <svg-arrow-seven/>
                          </span>
                      </nuxt-link>
                  </div>
              </div>
          </div>
          <div class="row">
              <div v-for="item in startup_blogs" :key="item.id" class="col-lg-4 col-md-6">
                  <div class="st-blog-item mb-30">
                      <div class="st-blog-item-thumb">
                          <nuxt-link href="/blog-details">
                            <img :src="item.image" alt="">
                          </nuxt-link>
                      </div>
                      <div class="st-blog-item-content">
                          <h3 class="st-blog-item-title">
                            <nuxt-link class="tp-line-black" href="/blog-details">
                              <span v-html="sanitizeHtml(item.title)"/>
                            </nuxt-link>
                          </h3>
                          <div class="st-blog-item-tags d-flex align-items-center">
                              <span>{{ item.category }} </span>
                              <div class="st-blog-item-tags-devide"/>
                              <p>{{ item.date }}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import {startup_blogs} from '~/data/blog-data';
</script>
