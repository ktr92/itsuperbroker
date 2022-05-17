export default {
  head: {
    title: 'superbroker-fe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  plugins: ['~/plugins/vee-validate'],

  auth: {
    // Options
  },

  axios: {},

  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
