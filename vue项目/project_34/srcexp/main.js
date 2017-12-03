import Vue from 'vue';

// 相关组件
import App from './component/App.vue';
import Home from './component/Home.vue'





// Vuerouter

import VueRouter from 'vue-router'
// 安装
Vue.use(VueRouter);
var router = new VueRouter()
// 
router.addRoutes([
    { path:'/',redirect:{
        name:'home'
    }},
    {name:'home',path:'/home',component:Home}
])

// MintUI
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)



import Axios from 'axios';
Vue.prototype.$axios = Axios;
//配置默认基础url
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';
//this.$axios === Axios



new Vue({
    el:'#app',
    render:c=>c(App),
    router
})