<template>
  <div :class="`des-text-moving-2-area ${spacingCls} pb-60 z-index-1`">
    <div class="des-text-moving-wrap">
      <div class="des-text-title-box text-center">
        <div class="des-text-title-wrap">
          <h4 class="des-text-title">We can help you with</h4>
        </div>
        <p>Check out some of my projects by area of expertise</p>
      </div>

      <template v-for="(service, index) in services" :key="service.id">
        <div
          :class="`des-text-moving-top moving-text ${
            index === activeIndex ? 'active' : ''
          }`"
          @mouseenter="setActive(index)"
          @mouseleave="resetActive(index)"
        >
          <div
            class="des-text-item hover-reveal-item sm wrapper-text"
            :class="service.colorClass"
            @mousemove="(e) => handleMouseMove(e, '.hover-reveal-item')"
          >
            <div class="d-flex align-items-center">
              <span v-for="i in service.repeatCount" :key="i">
                {{ service.title }}
              </span>
            </div>
            <div class="des-text-reveal-img">
              <img :src="service.shape" :alt="`${service.title} shape`">
            </div>
          </div>
        </div>

        <div
          v-if="index < services.length - 1"
          class="des-text-title-box text-center"
        >
          <div class="des-text-title-wrap">
            <h4 class="des-text-title sm">Click to view Services</h4>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { handleMouseMove } = useMouseImageReveal();
useImageHoverReveal();
withDefaults(defineProps<{ spacingCls?: string }>(), {
  spacingCls: "pt-200",
});

const services = [
  {
    id: 1,
    title: "Product Design",
    shape: "/img/home-02/text-slider/shape-1.png",
    colorClass: "gradient-bulet",
    repeatCount: 4,
  },
  {
    id: 2,
    title: "Brand Design",
    shape: "/img/home-02/text-slider/shape-3.png",
    colorClass: "paste-bulet",
    repeatCount: 4,
  },
  {
    id: 3,
    title: "Motion Design",
    shape: "/img/home-02/text-slider/shape-2.png",
    colorClass: "yellow-bulet",
    repeatCount: 4,
  },
  {
    id: 4,
    title: "Web Development",
    shape: "/img/home-02/text-slider/shape-4.png",
    colorClass: "pink-bulet",
    repeatCount: 3,
  },
];

// Track which index is "active"
const activeIndex = ref<number>(0);

// Mouse enter → make this item active
function setActive(index: number) {
  activeIndex.value = index;
}

// Mouse leave → restore siblings active (default to first item)
function resetActive(index: number) {
  // Optional: always reset to first
  activeIndex.value = index;
}
</script>
