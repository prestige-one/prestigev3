<template>
  <section class="prestige-about-hero-area pt-200 pb-120">
    <div class="container container-1430">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="prestige-developments-title-box text-center">
            <h2
              class="prestige-developments-title prestige-text-paint prestige-load-title prestige-load-text-paint"
            >
              About Us
            </h2>
            <p class="prestige-developments-subtitle prestige-load-subtitle">
              Behind Every Place, There's a Purpose
            </p>
          </div>
        </div>
      </div>

      <div class="row align-items-center gy-4 gx-xl-5 prestige-about-hero-row">
        <div class="col-xl-6">
          <div class="prestige-about-hero-thumb anim-zoomin">
            <video
              class="prestige-about-hero-video"
              src="/assets/videos/company-showcase.mp4"
              aria-label="Prestige One Developments company showcase"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="prestige-about-hero-content">
            <h2
              class="prestige-about-hero-heading tp_fade_anim"
              data-fade-from="bottom"
            >
              We Build With Purpose.<br>
              We Create For Life.
            </h2>
            <p
              class="prestige-about-hero-desc tp_reveal_anim"
              data-delay="0.05"
              data-duration="0.6"
              data-stagger="0.004"
            >
              Prestige One Developments is a Dubai-based real estate developer creating residential
              and commercial spaces shaped around how people live, work, and experience the city.
            </p>

            <prestige-contact-review-actions
              class="tp_fade_anim"
              data-fade-from="bottom"
              data-delay="0.1"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* ---- shared title box - same treatment as prestige-why-us / prestige-upcoming-developments,
   reusing the .prestige-text-paint scroll-reveal wired generically in
   prestige-developments-reveal.ts. ---- */
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
  color: rgba(255, 255, 255, 0.65);
}

.prestige-developments-title-box {
  position: relative;
}

.prestige-developments-title-box::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: min(560px, 90vw);
  height: 320px;
  z-index: -1;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 65% 35%, rgba(120, 210, 255, 0.32), transparent 60%),
    radial-gradient(circle at 32% 68%, rgba(255, 140, 210, 0.24), transparent 60%);
  filter: blur(60px);
  transform: translateX(-50%);
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

/* ---- About Us intro row ---- */

.prestige-about-hero-row {
  margin-top: 60px;
}

.prestige-about-hero-thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #090909;
}

.prestige-about-hero-video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prestige-about-hero-content {
  max-width: 520px;
}

.prestige-about-hero-heading {
  font-size: clamp(22px, 1.9vw, 28px);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.5px;
  color: #fff;
  margin: 0 0 24px;
}

.prestige-about-hero-desc {
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.68);
  margin: 0 0 34px;
}

@media (max-width: 1199.98px) {
  .prestige-about-hero-content {
    max-width: 100%;
  }
}

@media (max-width: 767.98px) {
  .prestige-about-hero-row {
    margin-top: 36px;
  }

  .prestige-about-hero-heading {
    font-size: clamp(22px, 6vw, 25px);
  }
}
</style>
