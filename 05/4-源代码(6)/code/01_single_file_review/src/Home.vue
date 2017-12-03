<template>
<!-- 只能一个根节点 -->
    <div>
         {{text}}
         312213
         {{name}}
         <button>111</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                text:'我是home首页',
                name:'abc'
            }
        }
    }
</script>
<!--  样式在组件内template生效 -->
<style scoped>
   div{
    background-color: red;
   }
</style>