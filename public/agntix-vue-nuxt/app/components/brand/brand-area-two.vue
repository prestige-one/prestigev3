<template>
  <div :class="`tp-brand-area ${style2?'':'black-bg-5'} pt-160 pb-200`">
    <!-- First Marquee -->
    <client-only>
      <div class="tp-brand-wrapper green-regular-bg z-index-1">
        <Vue3Marquee
          :duration="80"
          :pause-on-hover="true"
          class="tp-brand-active fix"
        >
          <div
            v-for="(item, index) in brandItems"
            :key="'first-' + index"
            class="tp-brand-item me-4"
          >
            <span class="tp-brand-title">{{ item }}</span>
          </div>
        </Vue3Marquee>
      </div>
    </client-only>

    <!-- Second Marquee (RTL) -->
    <client-only>
      <div :class="`tp-brand-wrapper tp-brand-style-2 ${style2?'':'black-bg-6'}`" :style="style2?'background-color: #FFFF':''">
        <Vue3Marquee
          :duration="80"
          :pause-on-hover="true"
          class="tp-brand-active fix"
          direction="reverse"
        >
          <div
            v-for="(item, index) in brandItems"
            :key="'second-' + index"
            :class="`tp-brand-item ${style2?'text-color':''}`"
          >
            <span class="tp-brand-title">{{ item }}</span>
          </div>
        </Vue3Marquee>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ style2?: boolean }>(), {
  style2: false,
})
const brandItems = [
  "Creative agency",
  "Website marketing",
  "Digital marketing",
  "Product marketing",
  "Research marketing",
  "Website marketing",
  "Lifetime Update",
  "Brand identity design",
  "UX/UI design services",
  "Video production",
  "Motion graphics",
  "Copywriting services"
];

const {isDark} = useIsDark();
onMounted(() => {
  if(isDark.value){
    const service = document.querySelector('.tp-brand-area');
    if(service){
      (service as HTMLElement).style.backgroundColor = '#1A1B1E';
    }
  }
});
</script>