export default{
    template:`
    <div>
        我是App
        <router-link :to="{name:'home'}">添加列表</router-link>
        <router-view></router-view>
    </div>
    `
}