import Vue from 'vue';
import Axios from 'axios';

import App from './App.vue';
Vue.prototype.$axios = Axios;

new Vue({
    el:'#app',
    render:c=>c(App)
})