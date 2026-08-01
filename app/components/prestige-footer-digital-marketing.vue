<template>
  <footer class="prestige-dgm-footer">

    <div class="dgm-footer-bg p-relative">

        <!-- footer area start -->
        <div class="dgm-footer-area pt-100 pb-60">
            <div class="container container-1430">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6 mb-40">
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
                                    <li><nuxt-link to="/broker-registration">Broker Registration</nuxt-link></li>
                                    <li><nuxt-link to="/project-documents">Project Documents</nuxt-link></li>
                                    <li><nuxt-link to="/invest">Invest in Prestige One</nuxt-link></li>
                                    <li><nuxt-link to="/marketing-terms">Marketing Terms &amp; Conditions</nuxt-link></li>
                                    <li><nuxt-link to="/csr">Corporate Social Responsibility</nuxt-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-2 mb-40">
                        <div class="dgm-footer-widget dgm-footer-col-3 tp_fade_anim" data-delay=".5">
                            <h4 class="dgm-footer-widget-title">Media Center</h4>
                            <div class="dgm-footer-widget-menu">
                                <ul>
                                    <li><nuxt-link to="/construction-updates">Construction Updates</nuxt-link></li>
                                    <li><nuxt-link to="/press-release">Press Release</nuxt-link></li>
                                    <li><nuxt-link to="/blog">Blog Posts</nuxt-link></li>
                                    <li><nuxt-link to="/industry-news">Industry News</nuxt-link></li>
                                    <li><nuxt-link to="/media">FAQs</nuxt-link></li>
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
                                <form novalidate @submit.prevent="subscribe">
                                    <input v-model="newsletterEmail" type="email" placeholder="Enter your email">
                                    <span class="input-icon">
                                        <svg-email-one color-name="#A1A4AA" stroke-width="1.5"/>
                                    </span>
                                    <button class="input-button" type="submit" :disabled="newsletterStatus === 'submitting'">
                                        <span>
                                            <svg-plane-one/>
                                        </span>
                                    </button>
                                </form>
                                <p v-if="newsletterMsg" class="prestige-newsletter-msg" :class="`is-${newsletterStatus}`">{{ newsletterMsg }}</p>
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
                                    <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
                                    <li><nuxt-link to="/terms-conditions">Terms and Conditions</nuxt-link></li>
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

<script setup lang="ts">
const newsletterEmail = ref("");
const newsletterStatus = ref<"idle" | "submitting" | "success" | "error">("idle");
const newsletterMsg = ref("");

async function subscribe() {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.value.trim())) {
    newsletterStatus.value = "error";
    newsletterMsg.value = "Please enter a valid email address.";
    return;
  }
  newsletterStatus.value = "submitting";
  newsletterMsg.value = "";
  try {
    const res = await $fetch<{ ok: boolean; message: string }>("/api/newsletter", {
      method: "POST",
      body: { email: newsletterEmail.value },
    });
    newsletterStatus.value = "success";
    newsletterMsg.value = res.message;
    newsletterEmail.value = "";
  } catch {
    newsletterStatus.value = "error";
    newsletterMsg.value = "Something went wrong. Please try again.";
  }
}
</script>

<style scoped>
/* solid black, full-bleed footer - no rounded corners / bottom padding
   left over from the theme's demo styling, which exposed the page's
   default white body background around the edges. */
.prestige-dgm-footer {
  background-color: #000;
  /* faint hairline so the footer doesn't just blend into whatever black
     section sits above it - kept very low-opacity on purpose, not meant
     to read as a hard divider. */
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.prestige-dgm-footer :deep(.dgm-footer-bg) {
  background-color: #000;
  border-radius: 0;
  overflow: visible;
}

/* the theme's own rule (_footer-13.scss, scoped to .dgm-footer-col-2/3/4)
   sets this to var(--tp-ff-onest) at equal (two-class) specificity - nest
   under the footer's own wrapper class so this one wins outright. */
.prestige-dgm-footer .dgm-footer-widget-title {
  font-family: var(--tp-ff-poppins);
  font-weight: 600;
}

/* theme's decorative two-tone side panel - drop it for a flat, uniform
   black footer instead of the lighter-grey accent block. */
.prestige-dgm-footer :deep(.dgm-footer-bg::after) {
  display: none;
}

/* footer-social.vue is a child component rendering the bare <a> icons -
   the theme's own hover state (_footer-2.scss, .dgm-footer-widget-social a)
   is a lime green-yellow (--tp-common-green-regular / #C1ED00); swap it
   for a white pill with dark icons instead. */
.prestige-dgm-footer :deep(.dgm-footer-widget-social a:hover) {
  color: #111013;
  border-color: #fff;
  background-color: #fff;
}

.dgm-footer-col-1 {
  padding-right: 40px;
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
   (.tp-offcanvas-contact a::after) - a ::after that grows from 0 to full
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
     almost to the bottom of the box - sitting the bar right at the edge
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
.prestige-newsletter-msg {
	margin-top: 12px;
	font-size: 13px;
}
.prestige-newsletter-msg.is-success { color: #7ee2a0; }
.prestige-newsletter-msg.is-error { color: #ff9a9a; }
</style>
