<template>
  <section id="founders-vision" class="founder-vision-area">
    <div class="container container-1430 founder-vision-container">
      <header class="founder-vision-header">
        <span class="founder-vision-section-title tp_reveal_anim" data-delay="0">
          FOUNDER&rsquo;S VISION
        </span>
        <h2 class="founder-vision-section-subtitle tp_reveal_anim" data-delay="0.05">
          Built on Belief
        </h2>
      </header>

      <div class="founder-vision-grid">
        <figure class="founder-portrait-card">
          <img
            src="/assets/images/v2/pages/mr.ajmal.webp"
            alt="Ajmal Saifi, Founder and CEO of Prestige One Developments"
            loading="lazy"
          >

          <figcaption class="founder-signature-card">
            <strong>Ajmal Saifi</strong>
            <span>Founder &amp; CEO</span>
            <small>Prestige One Developments</small>
          </figcaption>
        </figure>

        <div class="founder-vision-content">
          <h2>Building Dubai's Next Era of Living</h2>

          <div class="founder-vision-copy">
            <p>
              With more than 18 years of experience across Dubai and international real estate markets, Ajmal Saifi has learned to see real estate beyond the building itself.
            </p>
            <p>
              For him, every development begins with a deeper question:
              <strong>what will make this place meaningful to the people who live there &mdash; today, and years from now?</strong>
            </p>
            <p>
              That thinking shaped Prestige One.
            </p>
            <p>
              His approach brings together the right location, thoughtful design, quality execution, and a clear understanding of how people want to live. The goal is not simply to create beautiful homes, but to create places that feel considered, add value to everyday life, and remain relevant over time.
            </p>
            <p>
              As Prestige One continues to grow, Ajmal&rsquo;s vision remains clear:
              <strong>to build with purpose, protect quality, and create a name people trust for what it stands for.</strong>
            </p>
            <blockquote class="founder-vision-quote">
              &ldquo;True prestige is not simply seen. It is felt, lived, and remembered.&rdquo;
            </blockquote>
          </div>

          <div class="founder-achievements" aria-label="Founder achievements">
            <div class="founder-achievement-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 3h8M8 21h8M9 3c0 4 1.3 5.7 3 7 1.7-1.3 3-3 3-7M9 21c0-4 1.3-5.7 3-7 1.7 1.3 3 3 3 7" />
              </svg>
              <strong>18+ Years</strong>
              <span>Global Experience</span>
            </div>

            <div class="founder-achievement-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 21V4h10v17M10 7h1m2 0h1m-4 3h1m2 0h1m-4 3h1m2 0h1m-4 3h1m2 0h1M4 21h16" />
              </svg>
              <strong>Multi-Billion</strong>
              <span>AED Portfolio</span>
            </div>

            <div class="founder-achievement-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m3 9 4-3 4 3-3 3-5-3Zm18 0-4-3-4 3 3 3 5-3ZM8 12l3 3c.6.6 1.4.6 2 0l3-3M6 11l-1 3 5 6h4l5-6-1-3" />
              </svg>
              <strong>Community</strong>
              <span>Driven Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.founder-vision-area {
  position: relative;
  padding: 80px 0 130px;
  overflow: hidden;
  scroll-margin-top: 120px;
  background: #050506;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.founder-vision-area::before {
  position: absolute;
  top: 15%;
  right: -12%;
  width: 620px;
  height: 620px;
  content: "";
  pointer-events: none;
  background: radial-gradient(circle, rgba(128, 157, 177, 0.08), transparent 68%);
  filter: blur(30px);
}

.founder-vision-container {
  position: relative;
  z-index: 1;
}

.founder-vision-header {
  max-width: 760px;
  margin: 0 auto clamp(54px, 7vw, 84px);
  text-align: center;
}

