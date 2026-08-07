<template>
  <section class="prestige-stories pt-80 pb-120">
    <div class="container container-1430">
      <prestige-section-heading
        class="prestige-stories__head"
        :title="$t('hp.stories.eyebrow')"
        :subtitle="$t('hp.stories.title')"
      />

      <div class="prestige-stories__grid">
        <article v-for="(v, i) in videos" :key="v.name" class="prestige-stories__card">
          <div class="prestige-stories__media">
            <video
              class="prestige-stories__video"
              playsinline
              preload="none"
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
  { name: t("hp.stories.v1Name"), video: "/assets/videos/story-1.mp4", poster: "/assets/videos/story-1.webp" },
  { name: t("hp.stories.v2Name"), video: "/assets/videos/story-2.mp4", poster: "/assets/videos/story-2.webp" },
  { name: t("hp.stories.v3Name"), video: "/assets/videos/story-3.mp4", poster: "/assets/videos/story-3.webp" },
  { name: t("hp.stories.v4Name"), video: "/assets/videos/story-4.mp4", poster: "/assets/videos/story-4.webp" },
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
  margin-bottom: clamp(44px, 5vw, 66px);
}
.prestige-stories__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0);
  transition: border-color 300ms ease, box-shadow 300ms ease, transform 300ms ease;
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
  background: rgba(7, 9, 13, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
  transform: translate(-50%, -50%);
  transition: background-color 300ms ease, border-color 300ms ease, transform 300ms ease;
  backdrop-filter: blur(1px);
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
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

@media (hover: hover) and (pointer: fine) {
  .prestige-stories__card:hover .prestige-stories__media {
    border-color: rgba(255, 255, 255, 0.24);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
    transform: translateY(-4px);
  }

  .prestige-stories__card:hover .prestige-stories__video {
    transform: scale(1.025);
  }

  .prestige-stories__card:hover .prestige-stories__play {
    background: rgba(7, 9, 13, 0.5);
    border-color: rgba(255, 255, 255, 0.48);
    transform: translate(-50%, -50%) scale(1.06);
  }
}
.prestige-stories__meta { padding: 16px 4px 0; text-align: center; }
.prestige-stories__name {
  margin: 0 0 4px;
  font-size: clamp(16px, 1.4vw, 19px);
  font-weight: 500;
  color: #fff;
}
@media (max-width: 991.98px) {
  .prestige-stories__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 575.98px) {
  .prestige-stories__grid { grid-template-columns: minmax(0, 320px); }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-stories__media,
  .prestige-stories__play,
  .prestige-stories__video {
    transition: none;
  }
}
</style>
