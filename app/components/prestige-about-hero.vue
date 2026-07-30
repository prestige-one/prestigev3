<template>
  <section class="prestige-about-hero-area">
    <div class="container container-1430">
      <div class="row justify-content-center">
        <div class="col-xl-7">
          <div class="prestige-about-hero-title-box text-center">
            <h1 class="prestige-about-hero-title tp_reveal_anim">About Us</h1>
            <p class="prestige-about-hero-subtitle">
              Discover our story, values, and the people shaping exceptional living experiences in Dubai and beyond.
            </p>
          </div>
        </div>
      </div>

      <div class="prestige-about-hero-grid">
        <div class="prestige-about-hero-media">
          <video
            class="prestige-about-hero-video"
            src="/assets/videos/company-showcase.mp4"
            autoplay
            muted
            loop
            playsinline
          />
        </div>

        <div class="prestige-about-hero-content">
          <h2 class="prestige-about-hero-heading tp_reveal_anim">Prestige One Developments</h2>
          <img
            class="prestige-about-hero-slogan"
            src="/assets/images/v3/slogan.png"
            alt="The Heart of Every Location"
          >
          <p class="prestige-about-hero-desc">
            Prestige One Developments is a global force in real estate, known for shaping more than just homes, we create immersive living experiences. With a focus on customer needs, community values, and visionary design, we are a leading Dubai-based developer committed to crafting high-end lifestyles for discerning buyers. Each Prestige One project reflects a deep understanding of experiential living, from striking architecture and elegant interiors to carefully curated amenities, all designed to enrich the lives of our residents and the communities they call home.
          </p>

          <div class="prestige-about-hero-actions">
            <NuxtLink to="/#contact" class="prestige-about-hero-btn">Contact Us</NuxtLink>

            <div class="prestige-about-hero-rating">
              <svg-google class="prestige-about-hero-rating-icon" />
              <div class="prestige-about-hero-rating-text">
                <span class="prestige-about-hero-rating-score">
                  4.8/5.0 <span class="prestige-about-hero-rating-star">★</span>
                </span>
                <span class="prestige-about-hero-rating-caption">Based on 500+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.prestige-about-hero-area {
  background-color: #000;
  padding-top: 220px;
  padding-bottom: 90px;
}

.prestige-about-hero-title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  margin: 0 0 20px;
}

.prestige-about-hero-subtitle {
  font-size: clamp(15px, 1.6vw, 17px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 60px;
}

.prestige-about-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 64px;
  align-items: center;
}

/* ---- media (video) ---- */

.prestige-about-hero-media {
  border-radius: 20px;
  overflow: hidden;
}

/* no fixed aspect-ratio / object-fit crop on purpose — the video sizes to
   its own natural aspect ratio at the column's width, so nothing gets
   cropped regardless of its source dimensions. */
.prestige-about-hero-video {
  display: block;
  width: 100%;
  height: auto;
}

/* ---- content ---- */

.prestige-about-hero-heading {
  font-size: clamp(22px, 2.6vw, 32px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #fff;
  margin: 0 0 4px;
}

.prestige-about-hero-slogan {
  display: block;
  width: 220px;
  height: auto;
  margin: 4px 0 22px;
  opacity: 0.85;
}

.prestige-about-hero-desc {
  font-size: 15.5px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 34px;
  max-width: 560px;
}

.prestige-about-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.prestige-about-hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  padding: 0 34px;
  border-radius: 999px;
  background: #fff;
  color: #111;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
}

.prestige-about-hero-rating {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 58px;
  padding: 0 22px;
  border-radius: 999px;
  background: #fff;
}

.prestige-about-hero-rating-icon {
  width: 26px;
  height: 26px;
  flex-shrink: 0;
}

.prestige-about-hero-rating-text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.prestige-about-hero-rating-score {
  font-size: 14.5px;
  font-weight: 700;
  color: #111;
}

.prestige-about-hero-rating-star {
  color: #fbbc05;
}

.prestige-about-hero-rating-caption {
  font-size: 12px;
  color: #6b6b6b;
}

@media (max-width: 991.98px) {
  .prestige-about-hero-area {
    padding-top: 170px;
  }

  .prestige-about-hero-subtitle {
    margin-bottom: 40px;
  }

  .prestige-about-hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .prestige-about-hero-desc {
    max-width: 100%;
  }
}

@media (max-width: 575.98px) {
  .prestige-about-hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .prestige-about-hero-btn,
  .prestige-about-hero-rating {
    width: 100%;
    justify-content: center;
  }
}
</style>
