import Vue from 'vue';
import Axios from 'axios';

import App from './App.vue';

import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);



Axios.interceptors.request.use(function(config){
    //请求发起前
    MintUi.Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    return config;
});
Axios.interceptors.response.use(function(config){
    //响应回来后
    MintUi.Indicator.close();
    return config;
});
Vue.prototype.$axios = Axios;





new Vue({
    el:'#app',
    render:c=>c(App)
})