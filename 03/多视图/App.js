export default{
    template:`
        <div>
            我是App        
            <router-link :to="{name:'home'}">组件绑定to属性去首页1</router-link>
            <router-link :to="{name:'home2'}">组件绑定to属性去首页2</router-link>
             <router-link :to="{name:'home3'}">组件绑定to属性去首页3</router-link>
            <!-- 路由留坑 -->
            <router-view></router-view>
        </div>
    `
}