export default{
    template:`
        <div>
        我是音乐列表页
            <ul style="background-color:yellowgreen">
                <li v-for="(gequ,index) in gequs" :key="index">{{gequ.name}}</li>
            </ul>
        </div>
    `,
    data:function(){
        gequs:gequs=[{id:'1',name:'漂洋过海来看你'},{id:'2',name:'红玫瑰'},{id:'3',name:'远走高飞'},{id:'4',name:'带你去旅行'}]
    }
}