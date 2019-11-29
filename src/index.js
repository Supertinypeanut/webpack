// 引入vue文件
import Vue from 'vue'
import App from './app'

// 引入router.js
import router from './router/router'

// 入口文件
import './style/index1.less'
import './style/index.css'
import 'bootstrap/dist/css/bootstrap.css'

// 引入math方法
import { cube } from './math.js';

// const path = require('path')
import a from '@/js/a.js'
a()
console.log('我手机')

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  return element;
}
document.body.appendChild(component());

new Vue({
  router,
  render: h => h(
    App)
}).$mount('#app')