<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
           {{result}}
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
        }
    }

}
</script>

<style lang="scss" scoped>
    @import 'var.scss';
    .cascader{
        position: relative;
        .trigger{
            border: 1px solid black;
            height: 32px;
            width: 200px;
        }
        .popover-wrapper{
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            display: flex;
            .popover{
                @extend %box-shadow
            }
            
        }
    }
</style>
