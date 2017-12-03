<template>
    <div>
      <!--   <my-button type="danger">
           <ul>
               <li>111</li>
               <li>222</li>
               <li>333</li>
           </ul>
        </my-button> -->

        <my-ul>
            <my-li v-for="num in nums">
                <a href="">{{num}}</a>
                <img src="./find.png" />
            </my-li>
        </my-ul>



    </div>
</template>
<script>
    export default {
        data(){
            return {
                nums:[1,2,3]
            }
        }
    }
</script>
<style scoped>

</style>