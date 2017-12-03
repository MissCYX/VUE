// 加载路径来自node_modules
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './Home.vue';

Vue.use(VueRouter);

let router = new VueRouter()
router.addroutes([
    {name:'home',path:'/home',component:Home}
])

new Vue({
    el:'#app',
    render:c=>(App),
    router
})