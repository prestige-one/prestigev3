import { PROJECTS } from "@/data/projects";

// Flat black for every plane (no brown/orange color moods) with a faint
// neutral-gray blob for subtle depth motion only.
const MOOD_PALETTE = [{ background: "#000000", blob1: "#1a1a1a", blob2: "#0c0c0c" }];

// Shifted consistently toward the left so every plane leaves clear space
// on the right for the fixed-position label card (no overlap).
const X_OFFSETS = [-0.4];

export const galleryPlaneData = PROJECTS.map((project, index) => {
  const mood = MOOD_PALETTE[index % MOOD_PALETTE.length];

  return {
    fallbackColor: "#1a1a1a",
    accentColor: "#ecc80b",
    textureSrc: project.thumbnail,
    position: { x: X_OFFSETS[index % X_OFFSETS.length], y: 0 },
    backgroundColor: mood.background,
    blob1Color: mood.blob1,
    blob2Color: mood.blob2,
    label: {
      title: project.title,
      description: project.description,
      location: project.location,
      status: project.statuses[0] || "",
      href: project.link,
    },
  };
});
