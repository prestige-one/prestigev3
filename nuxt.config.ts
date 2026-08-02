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
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr', files: ['en.json', 'home/en.json', 'projects/en.json', 'destinations/en.json', 'about/en.json', 'shared/en.json'] },
      { code: 'ar', name: 'العربية', language: 'ar-AE', dir: 'rtl', files: ['ar.json', 'home/ar.json', 'projects/ar.json', 'destinations/ar.json', 'about/ar.json', 'shared/ar.json'] },
      { code: 'fr', name: 'Français', language: 'fr-FR', dir: 'ltr', files: ['fr.json', 'home/fr.json', 'projects/fr.json', 'destinations/fr.json', 'about/fr.json', 'shared/fr.json'] },
      { code: 'ru', name: 'Русский', language: 'ru-RU', dir: 'ltr', files: ['ru.json', 'home/ru.json', 'projects/ru.json', 'destinations/ru.json', 'about/ru.json', 'shared/ru.json'] },
      { code: 'de', name: 'Deutsch', language: 'de-DE', dir: 'ltr', files: ['de.json', 'home/de.json', 'projects/de.json', 'destinations/de.json', 'about/de.json', 'shared/de.json'] },
      { code: 'nl', name: 'Nederlands', language: 'nl-NL', dir: 'ltr', files: ['nl.json', 'home/nl.json', 'projects/nl.json', 'destinations/nl.json', 'about/nl.json', 'shared/nl.json'] },
      { code: 'es', name: 'Español', language: 'es-ES', dir: 'ltr', files: ['es.json', 'home/es.json', 'projects/es.json', 'destinations/es.json', 'about/es.json', 'shared/es.json'] },
      { code: 'it', name: 'Italiano', language: 'it-IT', dir: 'ltr', files: ['it.json', 'home/it.json', 'projects/it.json', 'destinations/it.json', 'about/it.json', 'shared/it.json'] },
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