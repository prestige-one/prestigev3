<template>
  <ClientOnly>
    <Vue3Marquee class="tp-brand-active" :duration="50" :pause-on-hover="true">
      <div v-for="(item, index) in brandItems" :key="index" class="slide-transtion" style="margin-right: 30px">
        <div :class="`pp-brand-item ${brandCls}`">
          <span class="pp-brand-title">
            <i>{{ item.value }} /</i>{{ item.label }}
          </span>
          <span class="pp-brand-icon">
            <svg-spark-one v-if="svgFill" :fill="svgFill" />
            <svg-spark-one v-else />
          </span>
        </div>
      </div>
    </Vue3Marquee>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{ brandCls?: string;svgFill?: string }>();
interface BrandItem {
  value: string;
  label: string;
}

const brandItems: BrandItem[] = [
  { value: "86", label: "Satisfied Clients" },
  { value: "24", label: "Projects Finished" },
  { value: "95%", label: "Years of Experience" },
  { value: "86", label: "Client Retention Rate" },
  { value: "86", label: "Satisfied Clients" },
  { value: "24", label: "Projects Finished" },
  { value: "95%", label: "Years of Experience" },
  { value: "86", label: "Client Retention Rate" },
];
</script>
