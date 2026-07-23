"use client";

import Link from "next/link";
import React, { useCallback, useRef } from "react";
import "@/components/homes/home/about-intro.css";

const ABOUT_VIDEO = "/assets/images/v2/videos/Showcase_Compressed(2).mp4";
const GOOGLE_REVIEWS_URL = "https://g.page/r/CaiDjnU_tlznECE/review";

type AboutAreaProps = {
  showBottomDivider?: boolean;
};

function GoogleGIcon() {
  return (
    <svg className="po-about-reviews__g" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.98 11.98 0 0 0 0 12c0 1.92.46 3.74 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function GoogleStarIcon() {
  return (
    <svg className="po-about-reviews__star" viewBox="0 0 24 24" fill="#fbbc04" aria-hidden="true">
      <path d="M12 2.5l2.9 5.88 6.6.96-4.77 4.65 1.13 6.51L12 17.4l-5.86 3.1 1.13-6.51-4.77-4.65 6.6-.96Z" />
    </svg>
  );
}

function ReviewsBadge() {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="po-about-reviews"
      aria-label="Rated 4.8 out of 5, based on 500+ Google reviews"
    >
      <GoogleGIcon />
      <span className="po-about-reviews__copy">
        <span className="po-about-reviews__rating">
          4.8/5.0
          <GoogleStarIcon />
        </span>
        <span className="po-about-reviews__sub">Based on 500+ Reviews</span>
      </span>
    </a>
  );
}

const AboutArea = ({ showBottomDivider = true }: AboutAreaProps) => {
  const introVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoLoadedMetadata = useCallback(() => {
    const video = introVideoRef.current;
    if (!video) return;
    video.currentTime = 5;
  }, []);

  return (
    <>
      <div className="about-us-wrapper po-about-intro-section" id="our-story">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-stretch po-about-intro-row">
            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail po-about-media">
                <div className="po-about-intro-visual">
                  <div className="po-project-media">
                    <video
                      ref={introVideoRef}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={handleVideoLoadedMetadata}
                    >
                      <source src={ABOUT_VIDEO} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-us-text-content">
                <div className="section-heading">
                  <h2 className="mb-0">PRESTIGE ONE DEVELOPMENTS</h2>
                  <img
                    src="/assets/images/v2/pages/slogan.png"
                    alt="Prestige One Developments slogan"
                    className="po-about-slogan"
                  />
                </div>
                <p className="mb-0">
                  Prestige One Developments is a global force in real estate, known for shaping more than just
                  homes, we create immersive living experiences. With a focus on customer needs, community values,
                  and visionary design, we are a leading Dubai-based developer committed to crafting high-end
                  lifestyles for discerning buyers. Each Prestige One project reflects a deep understanding of
                  experiential living, from striking architecture and elegant interiors to carefully curated
                  amenities, all designed to enrich the lives of our residents and the communities they call home.
                </p>

                <div className="po-about-intro-actions">
                  <Link href="/contact" className="btn po-dual-btn po-dual-btn-light po-about-intro-cta">
                    <span>Contact Us</span>
                    <span>Contact Us</span>
                  </Link>

                  <ReviewsBadge />
                </div>
              </div>
            </div>
          </div>
        </div>

        {showBottomDivider ? <div className="divider"></div> : null}
      </div>
    </>
  );
};

export default AboutArea;