.founder-vision-section-title {
  display: block;
  margin-bottom: 22px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.founder-vision-section-subtitle {
  margin: 0;
  font-size: var(--prestige-about-section-title-size, clamp(25px, 2.3vw, 40px));
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #fff;
  text-align: center;
}

.founder-vision-grid {
  display: grid;
  grid-template-columns: minmax(330px, 0.78fr) minmax(0, 1.32fr);
  gap: 28px;
  align-items: stretch;
}

.founder-portrait-card,
.founder-vision-content {
  min-width: 0;
  margin: 0;
  border: 1px solid rgba(188, 195, 203, 0.58);
  border-radius: 18px;
  background: #0a0b0e;
}

.founder-portrait-card {
  position: relative;
  min-height: 720px;
  padding: 12px;
  overflow: hidden;
}

.founder-portrait-card > img {
  width: 100%;
  height: 100%;
  min-height: 694px;
  object-fit: cover;
  object-position: center;
  border-radius: 13px;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.founder-signature-card {
  position: absolute;
  right: 38px;
  bottom: 38px;
  left: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px 20px 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  background: rgba(7, 8, 11, 0.88);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
}

.founder-signature-card strong {
  font-family: "Brush Script MT", "Segoe Script", cursive !important;
  font-size: clamp(28px, 2.3vw, 38px);
  font-weight: 400;
  line-height: 1;
  color: #fff;
}

.founder-signature-card span {
  margin-top: 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
}

.founder-signature-card small {
  margin-top: 8px;
  font-size: 9px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.founder-vision-content {
  display: flex;
  flex-direction: column;
  padding: clamp(28px, 3.3vw, 46px);
}

.founder-vision-content h2 {
  margin: 0 0 16px;
  font-size: clamp(29px, 2.7vw, 30px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.8px;
  color: #fff;
}

.founder-vision-copy {
  display: grid;
  gap: 17px;
}

.founder-vision-copy p {
  margin: 0;
  font-size: clamp(12px, 0.88vw, 14px);
  line-height: 1.68;
  color: rgba(255, 255, 255, 0.72);
}

.founder-vision-copy strong {
  font-weight: 600;
  color: #fff;
}

.founder-vision-quote {
  position: relative;
  margin: 5px 0 0;
  padding: 18px 22px 18px 27px;
  font-family: var(--tp-ff-clash-medium, inherit);
  font-size: clamp(16px, 1.25vw, 20px);
  font-weight: 500;
  line-height: 1.45;
  color: #fff;
  border-left: 2px solid rgba(183, 209, 224, 0.9);
  background: rgba(255, 255, 255, 0.045);
}

.founder-achievements {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: auto;
  padding-top: 24px;
}

.founder-achievement-card {
  display: flex;
  min-height: 105px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  text-align: center;
  border: 1px solid rgba(188, 195, 203, 0.48);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.055);
  transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
}

.founder-achievement-card svg {
  width: 21px;
  height: 21px;
  margin-bottom: 8px;
  fill: none;
  stroke: #fff;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.founder-achievement-card strong {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
}

.founder-achievement-card span {
  margin-top: 5px;
  font-size: 11px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.58);
}

@media (hover: hover) {
  .founder-portrait-card:hover > img {
    transform: scale(1.025);
  }

  .founder-achievement-card:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.75);
    background: rgba(255, 255, 255, 0.085);
  }
}

@media (max-width: 1199.98px) {
  .founder-vision-grid {
    grid-template-columns: minmax(300px, 0.8fr) minmax(0, 1.2fr);
    gap: 20px;
  }

  .founder-vision-content {
    padding: 30px;
  }

  .founder-vision-copy {
    gap: 13px;
  }

  .founder-vision-copy p {
    font-size: 12px;
    line-height: 1.58;
  }
}

@media (max-width: 991.98px) {
  .founder-vision-grid {
    grid-template-columns: 1fr;
  }

  .founder-portrait-card {
    min-height: min(800px, 110vw);
  }

  .founder-portrait-card > img {
    min-height: min(774px, calc(110vw - 26px));
  }

  .founder-vision-copy p {
    font-size: 14px;
    line-height: 1.68;
  }

  .founder-achievements {
    margin-top: 8px;
  }
}

@media (max-width: 767.98px) {
  .founder-vision-area {
    padding: 80px 0 95px;
  }

  .founder-vision-grid {
    gap: 16px;
  }

  .founder-portrait-card,
  .founder-vision-content {
    border-radius: 14px;
  }

  .founder-portrait-card {
    min-height: 125vw;
    padding: 8px;
  }

  .founder-portrait-card > img {
    min-height: calc(125vw - 18px);
    border-radius: 10px;
  }

  .founder-signature-card {
    right: 22px;
    bottom: 22px;
    left: 22px;
  }

  .founder-vision-content {
    padding: 26px 20px 20px;
  }

  .founder-vision-header {
    margin-bottom: 38px;
  }

  .founder-achievements {
    grid-template-columns: 1fr;
  }

  .founder-achievement-card {
    min-height: 94px;
  }
}
</style>
