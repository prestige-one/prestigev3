<template>
  <form id="contact-form" method="POST" novalidate @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>{{ $t('contact.fullName') }}</label>
          <input v-model="form.name" name="name" type="text" :placeholder="$t('contact.fullNamePlaceholder')">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="tp-contact-form-input mb-20">
          <label>{{ $t('contact.emailAddress') }}</label>
          <input v-model="form.email" name="email" type="email" :placeholder="$t('contact.emailPlaceholder')">
        </div>
      </div>
      <div class="col-lg-12">
        <div class="tp-contact-form-input mb-20">
          <label>{{ $t('contact.phoneNumber') }}</label>
          <div class="prestige-phone-field">
            <select v-model="selectedCountry" name="phone_country" class="prestige-phone-code">
              <option v-for="country in countries" :key="country.iso2" :value="country.iso2">
                {{ getFlagEmoji(country.iso2) }} {{ country.dial }}
              </option>
            </select>
            <input v-model="form.phone" name="phone" type="tel" class="prestige-phone-number" :placeholder="$t('contact.phonePlaceholder')">
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="tp-contact-form-input mb-20">
          <label>{{ $t('contact.howCanWeHelp') }}</label>
          <textarea v-model="form.message" name="message" :placeholder="$t('contact.messagePlaceholder')" />
        </div>
        <div class="tp-contact-form-btn">
          <button class="prestige-send" type="submit" :disabled="status === 'submitting'">
            <span class="prestige-send__label">{{ status === 'submitting' ? $t('cta.sending') : $t('cta.sendMessage') }}</span>
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

const props = defineProps<{ prefillMessage?: string }>();
const { t } = useI18n();
const selectedCountry = ref("AE");
const form = reactive({ name: "", email: "", phone: "", message: props.prefillMessage ?? "" });
const status = ref<"idle" | "submitting" | "success" | "error">("idle");
const responseMsg = ref("");

const dialFor = (iso2: string) => countries.find((c) => c.iso2 === iso2)?.dial ?? "";

async function onSubmit() {
  // quick client-side validation
  if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) || form.phone.replace(/\D/g, "").length < 6 || !form.message.trim()) {
    status.value = "error";
    responseMsg.value = t('contact.errRequired');
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
    responseMsg.value = t('contact.errGeneric', { email: 'enquiries@prestigeone.ae' });
  }
}
</script>

<style scoped>
/* uniform field border colour */
.tp-contact-form-input input,
.tp-contact-form-input textarea,
.prestige-phone-number,
.prestige-phone-code {
  border: 1px solid #484646;
}

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

.tp-contact-form-input input,
.tp-contact-form-input textarea {
  color: #fff;
  background: #1f1f1f;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: border-color 0.25s ease, background-color 0.25s ease;
}

.tp-contact-form-input input:focus,
.tp-contact-form-input textarea:focus {
  background: #1f1f1f;
  border-color: rgba(255, 255, 255, 0.42);
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
