import pkg from './package'
const axios = require('axios') 

export default {
  mode: 'universal',
  env: {
    BASE_URL: 'https://blog.kasu.dev',
    META_TITLE: 'かすのブログ',
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.META_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'かす.devのブログ'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: process.env.META_TITLE
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.META_TITLE
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'かす.devのブログ'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://pbs.twimg.com/profile_images/1113409125126246401/gM_CUTiK_400x400.png'
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@ergofriend'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Noto+Sans+JP` }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#1565c0',
    height: '3px'
  },

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
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],

  googleAnalytics: {
    id: 'UA-126788290-2'
  },

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
    highlight: function (str, lang) {
      var hljs = require('highlight.js')
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<div class="language-'+lang+' extra-class"><pre class="language-'+lang+'"><code>' +
                 hljs.highlight(lang, str, true).value +
                 '</code></pre></div>';
          // return `<!--beforebegin--><div class="language-${lang} extra-class"><!--afterbegin-->` +
          // '<pre class="hljs"><code>' +
          //     hljs.highlight(lang, str, true).value +
          //     '</code></pre>' + `<!--beforeend--></div><!--afterend-->`
        } catch (__) {}
      }
  
      return '<div class="language extra-class"><pre class="language"><code>' + md.utils.escapeHtml(str) + '</code></pre></div>';
    },
    use: [
      ['markdown-it-link-attributes',{
        attrs: {
          target: '_blank',
          rel: 'noopener'
      }}],
      ['markdown-it-named-headers',{
        slugify: function (header) {
          return encodeURI(header.trim()
              .toLowerCase()
              .replace(/[\]\[\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\{\|\}\~]/g, '')
              .replace(/\s+/g, '-')) // Replace spaces with hyphens
              .replace(/\-+$/, ''); // Replace trailing hyphen
        }
      }],
      // 'markdown-it-highlightjs',
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
  generate: {
    fallback: true,
    routes: function () {
      return axios.get(`https://api.storyblok.com/v1/cdn/stories`, {
        params: {
            token: 'k4ffsYRoUFU62TVSykewkwtt',
            resolve_relations: 'categories',
        }
        }).then(res => {
          return res.data.stories.map(post => {
            const type = /blogs/.test(post.full_slug) ? 'post' : 'category'
            console.log(type+': '+post.name)
            return {
              route: '/'+type+'/' + post.id,
              payload: post
            };
        })
      })
    }
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    generate: true, // 静的ジェネレート時にも利用
    exclude: [
      '/404*', // 404ページは除く
    ],
    routes: function () {
      return axios.get(`https://api.storyblok.com/v1/cdn/stories`, {
        params: {
            token: 'k4ffsYRoUFU62TVSykewkwtt',
            resolve_relations: 'categories',
        }
        }).then(res => {
          return res.data.stories.map(post => {
            const type = /blogs/.test(post.full_slug) ? 'post' : 'category'
            return '/'+type+'/' + post.id;
        })
      })
    }
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
