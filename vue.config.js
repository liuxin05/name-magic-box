// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
// 修改配置后一定要 重新npm run serve !!!
module.exports = {
  devServer: {
    // vue项目启动时的ip地址和端口
    host: 'localhost',
    port: 8080,
    proxy: {
      // 匹配所有以 /api 开头的url
      '/api': {
        // 请求的目标主机
        target: 'http://140.143.140.160',
        changeOrigin: true,
        ws: true,
        allowedHosts: 'all'
        // 这样重写会把路径中 /api 消去
        // pathRewrite: {
        //   '^/api': '/api'
        // }
      }
    },
  },
  outputDir: 'dist',
  css: {
    // loaderOptions: {
    //   postcss: {
    //     plugins: [
    //       autoprefixer({
    //         overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    //       }),
    //       pxtorem({
    //         rootValue: 37.5,         // 根据设计稿的基准尺寸设置。一般是iphone6的375*667为基准或者2倍尺寸
    //         propList: ['*', '!font*'],// !不匹配属性（这里是字体相关属性不转换）
    //         unitPrecision: 3,        // 最小精度，小数点位数
    //         minPixelValue: 2          // 替换的最小像素值
    //       })
    //     ]
    //   }
    // }
  }

}
