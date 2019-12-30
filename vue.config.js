const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/pro/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
      .set('_a', resolve('src/assets'))
      .set('_r', resolve('src/router'))
      .set('_s', resolve('src/store'))
  },
  productionSourceMap: false, // 打包时不生成.map文件
  devServer: {
    proxy: 'http://localhost:8080'
  }
}
