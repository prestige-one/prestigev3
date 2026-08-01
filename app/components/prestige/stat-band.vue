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
  font-family: "Google Sans", sans-serif;
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  color: transparent;
  background: linear-gradient(180deg, #f8fcff 0%, #b7cad7 22%, #819bab 23%, #edf8ff 46%, #7896aa 47%, #eaf6ff 79%, #9bb4c5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(232, 245, 253, 0.9);
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
