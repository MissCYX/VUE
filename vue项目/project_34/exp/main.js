// 引入资源
import Vue from 'vue';
import Preview from 'vue-preview';

// 路由相关组件 开始
import App from './components/App.vue';
import Home from './components/Home/Home.vue';
import NewsList from './components/News/NewsList.vue';
import NewsDetail from './components/News/NewsDetail.vue'
import PhotoList from './components/Photo/PhotoList.vue';
import PhotoDetail from './components/Photo/PhotoDetail.vue';

// 注册全局组件
import MyUl from './components/Commen/Ul.vue'
import MyLi from './components/Commen/Li.vue'
import NavBar from './components/Commen/NavBar.vue'
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
Vue.component(NavBar.name,NavBar)


// 路由相关组件 结束


// 注册全局过滤器开始
import Moment from 'moment';
// 处理时间
Vue.filter('convert-time',(value)=>{
    if(!value){
        return
    }
    return Moment(value).format('YYYY-MM-DD');
});
// 处理title
Vue.filter('convert-title',(value,limit)=>{
    if(!value){
        return
    }
    if(value.length > limit){
      return  value.substr(0,limit) + '...'
    }
    return value;
})



// 注册全局过滤器结束






Vue.use(Preview);

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
    {name:'news.list',path:'/news/list',component:NewsList},//新闻列表页
    {name:'news.detail',path:'news/detail',component:NewsDetail},//新闻详情页
    {name:'photo.list',path:'/photo/list/:categoryId',component:PhotoList},//图文分享
    {name:'photo.detail',path:'/photo/detail/:imgId',component:PhotoDetail}  //图文详情
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