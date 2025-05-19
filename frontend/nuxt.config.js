import axios from 'axios'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Michael Bodiam',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/preview.client.js' },
    { src: '@plugins/sanity-image.js' },
    { src: '@plugins/slider', mode: 'client' },
    { src: '@plugins/cursor' },
    { src: '@plugins/waypoint', mode: 'client' },
    { src: '@/plugins/sanity-blocks.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/sanity',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', { families: { 'DM+Sans': [400, 700] } }],
  ],
  sanity: {
    withCredentials: true,
    useCdn: true,
  },
  generate: {
    fallback: true,
    async routes() {
      return axios
        .get(
          'https://y1oifvvx.api.sanity.io/v2021-06-07/data/query/production?query=*[_type==%22series%22]{%22slug%22:slug.current}'
        )
        .then((res) => {
          return res.data.result.map((series) => {
            return '/series/' + series.slug
          })
          // console.log(res)
        })
        .catch((err) => {
          error({ statusCode: 404, message: 'series page not found', err })
        })
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   transpile: ['vue-videojs7'],
  // },
}
