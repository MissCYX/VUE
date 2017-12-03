import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';

//安装插件
Vue.use(MintUi);

import Axios from 'axios';
Vue.prototype.$axios = Axios; //所有的组件共享$axios


import App from './App.vue';

new Vue({
    el:'#app',
    render:c=>c(App)
})