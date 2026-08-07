<template>
  <section class="prestige-whydubai">
    <div class="container container-1430">
      <prestige-section-heading
        class="prestige-whydubai__head"
        :title="$t('hp.whyDubai.eyebrow')"
        :subtitle="$t('hp.whyDubai.title')"
        :description="$t('hp.whyDubai.lead')"
      />

      <div class="prestige-whydubai__grid">
        <article
          v-for="reason in reasons"
          :key="reason.title"
          class="prestige-whydubai__card"
        >
          <figure class="prestige-whydubai__media">
            <img
              class="prestige-whydubai__image"
              :src="reason.image"
              alt=""
              loading="lazy"
              decoding="async"
            >
          </figure>

          <div class="prestige-whydubai__content">
            <span class="prestige-whydubai__icon">
              <prestige-dubai-reason-icon :name="reason.icon" />
            </span>
            <span
              class="prestige-whydubai__stat"
              :class="{ 'prestige-whydubai__stat--compact': reason.compact }"
            >
              {{ reason.stat }}
            </span>
            <p class="prestige-whydubai__text">{{ reason.text }}</p>
            <h3 class="prestige-whydubai__cardtitle">{{ reason.title }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PrestigeDubaiReason {
  stat: string;
  title: string;
  text: string;
  image: string;
  icon: "visa" | "ownership" | "tax" | "protect" | "safe" | "global";
  compact?: boolean;
}

const { locale, t } = useI18n();

const reasonImages = [
  "/assets/images/v3/home/visa.webp",
  "/assets/images/v3/home/ownership.webp",
  "/assets/images/v3/home/tax.webp",
  "/assets/images/v3/home/protect.webp",
  "/assets/images/v3/home/safe.webp",
  "/assets/images/v3/home/global.webp",
] as const;

const reasons = computed<PrestigeDubaiReason[]>(() => {
  if (locale.value === "en") {
    return [
      {
        stat: "Build Your Future in Dubai",
        text: "2-10 Year Golden Visa",
        title: "Long-term residency for you and your family.",
        image: reasonImages[0],
        icon: "visa",
        compact: true,
      },
      {
        stat: "Own Without Limits",
        text: "100% Freehold Ownership",
        title: "Full ownership in Dubai's designated freehold communities.",
        image: reasonImages[1],
        icon: "ownership",
        compact: true,
      },
      {
        stat: "Keep More of What You Earn",
        text: "0% Property Tax",
        title: "No annual property tax on residential real estate.",
        image: reasonImages[2],
        icon: "tax",
        compact: true,
      },
      {
        stat: "Invest with Confidence",
        text: "Government-Regulated Escrow Accounts",
        title: "Your investment is protected every step of the way.",
        image: reasonImages[3],
        icon: "protect",
        compact: true,
      },
      {
        stat: "Live with Peace of Mind",
        text: "#1 Safe & Stable",
        title: "One of the world's safest places to live and invest.",
        image: reasonImages[4],
        icon: "safe",
        compact: true,
      },
      {
        stat: "Stay Connected to the World",
        text: "Global Hub",
        title: "Where business, people, and opportunity come together.",
        image: reasonImages[5],
        icon: "global",
        compact: true,
      },
    ];
  }

  return [
    { stat: "0%", title: t("hp.whyDubai.r1Title"), text: t("hp.whyDubai.r1Text"), image: reasonImages[0], icon: "visa" },
    { stat: "6–8%", title: t("hp.whyDubai.r2Title"), text: t("hp.whyDubai.r2Text"), image: reasonImages[1], icon: "ownership" },
    { stat: "10-Yr", title: t("hp.whyDubai.r3Title"), text: t("hp.whyDubai.r3Text"), image: reasonImages[2], icon: "tax" },
    { stat: "100%", title: t("hp.whyDubai.r6Title"), text: t("hp.whyDubai.r6Text"), image: reasonImages[3], icon: "protect" },
    { stat: "#1", title: t("hp.whyDubai.r4Title"), text: t("hp.whyDubai.r4Text"), image: reasonImages[4], icon: "safe" },
    { stat: "200+", title: t("hp.whyDubai.r7Title"), text: t("hp.whyDubai.r7Text"), image: reasonImages[5], icon: "global" },
  ];
});
</script>

<style scoped>
.prestige-whydubai {
  padding: clamp(92px, 9vw, 130px) 0 clamp(90px, 8vw, 120px);
  background: #0e0e12;
}

.prestige-whydubai__head {
  margin-bottom: clamp(44px, 5vw, 66px);
}

.prestige-whydubai__grid {
  --prestige-whydubai-card-gap: clamp(14px, 1.6vw, 22px);

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: var(--prestige-whydubai-card-gap);
  column-gap: var(--prestige-whydubai-card-gap);
}

.prestige-whydubai__card {
  position: relative;
  display: flex;
  min-width: 0;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  background: linear-gradient(145deg, #18191e 0%, #111216 100%);
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.18);
  transition: border-color 350ms ease, box-shadow 350ms ease, transform 350ms ease;
}

.prestige-whydubai__media {
  position: relative;
  aspect-ratio: 2 / 1;
  margin: 0;
  overflow: hidden;
  background: #0d0e11;
}

.prestige-whydubai__media::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(180deg, transparent 54%, rgba(8, 9, 12, 0.28));
  pointer-events: none;
}

.prestige-whydubai__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.prestige-whydubai__content {
  position: relative;
  display: flex;
  min-height: 165px;
  padding: 34px clamp(22px, 2vw, 28px) 22px;
  flex: 1;
  flex-direction: column;
}

.prestige-whydubai__icon {
  position: absolute;
  top: -26px;
  right: clamp(22px, 2.2vw, 32px);
  display: grid;
  width: 52px;
  height: 52px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50%;
  background: linear-gradient(145deg, #292b31, #141519);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.38), inset 0 1px rgba(255, 255, 255, 0.08);
  place-items: center;
}

.prestige-whydubai__stat {
  display: block;
  margin-bottom: 12px;
  font-family: "Google Sans", sans-serif;
  font-size: clamp(34px, 3.1vw, 48px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.035em;
  color: #fff;
}

.prestige-whydubai__stat--compact {
  font-size: clamp(20px, 6vw, 25px);
  line-height: 1.12;
}

.prestige-whydubai__cardtitle {
  margin: 0;
  font-size: clamp(14px, 1.1vw, 16px);
  font-weight: 500;
  line-height: 1.25;
  color: #ffffffa6;
}

.prestige-whydubai__text {
  margin: 0 0 7px;
  font-size: clamp(15px, 1.35vw, 20px);
  line-height: 1.55;
  color: rgb(255, 255, 255);
}

@media (hover: hover) {
  .prestige-whydubai__card:hover {
    border-color: rgba(255, 255, 255, 0.24);
    box-shadow: 0 30px 66px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  .prestige-whydubai__card:hover .prestige-whydubai__image {
    transform: scale(1.045);
  }
}

@media (max-width: 1199.98px) {
  .prestige-whydubai__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .prestige-whydubai__grid {
    grid-template-columns: 1fr;
  }

  .prestige-whydubai__content {
    min-height: 0;
    padding: 34px 20px 22px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-whydubai__image {
    transition: none;
  }

  .prestige-whydubai__card {
    transition: none;
  }
}
</style>
