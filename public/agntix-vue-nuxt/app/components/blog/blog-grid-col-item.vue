<template>
  <div :class="colClass">
    <div class="tp-blog-masonry-item mb-30">
      <div class="tp-blog-masonry-item-top d-flex justify-content-between align-items-center mb-30">
        <div class="tp-blog-masonry-item-user d-flex align-items-center">
          <div class="tp-blog-masonry-item-user-thumb">
            <img v-if="blog.authorImg" :src="blog.authorImg" alt="author image">
          </div>
          <div class="tp-blog-masonry-item-user-content">
            <span>{{ blog.author }}</span>
            <p>Administrator</p>
          </div>
        </div>
        <div class="tp-blog-masonry-item-time">
          <span>
            <svg-clock-one /> {{ blog.date }}
          </span>
        </div>
      </div>

      <!-- With Video -->
      <div v-if="blog.videoUrl" class="tp-blog-masonry-thumb p-relative mb-30">
        <NuxtLink :to="'/blog-details'">
          <img :src="blog.image" alt="blog image">
        </NuxtLink>
        <div class="tp-blog-masonry-thumb-video">
          <modal-video class="popup-video" :show-icon="false">
            <span><svg-video-play-three /></span>
          </modal-video>
        </div>
      </div>

      <!-- Without Video -->
      <div v-else class="tp-blog-masonry-thumb mb-30">
        <NuxtLink :to="'/blog-details'">
          <img :src="blog.image" alt="blog image">
        </NuxtLink>
      </div>

      <div class="tp-blog-masonry-content">
        <div class="tp-blog-masonry-tag mb-15">
          <span><EditIcon /> {{ blog.category }}</span>
        </div>
        <h4 :class="`tp-blog-masonry-title ${fontSize}`">
         <NuxtLink class="tp-line-white" :to="'/blog-details'">
           
          <span v-html="sanitizeHtml(blog.title)"/>
         </NuxtLink>
        </h4>
        <div class="tp-blog-masonry-btn">
          <NuxtLink :to="'/blog-details'">
            Read More 
            <span>
              <svg-arrow-up-five stroke="currentColor" />
              <svg-arrow-up-five stroke="currentColor" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Blog {
  id: number;
  date: string;
  author: string;
  authorImg: string;
  category: string;
  title: string;
  image: string;
  videoUrl?: string;
  link?: string;
}
interface Props {
  blog: Blog;
  colClass?: string;
  fontSize?: string;
}

withDefaults(defineProps<Props>(), {
  colClass: 'col-md-6',
  fontSize: 'fs-30'
});
</script>
