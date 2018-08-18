<template>
    <div class="popover" @click="xxx">
        <div class="content-wrapper">
            <slot name="content" v-if="visible"></slot>
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
        xxx(){
            this.visible = !this.visible
        }
    }
}
</script>

<style scoped lang="scss">
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper{
            position: absolute;
            left: 0;
            bottom: 100%;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0,0,0,.5);
        }
    }

</style>
