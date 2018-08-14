<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluRow'
}
</script>

<style scoped lang="scss">
    .row{
        display: inline-flex;
        flex-wrap: nowrap;
        width: 100%;
    }
</style>
