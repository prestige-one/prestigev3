"use client";

import { usePathname } from "next/navigation";
import HeaderOne from "@/layouts/headers/HeaderOne";

/** Entire subtree: light hero below header (dark nav + dark logo at scroll top). */
const LIGHT_HERO_ROUTE_PREFIXES = ["/construction-updates"] as const;
/** Only the detail pages under these prefixes keep a light hero; the listing page itself has a dark hero. */
const LIGHT_HERO_SUBROUTE_ONLY_PREFIXES = ["/blogs"] as const;

function routeNeedsLightTopNav(pathname: string | null): boolean {
  if (!pathname) return false;
  /* News article pages use the same light hero shell as blog posts; the /news listing uses a dark band. */
  if (pathname.startsWith("/news/") && pathname.length > "/news/".length) return true;
  if (LIGHT_HERO_SUBROUTE_ONLY_PREFIXES.some((prefix) => pathname.startsWith(`${prefix}/`))) return true;
  return LIGHT_HERO_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export type SiteHeaderProps = {
  style_2?: boolean;
};

/**
 * Single entry for the site header. Applies route-aware options (e.g. dark nav on a light hero at scroll top)
 * while keeping scroll behavior and OffCanvas identical everywhere.
 */
export default function SiteHeader({ style_2 }: SiteHeaderProps) {
  const pathname = usePathname();
  const onLightSurface = routeNeedsLightTopNav(pathname);

  return <HeaderOne style_2={style_2} onLightSurface={onLightSurface} />;
}
