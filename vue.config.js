const path = require('path')
// 为什么不使用 uglifyjs==> https://www.cnblogs.com/XCWebLTE/p/10270629.html
// const UglifyPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin') // 和 uglifyPlugin 功能差不多，vue-cli4 官方用的这个插件
const CompressionPlugin = require('compression-webpack-plugin') // gzip 压缩
// const d = require('clean-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)

let { version, openGzip } = require('./package.json')

version = version.replace(/\./g, '_')

const BASE_URL = process.env.VUE_APP_BASEURL

module.exports = {
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './', // 这个需根据项目部署具体位置进行确认
  // 输出文件目录
  outputDir: `./dist/${version}`,
  // 资源目录
  assetsDir: './',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 生产环境是否生成 sourceMap 文件（脚手架已做）
  // productionSourceMap: false,
  // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,
  // webpack相关配置
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true)
    // 移除 prefetch 插件 当 prefetch 插件被禁用时，你可以通过 webpack 的内联注释手动选定要提前获取的代码区块： import(/* webpackPrefetch: true */ './someAsyncComponent.vue')
    config.plugins.delete('prefetch')
    config.resolve.alias
      .set('@', resolve('src'))
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      // 开发环境
      config.mode = 'development'
    } else {
      // 生产环境
      config.mode = 'production'
      // gzip 压缩
      if (openGzip) {
        config.plugins = [
          ...config.plugins,
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 不删除源文件
          })
        ]
      }
      // 将每个依赖包打包成单独的js文件（vue-cli4 是有这个插件，但是只打到一个文件中）
      const optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 400000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        },
        minimizer: true,
        // 打包时去除打印信息（console）
        minimizer: [
          new TerserPlugin({
            // parallel: true, // 多核压缩代码 （脚手架已做）
            // cache: true, // 启用缓存/关闭缓存（脚手架已做）
            terserOptions: { // 压缩选项
              warnings: false,
              compress: {
                drop_console: true, // console
                drop_debugger: false,
                pure_funcs: ['console.log'] // 移除console
              }
            }
          }),
          new OptimizeCSSAssertsPlugin({}) // 压缩 css
        ]
      }
      Object.assign(config, {
        optimization,
        // 警告 webpack 的性能提示
        performance: {
          hints: 'warning',
          // 入口起点的最大体积
          maxEntrypointSize: 50000000,
          // 生成文件的最大体积 300KB
          maxAssetSize: 3001024,
          // 只给出 js 文件的性能提示
          assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js')
          }
        },
        output: {
          ...config.output,
          filename: `js/[name].[chunkhash].${version}.js`,
          chunkFilename: `js/[name].[chunkhash].${version}.js`
        }
      })
    }
  },
  // css相关配置
  css: {
    // 是否分离css（插件ExtractTextPlugin）
    extract: true,
    // 是否开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // css: {}, // 这里的选项会传递给 css-loader
      // postcss: {} // 这里的选项会传递给 postcss-loader
    }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
    // 是否启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,
  //  PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0', // 允许外部ip访问
    port: 2013, // 端口
    https: false, // 启用https
    hotOnly: true, // 启用热模块替换
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    // http 代理配置
    proxy: {
      '/mock': {
        target: BASE_URL,
        changeOrigin: true,
        // ws: true, // 允许websockets跨域
        pathRewrite: {
          '^/mock': '/mock'
        }
      }
    },
    before: (app) => { }
  },
  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 导入 css 通用变量
      patterns: [path.resolve(__dirname, './src/assets/css/common.less')]
    }
  }
}
