import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { constructionProjects, getConstructionProject, getConstructionProjectForProject, getConstructionProjectsForListing } from "../../app/data/construction-updates";
import { DEVELOPMENT_YEARS } from "../../app/data/development-years";

describe("construction listing order", () => {
  it("pins Hilton first, then follows About Us launch years newest first", () => {
    expect(getConstructionProjectsForListing().map(({ slug }) => slug)).toEqual([
      "hilton-residences-by-prestige-one",
      "fauchon-residences-by-prestige-one",
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
    ]);
  });

  it("keeps every existing construction card and does not mutate either source", () => {
    const catalogueSlugs = constructionProjects.map(({ slug }) => slug);
    const years = JSON.stringify(DEVELOPMENT_YEARS);
    const listing = getConstructionProjectsForListing();
    expect(listing).not.toBe(constructionProjects);
    expect(listing.map(({ slug }) => slug).sort()).toEqual([...catalogueSlugs].sort());
    expect(constructionProjects.map(({ slug }) => slug)).toEqual(catalogueSlugs);
    expect(JSON.stringify(DEVELOPMENT_YEARS)).toBe(years);
  });
});

describe("project construction update links", () => {
  it("links Fauchon to its construction page and existing project", () => {
    const project = getConstructionProjectForProject("fauchon-residences-by-prestige-one");
    expect(project?.slug).toBe("fauchon-residences-by-prestige-one");
    expect(project?.projectUrl).toBe("/projects/fauchon-residences-by-prestige-one");
    expect(project?.locationUrl).toBe("/destinations/jumeirah-garden-city");
    expect(existsSync(resolve("public", project!.hero.slice(1)))).toBe(true);
    expect(existsSync(resolve("public", project!.cardImage!.slice(1)))).toBe(true);
  });

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

describe("construction gallery folder coverage", () => {
  it.each([
    ["fauchon-residences-by-prestige-one", "fauchon"],
    ["hilton-residences-by-prestige-one", "hilton-residences-by-prestige-one"],
    ["the-boluevard-by-prestige-one", "boluevard"],
    ["luxury-canal-residences-by-prestige-harbour", "canal"],
    ["seaside-by-prestige-one", "seaside-by-prestige-one"],
    ["golf-residences-by-prestige-one", "golf-residences-by-prestige-one"],
    ["the-one-by-prestige-one", "one"],
  ])("includes every supplied image exactly once for %s", (slug, folder) => {
    const root = `/assets/images/v2/pages/pages-internal-images/constructions/${folder}`;
    const files = readdirSync(resolve("public", root.slice(1)), { recursive: true, encoding: "utf8" })
      .filter((file) => /\.(webp|jpe?g)$/i.test(file))
      .map((file) => `${root}/${file.replaceAll("\\", "/")}`);
    const images = getConstructionProject(slug)!.galleries.flatMap((gallery) => gallery.images);
    expect(images.length).toBeGreaterThan(0);
    expect([...images].sort()).toEqual(files.sort());
    expect(new Set(images).size).toBe(images.length);
  });

  it("shows every supplied Vista March 2026 image in the newest gallery", () => {
    const root = "/assets/images/v2/pages/pages-internal-images/constructions/vista-by-prestigeone/03-2026";
    const files = readdirSync(resolve("public", root.slice(1)), { encoding: "utf8" })
      .filter((file) => /\.(webp|jpe?g)$/i.test(file))
      .map((file) => `${root}/${file}`);
    const galleries = getConstructionProject("vista-by-prestigeone")!.galleries;
    expect(galleries.filter(({ month }) => month === "March 2026")).toHaveLength(1);
    expect(galleries[0]!.month).toBe("March 2026");
    expect(galleries[0]!.images).toHaveLength(18);
    expect([...galleries[0]!.images].sort()).toEqual(files.sort());
    expect(new Set(galleries[0]!.images).size).toBe(galleries[0]!.images.length);
    expect(galleries[1]!.month).toBe("February 2026");
  });

  it.each([
    { folder: "03-2026", month: "March 2026", count: 15 },
    { folder: "02-2026", month: "February 2026", count: 5 },
  ])("shows every supplied Residence image for $month", ({ folder, month, count }) => {
    const root = `/assets/images/v2/pages/pages-internal-images/constructions/the-residence-by-prestige-one/${folder}`;
    const files = readdirSync(resolve("public", root.slice(1)), { encoding: "utf8" })
      .filter((file) => /\.(webp|jpe?g)$/i.test(file))
      .map((file) => `${root}/${file}`);
    const galleries = getConstructionProject("the-residence-by-prestige-one")!.galleries;
    const matches = galleries.filter((gallery) => gallery.month === month);
    expect(matches).toHaveLength(1);
    const images = matches[0]!.images;
    expect(images).toHaveLength(count);
    expect([...images].sort()).toEqual(files.sort());
    expect(new Set(images).size).toBe(images.length);
    expect(galleries.slice(0, 3).map(({ month }) => month))
      .toEqual(["March 2026", "February 2026", "August 2025"]);
  });

  it("shows the month folders newest first with the correct image counts", () => {
    expect(getConstructionProject("the-one-by-prestige-one")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 3], ["June 2026", 4], ["May 2026", 4], ["April 2026", 3],
        ["February 2026", 6], ["August 2025", 6], ["June 2025", 3]]);
    expect(getConstructionProject("parkway-by-prestige-one")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 5], ["June 2026", 5], ["April 2026", 3], ["February 2026", 4],
        ["August 2025", 4], ["January 2025", 3], ["December 2024", 3]]);
    expect(getConstructionProject("golf-residences-by-prestige-one")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 5], ["June 2026", 4], ["May 2026", 3], ["April 2026", 4],
        ["March 2026", 7], ["February 2026", 5], ["August 2025", 4], ["April 2025", 3]]);
    expect(getConstructionProject("seaside-by-prestige-one")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 5], ["June 2026", 4], ["May 2026", 5], ["April 2026", 6],
        ["March 2026", 4], ["February 2026", 5], ["December 2025", 4], ["September 2025", 5],
        ["August 2025", 5], ["April 2025", 3], ["December 2024", 3]]);
    expect(getConstructionProject("the-waterway-by-prestige-one")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 4], ["June 2026", 4], ["April 2026", 4], ["February 2026", 4],
        ["August 2025", 9], ["June 2025", 3], ["April 2024", 3]]);
    expect(getConstructionProject("luxury-canal-residences-by-prestige-harbour")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 4], ["June 2026", 4], ["May 2026", 4], ["April 2026", 1],
        ["March 2026", 5], ["February 2026", 4], ["August 2025", 5], ["May 2025", 6]]);
    expect(getConstructionProject("hilton-residences-by-prestige-one")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 3], ["June 2026", 2], ["April 2026", 2], ["February 2026", 5]]);
    expect(getConstructionProject("fauchon-residences-by-prestige-one")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["June 2026", 1]]);
    expect(getConstructionProject("the-boluevard-by-prestige-one")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 5], ["June 2026", 4], ["April 2026", 4], ["February 2026", 4],
        ["December 2025", 4], ["September 2025", 5], ["August 2024", 3], ["June 2024", 2]]);
    expect(getConstructionProject("coastal-haven-by-prestige-harbour")!.galleries
      .map(({ month, images }) => [month, images.length]))
      .toEqual([["July 2026", 4], ["June 2026", 6], ["May 2026", 4], ["April 2026", 4],
        ["March 2026", 7], ["February 2026", 4], ["August 2025", 4], ["May 2025", 3], ["Additional updates", 2]]);
  });

  it("includes every supplied Parkway image and preserves both existing galleries", () => {
    const base = "/assets/images/v2/pages/pages-internal-images/constructions";
    const root = `${base}/parkway`;
    const files = readdirSync(resolve("public", root.slice(1)), { recursive: true, encoding: "utf8" })
      .filter((file) => /\.(webp|jpe?g)$/i.test(file))
      .map((file) => `${root}/${file.replaceAll("\\", "/")}`);
    const legacyGalleries = [
      { month: "February 2026", images: [
        "parkway-construction-updates-feb-2026-36-PM.webp",
        "parkway-construction-updates-feb-2026-5.webp",
        "parkway-construction-updates-feb-2026-2.webp",
        "parkway-construction-updates-feb-2026-.webp",
      ].map((file) => `${base}/${file}`) },
      { month: "August 2025", images: [8, 4, 3, 1]
        .map((number) => `${base}/Parkway-Construction-Update-${number}.webp`) },
    ];
    const galleries = getConstructionProject("parkway-by-prestige-one")!.galleries;
    const images = galleries.flatMap(({ images }) => images);
    expect([...images].sort()).toEqual([...files, ...legacyGalleries.flatMap(({ images }) => images)].sort());
    expect(new Set(images).size).toBe(images.length);
    for (const legacy of legacyGalleries) {
      expect(galleries.find(({ month }) => month === legacy.month)).toEqual(legacy);
      for (const image of legacy.images) {
        expect(existsSync(resolve("public", image.slice(1)))).toBe(true);
      }
    }
  });

  it("includes all distinct Waterway photos and preserves the existing August gallery", () => {
    const root = "/assets/images/v2/pages/pages-internal-images/constructions/water";
    const files = readdirSync(resolve("public", root.slice(1)), { recursive: true, encoding: "utf8" })
      .filter((file) => /\.(webp|jpe?g)$/i.test(file))
      .map((file) => `${root}/${file.replaceAll("\\", "/")}`);
    const galleries = getConstructionProject("the-waterway-by-prestige-one")!.galleries;
    const images = galleries.flatMap(({ images }) => images);
    const duplicates = [1, 2].map((number) => `${root}/The-Waterway-Construction-Update-${number}.webp`);
    expect([...images].sort()).toEqual(files.filter((file) => !duplicates.includes(file)).sort());
    const hash = (image: string) => createHash("sha256").update(readFileSync(resolve("public", image.slice(1)))).digest("hex");
    for (const duplicate of duplicates) {
      expect(hash(duplicate)).toBe(hash(duplicate.replace(root, `${root}/08-2025`)));
    }
    expect(new Set(images.map(hash)).size).toBe(images.length);
    expect(galleries.find(({ month }) => month === "August 2025")!.images).toEqual(expect.arrayContaining(
      [12, 3, 6].map((number) => `${root}/The-Waterway-Construction-Update-${number}.webp`),
    ));
  });

  it("includes all distinct Coastal photos, keeping the dated copy of the exact duplicate", () => {
    const root = "/assets/images/v2/pages/pages-internal-images/constructions/coastal";
    const files = readdirSync(resolve("public", root.slice(1)), { recursive: true, encoding: "utf8" })
      .filter((file) => /\.(webp|jpe?g)$/i.test(file))
      .map((file) => `${root}/${file.replaceAll("\\", "/")}`);
    const images = getConstructionProject("coastal-haven-by-prestige-harbour")!.galleries.flatMap(({ images }) => images);
    const duplicate = `${root}/Coastal-Haven-Construction-Update-10-scaled.webp`;
    expect([...images].sort()).toEqual(files.filter((file) => file !== duplicate).sort());
    const hash = (image: string) => createHash("sha256").update(readFileSync(resolve("public", image.slice(1)))).digest("hex");
    expect(hash(duplicate)).toBe(hash(`${root}/08-2025/Coastal-Haven-Construction-Update-10-scaled.webp`));
    expect(new Set(images.map(hash)).size).toBe(images.length);
  });
});
