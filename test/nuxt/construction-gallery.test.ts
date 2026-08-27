import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ConstructionUpdateDetail from "../../app/components/prestige/construction-update-detail.vue";
import { getConstructionProject } from "../../app/data/construction-updates";

mockNuxtImport("usePrestigePage", () => () => {});

describe("construction month galleries", () => {
  it.each([
    "fauchon-residences-by-prestige-one",
    "hilton-residences-by-prestige-one",
    "the-boluevard-by-prestige-one",
    "coastal-haven-by-prestige-harbour",
    "luxury-canal-residences-by-prestige-harbour",
    "the-waterway-by-prestige-one",
    "seaside-by-prestige-one",
    "golf-residences-by-prestige-one",
    "parkway-by-prestige-one",
    "the-one-by-prestige-one",
    "vista-by-prestigeone",
    "the-residence-by-prestige-one",
  ])(
    "opens every month and image in %s",
    async (slug) => {
      const project = getConstructionProject(slug)!;
      const wrapper = shallowMount(ConstructionUpdateDetail, {
        props: { project },
        global: { stubs: { NuxtLayout: { template: "<div><slot /></div>" }, teleport: true } },
      });
      try {
        const months = wrapper.findAll(".cu-months button");
        expect(months).toHaveLength(project.galleries.length);
        for (const [monthIndex, gallery] of project.galleries.entries()) {
          await months[monthIndex]!.trigger("click");
          expect(wrapper.find(".cu-lightbox").exists()).toBe(true);
          expect(wrapper.find(".cu-lightbox__head strong").text()).toContain(gallery.month);
          for (const image of gallery.images) {
            expect(wrapper.find(".cu-lightbox__stage > img").attributes("src")).toBe(image);
            await wrapper.find('[aria-label="Next image"]').trigger("click");
          }
          expect(wrapper.find(".cu-lightbox__stage > img").attributes("src")).toBe(gallery.images[0]);
          await wrapper.find('[aria-label="Close gallery"]').trigger("click");
          expect(wrapper.find(".cu-lightbox").exists()).toBe(false);
        }
      } finally {
        wrapper.unmount();
      }
    },
  );
});
