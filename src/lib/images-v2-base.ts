/**
 * Local static assets under `public/assets/images/v2/` (served as `/assets/images/v2/...`).
 * Project reels: `project-features-videos/`. Amenity / misc video: `videos/`.
 */
export const IMAGES_V2_BASE_URL = "/assets/images/v2/";

export const PRESTIGEONE_VIDEOS_BASE_URL = "/assets/images/v2/videos/";

export const PRESTIGEONE_PROJECT_FEATURES_VIDEOS_BASE_URL =
  "/assets/images/v2/project-features-videos/";

/** Join a path under `images/v2/` (no leading slash). */
export function v2(relativePath: string): string {
  const p = relativePath.replace(/^\/+/, "").replace(/\/+$/, "");
  return p ? `${IMAGES_V2_BASE_URL}${p}` : IMAGES_V2_BASE_URL.slice(0, -1);
}

/** Join a filename under `images/v2/videos/` (no leading slash). */
export function prestigeoneVideo(filename: string): string {
  const f = filename.replace(/^\/+/, "");
  return `${PRESTIGEONE_VIDEOS_BASE_URL}${f}`;
}

/** Join a filename under `images/v2/project-features-videos/` (no leading slash). */
export function prestigeoneProjectFeatureVideo(filename: string): string {
  const f = filename.replace(/^\/+/, "");
  return `${PRESTIGEONE_PROJECT_FEATURES_VIDEOS_BASE_URL}${f}`;
}
