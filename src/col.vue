<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluCol',
    props:{
        span:{
            type:[Number, String]
        }
    }
}
</script>

<style lang="scss" scoped >
    .col {
            height: 50px;
            width: 100%;
            background-color: gray;
            border: 1px solid red;

            $class: col-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n}{
                    width: ($n / 24) * 100%;
                }
            }
        }
</style>
