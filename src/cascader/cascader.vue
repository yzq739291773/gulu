<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
           {{result || '&nbsp;'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <gulu-cascader-item 
                :height="height" 
                :items="source"
                :selected="selected"
                @update:selected="onUpdateSelected"
                class="popover" ></gulu-cascader-item>
        </div>
    </div>
</template>

<script>
import cascaderItem from './cascader-item.vue'
export default {
    name:'GuluCascader',
    components:{
        'GuluCascaderItem':cascaderItem
    },
    props:{
        source:{
            type:Array
        },
        height:{
            type:String
        },
        selected:{
            type:Array,
            default:()=>{return []}
        },
        loadData:{
            type:Function,
        }
    },
    data(){
        return{
            popoverVisible:false,
        }
    },
    computed:{
        result(){
            return this.selected.map(item=>item.name).join('/')
        }
    },
    methods:{
        onUpdateSelected(newSelected){
            this.$emit('update:selected',newSelected)
            let lastItem = newSelected[newSelected.length-1]
            let simpleset = (children, id)=>{
                return children.filter(item => item.id === id)[0]
            }
            let complex = (children, id) =>{
                let noChildren = []
                let hasChildren = []
                children.forEach(item =>{
                    if(item.children){
                        hasChildren.push(item)
                    }else{
                        noChildren.push(item)
                    }
                })
                let found = simpleset(noChildren, id)
                if(found){
                    return found;
                }else{
                    found = simpleset(hasChildren, id)
                    if(found){
                        return found;
                    }else{
                        for(let i =0; i<hasChildren.length; i++){
                            found = complex(hasChildren[i].children, id)
                            if(found){
                                return found;
                            }
                        }
                        return undefined
                    }
                }
            }
            let updateSource = (result)=>{
                let copy = JSON.parse(JSON.stringify(this.source))
                let toUpdate = complex(copy, lastItem.id)
                toUpdate.children = result
                this.$emit('update:source',copy)
            }
            this.loadData(lastItem, updateSource)
        }
    }

}
</script>

<style lang="scss" scoped>
    @import '../var';
    .cascader{
        position: relative;
        .trigger{
            border: 1px solid $border-color;
            height: $button-height;
            display: inline-flex;
            align-items: center;
            padding: 0 1em;
            min-width: 10em;
            width: 200px;
            border-radius: $border-radius;
        }
        .popover-wrapper{
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            display: flex;
            margin-top: 4px;
            .popover{
                @extend %box-shadow
            }
            
        }
    }
</style>
