import Vue from 'vue';

import App from './App.vue';

// import MyButton from './MyButton.vue';

// // console.log();
// Vue.component(MyButton.name,MyButton);


import MyUl from './MyUl.vue';
import MyLi from './MyLi.vue';
Vue.component(MyLi.name,MyLi);
Vue.component(MyUl.name,MyUl);




new Vue({
    el:'#app',
    render:c=>c(App)
})