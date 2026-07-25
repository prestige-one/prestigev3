<template>
  <main>
    <div class="tp-perspective-area">
      <div class="container container-1685">
        <div class="row">
          <div class="col-xl-12">
            <div class="tp-perspective-slider">
              <div
                v-for="(item, index) in perspective_items"
                :key="index"
                class="tp-perspective-main"
              >
                <div class="tp-perspective-inner">
                  <div
                    class="tp-perspective-image"
                    :data-background="item.bgImg"
                    :style="{ backgroundImage: `url(${item.bgImg})` }"
                  >
                    <div class="tp-perspective-content">
                      <span class="tp-perspective-category tp_reveal_anim">
                        {{ item.category }}
                      </span>
                      <h1
                        class="tp-perspective-title tp_reveal_anim not-hide-cursor"
                        data-cursor="View<br>Demo"
                      >
                        <NuxtLink class="cursor-hide" :to="item.href">
                          {{ item.title }}
                        </NuxtLink>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

const perspective_items = [
  {
    bgImg: '/img/perspective-slider/slider-3.jpg',
    category: 'Branding',
    title: 'Keepgrading',
    href: '/portfolio-details-gallery'
  },
  {
    bgImg: '/img/perspective-slider/slider-2.jpg',
    category: 'Branding',
    title: 'Gráfico',
    href: '/portfolio-details-gallery'
  },
  {
    bgImg: '/img/perspective-slider/slider-4.jpg',
    category: 'Branding',
    title: 'Diseño',
    href: '/portfolio-details-gallery'
  },
  {
    bgImg: '/img/perspective-slider/slider-5.jpg',
    category: 'Branding',
    title: 'Keepgrading',
    href: '/portfolio-details-gallery'
  },
  {
    bgImg: '/img/perspective-slider/slider-1.jpg',
    category: 'Branding',
    title: 'Stickers Pack',
    href: '/portfolio-details-gallery'
  },
  {
    bgImg: '/img/perspective-slider/slider-6.jpg',
    category: 'Branding',
    title: 'Dinámica',
    href: '/portfolio-details-gallery'
  }
]
</script>

