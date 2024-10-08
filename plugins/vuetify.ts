import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md3,
    display: {
      mobileBreakpoint: 'md'
      // thresholds: {
      //   xs: 0,
      //   sm: 340,
      //   md: 540,
      //   lg: 800,
      //   xl: 1280,
      // },
    },
    locale: {
      locale: 'en'
    },
    date: {
      locale: {
        en: 'en-US'
      }
    }
  })
  app.vueApp.use(vuetify)
})
