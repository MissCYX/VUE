// 引入扩展包
import VueRouter from '../vue-router.js'
import Vue from '../vue.js'
// 引入组件
import App from './App.js'
import Home from './Home.js'

// 安装插件
Vue.use(VueRouter)

// 创建路由对象
var router = new VueRouter({
    routes:[{
        name:'home',path:'/yourhome',component:{
            'a':HeaderVue,
            
        }
    }]
})
// router.addRoutes([])随时添加动态规则

// 把路由规则添加到vue中
new Vue({
    el:'#app',
    render:c=>c(App),
    router
})