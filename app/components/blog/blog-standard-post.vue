<template>
  <article
    v-for="post in blogPosts"
    :key="post.id"
    class="postbox-item mb-30"
  >
    <!-- Author -->
    <div class="postbox-author-wrap d-flex align-items-center justify-content-between mb-30">
      <div class="postbox-author-box d-flex align-items-center">
        <div class="postbox-author-img">
          <img :src="post.authorImg" :alt="post.authorName">
        </div>
        <div class="postbox-author-info">
          <h4 class="postbox-author-name">{{ post.authorName }}</h4>
          <span>{{ post.authorRole }}</span>
        </div>
      </div>
      <div class="postbox-meta">
        <i><svg-clock-one/></i>
        <span>{{ post.date }}</span>
      </div>
    </div>
    <!-- Regular Thumbnail -->
    <div
      v-if="post.thumb && !post.videoUrl && !post.slider"
      class="postbox-thumb mb-35"
    >
      <NuxtLink to="/blog-details">
        <img :src="post.thumb" :alt="post.title">
      </NuxtLink>
    </div>

    <!-- Video Thumbnail -->
    <div
      v-if="post.videoUrl"
      class="postbox-thumb postbox-thumb-overlay p-relative mb-35"
    >
      <NuxtLink :to="'/blog-details'">
        <img :src="post.thumb" :alt="post.title">
      </NuxtLink>
      <div class="postbox-play-btn z-index-1">
        <button class="popup-video">
          <modal-video cls="popup-video" :show-icon="false">
            <span>
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="black"/>
                </svg>
            </span>
          </modal-video>
        </button>
      </div>
    </div>

    <!-- Quote -->
    <div v-if="post.quote" class="postbox-blockquote mb-35">
      <blockquote>
        <div class="postbox-blockquote-post">
          <span class="postbox-blockquote-icon">
             <svg-quote-five/>
          </span>
          <div class="postbox-blockquote-paragraph">
            <p>{{ post.quote }}</p>
          </div>
        </div>
      </blockquote>
    </div>

    <!-- Slider -->
    <div v-if="post.slider" class="postbox-slider-thumb mb-35">
      <div class="postbox-slider p-relative">
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="false"
          :space-between="0"
          :speed="1000"
          :breakpoints="{
            1400: { slidesPerView: 1 }
          }"
          :navigation="{
            prevEl: '.postbox-arrow-prev',
            nextEl: '.postbox-arrow-next',
          }"
          class="postbox-slider-active fix"
        >
          <SwiperSlide v-for="(img, i) in post.slider" :key="i">
            <div class="postbox-slider-item">
              <img :src="img" alt="slide">
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="postbox-arrow">
          <button class="postbox-arrow-prev">
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
          <button class="postbox-arrow-next">
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="postbox-content">
      <span class="postbox-tag">
        <i><svg-tag-one/></i>
        {{ post.tag }}
      </span>
      <h3 class="postbox-title">
        <NuxtLink :to="'/blog-details'">{{ post.title }}</NuxtLink>
      </h3>
      <p v-if="post.excerpt">{{ post.excerpt }}</p>
      <NuxtLink
        v-if="!post.quote"
        :to="'/blog-details'"
        class="tp-btn-yellow-border postbox-btn"
      >
        <span>
          <span class="text-1">View More</span>
          <span class="text-2">View More</span>
        </span>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';


const blogPosts = [
    {
        id: 1,
        authorImg: "/img/blog/blog-standard/blog-av-2.jpg",
        authorName: "Phil Martinez",
        authorRole: "Co-Founder of Agntix",
        date: "April 15, 2025",
        thumb: "/img/blog/blog-standard/blog-s-1.jpg",
        tag: "Inspiration",
        title: "Lessons learned from professional challenges",
        excerpt:
            "A journey of self-discovery and exploration that allows us to align our values, interests, and skills with our professional pursuitsplatea dictumst[…] ",
    },
    {
        id: 2,
        authorImg: "/img/blog/blog-masonry/blog-masonry-user-2.jpg",
        authorName: "Devon Lane",
        authorRole: "Co-Founder of Agntix",
        date: "April 15, 2025",
        thumb: "/img/blog/blog-standard/blog-s-2.jpg",
        tag: "Inspiration",
        title: "The role of social media in shaping society",
        excerpt:
            "A journey of self-discovery and exploration that allows us to align our values, interests, and skills with our professional pursuitsplatea dictumst[…] ",
        videoUrl: "VCPGMjCW0is",
    },
    {
        id: 3,
        authorImg: "/img/blog/blog-masonry/blog-masonry-user-3.jpg",
        authorName: "Phil Martinez",
        authorRole: "Floyd Miles",
        date: "April 15, 2025",
        tag: "Inspiration",
        title: "Quote post",
        quote:
            "Agntix created something better then I ecer could have imagined Dipiscing elit, sed do eiusmod",
    },
    {
        id: 4,
        authorImg: "/img/blog/blog-masonry/blog-masonry-user-4.jpg",
        authorName: "Jacob Jones",
        authorRole: "Co-Founder of Agntix",
        date: "April 15, 2025",
        tag: "Inspiration",
        title: "Fueling ambition and achieving your goals",
        excerpt:
            "A journey of self-discovery and exploration that allows us to align our values, interests, and skills with our professional pursuitsplatea dictumst[…] ",
        slider: [
            "/img/blog/blog-standard/blog-s-3.jpg",
            "/img/blog/blog-standard/blog-s-2.jpg",
            "/img/blog/blog-standard/blog-s-1.jpg"
        ],
    },
];
</script>