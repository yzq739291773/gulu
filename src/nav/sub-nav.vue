<template>
    <div class="g-sub-nav" :class="{active}">
        <span @click="onClick"><slot name="title" ></slot></span>
        <div class="g-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'GuluSubNav',
    props:{
        name:{
            type:String,
            required:true
        },
    },
    data(){
        return{
            open:false,
            active:false
        }
    },
    methods:{
        onClick(){
            this.open = !this.open
        },
        x(){
            console.log('xx')
            this.active = true
        }
    }
}
</script>

<style lang='scss' scoped>
    @import 'var';
    .g-sub-nav{
        position: relative;
        &.active{
            position: relative;
            &::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $blue;
                width: 100%;
            }
        }
        span{
            padding: 10px 20px;
            display: block;
        }
        .g-sub-nav-popover{
            background-color: white;
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 4px;
            white-space: nowrap;
            box-shadow: 0 0 3px fade-out($color: black, $amount: 0.8);
            font-size: $font-size;
            color: $light-color;
            min-width: 8em;
        }
    }
    .g-sub-nav .g-sub-nav .g-sub-nav-popover{
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
</style>
