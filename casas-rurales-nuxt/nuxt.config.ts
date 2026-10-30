// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/global.css"],
  modules: ["@nuxt/a11y", "@nuxt/image"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  routeRules: {
    "/": {
      swr: 60,
    },
    "/houses/**": {
      ssr: true,
    },
  },
  image: {
  domains: ["localhost"],
},

});
