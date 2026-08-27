import constructionContent from "./construction-updates-content.json";
import { getProjectBySlug } from "./projects";
import { DEVELOPMENT_YEARS } from "./development-years";

export interface ConstructionGallery {
  month: string;
  images: string[];
}

export interface ConstructionProject {
  slug: string;
  title: string;
  shortTitle: string;
  projectUrl: string;
  location: string;
  locationUrl: string;
  hero: string;
  cardImage?: string;
  completionDate?: string;
  galleries: ConstructionGallery[];
	technicalSpecifications?: string[];
}

const constructionPath = "/assets/images/v2/pages/pages-internal-images/constructions/";
const images = (...names: string[]) => names.map((name) => constructionPath + name);

const constructionProjectMeta: ConstructionProject[] = [
  {
    slug: "fauchon-residences-by-prestige-one",
    title: "Construction Update: FAUCHON Résidences by Prestige One",
    shortTitle: "FAUCHON Résidences by Prestige One",
    projectUrl: "/projects/fauchon-residences-by-prestige-one",
    location: "Jumeirah Garden City",
    locationUrl: "/destinations/jumeirah-garden-city",
    hero: "/assets/images/v2/project-featured-images/fauchon/fauchon-banner.webp",
    cardImage: "/assets/project-featured-images/sliders/fauchon.webp",
    galleries: [],
  },
  { slug: "seaside-by-prestige-one", title: "Construction Update: Seaside by Prestige One", shortTitle: "Seaside by Prestige One", projectUrl: "/projects/seaside-by-prestige-one", location: "Dubai Islands", locationUrl: "/our-destinations/dubai-islands", hero: "/assets/images/v2/project-featured-images/seaside/seaside-featured-image.webp", galleries: [] },
  { slug: "hilton-residences-by-prestige-one", title: "Construction Update: Hilton Residences by Prestige One", shortTitle: "Hilton Residences by Prestige One", projectUrl: "/projects/hilton-residences-by-prestige-one", location: "Dubai Maritime City", locationUrl: "/our-destinations/dubai-maritime-city", hero: "/assets/images/v2/project-featured-images/hilton/HILTON-NIGHT-VIEW-1.webp", galleries: [{ month: "February 2026", images: images("2K6A3759-HDR-scaled.webp", "2K6A3756-HDR-scaled.webp", "2K6A3762-HDR-scaled.webp", "2K6A3768-HDR-scaled.webp", "2K6A3777-HDR-scaled.webp", "2K6A3780-HDR.webp") }] },
  { slug: "the-residence-by-prestige-one", title: "Construction Update: The Residence by Prestige One", shortTitle: "The Residence by Prestige One", projectUrl: "/projects/the-residence-by-prestige-one", location: "Jumeirah Village Circle", locationUrl: "/our-destinations/jumeirah-village-circle", hero: "/assets/images/v2/project-featured-images/residence/THE-RESIDENCE.webp", completionDate: "Handed Over 2026", galleries: [{ month: "February 2026", images: images("residence-construction-updates-feb-2026-5.webp", "residence-construction-updates-feb-2026-4.webp", "residence-construction-updates-feb-2026-3.webp", "residence-construction-updates-feb-2026-2.webp", "residence-construction-updates-feb-2026-.webp") }] },
  { slug: "luxury-canal-residences-by-prestige-harbour", title: "Construction Update: Luxury Canal Residences by Prestige Harbour", shortTitle: "Luxury Canal Residences", projectUrl: "/projects/luxury-canal-residences-by-prestige-harbour", location: "Dubai Islands", locationUrl: "/our-destinations/dubai-islands", cardImage: "/assets/project-featured-images/sliders/luxury-canal.webp", hero: "/assets/images/v2/project-featured-images/luxury-canal/luxury-canal.webp", galleries: [] },
  { slug: "coastal-haven-by-prestige-harbour", title: "Construction Update: Coastal Haven by Prestige Harbour", shortTitle: "Coastal Haven", projectUrl: "/projects/coastal-haven-by-prestige-harbour", location: "Dubai Islands", locationUrl: "/our-destinations/dubai-islands", hero: "/assets/images/v2/project-featured-images/coastal-haven/Coastal-Haven.webp", galleries: [] },
  { slug: "the-boluevard-by-prestige-one", title: "Construction Update: The Boulevard by Prestige One", shortTitle: "The Boulevard by Prestige One", projectUrl: "/projects/the-boulevard-by-prestige-one", location: "Dubai Land Residence Complex", locationUrl: "/our-destinations/dubai-land-residence-complex", hero: "/assets/images/v2/project-featured-images/boulevard/boulevard.webp", galleries: [] },
  { slug: "parkway-by-prestige-one", title: "Construction Update: Parkway by Prestige One", shortTitle: "Parkway by Prestige One", projectUrl: "/projects/parkway-by-prestige-one", location: "Meydan City", locationUrl: "/destinations/meydan-city", hero: "/assets/images/v2/project-featured-images/parkway/parkway.webp", galleries: [] },
  { slug: "vista-by-prestigeone", title: "Construction Update: Vista by Prestige One", shortTitle: "Vista by Prestige One", projectUrl: "/projects/vista-by-prestige-one", location: "Dubai Sports City", locationUrl: "/our-destinations/dubai-sports-city", cardImage: "/assets/images/v3/project-amenities/vista/gallery/vista-main.webp", hero: "/assets/images/v2/project-featured-images/vista/vista.webp", completionDate: "Handed Over 2026", galleries: [{ month: "February 2026", images: images("vista-construction-updates-feb-2026-2.webp") }] },
  { slug: "the-waterway-by-prestige-one", title: "Construction Update: The Waterway by Prestige One", shortTitle: "The Waterway by Prestige One", projectUrl: "/projects/waterway-by-prestige-one", location: "Meydan City", locationUrl: "/destinations/meydan-city", hero: "/assets/images/v2/project-featured-images/waterway/Waterway-pic-2.webp", galleries: [] },
  { slug: "the-one-by-prestige-one", title: "Construction Update: The One by Prestige One", shortTitle: "The One by Prestige One", projectUrl: "/projects/the-one-by-prestige-one", location: "Barsha Heights", locationUrl: "/our-destinations/barsha-heights", cardImage: "/assets/images/v3/project-amenities/the-one/gallery/the-one-farcade-full.webp", hero: "/assets/images/v2/project-featured-images/one/the-one.webp", galleries: [] },
  { slug: "golf-residences-by-prestige-one", title: "Construction Update: Golf Residences by Prestige One", shortTitle: "Golf Residences by Prestige One", projectUrl: "/projects/golf-residences-by-prestige-one", location: "Dubai Sports City", locationUrl: "/our-destinations/dubai-sports-city", hero: "/assets/images/v2/project-featured-images/golf/The-Place-Banner.webp", galleries: [] },
];

