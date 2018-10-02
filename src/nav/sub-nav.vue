<template>
    <div class="g-sub-nav">
        <span @click="onClick"><slot name="title" ></slot></span>
        <div class="g-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'GuluSubNav',
    data(){
        return{
            open:false
        }
    },
    methods:{
        onClick(){
            console.log(22)
            this.open = !this.open
        }
    }
}
</script>

<style lang='scss' scoped>
    .g-sub-nav{
        position: relative;
        span{
            padding: 10px 20px;
            display: inline-block;
            vertical-align: top;
        }
        .g-sub-nav-popover{
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid red;
            white-space: nowrap;
        }
    }
</style>
