"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";

const ProjectsDepthGalleryScene = dynamic(
  () => import("@/components/projects/depth-gallery/ProjectsDepthGalleryScene"),
  { ssr: false, loading: () => null }
);

export default function ProjectsDepthGalleryPage() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleProgress = useCallback((value: number) => {
    setProgress(Math.round(Math.min(1, Math.max(0, value)) * 100));
  }, []);

  const handleComplete = useCallback(() => {
    setLoaded(true);
    setProgress(100);
  }, []);

  const handleError = useCallback((message: string) => {
    setError(message);
  }, []);

  const showLoader = !loaded && !error;

  return (
    <div className="po-depth-gallery-page">
      <SiteHeader />
      <main className="po-depth-gallery-main" aria-label="Prestige One projects gallery">
        <div className="po-depth-gallery-frame">
          {showLoader ? (
            <div className="po-depth-gallery-loader" role="status" aria-live="polite" aria-busy="true">
              <div className="po-depth-gallery-loader-panel">
                <p className="po-depth-gallery-loader-title">Loading Projects</p>
                <div className="po-depth-gallery-loader-bar" aria-hidden="true">
                  <div className="po-depth-gallery-loader-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <p className="po-depth-gallery-loader-percent">{progress}%</p>
              </div>
            </div>
          ) : null}

          {error ? (
            <div className="po-depth-gallery-error" role="alert">
              <p>Unable to load the gallery.</p>
              <p className="po-depth-gallery-error-detail">{error}</p>
              <Link href="/projects" className="po-project-page-btn po-project-page-btn--light">
                Back to Projects
              </Link>
            </div>
          ) : (
            <ProjectsDepthGalleryScene
              onLoadProgress={handleProgress}
              onLoadComplete={handleComplete}
              onLoadError={handleError}
            />
          )}
        </div>

        <div className="po-depth-gallery-chrome" aria-hidden={!!error}>
          <Link href="/projects" className="po-depth-gallery-back">
            &larr; All projects
          </Link>
          <h1 className="po-depth-gallery-title">Our Projects</h1>
          <p className="po-depth-gallery-hint">Scroll to move through the gallery</p>
        </div>
      </main>
    </div>
  );
}
