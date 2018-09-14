<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source">
                <cascader-item :sourceItem="item"></cascader-item>
            </div>
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
    }

}
</script>

<style lang="scss" scoped>
    @import 'var.scss';

</style>
