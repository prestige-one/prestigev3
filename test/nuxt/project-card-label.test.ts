import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ProjectCard from "../../app/components/prestige/project-card.vue";
import { getAllProjects } from "../../app/data/projects";

mockNuxtImport("useLocalizedNames", () => () => ({
  pName: (project: { title: string }) => project.title,
}));

const project = getAllProjects().find(({ slug }) => slug === "parkway-by-prestige-one")!;
const globalOptions = {
  renderStubDefaultSlot: true,
  stubs: { NuxtLink: { template: "<a><slot /></a>" } },
  mocks: { $t: (key: string) => key === "cta.viewProject" ? "View project" : key },
};

describe("project card CTA labels", () => {
  it("shows Vista Hub as Coming Soon without creating a project link", () => {
    const vistaHub = getAllProjects().find(({ slug }) => slug === "vista-hub-by-prestige-one")!;
    const wrapper = shallowMount(ProjectCard, {
      props: { project: vistaHub, showComingSoon: true },
      global: globalOptions,
    });
    try {
      expect(wrapper.element.tagName).toBe("ARTICLE");
      expect(wrapper.find(".prestige-pcard__status--comingsoon").exists()).toBe(true);
      expect(wrapper.find(".prestige-pcard__cta").exists()).toBe(false);
      expect(wrapper.attributes("href")).toBeUndefined();
    } finally {
      wrapper.unmount();
    }
  });
  it.each([
    [undefined, "View project →"],
    ["Explore Development", "Explore Development →"],
    ["", "View project →"],
  ])("renders %s without changing the project title", (ctaLabel, expected) => {
    const wrapper = shallowMount(ProjectCard, {
      props: { project, ctaLabel },
      global: globalOptions,
    });
    try {
      expect(wrapper.find(".prestige-pcard__cta").text()).toBe(expected);
      expect(wrapper.find("h3").text()).toBe(project.title);
    } finally {
      wrapper.unmount();
    }
  });

  it("keeps projects without a detail page non-clickable", () => {
    const wrapper = shallowMount(ProjectCard, {
      props: { project: { ...project, hasDetailPage: false }, ctaLabel: "Explore Development" },
      global: globalOptions,
    });
    try {
      expect(wrapper.element.tagName).toBe("ARTICLE");
      expect(wrapper.find(".prestige-pcard__cta").exists()).toBe(false);
    } finally {
      wrapper.unmount();
    }
  });
});
