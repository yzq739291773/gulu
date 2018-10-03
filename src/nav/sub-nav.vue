<template>
    <div class="g-sub-nav" :class="{active}" v-click-outside="close">
        <span class="g-sub-nav-label" @click="onClick">
            <slot name="title" ></slot>
            <span class="g-sub-nav-icon" :class="{open}">
                <g-icon name="right"></g-icon>
            </span>
        </span>
        <div class="g-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import ClickOutside from '../click-outside.js'
import Icon from '../icon/icon'
export default {
    name:'GuluSubNav',
    directives:{ClickOutside},
    inject:['root'],
    components:{
        'g-icon':Icon
    },
    props:{
        name:{
            type:String,
            required:true
        },
    },
    data(){
        return{
            open:false,
        }
    },
    computed:{
        active(){
            return this.root.namePath.indexOf(this.name)>=0 ? true: false
        }
    },
    methods:{
        close(){
            this.open = false;
        },
        onClick(){
            this.open = !this.open
        },
        updateNamePath(){
            this.active = true
            this.root.namePath.unshift(this.name)
            if(this.$parent.updateNamePath){
                this.$parent.updateNamePath()
            }else{
            }
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
        &-label{
            padding: 10px 20px;
            display: block;
        }
        &-icon{
            display: none;
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
    .g-sub-nav .g-sub-nav {
        &.active{
            &::after{
                display: none;
            }
        }
        .g-sub-nav-popover{
            top: 0;
            left: 100%;
            margin-left: 8px;
        }
        .g-sub-nav-label{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .g-sub-nav-icon{
            transition: transform .5s;
            display: inline-flex;
            margin-left: 1em;
            svg{
                fill: $light-color;
            }
            &.open{
                transform: rotate(180deg);
            }
        }
    }

</style>
