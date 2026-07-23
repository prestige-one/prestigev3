import { PROJECTS, type Project } from "@/data/projects";

/**
 * A project enriched with an editorial `aspect` ratio so the parallax grid
 * renders staggered, magazine-style card heights (DAMAC-style layout).
 */
export type ParallaxCard = Project & { aspect: string };

/** Square cards so the (mostly landscape) building renders sit fully visible without letterboxing. */
const ASPECT_CYCLE = ["1 / 1"] as const;

/**
 * ============================================================
 * PER-COLUMN SPEED — edit this to change how much FASTER one
 * column moves relative to another (the overall speed for all
 * columns together is PARALLAX_AMPLITUDE_* in
 * ProjectsParallaxGridArea.tsx).
 * ============================================================
 *
 * 1.0 = moves at normal scroll speed. Anything > 1 pushes the column
 * upward, and the bigger the number, the faster/further it travels — e.g.
 * at 4 columns below, column 2 (value 1.85) visibly moves further up than
 * column 1 (value 1.7) for the same amount of scrolling, which is what
 * makes the speed difference between columns visible. Column count 1
 * (mobile) intentionally has no parallax at all.
 *
 * The gap an upward column opens below itself is exactly
 * (modifier - 1) * amplitude, so raising a value here directly makes that
 * column's own gap bigger too — verify against the bottom of the section
 * after any change (see the note on PARALLAX_AMPLITUDE_* for why).
 */
export const MODIFIERS_BY_COUNT: Record<number, number[]> = {
  1: [1],
  2: [1.7, 1.25],
  // Column 1 and 3 have filler tiles (Seascape/Luxe/Palm Villa) giving them
  // spare height to move through without exposing a gap, so they get the
  // bigger deviation. Column 2 has no filler buffer, so its deviation is
  // kept smaller to keep its own (unbuffered) gap small — it's still
  // clearly moving, just not the single fastest by raw distance.
  3: [1.7, 1.25, 1.7],
  // Columns 1 and 3 (index 0/2, "1st and 3rd") move noticeably slower;
  // columns 2 and 4 (index 1/3, "2nd and 4th") keep the fast, "good" speed —
  // columns 2/4 also carry the filler tiles (see FILLER_LAYOUT_BY_COUNT)
  // giving them the extra height buffer their faster travel needs.
  4: [1.25, 1.95, 1.25, 1.95],
};

/**
 * Which filler villa card(s) render at the end of each column, keyed by
 * column count then column index. Every layout below sums to exactly
 * ["seascape", "luxe", "palm"] once, just arranged so each column count's
 * columns come out as close to equal natural height as possible (uneven
 * heights are what caused the empty-gap bug — see ProjectsParallaxGridArea).
 * At 4 columns the 15 base cards split 4/4/4/3 round-robin, so column 3
 * (the short one) gets two fillers instead of one to even it back out.
 */
export const FILLER_LAYOUT_BY_COUNT: Record<number, Record<number, Array<"seascape" | "luxe" | "palm">>> = {
  1: { 0: ["seascape", "luxe", "palm"] },
  2: { 0: ["seascape", "luxe"], 1: ["palm"] },
  3: { 0: ["seascape"], 1: ["luxe"], 2: ["palm"] },
  4: { 0: [], 1: ["palm"], 2: [], 3: ["seascape", "luxe"] },
};

/**
 * Vertical intro offset (in rem) per desktop column. Kept at zero so every
 * column starts flush on the same line when the grid first appears — the
 * scroll-driven parallax (see MODIFIERS_BY_COUNT) is what staggers them
 * afterward, not a static offset.
 */
export const COLUMN_OFFSETS_REM = [0, 0, 0, 0] as const;

/**
 * Fixed row-by-row reading order for the 3-column grid (top-left to
 * bottom-right, one row of 3 at a time). `distributeColumns` fills columns
 * round-robin from this order, so row N, slot 0/1/2 lands in column 0/1/2.
 */
/**
 * "Seascape Villa", "Palm Villa", and "Luxe Villa" are intentionally excluded
 * here — they're rendered directly in place of the slogan / "coming soon"
 * filler tiles (see `ProjectsParallaxGridArea`) instead of taking a
 * round-robin grid slot.
 */
const GRID_ORDER = [
  "Hilton Residences Dubai Maritime City",
  "FAUCHON Résidences by Prestige One",
  "Sanctuary by Prestige One",
  "The One by Prestige One",
  "Berkeley Square South",
  "Berkeley Square North",
  "Golf Residences",
  "Luxury Canal Residences",
  "The Residence by Prestige One",
  "Vista by Prestige One",
  "Parkway by Prestige One",
  "Coastal Haven",
  "The Boulevard",
  "Seaside by Prestige One",
  "The Waterway by Prestige One",
] as const;

function orderedProjects(): Project[] {
  const byTitle = new Map(PROJECTS.map((project) => [project.title, project]));
  const ordered = GRID_ORDER.map((title) => byTitle.get(title)).filter(
    (project): project is Project => Boolean(project),
  );
  // Any project not covered by GRID_ORDER still renders, appended at the end.
  const covered = new Set(ordered.map((project) => project.title));
  const rest = PROJECTS.filter((project) => !covered.has(project.title));
  return [...ordered, ...rest];
}

/** All projects mapped into parallax cards, in the fixed grid order, with staggered aspect ratios. */
export const PARALLAX_CARDS: ParallaxCard[] = orderedProjects().map((project, index) => ({
  ...project,
  aspect: ASPECT_CYCLE[index % ASPECT_CYCLE.length],
}));

/**
 * Distribute cards across `count` columns in round-robin order, preserving
 * `GRID_ORDER` as the top-to-bottom, left-to-right reading order.
 */
export function distributeColumns(cards: ParallaxCard[], count: number): ParallaxCard[][] {
  const safeCount = Math.max(1, count);
  const columns: ParallaxCard[][] = Array.from({ length: safeCount }, () => []);
  cards.forEach((card, index) => {
    columns[index % safeCount].push(card);
  });
  return columns;
}
