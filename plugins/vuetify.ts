import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
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
