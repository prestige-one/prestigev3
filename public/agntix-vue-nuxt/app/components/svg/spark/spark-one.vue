<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.384 0H14.2411V12.4133L5.46352 3.63578L3.94829 5.15102L12.7258 13.9286H0.3125V16.0715H12.7258L3.94829 24.849L5.46352 26.3642L14.2411 17.5866V30H16.384V17.5866L25.1615 26.3642L26.6767 24.849L17.8991 16.0715H30.3125V13.9286H17.8991L26.6767 5.151L25.1615 3.63578L16.384 12.4133V0Z"
      :fill="fill"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ fill?: string }>(), {
  fill: "#141414",
})
</script>
