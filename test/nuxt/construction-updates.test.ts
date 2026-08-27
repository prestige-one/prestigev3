import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { getConstructionProject, getConstructionProjectForProject } from "../../app/data/construction-updates";

describe("project construction update links", () => {
  it.each([
    ["luxury-canal-residences-by-prestige-harbour", "/assets/project-featured-images/sliders/luxury-canal.webp", "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp"],
    ["vista-by-prestigeone", "/assets/images/v3/project-amenities/vista/gallery/vista-main.webp", "/assets/images/v2/project-featured-images/vista/vista.webp"],
    ["the-one-by-prestige-one", "/assets/images/v3/project-amenities/the-one/gallery/the-one-farcade-full.webp", "/assets/images/v2/project-featured-images/one/the-one.webp"],
  ])("uses the requested listing image without changing the detail hero for %s", (slug, cardImage, hero) => {
    const project = getConstructionProject(slug);
    expect(project?.cardImage).toBe(cardImage);
    expect(existsSync(resolve("public", cardImage.slice(1)))).toBe(true);
    expect(project?.hero).toBe(hero);
  });

  it("matches projects whose project and update slugs align", () => {
    expect(getConstructionProjectForProject("vista-by-prestige-one")?.slug)
      .toBe("vista-by-prestigeone");
  });

  it.each([
    ["coastal-haven-by-prestige-one", "coastal-haven-by-prestige-harbour"],
    ["hilton-residences-dubai-maritime-city", "hilton-residences-by-prestige-one"],
    ["luxury-canal-residences-by-prestige-one", "luxury-canal-residences-by-prestige-harbour"],
  ])("resolves the legacy construction slug for %s", (projectSlug, constructionSlug) => {
    expect(getConstructionProjectForProject(projectSlug)?.slug).toBe(constructionSlug);
  });

  it("returns no direct update for projects without construction content", () => {
    expect(getConstructionProjectForProject("berkeley-square-north")).toBeUndefined();
  });

  it.each([
    "vista-by-prestigeone",
    "the-residence-by-prestige-one",
  ])("shows the handed-over completion label for %s", (constructionSlug) => {
    expect(getConstructionProject(constructionSlug)?.completionDate).toBe("Handed Over 2026");
  });
});
