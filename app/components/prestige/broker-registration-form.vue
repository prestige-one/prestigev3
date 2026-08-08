<template>
  <form
    class="prestige-broker-reg-form"
    enctype="multipart/form-data"
    novalidate
    @change="clearFieldError"
    @submit="validateSubmission"
  >
    <p v-if="submitError" class="prestige-broker-reg-form-submit-error" role="alert">
      {{ submitError }}
    </p>

    <fieldset
      v-for="block in definition.blocks"
      :key="block.title"
      class="prestige-broker-reg-form-fieldset prestige-broker-reg-form-panel"
    >
      <legend class="prestige-broker-reg-form-legend">{{ block.title }}</legend>
      <div class="prestige-broker-reg-form-panel-body">
        <div class="prestige-broker-reg-form-grid">
          <template v-for="field in block.fields" :key="field.name">
            <div
              v-if="field.kind === 'checkbox'"
              class="prestige-broker-reg-form-cell prestige-broker-reg-form-cell--full prestige-broker-reg-form-checkbox-wrap"
            >
              <label class="prestige-broker-reg-form-checkbox-label">
                <input
                  :id="fieldId(field.name)"
                  :name="field.name"
                  type="checkbox"
                  :required="field.required"
                  class="prestige-broker-reg-form-checkbox"
                  :aria-invalid="Boolean(fieldErrors[field.name])"
                  :aria-describedby="errorId(field.name)"
                >
                <span>{{ field.label }}{{ field.required ? " *" : "" }}</span>
              </label>
              <p
                v-if="fieldErrors[field.name]"
                :id="`${fieldId(field.name)}-error`"
                class="prestige-broker-reg-form-error"
                role="alert"
              >
                {{ fieldErrors[field.name] }}
              </p>
            </div>

            <div
              v-else-if="field.kind === 'textarea'"
              class="prestige-broker-reg-form-cell prestige-broker-reg-form-cell--full"
            >
              <label :for="fieldId(field.name)">{{ field.label }}{{ field.required ? " *" : "" }}</label>
              <textarea
                :id="fieldId(field.name)"
                :name="field.name"
                :required="field.required"
                :rows="field.rows ?? 4"
                :placeholder="field.placeholder"
                class="prestige-broker-reg-form-control"
                :aria-invalid="Boolean(fieldErrors[field.name])"
                :aria-describedby="errorId(field.name)"
              />
              <p
                v-if="fieldErrors[field.name]"
                :id="`${fieldId(field.name)}-error`"
                class="prestige-broker-reg-form-error"
                role="alert"
              >
                {{ fieldErrors[field.name] }}
              </p>
            </div>

            <div v-else-if="field.kind === 'select'" class="prestige-broker-reg-form-cell">
              <label :for="fieldId(field.name)">{{ field.label }}{{ field.required ? " *" : "" }}</label>
              <select
                :id="fieldId(field.name)"
                :name="field.name"
                :required="field.required"
                class="prestige-broker-reg-form-control"
                :aria-invalid="Boolean(fieldErrors[field.name])"
                :aria-describedby="errorId(field.name)"
              >
                <option value="" :disabled="field.required" selected>
                  {{ field.placeholderOption ?? "Select…" }}
                </option>
                <option
                  v-for="option in field.options.filter((item) => item.value !== '')"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              <p
                v-if="fieldErrors[field.name]"
                :id="`${fieldId(field.name)}-error`"
                class="prestige-broker-reg-form-error"
                role="alert"
              >
                {{ fieldErrors[field.name] }}
              </p>
            </div>

            <div
              v-else-if="field.kind === 'file'"
              class="prestige-broker-reg-form-cell prestige-broker-reg-form-cell--full"
            >
              <label :for="fieldId(field.name)">{{ field.label }}{{ field.required ? " *" : "" }}</label>
              <input
                :id="fieldId(field.name)"
                :name="field.name"
                type="file"
                :required="field.required"
                :accept="field.accept"
                class="prestige-broker-reg-form-file"
                :aria-invalid="Boolean(fieldErrors[field.name])"
                :aria-describedby="errorId(field.name)"
              >
              <p
                v-if="fieldErrors[field.name]"
                :id="`${fieldId(field.name)}-error`"
                class="prestige-broker-reg-form-error"
                role="alert"
              >
                {{ fieldErrors[field.name] }}
              </p>
            </div>

            <div
              v-else
              class="prestige-broker-reg-form-cell"
              :class="{ 'prestige-broker-reg-form-cell--full': field.wide }"
            >
              <label :for="fieldId(field.name)">{{ field.label }}{{ field.required ? " *" : "" }}</label>
              <input
                :id="fieldId(field.name)"
                :name="field.name"
                :type="field.kind"
                :required="field.required"
                :placeholder="field.placeholder"
                class="prestige-broker-reg-form-control"
                :aria-invalid="Boolean(fieldErrors[field.name])"
                :aria-describedby="errorId(field.name)"
              >
              <p
                v-if="fieldErrors[field.name]"
                :id="`${fieldId(field.name)}-error`"
                class="prestige-broker-reg-form-error"
                role="alert"
              >
                {{ fieldErrors[field.name] }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </fieldset>

    <div class="prestige-broker-reg-form-actions prestige-broker-reg-form-actions-panel">
      <prestige-submit-button :label="definition.submitLabel" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { brokerRegistrationForms, type BrokerRegistrationSlug } from "~/data/broker-registration";

const props = defineProps<{ slug: BrokerRegistrationSlug }>();
const definition = computed(() => brokerRegistrationForms[props.slug]);
const fieldErrors = ref<Record<string, string>>({});
const submitError = ref("");

function fieldId(name: string): string {
  return `prestige-broker-form-${props.slug}-${name}`;
}

function errorId(name: string): string | undefined {
  return fieldErrors.value[name] ? `${fieldId(name)}-error` : undefined;
}

function clearFieldError(event: Event): void {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) {
    return;
  }
  if (!target.name || !fieldErrors.value[target.name]) return;
  fieldErrors.value = Object.fromEntries(
    Object.entries(fieldErrors.value).filter(([name]) => name !== target.name),
  );
}

