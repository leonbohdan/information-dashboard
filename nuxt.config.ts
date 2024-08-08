// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      titleTemplate: '%s | Dashboard',
      title: 'Dashboard',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],
      link: [],
      style: [],
      script: [],
      noscript: []
    }
  },
  css: [],
  debug: true,
  dev: process.env.APP_ENV === 'development',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.APP_ENV === 'development' },
  plugins: [],
  modules: [],
  vite: {},
  vue: {}
})
