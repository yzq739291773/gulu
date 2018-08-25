<template>
    
    <div class="collapseItem">
        <div class="title">
            {{title}}
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"GuluCollapseItem",
}
</script>

<style lang="scss" scoped>
    .collapseItem{
        
    }
</style>
