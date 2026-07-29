<template>
  <section class="prestige-section--tight prestige-statcounters">
    <div class="container container-1430">
      <div class="row">
        <div
          v-for="(s, i) in stats"
          :key="i"
          class="col-lg-3 col-6 mb-30 tp_fade_anim"
          data-delay=".2"
        >
          <prestige-counter-stat
            :value="s.value"
            :suffix="s.suffix"
            :prefix="s.prefix"
            :label="s.label"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CounterStat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

defineProps<{ stats: CounterStat[] }>();
</script>

<style scoped>
.prestige-statcounters {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
