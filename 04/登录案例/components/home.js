export default{
    template:`
    <div>
        我是home
        <a>登录</a>
        <a>退出</a>
        <router-link :to="{name:'music'}">音乐首页</router-link>
        <router-view></router-view>
    </div>
    `
}