<template>
  <div class="project-details-2-area pt-120">
      <div class="container container-1430">
          <div class="row">
              <div class="col-xl-12">
                  <div class="project-details-video p-relative">
                      <video id="video" class="play-video" loop muted autoplay playsinline>
                          <source src="https://html.aqlova.com/videos/liko/liko.mp4" type="video/mp4">
                      </video>
                      <div class="video-progress-btn-wrap">
                          <label id="timer" for="progress"/>
                          <button id="play" class="video_progress_btn" aria-label="Play">&#10073;&#10073;</button>
                          <progress id="progress" max="100" value="0">Progress</progress>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="project-details-video-overlay z-index-9">
          <div class="container">
              <div class="project-details-video-style">
                  <div class="row align-items-start">
                      <div class="col-xl-12">
                          <div class="project-details-1-info-wrap mb-120 flex-wrap d-flex justify-content-between align-items-center">
                              <div class="project-details-1-info">
                                  <span>Client</span>
                                  <h4>AgntixTheme</h4>
                              </div>
                              <div class="project-details-1-info">
                                  <span>Agency</span>
                                  <h4>Leo Burnett, Dubai</h4>
                              </div>
                              <div class="project-details-1-info">
                                  <span>Services</span>
                                  <h4>UI / UX Design</h4>
                              </div>
                              <div class="project-details-1-info">
                                  <span>Production</span>
                                  <h4>Good People</h4>
                              </div>
                              <div class="project-details-1-info">
                                  <span>Date</span>
                                  <h4>October '2025</h4>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-12">
                          <div class="project-details-1-title-box pb-50">
                              <span class="project-details-1-subtitle"><i>01</i>Shooting</span>
                              <h4 class="project-details-1-title">Perspective</h4>
                              <p>Lorem ipsum dolor sit amet consectetur. Ultrices malesuada sed volutpat elit cum. Viverra dolor maecenas amet dui. <br> Netus aliquet nunc netus cras eu eget erat risus. Ipsum ac imperdiet urna nunc. Rutrum lorem integer. Express the human <br> touch and the artisanal approach that are central to the brand and ensure client project will be both totally unique and <br> exceptionally well built. Present the huge selection of styles, </p>
                          </div>
                      </div>
                  </div>
                  <div class="project-details-1-navigation d-flex justify-content-between align-items-center">
                      <a class="project-details-1-prev" href="#">
                          <i class="fa-sharp fa-regular fa-arrow-left"/>
                          <span>Prev</span>
                      </a>
                      <a href="#">
                          <span>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="17" cy="3" r="3" fill="currentcolor" />
                                  <circle cx="3" cy="3" r="3" fill="currentcolor" />
                                  <circle cx="3" cy="17" r="3" fill="currentcolor" />
                                  <circle cx="17" cy="17" r="3" fill="currentcolor" />
                              </svg>
                          </span>
                      </a>
                      <a class="project-details-1-next" href="#">
                          <span>Next</span>
                          <i class="fa-sharp fa-regular fa-arrow-right"/>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>