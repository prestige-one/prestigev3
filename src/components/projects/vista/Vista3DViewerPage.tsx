"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import SiteHeader from "@/layouts/SiteHeader";

const Vista3DScene = dynamic(() => import("@/components/projects/vista/Vista3DScene"), {
  ssr: false,
  loading: () => null,
});

const VISTA_POSTER = "/assets/images/v2/project-featured-images/vista/vista.webp";

export default function Vista3DViewerPage() {
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
    <div className="po-vista-3d-page">
      <SiteHeader />
      <main className="po-vista-3d-main" aria-label="Vista 3D building viewer">
        <div className="po-vista-3d-stage">
          {showLoader ? (
            <div
              className="po-vista-3d-loader"
              role="status"
              aria-live="polite"
              aria-busy="true"
              style={{ backgroundImage: `url(${VISTA_POSTER})` }}
            >
              <div className="po-vista-3d-loader-panel">
                <p className="po-vista-3d-loader-title">Loading 3D model</p>
                <div className="po-vista-3d-loader-bar" aria-hidden="true">
                  <div className="po-vista-3d-loader-bar-fill" style={{ width: `${progress}%` }} />
                </div>
                <p className="po-vista-3d-loader-percent">{progress}%</p>
              </div>
            </div>
          ) : null}

          {error ? (
            <div className="po-vista-3d-error" role="alert">
              <p>Unable to load the 3D model.</p>
              <p className="po-vista-3d-error-detail">{error}</p>
              <Link href="/projects/vista-by-prestige-one" className="po-project-page-btn po-project-page-btn--light">
                Back to Vista
              </Link>
            </div>
          ) : (
            <Vista3DScene
              onLoadProgress={handleProgress}
              onLoadComplete={handleComplete}
              onLoadError={handleError}
            />
          )}
        </div>

        <div className="po-vista-3d-chrome" aria-hidden={!!error}>
          <Link href="/projects/vista-by-prestige-one" className="po-vista-3d-back">
            ← Vista project
          </Link>
          <h1 className="po-vista-3d-title">Explore Vista</h1>
          <p className="po-vista-3d-hint">Drag to rotate · Scroll or pinch to zoom</p>
        </div>
      </main>
    </div>
  );
}
