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
// import { cube } from './js/math.js';

import _ from 'lodash';



if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// function component() {
//   var element = document.createElement('pre');
//   element.innerHTML = [
//     'Hello webpack!',
//     '5 cubed is equal to ' + cube(5)
//   ].join('\n\n');
//   return element;
// }

function component() {
var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');
  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './js/print').then(module => {
    var print = module.default;
    print();
  });
 return element;
}

document.body.appendChild(component());

new Vue({
  router,
  render: h => h(
    App)
}).$mount('#app')