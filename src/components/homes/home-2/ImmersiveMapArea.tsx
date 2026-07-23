"use client";

import "@/components/homes/home/heart-of-locations.css";
import DubaiInteractiveMap from "@/components/maps/DubaiInteractiveMap";

/**
 * home-2-only variant of HeartOfLocationsArea: same heading/stage styling
 * (reuses heart-of-locations.css as-is), but the map itself is the
 * cinematic MapLibre DubaiInteractiveMap instead of the Resimo iframe —
 * kept as a separate component so the real homepage (src/components/homes/home)
 * keeps using the Resimo embed unchanged.
 */
const ImmersiveMapArea = () => {
  return (
    <section className="po-heart-section" aria-labelledby="po-heart-title">
      <div className="container">
        <div className="po-heart-head">
          <h2 id="po-heart-title">Our Footprint Across Dubai</h2>
          <img
            src="/assets/images/v2/pages/slogan.png"
            alt="Prestige One Developments slogan"
            className="po-heart-slogan po-heart-slogan--destinations"
          />
        </div>
      </div>

      <div className="po-heart-stage">
        <div className="po-heart-map po-heart-map--interactive">
          <DubaiInteractiveMap />
        </div>
      </div>
    </section>
  );
};

export default ImmersiveMapArea;
