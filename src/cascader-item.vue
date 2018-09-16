<template>
    <div class="cascaderItem" :style="{height:height}">
        <div class="left">
                <div class="label" v-for="item in items"
                @click="leftSelected = item">
                    {{item.name}}
                    <g-icon class="icon" v-if="item.children" name="right"></g-icon>
                </div>
        </div>
        <div class="right"  v-if="rightItems">
                <gulu-cascader-item :items="rightItems" :height="height"></gulu-cascader-item>
        </div>
    </div>
</template>

<script>
import Icon from './icon.vue';
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
        }
    },
    data(){
        return{
            leftSelected:null
        }
    },
    computed:{
        rightItems(){
            if(this.leftSelected && this.leftSelected.children){
                console.log(11,this.leftSelected.children)
                return this.leftSelected.children
            }else{
                return null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'var.scss';
    .cascaderItem {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100px;
        .left{
            height: 100%;
            padding-top: .3em;
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
