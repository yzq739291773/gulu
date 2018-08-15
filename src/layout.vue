<template>
    <div class="layout">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .layout{
        border: 1px solid red;
        display: flex;
        flex-direction: column;
    }

</style>
