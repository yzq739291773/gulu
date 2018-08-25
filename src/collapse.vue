<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:"GuluCollapse",
    provide(){
        return{
            eventBus:this.eventBus
        }
    },
    data(){
        return{
            eventBus:new Vue()
        }
    }
}
</script>

<style lang="scss" scoped>
    $grey:#ddd;
    $border-radius:4px;
    .collapse{
        border: 1px solid $grey;
        border-radius: $border-radius;
        // border-bottom: none;
    }
</style>
