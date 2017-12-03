<template>
    <div :style="'background-color:'+color">
    <!-- 插槽，留坑 -->
            <slot></slot>
    </div>

  <!--   <div :class="myClass">
        按钮
    </div> -->
</template>
<script>
    export default {
        data(){
            return {
                myClass:'',
                color:''
            }
        },
        name:'my-button',
        props:['type'],
        created(){
            console.log(this.type);
            //default danger primary
            this.myClass = this.type;
            switch(this.type){
                case 'default':
                this.color = '#666';
                break;
                 case 'danger':
                this.color = 'red';
                break;
                 case 'primary':
                this.color = 'blue';
                break;
            }
        }
    }
</script>
<style scoped>
    .default{
        background-color: #666;
    }
    .danger{
        background-color: red;
    }
    .primary{
        background-color: skyblue;
    }
</style>