<template>
    <div>
            <mt-header title="黑马前端34"></mt-header>
            <router-view class="tmpl"></router-view>
            <mt-tabbar :selected.sync="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="../static/img/index.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="member">
                <img slot="icon" src="../static/img/vip.png">
                会员
            </mt-tab-item>
            <mt-tab-item id="shopcart">
                <img slot="icon" src="../static/img/shopcart.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="search">
                <img slot="icon" src="../static/img/find.png">
                查找
            </mt-tab-item>
            </mt-tabbar>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                selected:''
            }
        }
    }
</script>
<style scoped>
    .mint-tabbar{
        position: fixed;
        bottom:0; 
    }
</style>