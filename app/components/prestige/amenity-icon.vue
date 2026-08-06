<template>
  <svg
    class="prestige-amen-icon"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <g v-if="kind === 'pool'">
      <path d="M3 20c2.2 0 2.2-1.7 4.4-1.7S9.6 20 11.8 20s2.2-1.7 4.4-1.7 2.2 1.7 4.4 1.7 2.2-1.7 4.4-1.7S27.2 20 29 20" />
      <path d="M3 25c2.2 0 2.2-1.7 4.4-1.7S9.6 25 11.8 25s2.2-1.7 4.4-1.7 2.2 1.7 4.4 1.7 2.2-1.7 4.4-1.7S27.2 25 29 25" />
      <path d="M11 17V8.5a3 3 0 0 1 6 0V17M17 12h7M24 17V7.5a2.5 2.5 0 0 1 5 0" />
    </g>
    <g v-else-if="kind === 'fitness'">
      <path d="M8 16h16M4 12v8M7 9v14M25 9v14M28 12v8M1.5 14v4M30.5 14v4" />
    </g>
    <g v-else-if="kind === 'garden'">
      <path d="M16 28V13M16 17c-1-7-5-10-11-11 0 6 4 10 11 11ZM16 14c1-6 5-9 11-10 0 6-4 9-11 10ZM9 28c4-2 10-2 14 0" />
    </g>
    <g v-else-if="kind === 'concierge'">
      <path d="M7 23h18M5 26h22M8 22a8 8 0 0 1 16 0M16 10V7M13.5 7h5" />
    </g>
    <g v-else-if="kind === 'parking'">
      <path d="m5 18 2.2-7h17.6l2.2 7M4 19h24v7H4zM7 26v2M25 26v2M8.5 22h3M20.5 22h3M9 11l2-4h10l2 4" />
    </g>
    <g v-else-if="kind === 'play'">
      <path d="M7 27V12h10v15M5 12h14L12 5 5 12ZM17 16h5l5 7M22 16v7M22 23h5M9 17h6M12 17v10" />
    </g>
    <g v-else-if="kind === 'lounge'">
      <path d="M8 18v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6M7 17H5a2 2 0 0 0-2 2v6h26v-6a2 2 0 0 0-2-2h-2M8 17v5M24 17v5M7 25v3M25 25v3" />
    </g>
    <g v-else>
      <path d="M8 11h16l2 17H6L8 11ZM12 13V8a4 4 0 0 1 8 0v5" />
    </g>
  </svg>
</template>

<script setup lang="ts">
type AmenityKind = "pool" | "fitness" | "garden" | "concierge" | "parking" | "play" | "lounge" | "retail";

const props = defineProps<{ label: string; index: number }>();
const fallbackKinds: AmenityKind[] = ["pool", "fitness", "garden", "concierge", "parking", "play", "lounge", "retail"];

const kind = computed<AmenityKind>(() => {
  const label = props.label.toLowerCase();
  if (/pool|swim|spa/.test(label)) return "pool";
  if (/fitness|gym/.test(label)) return "fitness";
  if (/garden|landscap|green/.test(label)) return "garden";
  if (/concierge|security|reception/.test(label)) return "concierge";
  if (/parking|garage/.test(label)) return "parking";
  if (/play|children|kids/.test(label)) return "play";
  if (/lounge|co-working|coworking|cinema/.test(label)) return "lounge";
  if (/retail|dining|shop/.test(label)) return "retail";
  return fallbackKinds[props.index % fallbackKinds.length] ?? "retail";
});
</script>

<style scoped>
.prestige-amen-icon {
  display: block;
  width: 78px;
  height: 78px;
  stroke-width: 0.85;
}
</style>
