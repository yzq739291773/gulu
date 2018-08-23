<template>
    <div class="popover" @click="onClick">
        <div class="content-rapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluPopover',
    data(){
        return{
            visible:false
        }
    },
    methods:{
        onClick(){
            this.visible = !this.visible
        }
    }
}
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        position: relative;
        .content-rapper{
            position: absolute;
            left: 0;
            bottom: 100%;
            border: 1px solid red;
            box-shadow: 0 0 3px black;
        }
    }
</style>
