// 引入扩展包
import VueRouter from '../vue-router.js'
import Vue from '../vue.js'
// 引入组件
import App from './App.js'
// import Home from './Home.js'
import HeaderVue from './components/HeaderVue.js'
import BodyVue from './components/BodyVue.js'
import FooterVue from './components/FooterVue.js'

// 安装插件
Vue.use(VueRouter)

// 创建路由对象
var router = new VueRouter({
    routes:[
        {name:'home',path:'/yourhome',components:{
            'a':HeaderVue,
            'b':BodyVue,
            'c':FooterVue
            }
        },
        {name:'home2',path:'/yourhome2',components:{
            'a':FooterVue,
            'b':BodyVue,
            'c':HeaderVue
            }
        },
        {name:'home3',path:'/yourhome3',components:{
            'a':FooterVue,
            'b':HeaderVue,
            'c':BodyVue
            }
        }
]
})
// router.addRoutes([])随时添加动态规则

// 把路由规则添加到vue中
new Vue({
    el:'#app',
    render:c=>c(App),
    router
})