<template>
        <li>
            <!-- <a href="">{{num}}</a> -->
            <slot></slot>

             
           
            


            <div class="icon">
        <!--  <img src="./find.png" slot="icon" /> -->
                <slot name="icon"></slot>
            </div>
        </li>
</template>
<script>
    export default { 
        name:'my-li',
        data(){
            return {

            }
        }
    }
</script>
<style>
.icon img {
    width: 20px;
}

</style>