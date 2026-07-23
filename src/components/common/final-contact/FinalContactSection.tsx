"use client";

import React from "react";
import DubaiDestinationsMap from "./DubaiDestinationsMap";
import FinalContactForm from "./FinalContactForm";

const FinalContactSection = () => {
  return (
    <section className="po-final-contact-section">
      <div className="container-fluid px-0">
        <div className="row g-0">

          <div className="col-12 col-lg-12 po-final-contact-right-col">
            <div className="po-final-contact-topbar-wrapper">

              <div className="row g-0">
                <div className="col-12 col-lg-5">
                  <div className="po-final-contact-form-wrap">
                    <FinalContactForm />
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="po-final-contact-map">
                    <DubaiDestinationsMap />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalContactSection;
