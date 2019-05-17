import pkg from './package'

export default {
  mode: 'universal',

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Noto+Sans+JP` }
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
    { src: '~/node_modules/highlight.js/styles/atom-one-dark-reasonable.css', lang: 'css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/markdownit'
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    breaks: true, 
    injected: true,
    linkify: true,
    typography: true,
    langPrefix: true,
    html: true,
    typographer: true,
    quotes: true,
    use: [
      ['markdown-it-named-headers',{
        slugify: function (header) {
          return encodeURI(header.trim()
              .toLowerCase()
              .replace(/[\]\[\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\{\|\}\~]/g, '')
              .replace(/\s+/g, '-')) // Replace spaces with hyphens
              .replace(/\-+$/, ''); // Replace trailing hyphen
        }
      }],
      'markdown-it-highlightjs',
      ['markdown-it-table-of-contents', {includeLevel: [1,2,3]}],
      ['markdown-it-container', 'tip', {
        render: function (tokens, idx) {
          const klass = 'tip'
          const token = tokens[idx]
          const info = token.info.trim().slice(klass.length).trim()
          if (token.nesting === 1) {
            return `<div class="${klass} custom-block"><p class="custom-block-title">${info || 'TIP'}</p>\n`
          } else {
            return `</div>\n`
          }
        }
      }],
      ['markdown-it-container', 'danger', {
        render: function (tokens, idx) {
          const klass = 'danger'
          const token = tokens[idx]
          const info = token.info.trim().slice(klass.length).trim()
          if (token.nesting === 1) {
            return `<div class="${klass} custom-block"><p class="custom-block-title">${info || 'Danger'}</p>\n`
          } else {
            return `</div>\n`
          }
        }
      }],
      ['markdown-it-container', 'warning', {
        render: function (tokens, idx) {
          const klass = 'warning'
          const token = tokens[idx]
          const info = token.info.trim().slice(klass.length).trim()
          if (token.nesting === 1) {
            return `<div class="${klass} custom-block"><p class="custom-block-title">${info || 'Warning'}</p>\n`
          } else {
            return `</div>\n`
          }
        }
      }],
      // ['markdown-it-imsize', { autofill: true }]
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
