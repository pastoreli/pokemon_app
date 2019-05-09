// import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/dist/vuetify.min.css',
    {
      src: '~/assets/scss/main.scss',
      lang: 'SASS'
    }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    {
      src: '@/plugins/font-awesome-vue',
      ssr: false
    },
    {
      src: '@/plugins/poke-filters',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  // build: {
  //   vendor: [
  //     '@fortawesome/fontawesome',
  //     '@fortawesome/fontawesome-free-solid',
  //     '@fortawesome/fontawesome-free-brands',
  //     'slugify'
  //   ],
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend(config, ctx) {
  //   }
  // }
}
