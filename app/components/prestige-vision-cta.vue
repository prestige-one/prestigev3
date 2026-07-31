<template>
  <section class="prestige-vision-cta-area pt-40 pb-80">
    <div class="container container-1430">
      <div class="prestige-vision-cta-content">
        <h2 class="prestige-vision-cta-title tp_reveal_anim" data-delay="0.05">
          The Vision Continues.
        </h2>
        <p class="prestige-vision-cta-description tp_fade_anim" data-fade-from="bottom" data-fade-offset="18">
          New developments, new opportunities, and more to come from Prestige One.
        </p>

        <div class="prestige-vision-cta-actions tp_fade_anim" data-fade-from="bottom" data-fade-offset="20" data-delay="0.1">
          <NuxtLink to="#" class="prestige-vision-cta-link prestige-vision-cta-link-primary">
            <span>Explore Our Developments</span>
            <span aria-hidden="true">&rarr;</span>
          </NuxtLink>
          <NuxtLink to="/contact-us" class="prestige-vision-cta-link prestige-vision-cta-link-secondary">
            <span>Get in Touch</span>
            <span aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prestige-vision-cta-area {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: #000;
  isolation: isolate;
}

.prestige-vision-cta-area::before {
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 50%;
  width: min(1080px, 88vw);
  content: "";
  background:
    radial-gradient(ellipse at 55% 24%, rgba(62, 91, 103, 0.25), transparent 52%),
    radial-gradient(ellipse at 35% 68%, rgba(112, 137, 151, 0.14), transparent 58%);
  transform: translateX(-50%);
  filter: blur(2px);
}

.prestige-vision-cta-content {
  max-width: 760px;
  margin: 0 auto;
  padding: clamp(54px, 7vw, 82px) 20px;
  text-align: center;
}

.prestige-vision-cta-title {
  margin: 0;
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.8px;
  color: #fff;
  text-align: center;
}

.prestige-vision-cta-description {
  max-width: 540px;
  margin: 22px auto 0;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.65);
}

.prestige-vision-cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 38px;
}

.prestige-vision-cta-link {
  display: inline-flex;
  min-height: 58px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 32px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
}

.prestige-vision-cta-link-primary {
  border-color: #dce5ea;
  background: #dce5ea;
  color: #080808;
}

.prestige-vision-cta-link-secondary {
  border-color: rgba(255, 255, 255, 0.28);
  color: #fff;
}

.prestige-vision-cta-link:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 4px;
}

@media (hover: hover) {
  .prestige-vision-cta-link-primary:hover {
    border-color: #fff;
    background: #fff;
    color: #080808;
  }

  .prestige-vision-cta-link-secondary:hover {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }
}

@media (max-width: 575.98px) {
  .prestige-vision-cta-content {
    padding-right: 0;
    padding-left: 0;
  }

  .prestige-vision-cta-actions {
    flex-direction: column;
  }

  .prestige-vision-cta-link {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-vision-cta-link {
    transition: none;
  }
}
</style>
