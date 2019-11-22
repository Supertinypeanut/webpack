const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry : './src/index.js',
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
         
        ]
      },
       // 解决打包后的路径问题，将HTML也打包到dist的目录中
       plugins:[
         new HTMLwebpackPlugin()
       ]
}