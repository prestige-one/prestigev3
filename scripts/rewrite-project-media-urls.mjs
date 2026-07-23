/**
 * One-off: rewrite S3 / WP media URLs in project detail pages to local paths under
 * `public/assets/images/v2/` (served as `/assets/images/v2/...`).
 * Images: `/assets/images/v2/<basename>`
 * Amenity video: `/assets/images/v2/videos/<basename>`
 * Project reels: `/assets/images/v2/project-features-videos/<basename>`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMAGE_BASE = "/assets/images/v2/";
const VIDEO_BASE = "/assets/images/v2/videos/";
const PROJECT_FEATURES_VIDEO_BASE = "/assets/images/v2/project-features-videos/";

/** Basenames under `project-features-videos/` (hero / wide reels). */
const PROJECT_FEATURE_VIDEO_FILES = new Set(
  [
    "Luxury-Canal-Residences-by-Prestige-One.mp4",
    "waterway-by-prestige-one.mp4",
    "Sanctuary-Residential.mp4",
    "Coastal-Haven-by-Prestige-Harbour.mp4",
    "Hilton-Residences-Dubai-Maritime-City.mp4",
    "prestigeone_corporate_video.mp4",
    "Berkeley-Square-North.mp4",
    "Berkeley-Square-South.mp4",
    "compressed-Project-Teaser-Video_The-One.mp4",
    "compressed-Project-Teaser-Video_The-Boulevard.mp4",
    "compressed-Project-Teaser-Video_The-Parkway.mp4",
    "compressed-Project-Teaser-Video_The-Place.mp4",
    "compressed-Project-Teaser-Video_The-Waterway.mp4",
    "compressed-Project-Teaser-Video_The_SEASIDE.mp4",
    "compressed-Project-Teaser-Video_Sanctuary.mp4",
  ].map((f) => f.toLowerCase()),
);

function videoUrlForBasename(file) {
  return PROJECT_FEATURE_VIDEO_FILES.has(file.toLowerCase())
    ? `${PROJECT_FEATURES_VIDEO_BASE}${file}`
    : `${VIDEO_BASE}${file}`;
}

const S3_RE =
  /https:\/\/s3\.me-central-1\.amazonaws\.com\/files\.prestigeone\.ae\/wp-content\/uploads(?:\/[^"'`\s>]+)*\/([^"'`\s?#]+\.(webp|jpg|jpeg|png|mp4|mov))/gi;
const WP_RE =
  /https:\/\/prestigeone\.ae\/wp-content\/uploads(?:\/[^"'`\s>]+)*\/([^"'`\s?#]+\.(webp|jpg|jpeg|png|mp4|mov))/gi;
const OLD_BLOB_VIDEOS =
  /https:\/\/xyrfjwu7qspaj5zr\.public\.blob\.vercel-storage\.com\/prestigeone\/videos\/(?:project-features-videos\/)?([^"'`\s?#]+\.(mp4|mov))/gi;

function rewrite(text) {
  let out = text;
  out = out.replace(S3_RE, (_, file, ext) => {
    const e = String(ext).toLowerCase();
    return e === "mp4" || e === "mov"
      ? videoUrlForBasename(file)
      : `${IMAGE_BASE}${file}`;
  });
  out = out.replace(WP_RE, (_, file, ext) => {
    const e = String(ext).toLowerCase();
    return e === "mp4" || e === "mov"
      ? videoUrlForBasename(file)
      : `${IMAGE_BASE}${file}`;
  });
  out = out.replace(OLD_BLOB_VIDEOS, (_, file) => videoUrlForBasename(file));
  return out;
}

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (name.endsWith("ProjectPage.tsx")) acc.push(p);
  }
  return acc;
}

const projectDir = path.join(ROOT, "src", "components", "projects");
const files = walk(projectDir);
let changed = 0;
for (const f of files) {
  const before = fs.readFileSync(f, "utf8");
  const after = rewrite(before);
  if (after !== before) {
    fs.writeFileSync(f, after, "utf8");
    changed++;
    console.log("updated", path.relative(ROOT, f));
  }
}
console.log("done,", changed, "files");
