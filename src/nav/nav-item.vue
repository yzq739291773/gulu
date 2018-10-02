<template>
    <div class="navItem">
        <h1>jskfjk</h1>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluNavItem',
    props:{
        name:{
            type:String,
            required:true
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
