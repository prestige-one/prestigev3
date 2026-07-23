<template>
  <div class="st-brand-area st-brand-border st-brand-ptb p-relative">
    <div class="container container-1320">
      <div class="row align-items-center">
        <!-- Left Heading -->
        <div class="col-lg-3">
          <div class="st-brand-heading">
            <span>
              WE WORKED <br>
              WITH INDUSTRY <br>
              LEADER
            </span>
          </div>
        </div>

        <!-- Right Scrolling Brands -->
        <div class="col-lg-9">
          <div class="st-brand-wrap">
            <client-only>
              <Vue3Marquee
                :duration="30"
                :pause-on-hover="false"
                class="st-brand-active slider-transtion"
              >
                <div
                  v-for="brand in brands"
                  :key="brand.id"
                  class="st-brand-item"
                >
                  <img :src="brand.image" :alt="`brand-${brand.id}`">
                </div>
              </Vue3Marquee>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const brands = [
  { id: 1, image: "/img/home-12/brand/brand-1.png"},
  { id: 2, image: "/img/home-12/brand/brand-2.png"},
  { id: 3, image: "/img/home-12/brand/brand-3.png"},
  { id: 4, image: "/img/home-12/brand/brand-4.png"},
  { id: 5, image: "/img/home-12/brand/brand-1.png"},
  { id: 6, image: "/img/home-12/brand/brand-2.png"},
  { id: 7, image: "/img/home-12/brand/brand-3.png"},
  { id: 8, image: "/img/home-12/brand/brand-4.png"}
];

</script>

<style scoped>
@media (max-width: 992px) {
  .st-brand-item {
     width: 175px;
  }
}

@media (min-width: 993px) {
  .st-brand-item {
    width: 208px;
  }
}

@media (min-width: 1200px) {
  .st-brand-item {
    width: 242px;
  }
}
</style>