<template>
        <ul>
            <slot></slot>
        </ul>
</template>
<script>
    export default {
        name:'my-ul',
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
/*li是当前组件的儿子，管儿子*/
    li{ 
        list-style: none;
    }
   .test{
        background-color: red;
   }
</style>