import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { destinations } from "../../app/data/destinations-data";
import { getDestinationDistanceSlides } from "../../app/data/destination-distance-slides";

const sliderRoot = "/assets/images/v3/our-destinations/destination-slider-responsive";
const expectedFolders: Record<string, string> = {
  "barsha-heights": "barsha",
  "dlrc": "dlrc",
  "dubai-islands": "dubai-island",
  // Maritime City intentionally uses the Hilton set, not the older maritime folder.
  "dubai-maritime-city": "hilton",
  "dubai-sports-city": "sport-city",
  "jumeirah-garden-city": "jumeirah-garden-city",
  "jumeirah-village-circle": "jumeirah-village-circle",
  "majan-city": "majan-city",
  "meydan-city": "meydan-city",
  "palm-jumeirah": "palm-jumeirah",
};

describe("destination mobile distance slides", () => {
  it("covers every destination page", () => {
    expect(Object.keys(expectedFolders).sort()).toEqual(destinations.map(({ slug }) => slug).sort());
  });

  it.each(destinations)("uses every image from the correct folder for $slug", ({ slug, name }) => {
    const folder = `${sliderRoot}/${expectedFolders[slug]}`;
    const files = readdirSync(resolve("public", folder.slice(1)))
      .filter((file) => file.endsWith(".webp"));
    const slides = getDestinationDistanceSlides(slug);

    expect(slides.length).toBeGreaterThan(0);
    expect(slides.map(({ image }) => image).sort())
      .toEqual(files.map((file) => `${folder}/${file}`).sort());

    for (const slide of slides) {
      expect(existsSync(resolve("public", slide.image.slice(1)))).toBe(true);
      expect(slide.alt).toContain(`Driving distance from ${name} to `);
    }
  });

  it("does not show another destination's images for an unknown slug", () => {
    expect(getDestinationDistanceSlides("unknown-destination")).toEqual([]);
  });

  it("labels the Dubai Islands landmarks correctly", () => {
    const slides = getDestinationDistanceSlides("dubai-islands");
    expect(slides.find(({ image }) => image.endsWith("dubai-i-marina.webp"))?.alt)
      .toBe("Driving distance from Dubai Islands to Dubai Islands Marina");
    expect(slides.find(({ image }) => image.endsWith("dubai-i-mall.webp"))?.alt)
      .toBe("Driving distance from Dubai Islands to Dubai Islands Mall");
  });
});
