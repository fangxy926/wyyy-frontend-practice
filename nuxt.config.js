const path = require('path')
const PostCompilePlugin = require('webpack-post-compile-plugin')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VERSION = '0.0.1' // 正式1.6.5 debug 1.2.4
export default {
  // mode: 'universal',
  mode: 'spa',
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    WEB_BASE_URL: process.env.WEB_BASE_URL,
    LU_YOU: process.env.LU_YOU,
    WFW_URL: process.env.WFW_URL
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { 'http-equiv': 'expires', content: '0' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0 user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2659607_o9znlkqxbx.css'
      }
    ],
    script: [
      // TODO: 发布之前要检查
      { src: process.env.LU_YOU + 'wxHide.js' },
      { src: process.env.LU_YOU + 'rem.js' },
      // { src: process.env.LU_YOU + 'zfbHide.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  router: {
    base: process.env.LU_YOU,
    middleware: [],
    routeNameSplitter: '/',
    extendRouters(routes, resolve) {
      route.push(
        {
          name: 'home',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue')

        },
        {
          name: 'login',
          path: '/login',
          component: resolve(__dirname, 'pages/login.vue')
        },
        {
          name: 'openinphone',
          path: '/openinphone',
          component: resolve(__dirname, 'pages/openinphone.vue')
        },
        {
          name: 'newsDetail',
          path: '/newsDetail/:newsID',
          component: resolve(__dirname, 'pages/newsDetail.vue')
        },
        {
          name: 'userinfo',
          path: '/userinfo',
          component: resolve(__dirname, 'pages/userinfo.vue')

        }
      )
    }
  },
  /*
   ** Global CSS 10.104.141.80
   */
  css: [
    'assets/styles/reset.css',
    'assets/styles/border.css',
    { src: 'assets/styles/color.styl', lang: 'stylus' },
    { src: 'assets/styles/base.styl', lang: 'stylus' },
    'assets/styles/main.css',
    'assets/styles/iconfont.css'
  ],
  plugins: [
    { src: '@/plugins/localStorage.js', mode: 'client' },
    { src: '@/plugins/auth.js', mode: 'client' },
    '@/plugins/vant.js',
    '@/plugins/utils.js',
    '@/plugins/extend',
    '@/plugins/plugin.js',
    '@/plugins/vconsole.js',
    '@/plugins/bus-inject.js',
    // '@/plugins/vue-qriously.js',
    '@/plugins/route',
    '@/plugins/icon',
    '@/plugins/bridge',
    '@/plugins/vueInject.js',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/proxy',
    '@nuxtjs/eslint-module'
  ],
  render: {
    resourceHints: false
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    https: true,
    proxy: true // Can be also an object with default options
    // prefix: "/api"
  },
  proxy: {
    '/api': {
      target: 'https://console-mock.apipost.cn/app/mock/project/f46a7832-2619-4f21-e351-ab1da96fcba9',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      secure: false
    },
    '/outpatient': {
      target: 'https://console-mock.apipost.cn/app/mock/project/f46a7832-2619-4f21-e351-ab1da96fcba9',
      pathRewrite: { '^/outpatient': '' },
      changeOrigin: true,
      secure: false
    }
  },
  /*
   */
  build: {
    // standalone: true,
    analyze: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    maxChunkSize: 300000,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : VERSION + '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : VERSION + '[chunkhash].js'),
      css: ({ isDev }) =>
        isDev ? '[name].css' : VERSION + '[contenthash].css',
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : VERSION + 'img/[hash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : VERSION + 'fonts/[hash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : VERSION + 'videos/[hash:7].[ext]'
    },
    extend(config, ctx) {
      config.resolve.alias.styles = 'assets/styles'
      config.resolve.alias.api = '../api'
      config.resolve.alias.utils = './utils'
      config.resolve.alias['@'] = path.resolve(__dirname, '')
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/icons/svg')]

      // Includes /assets/icons/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'assets/icons/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
    },
    babel: {
      plugins: [
        ['import', { libraryName: 'vant', libraryDirectory: 'es', style: true }]
      ]
    },
    // transpile: ['cube-ui'],
    loaders: {
      stylus: {
        'resolve url': true,
        import: [path.resolve(__dirname, './assets/styles/theme')]
      }
    },
    plugins: [
      new PostCompilePlugin(),
      new TransformModulesPlugin(),
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: false
          }
        },
        sourceMap: true,
        cache: true,
        parallel: true
      })
    ],
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-import': {},
        'postcss-url': {},
        'postcss-aspect-ratio-mini': {},
        'postcss-write-svg': { utf8: false },
        'postcss-cssnext': {},
        'postcss-px-to-viewport': {
          viewportWidth: 375,
          unitPrecision: 3,
          viewportUnit: 'vw',
          selectorBlackList: ['.ignore', '.hairlines'],
          minPixelValue: 1,
          mediaQuery: false
        },
        'postcss-viewport-units': {},
        autoprefixer: {
          browsers: ['Android >= 4.0', 'iOS >= 7']
        }
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },
  server: {
    port: 8002, // default: 3000
    host: 'localhost'
  }
}
