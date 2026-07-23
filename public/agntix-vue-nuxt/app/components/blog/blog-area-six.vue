
<template>
  <div class="cr-blog-area">
    <div class="container container-1230">
        <div class="cr-multi-border pt-120">
            <div class="cr-blog-bottom-border">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cr-blog-heading text-center pb-60">
                            <div class="tp-section-subtitle-gradient ct mb-20 tp_fade_anim" data-delay=".3">Latest Articles</div>
                            <h4 class="tp-section-title-onest fs-72 tp-text-revel-anim">Find out the <br> latest crypto news</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div v-for="item in crypto_currency_blogs" :key="item.id" class="col-lg-4 col-md-6">
                        <div class="cr-blog-item mb-30">
                            <div class="cr-blog-item-thumb">
                                <nuxt-link href="/blog-details">
                                    <img :src="item.image" alt="blog-img">
                                </nuxt-link>
                            </div>
                            <div class="cr-blog-item-content">
                                <span class="cr-blog-item-category">
                                  {{ item.category }}
                                </span>
                                <h4 class="cr-blog-item-title">
                                  <nuxt-link class="tp-line-white" href="/blog-details">
                                    <span v-html="sanitizeHtml(item.title)"/>
                                  </nuxt-link>
                                </h4>
                                <p class="cr-blog-item-meta">
                                  {{ item.date}} . {{ item.commentCount}}Comments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="cr-blog-bottom text-center tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                            <a href="#" class="cr-blog-bottom-text">Check out more of our crypto news</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cr-cta-ptb p-relative pt-120 pb-100">
                <div class="cr-cta-bg">
                  <img src="/img/home-13/cta/cta-thumb-bg.png" alt="">
                </div>
                <div class="cr-cta-shape">
                    <span v-for="i in 15" :key="i" :class="`shape-${i+1}`"/>
                </div>
                <div class="container container-1230">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cr-cta-content text-center">
                                <div class="cr-cta-img p-relative mb-20">
                                    <img src="/img/home-13/cta/cta-thumb.gif" alt="">
                                </div>
                                <h4 class="tp-section-title-onest fs-50 tp-text-revel-anim">Unlock your full trading <br> potential with industry-leading tools.</h4>
                                <div class="tp_text_anim">
                                    <p class="cr-cta-text">Trade, invest, and manage your cryptocurrency portfolio with precision and ease</p>
                                </div>
                                <div class="cr-cta-btn tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                                    <nuxt-link href="/service-3" class="tp-btn-white-border">Find out more <span>
                                      <svg-arrow-six/></span>
                                    </nuxt-link>
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
import {crypto_currency_blogs} from '~/data/blog-data';
</script>