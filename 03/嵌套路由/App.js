export default{
    template:`
        <div>
            我是App
            <router-link :to="{name:'home.music'}">我的音乐</router-link>
            <router-link :to="{name:'home.movie'}">我的电影</router-link>
            <!-- 路由留坑 -->
            <router-view></router-view>
        </div>
    `
}