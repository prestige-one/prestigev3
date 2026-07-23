"use client";

import { Suspense, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ListItemCardLink from "@/common/ListItemCardLink";
import ListPageExploreArrow from "@/common/ListPageExploreArrow";
import PageHero from "@/common/PageHero";
import ShimmerImage from "@/components/common/ShimmerImage";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import { PROJECT_LOCATIONS, filterProjects } from "@/data/projects";

const INTRO_COPY =
  "Choose from a collection of landmark developments by Prestige One, bringing together exceptional architecture and refined living.";

const ProjectsPageInner = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeLocation = searchParams.get("location") ?? "All";
  const activeType = searchParams.get("type");
  const activeStatus = searchParams.get("status");

  const locations = useMemo(() => ["All", ...PROJECT_LOCATIONS], []);

  const filteredProjects = useMemo(
    () => filterProjects({ location: activeLocation, type: activeType, status: activeStatus }),
    [activeLocation, activeType, activeStatus],
  );

  const pushFilters = useCallback(
    (next: { location?: string | null; type?: string | null; status?: string | null }) => {
      const params = new URLSearchParams(searchParams.toString());

      const apply = (key: string, value?: string | null) => {
        if (value === undefined) return;
        if (value && value !== "All") params.set(key, value);
        else params.delete(key);
      };

      apply("location", next.location);
      apply("type", next.type);
      apply("status", next.status);

      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const activeChips = useMemo(
    () =>
      [
        activeType ? { key: "type" as const, label: activeType } : null,
        activeStatus ? { key: "status" as const, label: activeStatus } : null,
      ].filter((chip): chip is { key: "type" | "status"; label: string } => chip !== null),
    [activeType, activeStatus],
  );

  return (
    <>
      <SiteHeader />

      <main>
        <PageHero
          kicker="Prestige One Developments"
          title="Our projects"
          description={INTRO_COPY}
          headingId="projects-list-heading"
        />

        <section className="po-list-page po-projects-list-page" aria-labelledby="projects-list-heading">
          <div className="container po-projects-gallery-cta-wrap">
            <Link href="/projects/gallery" className="po-projects-gallery-cta">
              <i className="fa-solid fa-panorama" aria-hidden="true" />
              <span>Explore all projects in an immersive scroll gallery</span>
              <ListPageExploreArrow />
            </Link>
          </div>

          <div className="container po-projects-list-filters">
            <div className="po-projects-filter-wrap po-list-page-filter-wrap">
              {locations.map((location) => (
                <button
                  key={location}
                  type="button"
                  className={`po-project-filter-btn ${activeLocation === location ? "is-active" : ""}`}
                  onClick={() => pushFilters({ location })}
                >
                  {location}
                </button>
              ))}
            </div>

            {activeChips.length > 0 ? (
              <div className="po-projects-active-filters" aria-label="Active filters">
                {activeChips.map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    className="po-projects-active-chip"
                    onClick={() => pushFilters({ [chip.key]: null })}
                  >
                    <span>{chip.label}</span>
                    <i className="fa-solid fa-xmark" aria-hidden="true" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="po-list-page-cards-shell" aria-label="Project listings">
            <div className="container">
              {filteredProjects.length === 0 ? (
                <p className="po-projects-empty">No projects match the selected filters.</p>
              ) : (
                <div className="po-list-page-grid list-page-grid">
                  {filteredProjects.map((project) => (
                    <ListItemCardLink
                      key={project.title}
                      href={project.link}
                      className="po-list-item-card item-card"
                    >
                      <ShimmerImage src={project.thumbnail} alt={project.title} className="po-list-item-media item-card-image">
                        <span className="po-list-item-tag">{project.location}</span>
                      </ShimmerImage>
                      <div className="po-list-item-body item-card-content">
                        <h3 className="po-list-item-title">{project.title}</h3>
                        <p className="po-list-item-desc">{project.description}</p>
                        <span className="po-list-item-btn">
                          <span>Explore more</span>
                          <ListPageExploreArrow />
                        </span>
                      </div>
                    </ListItemCardLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooterBlock />
    </>
  );
};

const ProjectsPage = () => (
  <Suspense fallback={null}>
    <ProjectsPageInner />
  </Suspense>
);

export default ProjectsPage;
