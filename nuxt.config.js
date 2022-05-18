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
    '~/plugins/vee-validate'
  ],

  /* auth: {
    strategies: {
      oauth2: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://api-broker.demo.ipotech.su/oauth2/token',
          token: 'https://api-broker.demo.ipotech.su/oauth2/token'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 3600
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'code',
        client_id: 'c3ff36379fd0aff317297ed1d1b45b80',
        client_secret: '7d094bf4175b0a95890b30a8c260597449b086aac70729444d72a4b2d11f3ee0ba05356ee4e63bd28f26f8f63ae40c685f6e0ae9512b38902c63e652b1c6621c',
        grant_type: 'password',
        scope: ['broker']
      }
    }
  },  */

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token'
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: false
        },
        autoLogout: false,
        user: {
          property: 'username',
          autoFetch: true
        }
      }
    }
  },

  axios: {
    baseURL: process.env.NODE_ENV ? process.env.BASEURL : 'http://localhost:3000'
  },

  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
