<template>
  <section class="prestige-why-us-area pt-120 pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="prestige-developments-title-box text-center">
            <h2 class="prestige-developments-title prestige-text-paint">
              Why Prestige One
            </h2>
            <p class="prestige-developments-subtitle">
              Built on Strong Principles
            </p>
          </div>
        </div>
      </div>

      <div class="prestige-why-us-rows des-portfolio-wrap">
        <div
          v-for="item in whyUsData"
          :key="item.id"
          class="prestige-why-us-row des-portfolio-panel"
        >
          <div class="row align-items-center gy-4 gx-xl-5">
            <div
              class="col-xl-5"
              :class="item.imagePosition === 'left' ? 'order-xl-2' : 'order-xl-1'"
            >
              <div
                class="prestige-why-us-content"
                :class="{ 'text-align-right': item.imagePosition === 'right' }"
              >
                <span
                  class="prestige-why-us-number tp_fade_anim"
                  data-fade-from="bottom"
                  data-fade-offset="16"
                  data-delay="0"
                  data-duration="0.6"
                >
                  {{ item.number }}
                </span>
                <h3 class="prestige-why-us-title tp_reveal_anim" data-delay="0.1">
                  {{ item.title }}
                </h3>
                <p
                  class="prestige-why-us-desc tp_reveal_anim"
                  data-delay="0.15"
                  data-duration="0.6"
                  data-stagger="0.006"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>

            <div
              class="col-xl-7"
              :class="item.imagePosition === 'left' ? 'order-xl-1' : 'order-xl-2'"
            >
              <div
                class="prestige-why-us-thumb anim-zoomin"
                :class="{ 'prestige-why-us-thumb--map': item.id === 1 }"
              >
                <img :src="item.image" :alt="item.title">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface WhyUsItem {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const whyUsData: WhyUsItem[] = [
  {
    id: 1,
    number: "01",
    title: "Where Opportunity Grows",
    description:
      "We choose well-connected locations that offer great lifestyles and lasting value",
    image: "/assets/images/v3/projects-map.webp",
    imagePosition: "left",
  },
  {
    id: 2,
    number: "02",
    title: "Designed Around Life",
    description:
      "Thoughtful homes that bring comfort, function, and everyday living together",
    image: "/assets/images/v3/Designed-for-Real-Living.webp",
    imagePosition: "right",
  },
  {
    id: 3,
    number: "03",
    title: "Built on Trust",
    description:
      "In-house expertise, careful execution, and quality you can rely on",
    image: "/assets/images/v3/Built-on-Trust.webp",
    imagePosition: "left",
  },
  {
    id: 4,
    number: "04",
    title: "Connected to the World",
    description:
      "Decades of experience, strengthened by partnerships with globally recognized brands",
    image: "/assets/images/v3/A-Global-Perspective.webp",
    imagePosition: "right",
  },
];
</script>

<style scoped>
/* thin separator from the section above (Upcoming Projects) — subtle,
   matching the site's other hairline borders (e.g. footer copyright bar,
   offcanvas contact icons) rather than a hard visual break. */
.prestige-why-us-area {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.prestige-developments-title {
  font-size: clamp(28px, 4.5vw, 35px);
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

/* text-paint reveal — same technique as the hero's 3 sentences: a gradient
   text-clip swept via backgroundPositionX. Driven by a scrub ScrollTrigger
   (see prestige-developments-reveal.ts) so it plays forward on scroll down
   and un-paints in reverse on scroll up, exactly like the hero sentences.
   The scroll trigger and the subtitle zoom are wired generically off these
   same class names, so this section picks them up automatically. */
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

/* ---- Why Choose Prestige One — alternating feature rows ---- */

.prestige-why-us-rows {
  margin-top: 90px;
}

.prestige-why-us-row {
  padding: 60px 0;
  position: relative;
  /* opaque so each row fully occludes the previous one as it scales down
     and slides underneath during the pin+scale "stack" scroll effect
     (portfolioAnimation(), wired for this section in pages/index.vue). */
  background-color: #000;
}

/* pinSpacing is off (see portfolioAnimation()), so the next row's top
   sits flush against this row's bottom with zero scroll runway — it starts
   climbing over the pinned row's content the instant scrolling continues,
   cutting off the image/title reveal before it finishes. This margin adds
   scroll distance between rows so each one's reveal has time to complete
   before the next one arrives. */
.prestige-why-us-row:not(:last-child) {
  margin-bottom: 20vh;
}

.prestige-why-us-content {
  max-width: 480px;
}

.prestige-why-us-content.text-align-right {
  margin-left: auto;
  text-align: right;
}

/* the section number — a small pill so it reads as a step marker rather
   than a decorative numeral, echoing the "01/02/03/04" convention used
   throughout the site's process/step blocks. */
.prestige-why-us-number {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 26px;
  background: linear-gradient(
    90deg,
    rgba(120, 210, 255, 0.14),
    rgba(255, 140, 210, 0.1)
  );
}

.prestige-why-us-title {
  font-size: clamp(24px, 2.6vw, 25px);
  font-weight: 600;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 18px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.prestige-why-us-desc {
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

.prestige-why-us-thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.prestige-why-us-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.prestige-why-us-thumb--map {
  aspect-ratio: 1391 / 800;
  background: #05090d;
}

.prestige-why-us-thumb--map img {
  object-fit: contain;
}

@media (max-width: 1199.98px) {
  .prestige-why-us-content {
    max-width: 100%;
  }

  /* below xl the columns stack vertically, so keep every row left-reading
     — the right-alignment only makes sense while the text sits beside the
     image in a two-column row. */
  .prestige-why-us-content.text-align-right {
    margin-left: 0;
    text-align: left;
  }
}

@media (max-width: 767.98px) {
  .prestige-why-us-rows {
    margin-top: 50px;
  }

  .prestige-why-us-row {
    padding: 36px 0;
  }

  .prestige-why-us-row:not(:last-child) {
    margin-bottom: 8vh;
  }
}
</style>
