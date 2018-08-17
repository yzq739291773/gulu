<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'GuluTabs',
    props:{
        selected:{
            type:String,
            default:'sports'
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal', 'vertical'].includes(value)
            }
        }
    },
    provide(){
        return{
            eventBus:this.eventBus
        }
    },
    data(){
        return{
            eventBus:new Vue()
        }
    },
    mounted(){
        console.log('tabs组件 触发事件')
        this.eventBus.$emit('update:selected',this.selected)
    },
    methods:{
    }
}
</script>

<style scoped lang="scss">
    .tabs{
        
    }
</style>
