// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'

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
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxt/icon'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  vite: {
    plugins: [svgLoader({})],
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  icon: {
    serverBundle: {
      collections: ['mdi']
    },
    aliases: {
      nuxt: 'logos:nuxt-icon'
    },
    customCollections: [
      {
        prefix: 'qi',
        dir: './assets/icons'
      }
    ]
  },
  vue: {},
  build: {
    transpile: ['vuetify']
  }
})
