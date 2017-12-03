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
                // this.$axios.get('http://localhost:3000/users/' + this.id)
                // .then( res=>{
                //     // console.log(res);
                //     this.text = res.data;
                // })
                // .catch( err=>{
                //     console.log(err);
                // })
                
                //post请求
                //  this.$axios.post('http://localhost:3000/users',
                //    {
                //         id:11,username:'11-11'
                //    },{
                //        transformRequest:function(obj){
                //         var str = '';
                //             for (var key in obj) {
                //                 str += key +'=' + obj[key] + '&'
                //             }
                //             console.log(str.substr(0,str.length -1));
                //             return str.substr(0,str.length -1);
                //        }
                //    }
                // )
                // .then( res=>{
                //     // console.log(res);
                //     this.text = res.data;
                // })
                // .catch( err=>{
                //     console.log(err);
                // })
                // this.$axios.delete('http://localhost:3000/users/' + this.id)
                // .then(res=>{
                //     console.log(res);
                // })
                // .catch(err=>{
                //     console.log(err);
                // })

                this.$axios.put('http://localhost:3000/users/'+ this.id,'username=哈哈')
                .then(res=>{
                    console.log(res.data);
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