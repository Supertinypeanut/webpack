const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  // 打包方式，开发模式不压缩代码
  mode: 'development',
  // 开启source-map
  devtool: 'inline-source-map',
  // 开启webpack-dev-server,可以实时重新加载
  devServer: {
    // 打包路径
    contentBase: './dist',
    // 开启热块
    hot: true,
    // 关闭自动打开
    open: false
  },
});