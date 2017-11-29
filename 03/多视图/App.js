export default{
    template:`
        <div>
            我是App
            <a href="#/yourhome">去首页</a>
            <router-link to="/yourhome">组件去首页</router-link>
            
            <router-link :to="{name:'home'}">组件绑定to属性去首页</router-link>
            <!-- 路由留坑 -->
            <router-view></router-view>
        </div>
    `
}