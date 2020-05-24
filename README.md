[vue实战 | vue移动端项目架构设计](https://juejin.im/post/5e06b01ae51d45584e589fd4)

> 项目相关备注

* 相关人员 `有多人情况下全部列出` 
  + 业务分析师:
  + 前端开发人员:
  + 后台开发人员:

* 环境地址 `有更多环境依次补全, 以下详情有则补充` 
  + 测试环境
    - 测试环境页面访问地址:
    - 测试环境接口地址:
    - 测试环境部署方式:

  + 生产环境
    - 生产环境页面访问地址:
    - 生产环境接口地址:
    - 生产环境部署方式:

* 补充说明:

vue-cli4 做了哪些功能（已验证）：

1. code spliting 代码分割，将代码按照 html/css/js 的文件进行分 chunk 打包

2. tree shaking 将没有引用到的代码不打包，减少打包的体积和速度

3. hash 实现持久化缓存，当你改变某个文件时，会进行 chunkhash 的改变打包，但当你没有改变文件时，它打包的文件名称和原来的 chunkhash 是一样的

4. 在打包指令加上 --report，可以自动生成一个 report\. html 文件，这个文件可以查看你当前项目引用的文件大小，可以很方便的针对大文件库进行针对性的优化，之前需要引用 webpack 插件（webpack-bundle-analyzer）

5. 使用 --modern 构建现代模式的话需要后端做 cors 的配置

6. 没搞明白 --target 在实际场景上有啥用

7. vue-cli-service inspect 可以查看 vue-cli4 集成的 webpack 配置

自己针对 webpack 做的内容：

1. 利用 splitChunks 将每个依赖包单独打包（脚手架只打两个包），在生产环境下配置，优化打包 `chunk-vendors.js` 文件体积过大

2. terser-webpack-plugin 开启多核压缩 js 代码（脚手架做了），并取消测试环境和生产环境的 `console. log()` 打印

3. compression-webpack-plugin 开启 gzip 压缩，gizp 压缩是一种 http 请求优化方式，通过减少文件体积来提高加载速度。html、js、css 文件甚至 json 数据都可以用它压缩，可以减小60%以上的体积。 webpack 在打包时可以借助 compression webpack plugin 实现 gzip 压缩

4. 借助 package.json 的 version 对hash进行二次控制（可加可不加，不加的话如果文件没更改，打包出来的文件可以默认使用上一版本的 hash 文件）

5. 压缩css

* 迭代说明：
