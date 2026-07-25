<template>
  <div class="tp-funfact-area">
    <div class="tp-funfact-panel-wrap">
      <div
        v-for="panel in panels_data"
        :key="panel.id"
        class="tp-funfact-panel"
      >
        <div
          :class="`${panel.style} include-bg tp-text-bounce-trigger`"
          data-bg-color="#F6F6F9"
          :style="{ backgroundColor: bg_clr }"
        >
          <fun-fact-item :panel="panel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import panels_data from "~/data/panels-data";
const router = useRouter();
const bg_clr = router.currentRoute.value.path.includes("dark")
  ? "#1A1B1E"
  : "#F6F6F9";
</script>
