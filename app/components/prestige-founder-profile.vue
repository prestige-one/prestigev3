<template>
  <section class="prestige-founder-area pb-140">
    <div class="container container-1430">
      <div class="prestige-founder-layout">
        <figure
          class="prestige-founder-portrait-panel tp_fade_anim"
          data-fade-from="left"
          data-fade-offset="30"
          data-duration="0.8"
        >
          <img
            class="prestige-founder-portrait"
            src="/assets/images/v3/mr.ajmal.webp"
            alt="Ajmal Saifi, Founder and CEO of Prestige One Developments"
            loading="lazy"
            decoding="async"
          >
          <figcaption class="prestige-founder-caption">
            <strong class="prestige-founder-name">Ajmal Saifi</strong>
            <span class="prestige-founder-role">{{ t('ap.founder.role') }}</span>
            <span class="prestige-founder-company">Prestige One Developments</span>
          </figcaption>
        </figure>

        <div
          class="prestige-founder-content-panel tp_fade_anim"
          data-fade-from="right"
          data-fade-offset="30"
          data-delay="0.08"
          data-duration="0.8"
        >
          <div class="prestige-founder-copy">
            <span class="prestige-founder-eyebrow">{{ t('ap.founder.eyebrow') }}</span>
            <h2 class="prestige-founder-title tp_reveal_anim" data-delay="0.05">
              {{ t('ap.founder.title') }}
            </h2>

            <div class="prestige-founder-description">
              <p>{{ t('ap.founder.p1') }}</p>
              <p>
                {{ t('ap.founder.p2Lead') }}
                <strong>{{ t('ap.founder.p2Strong') }}</strong>
              </p>
              <p>{{ t('ap.founder.p3') }}</p>
              <p>{{ t('ap.founder.p4') }}</p>
              <p>
                {{ t('ap.founder.p5Lead') }}
                <strong>{{ t('ap.founder.p5Strong') }}</strong>
              </p>
              <blockquote>
                {{ t('ap.founder.quote') }}
              </blockquote>
            </div>
          </div>

          <div class="prestige-founder-highlights" :aria-label="t('ap.founder.highlightsAria')">
            <div v-for="highlight in highlights" :key="highlight.title" class="prestige-founder-highlight">
              <i :class="highlight.icon" aria-hidden="true"></i>
              <strong>{{ highlight.title }}</strong>
              <span>{{ highlight.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PrestigeFounderHighlight {
  icon: string;
  title: string;
  label: string;
}

const { t } = useI18n();

const highlights = computed<PrestigeFounderHighlight[]>(() => [
  { icon: "fa-solid fa-award", title: t("ap.founder.h1Title"), label: t("ap.founder.h1Label") },
  { icon: "fa-solid fa-building", title: t("ap.founder.h2Title"), label: t("ap.founder.h2Label") },
  { icon: "fa-solid fa-handshake", title: t("ap.founder.h3Title"), label: t("ap.founder.h3Label") },
]);
</script>

<style scoped>
.prestige-founder-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.prestige-founder-layout {
  display: grid;
  grid-template-columns: minmax(330px, 0.78fr) minmax(0, 1.32fr);
  gap: clamp(18px, 2vw, 24px);
  padding-top: clamp(80px, 9vw, 120px);
}

.prestige-founder-portrait-panel,
.prestige-founder-content-panel {
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.008));
}

.prestige-founder-portrait-panel {
  position: relative;
  min-height: 680px;
  margin: 0;
  padding: 12px;
  overflow: hidden;
}

.prestige-founder-portrait {
  width: 100%;
  height: 100%;
  min-height: 654px;
  border-radius: 10px;
  object-fit: cover;
}

.prestige-founder-caption {
  position: absolute;
  right: 36px;
  bottom: 24px;
  left: 36px;
  display: flex;
  min-height: 104px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  background: rgba(5, 7, 10, 0.86);
  backdrop-filter: blur(8px);
  text-align: center;
}

.prestige-founder-name {
  font-family: "Brush Script MT", "Segoe Script", cursive !important;
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 400;
  line-height: 1;
  color: #fff;
}

.prestige-founder-role,
.prestige-founder-company {
  text-transform: uppercase;
}

.prestige-founder-role {
  margin-top: 9px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.6px;
  color: rgba(255, 255, 255, 0.88);
}

.prestige-founder-company {
  margin-top: 4px;
  font-size: 9px;
  letter-spacing: 1.4px;
  color: rgba(255, 255, 255, 0.58);
}

.prestige-founder-content-panel {
  display: flex;
  min-height: 680px;
  flex-direction: column;
  padding: clamp(30px, 3.6vw, 46px);
}

.prestige-founder-copy {
  flex: 1;
}

.prestige-founder-eyebrow {
  display: inline-flex;
  padding: 9px 20px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
}

.prestige-founder-title {
  margin: 18px 0 16px;
  font-size: clamp(24px, 2.2vw, 32px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.8px;
  color: #fff;
}

.prestige-founder-description p {
  margin: 0 0 14px;
  font-size: clamp(13px, 1.05vw, 15px);
  line-height: 1.68;
  color: rgba(255, 255, 255, 0.72);
}

.prestige-founder-description strong {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.72);
}

.prestige-founder-description blockquote {
  margin: 20px 0 0;
  padding: 0 0 0 18px;
  border-left: 2px solid rgba(170, 204, 226, 0.58);
  font-size: clamp(15px, 1.25vw, 18px);
  font-weight: 600;
  line-height: 1.55;
  color: #fff;
}

.prestige-founder-highlights {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 28px;
}

.prestige-founder-highlight {
  display: flex;
  min-height: 116px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.035);
  text-align: center;
}

.prestige-founder-highlight i {
  margin-bottom: 12px;
  font-size: 22px;
  color: rgba(226, 239, 248, 0.9);
}

.prestige-founder-highlight strong {
  font-size: clamp(17px, 1.5vw, 21px);
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
}

.prestige-founder-highlight span {
  margin-top: 6px;
  font-size: clamp(12px, 0.95vw, 14px);
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.55);
}

@media (max-width: 1199.98px) {
  .prestige-founder-layout {
    grid-template-columns: minmax(300px, 0.8fr) minmax(0, 1.2fr);
  }

  .prestige-founder-portrait-panel,
  .prestige-founder-content-panel {
    min-height: 720px;
  }

  .prestige-founder-portrait {
    min-height: 694px;
  }
}

@media (max-width: 991.98px) {
  .prestige-founder-layout {
    grid-template-columns: 1fr;
  }

  .prestige-founder-portrait-panel {
    min-height: auto;
  }

  .prestige-founder-portrait {
    height: auto;
    min-height: 0;
    aspect-ratio: 4 / 5;
    object-position: center top;
  }

  .prestige-founder-content-panel {
    min-height: auto;
  }
}

@media (max-width: 575.98px) {
  .prestige-founder-layout {
    padding-top: 80px;
  }

  .prestige-founder-portrait-panel,
  .prestige-founder-content-panel {
    border-radius: 10px;
  }

  .prestige-founder-portrait-panel {
    padding: 8px;
  }

  .prestige-founder-caption {
    right: 22px;
    bottom: 18px;
    left: 22px;
  }

  .prestige-founder-content-panel {
    padding: 28px 20px 20px;
  }

  .prestige-founder-highlights {
    grid-template-columns: 1fr;
  }
}
</style>
