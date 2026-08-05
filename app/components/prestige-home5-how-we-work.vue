<template>
  <section
    class="prestige-home5-work tp-panel-pin-area pt-80 pb-80"
    data-prestige-reveal-trigger
  >
    <div class="container container-1430">
      <div class="row align-items-start gx-xl-5">
        <div class="col-xl-5 col-lg-5">
          <header class="prestige-home5-work__heading tp-panel-pin">
            <span class="prestige-home5-work__eyebrow">{{ $t('hp.whyUs.title') }}</span>
            <h2 class="prestige-home5-work__title prestige-developments-title prestige-text-paint">
              {{ $t('hp.whyUs.subtitle') }}
            </h2>
          </header>
        </div>

        <div class="col-xl-7 col-lg-7">
          <div class="prestige-home5-work__steps">
            <article
              v-for="step in steps"
              :key="step.number"
              class="prestige-home5-work__step tp-panel-pin"
              :class="{ 'prestige-home5-work__step--reverse': step.reverse }"
            >
              <div class="prestige-home5-work__body">
                <div class="prestige-home5-work__number" aria-hidden="true">
                  <span />
                  <strong>{{ step.number }}</strong>
                </div>
                <div class="prestige-home5-work__content">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </div>
              </div>

              <figure class="prestige-home5-work__media">
                <img :src="step.image" :alt="step.title" loading="lazy">
              </figure>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const steps = computed(() => [
  {
    number: "01",
    title: t("hp.whyUs.item1Title"),
    description: t("hp.whyUs.item1Desc"),
    image: "/assets/images/v3/projects-map.webp",
    reverse: false,
  },
  {
    number: "02",
    title: t("hp.whyUs.item2Title"),
    description: t("hp.whyUs.item2Desc"),
    image: "/assets/images/v3/Designed-Around-Life-3.webp",
    reverse: true,
  },
  {
    number: "03",
    title: t("hp.whyUs.item3Title"),
    description: t("hp.whyUs.item3Desc"),
    image: "/assets/images/v3/connected-to-the-world.webp",
    reverse: false,
  },
  {
    number: "04",
    title: t("hp.whyUs.item4Title"),
    description: t("hp.whyUs.item4Desc"),
    image: "/assets/images/v3/connected.jpeg",
    reverse: true,
  },
]);
</script>

<style scoped>
.prestige-home5-work {
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 18% 42%, rgba(87, 151, 186, 0.11), transparent 32%),
    radial-gradient(circle at 82% 65%, rgba(126, 92, 151, 0.09), transparent 35%),
    #0e0e12;
}

.prestige-home5-work__heading {
  display: flex;
  min-height: calc(100vh - 160px);
  max-width: 460px;
  padding: 40px 0;
  flex-direction: column;
  justify-content: center;
}

.prestige-home5-work__eyebrow {
  display: block;
  margin-bottom: 18px;
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.prestige-home5-work__title {
  margin: 0;
  font-size: clamp(42px, 5.6vw, 60px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
}

.prestige-home5-work__steps {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.prestige-home5-work__step {
  position: relative;
  display: grid;
  min-height: 310px;
  grid-template-columns: minmax(0, 1.08fr) minmax(230px, 0.92fr);
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.012)),
    #15161a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
}

.prestige-home5-work__step--reverse {
  grid-template-columns: minmax(230px, 0.92fr) minmax(0, 1.08fr);
}

.prestige-home5-work__step--reverse .prestige-home5-work__media {
  order: -1;
}

.prestige-home5-work__body {
  position: relative;
  z-index: 2;
  display: flex;
  padding: clamp(28px, 3.2vw, 46px);
  flex-direction: column;
  justify-content: center;
}

.prestige-home5-work__number {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
}

.prestige-home5-work__number span {
  display: block;
  width: 42px;
  height: 1px;
  background: rgba(255, 255, 255, 0.36);
}

.prestige-home5-work__number strong {
  color: transparent;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(30px, 3vw, 44px);
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(180deg, #f8fcff 0%, #a9bfce 34%, #edf8ff 58%, #829dae 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(232, 245, 253, 0.72);
}

.prestige-home5-work__content {
  position: relative;
}

.prestige-home5-work__content h3 {
  margin: 0 0 14px;
  color: #fff;
  font-size: clamp(22px, 2.1vw, 30px);
  font-weight: 500;
  line-height: 1.2;
}

.prestige-home5-work__content p {
  max-width: 540px;
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.7;
}

.prestige-home5-work__media {
  position: relative;
  min-width: 0;
  min-height: 310px;
  margin: 0;
  overflow: hidden;
}

.prestige-home5-work__media::after {
  position: absolute;
  inset: 0;
  content: ""; 
  pointer-events: none;
}

 

.prestige-home5-work__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*filter: brightness(0.72) saturate(0.82);*/
  transform: scale(1.01);
  transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.prestige-home5-work__step:hover .prestige-home5-work__media img {
  filter: brightness(0.86) saturate(0.98);
  transform: scale(1.055);
}

@media (max-width: 1199.98px) {
  .prestige-home5-work__heading {
    position: sticky;
    top: 96px;
  }
}

@media (max-width: 991.98px) {
  .prestige-home5-work__heading {
    position: static;
    min-height: 0;
    max-width: 720px;
    margin-bottom: 42px;
    padding: 0;
  }
}

@media (max-width: 575.98px) {
  .prestige-home5-work__step {
    min-height: 0;
    grid-template-columns: 1fr;
  }

  .prestige-home5-work__step--reverse {
    grid-template-columns: 1fr;
  }

  .prestige-home5-work__step--reverse .prestige-home5-work__media {
    order: 0;
  }

  .prestige-home5-work__body {
    padding: 28px 22px 30px;
  }

  .prestige-home5-work__media {
    min-height: 230px;
    order: -1;
  }

  .prestige-home5-work__media::after,
  .prestige-home5-work__step--reverse .prestige-home5-work__media::after {
    background: linear-gradient(0deg, rgba(21, 22, 26, 0.7), transparent 52%);
  }
}
</style>
