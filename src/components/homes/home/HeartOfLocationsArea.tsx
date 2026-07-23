"use client";

import "@/components/homes/home/heart-of-locations.css";

// Same Resimo investments-map embed used on the Virtual Tour page
// (src/components/virtual-tour/index.tsx), reused here in place of the old
// static-image-with-pins map.
const HEART_MAP_IFRAME_SRC =
  "https://investments-map.prod.resimo.io/prestige-one/dubai/?project=D_P10&lang=en&theme=light";
const HEART_MAP_IFRAME_LAZY_SRC =
  "https://investments-map.prod.resimo.io/prestige-one/dubai/?project=D_P10&lang=en&theme=dark";

const HeartOfLocationsArea = () => {
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
          <iframe
            frameBorder={0}
            width="100%"
            height="100%"
            allow="fullscreen"
            allowFullScreen
            className="po-heart-map-iframe"
            data-lazy-src={HEART_MAP_IFRAME_LAZY_SRC}
            src={HEART_MAP_IFRAME_SRC}
            title="Prestige One Dubai footprint map"
          />
        </div>
      </div>
    </section>
  );
};

export default HeartOfLocationsArea;
