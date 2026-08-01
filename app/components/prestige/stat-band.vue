<template>
  <section class="prestige-section--tight prestige-statband">
    <div class="container container-1430">
      <div class="row">
        <div
          v-for="(s, i) in stats"
          :key="i"
          class="col-lg-3 col-md-6 mb-30 tp_fade_anim"
          data-delay=".2"
        >
          <div class="prestige-statband__item">
            <span class="prestige-statband__value">{{ s.value }}</span>
            <span class="prestige-statband__label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat { value: string; label: string }
defineProps<{ stats: Stat[] }>();
</script>

<style scoped>
.prestige-statband {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.prestige-statband__item {
  text-align: center;
}
.prestige-statband__value {
  display: block;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(40px, 5vw, 68px);
  line-height: 1;
  color: #fff;
}
.prestige-statband__label {
  display: block;
  margin-top: 12px;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--tp-common-gold, #ffffff);
}
</style>
