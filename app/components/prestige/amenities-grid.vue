<template>
  <section class="prestige-section prestige-amen">
    <div class="container container-1430">
      <div class="row">
        <div class="col-xl-4 mb-40">
          <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow ?? t('pp.detail.amenities.eyebrow') }}</span>
          <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ title }}</h2>
          <p v-if="lead" class="prestige-prose tp_fade_anim" data-delay=".4" style="margin-top: 18px;">{{ lead }}</p>
        </div>
        <div class="col-xl-8">
          <div class="row">
            <div
              v-for="(a, i) in items"
              :key="i"
              class="col-md-6 mb-20 tp_fade_anim"
              data-delay=".2"
            >
              <div class="prestige-amen__item">
                <span class="prestige-amen__num">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="prestige-amen__label">{{ a }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ items: string[]; title: string; eyebrow?: string; lead?: string }>(),
  { lead: "" },
);

const { t } = useI18n();
</script>

<style scoped>
.prestige-amen__item {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.prestige-amen__num {
  font-size: 13px;
  color: var(--tp-common-gold, #ffffff);
  font-variant-numeric: tabular-nums;
}
.prestige-amen__label {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.86);
}
</style>
