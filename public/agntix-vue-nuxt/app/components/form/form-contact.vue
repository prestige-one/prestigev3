<template>
  <form id="contact-form" method="POST">
    <div class="row">
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>Full name*</label>
          <input name="name" type="text">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>Email address*</label>
          <input name="email" type="email">
        </div>
      </div>
      <div class="col-lg-12">
        <div class="tp-contact-form-input mb-20">
          <label>Website link</label>
          <input name="subject" type="text">
        </div>
      </div>
      <div class="col-lg-12">
        <div class="tp-contact-form-input mb-20">
          <label>How Can We Help You*
          </label>
          <textarea name="message" />
        </div>
        <div class="tp-contact-form-btn">
          <button class="w-100" type="submit"><span>
              <span class="text-1">Send Message</span>
              <span class="text-2">Send Message</span>
            </span>
          </button>
          <p class="ajax-response mt-5" />
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">

</script>