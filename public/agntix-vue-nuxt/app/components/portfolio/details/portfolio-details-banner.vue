<template>
   <div :class="`tp-portfolio-details-1-area pb-140 ${spacing}`">
      <div class="container container-1830">
          <div class="row">
              <div class="col-lg-12">
                  <div :class="`tp-portfolio-details-1-banner ${varientCls}`">
                      <img data-speed=".8" :src="img" alt="banner-img">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
    spacing?: string;
    varientCls?: string;
    img?: string;
}
withDefaults(defineProps<Props>(), {
    spacing: "",
    varientCls: "hight",
    img: "/img/portfolio/portfolio-details-1/portfolio-details-4.jpg",
})
</script>
