const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
// 注意中文文档没有{},坑
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
// 引入Vue Loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

require('@babel/polyfill')

module.exports = {
  // 入口
  entry: ['@babel/polyfill', './src/index.js'],
  // 出口
  output: {
    // 生成js文件入口
    path: path.join(__dirname, '/dist'),
    // 打包文件名
    filename: 'main.js'
  },
  resolve: {
    // 省略扩展名
    extensions: ['.js', '.vue', '.json'],
    // 设置路径变量
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  // 打包方式，开发模式不压缩代码
  mode: 'development',
  // 优化
  optimization: {
      usedExports: true
  },
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
  // 模块规则
  module: {
    rules: [
      // 处理css文件转化为，js模块，在生成style节点
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      //   处理图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      //   处理less文件
      {
        test: /\.less$/,
        // loader: 'less-loader' // 将 Less 编译为 CSS
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      // 配置ESlint
      // {
      //   // 强制提前
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   // 排除node_modules
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
      // 处理ES5+的语法，兼容低浏览器
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 转码规则
            presets: ['@babel/preset-env'],
            // 开启缓存，他会把上一次打包的结果缓存起来，提高打包效率·1
            cacheDirectory: true,
            // 开启bable辅助代码
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      // 处理字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // VueLoader插件
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  // 插件
  plugins: [
    //  每次构建清除dist目录内容
    new CleanWebpackPlugin(),
    //  解决打包后的路径问题，将HTML也打包到dist的目录中
    new HTMLwebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    //  热模块插件
    new webpack.HotModuleReplacementPlugin(),
    //  VueLoader插件
    new VueLoaderPlugin()
  ]
}
