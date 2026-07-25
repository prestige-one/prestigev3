<template>
  <footer class="prestige-dgm-footer">

    <div class="dgm-footer-bg p-relative">

        <!-- footer area start -->
        <div class="dgm-footer-area pt-100 pb-60">
            <div class="container container-1430">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-1 z-index-1 tp_fade_anim" data-delay=".3">
                            <div class="dgm-footer-logo mb-15">
                                <nuxt-link href="/">
                                  <img src="/assets/images/v3/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One" width="220">
                                </nuxt-link>
                                <img src="/assets/images/v3/slogan.png" alt="Prestige One" class="prestige-footer-slogan">
                            </div>
                            <ul class="prestige-footer-contact mb-30">
                                <li>
                                    <a href="tel:80077378443">
                                        <span class="prestige-footer-contact-icon"><svg-phone-one /></span>
                                        <span>800 PRESTIGE / 800 77378443</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:enquiries@prestigeone.ae">
                                        <span class="prestige-footer-contact-icon"><svg-email-two /></span>
                                        <span>enquiries@prestigeone.ae</span>
                                    </a>
                                </li>
                                <li>
                                    <div class="prestige-footer-contact-row">
                                        <span class="prestige-footer-contact-icon"><svg-location-one /></span>
                                        <span>Office 1602-1604, Marina Plaza, Dubai Marina, Dubai, UAE.</span>
                                    </div>
                                </li>
                            </ul>
                            <div class="dgm-footer-widget-social">
                                <footer-social/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-2 tp_fade_anim" data-delay=".4">
                            <h4 class="dgm-footer-widget-title">Corporate</h4>
                            <div class="dgm-footer-widget-menu">
                                <ul> 
                                    <li><a href="#">Broker Registration</a></li>
                                    <li><a href="#">Project Documents</a></li>
                                    <li><a href="#">Invest in Prestige One</a></li>
                                    <li><a href="#">Marketing Terms &amp; Conditions</a></li>
                                    <li><a href="#">Corporate Social Responsibility</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-3 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-3 tp_fade_anim" data-delay=".5">
                            <h4 class="dgm-footer-widget-title">Media Center</h4>
                            <div class="dgm-footer-widget-menu">
                                <ul>
                                    <li><a href="#">Construction Updates</a></li>
                                    <li><a href="#">Press Release</a></li>
                                    <li><a href="#">Blog Posts</a></li>
                                    <li><a href="#">Industry News</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-4 z-index-1 tp_fade_anim" data-delay=".6">
                            <h4 class="dgm-footer-widget-title">Newsletter</h4>
                            <div class="dgm-footer-widget-paragraph color-style mb-35">
                                <p>Subscribe our newsletter to get the latest news and updates!</p>
                            </div>
                            <div class="dgm-footer-widget-input p-relative">
                                <form action="#">
                                    <input type="text" placeholder="Enter your email">
                                    <span class="input-icon">
                                        <svg-email-one color-name="#A1A4AA" stroke-width="1.5"/>
                                    </span>
                                    <button class="input-button" type="submit">
                                        <span>
                                            <svg-plane-one/>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer area end -->

        <!-- copyright area start -->
        <div class="tp-copyright-2-area tp-copyright-2-border">
            <div class="container container-1430">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="tp-copyright-2-left text-center text-md-start z-index-1">
                            <p>© {{new Date().getFullYear()}} Prestige One Developments. All Rights Reserved.</p>
                        </div>
                    </div>
                    
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="tp-copyright-2-right">
                            <div class="tp-copyright-2-menu text-md-end text-center">
                                <ul>
                                    <li><a href="#">Privacy Policy </a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- copyright area end -->

    </div>

  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
/* solid black, full-bleed footer — no rounded corners / bottom padding
   left over from the theme's demo styling, which exposed the page's
   default white body background around the edges. */
.prestige-dgm-footer {
  background-color: #000;
}

.prestige-dgm-footer :deep(.dgm-footer-bg) {
  background-color: #000;
  border-radius: 0;
  overflow: visible;
}

/* theme's decorative two-tone side panel — drop it for a flat, uniform
   black footer instead of the lighter-grey accent block. */
.prestige-dgm-footer :deep(.dgm-footer-bg::after) {
  display: none;
}

.prestige-dgm-footer :deep(.dgm-footer-area),
.prestige-dgm-footer :deep(.tp-copyright-2-area) {
  background-color: #000;
}

.prestige-footer-slogan {
  display: block;
  width: 220px;
  height: auto;
  margin-top: 10px;
  opacity: 0.85;
}

.prestige-footer-contact {
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.prestige-footer-contact li > a,
.prestige-footer-contact-row {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #afb2b8;
  font-size: 15px;
  line-height: 1.5;
  transition: color 0.3s;
}

.prestige-footer-contact-row {
  align-items: flex-start;
}

.prestige-footer-contact li > a:hover {
  color: #fff;
}

.prestige-footer-contact-icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #fff;
}

/* same delayed sweep-in underline as the floating sidebar's contact links
   (.tp-offcanvas-contact a::after) — a ::after that grows from 0 to full
   width on hover, instead of an instant text-decoration underline. */
.dgm-footer-widget-menu ul li a {
  position: relative;
  display: inline-block;
}

.dgm-footer-widget-menu ul li a::after {
  content: '';
  position: absolute;
  left: 0;
  /* the link's line-height is 1:1 with its font-size (no extra leading),
     so descenders (the "g" in Registration, "y" in Marketing, etc.) reach
     almost to the bottom of the box — sitting the bar right at the edge
     made it cross those descenders and read as a double line. Pushed
     further down clears them. */
  bottom: -6px;
  width: 0;
  height: 1px;
  background-color: #fff;
  transition: width 0.4s;
}

.dgm-footer-widget-menu ul li a:hover {
  color: #fff;
}

.dgm-footer-widget-menu ul li a:hover::after {
  width: 100%;
}
.dgm-footer-widget-input .input-button span svg {
	color: #FFF;
}
</style>
