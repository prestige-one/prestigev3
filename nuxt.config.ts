// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/test-utils', "@nuxt/image"],
  
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      title: "Prestige One Developments",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        // dark theme site-wide (agntix-dark drives all the theme's dark
        // color overrides, incl. body background) rather than per-page
        class: 'agntix-dark',
      },
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