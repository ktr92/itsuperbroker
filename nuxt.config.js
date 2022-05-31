
export default {
  head: {
    title: 'superbroker-fe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  css: ['~/assets/css/twstyles.css'],

  components: true,

  serverMiddleware: [
    '~/api/index.js'
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/globals'
  ],
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token'
        },
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'access_token'
          },
          refresh: {
            url: '/api/auth/refresh',
            method: 'post',
            propertyName: 'access_token',
            scope: true
          },
          logout: false,
          user: false
        },
        autoLogout: false,
        user: {
          property: 'username',
          autoFetch: true
        },
        grantType: 'password',
        scope: ['broker']
      }
    }
  },

  env: {
    api: 'https://api-broker.demo.ipotech.su/api/v1'
  },

  axios: {
    baseURL: process.env.NODE_ENV ? process.env.BASEURL : 'http://localhost:3000'
  },

  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
