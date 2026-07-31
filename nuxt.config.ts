// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/test-utils', "@nuxt/image"],
  
  typescript: {
    strict: true,
    // vite-plugin-checker (which this flag wires in for live dev-server
    // type errors) ships a vendored TypeScript build under
    // dist/checkers/vueTsc/typescript-vue-tsc/lib/ that's missing its
    // main typescript.js in this install (reinstalling the package alone
    // doesn't restore it — likely an install/sync issue, not a config
    // problem), which crashed the dev server with an uncaughtException on
    // every run. Type-checking itself still works fine standalone via
    // `npx vue-tsc --noEmit`; this only turns off the live dev-server
    // integration. Re-enable once the underlying install is fixed.
    typeCheck: false,
  },
  vite: {
    server: {
      hmr: {
        port: 24679,
      },
    },
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