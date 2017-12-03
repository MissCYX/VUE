export default{
    template:`
        <div style="background-color:skyblue">
        我是音乐首页
        <router-link :to="{name:'music.list'}">点击进入列表</router-link>
        <router-view></router-view>
        </div>
    `
}