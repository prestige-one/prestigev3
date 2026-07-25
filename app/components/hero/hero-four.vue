<template>
  <div class="creative-2-hero-wrap pt-180">
    <div class="container container-1610">
      <div class="creative-2-hero-top-wrap mb-60">
        <div class="row align-items-end">
          <div class="col-xl-6">
            <div class="creative-2-hero-title-box">
              <h2 class="creative-2-hero-title">
                Scale y<img
                  class="d-none d-md-inline-block"
                  src="/img/home-04/hero/hero-shape-1.png"
                  alt="hero-shape"
                >ur Business
              </h2>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="creative-2-hero-btn-wrap">
              <div class="row">
                <div class="col-xl-4">
                  <div class="creative-2-hero-text p-relative">
                    <p>
                      An independent web design & <br>
                      branding agency
                    </p>
                    <span class="creative-2-hero-icon">
                      <svg-arrow-long />
                    </span>
                  </div>
                </div>
                <div class="col-xl-8">
                  <div class="creative-2-hero-btn-wrap text-xl-end">
                    <div class="creative-2-hero-btn">
                      <nuxt-link
                        href="/portfolio-details-classic-stack"
                        class="tp-btn-black btn-green-light-bg pb-10 pr-15"
                      >
                        <span class="tp-btn-black-filter-blur">
                          <svg-btn-blur-filter filter-id="buttonFilter3" />
                        </span>
                        <span
                          class="tp-btn-black-filter d-inline-flex align-items-center"
                          style="filter: url(#buttonFilter3)"
                        >
                          <span class="tp-btn-black-text">View our work</span>
                          <span class="tp-btn-black-circle">
                            <svg-arrow-one
                              width="10"
                              height="10"
                              stroke-width="1.5"
                              viewBox="0 0 10 10"
                              path-value="M1 9L9 1M9 1H1M9 1V9"
                            />
                          </span>
                        </span>
                      </nuxt-link>
                      <nuxt-link
                        href="/team"
                        class="tp-btn-black btn-transparent-bg pb-10"
                      >
                        <span class="tp-btn-black-filter-blur">
                          <svg-btn-blur-filter filter-id="buttonFilter11" />
                        </span>
                        <span
                          class="tp-btn-black-filter d-inline-flex align-items-center"
                          style="filter: url(#buttonFilter11)"
                        >
                          <span class="tp-btn-black-text">Meet the team</span>
                          <span class="tp-btn-black-circle">
                            <svg-arrow-four/>
                          </span>
                        </span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="creative-2-hero-banner-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12">
            <div class="creative-hero-banner-wrap">
              <div class="creative-hero-banner">
                <video-player
                  video-url="https://html.aqlova.com/videos/liko/liko.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
