<template>
  <section class="prestige-next-area pt-80 pb-80">
    <div class="container container-1430">
      <div class="prestige-next-inner">
        <prestige-section-heading
          class="prestige-next-heading"
          :title="t('ap.next.title')"
          :subtitle="t('ap.next.lead')"
        />
        <div class="prestige-next-actions tp_fade_anim" data-fade-from="bottom" data-fade-offset="24" data-delay="0.1">
          <nuxt-link :to="localePath('/projects')" class="prestige-next-btn prestige-next-btn--solid">
            {{ t('ap.next.exploreBtn') }} <span aria-hidden="true">→</span>
          </nuxt-link>
          <nuxt-link :to="localePath('/contact-us')" class="prestige-next-btn prestige-next-btn--ghost">
            {{ t('ap.next.contactBtn') }} <span aria-hidden="true">→</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
.prestige-next-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  position: relative;
  overflow: hidden;
}
.prestige-next-area::before {
  content: "";
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: min(760px, 92vw);
  height: 420px;
  z-index: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 60% 40%, rgba(120, 210, 255, 0.16), transparent 60%),
    radial-gradient(circle at 35% 65%, rgba(255, 255, 255, 0.14), transparent 60%);
  filter: blur(70px);
}
.prestige-next-inner {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}
.prestige-next-heading {
  margin-bottom: 40px;
}
.prestige-next-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.prestige-next-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 32px;
  border-radius: 60px;
  font-size: 14px;
  letter-spacing: 0.04em;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
}
.prestige-next-btn span { transition: transform 0.3s ease; }
.prestige-next-btn:hover span { transform: translateX(4px); }
.prestige-next-btn--solid {
  color: #0b0b0d;
  background: var(--tp-common-gold, #ffffff);
}
.prestige-next-btn--solid:hover { color: #0b0b0d; background: #f0f0f0; transform: translateY(-2px); }
.prestige-next-btn--ghost {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
.prestige-next-btn--ghost:hover { color: #fff; background: rgba(255, 255, 255, 0.08); transform: translateY(-2px); }

@media (max-width: 767.98px) {
  .prestige-next-area {
    padding-top: 100px;
    padding-bottom: 110px;
  }
}
</style>
