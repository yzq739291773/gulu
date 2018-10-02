<template>
    <div class="nav">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluNav',
    props:{
        selected:{
            type:Array,
            default:()=>[]
        },
        multiple:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
