<template>
  <section class="prestige-stories pt-80 pb-120">
    <div class="container container-1430">
      <header class="prestige-stories__head">
        <span class="prestige-stories__eyebrow">{{ $t('hp.stories.eyebrow') }}</span>
        <h2 class="prestige-stories__title prestige-text-paint">{{ $t('hp.stories.title') }}</h2>
        <p class="prestige-stories__lead">
          {{ $t('hp.stories.lead') }}
        </p>
      </header>

      <div class="prestige-stories__grid">
        <article v-for="(v, i) in videos" :key="i" class="prestige-stories__card tp_fade_anim" :data-delay="i * 0.08">
          <div class="prestige-stories__media">
            <video
              class="prestige-stories__video"
              playsinline
              preload="metadata"
              :poster="v.poster"
              tabindex="0"
              :aria-label="`${v.name} — play or pause video`"
              @click="toggleVideo"
              @keydown.enter.prevent="toggleVideo"
              @keydown.space.prevent="toggleVideo"
              @play="playingIndex = i"
              @pause="clearPlayingIndex(i)"
              @ended="clearPlayingIndex(i)"
            >
              <source :src="v.video" type="video/mp4">
            </video>
            <span
              v-show="playingIndex !== i"
              class="prestige-stories__play"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M8.25 5.35v13.3L18.5 12 8.25 5.35Z" />
              </svg>
            </span>
          </div>
          <div class="prestige-stories__meta">
            <h3 class="prestige-stories__name">{{ v.name }}</h3>
            <span class="prestige-stories__project">{{ v.project }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const playingIndex = ref<number | null>(null);

const videos = computed(() => [
  { name: t("hp.stories.v1Name"), project: t("hp.stories.v1Project"), video: "/assets/videos/handover-1.mp4", poster: "/assets/images/v3/residence.jpeg" },
  { name: t("hp.stories.v2Name"), project: t("hp.stories.v2Project"), video: "/assets/videos/handover-2.mp4", poster: "/assets/images/v3/vista-1.jpeg" },
  { name: t("hp.stories.v3Name"), project: t("hp.stories.v3Project"), video: "/assets/videos/handover-3.mp4", poster: "/assets/images/v3/vista-2.jpg" },
]);

function toggleVideo(event: MouseEvent | KeyboardEvent) {
  const video = event.currentTarget as HTMLVideoElement | null;
  if (!video) return;

  if (video.paused) {
    void video.play();
  } else {
    video.pause();
  }
}

function clearPlayingIndex(index: number) {
  if (playingIndex.value === index) playingIndex.value = null;
}
</script>

<style scoped>
.prestige-stories__head {
  max-width: 760px;
  margin: 0 auto clamp(44px, 5vw, 66px);
  text-align: center;
}
.prestige-stories__eyebrow {
  display: block;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.5);
}
.prestige-stories__title {
  margin: 0 0 18px;
  font-size: clamp(24px, 2.6vw, 40px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
}
.prestige-stories__lead {
  margin: 0;
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.62);
}
.prestige-stories__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 1.8vw, 26px);
  width: 100%;
}
.prestige-stories__card {
  min-width: 0;
}
.prestige-stories__media {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  overflow: hidden;
  background: #0d0e12;
}
.prestige-stories__play {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: clamp(52px, 4.5vw, 68px);
  height: clamp(52px, 4.5vw, 68px);
  pointer-events: none;
  color: rgba(255, 255, 255, 0.92);
  background: rgba(7, 9, 13, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
  transform: translate(-50%, -50%);
  backdrop-filter: blur(10px);
  place-items: center;
}
.prestige-stories__play svg {
  width: 28%;
  height: 28%;
  margin-left: 5%;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: 1.5;
}
.prestige-stories__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
}
.prestige-stories__meta { padding: 16px 4px 0; text-align: center; }
.prestige-stories__name {
  margin: 0 0 4px;
  font-size: clamp(16px, 1.4vw, 19px);
  font-weight: 500;
  color: #fff;
}
.prestige-stories__project {
  font-size: 12.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 767.98px) {
  .prestige-stories__grid { grid-template-columns: minmax(0, 320px); }
}
</style>
