import Vue from 'vue';
import MintUi from 'mint-ui';
//引入css 
import 'mint-ui/lib/style.css';
import App from './App.vue';


//安装插件
Vue.use(MintUi);
//1:注册所有的全局组件，直接使用就ok
//2：给Vue的原型挂载一些属性，动态组件效果
new Vue({
    el:'#app',
    render:c=>c(App)
})