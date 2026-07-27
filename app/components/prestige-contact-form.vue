<template>
  <section class="prestige-contact-form-area pt-120 pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="prestige-developments-title-box text-center">
            <h2 class="prestige-developments-title prestige-text-paint">
              Get In Touch
            </h2>
            <p class="prestige-developments-subtitle">
              Let's Talk About Your Next Move
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="prestige-contact-form-wrap">
            <form-contact-prestige />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* section is forced opaque black, independent of the global body bg, so
   it never bleeds into whatever sits above/below it. */
.prestige-contact-form-area {
  background-color: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.prestige-developments-title-box {
  margin-top: 140px;
  position: relative;
}

/* same small, contained aurora-style glow as the "Our Developments"
   headline — see prestige-our-developments.vue for the full rationale. */
.prestige-developments-title-box::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: min(560px, 90vw);
  height: 320px;
  z-index: -1;
  pointer-events: none;
  background-image: radial-gradient(
      circle at 65% 35%,
      rgba(120, 210, 255, 0.32),
      transparent 60%
    ),
    radial-gradient(circle at 32% 68%, rgba(255, 140, 210, 0.24), transparent 60%);
  filter: blur(60px);
}

.prestige-developments-title {
  font-size: clamp(28px, 4.5vw, 52px);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.prestige-developments-subtitle {
  font-size: clamp(14px, 1.6vw, 18px);
  margin: 0;
  color: #fff;
}

.prestige-text-paint {
  background-image: linear-gradient(
    to right,
    #ffffff 50%,
    rgba(255, 255, 255, 0.32) 50%
  );
  background-size: 200% 100%;
  background-position-x: 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.prestige-contact-form-wrap {
  margin-top: 100px;
}

/* form-contact-prestige.vue is a separate component — reach into it with
   :deep() and force the field/button colors, overridden with !important
   to win regardless of the global stylesheet's load order). */
.prestige-contact-form-wrap :deep(.tp-contact-form-input label) {
  color: #fff !important;
}

.prestige-contact-form-wrap :deep(.tp-contact-form-input input),
.prestige-contact-form-wrap :deep(.tp-contact-form-input textarea) {
  background: #1f1f1f !important;
  border-color: #484646 !important;
  color: #fff !important;
}

.prestige-contact-form-wrap :deep(.tp-contact-form-input input:focus),
.prestige-contact-form-wrap :deep(.tp-contact-form-input textarea:focus) {
  background: #1f1f1f !important;
  border-color: rgba(120, 210, 255, 0.7) !important;
}

.prestige-contact-form-wrap :deep(.tp-contact-form-input input)::placeholder,
.prestige-contact-form-wrap :deep(.tp-contact-form-input textarea)::placeholder {
  color: rgba(255, 255, 255, 0.4) !important;
}

.prestige-contact-form-wrap :deep(.tp-contact-form-btn button) {
  background-color: #303030 !important;
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
}
</style>
