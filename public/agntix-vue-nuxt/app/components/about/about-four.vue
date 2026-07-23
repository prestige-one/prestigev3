<template>
  <div class="creative-about-area pt-120 pb-100">
    <div class="container container-1580">
        <div class="row">
            <div class="col-xxl-5 col-xl-3">
                <div class="creative-about-title-box">
                    <span class="tp-section-subtitle fs-17 pre-circle">Who we are ?</span>
                </div>
            </div>
            <div class="col-xxl-7 col-xl-9">
                <div class="creative-about-right">
                    <div class="creative-about-text tp_fade_anim">
                        <p>
                            Our design and strategy solutions support social impact businesses, forward-thinking brands, and eco-friendly products guiding consumers toward smarter, more sustainable choices.
                        </p>
                    </div>
                    <div class="creative-about-btn-box d-flex align-items-center">
                        <div class="tp_fade_anim" data-fade-from="top" data-delay=".3" data-ease="bounce">
                            <nuxt-link href="/about-us" class="tp-btn-black btn-green-light-bg mb-20 pr-15">
                                <span class="tp-btn-black-filter-blur">
                                    <svg-btn-blur-filter />
                                </span>
                                <span class="tp-btn-black-filter d-inline-flex align-items-center" style="filter: url(#buttonFilter1)">
                                    <span class="tp-btn-black-text">About Agntix</span>
                                    <span class="tp-btn-black-circle">
                                        <svg-arrow-four/>
                                    </span>
                                </span>
                            </nuxt-link>
                        </div>
                        <div class="tp_fade_anim" data-fade-from="top" data-delay=".5" data-ease="bounce">
                            <nuxt-link href="/team" class="tp-btn-black btn-transparent-bg mb-20">
                                <span class="tp-btn-black-filter-blur">
                                    <svg-btn-blur-filter filter-id='buttonFilter2' />
                                </span>
                                <span class="tp-btn-black-filter d-inline-flex align-items-center" style="filter: url(#buttonFilter2)">
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
</template>

<script setup lang="ts">

</script>