import Vue from 'vue';//单文件方式直接引入
//引入的是js文件，内部包含template属性，必须使用vue/dist/vue.js引入

// console.log(Vue);
import VueRouter from 'vue-router';

import Home from './Home.vue';
import App from './App.vue';

//安装插件
Vue.use(VueRouter);

//配置路由规则
let router = new VueRouter();
router.addRoutes([
    { name:'home',path:'/home',component:Home}
])

//创建Vue实例启动
new Vue({
    el:'#app',
    render:c=>c(App),
    router
});