import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ConstructionUpdateDetail from "../../app/components/prestige/construction-update-detail.vue";
import { constructionProjects, type ConstructionProject } from "../../app/data/construction-updates";

mockNuxtImport("usePrestigePage", () => () => {});

function mountDetail(project: ConstructionProject) {
  return shallowMount(ConstructionUpdateDetail, {
    props: { project },
    global: {
      stubs: { NuxtLayout: { template: "<div><slot /></div>" } },
    },
  });
}

describe("construction technical specifications", () => {
  it.each(constructionProjects.filter((project) => project.technicalSpecifications?.length))(
    "uses a decorative check instead of a number for every item in $slug",
    (project) => {
      const wrapper = mountDetail(project);
      try {
        const cards = wrapper.findAll(".cu-specs__card");
        expect(cards).toHaveLength(project.technicalSpecifications!.length);
        expect(wrapper.find(".cu-specs__number").exists()).toBe(false);
        cards.forEach((card, index) => {
          expect(card.find(".prestige-cu-specs__check").attributes("aria-hidden")).toBe("true");
          expect(card.find(".prestige-cu-specs__check svg").exists()).toBe(true);
          expect(card.find(".prestige-cu-specs__check").text()).toBe("");
          expect(card.find("p").text()).toBe(project.technicalSpecifications![index]);
        });
      } finally {
        wrapper.unmount();
      }
    },
  );

  it("omits the section when there are no specifications", () => {
    const wrapper = mountDetail({ ...constructionProjects[0]!, technicalSpecifications: [] });
    expect(wrapper.find(".cu-specs").exists()).toBe(false);
    wrapper.unmount();
  });
});
