import { describe, expect, it } from "vitest";
import { getConstructionProject, getConstructionProjectForProject } from "../../app/data/construction-updates";

describe("project construction update links", () => {
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
