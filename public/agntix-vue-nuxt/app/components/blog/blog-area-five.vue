
<template>
 <div class="crp-blog-area pt-140 pb-100 p-relative">
      <div class="crp-blog-shape">
          <img data-speed="1.1" src="/img/home-09/blog/blog-shape-1.png" alt="">
      </div>
      <div class="container container-1350">
          <div class="row align-items-start">
              <div class="col-xl-3">
                  <div class="crp-blog-title-box">
                      <h4 class="crp-blog-title" data-speed=".9" data-stagger="0.07">thoughts and insights</h4>
                  </div>
              </div>
              <div class="col-xl-9">
                  <div class="crp-blog-wrap">
                      <div v-for="item in corporate_agency_blogs" :key="item.id" class="crp-blog-item mb-40 tp_fade_anim">
                          <div class="row">
                              <div class="col-md-4">
                                  <div class="crp-blog-thumb">
                                      <nuxt-link href="/blog-details">
                                        <img :src="item.image" alt="blog-img">
                                      </nuxt-link>
                                  </div>
                              </div>
                              <div class="col-md-8">
                                  <div class="crp-blog-content mt-60">
                                      <span class="crp-blog-meta">
                                        {{item.date}}
                                    </span>
                                      <h4 class="crp-blog-title-sm">
                                        <nuxt-link class="tp-line-white cream" href="/blog-details">
                                            <span v-html="sanitizeHtml(item.title)"/>
                                        </nuxt-link>
                                     </h4>
                                      <div class="crp-blog-category">
                                        <span v-for="(c,i) in item.categories" :key="i">   {{c}}
                                        </span>
                                      </div>
                                  </div>
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
import {corporate_agency_blogs} from '~/data/blog-data';
</script>
