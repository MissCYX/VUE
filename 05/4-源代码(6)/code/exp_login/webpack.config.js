'use strict'

const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    // 入口
    entry:{
        // 需要打包的文件
        'main':'./src/main.js'
    },
    // 出口
    output:{
        // 设置资源路径
        // dist在node_modules下的axious目录下
        path:path.join(__dirname,'dist'),
        // 设置文件名
        filename:'build.js'
    },
    // 资源解析
    module:{
        loaders:[
            {
                // css文件
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                // less文件
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                // 图片文件
                test:/\.(jpg|png|ttr|gif|svg)$/,
                loader:'url-loader',
                options:{
                    limit:4096,
                    name:'[name].[ext]'  //名称为文件名+文件后缀名
                }
            },
            {
                // ES6js文件
                test:/\.js$/,
                // 除去node_module中js文件，只处理自己写的文件
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                // vue文件
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    // main.js文件应用于index.html中
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}