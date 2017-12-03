// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'



// 安装
Vue.use(VueRouter);
Vue.use(MintUi);
Vue.prototype.$axios = Axios;


// 拦截器
// 请求拦截
Axios.interceptors.request.use(function(config){
    // 加载中插件
    MintUi.Indicator.open({
        text:'稍等一下下。。。',
        spinnerType:'fading-circle'
    });
    return confiig;
});
Axios.interceptors.response.use(function(config){
    MintUi.Indicator.close();
    return config
})

// 默认配置
// baseUrl
Axios.defaults.baseURL = 'http://localhost:3000/';

// 设置路由
let router = new VueRouter();

router.addRoutes([
    {name:'home',path:'/home',component:Home,children:[
        {name:'login',path:'login',component:Login},
        {name:'music',path:'music',meta:{check:true},component:Music,children:[
            {name:'list',path:'list',component:List}
        ]}
    ]}
])

// 设置全局路由
router.beforeEach((to,from,next)=>{
    // console.log(to);
    // next();//放行

    let checkLogin = false;
    to.matched.forEach(ele=>{
        if(ele.meta.check){
            checkLogin = true
        }
    });

    if(checkLogin){
        Axios.get('users/tjx')

    }
})








new Vue({
    el:'#app',
    render:c=>(App),
    router
})