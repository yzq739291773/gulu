<template>
    <div class="cascaderItem" :style="{height:height}">
        <div class="left">
            <div class="label" v-for="item in items" @click="onClickTab(item)">
                {{item.name}}
                <g-icon class="icon" v-if="item.children" name="right"></g-icon>
            </div>
        </div>
        <div class="right"  v-if="rightItems">
            <gulu-cascader-item 
                ref="right"
                :items="rightItems" 
                :height="height"
                :selected="selected"
                @update:selected="onUpdateSelected"
                :level="level + 1"></gulu-cascader-item>
        </div>
    </div>
</template>

<script>
import Icon from '../icon/icon.vue';
export default {
    name:'GuluCascaderItem',
    components:{
        'g-icon':Icon
    },
    props:{
        items:{
            type:Array
        },
        height:{
            type:String
        },
        selected:{
            type:Array,
            default:()=>{
                return []
            }
        },
        level:{
            type:Number,
            default:0
        }
    },
    data(){
        return{
        }
    },
    computed:{
        rightItems(){
            if(this.selected[this.level]){
                let selected = this.items.filter(item =>{
                    item.name === this.selected[this.level].name
                })
                if(selected && selected[0].children &&selected[0].children.length>0){
                    return selected[0].children
                }
            }
            // let currentSelected = this.selected[this.level]
            // if(currentSelected && currentSelected.children){
            //     return currentSelected.children
            // }else{
            //     return null
            // }
        }
    },
    methods:{
        onClickTab(item){
            // 1.子组件不能直接修改props
            // 2.数组这种数据直接修改后，vue是捕捉不到他的修改的，自然不会渲染dom,因此需要拷贝
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy[this.level] = item
            copy.splice(this.level+1)
            this.$emit('update:selected',copy)
        },
        onUpdateSelected(newSelected){
            this.$emit('update:selected',newSelected)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../styles/var';
    .cascaderItem {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100px;
        .left{
            height: 100%;
            padding-top: .3em;
            overflow: auto;
            .icon{
                transform: scale(0.5)
            }
        }
        .right{
            
            height: 100%;
            border-left: 1px solid $border-color-light;
        }
        .label{
            padding: .3em 1em;
        }
    }
</style>
