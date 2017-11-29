import Vue from '../vue.js';
import VueRouter from '../vue-router.js'
import App from './App.js'
import Home from './Home.js'
import Detail from './Detail.js'

// 安装插件
Vue.use(VueRouter)
var router = new VueRouter()
router.addRoutes([
    {name:'home',path:'home',component:Home},
    {name:'detail',path:'/detail',component:Detail}
])
new Vue({
    el:'#app',
    render:c=>c(App),
    router
})