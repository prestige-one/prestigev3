<template>
  <svg
    class="prestige-amen-icon"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    :data-amenity-kind="kind"
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
      <rect x="7" y="3" width="18" height="26" rx="2" />
      <path d="M12 25V9h5.5a5 5 0 0 1 0 10H12M12 19h5.5" />
    </g>
    <g v-else-if="kind === 'play'">
      <path d="M7 27V12h10v15M5 12h14L12 5 5 12ZM17 16h5l5 7M22 16v7M22 23h5M9 17h6M12 17v10" />
    </g>
    <g v-else-if="kind === 'lounge'">
      <path d="M8 18v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6M7 17H5a2 2 0 0 0-2 2v6h26v-6a2 2 0 0 0-2-2h-2M8 17v5M24 17v5M7 25v3M25 25v3" />
    </g>
    <g v-else-if="kind === 'cinema'">
      <rect x="3" y="6" width="26" height="19" rx="2" />
      <path d="m13 11 7 4.5-7 4.5v-9ZM10 29h12M16 25v4" />
    </g>
    <g v-else-if="kind === 'running'">
      <circle cx="19" cy="5.5" r="2.2" />
      <path d="m15 11 4-3 4 4 4 1M19 8l-4 8-6 3M15 16l6 4 1 7M9 19l-4 7" />
    </g>
    <g v-else-if="kind === 'sports'">
      <rect x="3" y="5" width="26" height="22" rx="2" />
      <path d="M16 5v22M3 16h26M11 16a5 5 0 0 1 5-5M21.5 9.5h3v3h-3z" />
    </g>
    <g v-else-if="kind === 'bbq'">
      <path d="M6 13h20M8 13a8 8 0 0 0 16 0M12 21 9 28M20 21l3 7M9 27h14M12 9c-1-1.2-1-2.3 0-3.5M17 9c-1-1.2-1-2.3 0-3.5M22 9c-1-1.2-1-2.3 0-3.5" />
    </g>
    <g v-else-if="kind === 'juice'">
      <path d="M9 9h14l-2 19H11L9 9ZM13 9l6-6h6M13 15h8" />
    </g>
    <g v-else>
      <path d="M8 11h16l2 17H6L8 11ZM12 13V8a4 4 0 0 1 8 0v5" />
    </g>
  </svg>
</template>

<script setup lang="ts">
type AmenityKind = "pool" | "fitness" | "garden" | "concierge" | "parking" | "play" | "lounge" | "retail" | "cinema" | "running" | "sports" | "bbq" | "juice";

const props = defineProps<{ label: string; index: number }>();
const fallbackKinds: AmenityKind[] = ["pool", "fitness", "garden", "concierge", "parking", "play", "lounge", "retail"];

const kind = computed<AmenityKind>(() => {
  const label = props.label.toLowerCase();
  if (/pool|swim|spa/.test(label)) return "pool";
  if (/fitness|gym/.test(label)) return "fitness";
  if (/cinema|theatre|theater|screening/.test(label)) return "cinema";
  if (/running|jogging|track/.test(label)) return "running";
  if (/multi-sports|sports court|paddle|padel|tennis|basketball/.test(label)) return "sports";
  if (/bbq|barbecue|grill/.test(label)) return "bbq";
  if (/juice|beverage|refreshment/.test(label)) return "juice";
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
