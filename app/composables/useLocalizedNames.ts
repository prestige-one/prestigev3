import { slugify } from "~/data/projects";

// Locale-aware display names for projects and destinations.
//
// Project/destination names are proper nouns held in the data layer in their
// original (English/brand) form. A localized rendering is stored under
// `pdata.p.<slug>.name` / `ddata.d.<slug>.name` (and `ddata.landmark.<slug>`).
// These are plain, compiler-safe strings (no HTML, no "@", no interpolation
// braces), so they resolve through vue-i18n's normal `t()` with a `te()`
// existence guard - which correctly reads the merged, namespaced group locale
// files. Falls back to the original English name when a key is missing.
// Reactive on locale switch.
export function useLocalizedNames() {
  const { t, te, locale } = useI18n();

  function resolve(key: string, fallback: string): string {
    void locale.value; // reactive dependency on the active locale
    return te(key) ? t(key) : fallback;
  }

  // Localized project name. Accepts a project object ({ slug, title }) or a
  // slug string. Falls back to the English short title (without "by Prestige
  // One").
  function pName(input: string | { slug?: string; title?: string }): string {
    const slug = typeof input === "string" ? input : input.slug ?? "";
    const fallback =
      typeof input === "string"
        ? input
        : input.title?.split(" by ")[0] ?? input.title ?? slug;
    return resolve(`pdata.p.${slug}.name`, fallback);
  }

  // Localized project name resolved from a display title (e.g. a coverflow
  // slide's `title`), slugifying it to find the key.
  function pNameFromTitle(title: string): string {
    return resolve(`pdata.p.${slugify(title)}.name`, title.split(" by ")[0] ?? title);
  }

  // Localized destination name. Accepts a destination object ({ slug, name })
  // or a slug string. Falls back to the English name.
  function dName(input: string | { slug?: string; name?: string }): string {
    const slug = typeof input === "string" ? input : input.slug ?? "";
    const fallback = typeof input === "string" ? input : input.name ?? slug;
    return resolve(`ddata.d.${slug}.name`, fallback);
  }

  // Localized place/landmark name resolved from a display string, slugifying it
  // to look up a shared landmark map, then the destination map, else the
  // original string.
  function placeName(name: string): string {
    const s = slugify(name);
    const lk = `ddata.landmark.${s}`;
    if (te(lk)) return t(lk);
    const dk = `ddata.d.${s}.name`;
    return te(dk) ? t(dk) : name;
  }

  return { pName, pNameFromTitle, dName, placeName };
}
