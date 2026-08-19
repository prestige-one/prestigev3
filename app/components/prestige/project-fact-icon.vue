<template>
  <span class="prestige-project-fact-icon" aria-hidden="true">
    <svg v-if="name === 'Location'" viewBox="0 0 24 24">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>

    <svg v-else-if="name === 'Type' || name === 'Brand'" viewBox="0 0 24 24">
      <path d="m4 13 9-9h7v7l-9 9L4 13Z" />
      <circle cx="16.5" cy="7.5" r="1.2" />
    </svg>

    <svg v-else-if="name === 'Configuration'" viewBox="0 0 24 24">
      <path d="M5 21V5h9v16M14 10h5v11M3 21h18" />
      <path d="M8 9h3M8 13h3M8 17h3M17 14h1M17 17h1" />
    </svg>

    <svg v-else-if="name === 'Completion'" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 10h18M8 15l2.5 2.5L16 12" />
    </svg>

    <svg v-else viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<style scoped>
.prestige-project-fact-icon {
  display: grid;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.018));
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.045), 0 8px 20px rgba(0, 0, 0, 0.16);
  place-items: center;
}

.prestige-project-fact-icon svg {
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.35;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
