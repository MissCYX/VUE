<template>
    <div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        created(){
              //默认配置
            this.$axios.defaults.baseURL = 'http://localhost:3000/users'
            this.$axios.defaults.headers.Accept= 'defaults';


           //添加一个请求拦截器
            this.$axios.interceptors.request.use(function(config){
                //在请求发送之前做一些事
                // console.log(config);
                //设置请求头
                config.headers.Accept = 'interceptor';

                // console.log(config);
                // config.url = null;
                // config.baseURL = null;
                return config;
            },function(error){
                //当出现请求错误是做一些事
                return Promise.reject(error);
            });

            //添加一个返回拦截器
            this.$axios.interceptors.response.use(function(response){
                //对返回的数据进行一些处理
                console.log(response)
                return response;
            },function(error){
                //对返回的错误进行一些处理
                return Promise.reject(error);
            });

          
            this.$axios.get('',{
                headers:{
                    Accept:'get'
                }
            })




        }

    }
</script>
<style>
    
</style>