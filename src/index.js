// 引入vue文件
import Vue from 'vue'
import App from './app'

// 引入router.js
import router from './router/router'

// 入口文件
import './style/index1.less'
import './style/index.css'
import 'bootstrap/dist/css/bootstrap.css'


// const path = require('path')
import a from '@/js/a.js'
a()
console.log('我手机')

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')