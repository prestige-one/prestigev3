// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/test-utils', "@nuxt/image"],
  
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      title: "Agntix - Digital Agency & Creative Portfolio vue nuxt Template",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
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