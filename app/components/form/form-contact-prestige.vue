<template>
  <form id="contact-form" method="POST" novalidate @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>Full name</label>
          <input v-model="form.name" name="name" type="text" placeholder="Enter your full name">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>Email address</label>
          <input v-model="form.email" name="email" type="email" placeholder="Enter your email address">
        </div>
      </div>
      <div class="col-lg-12">
        <div class="tp-contact-form-input mb-20">
          <label>Phone number</label>
          <div class="prestige-phone-field">
            <select v-model="selectedCountry" name="phone_country" class="prestige-phone-code">
              <option v-for="country in countries" :key="country.iso2" :value="country.iso2">
                {{ getFlagEmoji(country.iso2) }} {{ country.dial }}
              </option>
            </select>
            <input v-model="form.phone" name="phone" type="tel" class="prestige-phone-number" placeholder="Enter your phone number">
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="tp-contact-form-input mb-20">
          <label>How Can We Help You?</label>
          <textarea v-model="form.message" name="message" placeholder="Tell us more about your inquiry" />
        </div>
        <div class="tp-contact-form-btn">
          <button class="prestige-send" type="submit" :disabled="status === 'submitting'">
            <span class="prestige-send__label">{{ status === 'submitting' ? 'Sending…' : 'Send Message' }}</span>
            <span class="prestige-send__arrow" aria-hidden="true">→</span>
          </button>
          <p v-if="responseMsg" class="ajax-response mt-5" :class="`is-${status}`">{{ responseMsg }}</p>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { countries, getFlagEmoji } from "~/data/countries-data";

const selectedCountry = ref("AE");
const form = reactive({ name: "", email: "", phone: "", message: "" });
const status = ref<"idle" | "submitting" | "success" | "error">("idle");
const responseMsg = ref("");

const dialFor = (iso2: string) => countries.find((c) => c.iso2 === iso2)?.dial ?? "";

async function onSubmit() {
  // quick client-side validation
  if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) || form.phone.replace(/\D/g, "").length < 6 || !form.message.trim()) {
    status.value = "error";
    responseMsg.value = "Please complete all required fields with valid details.";
    return;
  }
  status.value = "submitting";
  responseMsg.value = "";
  try {
    const res = await $fetch<{ ok: boolean; message: string }>("/api/contact", {
      method: "POST",
      body: { ...form, countryCode: dialFor(selectedCountry.value) },
    });
    status.value = "success";
    responseMsg.value = res.message;
    form.name = form.email = form.phone = form.message = "";
  } catch {
    status.value = "error";
    responseMsg.value = "Something went wrong. Please email enquiries@prestigeone.ae or try again.";
  }
}
</script>

<style scoped>
/* left-aligned labels + lighter placeholder text */
.tp-contact-form-input label {
  display: block;
  text-align: left;
}
.tp-contact-form-input input::placeholder,
.tp-contact-form-input textarea::placeholder,
.prestige-phone-number::placeholder {
  color: rgba(255, 255, 255, 0.45);
  opacity: 1;
}

/* white pill send button with dark arrow circle (matches the mock) */
.prestige-send {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 8px 8px 30px;
  border: none;
  border-radius: 60px;
  background: #fff;
  color: #0b0b0d;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;
}
.prestige-send:hover { background: #efefef; transform: translateY(-2px); }
.prestige-send:disabled { opacity: 0.6; cursor: default; transform: none; }
.prestige-send__arrow {
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0b0b0d;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.ajax-response {
  font-size: 14px;
}
.ajax-response.is-success {
  color: #7ee2a0;
}
.ajax-response.is-error {
  color: #ff9a9a;
}

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
