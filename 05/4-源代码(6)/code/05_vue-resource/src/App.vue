<template>
    <div>
        <input type="text" name="" v-model="id">

        {{text}}


        <mt-button type="danger" size="large" @click="send">点我发请求</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                id:'',
                text:''
            }
        },methods:{
            send(){
                // this.$http.get('http://localhost:3000/users/' + this.id)
                // .then( res=>{
                //     //成功后的回调函数
                //     console.log(res);
                //     this.text = res.body;
                // })
                // .catch( err =>{
                //     //失败的回调函数
                //     console.log(err);
                // });
                
                //get(url,options)
                //post(url,data,options)
                this.$http.post('http://localhost:3000/users',{
                    id:7,username:'7777'
                },
                // {
                //     emulateJSON:true
                // }
                )
                .then( res=>{
                    console.log(res.body);
                })
                .catch(err=>{
                    console.log(err);
                })


            }
        }
    }
</script>
<style scoped>
    
</style>