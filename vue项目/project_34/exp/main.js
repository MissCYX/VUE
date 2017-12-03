// 引入资源
import Vue from 'vue';


// 路由相关组件 开始
import App from './components/App.vue';
import Home from './components/Home/Home.vue'


// 注册全局组件
import MyUl from './components/Commen/Ul.vue'
import MyLi from './components/Commen/Li.vue'
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)


// 路由相关组件 结束

// VueRouter 开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
    // 重定向 到首页
    { path:'/',redirect:{
        name:'home'
    }},
    {name:'home',path:'/home',component:Home},//首页
]);
// VueRouter 结束


// 考虑未来可能有样式的覆盖，在之后再引入自己的css
import './static/css/global.css';

// MintUi 开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
// MintUi 结束



// Axios 开始
import Axios from 'axios';
Vue.prototype.$axios = Axios;
//设置默认URL请求基础路径
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';
// Axios 结束


new Vue({
    el:'#app',
    render:c=>c(App),
    router
});