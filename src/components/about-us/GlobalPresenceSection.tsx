import ScrollAnimate from "@/components/common/ScrollAnimate";
import "@/components/about-us/global-presence.css";

const GlobalPresenceSection = () => {
  return (
    <section className="po-global-presence" aria-labelledby="po-global-presence-title">
      <div className="container">
        <ScrollAnimate as="header" className="po-global-presence__head" delay={100}>
          <p className="po-global-presence__kicker">Global Presence</p>
          <img
            src="/assets/images/v2/pages/slogan.png"
            alt="Prestige One Developments slogan"
            className="po-heart-slogan po-global-presence__slogan"
          />
        </ScrollAnimate>
      </div>

      <ScrollAnimate as="div" className="po-global-presence__map" delay={200}>
        <img
          src="/assets/images/v2/pages/global-present.webp"
          alt="Prestige One's global presence — Dubai headquarters and project locations worldwide"
          className="po-global-presence__map-img"
        />
      </ScrollAnimate>
    </section>
  );
};

export default GlobalPresenceSection;
