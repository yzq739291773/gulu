<template>
    <button @click="$emit('click')" class='g-button' :class="[`icon-${iconPosition}`]">
        <g-icon v-if="loading"  class="loading icon" name="loading"></g-icon>
        <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default{
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(val){
                    if(val !== 'left' && val !== 'right'){
                        return false;
                    }else{
                        return true;
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin{
        0%{
            transform: rotate(0deg)
        }
        100%{
            transform: rotate(360deg)
        }
    }
    .g-button {
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-content: center;
        &:hover {
            border-color: var(--border-color-hover);
        }
        
        &:active {
            background-color: var(--button-active-bg);
        }
        
        &:focus {
            outline: none;
        }
        .content{
            order:2;
        }
        .icon{
            order: 1;
            margin-right: .1em;
        }

        &.icon-right{
            .icon{
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
            .content{
                order:1;
            }
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>
