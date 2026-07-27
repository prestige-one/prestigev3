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
          <label>Phone number*</label>
          <div class="prestige-phone-field">
            <select v-model="selectedCountry" name="phone_country" class="prestige-phone-code">
              <option v-for="country in countries" :key="country.iso2" :value="country.iso2">
                {{ getFlagEmoji(country.iso2) }} {{ country.dial }}
              </option>
            </select>
            <input name="phone" type="tel" class="prestige-phone-number">
          </div>
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
import { countries, getFlagEmoji } from "~/data/countries-data";

const selectedCountry = ref("AE");
</script>

<style scoped>
.prestige-phone-field {
  display: flex;
  gap: 12px;
}

.prestige-phone-code {
  flex: 0 0 auto;
  width: 110px;
  height: 60px;
  padding: 0 10px;
  border-radius: 8px;
  background: #1f1f1f;
  border: 1px solid #484646;
  color: #fff;
  font-size: 16px;
}

.prestige-phone-number {
  flex: 1;
  min-width: 0;
}

@media (max-width: 575.98px) {
  .prestige-phone-field {
    flex-wrap: wrap;
  }

  .prestige-phone-code {
    width: 100%;
  }

  .prestige-phone-number {
    flex-basis: 100%;
  }
}
</style>
