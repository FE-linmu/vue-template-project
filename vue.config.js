const packageJson = require('./package.json')
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.VUE_APP_BASEURL

module.exports = {
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: './',
  // 输出文件目录
  outputDir: `./dist/${packageJson.buildVersion}`,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,
  // webpack相关配置
  chainWebpack: (config) => {
    // 移除 prefetch 插件 当 prefetch 插件被禁用时，你可以通过 webpack 的内联注释手动选定要提前获取的代码区块： import(/* webpackPrefetch: true */ './someAsyncComponent.vue')
    config.plugins.delete('prefetch')
    // 自动化导入css文件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    // 修改文件的快捷方式
    config.resolve.alias
      .set('@', resolve('src'))
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.mode = 'production'
    } else {
      // 开发环境
      config.mode = 'development'
    }
  },
  // css相关配置
  css: {
    // 是否分离css（插件ExtractTextPlugin）
    extract: true,
    // 是否开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 是否启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // 是否使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: 'localhost',
    port: 2013,
    https: true,
    hotOnly: true, // 启用热模块替换
    // http 代理配置
    proxy: {
      '/mock': {
        target: BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '/mock'
        }
      }
    },
    before: (app) => { }
  },
  // 第三方插件配置
  pluginOptions: {

  }
}
// 使用 plugin 的方式引用公共 css 文件
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/css/common.less')
      ]
    })
}
