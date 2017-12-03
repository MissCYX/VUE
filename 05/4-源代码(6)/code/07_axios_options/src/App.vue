<template>
    <div>
            <button @click="send">发送</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            send(){

                //默认全局设置
                this.$axios.defaults.headers = { accept:'default'  };

                //基础URL
                this.$axios.defaults.baseURL = 'http://localhost:3000/';


                // this.$axios.get('users',{
                //     //查询字符串
                //     params:{
                //         id:'1',age:'2'
                //     }
                // })
                // .then(res=>{
                //     console.log(res.data);
                // })
                // .catch(err=>{
                //     console.log(err);
                // });


                //有个性化就是get
                this.$axios.get('users',{
                    //追加
                   headers:{
                        accept:'get'
                   },
                   transformResponse:function(obj){
                        // console.log(obj); 
                        //获取到字符串数据，自定义的转换响应数据
                        return 'A';
                   }
                })
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    console.log(err);
                });



            }
        }
    }
</script>
<style>
    
</style>