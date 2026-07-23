"use client";

import "@/components/homes/home/core-values-v2.css";
import { coreValuesV2 } from "@/components/homes/home/coreValuesV2Data";

const CoreValuesAreaV2 = () => {
  return (
    <section className="po-core-v2" aria-labelledby="po-core-v2-heading">
      <div className="po-core-v2-texture" aria-hidden="true" />
      <div className="container po-core-v2-container">
        <header className="po-core-v2-head">
          <p className="po-core-v2-kicker">Our Core Values</p>
          <h2 id="po-core-v2-heading">Built on Trust, Excellence, and Vision</h2>
          <p className="po-core-v2-lead">
            These values guide every decision we make and every project we deliver.
          </p>
        </header>

        <div className="po-core-v2-grid">
          {coreValuesV2.map((value) => (
            <article className="po-core-v2-card" key={value.id}>
              <div className="po-core-v2-card-media">
                <img src={value.image} alt="" loading="lazy" decoding="async" />
                <div className="po-core-v2-card-shade" aria-hidden="true" />
              </div>
              <div className="po-core-v2-card-body">
                <span className="po-core-v2-icon" aria-hidden="true">
                  {typeof value.icon === "string" ? (
                    <span className="material-symbols-outlined">{value.icon}</span>
                  ) : (
                    value.icon
                  )}
                </span>
                <h3>{value.title}</h3>
                <span className="po-core-v2-card-rule" aria-hidden="true" />
                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesAreaV2;
