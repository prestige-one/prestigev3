<template>
  <div class="ai-blog-area pb-110 p-relative">
    <!-- Background Shape -->
    <div class="ai-blog-shape-1">
      <img src="/img/home-07/shape/shape-5.png" alt="shape">
    </div>

    <div class="container container-1230">
      <!-- Section Title -->
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="ai-blog-title-box text-center mb-60">
            <div
              class="tp-section-subtitle-gradient mb-20 tp_fade_anim"
              data-delay=".3"
            >
              <div>
                <img src="/img/title-shape/title-shape-1.png" alt="title-shape">
              </div>
              newest article
            </div>

            <h4
              class="tp-section-title fs-54 mb-20 tp_fade_anim"
              data-delay=".5"
            >
              Our Latest News
            </h4>
          </div>
        </div>
      </div>

      <!-- Blog Items -->
      <div class="row">
        <div
          v-for="(post, index) in ai_image_blog_data"
          :key="post.id"
          class="col-xl-4 col-lg-4 col-md-6"
        >
          <div
            class="ai-blog-item anim-zoomin-wrap mb-30 tp_fade_anim"
            :data-delay="0.3 + index * 0.2"
          >
            <!-- Thumbnail -->
            <div class="ai-blog-thumb anim-zoomin">
              <NuxtLink to="/blog-details">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="img-fluid"
                >
              </NuxtLink>
            </div>

            <!-- Content -->
            <div class="ai-blog-content-wrap">
              <div class="ai-blog-content">
                <span>{{ post.category }}</span>
                <h4 class="ai-blog-title">
                  <NuxtLink class="tp-line-white" to="/blog-details">
                    
                    <div v-html="sanitizeHtml(post.title)"/>
                  </NuxtLink>
                </h4>
              </div>

              <!-- Meta -->
              <div class="ai-blog-meta">
                <span>{{ post.date }}</span>
                <span>{{ post.commentCount }} Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {ai_image_blog_data} from '~/data/blog-data';
</script>
