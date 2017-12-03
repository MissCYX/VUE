import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueResource from 'vue-resource';

//安装插件
Vue.use(MintUi);
Vue.use(VueResource);


 Vue.http.options.emulateJSON = true;

import App from './App.vue';

new Vue({
    el:'#app',
    render:c=>c(App)
})