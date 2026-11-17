// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Arfan Citra Wibowo | Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Full Stack Developer with 7+ years of experience architecting high-performance web systems, decoupled cloud applications, and scalable backend APIs.'
        },
        { name: 'author', content: 'Arfan Citra Wibowo' },
        { name: 'theme-color', content: '#FAF9F6' },
        { property: 'og:title', content: 'Arfan Citra Wibowo | Full Stack Developer' },
        { property: 'og:description', content: '7+ years architecting high-performance web systems, Nuxt 3 decoupled architectures, and scalable cloud platforms.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap'
        }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/']
    }
  }
})
