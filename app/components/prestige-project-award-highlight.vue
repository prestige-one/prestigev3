<template>
  <section class="prestige-project-award" aria-labelledby="prestige-project-award-title">
    <div class="container container-1430">
      <div class="prestige-project-award__inner">
        <div class="prestige-project-award__copy tp_fade_anim" data-fade-from="left">
          <span class="prestige-project-award__eyebrow">Award-Winning Excellence</span>
          <h2 id="prestige-project-award-title" class="prestige-project-award__title">
            Best Branded Residence in Dubai
          </h2>
          <img
            class="prestige-project-award__title-under"
            src="/assets/images/v3/title-under.webp"
            alt=""
            aria-hidden="true"
            decoding="async"
          >
          <p class="prestige-project-award__text">
            Recognised by the Arabian Property Awards
          </p>
        </div>

        <figure class="prestige-project-award__media tp_fade_anim" data-fade-from="right" data-delay=".15">
          <img
            class="prestige-project-award__image"
            src="/assets/images/v3/awards/AR_26_PropertyBadge%202.webp"
            alt="Arabian Property Awards winner 2026–2027"
            loading="lazy"
            decoding="async"
          >
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prestige-project-award {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(68px, 7vw, 112px) 0;
  background: #000;
}

.prestige-project-award::before,
.prestige-project-award::after {
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
  height: 1px;
  content: "";
  background: linear-gradient(90deg, transparent, rgba(111, 139, 79, 0.48), transparent);
  box-shadow: 0 0 22px rgba(82, 112, 56, 0.2);
}

.prestige-project-award::before { top: 0; }
.prestige-project-award::after { bottom: 0; }

.prestige-project-award__inner {
  display: grid;
  width: min(100%, 1180px);
  margin: 0 auto;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  align-items: center;
  gap: clamp(28px, 4vw, 64px);
}

.prestige-project-award__title {
  max-width: 760px;
  margin: 0;
  color: #fff;
  font-size: clamp(25px, 3vw, 40px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: clamp(2px, 0.35vw, 6px);
  text-shadow: 0 0 28px rgba(209, 223, 195, 0.14);
  text-transform: uppercase;
}

.prestige-project-award__eyebrow {
  display: block;
  margin-bottom: clamp(14px, 1.5vw, 20px);
  color: rgba(188, 153, 18, 0.9);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.prestige-project-award__text {
  margin: clamp(18px, 2vw, 28px) 0 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: clamp(16px, 1.35vw, 21px);
  line-height: 1.55;
  letter-spacing: 1.5px;
}

.prestige-project-award__title-under {
  display: block;
  width: min(284px, 70%);
  height: auto;
  margin-top: clamp(14px, 1.6vw, 22px);
}

.prestige-project-award__media {
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: clamp(14px, 1.5vw, 22px);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.025);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
}

.prestige-project-award__image {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 991.98px) {
  .prestige-project-award__inner {
    grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
    gap: 30px;
  }

  .prestige-project-award__title {
    letter-spacing: 3px;
  }
}

@media (max-width: 767.98px) {
  .prestige-project-award__inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .prestige-project-award__copy {
    text-align: center;
  }

  .prestige-project-award__eyebrow {
    letter-spacing: 3px;
  }

  .prestige-project-award__title {
    letter-spacing: 2px;
  }

  .prestige-project-award__title-under {
    margin-right: auto;
    margin-left: auto;
  }

  .prestige-project-award__media {
    max-width: 420px;
  }
}
</style>
