<template>
  <section id="our-milestones" class="prestige-journey-area pt-40 pb-140">
    <div class="container container-1430">
      <header class="prestige-journey-header">
        <span class="prestige-journey-eyebrow">Our Journey</span>
        <h2 class="prestige-journey-title tp_reveal_anim" data-delay="0.05">
          From Experience to Creation
        </h2>
      </header>

      <ol ref="timelineRef" class="prestige-journey-timeline">
        <span ref="progressLineRef" class="prestige-journey-progress" aria-hidden="true" />
        <li
          v-for="(milestone, index) in milestones"
          :key="milestone.year"
          class="prestige-journey-item tp_fade_anim"
          data-fade-from="bottom"
          data-fade-offset="24"
          :data-delay="index * 0.1"
          data-duration="0.7"
        >
          <div class="prestige-journey-year">
            <prestige-metallic-number :value="milestone.year" />
          </div>
          <div class="prestige-journey-marker" aria-hidden="true">
            <span></span>
          </div>
          <div class="prestige-journey-content">
            <h3>{{ milestone.title }}</h3>
            <p v-if="milestone.description">{{ milestone.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PrestigeJourneyMilestone {
  year: number;
  title: string;
  description?: string;
}

const milestones: PrestigeJourneyMilestone[] = [
  {
    year: 1967,
    title: "A Strong Foundation",
    description: "Prestige Holding Group is established, beginning a business journey built over decades.",
  },
  {
    year: 2007,
    title: "Entering Dubai Real Estate",
    description: "Prestige enters Dubai’s real estate market, beginning a new chapter of investment and growth.",
  },
  {
    year: 2009,
    title: "Expanding Across Dubai",
    description: "Prestige begins expanding its real estate investments across key Dubai communities, building experience and a growing portfolio across the city.",
  },
  {
    year: 2018,
    title: "Investing in What Comes Next",
    description: "Building on years of market experience, Prestige expands into land acquisitions across Dubai freehold communities, opening the way for future development.",
  },
  {
    year: 2022,
    title: "Recognised in Dubai",
    description: "Ajmal Saifi is recognised by Dubai Land Department as one of Dubai’s top property investors.",
  },
  {
    year: 2023,
    title: "From Investment to Development",
    description: "Prestige One enters a new chapter as a developer, turning years of market experience into developments of its own.",
  },
  {
    year: 2024,
    title: "Building Global Connections",
    description: "Prestige One becomes the first regional real estate sponsor of the Argentina National Team.",
  },
  {
    year: 2025,
    title: "Expanding Global Presence",
    description: "Prestige One strengthens its international presence through globally recognised partnerships, with Dubai remaining at the heart of its developments.",
  },
  {
    year: 2026,
    title: "From Vision to Delivery",
    description: "Prestige One reaches a major milestone with project handovers, while continuing to grow through new developments and global partnerships.",
  },
];

const timelineRef = ref<HTMLElement | null>(null);
const progressLineRef = ref<HTMLElement | null>(null);
let cleanupProgressAnimation: (() => void) | undefined;

onMounted(async () => {
  const timeline = timelineRef.value;
  const progressLine = progressLineRef.value;

  if (!timeline || !progressLine) return;

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/all");
  gsap.registerPlugin(ScrollTrigger);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(progressLine, { scaleY: 1 });
    return;
  }

  const progressTween = gsap.fromTo(
    progressLine,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: timeline,
        start: "top 72%",
        end: "bottom 68%",
        scrub: 0.45,
        invalidateOnRefresh: true,
      },
    },
  );

  cleanupProgressAnimation = () => {
    progressTween.scrollTrigger?.kill();
    progressTween.kill();
  };

  ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  cleanupProgressAnimation?.();
});
</script>

<style scoped>
.prestige-journey-area {
  scroll-margin-top: 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.prestige-journey-header {
  max-width: 820px;
  margin: 0 auto clamp(60px, 8vw, 96px);
  text-align: center;
}

.prestige-journey-eyebrow {
  display: block;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.prestige-journey-title {
  margin: 0;
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #fff;
  text-align: center;
}

.prestige-journey-timeline {
  --prestige-journey-year-width: 190px;
  --prestige-journey-marker-width: 42px;
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.prestige-journey-timeline::before {
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: calc(var(--prestige-journey-year-width) + (var(--prestige-journey-marker-width) / 2));
  width: 3px;
  content: "";
  background: rgba(177, 207, 226, 0.13);
  transform: translateX(-1.5px);
}

.prestige-journey-progress {
  position: absolute;
  z-index: 0;
  top: 30px;
  bottom: 30px;
  left: calc(var(--prestige-journey-year-width) + (var(--prestige-journey-marker-width) / 2));
  width: 3px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(116, 157, 184, 0.55),
    rgba(228, 241, 249, 0.95) 12%,
    rgba(137, 178, 205, 0.82) 50%,
    rgba(228, 241, 249, 0.95) 88%,
    rgba(116, 157, 184, 0.55)
  );
  box-shadow: 0 0 15px rgba(143, 194, 224, 0.28);
  transform: translateX(-1.5px) scaleY(0);
  transform-origin: center top;
  will-change: transform;
}

.prestige-journey-item {
  position: relative;
  display: grid;
  grid-template-columns:
    var(--prestige-journey-year-width)
    var(--prestige-journey-marker-width)
    minmax(0, 1fr);
  min-height: 135px;
}

.prestige-journey-year {
  align-self: start;
  padding-right: 15px;
  font-size: clamp(43px, 4.5vw, 58px);
  line-height: 1;
  letter-spacing: -2px;
  text-align: right;
}

.prestige-journey-marker {
  position: relative;
  z-index: 1;
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: center;
}

.prestige-journey-marker span {
  width: 16px;
  height: 16px;
  border: 4px solid rgba(192, 214, 228, 0.28);
  border-radius: 50%;
  background: #c7d8e4;
}

.prestige-journey-content {
  padding: 5px 0 34px 16px;
}

.prestige-journey-content h3 {
  margin: 0;
  font-size: clamp(20px, 2vw, 27px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.3px;
  text-transform: uppercase;
  color: #fff;
}

.prestige-journey-content p {
  max-width: 650px;
  margin: 12px 0 0;
  font-size: clamp(14px, 1.2vw, 16px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.62);
}

@media (max-width: 767.98px) {
  .prestige-journey-area {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .prestige-journey-header {
    margin-bottom: 48px;
  }

  .prestige-journey-timeline {
    --prestige-journey-year-width: 88px;
    --prestige-journey-marker-width: 30px;
  }

  .prestige-journey-timeline::before {
    top: 22px;
    bottom: 22px;
  }

  .prestige-journey-progress {
    top: 22px;
    bottom: 22px;
  }

  .prestige-journey-item {
    min-height: 150px;
  }

  .prestige-journey-year {
    padding-right: 8px;
    font-size: clamp(28px, 8vw, 36px);
    letter-spacing: -1px;
  }

  .prestige-journey-marker {
    height: 38px;
  }

  .prestige-journey-marker span {
    width: 13px;
    height: 13px;
    border-width: 3px;
  }

  .prestige-journey-content {
    padding: 2px 0 30px 12px;
  }

  .prestige-journey-content h3 {
    font-size: 17px;
  }
}
</style>
