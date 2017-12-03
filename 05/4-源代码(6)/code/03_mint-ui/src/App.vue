<template>
    <div>
        <mt-header title="固定在顶部"></mt-header>
        <mt-swipe :auto="4000">
          <mt-swipe-item>11111</mt-swipe-item>
          <mt-swipe-item>22222</mt-swipe-item>
          <mt-swipe-item>3333</mt-swipe-item>
        </mt-swipe>


    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    改变大小
    <mt-button size="small">small</mt-button>
    <mt-button size="large" type="danger" @click="show">large</mt-button>
    <mt-button size="normal">normal</mt-button><hr/>
    禁用按钮
    <mt-button disabled>disabled</mt-button><hr/>
    幽灵按钮
    <mt-button plain type="danger">plain</mt-button><hr/>
    带图标
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">更多</mt-button><hr/>
    自定义图标
    <mt-button>
      <img src="./find.png" height="200" width="200" slot="icon">
      带自定义图标
    </mt-button>

        <mt-switch v-model="value"></mt-switch>

        <mt-tabbar v-model="selected">
          <mt-tab-item id="外卖">
            <img slot="icon" src="">
            外卖
          </mt-tab-item>
          <mt-tab-item id="订单">
            <img slot="icon" src="">
            订单
          </mt-tab-item>
          <mt-tab-item id="发现">
            <img slot="icon" src="">
            发现
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon" src="">
            我的
                <mt-badge type="error" size="large">10</mt-badge>
          </mt-tab-item>
        </mt-tabbar>

    </div>
</template>
<script>
// import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
    export default {
        methods:{
            show(){
                // Toast({
                //   message: '提示',
                //   position: 'bottom',
                //   duration: 5000
                // });
                // this.$toast('哈哈');

                // this.$indicator.open({
                //   text: '加载中...',
                //   spinnerType: 'fading-circle'
                // });

                // setTimeout(()=>{
                //     this.$indicator.close();
                // },2000);

                // this.$messageBox('提示', '操作成功');
                MessageBox('提示', '操作成功')

            }
        },
        data(){
            return {
                selected:'',
                value:true
            }
        },
        watch:{
            selected:function(newV,oldV){
                console.log(newV);
            }
        }
    }
</script>
<!-- 只影响template中的元素 -->
<style scoped>
  .mint-swipe{
    height: 50px;
  }  
</style>