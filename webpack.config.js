const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
// 注意中文文档没有{},坑
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

require("@babel/polyfill");

module.exports = {
    // 入口
    entry : ["@babel/polyfill",'./src/index.js'],
    // 出口
    output:{
        // 生成js文件入口
        path : path.join(__dirname,"/dist"),
        // 打包文件名
        filename: 'main.js'
    },
    // 打包方式
    mode:'development',
    // 模块规则
    module: {
        rules: [
            // 处理css文件转化为，js模块，在生成style节点
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        //   处理图片
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {},
              },
            ],
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
              cacheDirectory: true
            }
          }
        },
        // 处理字体文件
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
        ]
      },
       // 插件
       plugins:[
        //  每次构建清除dist目录内容
         new CleanWebpackPlugin(),
        //  解决打包后的路径问题，将HTML也打包到dist的目录中
         new HTMLwebpackPlugin({title:"我是标题"})
       ]
}