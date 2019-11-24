// const path = require('path')
import b from './b'

export default function(){
    b()
    //测试ES6的新API兼容
    const filterArr =  [1,2,3,4,5].filter(item => item > 3)
    // 抛出一个异常
    // throw new Error('11')
    console.log(filterArr)
    console.log('我是a')
    // console.log('我是a')
    console.log('我是a')
}