type MigratedContent = Record<string, { galleries: ConstructionGallery[]; technicalSpecifications: string[] }>;
const migratedContent = constructionContent as MigratedContent;
const canonicalProjectSlugs: Record<string, string> = {
	"coastal-haven-by-prestige-harbour": "coastal-haven",
};

export const constructionProjects: ConstructionProject[] = constructionProjectMeta.map((project) => {
	const content = migratedContent[project.slug];
	const canonicalSlug = canonicalProjectSlugs[project.slug];
	const canonicalProject = canonicalSlug ? getProjectBySlug(canonicalSlug) : undefined;
	return {
		...project,
		title: canonicalProject?.title || project.title,
		shortTitle: canonicalProject?.title || project.shortTitle,
		projectUrl: canonicalProject ? `/projects/${canonicalProject.slug}` : project.projectUrl,
		galleries: content?.galleries?.length ? content.galleries : project.galleries,
		technicalSpecifications: content?.technicalSpecifications || [],
	};
});

export function getConstructionProject(slug: string) {
  return constructionProjects.find((project) => project.slug === slug);
}

const constructionSlugByProjectSlug: Readonly<Record<string, string>> = {
  "coastal-haven-by-prestige-one": "coastal-haven-by-prestige-harbour",
  "hilton-residences-dubai-maritime-city": "hilton-residences-by-prestige-one",
  "luxury-canal-residences-by-prestige-one": "luxury-canal-residences-by-prestige-harbour",
};

export function getConstructionProjectForProject(projectSlug: string): ConstructionProject | undefined {
  const projectPath = `/projects/${projectSlug}`;
  return constructionProjects.find((project) => project.projectUrl === projectPath)
    || getConstructionProject(constructionSlugByProjectSlug[projectSlug] ?? "");
}

// Keep the detail catalogue intact; only the listing uses newest-first launch years.
export function getConstructionProjectsForListing(): ConstructionProject[] {
  const ranks = new Map<ConstructionProject, number>();
  for (const block of [...DEVELOPMENT_YEARS].sort((a, b) => Number(b.year) - Number(a.year))) {
    for (const slug of block.projectSlugs) {
      const project = getConstructionProjectForProject(slug);
      if (project && !ranks.has(project)) ranks.set(project, ranks.size);
    }
  }

  // Featured placement requested for construction updates, regardless of launch year.
  const hilton = getConstructionProjectForProject("hilton-residences-dubai-maritime-city");
  if (hilton) ranks.set(hilton, -1);

  return [...constructionProjects].sort((a, b) =>
    (ranks.get(a) ?? Number.MAX_SAFE_INTEGER) - (ranks.get(b) ?? Number.MAX_SAFE_INTEGER),
  );
}
