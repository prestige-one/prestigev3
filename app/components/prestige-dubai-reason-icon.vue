<template>
  <svg
    class="prestige-whydubai-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'visa'">
      <rect x="5" y="2.75" width="14" height="18.5" rx="2.25" />
      <circle cx="12" cy="10" r="3" />
      <path d="M8.5 16h7M12 7v6M9.4 8.5h5.2" />
    </template>

    <template v-else-if="name === 'ownership'">
      <path d="m3.5 11 8.5-7 8.5 7" />
      <path d="M6 9.5v10h8" />
      <circle cx="17" cy="16" r="2.5" />
      <path d="m19 17.5 2 2M21 19.5h-1.8M21 19.5v-1.8" />
    </template>

    <template v-else-if="name === 'tax'">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 15.5 7-7" />
      <circle cx="9" cy="9" r="1.25" />
      <circle cx="15" cy="15" r="1.25" />
    </template>

    <template v-else-if="name === 'protect'">
      <path d="M12 2.75 19 5.5v5.25c0 4.7-2.85 8.5-7 10.5-4.15-2-7-5.8-7-10.5V5.5l7-2.75Z" />
      <path d="m8.6 12 2.15 2.15 4.65-4.65" />
    </template>

    <template v-else-if="name === 'safe'">
      <path d="M7 10V7.75a5 5 0 0 1 10 0V10" />
      <rect x="4.5" y="10" width="15" height="11" rx="2.5" />
      <path d="m9 15.5 2 2 4-4" />
    </template>

    <template v-else>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14.2 14.2 0 0 1 0 18M12 3a14.2 14.2 0 0 0 0 18" />
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  name: "visa" | "ownership" | "tax" | "protect" | "safe" | "global";
}>();
</script>

<style scoped>
.prestige-whydubai-icon {
  display: block;
  width: 27px;
  height: 27px;
  stroke-width: 1.35;
}
</style>
