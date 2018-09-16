<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
           
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascaderItem :height="height" :items="source" class="popover" ></cascaderItem>
        </div>
    </div>
</template>

<script>
import cascaderItem from './cascader-item.vue'
export default {
    name:'GuluCascader',
    components:{
        cascaderItem
    },
    props:{
        source:{
            type:Array
        },
        height:{
            type:String
        }
    },
    data(){
        return{
            popoverVisible:false,
        }
    },
    computed:{
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
