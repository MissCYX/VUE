<template>
    <div>
        <button @click="send1">请求1</button>
         <button @click="send2">请求2</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            send1(){
                this.$axios.get('http://localhost:3000/users')
                .then(res=>{
                    console.log(res.data);
                })
            },
            send2(){
                 this.$axios.get('http://localhost:3000/users')
                .then(res=>{
                    console.log(res.data);
                })
            }
        }

    }
</script>
<style>
    
</style>