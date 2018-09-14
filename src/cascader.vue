<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
        </div>
        <div class="popover" v-if="popoverVisible">
            <cascaderItem :items="source"></cascaderItem>
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
        .trigger{
            border: 1px solid red;
            height: 32px;
            width: 200px;
        }
        .popover{
            border: 2px solid green;
            height: 200px;
            width: 200px;
            display: flex;
            .label{
                white-space: nowrap;
            }
        }
    }
</style>
