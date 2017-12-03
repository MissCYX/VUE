### 准备开始
---
#### 学员反馈
json server 很懵 乱
*** loader编译文件能在说下么
    前期开发掌握loader及plugin是使用、及对应的效果
    loader的加载是从右向左的
*** 不是说客户端都不可信吗 为社么把权限控制放在客户端
    build.js中已经包含了变化的页面数据，响应到客户端了
    全局路由钩子中向后台发起请求，获取是否登录信息

 对于不能引入vue.js文件还是不太理解，难道里面没有es6的语法就不能直接引入么 还有为什么要exclude:/node_modules/呢 不是引入的是node_modules下面的vue么

        import Vue from 'vue';   -> 在组件为xx.js的情况下,改成vue/dist/vue.js就ok
        xx.js  ->  module.exports = {  template:'xxx' }
        不可以使用template属性,vue/dist/vue.js  内部给对象提供了template属性支持

        import Vue from 'vue';  引入的是另一个文件A
        import Vue from 'vue/dist/vue.js '; 引入的是另一个文件B

            引入正确后不要给第三方包做es5代码的转换


谢谢老师了   
再就是打扰了  还有就是
1-http://请求的 和  file:// 这块有点模糊 
    file:访问本地资源,不需要网络
    http:访问服务器资源,需要网络
 ajax请求要基于http  还有哪些情况需要http请求..  
2-还有之前我们用express创建的服务器还有 apache服务器 还有 你用的 sublime server 服务器的区别 
        总体没有区别

        (node  后台语言 + 服务器) = 编写服务器响应逻辑
        apache服务器 = php文件要存在 + pache服务器
             xxx.php是要存在的
        sublime server 是一个只具备请求url与当前文件路径匹配返回文件的功能的服务器

3-  node是基于common.js的体现在require和module.exports;    vue是基于es6的体现在export default和import from 的吗?
    webpack 可以解析ES6和commonjs  来分析依赖关系
    vue 属于前端框架，最好用前端模块化代码对其编写


4-还有就是我从论坛上看到很多关于vue的组件,要怎么用,或者以后项目主会用到吗,有必要学吗,里面有个饿了吗提供的组件库element-ui,看着向bootstrap,有什么区别.........https://segmentfault.com/p/1210000008583242/read?from=timeline
5-今天有个同学找到工作了  有点慌..之前有好多问题也不知该怎么问........vue在面试中会问道什么呢 简历怎么写
6-附件中有个xmind,最近整理的本来今天想整理完的,在看之前乐淘项目时有点乱 最近的还没整理完  老师后面的项目多说说踩坑点




#### 复习

#### 今日重点
* ajax请求

#### webpack-dev-server
* 能让src下的代码运行起来
    - 自动刷新
    - 不刷新的情况下改变css即时显示效果
* 既可以全局安装，也可以在项目中使用
    - 通过环境变量查找到包.cmd文件来启动


#### 使用npm 命令项目启动工具
* package.json scripts属性 是一个命令行命令的缩写
    - "scripts":{ "dev":"webpack-dev-server"   }
    - `npm run dev` 运行对应的命令
    - 当你npm run 命令的时候,npm会自动将当前node_modules/.bin加入到临时环境变量中

#### 总结
* 你编写好程序，让用户安装全局命令行工具，不可能的
* 下载到项目中，为了让用户能使用到项目中的全局工具
    - 命令行工具启动:  1:当前目录  项目下的/node_modules/.bin
    - 2:使用npm run xxxx  自动配置 项目下的/node_modules/.bin到环境变量
    - 3:就可以直接运行了

#### webpack-dev-server
* --inline 自动刷新(自动替换达不到效果的时候，会触发刷新)
* --hot 热替换(不刷新就直接替换内容)
* --open 自动打开浏览器
* --port 设置一个端口号

#### mint-ui
* 饿了么出品， 自己用vue代码编写的组件，给大家提供来使用
* PC端的 element-ui
* 移动端的 mint-ui
    - 使用都是差不多

#### slot介绍
* 爷爷不管孙子(样式也不管多级DOM父子关系)，只有爸爸和自己能管
* DOM的层级，只管一级
* slot也可以具名
    - 根据具名的内容，单独的设置样式
* 父组件填坑`<img src="" slot="icon" /> `
* 子组件声明`<slot name="icon"></slot>`
    - slot组件不能设置样式名,从外层的元素通过标签跨域设置

#### ajax请求
---

#### vue-resource
* vue开发团队开发的插件，其内部封装了ajax
* github上到6/7千星，vue作者不再维护了，并推荐使用axios

#### axios
* https://segmentfault.com/a/1190000008470355?utm_source=tuicool&utm_medium=referral

#### 默认设置dedaults

#### 拦截器

#### 小练习
* 漂亮的登录


#### 合并请求

#### 顺序请求

#### 搭建项目建构
* 区分开发生产依赖

