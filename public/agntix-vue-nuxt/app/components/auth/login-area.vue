<template>
 <section class="tp-login-area pt-180 pb-140 p-relative z-index-1 fix">
      <div class="container container-1230">
          <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8">
                  <div class="tp-login-wrapper">
                      <div class="tp-login-top text-center mb-30">
                          <h3 class="tp-login-title">Login to Agntix.</h3>
                          <p>Don’t have an account? <span><nuxt-link href="/register">Create a free account</nuxt-link></span></p>
                      </div>
                      <div class="tp-login-option">
                        <!-- auth social login -->
                        <auth-social-login />
                        <!-- auth social login -->
                          <div class="tp-login-mail text-center mb-40">
                              <p>or Sign in with <a href="#">Email</a></p>
                          </div>
                          <div class="tp-login-input-wrapper">
                              <div class="tp-login-input-box">
                                  <div class="tp-login-input-title">
                                      <label for="email">Your Email</label>
                                  </div>
                                  <div class="tp-login-input">
                                      <input id="email" type="email" placeholder="agntix@mail.com">
                                  </div>
                              </div>
                              <div class="tp-login-input-box">
                                  <div class="tp-login-input-title">
                                      <label for="tp_password">Password</label>
                                  </div>
                                  <div class="tp-login-input p-relative">
                                      <input id="tp_password" :type="showPass ? 'text' : 'password'" placeholder="Min. 6 character">
                                      <div id="password-show-toggle" class="tp-login-input-eye" @click="showPass = !showPass">
                                          <span v-if="showPass" id="open-eye" class="open-eye">
                                              <svg-eye-open />
                                          </span>
                                          <span v-if="!showPass" id="close-eye" class="open-close">
                                              <svg-eye-close />
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-30">
                              <div class="tp-login-remeber">
                                  <input id="remeber" type="checkbox">
                                  <label for="remeber">Remember me</label>
                              </div>
                              <div class="tp-login-forgot">
                                  <a href="#">Forgot Password?</a>
                              </div>
                          </div>
                          <div class="tp-login-bottom">
                              <a href="#" class="tp-login-btn w-100">Login</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup lang="ts">
const showPass = ref<boolean>(false);
</script>