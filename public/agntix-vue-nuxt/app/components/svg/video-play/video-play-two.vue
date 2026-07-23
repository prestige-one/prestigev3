<template>
  <svg
    width="23"
    height="25"
    viewBox="0 0 23 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_2126_58)">
      <path
        d="M4.66016 1.73202C4.66016 0.962222 5.49349 0.481096 6.16016 0.865996L18.1602 7.7942C18.8268 8.1791 18.8268 9.14135 18.1602 9.52625L6.16016 16.4545C5.49349 16.8394 4.66016 16.3582 4.66016 15.5884L4.66016 1.73202Z"
        :fill="fillClr"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2126_58"
        x="0.660156"
        y="0.73053"
        width="22"
        height="23.8594"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2126_58"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2126_58"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
const {isDark} = useIsDark();
const props = withDefaults(defineProps<{ fill?: string }>(), {
  fill: 'black',
});
const fillClr = computed(() => (isDark.value ? 'white' : props.fill));
</script>
