import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import defaults from './defaults'
import { icons } from './icons'
import { themes } from './theme'

// Styles
import '@core/scss/template/libs/vuetify/index.scss'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    aliases: {
      IconBtn: VBtn
    },
    defaults,
    icons,
    theme: {
      defaultTheme: 'dark',
      themes
    },
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

  nuxtApp.vueApp.use(vuetify)
})
