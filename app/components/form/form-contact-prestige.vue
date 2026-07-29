<template>
  <form id="contact-form" method="POST" novalidate @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>Full name*</label>
          <input v-model="form.name" name="name" type="text">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>Email address*</label>
          <input v-model="form.email" name="email" type="email">
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
            <input v-model="form.phone" name="phone" type="tel" class="prestige-phone-number">
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="tp-contact-form-input mb-20">
          <label>How Can We Help You*
          </label>
          <textarea v-model="form.message" name="message" />
        </div>
        <div class="tp-contact-form-btn">
          <button class="w-100" type="submit" :disabled="status === 'submitting'"><span>
              <span class="text-1">{{ status === 'submitting' ? 'Sending…' : 'Send Message' }}</span>
              <span class="text-2">{{ status === 'submitting' ? 'Sending…' : 'Send Message' }}</span>
            </span>
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
