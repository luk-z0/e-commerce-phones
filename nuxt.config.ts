// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@prisma/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    defaultLocale: 'pt',
    langDir: 'locales/',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' }
    ]
  }
})