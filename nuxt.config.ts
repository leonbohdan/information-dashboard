import vuetify from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'
import { fileURLToPath } from 'node:url'

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
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      style: [],
      script: [],
      noscript: []
    }
  },
  debug: true,
  dev: process.env.APP_ENV === 'development',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.APP_ENV === 'development' },
  css: [
    '@core/scss/template/index.scss',
    '@styles/styles.scss',
    '@/plugins/iconify/icons.css',
    '@layouts/styles/index.scss'
  ],
  components: {
    dirs: [
      {
        path: '@/@core/components',
        pathPrefix: false
      },
      {
        path: '~/components/global',
        global: true
      },
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  },
  plugins: ['@/plugins/vuetify/index.js', '@/plugins/iconify/index.js'],
  imports: {
    dirs: ['./@core/utils', './@core/composable/', './plugins/*/composables/*']
  },
  hooks: {},
  experimental: {
    typedPages: true
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/device'
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@/*': ['../*'],
          '@layouts/*': ['../@layouts/*'],
          '@layouts': ['../@layouts'],
          '@core/*': ['../@core/*'],
          '@core': ['../@core'],
          '@images/*': ['../assets/images/*'],
          '@styles/*': ['../styles/*']
        }
      }
    }
  },
  // ℹ️ Disable source maps until this is resolved: https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  vite: {
    define: { 'process.env': {} },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        '@core': fileURLToPath(new URL('./@core', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./@layouts', import.meta.url)),
        '@images': fileURLToPath(new URL('./assets/images/', import.meta.url)),
        '@styles': fileURLToPath(new URL('./assets/styles/', import.meta.url)),
        '@configured-variables': fileURLToPath(
          new URL('./assets/styles/variables/_template.scss', import.meta.url)
        )
      }
    },
    build: {
      chunkSizeWarningLimit: 5000
    },
    optimizeDeps: {
      exclude: ['vuetify'],
      entries: ['./**/*.vue']
    },
    plugins: [
      svgLoader(),
      vuetify({
        styles: {
          configFile: 'assets/styles/variables/_vuetify.scss'
        }
      })
    ]
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'swiper-container' || tag === 'swiper-slide'
    }
  },
  build: {
    transpile: ['vuetify']
  }
})