function validateForm(form: HTMLFormElement): Record<string, string> {
  const errors: Record<string, string> = {};
  const controls = Array.from(form.elements).filter(
    (element): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement,
  );

  controls.forEach((control) => {
    if (!control.name || control.validity.valid) return;
    const validity = control.validity;

    if (control instanceof HTMLInputElement && control.type === "checkbox" && validity.valueMissing) {
      errors[control.name] = "This confirmation is required.";
    } else if (control instanceof HTMLInputElement && control.type === "file" && validity.valueMissing) {
      errors[control.name] = "Please upload the required file.";
    } else if (validity.valueMissing) {
      errors[control.name] = "This field is required.";
    } else if (validity.typeMismatch || validity.badInput) {
      errors[control.name] = "Please enter a valid value.";
    } else if (validity.patternMismatch) {
      errors[control.name] = "Please match the requested format.";
    } else {
      errors[control.name] = control.validationMessage || "Please review this field.";
    }
  });

  return errors;
}

function validateSubmission(event: SubmitEvent): void {
  const form = event.currentTarget;
  if (!(form instanceof HTMLFormElement)) return;

  const errors = validateForm(form);
  const firstFieldWithError = Object.keys(errors)[0];
  if (!firstFieldWithError) {
    fieldErrors.value = {};
    submitError.value = "";
    return;
  }

  event.preventDefault();
  fieldErrors.value = errors;
  submitError.value = "Please complete all required fields before submitting the form.";
  const firstInvalid = form.elements.namedItem(firstFieldWithError);
  if (
    firstInvalid instanceof HTMLInputElement ||
    firstInvalid instanceof HTMLSelectElement ||
    firstInvalid instanceof HTMLTextAreaElement
  ) {
    nextTick(() => firstInvalid.focus());
  }
}
</script>

<style scoped>
.prestige-broker-reg-form {
  margin: 0;
  color-scheme: dark;
}

.prestige-broker-reg-form-fieldset {
  min-width: 0;
  margin: 0 0 1.25rem;
  padding: 0;
  overflow: hidden;
  background-color: #202022;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.prestige-broker-reg-form-legend {
  float: none;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0.95rem 1.35rem;
  background: #2b2b2e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  line-height: 1.35;
  text-transform: uppercase;
}

.prestige-broker-reg-form-panel-body {
  padding: 1.35rem 1.35rem 1.45rem;
  background: #202022;
}

.prestige-broker-reg-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem 1.35rem;
}

.prestige-broker-reg-form-cell label {
  display: block;
  margin-bottom: 0.4rem;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.prestige-broker-reg-form-control {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0.8rem;
  background-color: #505359;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #fff;
  font-size: 0.93rem;
  line-height: 1.45;
}

input.prestige-broker-reg-form-control,
select.prestige-broker-reg-form-control {
  height: 40px;
}

.prestige-broker-reg-form-control::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.prestige-broker-reg-form-control:focus {
  background-color: #575b62;
  border-color: rgba(255, 255, 255, 0.5);
  outline: 2px solid rgba(255, 255, 255, 0.14);
  outline-offset: 1px;
}

.prestige-broker-reg-form-cell--full {
  grid-column: 1 / -1;
}

.prestige-broker-reg-form-file {
  width: 100%;
  height: 40px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.82rem;
}

.prestige-broker-reg-form-file::file-selector-button {
  height: 40px;
  margin-right: 0.85rem;
  padding: 0.45rem 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 6px;
  background: #505359;
  color: #fff;
  cursor: pointer;
}

.prestige-broker-reg-form-checkbox-wrap label {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.55;
  text-transform: none;
}

.prestige-broker-reg-form-checkbox-label {
  display: flex !important;
  align-items: flex-start;
  gap: 0.65rem;
  cursor: pointer;
}

.prestige-broker-reg-form-checkbox {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 0.15rem;
  accent-color: #fff;
}

.prestige-broker-reg-form-error {
  margin: 0.4rem 0 0;
  color: #ff9a9a;
  font-size: 0.78rem;
  line-height: 1.35;
}

.prestige-broker-reg-form-submit-error {
  margin: 0 0 1rem;
  padding: 0.65rem 0.8rem;
  background: rgba(255, 90, 90, 0.1);
  border: 1px solid rgba(255, 120, 120, 0.35);
  border-radius: 6px;
  color: #ff9a9a;
  font-size: 0.84rem;
}

.prestige-broker-reg-form-actions-panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  padding: 1rem 0 0.25rem;
}

:deep(.prestige-broker-reg-form-actions-panel .prestige-submit) {
  width: 30%;
}

@media (max-width: 575px) {
  .prestige-broker-reg-form-fieldset {
    border-radius: 12px;
  }

  .prestige-broker-reg-form-panel-body {
    padding: 1.15rem 1.1rem 1.25rem;
  }

  .prestige-broker-reg-form-legend {
    padding: 0.85rem 1.1rem;
  }

  .prestige-broker-reg-form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  :deep(.prestige-broker-reg-form-actions-panel .prestige-submit) {
    width: 100%;
  }
}
</style>
