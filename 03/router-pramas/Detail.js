export default{
    template:`<div>我是详情{{hero}}</div>`,
    data(){
        return {
            heros:[{id:'1',name:'夏侯惇'},{id:'2',name:'诸葛亮'},{id:'3',name:'周瑜'},{id:'4',name:'曹操'},{id:'5',name:'刘备'}],
            hero:''
        }
    },
    created(){
        //查找元素
        var id = this.$route.query.id||this.$route.params.mid;
        this.hero = this.heros.find( ele => ele.id == id)

    }
}