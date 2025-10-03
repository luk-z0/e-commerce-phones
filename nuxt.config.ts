// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@prisma/nuxt',
    'nuxt-auth-utils',
    '@nuxt/icon',
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'pt-BR', name: 'Português (Brasil)', file: 'pt-BR.json', flag: 'flag:br-4x3', slot: 'country' as const },
      { code: 'en', name: 'English', file: 'en-US.json', flag: 'flag:us-4x3', slot: 'country' as const },
    ],
    defaultLocale: 'pt_br',
    langDir: 'locales/',
  },
  runtimeConfig: {
    auth: {
      google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET || ''
      },
    }
  },
})