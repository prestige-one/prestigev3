// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/test-utils', "@nuxt/image", "@nuxtjs/i18n"],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'ar', name: 'العربية', language: 'ar-AE', dir: 'rtl', file: 'ar.json' },
      { code: 'fr', name: 'Français', language: 'fr-FR', dir: 'ltr', file: 'fr.json' },
      { code: 'ru', name: 'Русский', language: 'ru-RU', dir: 'ltr', file: 'ru.json' },
      { code: 'de', name: 'Deutsch', language: 'de-DE', dir: 'ltr', file: 'de.json' },
      { code: 'nl', name: 'Nederlands', language: 'nl-NL', dir: 'ltr', file: 'nl.json' },
      { code: 'es', name: 'Español', language: 'es-ES', dir: 'ltr', file: 'es.json' },
      { code: 'it', name: 'Italiano', language: 'it-IT', dir: 'ltr', file: 'it.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    // cinematic cross-page fade (respects reduced-motion via CSS)
    pageTransition: { name: "page-fade", mode: "out-in" },
    head: {
      title: "Prestige One Developments",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        // dark theme site-wide (agntix-dark drives all the theme's dark
        // color overrides, incl. body background) rather than per-page
        class: 'agntix-dark',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/images/v3/fav-black-v3.png' },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/js/bootstrap.min.js",
        },
      ],
    }
  },
  css: [
    "swiper/css/bundle",
    "~/assets/css/bootstrap.css",
    "~/assets/css/atropos.min.css",
    "~/assets/css/font-awesome-pro.css",
    "~/assets/css/nice-select.css",
    "~/assets/css/spacing.css",
    "~/assets/scss/main.scss",
  ],
})