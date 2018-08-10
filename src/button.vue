<template>
    <button class='g-button' :class="[`icon-${iconPosition}`]">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default{
        props:['icon','iconPosition']
    }
</script>
<style lang="scss">
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
    }
</style>
