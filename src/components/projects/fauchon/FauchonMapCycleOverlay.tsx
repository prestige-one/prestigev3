"use client";

import "@/components/projects/fauchon/fauchon-map-cycle-overlay.css";

const MAP_BG = "/assets/images/v2/project-featured-images/fauchon/map-no-cycles.webp";
const MAP_POINTER = "/assets/images/v2/project-featured-images/fauchon/pointer.webp";

const MAP_VARS = {
  ["--cx" as string]: "65.5%",
  ["--cy" as string]: "42.8%",
  ["--r" as string]: "40vw",
  ["--r2" as string]: "60vw",
  ["--r3" as string]: "80vw",
  ["--r4" as string]: "100vw",
  ["--opacity1" as string]: "0.1",
  ["--opacity2" as string]: "0.07",
  ["--opacity3" as string]: "0.1",
  ["--opacity4" as string]: "0.06",
  ["--pointer-width" as string]: "6vw",
} as React.CSSProperties;

export default function FauchonMapCycleOverlay() {
  return (
    <div className="fauchon-map-cycles" style={{ ...MAP_VARS, backgroundImage: `url(${MAP_BG})` }}>
      <div className="fauchon-map-wrap">
        <div className="fauchon-map-ring fauchon-map-ring-1 fauchon-map-pulse-1" aria-hidden="true" />
        <div className="fauchon-map-ring fauchon-map-ring-2 fauchon-map-pulse-2" aria-hidden="true" />
        <div className="fauchon-map-ring fauchon-map-ring-3 fauchon-map-pulse-3" aria-hidden="true" />
        <div className="fauchon-map-ring fauchon-map-ring-4 fauchon-map-pulse-4" aria-hidden="true" />
        <img src={MAP_POINTER} alt="" className="fauchon-map-pointer" />
      </div>
    </div>
  );
}
