
import Vue from '../vue.js';
import VueRouter from '../vue-router.js';
import Home from './Home.js'
import App from './App.js'

// 使用VUe安装插件
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter()
// 配置路由规则
router .addRoutes([{
    // path 代表锚点值，
    path:'/home',
    // 代表要填坑的组件，要锚点值匹配才显示
    component:Home 
}]);
// 将配置好的路由对象交给vue
new Vue({
    el:'#app',
    render:c=>c(App),
    router:router
})