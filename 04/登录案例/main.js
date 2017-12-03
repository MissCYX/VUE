import VueRouter from './vue-router.js'
import Vue from './vue.js'

import Home from './components/home.js'
import App from './components/App.js'
import Music from './components/music.js'
import List from './components/list.js'

Vue.use(VueRouter)

var Notfound = {
    template:`<div><h1>页面去旅行了。。。</h1></div>`
}
var router = new VueRouter();
router.addRoutes([
    // 重定向
    {path:'/',redirect:{
        name:'home'
    }},
    {name:'home',path:'/home',component:Home,children:[
        {name:'music',path:'music',component:Music,children:[
            {name:'music.list',path:'list',component:List}
        ]},
       
    ]},
    // 404
    {path:'*',component:Notfound}
]);
 // 路由守卫
// router.beforeEach()



new Vue({
    el:'#app',
    render:c=>c(App),
    router
})