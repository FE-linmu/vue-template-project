const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/pro/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('config', resolve('src/config'))
      .set('service', resolve('src/service'))
      .set('plugins', resolve('src/plugins'))
  },
  productionSourceMap: false, // 打包时不生成.map文件
  devServer: {
    proxy: 'http://localhost:1230'
  }
}
