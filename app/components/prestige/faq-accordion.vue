<template>
  <section class="prestige-section prestige-faq">
    <div class="container container-1430">
      <div class="row">
        <div class="col-xl-4 mb-40">
          <span class="prestige-eyebrow tp_fade_anim" data-delay=".2">{{ eyebrow ?? t('pp.faq.eyebrow') }}</span>
          <h2 class="prestige-heading tp_fade_anim" data-delay=".3">{{ title }}</h2>
        </div>
        <div class="col-xl-8">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="prestige-faq__row tp_fade_anim"
            data-delay=".2"
            :class="{ open: openIndex === i }"
          >
            <button class="prestige-faq__q" @click="toggle(i)">
              <span>{{ item.q }}</span>
              <span class="prestige-faq__icon" />
            </button>
            <div class="prestige-faq__a">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// exported from a plain <script> block so pages can `import type { FaqItem }`
// from this SFC (type exports aren't allowed from <script setup>).
export interface FaqItem { q: string; a: string }
</script>

<script setup lang="ts">
defineProps<{ items: FaqItem[]; title: string; eyebrow?: string }>();

const { t } = useI18n();

const openIndex = ref<number | null>(0);
function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i;
}
</script>

<style scoped>
.prestige-faq__row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.prestige-faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 26px 0;
  background: transparent;
  text-align: left;
  color: #fff;
  font-family: var(--tp-ff-cormorant, "Cormorant Garamond", Georgia, serif);
  font-size: clamp(20px, 2.4vw, 28px);
}
.prestige-faq__icon {
  position: relative;
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
}
.prestige-faq__icon::before,
.prestige-faq__icon::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 1.5px;
  background: var(--tp-common-gold, #ffffff);
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
}
.prestige-faq__icon::after { transform: translate(-50%, -50%) rotate(90deg); }
.prestige-faq__row.open .prestige-faq__icon::after { transform: translate(-50%, -50%) rotate(0); }
.prestige-faq__a {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease, opacity 0.4s ease;
  opacity: 0;
}
.prestige-faq__row.open .prestige-faq__a {
  max-height: 400px;
  opacity: 1;
}
.prestige-faq__a p {
  padding: 0 0 26px;
  margin: 0;
  font-size: 17px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.72);
  max-width: 760px;
}
</style>
