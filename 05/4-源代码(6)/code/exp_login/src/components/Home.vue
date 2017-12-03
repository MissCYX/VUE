<template>
  <div>
      <router-link :to="{name:'login'}">登录</router-link>
      <mt-button type="danger" size="small" @click="exit">退出</mt-button>
      <router-link :to="{name:'music'}">音乐主页</router-link>
      <router-link :to="{name:'list'}">音乐列表</router-link>

      <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods:{
      exit(){
        //   点击发请求
          this.$axios.put('user/tjx',{
              isLogin:false
          })
          .then(res=>{
              this.$router.push({
                  name:'login'
              })
          })
      }
  },
  data(){
      return{
          
      }
  }
}
</script>
