import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { createI18n } from "vue-i18n";
import DestinationPage from "../../app/pages/destinations/[slug].vue";
import PageHero from "../../app/components/prestige/page-hero.vue";
import FeatureSplit from "../../app/components/prestige/feature-split.vue";
import CtaBand from "../../app/components/prestige/cta-band.vue";
import ProjectCard from "../../app/components/prestige/project-card.vue";
import ProjectSectionHeading from "../../app/components/prestige/project-section-heading.vue";
import englishDestinations from "../../i18n/locales/destinations/en.json";
import { getDestinationPageCopy } from "../../app/data/destination-page-copy";
import { getDestinationBySlug, getProjectsForDestination } from "../../app/data/destinations-data";

const pageState = vi.hoisted(() => ({ slug: "jumeirah-village-circle" }));
mockNuxtImport("useRoute", () => () => ({ params: { slug: pageState.slug } }));
mockNuxtImport("usePrestigePage", () => () => {});
mockNuxtImport("useLocalePath", () => () => (path: string) => path);

const updatedDestinations = [
  "jumeirah-village-circle", "jumeirah-garden-city", "barsha-heights", "majan-city", "dlrc",
  "palm-jumeirah", "meydan-city", "dubai-islands", "dubai-sports-city",
];

describe("PDF destination page copy", () => {
  it.each(updatedDestinations)("renders the matching copy on %s without changing assets or projects", (slug) => {
    pageState.slug = slug;
    const destination = getDestinationBySlug(slug)!;
    const copy = getDestinationPageCopy(slug, "en")!;
    const i18n = createI18n<[typeof englishDestinations], "en", false>({
      legacy: false, locale: "en", messages: { en: englishDestinations },
    });
    const wrapper = shallowMount(DestinationPage, {
      global: {
        plugins: [i18n],
        stubs: { NuxtLayout: { template: "<div><slot /></div>" } },
      },
    });
    try {
      const hero = wrapper.findComponent(PageHero);
      const introKey = `ddata.d.${slug}.intro`;
      const translatedIntro = i18n.global.te(introKey) ? i18n.global.t(introKey) : destination.intro;
      expect(hero.props("title")).toBe(copy.heroTitle ?? destination.name);
      expect(hero.props("lead")).toBe(copy.heroLead ?? translatedIntro ?? destination.intro);
      expect(hero.props("image")).toBe(destination.image);

      const overview = wrapper.findComponent(FeatureSplit);
      expect(overview.props("eyebrow")?.toUpperCase()).toBe(`ABOUT ${destination.name.toUpperCase()}`);
      expect(overview.props("title")).toBe(copy.overviewTitle);
      expect(overview.props("paragraphs")).toEqual(copy.overviewParagraphs);

      const developments = wrapper.findAllComponents(ProjectSectionHeading)
        .find((heading) => heading.classes().includes("prestige-destination-developments__heading"))!;
      expect(developments.props("title")).toBe(`PRESTIGE ONE IN ${destination.name.toUpperCase()}`);
      expect(developments.props("subtitle")).toBe(copy.developments?.subtitle ?? "");
      expect(developments.props("description")).toBe(copy.developments?.description ?? "");

      const cards = wrapper.findAllComponents(ProjectCard);
      expect(cards.map((card) => card.props("project").slug))
        .toEqual(getProjectsForDestination(destination).map((project) => project.slug));
      for (const card of cards) {
        expect(card.props("ctaLabel")).toBe(copy.developments?.cardCtaLabel ?? "");
        expect(card.props("showComingSoon")).toBe(copy.developments?.showComingSoon ?? false);
      }

      const cta = wrapper.findComponent(CtaBand);
      expect(cta.props("title")).toBe(copy.ctaTitle);
      expect(cta.props("text")).toBe(copy.ctaText);
      expect(cta.props("primaryLabel")).toBe("ENQUIRE NOW");
      expect(cta.props("secondaryLabel")).toBe("EXPLORE ALL DESTINATIONS");
      expect(cta.props("primaryTo")).toBe("/contact-us");
      expect(cta.props("secondaryTo")).toBe("/destinations");
    } finally {
      wrapper.unmount();
    }
  });

  it.each(["ar", "de", "es", "fr", "it", "nl", "ru"])("preserves existing %s translations", (locale) => {
    for (const slug of updatedDestinations) expect(getDestinationPageCopy(slug, locale)).toBeUndefined();
  });

  it.each(["dubai-maritime-city", "unknown", "toString"])(
    "does not apply another PDF to %s", (slug) => expect(getDestinationPageCopy(slug, "en")).toBeUndefined(),
  );

  it("preserves the PDF paragraph breaks and title casing", () => {
    const sportsCity = getDestinationPageCopy("dubai-sports-city", "en");
    expect(sportsCity?.heroTitle).toBeUndefined();
    expect(sportsCity?.heroLead).toBeUndefined();
    expect(sportsCity?.overviewParagraphs).toHaveLength(2);
    expect(sportsCity?.ctaText).toBe("Where Active Living Feels at Home.");
    expect(getDestinationPageCopy("dubai-islands", "en")?.ctaTitle).toBe("Dubai Islands");
    expect(getDestinationPageCopy("dubai-islands", "en")?.ctaText).toBe("A Different Side of Island Living.");
    expect(getDestinationPageCopy("jumeirah-garden-city", "en")?.overviewParagraphs).toHaveLength(2);
    expect(getDestinationPageCopy("dlrc", "en")?.overviewParagraphs).toHaveLength(2);
    expect(getDestinationPageCopy("jumeirah-village-circle", "en")?.ctaTitle).toBe("Jumeirah Village Circle");
    expect(getDestinationPageCopy("majan-city", "en")?.developments?.subtitle)
      .toBe("Designed for a Growing Part of Dubai");
  });
});
