export interface PrestigeDubaiReason {
  stat: string;
  title: string;
  text: string;
  image: string;
  icon: "visa" | "ownership" | "tax" | "protect" | "safe" | "global";
  compact?: boolean;
}

const PRESTIGE_DUBAI_REASON_IMAGES = [
  "/assets/images/v3/home/v2/Build-Your-Future-md.webp",
  "/assets/images/v3/home/v2/own-by-md.webp",
  "/assets/images/v3/home/v2/Keep-More-of-What-You-Earn-1-md.webp",
  "/assets/images/v3/home/protect.webp",
  "/assets/images/v3/home/v2/Live-with-Peace-of-Mind-md.webp",
  "/assets/images/v3/home/v2/Stay-Connected-6-md.webp",
] as const;

export const PRESTIGE_DUBAI_V2_REASON_IMAGES = [
  "/assets/images/v3/home/v2/Build-Your-Future.webp",
  "/assets/images/v3/home/v2/Own-Without.webp",
  "/assets/images/v3/home/v2/Keep-More.webp",
  "/assets/images/v3/home/v2/Invest.webp",
  "/assets/images/v3/home/v2/Live-with-Peace.webp",
  "/assets/images/v3/home/v2/Stay-Connected.webp",
] as const;

export function usePrestigeWhyDubaiReasons() {
  const { locale, t } = useI18n();

  const reasons = computed<PrestigeDubaiReason[]>(() => {
    if (locale.value === "en") {
      return [
        {
          stat: "Build Your Future in Dubai",
          text: "2-10 Year Golden Visa",
          title: "Long-term residency for you and your family.",
          image: PRESTIGE_DUBAI_REASON_IMAGES[0],
          icon: "visa",
          compact: true,
        },
        {
          stat: "Own Without Limits",
          text: "100% Freehold Ownership",
          title: "Full ownership in Dubai's designated freehold communities.",
          image: PRESTIGE_DUBAI_REASON_IMAGES[1],
          icon: "ownership",
          compact: true,
        },
        {
          stat: "Keep More of What You Earn",
          text: "0% Property Tax",
          title: "No annual property tax on residential real estate.",
          image: PRESTIGE_DUBAI_REASON_IMAGES[2],
          icon: "tax",
          compact: true,
        },
        {
          stat: "Invest with Confidence",
          text: "Government-Regulated Escrow Accounts",
          title: "Your investment is protected every step of the way.",
          image: PRESTIGE_DUBAI_REASON_IMAGES[3],
          icon: "protect",
          compact: true,
        },
        {
          stat: "Live with Peace of Mind",
          text: "#1 Safe & Stable",
          title: "One of the world's safest places to live and invest.",
          image: PRESTIGE_DUBAI_REASON_IMAGES[4],
          icon: "safe",
          compact: true,
        },
        {
          stat: "Stay Connected to the World",
          text: "Global Hub",
          title: "Where business, people, and opportunity come together.",
          image: PRESTIGE_DUBAI_REASON_IMAGES[5],
          icon: "global",
          compact: true,
        },
      ];
    }

    return [
      { stat: "0%", title: t("hp.whyDubai.r1Title"), text: t("hp.whyDubai.r1Text"), image: PRESTIGE_DUBAI_REASON_IMAGES[0], icon: "visa" },
      { stat: "6–8%", title: t("hp.whyDubai.r2Title"), text: t("hp.whyDubai.r2Text"), image: PRESTIGE_DUBAI_REASON_IMAGES[1], icon: "ownership" },
      { stat: "10-Yr", title: t("hp.whyDubai.r3Title"), text: t("hp.whyDubai.r3Text"), image: PRESTIGE_DUBAI_REASON_IMAGES[2], icon: "tax" },
      { stat: "100%", title: t("hp.whyDubai.r6Title"), text: t("hp.whyDubai.r6Text"), image: PRESTIGE_DUBAI_REASON_IMAGES[3], icon: "protect" },
      { stat: "#1", title: t("hp.whyDubai.r4Title"), text: t("hp.whyDubai.r4Text"), image: PRESTIGE_DUBAI_REASON_IMAGES[4], icon: "safe" },
      { stat: "200+", title: t("hp.whyDubai.r7Title"), text: t("hp.whyDubai.r7Text"), image: PRESTIGE_DUBAI_REASON_IMAGES[5], icon: "global" },
    ];
  });

  return { reasons };
}
