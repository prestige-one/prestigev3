<template>
  <form class="prestige-broker-form" @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>{{ t('sh.form.fullName') }}</label>
          <input v-model="form.name" name="name" type="text">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>{{ t('sh.form.companyAgency') }}</label>
          <input v-model="form.company" name="company" type="text">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>{{ t('sh.form.emailAddress') }}</label>
          <input v-model="form.email" name="email" type="email">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>{{ t('sh.form.phoneNumber') }}</label>
          <div class="prestige-phone-field">
            <select v-model="form.phoneCountry" name="phone_country" class="prestige-phone-code">
              <option v-for="country in countries" :key="country.iso2" :value="country.iso2">
                {{ getFlagEmoji(country.iso2) }} {{ country.dial }}
              </option>
            </select>
            <input v-model="form.phone" name="phone" type="tel" class="prestige-phone-number">
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>{{ t('sh.form.reraOrn') }}</label>
          <input v-model="form.rera" name="rera" type="text">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>{{ t('sh.form.country') }}</label>
          <select v-model="form.country" name="country" class="prestige-country-select">
            <option v-for="country in countries" :key="country.iso2" :value="country.iso2">
              {{ getFlagEmoji(country.iso2) }} {{ country.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="tp-contact-form-input mb-20">
          <label>{{ t('sh.form.message') }}</label>
          <textarea v-model="form.message" name="message" />
        </div>
        <div class="tp-contact-form-btn">
          <button class="w-100" type="submit" :disabled="submitting">
            <span>
              <span class="text-1">{{ submitting ? t('sh.form.submitting') : t('sh.form.register') }}</span>
              <span class="text-2">{{ submitting ? t('sh.form.submitting') : t('sh.form.register') }}</span>
            </span>
          </button>
          <p
            v-if="status"
            class="prestige-broker-form__status mt-5"
            :class="`prestige-broker-form__status--${status.type}`"
          >
            {{ status.message }}
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { countries, getFlagEmoji } from "~/data/countries-data";

const { t } = useI18n();

interface BrokerForm {
  name: string;
  company: string;
  email: string;
  phoneCountry: string;
  phone: string;
  rera: string;
  country: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error";
  message: string;
}

const form = reactive<BrokerForm>({
  name: "",
  company: "",
  email: "",
  phoneCountry: "AE",
  phone: "",
  rera: "",
  country: "AE",
  message: "",
});

const submitting = ref(false);
const status = ref<FormStatus | null>(null);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function onSubmit() {
  status.value = null;

  if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.phone.trim()) {
    status.value = {
      type: "error",
      message: t("sh.form.errRequired"),
    };
    return;
  }

  if (!isValidEmail(form.email)) {
    status.value = { type: "error", message: t("sh.form.errInvalidEmail") };
    return;
  }

  submitting.value = true;
  try {
    await $fetch("/api/broker", { method: "POST", body: { ...form } });
    status.value = {
      type: "success",
      message: t("sh.form.successRegistered"),
    };
    form.name = "";
    form.company = "";
    form.email = "";
    form.phone = "";
    form.rera = "";
    form.message = "";
  } catch {
    status.value = {
      type: "error",
      message: t("sh.form.errGeneric", { email: "enquiries@prestigeone.ae" }),
    };
  } finally {
    submitting.value = false;
  }
}
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
.prestige-country-select {
  width: 100%;
  height: 60px;
  padding: 0 14px;
  border-radius: 8px;
  background: #1f1f1f;
  border: 1px solid #484646;
  color: #fff;
  font-size: 16px;
}
.prestige-broker-form__status {
  font-size: 15px;
  margin-top: 14px;
}
.prestige-broker-form__status--success {
  color: var(--tp-common-gold, #ffffff);
}
.prestige-broker-form__status--error {
  color: #ff8a8a;
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
