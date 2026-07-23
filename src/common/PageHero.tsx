import React from "react";

export type PageHeroProps = {
  /** Small uppercase line above the title (e.g. brand name). */
  kicker?: string;
  /** Main heading — rendered as `h1`. */
  title: string;
  /** Optional supporting copy below the title. */
  description?: string;
  /** Optional id for the `h1` (e.g. `aria-labelledby` on page sections). */
  headingId?: string;
};

/**
 * Shared page hero (same layout as the About Us header: dark band, centered kicker + title + text).
 */
const PageHero = ({ kicker, title, description, headingId }: PageHeroProps) => {
  return (
    <section className="po-projects-hero">
      <div className="container">
        <div className="po-projects-hero-inner text-center">
          {kicker ? <p className="po-projects-kicker">{kicker}</p> : null}
          <h1 id={headingId}>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
