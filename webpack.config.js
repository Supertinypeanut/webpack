const path = require('path')

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
    mode:'development'
}