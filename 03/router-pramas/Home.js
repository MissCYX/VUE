export default{
    template:
    `<div style="background-color:greenyellow">
        <ul>
            <li v-for="(hero,index) in heros" :key="index">
            {{hero.name}}
            <router-link :to="{name:'detail',query:{id:hero.id}}">查看详情</router-link>
            </li>  
        </ul>
    </div>`
    ,
    data:function(){
        return {
            heros:[{id:'1',name:'夏侯惇'},{id:'2',name:'诸葛亮'},{id:'3',name:'周瑜'},{id:'4',name:'曹操'},{id:'5',name:'刘备'}]
        }
    }
}