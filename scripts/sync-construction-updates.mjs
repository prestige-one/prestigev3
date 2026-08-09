import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const oldRoot = "D:/Developments/PrestigeV2-main/PrestigeV2-main/src/components/construction-updates";
const publicRoot = "D:/Developments/intruderfr/prestigev3/public/assets/images/v2/pages/pages-internal-images/constructions";
const outputFile = "D:/Developments/intruderfr/prestigev3/app/data/construction-updates-content.json";

const sources = [
  ["SeasideConstructionUpdatePage.tsx", "seaside-by-prestige-one"],
  ["HiltonConstructionUpdatePage.tsx", "hilton-residences-by-prestige-one"],
  ["ResidenceConstructionUpdatePage.tsx", "the-residence-by-prestige-one"],
  ["LuxuryCanalConstructionUpdatePage.tsx", "luxury-canal-residences-by-prestige-harbour"],
  ["CoastalHavenConstructionUpdatePage.tsx", "coastal-haven-by-prestige-harbour"],
  ["BoluevardConstructionUpdatePage.tsx", "the-boluevard-by-prestige-one"],
  ["ParkwayConstructionUpdatePage.tsx", "parkway-by-prestige-one"],
  ["VistaConstructionUpdatePage.tsx", "vista-by-prestigeone"],
  ["WaterwayConstructionUpdatePage.tsx", "the-waterway-by-prestige-one"],
  ["TheOneConstructionUpdatePage.tsx", "the-one-by-prestige-one"],
  ["GolfResidencesConstructionUpdatePage.tsx", "golf-residences-by-prestige-one"],
];

function extractBalanced(source, start, open = "[", close = "]") {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") { quote = char; continue; }
    if (char === open) depth += 1;
    if (char === close) {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`Unbalanced ${open}${close}`);
}

function extractConstArray(source, namePattern) {
  const match = source.match(new RegExp(`const\\s+${namePattern}[^=]*=\\s*\\[`));
  return match ? extractBalanced(source, match.index + match[0].lastIndexOf("[")) : "[]";
}

function stringValues(source) {
  return [...source.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((match) => JSON.parse(`"${match[1]}"`));
}

function parseGallery(source) {
  const block = extractConstArray(source, "[A-Z_]+GALLERY");
  const galleries = [];
  for (const match of block.matchAll(/month:\s*"([^"]+)"\s*,\s*images:\s*\[/g)) {
    const arrayStart = match.index + match[0].lastIndexOf("[");
    galleries.push({ month: match[1], urls: stringValues(extractBalanced(block, arrayStart)) });
  }
  return galleries;
}

function parseSpecs(source) {
  const block = extractConstArray(source, "TECH_SPEC_COLUMNS");
  return block === "[]" ? [] : stringValues(block);
}

function safeSegment(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function download(url, destination) {
	try {
		if ((await stat(destination)).size > 0) return;
	} catch {
		// Download files that are not present yet.
	}
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
}

const output = {};
let downloaded = 0;
let failed = 0;

for (const [filename, slug] of sources) {
  const source = await readFile(join(oldRoot, filename), "utf8");
  const galleries = parseGallery(source);
  const projectFolder = join(publicRoot, slug);
  await mkdir(projectFolder, { recursive: true });
  output[slug] = { technicalSpecifications: parseSpecs(source), galleries: [] };

  for (const gallery of galleries) {
    const monthFolderName = safeSegment(gallery.month);
    const monthFolder = join(projectFolder, monthFolderName);
    await mkdir(monthFolder, { recursive: true });
    const localImages = [];
    for (let index = 0; index < gallery.urls.length; index += 1) {
      const url = gallery.urls[index];
      let file = decodeURIComponent(basename(new URL(url).pathname));
      if (!/\.(?:webp|jpe?g|png)$/i.test(file)) file = `image-${index + 1}.webp`;
      const destination = join(monthFolder, file);
      try {
        await download(url, destination);
        downloaded += 1;
        localImages.push(`/assets/images/v2/pages/pages-internal-images/constructions/${slug}/${monthFolderName}/${file}`);
      } catch (error) {
        failed += 1;
        console.error(`FAILED ${slug} ${gallery.month}: ${error.message}`);
      }
    }
    if (localImages.length) output[slug].galleries.push({ month: gallery.month, images: localImages });
  }
}

await writeFile(outputFile, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Downloaded ${downloaded} images; ${failed} failed; wrote ${outputFile}`);
