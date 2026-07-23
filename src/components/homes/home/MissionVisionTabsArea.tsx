"use client";

import { COMPANY_CONTACT, COMPANY_HOMEPAGE_EMAIL_MAILTO } from "@/data/company-contact";
import { EmailIcon, PhoneIcon } from "@/components/common/ContactActionIcons";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import React, { useMemo, useState } from "react";

type TabKey = "mission" | "vision";

const tabContent: Record<TabKey, { text: string }> = {
  mission: {
    text: "Prestige One Developments is committed to creating innovative and sustainable developments that enhance the quality of life for our clients. By combining superior design, high-quality materials, and exceptional service, we contribute to Dubai's reputation as a global real estate leader.",
  },
  vision: {
    text: "To lead the transformation of real estate by creating iconic, sustainable developments that improve the living experience and inspire communities to 'Live in Prestige'.",
  }
};

const MissionVisionTabsArea = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("mission");
  const content = useMemo(() => tabContent[activeTab], [activeTab]);

  return (
    <section className="po-values-tabs-section">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center po-values-main-row">
          <div className="col-12 col-lg-5">
            <div className="po-values-left-image">
              <img src="/assets/images/v2/pages/pages-internal-images/the-one-1.webp" alt="Prestige One developments" />
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="po-values-content">
              <p className="po-values-kicker">About us</p>
              <h2>Prestige One Developments</h2>
              <img
                src="/assets/images/v2/pages/slogan.png"
                alt="Prestige One Developments slogan"
                className="po-values-slogan"
              />
              <p className="po-values-intro">
                Prestige One Developments stands tall as a global powerhouse in real estate development. Since our inception, we do more than build homes—we craft experiences where luxury intertwines with lifestyle. 
              </p>


              <div className="po-values-tab-buttons" role="tablist" aria-label="Mission vision tabs">
                <button
                  type="button"
                  className={activeTab === "mission" ? "active" : ""}
                  onClick={() => setActiveTab("mission")}
                >Our Mission</button>
                <button
                  type="button"
                  className={activeTab === "vision" ? "active" : ""}
                  onClick={() => setActiveTab("vision")}
                >Our Vision</button>
              </div>

              <div className="row g-3 g-md-4 align-items-end po-values-inner-row">
                <div className="col-12 col-md-12">
                  <p className="po-values-tab-text">{content.text}</p>
                  <div className="po-about-actions-row">
                    <a className="btn po-dual-btn po-dual-btn-dark" href={COMPANY_CONTACT.phoneTel}>
                      <span>
                        <PhoneIcon />
                        Call us
                      </span>
                      <span>{COMPANY_CONTACT.phoneDisplay}</span>
                    </a>
                    <a className="btn po-dual-btn po-dual-btn-light" href={COMPANY_HOMEPAGE_EMAIL_MAILTO}>
                      <span>
                        <EmailIcon />
                        Email us
                      </span>
                      <span>{COMPANY_CONTACT.email}</span>
                    </a>
                    <a
                      className="btn po-dual-btn po-dual-btn-whatsapp"
                      href={COMPANY_CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <WhatsAppIcon width={16} height={16} fill="currentColor" />
                        WhatsApp us
                      </span>
                      <span>{COMPANY_CONTACT.whatsappDisplay}</span>
                    </a>
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

export default MissionVisionTabsArea;
