<template>
  <form id="contact-form" method="POST" class="prestige-contact-form">
    <div class="prestige-contact-form-field">
      <label>Full name</label>
      <div class="prestige-contact-form-input-wrap">
        <input name="name" type="text" placeholder="Enter your full name">
        <span class="prestige-contact-form-input-icon">
          <svg-account-user />
        </span>
      </div>
    </div>

    <div class="prestige-contact-form-field">
      <label>Email address</label>
      <div class="prestige-contact-form-input-wrap">
        <input name="email" type="email" placeholder="Enter your email address">
        <span class="prestige-contact-form-input-icon">
          <svg-email-two />
        </span>
      </div>
    </div>

    <div class="prestige-contact-form-field">
      <label>Phone number</label>
      <div class="prestige-phone-field">
        <div class="prestige-phone-code-wrap">
          <select v-model="selectedCountry" name="phone_country" class="prestige-phone-code">
            <option v-for="country in countries" :key="country.iso2" :value="country.iso2">
              {{ getFlagEmoji(country.iso2) }} {{ country.dial }}
            </option>
          </select>
          <span class="prestige-phone-code-chevron">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </div>
        <div class="prestige-contact-form-input-wrap prestige-phone-number-wrap">
          <input name="phone" type="tel" placeholder="Enter your phone number" class="prestige-phone-number">
          <span class="prestige-contact-form-input-icon">
            <svg-phone-two />
          </span>
        </div>
      </div>
    </div>

    <div class="prestige-contact-form-field">
      <label>How Can We Help You?</label>
      <div class="prestige-contact-form-input-wrap">
        <textarea name="message" placeholder="Tell us more about your inquiry" />
        <span class="prestige-contact-form-input-icon prestige-contact-form-input-icon-textarea">
          <svg-pencil-one />
        </span>
      </div>
    </div>

    <button class="prestige-contact-form-submit" type="submit">
      <span>Send Message</span>
      <span class="prestige-contact-form-submit-arrow">
        <svg-arrow-right />
      </span>
    </button>
    <p class="ajax-response mt-5" />
  </form>
</template>

<script setup lang="ts">
import { countries, getFlagEmoji } from "~/data/countries-data";

const selectedCountry = ref("AE");
</script>

<style scoped>
.prestige-contact-form-field {
  margin-bottom: 16px;
}

.prestige-contact-form-field label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 7px;
  text-align: left;
}
.prestige-contact-form-input-wrap {
  position: relative;
}

.prestige-contact-form-input-wrap input,
.prestige-contact-form-input-wrap textarea {
  width: 100%;
  height: 44px;
  padding: 0 40px 0 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 13.5px;
}

.prestige-contact-form-input-wrap input::placeholder,
.prestige-contact-form-input-wrap textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.prestige-contact-form-input-wrap input:focus,
.prestige-contact-form-input-wrap textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(120, 210, 255, 0.6);
}

.prestige-contact-form-input-wrap textarea {
  height: 84px;
  padding-top: 12px;
  padding-bottom: 12px;
  resize: none;
}

.prestige-contact-form-input-icon {
  position: absolute;
  top: 22px;
  right: 15px;
  transform: translateY(-50%);
  display: flex;
  color: rgba(255, 255, 255, 0.55);
  pointer-events: none;
}

.prestige-contact-form-input-icon-textarea {
  top: auto;
  bottom: 14px;
  transform: none;
}

/* ---- phone field ---- */

.prestige-phone-field {
  display: flex;
  gap: 12px;
}

.prestige-phone-code-wrap {
  position: relative;
  flex: 0 0 auto;
}

.prestige-phone-code {
  appearance: none;
  -webkit-appearance: none;
  width: 88px;
  height: 44px;
  padding: 0 24px 0 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 13.5px;
}

.prestige-phone-code:focus {
  outline: none;
  border-color: rgba(120, 210, 255, 0.6);
}

/* the dropdown list itself renders with the browser's native white
   popup background (can't be restyled), so the white text color set
   above for the closed select would be unreadable there — force each
   option back to a dark color just for that popup. */
.prestige-phone-code option {
  color: #111;
  background: #fff;
}

.prestige-phone-code-chevron {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: flex;
  color: rgba(255, 255, 255, 0.55);
  pointer-events: none;
}

.prestige-phone-number-wrap {
  flex: 1;
  min-width: 0;
}

@media (max-width: 575.98px) {
  .prestige-phone-field {
    flex-wrap: wrap;
  }

  .prestige-phone-code-wrap {
    width: 100%;
  }

  .prestige-phone-code {
    width: 100%;
  }

  .prestige-phone-number-wrap {
    flex-basis: 100%;
  }
}

/* ---- submit button ---- */

.prestige-contact-form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  margin-top: 4px;
  padding: 0 5px 0 20px;
  border: none;
  border-radius: 999px;
  background: #fff;
  color: #111;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.prestige-contact-form-submit-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #111;
  color: #fff;
  flex-shrink: 0;
  margin-left: auto;
}
</style>
